const categories = [
    { id: 'family', name: 'Family', image: '/thai-phrasebook/images/walking.jpeg' },
    { id: 'transport', name: 'Getting around Bangkok', image: '/thai-phrasebook/images/localtravel.jpeg' },
    { id: 'food', name: 'Eating out', image: '/thai-phrasebook/images/noodles.jpeg' },
    { id: 'friends', name: 'Meeting new friends', image: '/thai-phrasebook/images/drinks.jpeg' },
    { id: 'dishes', name: 'Famous Dishes', image: '/thai-phrasebook/images/seafood.jpeg' },
    { id: 'nightlife', name: 'Evening Out', image: '/thai-phrasebook/images/friends.jpeg' },
    { id: 'shopping', name: 'Shopping at Foodlands', image: '/thai-phrasebook/images/seafood.jpeg' },
    { id: 'fruits', name: 'Fruits', image: '/thai-phrasebook/images/fruit.jpeg' },
    { id: 'vegetables', name: 'Vegetables', image: '/thai-phrasebook/images/vegetables.JPG' },
    { id: 'household', name: 'Household Objects', image: '/thai-phrasebook/images/householdobjects.jpeg' },
    { id: 'infrastructure', name: 'Infrastructure', image: '/thai-phrasebook/images/infrastructure.jpeg' },
    { id: 'nature', name: 'Nature', image: '/thai-phrasebook/images/nature.jpeg' },
    { id: 'animals', name: 'Animals', image: '/thai-phrasebook/images/animals.jpeg' },
    { id: 'grammar', name: 'Basic Grammar', image: '/thai-phrasebook/images/grammar.jpeg', lessonId: 'tones' },
    { id: 'condo', name: 'At the Condo', image: '/thai-phrasebook/images/condo.jpeg' },
    { id: 'useful_phrases', name: 'Useful Phrases using the vocabulary learned in this app', image: '/thai-phrasebook/images/usefulphrases.jpeg' }
];

