// ================================================================
//  projects.js — YOUR PORTFOLIO DATA
//  ────────────────────────────────────────────────────────────────
//  This is the ONLY file you need to edit to manage your projects.
//  index.html reads this automatically — never touch that file.
//
//  HOW TO ADD A PROJECT:
//  1. Open new-entry.html in your browser → fill the form → copy output
//  2. Paste the new entry at the TOP of the PROJECTS array below
//  3. Save this file — done.
//
//  FOLDER STRUCTURE FOR PHOTOS:
//  Put your photos inside the Portfolio folder like this:
//
//    Portfolio/
//    ├── index.html
//    ├── projects.js
//    └── Projects/
//        ├── 2026/
//        │   └── Project Name/
//        │       ├── thumb-1.jpg      ← shown on timeline card
//        │       ├── thumb-2.jpg
//        │       └── gallery-1.jpg   ← shown inside project detail
//        └── 2011/
//            └── Aviation - Piloting/
//                └── WP_000433.jpg   (already here)
//
//  Then reference photos as:  'Projects/2026/Project Name/thumb-1.jpg'
// ================================================================

const PROJECTS = [

  // ──────────────────────────────────────────────────────────────
  //  ↓  PASTE NEW ENTRIES HERE (newest at the top)  ↓
  // ──────────────────────────────────────────────────────────────
 
    {
    id:      'tone-light',
    year:    '2020',
    yearTag: '2020 - 2023',
    title:   ['Tone', 'Light'],
    cat:     'Audiovisual - Entrepreneurship',
    thumbs: [
      'Projects/2020/tone-light/DSC_9923.jpg',
      'Projects/2020/tone-light/EstudioNicobaja.jpg',
      'Projects/2020/tone-light/POST-TONE-LIGHT_medio1080x1080_IG.jpg',
    ],
    text: [
      '"Building a home studio meant making it a space worth spending time in. The first LED light was built for that reason — LED strips fed through carved wood, set into a concrete base. A personal project, not a product.',
      'Then people started asking if they could buy one.',
      'What followed was an exercise in figuring things out by necessity. Designing variations, sourcing RGBW wireless controllers that could sync with music, respond to voice commands and be managed from a phone. Setting up an e-commerce store, testing suppliers, iterating on components, balancing quality against what people were actually willing to pay. When demand grew, a 3D printer came into the picture — opening up new base designs, mounting systems and modular configurations that couldn\'t be done by hand alone.',
      'The clearest test of the whole operation came from a theatre company that needed a 10-metre horizontal lighting bar — modular, portable, and reliable enough to be assembled and disassembled at every venue. Designing connections that could take repeated use without failure, building a system that a non-technical crew could handle quickly. It worked.',
      'Tone Light ran its course and is no longer active, but it taught a specific kind of problem-solving — the kind where the brief, the budget, and the build are all yours to figure out."',


    ],
    gallery: [
      'Projects/2020/tone-light/1606399585516.jpg',
      'Projects/2020/tone-light/1606399668171.jpg',
      'Projects/2020/tone-light/DSC_9801.jpg',
      'Projects/2020/tone-light/DSC_0871.jpg',
      'Projects/2020/tone-light/DSC_9923.jpg',
      { src: 'Projects/2020/tone-light/DSC_0860.jpg', pos: '48.2% 90.6%' },
      'Projects/2020/tone-light/IMG_20211214_110209.jpg',
      { src: 'Projects/2020/tone-light/Moon-Black-1.jpg', pos: '50.6% 69.5%' },
      'Projects/2020/tone-light/tone light moon.jpg',
      'Projects/2020/tone-light/18-DSC_0341.jpg',
      'Projects/2020/tone-light/7_2_2022, 22_38_44.jpg',
      { src: 'Projects/2020/tone-light/Tone Light Bar.png', pos: '87.2% 42.7%' },
      { src: 'Projects/2020/tone-light/tone Light Bar 2.png', pos: '85.6% 44.3%' },
    ],
  },
  {
    id:      'home-studio',
    year:    '2020',
    yearTag: '2020-2023',
    title:   ['Home', 'Studio'],
    cat:     'Audiovisual',
    thumbs: [
      'Projects/2020/home-studio/DSC_7211.jpg',
      'Projects/2020/home-studio/DSC_7220.jpg',
      'Projects/2020/home-studio/DSC_0261.jpg',
    ],
    text: [
      '"The home studio came together in the final semester of my degree — built to record personal projects and occasionally bring in other artists. It never paid the bills, but it didn\'t need to. It was the space where the technical and creative sides of the training finally met on my own terms.',
      'When COVID hit, having that setup already in place meant work could continue remotely without interruption — a practical advantage that turned a hobby investment into a professional one almost overnight.',
      'Once that chapter closed, the studio became something more personal. Time opened up to focus on music in a way that hadn\'t been possible before — working with aspiring artists and occasionally with musicians operating at a professional level. Nothing built for scale, but everything built with care.',
      'The studio didn\'t make the move to Australia. The Apollo interface and the Maschine did."',
    ],
    gallery: [
      'Projects/2020/home-studio/DSC_1614.jpg',
      'Projects/2020/home-studio/DSC_0261.jpg',
      'Projects/2020/home-studio/DSC_2011.jpg',
      'Projects/2020/home-studio/DSC_7211.jpg',
      'Projects/2020/home-studio/DSC_7220.jpg',
    ],
  },
   {
    id:      'chaos-in-santiago',
    year:    '2019',
    yearTag: '2019 - 2020',
    title:   ['Social', 'Uprising'],
    cat:     'Audiovisual - Photography',
    thumbLayout: 'lay-duo-equal',
    thumbs: [
      'Projects/2019/chaos-in-santiago/DSC_3788.jpg',
      'Projects/2019/chaos-in-santiago/DSC_3595.jpg',
    ],
    text: [
      'Some images in this section document the 2019 Chilean social uprising. They are unfiltered and may be confronting.',
      '"My first camera was a Nikon D5300, bought in January 2019. The part that hooked me wasn\'t the shooting — it was the editing. Taking an ordinary place and pulling out something that wasn\'t immediately visible. Adjusting colour, contrast, light until reality became a slightly better version of itself. I found that process quietly addictive.',
      'That approach lasted until October of that year.',
      'Chile\'s social uprising began over a 30 pesos increase in public transport fares — roughly 6 Australian cents. The slogan that spread across the country said it plainly: it\'s not 30 pesos, it\'s 30 years. Thirty years of policies built for the few, wages that couldn\'t cover a cost of living that rivalled cities like Sydney or Melbourne, and institutions that seemed structurally designed to protect themselves rather than the people inside them.',
      'It was not abstract to me. I was working full time without a contract, without sick leave, without paid leave, without guaranteed hours, and without any of the protections that in Australia are considered basic. A large, established company doing this routinely, without consequence. The frustration on the streets made complete sense.',
      'At its peak, two million people marched down the main avenue in Santiago. Neighbourhoods filled with the sound of people hitting pots and pans — cacerolazo — each person finding their own way to be heard. Some kept it peaceful. Others dismantled footpaths and built fire barricades. I didn\'t share their method. My instinct was that a destroyed street sign represented hundreds of dollars that could have funded a school or a hospital. But I understood the rage underneath it, even when I couldn\'t follow the logic of the action.',
      'Then the president declared that the country was at war with a powerful enemy and deployed the military.',
      'Tanks on the street I took to work. Tanks outside my window. I opened it from the second floor to get a closer look. My partner at the time leaned out and shouted at them to go back to their barracks. They pointed at us.',
      'I have never felt my heart move like that before or since.',
      'My camera came with me after that, despite the risk of having it taken or destroyed by police or military. The editing approach changed completely. No colour grading. No pulling beauty out of the ordinary. Just exposure, shadows, colour temperature — enough to see clearly. The rawness was the point. The ugliness was the document.',
      'Looking back at those images, I can see the mistakes clearly — blown exposure, soft focus, acrylic red and cyan filters that I thought added something and only degraded the image. That\'s part of it. I was learning, and I was present, and I documented something real.',
      'The uprising didn\'t ultimately land where many of us hoped. In many ways it divided the country more than it united it. But I remain proud of the people who had the courage to stand in the street and say that things needed to change — even when the response was a declaration of war against their own citizens."',
    ],
    gallery: [
      { src: 'Projects/2019/chaos-in-santiago/DSC_3058.jpg', pos: '49.5% 96.6%' },
      'Projects/2019/chaos-in-santiago/DSC_3064.jpg',
      { src: 'Projects/2019/chaos-in-santiago/DSC_3179.jpg', pos: '49.5% 92%' },
      'Projects/2019/chaos-in-santiago/DSC_3188.jpg',
      'Projects/2019/chaos-in-santiago/DSC_3231.jpg',
      'Projects/2019/chaos-in-santiago/DSC_3241.jpg',
      'Projects/2019/chaos-in-santiago/DSC_3249.jpg',
      'Projects/2019/chaos-in-santiago/DSC_3330.jpg',
      { src: 'Projects/2019/chaos-in-santiago/DSC_3419.jpg', pos: '50.2% 38.3%' },
      { src: 'Projects/2019/chaos-in-santiago/DSC_3437.jpg', pos: '50.4% 4.9%' },
      'Projects/2019/chaos-in-santiago/DSC_3595.jpg',
      { src: 'Projects/2019/chaos-in-santiago/DSC_3601.jpg', pos: '50.5% 42.7%' },
      { src: 'Projects/2019/chaos-in-santiago/DSC_3769.jpg', pos: '51.1% 70.1%' },
      'Projects/2019/chaos-in-santiago/DSC_3777.jpg',
      'Projects/2019/chaos-in-santiago/DSC_3788.jpg',
      'Projects/2019/chaos-in-santiago/DSC_3989.jpg',
      { src: 'Projects/2019/chaos-in-santiago/DSC_4030.jpg', pos: '48% 14.8%' },
      'Projects/2019/chaos-in-santiago/DSC_4141.jpg',
      { src: 'Projects/2019/chaos-in-santiago/DSC_4193.jpg', pos: '54.1% 89%' },
      { src: 'Projects/2019/chaos-in-santiago/DSC_4221.jpg', pos: '51.4% 95.2%' },
      'Projects/2019/chaos-in-santiago/DSC_4257.jpg',
      'Projects/2019/chaos-in-santiago/DSC_4530.jpg',
      { src: 'Projects/2019/chaos-in-santiago/DSC_4611.jpg', pos: '46.5% 19.4%' },
      { src: 'Projects/2019/chaos-in-santiago/DSC_4637.jpg', pos: '55.3% 96%' },
      'Projects/2019/chaos-in-santiago/DSC_4661.jpg',
      'Projects/2019/chaos-in-santiago/DSC_4664.jpg',
      { src: 'Projects/2019/chaos-in-santiago/DSC_4690.jpg', pos: '46.2% 54.4%' },
      'Projects/2019/chaos-in-santiago/DSC_4693.jpg',
      'Projects/2019/chaos-in-santiago/DSC_4694.jpg',
    ],
  },
  {
    id:      'foley',
    year:    '2019',
    yearTag: '2019-2020',
    title:   ['Foley'],
    cat:     'Audiovisual',
    thumbs: [
      'Projects/2019/foley/DSC_0010.jpg',
      'Projects/2019/foley/DSC_1678.jpg',
      'Projects/2019/foley/1568780793452.jpg',
    ],
    text: [
      '"During my Sound Engineering studies, an internship placement led me to DINT — Doblajes Internacionales, Chile\'s leading dubbing studio, producing content for Discovery Networks, Netflix, Nickelodeon and others.',
      'It started with shadowing. Watching the senior technicians work was humbling — recording dialogue while simultaneously editing the previous take, catching the faintest saliva noise in an actor\'s mouth, and making real-time decisions when a translated phrase didn\'t match the timing or weight of the original performance. The standard was uncompromising and the pace relentless.',
      'The part of the operation that captured my attention most was the Foley department — a room that looked like organised chaos but contained everything deliberately. Every object had a purpose. That creative logic made immediate sense to me.',
      'I was introduced to a Native Instruments Kontakt library setup within Pro Tools — a MIDI-triggered footstep library covering surfaces, textures and shoe types, used to handle lighter Foley workload and free up the main studios for more complex work. I picked it up quickly, started covering for the regular operator, and when a night shift Foley position opened up, they offered it to me.',
      'It was effectively full-time work without a contract — a known reality in a field where the opportunity itself is considered the privilege, especially in Chile and across South America. I accepted without hesitation. The access to that environment and that level of work was worth it at the time.',
      'Then COVID closed the studios.',
      'I\'d been building a home studio in parallel, which meant I could keep working when others couldn\'t. The workflow adapted — projects moved through Google Drive instead of internal folders, sessions downloaded and uploaded between departments remotely. The challenge was the environment: living in central Santiago meant construction noise, traffic, horns and buses bleeding into recordings constantly, adding unpredictability to every session.',
      'As delays stacked up across departments, the pressure on the business grew. When the studios partially reopened under government permit restrictions, those permits required proof of employment — a contract. I didn\'t have one, so I was out.',
      'A few months later they called. My answer to my boss Pedro was simple: I\'d come back with a contract, or not at all.',
      'I didn\'t go back."',
    ],
    gallery: [
      'Projects/2019/foley/1546905064061.jpg',
      'Projects/2019/foley/1546905063701.jpg',
      'Projects/2019/foley/1547165715802.jpg',
      'Projects/2019/foley/DSC_1678.jpg',
      { src: 'Projects/2019/foley/DSC_1680.jpg', pos: '52.7% 98.9%' },
      { src: 'Projects/2019/foley/IMG_20190107_091313.jpg', pos: '54.6% 98.4%' },
      { src: 'Projects/2019/foley/IMG_20190111_090604.jpg', pos: '33.6% 34.9%' },
      { src: 'Projects/2019/foley/IMG_20190405_175220.jpg', pos: '48.2% 31.1%' },
      'Projects/2019/foley/IMG_20200319_113650.jpg',
    ],
  },
    {
    id:      'field-sound-recording',
    year:    '2018',
    yearTag: '2018',
    title:   ['Sound Field', 'Recording'],
    cat:     'Audiovisual',
    thumbs: [
      'Projects/2018/field-sound-recording/IMG_0855.jpg',
      'Projects/2018/field-sound-recording/IMG_1445.jpg',
      'Projects/2018/field-sound-recording/IMG_0723.jpg',
    ],
    text: [
      'During my Sound Engineering studies, I completed a course in sound field recording — capturing dialogue, wildtracks, and ambience at the highest quality for use in post-production, where sound and image are shaped into a finished piece.',
      'In 2018, that training got its first real test. I had the opportunity to work on "Por mi y por todas", a short film created and directed by a group of final-year audiovisual communication students as their degree project.',
      'It was my first recorded and post-produced audiovisual work — and it came with every challenge that implies.',
    ],
    gallery: [
      'Projects/2018/field-sound-recording/IMG_0728.jpg',
      'Projects/2018/field-sound-recording/IMG_0842.jpg',
      'Projects/2018/field-sound-recording/IMG_0855.jpg',
      'Projects/2018/field-sound-recording/IMG_1240.jpg',
      'Projects/2018/field-sound-recording/IMG_1445.jpg',
      'Projects/2018/field-sound-recording/IMG_1457.jpg',
      'Projects/2018/field-sound-recording/IMG_0723.jpg',
    ],
  },
  {
    id:      'sound-engineering',
    year:    '2015',
    yearTag: '2015 - 2020',
    title:   ['Sound', 'Engineering'],
    cat:     'Audiovisual',
    thumbLayout: 'lay-duo-equal',
    thumbs: [
      { src: 'Projects/2015/sound-engineering/DSC_5003.jpg', pos: '46% 50.4%' },
      { src: 'Projects/2015/sound-engineering/IMG_4630.JPG', pos: '64.9% 53.4%' },
    ],
    text: [
      'Warning: Some of these photos were retrieved from the digital equivalent of a shoebox under the bed. Quality not guaranteed.',
      '"The decision came down to simple math — the cost of a single year of commercial pilot training would cover an entire Sound Engineering degree. After years of structure, regulations, and a strict physical appearance code, the freedom alone felt like oxygen.',
      'The years between aviation and university weren\'t wasted. Travelling through Chile, working whatever paid the bills, I was quietly rebuilding a creative life — teaching myself guitar, experimenting with Ableton Live, buying a MIDI keyboard and figuring things out by ear. The Chilean indie scene was quietly growing into something exciting, and I wanted to be part of it.',
      'Choosing Sound Engineering over Music Production was a pragmatic call. Music production was the dream; sound engineering was the foundation that could support it. The tradeoff felt clear enough at the time.',
      'The early years were underwhelming. Coming in with a strong background in physics and maths from aviation studies, much of the curriculum didn\'t offer the stimulation I needed. That changed in the later semesters with Acoustics — modelling spaces in AutoCAD, SketchUp and Vectorworks, running them through EASE to analyse acoustic parameters, calculating speech clarity, music definition, and using impulse response simulation to predict how a space would actually sound before it was ever built. That clicked something back into place.',
      'Sound Design and Post Production did the same — discovering the relationship between sound and the visual language of film pointed my compass firmly toward audiovisual production. I added a photography elective outside my program just because I could, and found myself thriving in the overlap between disciplines.',
      'The degree culminated in an experimental short film — assembled from stock footage into an original story, with a full original score and post production created by the team. We performed it live while the film played behind us. It was ambitious for the timeline we had: 3–4 months, other coursework running in parallel, and most of us holding down jobs on the side. We chose to make it harder than it needed to be, and it was worth it.',
      'Finishing the degree was the right call. It became the foundation that made immigrating to Australia possible, and with it, a career that finally feels proportional to the effort put in — fair wages, genuine opportunities, and enough stability to focus on the work itself rather than surviving around it. The events industry is anything but predictable. Late changes, shrinking budgets, and the unpredictable human element are part of the job. It keeps you sharp."',
    ],
    gallery: [
      'Projects/2015/sound-engineering/IMG_4630.JPG',
      { src: 'Projects/2015/sound-engineering/IMG_1418.JPG', pos: '88% 72.7%' },
      'Projects/2015/sound-engineering/IMG_5513.JPG',
      { src: 'Projects/2015/sound-engineering/IMG_0347.JPG', pos: '45.7% 32.3%' },
      { src: 'Projects/2015/sound-engineering/IMG_0700.jpg', pos: '85.3% 19%' },
      'Projects/2015/sound-engineering/IMG_20181129_001518.jpg',
      'Projects/2015/sound-engineering/IMG_20181129_001624.jpg',
      'https://youtu.be/Y3JAt6Wa0Rw?si=SJLjXqfypJ6ZuBJI',
      'Projects/2015/sound-engineering/IMG_20181129_011911.jpg',
    ],
  },
     {
    id:      'aviation-piloting',
    year:    '2012',
    yearTag: '2012 - 2013',
    title:   ['Aviation and', 'Aeronautics'],
    cat:     'Aviation',
    thumbLayout: 'lay-duo-equal',
    thumbs: [
      { src: 'Projects/2012/aviation-piloting/foto_expedientes secretos X_ AREA 51 - CIA -NASA-FBI-PIÑERA.JPG', pos: '21.9% 59.6%' },
      { src: 'Projects/2012/aviation-piloting/SAM_0634.JPG', pos: '52.9% 70.9%' },
    ],
    text: [
      '"Since being a kid, the idea that something as massive and heavy as a commercial aircraft could be lifted off the ground and carry hundreds of people — each one with their own dreams, goals, and destinations — to the other side of the world never stopped being extraordinary.',
      'Coming from a lower-income background, this was not a conventional career path. The cost of training was significant, and that cost kept growing — each year, contracts became more expensive, making the investment harder to sustain.',
      'What ultimately made the path harder to continue wasn\'t the challenge itself, but what the industry revealed over time. Competence and effort didn\'t always translate to outcomes. Watching capable, qualified people not get the positions they had worked toward made it difficult to keep investing in a system where merit wasn\'t the clear deciding factor.',
      'The pivot was toward something that had been there since childhood as well — sound, and through sound, music. That decision became the first real thread in a longer story, and eventually the reason to be able to immigrate to Australia altogether."',
    ],
    gallery: [
      { src: 'Projects/2012/aviation-piloting/foto_expedientes secretos X_ AREA 51 - CIA -NASA-FBI-PIÑERA.JPG', pos: '46.5% 73.3%' },
      'Projects/2012/aviation-piloting/SAM_0705.JPG',
      'Projects/2012/aviation-piloting/DSC05735.JPG',
      'Projects/2012/aviation-piloting/2012-07-26 15.50.03 (2).jpg',
      'Projects/2012/aviation-piloting/DSCN2839.JPG',
      'Projects/2012/aviation-piloting/SAM_1048.JPG',
      'Projects/2012/aviation-piloting/SAM_1070.JPG',
      'Projects/2012/aviation-piloting/SAM_0584.JPG',
      'Projects/2012/aviation-piloting/SAM_0629.JPG',
      'Projects/2012/aviation-piloting/SAM_0559.JPG',
      'Projects/2012/aviation-piloting/WP_000304.jpg',
      'Projects/2012/aviation-piloting/SAM_1001.JPG',
      'Projects/2012/aviation-piloting/WP_000161.jpg',
      'Projects/2012/aviation-piloting/cabina 2.jpg',
      'Projects/2012/aviation-piloting/cabina 1.jpg',
      'Projects/2012/aviation-piloting/WP_000057.jpg',
      'Projects/2012/aviation-piloting/SAM_0648.JPG',
      'Projects/2012/aviation-piloting/Tren.jpg',
      'Projects/2012/aviation-piloting/Turbina.jpg',
      'Projects/2012/aviation-piloting/SAM_0609.JPG',
      'Projects/2012/aviation-piloting/WP_000316.jpg',
    ],
  },
];
