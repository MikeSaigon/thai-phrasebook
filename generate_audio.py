import re
import json
import os
import subprocess
import asyncio

# Path to data.js
DATA_FILE = 'data.js'
AUDIO_DIR = 'audio'

# Ensure audio directory exists
if not os.path.exists(AUDIO_DIR):
    os.makedirs(AUDIO_DIR)

def extract_phrases():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find objects with thai and audio properties
    # This is a simple regex and might need adjustment if data.js format changes
    pattern = r"thai:\s*'(.*?)',\s*transliteration:.*?\s*english:.*?\s*audio:\s*'(.*?)'"
    matches = re.findall(pattern, content, re.DOTALL)
    
    return matches

async def generate_audio(thai_text, filename):
    output_path = os.path.join(AUDIO_DIR, filename)
    if os.path.exists(output_path):
        print(f"Skipping {filename}, already exists.")
        return

    print(f"Generating {filename} for '{thai_text}'...")
    
    # Use the edge-tts from the other project's venv
    edge_tts_path = "../pdf-narrator/venv/bin/edge-tts"
    
    cmd = [
        edge_tts_path,
        "--voice", "th-TH-PremwadeeNeural",
        "--rate=-30%", 
        "--text", thai_text,
        "--write-media", output_path
    ]
    
    try:
        subprocess.run(cmd, check=True, capture_output=True)
    except subprocess.CalledProcessError as e:
        print(f"Error generating {filename}: {e.stderr.decode()}")

async def main():
    phrases = extract_phrases()
    print(f"Found {len(phrases)} phrases.")
    
    # Process sequentially to avoid rate limits or issues
    for thai, audio_file in phrases:
        await generate_audio(thai, audio_file)

if __name__ == "__main__":
    asyncio.run(main())