const phrases = [
    // Family
    {
        category: 'family',
        thai: 'พ่อ',
        transliteration: 'Pôr',
        english: 'Father',
        audio: 'father.mp3'
    },
    {
        category: 'family',
        thai: 'แม่',
        transliteration: 'Mâe',
        english: 'Mother',
        audio: 'mother.mp3'
    },
    {
        category: 'family',
        thai: 'พี่ชาย / น้องชาย',
        transliteration: 'Pêe chai / Nóng chai',
        english: 'Brother (Older / Younger)',
        audio: 'brother.mp3'
    },
    {
        category: 'family',
        thai: 'พี่สาว / น้องสาว',
        transliteration: 'Pêe sǎao / Nóng sǎao',
        english: 'Sister (Older / Younger)',
        audio: 'sister.mp3'
    },
    {
        category: 'family',
        thai: 'ปู่ / ตา',
        transliteration: 'Bpùu / Dtaa',
        english: 'Grandfather (Paternal / Maternal)',
        audio: 'grandfather.mp3'
    },
    {
        category: 'family',
        thai: 'ย่า / ยาย',
        transliteration: 'Yâa / Yaai',
        english: 'Grandmother (Paternal / Maternal)',
        audio: 'grandmother.mp3'
    },
    {
        category: 'family',
        thai: 'ลุง / อา / น้า',
        transliteration: 'Lung / Aa / Náa',
        english: 'Uncle',
        audio: 'uncle.mp3'
    },
    {
        category: 'family',
        thai: 'ป้า / อา / น้า',
        transliteration: 'Bpâa / Aa / Náa',
        english: 'Aunt',
        audio: 'aunt.mp3'
    },
    {
        category: 'family',
        thai: 'ลูกชาย',
        transliteration: 'Lûuk chai',
        english: 'Son',
        audio: 'son.mp3'
    },
    {
        category: 'family',
        thai: 'ลูกสาว',
        transliteration: 'Lûuk sǎao',
        english: 'Daughter',
        audio: 'daughter.mp3'
    },
    {
        category: 'family',
        thai: 'สามี',
        transliteration: 'Sǎa-mee',
        english: 'Husband',
        audio: 'husband.mp3'
    },
    {
        category: 'family',
        thai: 'ภรรยา',
        transliteration: 'Pan-rá-yaa',
        english: 'Wife',
        audio: 'wife.mp3'
    },
    {
        category: 'family',
        thai: 'เพื่อน',
        transliteration: 'Pûean',
        english: 'Friend',
        audio: 'friend.mp3'
    },
    {
        category: 'family',
        thai: 'แฟน',
        transliteration: 'Faen',
        english: 'Boyfriend / Girlfriend',
        audio: 'boyfriend_girlfriend.mp3'
    },

    // Getting around Bangkok
    {
        category: 'transport',
        thai: 'ไปที่ไหนครับ?',
        transliteration: 'Bpaii têe nǎi kráp?',
        english: 'Where are you going?',
        audio: 'where_going.mp3'
    },
    {
        category: 'transport',
        thai: 'ไปสถานีรถไฟฟ้าบีทีเอส',
        transliteration: 'Bpaii sà-tǎa-nee rót-fai-fáa BTS',
        english: 'Go to BTS Skytrain station',
        audio: 'go_bts.mp3'
    },
    {
        category: 'transport',
        thai: 'เลี้ยวซ้าย / เลี้ยวขวา',
        transliteration: 'Líao sáai / Líao kwǎa',
        english: 'Turn left / Turn right',
        audio: 'turn_left_right.mp3'
    },
    {
        category: 'transport',
        thai: 'หยุดตรงนี้',
        transliteration: 'Yùt dtrong née',
        english: 'Stop here',
        audio: 'stop_here.mp3'
    },
    {
        category: 'transport',
        thai: 'ตรงไปครับ',
        transliteration: 'Dtrong bpaii kráp',
        english: 'Go straight',
        audio: 'go_straight.mp3'
    },
    {
        category: 'transport',
        thai: 'ไกลไหมครับ?',
        transliteration: 'Glai mǎi kráp?',
        english: 'Is it far?',
        audio: 'is_it_far.mp3'
    },
    {
        category: 'transport',
        thai: 'ใกล้ๆ ครับ',
        transliteration: 'Glâi glâi kráp',
        english: 'It is near',
        audio: 'it_is_near.mp3'
    },
    {
        category: 'transport',
        thai: 'ไปสนามบินครับ',
        transliteration: 'Bpaii sà-nǎam bin kráp',
        english: 'Go to the airport',
        audio: 'go_airport.mp3'
    },
    {
        category: 'transport',
        thai: 'รถติดมาก',
        transliteration: 'Rót dtìt mâak',
        english: 'Traffic is very jammed',
        audio: 'traffic_jam.mp3'
    },
    {
        category: 'transport',
        thai: 'เท่าไหร่ครับ?',
        transliteration: 'Tâo-rài kráp?',
        english: 'How much?',
        audio: 'how_much.mp3'
    },
    {
        category: 'transport',
        thai: 'แพงเกินไปครับ',
        transliteration: 'Paeng gern bpaii kráp',
        english: 'Too expensive',
        audio: 'too_expensive.mp3'
    },
    {
        category: 'transport',
        thai: 'ขับช้าๆ หน่อยครับ',
        transliteration: 'Kàp cháa cháa nòi kráp',
        english: 'Please drive slower',
        audio: 'drive_slower.mp3'
    },
    {
        category: 'transport',
        thai: 'ขับเร็วๆ หน่อยครับ',
        transliteration: 'Kàp reo reo nòi kráp',
        english: 'Please drive faster',
        audio: 'drive_faster.mp3'
    },
    {
        category: 'transport',
        thai: 'ผมหลงทางครับ',
        transliteration: 'Pǒm lǒng taang kráp',
        english: 'I am lost',
        audio: 'i_am_lost.mp3'
    },

    // Eating out
    {
        category: 'food',
        thai: 'ขอเมนูหน่อยครับ',
        transliteration: 'Kǒr may-nuu nòi kráp',
        english: 'Can I have the menu, please?',
        audio: 'menu_please.mp3'
    },
    {
        category: 'food',
        thai: 'ไม่เผ็ด',
        transliteration: 'Mâi pèt',
        english: 'Not spicy',
        audio: 'not_spicy.mp3'
    },
    {
        category: 'food',
        thai: 'อร่อยมาก',
        transliteration: 'A-ròi mâak',
        english: 'Very delicious',
        audio: 'delicious.mp3'
    },
    {
        category: 'food',
        thai: 'เช็คบิลด้วยครับ',
        transliteration: 'Chék bin dûai kráp',
        english: 'Check bill, please',
        audio: 'check_bill.mp3'
    },
    {
        category: 'food',
        thai: 'ขอน้ำเปล่าครับ',
        transliteration: 'Kǒr náam bplàao kráp',
        english: 'Water please',
        audio: 'water_please.mp3'
    },
    {
        category: 'food',
        thai: 'ไม่ใส่น้ำตาลครับ',
        transliteration: 'Mâi sài náam-dtaan kráp',
        english: 'No sugar',
        audio: 'no_sugar.mp3'
    },
    {
        category: 'food',
        thai: 'ผมกินเจครับ',
        transliteration: 'Pǒm gin jay kráp',
        english: 'I eat vegetarian',
        audio: 'vegetarian.mp3'
    },
    {
        category: 'food',
        thai: 'ขอช้อนส้อมหน่อยครับ',
        transliteration: 'Kǒr chón sôm nòi kráp',
        english: 'Spoon and fork please',
        audio: 'spoon_fork.mp3'
    },
    {
        category: 'food',
        thai: 'ห้องน้ำอยู่ที่ไหนครับ?',
        transliteration: 'Hông-náam yùu têe nǎi kráp?',
        english: 'Where is the bathroom?',
        audio: 'bathroom.mp3'
    },
    {
        category: 'food',
        thai: 'ห่อกลับบ้านครับ',
        transliteration: 'Hòr glàp bâan kráp',
        english: 'Take away please',
        audio: 'take_away.mp3'
    },
    {
        category: 'food',
        thai: 'อิ่มแล้วครับ',
        transliteration: 'Ìm láeo kráp',
        english: 'I am full',
        audio: 'full.mp3'
    },
    {
        category: 'food',
        thai: 'หิวมากครับ',
        transliteration: 'Hǐu mâak kráp',
        english: 'I am very hungry',
        audio: 'hungry.mp3'
    },
    {
        category: 'food',
        thai: 'มีเมนูภาษาอังกฤษไหมครับ?',
        transliteration: 'Mee may-nuu paa-sǎa ang-grìt mǎi kráp?',
        english: 'Do you have an English menu?',
        audio: 'english_menu.mp3'
    },
    {
        category: 'food',
        thai: 'เอาน้ำแข็งด้วยครับ',
        transliteration: 'Ao náam-kǎeng dûai kráp',
        english: 'With ice please',
        audio: 'with_ice.mp3'
    },

    // Meeting new friends
    {
        category: 'friends',
        thai: 'สวัสดีครับ',
        transliteration: 'Sà-wàt-dee kráp',
        english: 'Hello',
        audio: 'hello.mp3'
    },
    {
        category: 'friends',
        thai: 'คุณชื่ออะไรครับ?',
        transliteration: 'Kun chûe a-rai kráp?',
        english: 'What is your name?',
        audio: 'what_name.mp3'
    },
    {
        category: 'friends',
        thai: 'ยินดีที่ได้รู้จัก',
        transliteration: 'Yin-dee têe dâi rúu-jàk',
        english: 'Nice to meet you',
        audio: 'nice_meet.mp3'
    },
    {
        category: 'friends',
        thai: 'สบายดีไหมครับ?',
        transliteration: 'Sà-baai dee mǎi kráp?',
        english: 'How are you?',
        audio: 'how_are_you.mp3'
    },
    {
        category: 'friends',
        thai: 'คุณมาจากที่ไหนครับ?',
        transliteration: 'Kun maa jàak têe nǎi kráp?',
        english: 'Where are you from?',
        audio: 'where_from.mp3'
    },
    {
        category: 'friends',
        thai: 'ผมมาจาก...',
        transliteration: 'Pǒm maa jàak...',
        english: 'I am from...',
        audio: 'i_am_from.mp3'
    },
    {
        category: 'friends',
        thai: 'คุณอายุเท่าไหร่ครับ?',
        transliteration: 'Kun aa-yú tâo-rài kráp?',
        english: 'How old are you?',
        audio: 'how_old.mp3'
    },
    {
        category: 'friends',
        thai: 'พูดภาษาอังกฤษได้ไหมครับ?',
        transliteration: 'Pûut paa-sǎa ang-grìt dâi mǎi kráp?',
        english: 'Do you speak English?',
        audio: 'speak_english.mp3'
    },
    {
        category: 'friends',
        thai: 'ผมพูดไทยได้นิดหน่อยครับ',
        transliteration: 'Pǒm pûut tai dâi nít-nòi kráp',
        english: 'I speak a little Thai',
        audio: 'speak_little_thai.mp3'
    },
    {
        category: 'friends',
        thai: 'โชคดีครับ',
        transliteration: 'Chôhk dee kráp',
        english: 'Good luck',
        audio: 'good_luck.mp3'
    },
    {
        category: 'friends',
        thai: 'แล้วเจอกันครับ',
        transliteration: 'Láeo jer gan kráp',
        english: 'See you later',
        audio: 'see_you_later.mp3'
    },
    {
        category: 'friends',
        thai: 'ไม่เป็นไรครับ',
        transliteration: 'Mâi bpen rai kráp',
        english: 'No problem / You\'re welcome',
        audio: 'no_problem.mp3'
    },
    {
        category: 'friends',
        thai: 'ขอโทษครับ',
        transliteration: 'Kǒr tôht kráp',
        english: 'Sorry / Excuse me',
        audio: 'sorry.mp3'
    },
    {
        category: 'friends',
        thai: 'ขอบคุณครับ',
        transliteration: 'Kòrp kun kráp',
        english: 'Thank you',
        audio: 'thank_you.mp3'
    },

    // Famous Dishes
    {
        category: 'dishes',
        thai: 'ผัดไทย',
        transliteration: 'Pàt tai',
        english: 'Pad Thai',
        audio: 'pad_thai.mp3'
    },
    {
        category: 'dishes',
        thai: 'ต้มยำกุ้ง',
        transliteration: 'Dtôm yam gûng',
        english: 'Tom Yum Goong (Spicy Shrimp Soup)',
        audio: 'tom_yum.mp3'
    },
    {
        category: 'dishes',
        thai: 'ส้มตำ',
        transliteration: 'Sôm dtam',
        english: 'Som Tum (Papaya Salad)',
        audio: 'som_tum.mp3'
    },
    {
        category: 'dishes',
        thai: 'แกงมัสมั่น',
        transliteration: 'Gaeng mát-sà-màn',
        english: 'Massaman Curry',
        audio: 'massaman.mp3'
    },
    {
        category: 'dishes',
        thai: 'แกงเขียวหวาน',
        transliteration: 'Gaeng kǐao wǎan',
        english: 'Green Curry',
        audio: 'green_curry.mp3'
    },
    {
        category: 'dishes',
        thai: 'ข้าวผัด',
        transliteration: 'Kâao pàt',
        english: 'Fried Rice',
        audio: 'fried_rice.mp3'
    },
    {
        category: 'dishes',
        thai: 'ผัดกะเพราหมูสับ',
        transliteration: 'Pàt gà-prao mǔu sàp',
        english: 'Basil Pork',
        audio: 'basil_pork.mp3'
    },
    {
        category: 'dishes',
        thai: 'ต้มข่าไก่',
        transliteration: 'Dtôm kàa gài',
        english: 'Tom Kha Gai (Chicken Coconut Soup)',
        audio: 'tom_kha.mp3'
    },
    {
        category: 'dishes',
        thai: 'ข้าวซอย',
        transliteration: 'Kâao soi',
        english: 'Khao Soi (Northern Curry Noodles)',
        audio: 'khao_soi.mp3'
    },
    {
        category: 'dishes',
        thai: 'ข้าวเหนียวมะม่วง',
        transliteration: 'Kâao nǐao má-mûang',
        english: 'Mango Sticky Rice',
        audio: 'mango_sticky_rice.mp3'
    },
    {
        category: 'dishes',
        thai: 'ข้าวมันไก่',
        transliteration: 'Kâao man gài',
        english: 'Chicken Rice',
        audio: 'chicken_rice.mp3'
    },
    {
        category: 'dishes',
        thai: 'ก๋วยเตี๋ยวเรือ',
        transliteration: 'Gǔai-dtǐao ruea',
        english: 'Boat Noodles',
        audio: 'boat_noodles.mp3'
    },
    {
        category: 'dishes',
        thai: 'ลาบหมู',
        transliteration: 'Lâap mǔu',
        english: 'Spicy Minced Pork Salad',
        audio: 'laab_moo.mp3'
    },
    {
        category: 'dishes',
        thai: 'แกงส้ม',
        transliteration: 'Gaeng sôm',
        english: 'Sour Curry',
        audio: 'sour_curry.mp3'
    },
    {
        category: 'dishes',
        thai: 'ปลากะพงนึ่งมะนาว',
        transliteration: 'Bplaa gà-pong nûeng má-naao',
        english: 'Steamed Sea Bass with Lime',
        audio: 'steamed_fish.mp3'
    },
    {
        category: 'dishes',
        thai: 'คอหมูย่าง',
        transliteration: 'Kor mǔu yâang',
        english: 'Grilled Pork Neck',
        audio: 'grilled_pork_neck.mp3'
    },
    {
        category: 'dishes',
        thai: 'ยำวุ้นเส้น',
        transliteration: 'Yam wún sên',
        english: 'Glass Noodle Salad',
        audio: 'glass_noodle_salad.mp3'
    },
    {
        category: 'dishes',
        thai: 'ไข่เจียวหมูสับ',
        transliteration: 'Kài jiao mǔu sàp',
        english: 'Omelet with Minced Pork',
        audio: 'omelet.mp3'
    },
    {
        category: 'dishes',
        thai: 'ชาเย็น',
        transliteration: 'Chaa yen',
        english: 'Thai Iced Tea',
        audio: 'thai_tea.mp3'
    },
    {
        category: 'dishes',
        thai: 'กาแฟเย็น',
        transliteration: 'Gaa-fae yen',
        english: 'Iced Coffee',
        audio: 'iced_coffee.mp3'
    },

    // Evening Out
    {
        category: 'nightlife',
        thai: 'ไปตลาดนัดกลางคืนกันครับ',
        transliteration: 'Bpaii dtà-làat nát glaang-kuen gan kráp',
        english: 'Let\'s go to the night market',
        audio: 'night_market.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ผมอยากดูไฟสวยๆครับ',
        transliteration: 'Pǒm yàak duu fai sǔai sǔai kráp',
        english: 'I want to see the lights',
        audio: 'see_lights.mp3'
    },
    {
        category: 'nightlife',
        thai: 'มีโรงหนังแถวนี้ไหมครับ?',
        transliteration: 'Mee rohng-nǎng tǎeo née mǎi kráp?',
        english: 'Is there a cinema nearby?',
        audio: 'cinema_nearby.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ไปล่องเรือแม่น้ำเจ้าพระยากันครับ',
        transliteration: 'Bpaii lông ruea mâe-náam Jâo-prá-yaa gan kráp',
        english: 'Let\'s go for a river cruise',
        audio: 'river_cruise.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ร้านของหวานอยู่ที่ไหนครับ?',
        transliteration: 'Ráan kǒng-wǎan yùu têe nǎi kráp?',
        english: 'Where can we find dessert?',
        audio: 'find_dessert.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ไปเอเชียทีคกันครับ',
        transliteration: 'Bpaii Asiatique gan kráp',
        english: 'Let\'s go to Asiatique',
        audio: 'go_asiatique.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ผมอยากซื้อของที่ระลึกครับ',
        transliteration: 'Pǒm yàak súe kǒng têe rá-lúek kráp',
        english: 'I want to buy souvenirs',
        audio: 'buy_souvenirs.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ไปเยาวราชกันครับ',
        transliteration: 'Bpaii Yao-wá-râat gan kráp',
        english: 'Let\'s go to Chinatown',
        audio: 'go_chinatown.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ไปดูวิวกันครับ',
        transliteration: 'Bpaii duu wiu gan kráp',
        english: 'Let\'s go see the view',
        audio: 'see_view.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ไปเดินเล่นที่ไหนดีครับ?',
        transliteration: 'Bpaii dern lêhn têe nǎi dee kráp?',
        english: 'Where can we go for a walk?',
        audio: 'where_walk.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ไปเดินเล่นที่สุขุมวิทกันครับ',
        transliteration: 'Bpaii dern lêhn têe Sù-kǔm-wít gan kráp',
        english: 'Let\'s walk down Sukhumvit',
        audio: 'walk_sukhumvit.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ปิดกี่โมงครับ?',
        transliteration: 'Bpìt gèe mohng kráp?',
        english: 'What time does it close?',
        audio: 'what_time_close.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ผมชอบเพลงนี้ครับ',
        transliteration: 'Pǒm chôrp plehn née kráp',
        english: 'I like this song',
        audio: 'like_song.mp3'
    },
    {
        category: 'nightlife',
        thai: 'คุณสวยมากครับ',
        transliteration: 'Kun sǔai mâak kráp',
        english: 'You are very beautiful',
        audio: 'beautiful.mp3'
    },
    {
        category: 'nightlife',
        thai: 'ถนนข้าวสารไกลไหมครับ?',
        transliteration: 'Tà-nǒn Kâao-sǎan glai mǎi kráp?',
        english: 'Is Khaosan Road far?',
        audio: 'khaosan_far.mp3'
    },

    // Shopping at Foodlands
    {
        category: 'shopping',
        thai: 'น้ำดื่มอยู่ที่ไหนครับ?',
        transliteration: 'Náam dèum yùu têe nǎi kráp?',
        english: 'Where is the bottled water?',
        audio: 'bottled_water.mp3'
    },
    {
        category: 'shopping',
        thai: 'ขอกุ้ง 200 กรัมครับ',
        transliteration: 'Kǒr gûng sǒng-rói gram kráp',
        english: 'I want 200 grams of shrimp',
        audio: 'shrimp_200g.mp3'
    },
    {
        category: 'shopping',
        thai: 'ขอถุงหน่อยครับ',
        transliteration: 'Kǒr tǔng nòi kráp',
        english: 'I need a bag',
        audio: 'need_bag.mp3'
    },
    {
        category: 'shopping',
        thai: 'อะโวคาโดสุกหรือยังครับ?',
        transliteration: 'A-wo-kaa-dôh sùk rěu yang kráp?',
        english: 'Are the avocados ripe?',
        audio: 'avocado_ripe.mp3'
    },
    {
        category: 'shopping',
        thai: 'น้ำแข็งอยู่ที่ไหนครับ?',
        transliteration: 'Náam kǎeng yùu têe nǎi kráp?',
        english: 'Where is the ice?',
        audio: 'where_ice.mp3'
    },
    {
        category: 'shopping',
        thai: 'เอากล้วย มะม่วง แตงโมครับ',
        transliteration: 'Ao glûai, má-mûang, dtaeng-moh kráp',
        english: 'I would like bananas, mangos, watermelon',
        audio: 'fruits.mp3'
    },

    // Fruits
    {
        category: 'fruits',
        thai: 'มะม่วง',
        transliteration: 'Má-mûang',
        english: 'Mango',
        audio: 'mango.mp3'
    },
    {
        category: 'fruits',
        thai: 'มะพร้าว',
        transliteration: 'Má-práao',
        english: 'Coconut',
        audio: 'coconut.mp3'
    },
    {
        category: 'fruits',
        thai: 'กล้วย',
        transliteration: 'Glûai',
        english: 'Banana',
        audio: 'banana.mp3'
    },
    {
        category: 'fruits',
        thai: 'มะละกอ',
        transliteration: 'Má-lá-gor',
        english: 'Papaya',
        audio: 'papaya.mp3'
    },
    {
        category: 'fruits',
        thai: 'แตงโม',
        transliteration: 'Dtaeng-moh',
        english: 'Watermelon',
        audio: 'watermelon.mp3'
    },
    {
        category: 'fruits',
        thai: 'สับปะรด',
        transliteration: 'Sàp-bpà-rót',
        english: 'Pineapple',
        audio: 'pineapple.mp3'
    },
    {
        category: 'fruits',
        thai: 'ทุเรียน',
        transliteration: 'Tú-rian',
        english: 'Durian',
        audio: 'durian.mp3'
    },
    {
        category: 'fruits',
        thai: 'มังคุด',
        transliteration: 'Mang-kút',
        english: 'Mangosteen',
        audio: 'mangosteen.mp3'
    },
    {
        category: 'fruits',
        thai: 'เงาะ',
        transliteration: 'Ngór',
        english: 'Rambutan',
        audio: 'rambutan.mp3'
    },
    {
        category: 'fruits',
        thai: 'แก้วมังกร',
        transliteration: 'Gâeo-mang-gon',
        english: 'Dragon fruit',
        audio: 'dragon_fruit.mp3'
    },
    {
        category: 'fruits',
        thai: 'ฝรั่ง',
        transliteration: 'Fà-ràng',
        english: 'Guava',
        audio: 'guava.mp3'
    },
    {
        category: 'fruits',
        thai: 'ชมพู่',
        transliteration: 'Chom-pûu',
        english: 'Rose Apple',
        audio: 'rose_apple.mp3'
    },
    {
        category: 'fruits',
        thai: 'ลำไย',
        transliteration: 'Lam-yai',
        english: 'Longan',
        audio: 'longan.mp3'
    },

    // At the Condo
    {
        category: 'condo',
        thai: 'ค่าส่วนกลางจ่ายเมื่อไหร่ครับ',
        transliteration: 'Kâa sùan-glaang jàai mûea-rài kráp',
        english: 'When is the management Fee due?',
        audio: 'management_fee.mp3'
    },
    {
        category: 'condo',
        thai: 'สระว่ายน้ำเปิดไหมครับ',
        transliteration: 'Sà-wâai-náam bpèrt mǎi kráp',
        english: 'Is the swimming pool open?',
        audio: 'pool_open.mp3'
    },
    {
        category: 'condo',
        thai: 'ขอพบผู้จัดการหน่อยครับ',
        transliteration: 'Kǒr póp pûu-jàt-gaan nòi kráp',
        english: 'Can I speak to the manager?',
        audio: 'speak_manager.mp3'
    },
    {
        category: 'condo',
        thai: 'ช่วยเรียกช่างมาดูห้องหน่อยครับ',
        transliteration: 'Chûai rîak châang maa duu hông nòi kráp',
        english: 'I need the engineer to look at something in my condo',
        audio: 'call_engineer.mp3'
    },
    {
        category: 'condo',
        thai: 'ลิฟต์ใช้ได้ไหมครับ',
        transliteration: 'Líp chái dâi mǎi kráp',
        english: 'Is the elevator working?',
        audio: 'elevator_working.mp3'
    },
    {
        category: 'condo',
        thai: 'แอร์เสียครับ',
        transliteration: 'Air sǐa kráp',
        english: 'My air conditioner is not working',
        audio: 'ac_broken.mp3'
    },
    {
        category: 'condo',
        thai: 'ท่อน้ำตันครับ',
        transliteration: 'Tôr-náam dtan kráp',
        english: 'The drain is blocked',
        audio: 'drain_blocked.mp3'
    },
    {
        category: 'condo',
        thai: 'ส้วมเสียครับ',
        transliteration: 'Sûam sǐa kráp',
        english: 'My toilet is broken',
        audio: 'toilet_broken.mp3'
    },
    {
        category: 'condo',
        thai: 'มีน้ำรั่วครับ',
        transliteration: 'Mee náam rûa kráp',
        english: 'I have a water leak',
        audio: 'water_leak.mp3'
    },
    {
        category: 'condo',
        thai: 'ช่วยมาทำความสะอาดห้องหน่อยครับ',
        transliteration: 'Chûai maa tam-kwaam-sà-àat hông nòi kráp',
        english: 'Can you come and clean my apartment?',
        audio: 'clean_room.mp3'
    },
    {
        category: 'condo',
        thai: 'เครื่องชงกาแฟเสียครับ',
        transliteration: 'Krûeang chong gaa-fae sǐa kráp',
        english: 'My coffee maker is broken',
        audio: 'coffee_maker_broken.mp3'
    },
    {
        category: 'fruits',
        thai: 'ลำไย',
        transliteration: 'Lam-yai',
        english: 'Longan',
        audio: 'longan.mp3'
    },
    {
        category: 'fruits',
        thai: 'ลิ้นจี่',
        transliteration: 'Lín-jèe',
        english: 'Lychee',
        audio: 'lychee.mp3'
    },
    {
        category: 'fruits',
        thai: 'ขนุน',
        transliteration: 'Kà-nǔn',
        english: 'Jackfruit',
        audio: 'jackfruit.mp3'
    },
    {
        category: 'fruits',
        thai: 'ส้มโอ',
        transliteration: 'Sôm-oh',
        english: 'Pomelo',
        audio: 'pomelo.mp3'
    },
    {
        category: 'fruits',
        thai: 'มะขาม',
        transliteration: 'Má-kǎam',
        english: 'Tamarind',
        audio: 'tamarind.mp3'
    },
    {
        category: 'fruits',
        thai: 'น้อยหน่า',
        transliteration: 'Nói-nàa',
        english: 'Custard Apple',
        audio: 'custard_apple.mp3'
    },
    {
        category: 'fruits',
        thai: 'เสาวรส',
        transliteration: 'Sǎo-wá-rót',
        english: 'Passion Fruit',
        audio: 'passion_fruit.mp3'
    },
    {
        category: 'fruits',
        thai: 'ส้ม',
        transliteration: 'Sôm',
        english: 'Orange',
        audio: 'orange.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ผักชี',
        transliteration: 'Pàk-chee',
        english: 'Coriander / Cilantro',
        audio: 'coriander.mp3'
    },

    // Household Objects
    {
        category: 'household',
        thai: 'เก้าอี้',
        transliteration: 'Gâo-êe',
        english: 'Chair',
        audio: 'chair.mp3'
    },
    {
        category: 'household',
        thai: 'โต๊ะ',
        transliteration: 'Dtó',
        english: 'Table',
        audio: 'table.mp3'
    },
    {
        category: 'household',
        thai: 'โซฟา',
        transliteration: 'So-faa',
        english: 'Sofa',
        audio: 'sofa.mp3'
    },
    {
        category: 'household',
        thai: 'ตู้เย็น',
        transliteration: 'Dtûu-yen',
        english: 'Fridge',
        audio: 'fridge.mp3'
    },
    {
        category: 'household',
        thai: 'เตาอบ',
        transliteration: 'Dtao-òp',
        english: 'Oven',
        audio: 'oven.mp3'
    },
    {
        category: 'household',
        thai: 'เตาแก๊ส',
        transliteration: 'Dtao-gáet',
        english: 'Stove',
        audio: 'stove.mp3'
    },
    {
        category: 'household',
        thai: 'หม้อ',
        transliteration: 'Môr',
        english: 'Pot',
        audio: 'pot.mp3'
    },
    {
        category: 'household',
        thai: 'วิทยุ',
        transliteration: 'Wít-tá-yú',
        english: 'Radio',
        audio: 'radio.mp3'
    },
    {
        category: 'household',
        thai: 'พื้น',
        transliteration: 'Púen',
        english: 'Floor',
        audio: 'floor.mp3'
    },
    {
        category: 'household',
        thai: 'ผ้าม่าน',
        transliteration: 'Pâa-mâan',
        english: 'Curtain',
        audio: 'curtain.mp3'
    },
    {
        category: 'household',
        thai: 'หน้าต่าง',
        transliteration: 'Nâa-dtàang',
        english: 'Window',
        audio: 'window.mp3'
    },
    // Vegetables
    {
        category: 'vegetables',
        thai: 'ผักบุ้ง',
        transliteration: 'Pàk-bûng',
        english: 'Morning Glory',
        audio: 'morning_glory.mp3'
    },
    {
        category: 'vegetables',
        thai: 'คะน้า',
        transliteration: 'Ká-náa',
        english: 'Chinese Kale',
        audio: 'chinese_kale.mp3'
    },
    {
        category: 'vegetables',
        thai: 'แตงกวา',
        transliteration: 'Dtaeng-gwaa',
        english: 'Cucumber',
        audio: 'cucumber.mp3'
    },
    {
        category: 'vegetables',
        thai: 'มะเขือเทศ',
        transliteration: 'Má-kěua-têht',
        english: 'Tomato',
        audio: 'tomato.mp3'
    },
    {
        category: 'vegetables',
        thai: 'หัวหอม',
        transliteration: 'Hǔa-hǒm',
        english: 'Onion',
        audio: 'onion.mp3'
    },
    {
        category: 'vegetables',
        thai: 'กระเทียม',
        transliteration: 'Grà-tiam',
        english: 'Garlic',
        audio: 'garlic.mp3'
    },
    {
        category: 'vegetables',
        thai: 'พริก',
        transliteration: 'Prík',
        english: 'Chili',
        audio: 'chili.mp3'
    },
    {
        category: 'vegetables',
        thai: 'มะนาว',
        transliteration: 'Má-naao',
        english: 'Lime',
        audio: 'lime.mp3'
    },
    {
        category: 'vegetables',
        thai: 'กะเพรา',
        transliteration: 'Gà-prao',
        english: 'Holy Basil',
        audio: 'holy_basil.mp3'
    },
    {
        category: 'vegetables',
        thai: 'มะเขือ',
        transliteration: 'Má-kěua',
        english: 'Eggplant',
        audio: 'eggplant.mp3'
    },
    {
        category: 'vegetables',
        thai: 'กะหล่ำปลี',
        transliteration: 'Gà-làm-bplee',
        english: 'Cabbage',
        audio: 'cabbage.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ถั่วฝักยาว',
        transliteration: 'Tùa-fàk-yaao',
        english: 'Long Bean',
        audio: 'long_bean.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ฟักทอง',
        transliteration: 'Fák-tong',
        english: 'Pumpkin',
        audio: 'pumpkin.mp3'
    },
    {
        category: 'vegetables',
        thai: 'เห็ด',
        transliteration: 'Hèt',
        english: 'Mushroom',
        audio: 'mushroom.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ข้าวโพด',
        transliteration: 'Kâao-pôht',
        english: 'Corn',
        audio: 'corn.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ตะไคร้',
        transliteration: 'Dtà-krái',
        english: 'Lemongrass',
        audio: 'lemongrass.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ข่า',
        transliteration: 'Kàa',
        english: 'Galangal',
        audio: 'galangal.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ใบมะกรูด',
        transliteration: 'Bai má-grùut',
        english: 'Kaffir Lime Leaf',
        audio: 'kaffir_lime.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ถั่วงอก',
        transliteration: 'Tùa-ngôrk',
        english: 'Bean Sprouts',
        audio: 'bean_sprouts.mp3'
    },
    {
        category: 'vegetables',
        thai: 'บรอกโคลี',
        transliteration: 'Bròk-koh-lee',
        english: 'Broccoli',
        audio: 'broccoli.mp3'
    },

    // Additional Phrases - Household
    {
        category: 'household',
        thai: 'พื้นสกปรก',
        transliteration: 'Púen sòk-gà-bpròk',
        english: 'The floor is dirty',
        audio: 'floor_dirty.mp3'
    },
    {
        category: 'household',
        thai: 'ช่วยเปิดหน้าต่างหน่อยครับ',
        transliteration: 'Chûai bpèrt nâa-dtàang nòi kráp',
        english: 'Please open the window',
        audio: 'open_window.mp3'
    },
    {
        category: 'household',
        thai: 'ช่วยปิดประตูหน่อยครับ',
        transliteration: 'Chûai bpìt bprà-dtuu nòi kráp',
        english: 'Please close the door',
        audio: 'close_door.mp3'
    },
    {
        category: 'household',
        thai: 'แอร์เสีย',
        transliteration: 'Ae sǐa',
        english: 'The air conditioner is broken',
        audio: 'ac_broken.mp3'
    },

    // Additional Phrases - Fruits
    {
        category: 'fruits',
        thai: 'มะม่วงนี้หวาน',
        transliteration: 'Má-mûang née wǎan',
        english: 'This mango is sweet',
        audio: 'mango_sweet.mp3'
    },
    {
        category: 'fruits',
        thai: 'อันนี้เปรี้ยวไหมครับ?',
        transliteration: 'An née bprîao mǎi kráp?',
        english: 'Is this sour?',
        audio: 'is_sour.mp3'
    },
    {
        category: 'fruits',
        thai: 'เอา 1 กิโลครับ',
        transliteration: 'Ao nèung gì-loh kráp',
        english: 'I want 1 kilo',
        audio: 'one_kilo.mp3'
    },
    {
        category: 'fruits',
        thai: 'ชิมได้ไหมครับ?',
        transliteration: 'Chim dâi mǎi kráp?',
        english: 'Can I taste it?',
        audio: 'can_taste.mp3'
    },

    // Additional Phrases - Vegetables
    {
        category: 'vegetables',
        thai: 'ผมไม่กินเผ็ด',
        transliteration: 'Pǒm mâi gin pèt',
        english: 'I don\'t eat spicy',
        audio: 'dont_eat_spicy.mp3'
    },
    {
        category: 'vegetables',
        thai: 'มีผักชีไหมครับ?',
        transliteration: 'Mee pàk-chee mǎi kráp?',
        english: 'Do you have coriander?',
        audio: 'have_coriander.mp3'
    },
    {
        category: 'vegetables',
        thai: 'ผักสด',
        transliteration: 'Pàk sòt',
        english: 'Fresh vegetables',
        audio: 'fresh_vegetables.mp3'
    },

    // Additional Phrases - Family
    {
        category: 'family',
        thai: 'นี่คือพ่อของผม',
        transliteration: 'Nêe keu pôr kǒng pǒm',
        english: 'This is my father',
        audio: 'this_is_father.mp3'
    },
    {
        category: 'family',
        thai: 'คุณมีพี่น้องไหมครับ?',
        transliteration: 'Kun mee pêe-nóng mǎi kráp?',
        english: 'Do you have siblings?',
        audio: 'have_siblings.mp3'
    },
    {
        category: 'family',
        thai: 'ผมมีลูก 2 คน',
        transliteration: 'Pǒm mee lûuk sǒng kon',
        english: 'I have 2 children',
        audio: 'have_2_children.mp3'
    },

    // Additional Phrases - Famous Dishes
    {
        category: 'dishes',
        thai: 'ขอสั่งผัดไทยครับ',
        transliteration: 'Kǒr sàng Pàt-tai kráp',
        english: 'I want to order Pad Thai',
        audio: 'order_pad_thai.mp3'
    },
    {
        category: 'dishes',
        thai: 'เผ็ดไหมครับ?',
        transliteration: 'Pèt mǎi kráp?',
        english: 'Is it spicy?',
        audio: 'is_spicy.mp3'
    },
    {
        category: 'dishes',
        thai: 'อร่อยมาก',
        transliteration: 'A-ròi mâak',
        english: 'Delicious!',
        audio: 'delicious_excl.mp3'
    },

    // Useful Phrases using the vocabulary learned in this app
    {
        category: 'useful_phrases',
        thai: 'พ่อของผมชอบกินผัดไทย',
        transliteration: 'Pôr kǒng pǒm chôrp gin Pàt-tai',
        english: 'My father likes to eat Pad Thai',
        audio: 'father_likes_padthai.mp3'
    },
    {
        category: 'useful_phrases',
        thai: 'ผมอยากซื้อมะม่วง 1 กิโลครับ',
        transliteration: 'Pǒm yàak súe má-mûang nèung gì-loh kráp',
        english: 'I want to buy 1 kilo of mangos',
        audio: 'buy_mango_1kilo.mp3'
    },
    {
        category: 'useful_phrases',
        thai: 'เก้าอี้อยู่ใกล้หน้าต่าง',
        transliteration: 'Gâo-êe yùu glâi nâa-dtàang',
        english: 'The chair is near the window',
        audio: 'chair_near_window.mp3'
    },
    {
        category: 'useful_phrases',
        thai: 'ช่วยพาไปตลาดนัดกลางคืนหน่อยได้ไหมครับ?',
        transliteration: 'Chûai paa bpaii dtà-làat nát glaang-kuen nòi dâi mǎi kráp?',
        english: 'Can you take me to the night market?',
        audio: 'take_me_night_market.mp3'
    },
    {
        category: 'useful_phrases',
        thai: 'ต้มยำกุ้งนี้อร่อยมาก',
        transliteration: 'Dtôm yam gûng née a-ròi mâak',
        english: 'This Tom Yum Goong is very delicious',
        audio: 'tomyum_delicious.mp3'
    },
    {
        category: 'useful_phrases',
        thai: 'ผมจะไปเจอเพื่อนที่ร้านอาหาร',
        transliteration: 'Pǒm jà bpaii jer pûean têe ráan aa-hǎan',
        english: 'I am meeting a friend at the restaurant',
        audio: 'meet_friend_restaurant.mp3'
    },
    {
        category: 'useful_phrases',
        thai: 'มีผักสดไหมครับ?',
        transliteration: 'Mee pàk sòt mǎi kráp?',
        english: 'Do you have fresh vegetables?',
        audio: 'have_fresh_veg.mp3'
    },
    {
        category: 'useful_phrases',
        thai: 'แม่อยู่ที่บ้าน',
        transliteration: 'Mâe yùu têe bâan',
        english: 'My mother is at home',
        audio: 'mother_at_home.mp3'
    },

    // Basic Grammar
    {
        category: 'grammar',
        thai: 'ฉัน กิน ข้าว',
        transliteration: 'Chǎn gin kâao',
        english: 'Subject + Verb + Object (I eat rice)',
        audio: 'grammar_svo.mp3'
    },
    {
        category: 'grammar',
        thai: 'แมว สีดำ',
        transliteration: 'Maew sǐi-dam',
        english: 'Noun + Adjective (Cat black)',
        audio: 'grammar_adj.mp3'
    },
    {
        category: 'grammar',
        thai: 'ไป ไหน?',
        transliteration: 'Bpaii nǎi?',
        english: 'Statement + Question Word (Go where?)',
        audio: 'grammar_question.mp3'
    },
    {
        category: 'grammar',
        thai: 'ครับ / ค่ะ',
        transliteration: 'Kráp / Kâ',
        english: 'Polite Particles (Male / Female)',
        audio: 'grammar_polite.mp3'
    },
    {
        category: 'grammar',
        thai: 'กิน แล้ว',
        transliteration: 'Gin láeo',
        english: 'Past Tense: Verb + "Already" (Eat already)',
        audio: 'grammar_past.mp3'
    },
    {
        category: 'grammar',
        thai: 'จะ ไป',
        transliteration: 'Jà bpaii',
        english: 'Future Tense: "Will" + Verb (Will go)',
        audio: 'grammar_future.mp3'
    },
    {
        category: 'grammar',
        thai: 'ไม่ เผ็ด',
        transliteration: 'Mâi pèt',
        english: 'Negation: "No" + Adjective/Verb (Not spicy)',
        audio: 'grammar_negation.mp3'
    },

    // Infrastructure
    {
        category: 'infrastructure',
        thai: 'ธนาคาร',
        transliteration: 'Tá-naa-kaan',
        english: 'Bank',
        audio: 'bank.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'ที่ทำงาน',
        transliteration: 'Têe tam-ngaan',
        english: 'Office / Workplace',
        audio: 'office.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'คอนโด',
        transliteration: 'Con-doh',
        english: 'Condo',
        audio: 'condo.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'อพาร์ตเมนต์',
        transliteration: 'A-pâat-mén',
        english: 'Apartment',
        audio: 'apartment.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'สะพาน',
        transliteration: 'Sà-paan',
        english: 'Bridge',
        audio: 'bridge.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'โรงพยาบาล',
        transliteration: 'Rohng pá-yaa-baan',
        english: 'Hospital',
        audio: 'hospital.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'สถานีตำรวจ',
        transliteration: 'Sà-tǎa-nee dtam-rùat',
        english: 'Police Station',
        audio: 'police_station.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'โรงเรียน',
        transliteration: 'Rohng rian',
        english: 'School',
        audio: 'school.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'โรงแรม',
        transliteration: 'Rohng raem',
        english: 'Hotel',
        audio: 'hotel.mp3'
    },
    {
        category: 'infrastructure',
        thai: 'สวนสาธารณะ',
        transliteration: 'Sǔan sǎa-taa-rá-ná',
        english: 'Park',
        audio: 'park.mp3'
    },

    // Nature
    {
        category: 'nature',
        thai: 'ภูเขา',
        transliteration: 'Puu-kǎo',
        english: 'Mountain',
        audio: 'mountain.mp3'
    },
    {
        category: 'nature',
        thai: 'แม่น้ำ',
        transliteration: 'Mâe-náam',
        english: 'River',
        audio: 'river.mp3'
    },
    {
        category: 'nature',
        thai: 'ทะเล',
        transliteration: 'Tá-lay',
        english: 'Sea',
        audio: 'sea.mp3'
    },
    {
        category: 'nature',
        thai: 'พระอาทิตย์',
        transliteration: 'Prá aa-tít',
        english: 'Sun',
        audio: 'sun.mp3'
    },
    {
        category: 'nature',
        thai: 'พระจันทร์',
        transliteration: 'Prá jan',
        english: 'Moon',
        audio: 'moon.mp3'
    },
    {
        category: 'nature',
        thai: 'ฝน',
        transliteration: 'Fǒn',
        english: 'Rain',
        audio: 'rain.mp3'
    },
    {
        category: 'nature',
        thai: 'ต้นไม้',
        transliteration: 'Dtôn-mái',
        english: 'Tree',
        audio: 'tree.mp3'
    },
    {
        category: 'nature',
        thai: 'ดอกไม้',
        transliteration: 'Dòrk-mái',
        english: 'Flower',
        audio: 'flower.mp3'
    },
    {
        category: 'nature',
        thai: 'ท้องฟ้า',
        transliteration: 'Tóng-fáa',
        english: 'Sky',
        audio: 'sky.mp3'
    },
    {
        category: 'nature',
        thai: 'น้ำตก',
        transliteration: 'Náam-dtòk',
        english: 'Waterfall',
        audio: 'waterfall.mp3'
    },

    // Animals
    {
        category: 'animals',
        thai: 'หมา',
        transliteration: 'Mǎa',
        english: 'Dog',
        audio: 'dog.mp3'
    },
    {
        category: 'animals',
        thai: 'แมว',
        transliteration: 'Maew',
        english: 'Cat',
        audio: 'cat.mp3'
    },
    {
        category: 'animals',
        thai: 'นก',
        transliteration: 'Nók',
        english: 'Bird',
        audio: 'bird.mp3'
    },
    {
        category: 'animals',
        thai: 'ปลา',
        transliteration: 'Bplaa',
        english: 'Fish',
        audio: 'fish.mp3'
    },
    {
        category: 'animals',
        thai: 'ช้าง',
        transliteration: 'Cháang',
        english: 'Elephant',
        audio: 'elephant.mp3'
    },
    {
        category: 'animals',
        thai: 'ลิง',
        transliteration: 'Ling',
        english: 'Monkey',
        audio: 'monkey.mp3'
    },
    {
        category: 'animals',
        thai: 'งู',
        transliteration: 'Nguu',
        english: 'Snake',
        audio: 'snake.mp3'
    },
    {
        category: 'animals',
        thai: 'ยุง',
        transliteration: 'Yung',
        english: 'Mosquito',
        audio: 'mosquito.mp3'
    },
    {
        category: 'animals',
        thai: 'ไก่',
        transliteration: 'Gài',
        english: 'Chicken',
        audio: 'chicken.mp3'
    },
    {
        category: 'animals',
        thai: 'ควาย',
        transliteration: 'Kwaai',
        english: 'Buffalo',
        audio: 'buffalo.mp3'
    }
];

