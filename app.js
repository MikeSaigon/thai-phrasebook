document.addEventListener('DOMContentLoaded', () => {
    const categoryNav = document.getElementById('categoryNav');
    const phraseList = document.getElementById('phraseList');
    let activeCategory = null;

    // Initialize App
    init();

    function init() {
        renderCategories();

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                filterPhrases(query);
            } else {
                // If search is cleared, go back to active category or first one
                const categoryId = activeCategory || (categories.length > 0 ? categories[0].id : null);
                if (categoryId) selectCategory(categoryId);
            }
        });

        // Select first category by default
        if (categories.length > 0) {
            selectCategory(categories[0].id);
        }
    }

    function filterPhrases(query) {
        // Hide category image during search
        document.getElementById('categoryImageContainer').style.display = 'none';

        // Deselect categories
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));

        const filtered = phrases.filter(p =>
            p.english.toLowerCase().includes(query) ||
            p.thai.includes(query) ||
            p.transliteration.toLowerCase().includes(query)
        );

        renderPhraseList(filtered);
    }

    function renderPhraseList(phrasesToRender) {
        phraseList.innerHTML = '';

        if (phrasesToRender.length === 0) {
            phraseList.innerHTML = '<div class="empty-state">No phrases found.</div>';
            return;
        }

        phrasesToRender.forEach(phrase => {
            const card = document.createElement('div');
            card.className = 'phrase-card';

            card.innerHTML = `
                <div class="phrase-content">
                    <div class="phrase-thai">${phrase.thai}</div>
                    <div class="phrase-transliteration">${phrase.transliteration}</div>
                    <div class="phrase-english">${phrase.english}</div>
                </div>
                <button class="audio-btn" aria-label="Play audio">
                    <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </button>
            `;

            const audioBtn = card.querySelector('.audio-btn');
            audioBtn.addEventListener('click', () => playAudio(phrase.audio, phrase.thai));

            phraseList.appendChild(card);
        });
    }

    function renderCategories() {
        categoryNav.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = cat.name;
            btn.dataset.id = cat.id;
            btn.addEventListener('click', () => selectCategory(cat.id));
            categoryNav.appendChild(btn);
        });
    }

    function selectCategory(categoryId) {
        activeCategory = categoryId;

        // Update UI
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.id === categoryId);
        });

        renderPhrases(categoryId);
        updateCategoryImage(categoryId);
    }

    function updateCategoryImage(categoryId) {
        const category = categories.find(c => c.id === categoryId);
        const imgContainer = document.getElementById('categoryImageContainer');
        const img = document.getElementById('categoryImage');

        if (category && category.image) {
            img.src = category.image;
            img.alt = category.name;
            imgContainer.style.display = 'block';
        } else {
            imgContainer.style.display = 'none';
        }
    }

    function renderPhrases(categoryId) {
        const filteredPhrases = phrases.filter(p => p.category === categoryId);
        renderPhraseList(filteredPhrases);
    }

    function playAudio(audioFile, phraseText) {
        // iOS Safari requires direct user interaction for TTS.
        // Since audio.play() is async, the fallback might be blocked.
        // We "prime" the TTS engine synchronously to ensure it's ready if we need to fallback.
        if ('speechSynthesis' in window) {
            const empty = new SpeechSynthesisUtterance('');
            empty.volume = 0;
            window.speechSynthesis.speak(empty);
        }

        // Try to play audio file first
        if (audioFile) {
            const audio = new Audio(`audio/${audioFile}`);

            // Visual feedback
            const buttons = document.querySelectorAll('.audio-btn');
            // We don't have direct access to the clicked button here easily without passing it, 
            // but we can just play the sound. 

            audio.play()
                .then(() => {
                    console.log(`Playing audio file: ${audioFile}`);
                    // Cancel the empty utterance if audio plays successfully (optional, but good cleanup)
                    window.speechSynthesis.cancel();
                })
                .catch(e => {
                    console.warn(`Audio file playback failed (${audioFile}), falling back to TTS:`, e);
                    speakText(phraseText);
                });
        } else {
            speakText(phraseText);
        }
    }

    function speakText(text) {
        if (!('speechSynthesis' in window)) {
            alert('Sorry, your browser does not support text-to-speech.');
            return;
        }

        // Cancel any currently playing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'th-TH'; // Thai language code
        utterance.rate = 0.9; // Slightly slower for better clarity

        utterance.onstart = () => {
            console.log(`Speaking (TTS): ${text}`);
        };

        utterance.onerror = (e) => {
            console.error('Speech synthesis error:', e);
        };

        window.speechSynthesis.speak(utterance);
    }
});