const grammarLessons = {
    tones: {
        title: "Introduction to Thai Tones",
        content: `
            <div class="lesson-content">
                <p>Thai is a tonal language, which means the pitch you use when saying a word changes its meaning. There are 5 tones in Thai:</p>
                
                <div class="tone-list">
                    <div class="tone-item">
                        <h3>1. Mid Tone (เสียงสามัญ)</h3>
                        <p>Spoken in a flat, middle pitch. No tone mark is usually used.</p>
                        <p class="example">Example: <strong>มา</strong> (maa) - to come</p>
                    </div>
                    
                    <div class="tone-item">
                        <h3>2. Low Tone (เสียงเอก)</h3>
                        <p>Spoken in a low, flat pitch.</p>
                        <p class="example">Example: <strong>ใหม่</strong> (mài) - new</p>
                    </div>
                    
                    <div class="tone-item">
                        <h3>3. Falling Tone (เสียงโท)</h3>
                        <p>Starts high and falls sharply to a low pitch. Like saying "No!" emphatically.</p>
                        <p class="example">Example: <strong>ไม่</strong> (mâi) - no</p>
                    </div>
                    
                    <div class="tone-item">
                        <h3>4. High Tone (เสียงตรี)</h3>
                        <p>Spoken in a high pitch, higher than your normal voice.</p>
                        <p class="example">Example: <strong>ม้า</strong> (máa) - horse</p>
                    </div>
                    
                    <div class="tone-item">
                        <h3>5. Rising Tone (เสียงจัตวา)</h3>
                        <p>Starts low and rises to a high pitch. Like asking "Really?" in English.</p>
                        <p class="example">Example: <strong>หมา</strong> (mǎa) - dog</p>
                    </div>
                </div>

                <div class="lesson-note">
                    <strong>Why is this important?</strong><br>
                    Getting the tone wrong can change the meaning completely! For example:
                    <ul>
                        <li><strong>mái</strong> (High tone) = wood</li>
                        <li><strong>mài</strong> (Low tone) = new</li>
                        <li><strong>mâi</strong> (Falling tone) = not/no</li>
                        <li><strong>mǎi</strong> (Rising tone) = silk</li>
                    </ul>
                </div>
            </div>
        `
    }
};
