// =============================================
// CURION — DASHBOARD, THEME, ACHIEVEMENTS & ACADEMY
// Local progress is saved in this browser/device.
// =============================================

// Keep the original storage key so existing progress remains available.
let learningData;
try {
    learningData = JSON.parse(localStorage.getItem("eduBridgeData")) || {};
} catch (error) {
    learningData = {};
}
learningData = {
    completed: Number(learningData.completed) || 0,
    totalCorrect: Number(learningData.totalCorrect) || 0,
    totalQuestions: Number(learningData.totalQuestions) || 0,
    scores: Array.isArray(learningData.scores) ? learningData.scores : [],
    subjects: Array.isArray(learningData.subjects) ? learningData.subjects : [],
    history: Array.isArray(learningData.history) ? learningData.history : []
};

function saveLearningData() {
    localStorage.setItem("eduBridgeData", JSON.stringify(learningData));
}

// THEME
const themeButton = document.getElementById("theme-toggle");

function updateThemeButton() {
    const dark = document.body.classList.contains("dark-mode");
    themeButton.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
    themeButton.setAttribute("aria-pressed", String(dark));
}

if (localStorage.getItem("eduBridgeTheme") === "dark") {
    document.body.classList.add("dark-mode");
}
updateThemeButton();

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    localStorage.setItem("eduBridgeTheme", dark ? "dark" : "light");
    updateThemeButton();
});

// ACHIEVEMENTS
const achievements = [
    { id: "first", icon: "🌱", name: "First Steps", description: "Complete your first quiz or test.", unlocked: () => learningData.completed >= 1 },
    { id: "perfect", icon: "🎯", name: "Perfect Score", description: "Get a perfect score in a quiz or test.", unlocked: () => learningData.history.some(item => item.score === item.total && item.total > 0) },
    { id: "five", icon: "🔥", name: "Consistent Learner", description: "Complete five quizzes or tests.", unlocked: () => learningData.completed >= 5 },
    { id: "all", icon: "🌟", name: "Explorer", description: "Try Mathematics, Science and English.", unlocked: () => ["Mathematics", "Science", "English"].every(subject => learningData.subjects.includes(subject)) },
    { id: "ten", icon: "🏆", name: "Knowledge Champion", description: "Complete ten quizzes or tests.", unlocked: () => learningData.completed >= 10 },
    { id: "master", icon: "💎", name: "Perfect Streak", description: "Get three perfect quiz or test scores.", unlocked: () => learningData.history.filter(item => item.score === item.total && item.total > 0).length >= 3 }
];

function updateAchievements() {
    const container = document.getElementById("achievement-list");
    container.innerHTML = "";
    let unlockedCount = 0;

    achievements.forEach(function(achievement) {
        const unlocked = achievement.unlocked();
        if (unlocked) unlockedCount++;

        const card = document.createElement("div");
        card.className = unlocked ? "badge-card" : "badge-card locked";

        const icon = document.createElement("span");
        icon.className = "badge-icon";
        icon.textContent = achievement.icon;

        const info = document.createElement("div");
        const title = document.createElement("h4");
        title.textContent = achievement.name;
        const description = document.createElement("p");
        description.textContent = (unlocked ? "Unlocked! " : "Locked · ") + achievement.description;

        info.append(title, description);
        card.append(icon, info);
        container.appendChild(card);
    });

    document.getElementById("badge-count").textContent = unlockedCount;
}

function updateRecentResults() {
    const container = document.getElementById("recent-results");
    if (!learningData.history.length) {
        container.innerHTML = "<p>Your completed quizzes and tests will appear here.</p>";
        return;
    }

    container.innerHTML = "";
    learningData.history.slice(-5).reverse().forEach(item => {
        const row = document.createElement("div");
        row.className = "recent-result";
        const name = document.createElement("strong");
        name.textContent = item.label || item.subject || "Learning activity";
        const detail = document.createElement("span");
        detail.textContent = `${item.score}/${item.total} correct · ${item.total ? Math.round(item.score / item.total * 100) : 0}%`;
        row.append(name, detail);
        container.appendChild(row);
    });
}

function updateDashboard() {
    document.getElementById("completed-count").textContent = learningData.completed;
    const average = learningData.totalQuestions
        ? Math.round(learningData.totalCorrect / learningData.totalQuestions * 100)
        : 0;
    document.getElementById("average-score").textContent = average + "%";
    document.getElementById("correct-count").textContent = learningData.totalCorrect;
    updateAchievements();
    updateRecentResults();
}

function recordQuizResult(subject, finalScore, totalQuestions = 5, label = "") {
    const total = Math.max(0, Number(totalQuestions) || 0);
    const correct = Math.max(0, Math.min(total, Number(finalScore) || 0));

    learningData.completed++;
    learningData.totalCorrect += correct;
    learningData.totalQuestions += total;
    learningData.scores.push(correct);
    if (subject && !learningData.subjects.includes(subject)) learningData.subjects.push(subject);

    learningData.history.push({
        subject: subject || "Academy",
        label: label || subject || "Learning activity",
        score: correct,
        total,
        date: new Date().toISOString()
    });
    learningData.history = learningData.history.slice(-30);

    saveLearningData();
    updateDashboard();
}

// ACADEMY CONTENT
const academyData = {
    science: {
        title: "Science & Space",
        topics: [{
            title: "The Solar System",
            lesson: [
                "The Solar System consists of the Sun and all the objects that orbit it. These include eight planets, their moons, dwarf planets, asteroids and comets.",
                "The Sun is a star at the centre of our Solar System. The planets in order from the Sun are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.",
                "The inner planets are mostly rocky, while the outer planets are much larger. Gravity keeps planets and other objects in orbit around the Sun."
            ],
            questions: [
                ["Which star is at the centre of our Solar System?", ["Sirius", "The Sun", "Polaris", "Vega"], 1, "The Sun is the star at the centre of our Solar System."],
                ["How many recognised planets are in our Solar System?", ["7", "8", "9", "10"], 1, "There are eight recognised planets."],
                ["Which planet is known for its prominent ring system?", ["Mars", "Venus", "Saturn", "Mercury"], 2, "Saturn is famous for its extensive ring system."]
            ]
        }]
    },
    technology: {
        title: "Technology & Coding",
        topics: [{
            title: "Introduction to Programming",
            lesson: [
                "Programming is the process of writing instructions that a computer can follow to perform tasks. These instructions are written using programming languages.",
                "Python and JavaScript are examples of programming languages. Programmers use them to create websites, games, applications and tools.",
                "A program usually follows a sequence of steps. Breaking a large task into smaller steps makes it easier to plan, write and test a program."
            ],
            questions: [
                ["What is programming?", ["Giving instructions to a computer", "Drawing pictures", "Repairing furniture", "Writing only stories"], 0, "Programming means writing instructions that a computer can execute."],
                ["Which of these is a programming language?", ["Python", "Photoshop", "Windows", "PowerPoint"], 0, "Python is a widely used programming language."],
                ["What is an algorithm?", ["A computer screen", "A step-by-step method", "A type of keyboard", "A storage device"], 1, "An algorithm is a defined sequence of steps for solving a problem."]
            ]
        }]
    },
    history: {
        title: "History & Culture",
        topics: [{
            title: "The Indus Valley Civilisation",
            lesson: [
                "The Indus Valley Civilisation was one of the world's earliest urban civilisations. It developed around the Indus River and nearby regions thousands of years ago.",
                "Harappa and Mohenjo-daro were two important cities. Archaeologists have found evidence of planned streets, buildings, craft production and trade.",
                "The civilisation is especially known for its organised urban planning and drainage systems. Its script has not yet been conclusively deciphered."
            ],
            questions: [
                ["Which was an important city of the Indus Valley Civilisation?", ["Rome", "Harappa", "Athens", "London"], 1, "Harappa was one of the major cities of this civilisation."],
                ["What was the civilisation especially known for?", ["Space travel", "Planned cities and drainage", "Railways", "Printing presses"], 1, "Its cities had organised streets and drainage systems."],
                ["Which modern country contains major Indus Valley sites such as Harappa and Mohenjo-daro?", ["India and Pakistan", "Japan", "Egypt only", "Greece"], 0, "Major sites are located in present-day Pakistan and India."]
            ]
        }]
    },
    mathematics: {
        title: "Mathematics & Logic",
        topics: [{
            title: "Understanding Prime Numbers",
            lesson: [
                "A prime number is a whole number greater than 1 that has exactly two positive factors: 1 and itself.",
                "For example, 2, 3, 5, 7 and 11 are prime numbers. The number 2 is the only even prime number.",
                "Numbers greater than 1 that have more than two factors are called composite numbers. The number 1 is neither prime nor composite."
            ],
            questions: [
                ["Which of these is a prime number?", ["9", "15", "13", "21"], 2, "13 has exactly two factors: 1 and 13."],
                ["What is the only even prime number?", ["2", "4", "6", "8"], 0, "2 is the only even number with exactly two positive factors."],
                ["Is 1 a prime number?", ["Yes", "No", "Only when odd", "Only when even"], 1, "A prime number must have exactly two positive factors; 1 has only one."]
            ]
        }]
    },
    psychology: {
        title: "Psychology & Mind",
        topics: [{
            title: "How Memory Works",
            lesson: [
                "Memory is the ability to encode, store and retrieve information. It helps us use what we have learned and remember experiences.",
                "Attention and understanding help information become meaningful. Revisiting material over time, practising retrieval and connecting new ideas to what we already know can support learning.",
                "Sleep, breaks and a balanced routine support general brain function. People may use different strategies to remember information, such as summaries, diagrams and practice questions."
            ],
            questions: [
                ["Which organ is essential for human memory?", ["Heart", "Brain", "Lungs", "Stomach"], 1, "The brain processes and stores memories."],
                ["Which habit can support learning and memory?", ["Regular sleep", "Never practising", "Ignoring new information", "Skipping all rest"], 0, "Regular sleep supports brain function and learning."],
                ["Which is an example of a retrieval practice activity?", ["Trying to recall an idea without looking", "Only highlighting a page", "Copying a paragraph repeatedly", "Closing the book without thinking"], 0, "Retrieval practice means actively bringing information to mind."]
            ]
        }]
    },
    finance: {
        title: "Finance & Economics",
        topics: [{
            title: "Understanding Saving and Budgeting",
            lesson: [
                "Saving means setting aside some money for future needs or goals instead of spending all of it immediately.",
                "A budget is a plan for income and expenses. It helps people understand where money comes from and where it goes.",
                "A useful budget considers needs, wants and savings. Comparing prices and thinking before buying can help people make informed decisions."
            ],
            questions: [
                ["What does saving mean?", ["Spending all your money", "Keeping money for future use", "Borrowing money", "Losing money"], 1, "Saving means setting aside money for future use."],
                ["What helps organise income and expenses?", ["A budget", "A map", "A dictionary", "A calendar only"], 0, "A budget helps plan how money is earned and spent."],
                ["Which is generally a need?", ["Basic food", "A new game every week", "A luxury accessory", "An extra toy"], 0, "Food is a basic need."]
            ]
        }]
    },
    environment: {
        title: "Nature & Environment",
        topics: [{
            title: "Understanding Ecosystems",
            lesson: [
                "An ecosystem is a community of living organisms interacting with each other and with their non-living surroundings.",
                "Plants, animals, microorganisms, water, air and soil are important parts of ecosystems. Organisms depend on one another in many ways.",
                "Food chains show how energy moves between organisms. Healthy ecosystems support biodiversity and provide important resources."
            ],
            questions: [
                ["What is an ecosystem?", ["Only a group of animals", "Living organisms and their surroundings", "Only a forest", "A type of weather"], 1, "An ecosystem includes organisms and the environment they interact with."],
                ["What do food chains show?", ["How energy moves between organisms", "How mountains form", "How planets move", "How rocks are made"], 0, "Food chains show the transfer of energy between organisms."],
                ["What does biodiversity mean?", ["Variety of life", "Only one species", "A weather pattern", "A type of soil"], 0, "Biodiversity refers to the variety of living organisms."]
            ]
        }]
    },
    art: {
        title: "Art & Creativity",
        topics: [{
            title: "The Elements of Art",
            lesson: [
                "The elements of art are the basic visual building blocks artists use. A commonly taught list includes line, shape, form, colour, value, texture and space.",
                "Line can guide the viewer's eye. Shape and form describe areas and three-dimensional structure. Colour can create mood and draw attention.",
                "Artists combine these elements to communicate ideas and create compositions. There is no single correct way to use them creatively."
            ],
            questions: [
                ["Which of these is an element of art?", ["Texture", "Gravity", "Temperature", "Speed"], 0, "Texture is one of the elements of art."],
                ["Which element refers to how light or dark something appears?", ["Value", "Sound", "Motion", "Scale only"], 0, "Value describes the lightness or darkness of a colour."],
                ["Which element can describe a flat enclosed area?", ["Shape", "Temperature", "Volume of sound", "Weight"], 0, "Shape is a flat, enclosed area."]
            ]
        }]
    },
    lifeskills: {
        title: "Practical Life Skills",
        topics: [{
            title: "Effective Communication",
            lesson: [
                "Communication is the process of sharing information, thoughts and ideas. It can happen through speaking, writing, gestures and other forms.",
                "Good communication involves speaking clearly, listening carefully and respecting other people's views. Asking thoughtful questions can help avoid misunderstandings.",
                "Body language and facial expressions also communicate messages. The best approach depends on the situation and the people involved."
            ],
            questions: [
                ["Which is an important part of good communication?", ["Interrupting constantly", "Listening carefully", "Ignoring others", "Speaking without thinking"], 1, "Listening carefully helps people understand each other."],
                ["Which is a form of non-verbal communication?", ["Body language", "An email subject", "A printed book", "A written report"], 0, "Body language communicates through gestures and posture."],
                ["What can help prevent misunderstandings?", ["Asking clarifying questions", "Making assumptions", "Ignoring the speaker", "Changing the subject"], 0, "Clarifying questions help check that a message has been understood."]
            ]
        }]
    }
};

const academyContent = document.getElementById("academy-content");
let academyTimerInterval = null;

function academyEscape(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
}

function openAcademyCategory(category) {
    const data = academyData[category];
    if (!data) return;

    academyContent.innerHTML = `
        <div class="academy-view-heading">
            <button class="academy-back" type="button" onclick="closeAcademyContent()">← All categories</button>
            <span class="tag">CURION ACADEMY</span>
            <h2>${academyEscape(data.title)}</h2>
            <p>Choose a topic to read its lesson or practise what you have learned.</p>
        </div>
        <div class="academy-topic-grid">
            ${data.topics.map((topic, index) => `
                <article class="academy-topic">
                    <h3>${academyEscape(topic.title)}</h3>
                    <p>${topic.lesson.length} short lesson sections · ${topic.questions.length} practice questions</p>
                    <div class="academy-actions">
                        <button type="button" onclick="openAcademyLesson('${category}', ${index})">Read lesson</button>
                        <button type="button" onclick="openAcademyTest('${category}', ${index}, false)">Practice test</button>
                    </div>
                </article>
            `).join("")}
        </div>
        <div class="academy-test-card">
            <h3>${academyEscape(data.title)} — Test Paper</h3>
            <p>Try a paper made from the questions available in this category.</p>
            <button type="button" onclick="openCategoryPaper('${category}')">Start test paper →</button>
        </div>
    `;
    academyContent.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openAcademyLesson(category, index) {
    const topic = academyData[category]?.topics[index];
    if (!topic) return;

    academyContent.innerHTML = `
        <button class="academy-back" type="button" onclick="openAcademyCategory('${category}')">← Back to topics</button>
        <article class="academy-lesson">
            <span class="tag">WRITTEN LESSON</span>
            <h2>${academyEscape(topic.title)}</h2>
            ${topic.lesson.map((paragraph, i) => `<div class="lesson-section"><h3>Part ${i + 1}</h3><p>${academyEscape(paragraph)}</p></div>`).join("")}
            <div class="academy-actions">
                <button type="button" onclick="openAcademyTest('${category}', ${index}, false)">Take practice test →</button>
                <button type="button" class="secondary-action" onclick="openAcademyTest('${category}', ${index}, true)">Try timed challenge</button>
            </div>
        </article>
    `;
    academyContent.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAcademyQuestions(title, questions, mode, backAction, subjectLabel) {
    clearAcademyTimer();
    const isTimed = mode === "timed";
    const durationSeconds = Math.max(60, questions.length * 45);
    academyContent.innerHTML = `
        <button class="academy-back" type="button" onclick="${backAction}">← Back</button>
        <div class="academy-test-heading">
            <span class="tag">${isTimed ? "TIMED CHALLENGE" : "PRACTICE TEST"}</span>
            <h2>${academyEscape(title)}</h2>
            <p>${questions.length} questions · ${isTimed ? "Time limit: " + Math.ceil(durationSeconds / 60) + " minutes" : "Work at your own pace"}</p>
            ${isTimed ? `<p class="academy-timer" id="academy-timer" aria-live="polite">Time remaining: ${Math.ceil(durationSeconds / 60)}:00</p>` : ""}
        </div>
        <form id="academy-test-form">
            ${questions.map((q, index) => `
                <fieldset class="academy-question">
                    <legend>${index + 1}. ${academyEscape(q[0])}</legend>
                    ${q[1].map((option, optionIndex) => `
                        <label class="academy-option">
                            <input type="radio" name="academy-q-${index}" value="${optionIndex}">
                            <span>${academyEscape(option)}</span>
                        </label>
                    `).join("")}
                </fieldset>
            `).join("")}
            <button type="submit" class="academy-submit">Submit answers</button>
        </form>
        <div id="academy-test-result" aria-live="polite"></div>
    `;

    const form = document.getElementById("academy-test-form");
    let submitted = false;

    function submitPaper() {
        if (submitted) return;
        submitted = true;
        clearAcademyTimer();

        let correctCount = 0;
        let review = "";

        questions.forEach((q, index) => {
            const selected = form.querySelector(`input[name="academy-q-${index}"]:checked`);
            const chosen = selected ? Number(selected.value) : -1;
            const isCorrect = chosen === q[2];
            if (isCorrect) correctCount++;

            review += `
                <article class="academy-review-item">
                    <h4>${index + 1}. ${academyEscape(q[0])}</h4>
                    <p class="${isCorrect ? "review-correct" : "review-incorrect"}">${isCorrect ? "✓ Correct" : "✗ Incorrect or unanswered"}</p>
                    <p><strong>Correct answer:</strong> ${academyEscape(q[1][q[2]])}</p>
                    <p>${academyEscape(q[3] || "Review the lesson to strengthen your understanding.")}</p>
                </article>
            `;
        });

        const percentage = Math.round(correctCount / questions.length * 100);
        recordQuizResult(subjectLabel || "Academy", correctCount, questions.length, title);

        document.getElementById("academy-test-result").innerHTML = `
            <div class="academy-result">
                <span class="tag">YOUR RESULT</span>
                <h2>${correctCount} / ${questions.length}</h2>
                <p>Accuracy: ${percentage}%</p>
                <h3>Answer review</h3>
                ${review}
                <button type="button" onclick="${backAction}">Back to topics</button>
            </div>
        `;
        form.querySelectorAll("input").forEach(input => input.disabled = true);
        form.querySelector("button[type='submit']").disabled = true;
        form.querySelector("button[type='submit']").textContent = "Submitted";
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        submitPaper();
    });

    if (isTimed) {
        let remaining = durationSeconds;
        academyTimerInterval = setInterval(() => {
            remaining--;
            const timer = document.getElementById("academy-timer");
            if (!timer) {
                clearAcademyTimer();
                return;
            }
            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            timer.textContent = `Time remaining: ${minutes}:${String(seconds).padStart(2, "0")}`;
            if (remaining <= 0) submitPaper();
        }, 1000);
    }

    academyContent.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearAcademyTimer() {
    if (academyTimerInterval !== null) {
        clearInterval(academyTimerInterval);
        academyTimerInterval = null;
    }
}

function openAcademyTest(category, index, timed = false) {
    const topic = academyData[category]?.topics[index];
    if (!topic) return;
    renderAcademyQuestions(
        topic.title + (timed ? " — Timed Challenge" : " — Practice Test"),
        topic.questions,
        timed ? "timed" : "practice",
        `openAcademyLesson('${category}', ${index})`,
        academyData[category].title
    );
}

function openCategoryPaper(category) {
    const data = academyData[category];
    if (!data) return;
    const questions = data.topics.flatMap(topic => topic.questions);
    renderAcademyQuestions(
        data.title + " — Test Paper",
        questions,
        "timed",
        `openAcademyCategory('${category}')`,
        data.title
    );
}

function closeAcademyContent() {
    clearAcademyTimer();
    academyContent.innerHTML = "";
    document.getElementById("academy").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".academy-card").forEach(card => {
    card.addEventListener("click", () => openAcademyCategory(card.dataset.category));
});

// INITIAL DASHBOARD LOAD
updateDashboard();


// =============================================
// CURION ARCADE — six educational mini-games
// Scores are stored separately from Academy progress.
// =============================================
(function initCurionArcade() {
    const stage = document.getElementById("arcade-stage");
    if (!stage) return;
    const arcadeKey = "curionArcadeData";
    const gameNames = { math:"Math Dash", word:"Word Forge", science:"Science Quest", history:"History Detective", logic:"Logic Lab", eco:"Eco Defender" };
    let arcadeData;
    try { arcadeData = JSON.parse(localStorage.getItem(arcadeKey)) || {}; } catch (e) { arcadeData = {}; }
    arcadeData = { xp:Number(arcadeData.xp)||0, coins:Number(arcadeData.coins)||0, played:Number(arcadeData.played)||0, best:arcadeData.best||{} };
    let activeGame = "", questions = [], questionIndex = 0, gameScore = 0, locked = false, currentAnswer = null;
    const difficulty = () => document.getElementById("arcade-difficulty").value;
    const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
    function save() { localStorage.setItem(arcadeKey, JSON.stringify(arcadeData)); updateStats(); }
    function updateStats() {
        document.getElementById("arcade-xp").textContent = arcadeData.xp;
        document.getElementById("arcade-coins").textContent = arcadeData.coins;
        document.getElementById("arcade-played").textContent = arcadeData.played;
        document.getElementById("arcade-best").textContent = Math.max(0,...Object.values(arcadeData.best));
        Object.keys(gameNames).forEach(key => { const el=document.getElementById("best-"+key); if(el) el.textContent="Best: "+(arcadeData.best[key]||0); });
    }
    const bank = {
      science:[
        ["Which gas do plants absorb during photosynthesis?",["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],1,"Plants use carbon dioxide, water and light to make food."],
        ["What is the centre of an atom called?",["Nucleus","Cell wall","Orbit","Core shell"],0,"The nucleus contains protons and neutrons."],
        ["Which planet is known as the Red Planet?",["Venus","Jupiter","Mars","Mercury"],2,"Iron-rich dust gives Mars its reddish appearance."],
        ["Which force pulls objects towards Earth?",["Friction","Magnetism","Gravity","Tension"],2,"Gravity attracts objects with mass."],
        ["Which part of a plant mainly absorbs water?",["Flower","Roots","Leaves","Fruit"],1,"Roots absorb water and minerals from the soil."],
        ["What is the boiling point of water at sea level?",["50°C","75°C","100°C","150°C"],2,"Pure water boils at about 100°C at standard pressure."]
      ],
      history:[
        ["Which civilisation built the city of Machu Picchu?",["Roman","Inca","Mughal","Egyptian"],1,"Machu Picchu was built by the Inca civilisation."],
        ["The ancient Olympic Games began in which country?",["Greece","Italy","India","China"],0,"The ancient games began in Olympia, Greece."],
        ["Who was the first person to walk on the Moon?",["Yuri Gagarin","Neil Armstrong","Buzz Aldrin","John Glenn"],1,"Neil Armstrong stepped onto the Moon in 1969."],
        ["Which river was central to ancient Egyptian civilisation?",["Amazon","Nile","Thames","Danube"],1,"The Nile supported farming, transport and settlements."],
        ["The printing press in Europe is associated with whom?",["Galileo","Gutenberg","Newton","Da Vinci"],1,"Johannes Gutenberg developed a movable-type printing system in Europe."],
        ["The Taj Mahal was commissioned by which Mughal emperor?",["Akbar","Babur","Shah Jahan","Aurangzeb"],2,"Shah Jahan commissioned the Taj Mahal in memory of Mumtaz Mahal."]
      ],
      logic:[
        ["Complete the pattern: 2, 4, 8, 16, ?",["18","24","32","36"],2,"Each number is multiplied by 2."],
        ["Which one does not belong?",["Triangle","Square","Circle","Cube"],3,"A cube is three-dimensional; the others are 2D shapes."],
        ["If all Bloops are Razzies and all Razzies are Lazzies, all Bloops are…",["Lazzies","Not Lazzies","Unknown","Squares"],0,"The relationship passes through both groups."],
        ["Complete the pattern: 1, 4, 9, 16, ?",["20","24","25","30"],2,"These are square numbers: 1², 2², 3², 4², 5²."],
        ["A clock shows 3:00. What is the angle between its hands?",["45°","60°","90°","180°"],2,"At 3:00, the hands form a right angle."],
        ["Which number is the odd one out?",["11","13","17","21"],3,"21 is composite; the others are prime."]
      ],
      eco:[
        ["Which item belongs in paper recycling?",["Clean newspaper","Used tissue","Food scraps","Broken glass"],0,"Clean paper and cardboard can usually be recycled."],
        ["Which energy source is renewable?",["Coal","Petrol","Solar","Natural gas"],2,"Sunlight is naturally replenished."],
        ["What is compost mainly made from?",["Plastic wrappers","Organic waste","Metal cans","Glass"],1,"Food scraps and garden waste can break down into compost."],
        ["Which action saves the most water at home?",["Leave tap running","Fix leaking taps","Wash one item at a time","Use a hose for everything"],1,"Repairing leaks prevents unnecessary water loss."],
        ["What does biodiversity mean?",["Variety of life","Only big animals","Air pollution","Weather changes"],0,"Biodiversity is the variety of living organisms in an area or on Earth."],
        ["Which is a good way to reduce single-use plastic?",["Use a refillable bottle","Use more bags","Throw plastic outdoors","Burn plastic"],0,"Reusable bottles reduce demand for disposable ones."]
      ]
    };
    const words = [ ["PLANET","A world that orbits a star"],["ENERGY","The ability to do work"],["ORBIT","The path an object follows around another"],["HISTORY","The study of the past"],["NATURE","The living world around us"],["LOGIC","Reasoning used to solve problems"] ];
    function shuffle(arr) { return arr.slice().sort(()=>Math.random()-.5); }
    function makeMath() {
      const level=difficulty(), max=level==="easy"?10:level==="medium"?20:50;
      return Array.from({length:5},()=>{ let a=1+Math.floor(Math.random()*max), b=1+Math.floor(Math.random()*max); const op=Math.random()<.5?"+":"−"; if(op==="−"&&b>a)[a,b]=[b,a]; return {type:"input",prompt:`What is ${a} ${op} ${b}?`,answer:op==="+"?a+b:a-b,explain:"Work it out carefully, then try the next one."}; });
    }
    function makeWords() { return shuffle(words).slice(0,5).map(([word, clue])=>({type:"input",prompt:`Unscramble this word: <strong>${shuffle(word.split("")).join(" ")}</strong><br><small>${clue}</small>`,answer:word,explain:`The word is ${word}.`})); }
    function makeBank(game) { let list=shuffle(bank[game]); if(difficulty()==="easy") list=list.slice(0,5); else if(difficulty()==="medium") list=list.slice(0,5); else list=list.slice(1,6); return list.map(q=>({type:"choice",prompt:q[0],options:q[1],answer:q[2],explain:q[3]})); }
    function startGame(game) {
      activeGame=game; questionIndex=0; gameScore=0; locked=false;
      questions=game==="math"?makeMath():game==="word"?makeWords():makeBank(game);
      renderQuestion(); stage.scrollIntoView({behavior:"smooth",block:"center"});
    }
    function renderQuestion() {
      const q=questions[questionIndex]; locked=false; currentAnswer=null;
      stage.innerHTML=`<div class="arcade-panel"><div class="arcade-panel-top"><span>${gameNames[activeGame]} · ${difficulty().toUpperCase()}</span><span>⭐ ${gameScore} pts</span></div><div class="arcade-progress"><span style="width:${questionIndex/questions.length*100}%"></span></div><p class="arcade-panel-top">Challenge ${questionIndex+1} of ${questions.length}</p><h3>${gameNames[activeGame]}</h3><div class="arcade-question">${q.prompt}</div>${q.type==="choice"?`<div class="arcade-options">${q.options.map((o,i)=>`<button class="arcade-option" type="button" data-answer="${i}">${escapeHTML(o)}</button>`).join("")}</div>`:`<div class="arcade-input-row"><input id="arcade-answer" type="text" autocomplete="off" placeholder="${activeGame==="math"?"Enter your answer":"Type the word"}" aria-label="Your answer"><button class="arcade-submit" id="arcade-check" type="button">Check answer</button></div>`}<p class="arcade-feedback" id="arcade-feedback" aria-live="polite"></p><div class="arcade-actions"><button class="arcade-secondary" id="arcade-exit" type="button">Exit game</button><button class="arcade-submit" id="arcade-next" type="button" hidden>Next challenge →</button></div></div>`;
      stage.querySelectorAll("[data-answer]").forEach(btn=>btn.addEventListener("click",()=>answer(Number(btn.dataset.answer))));
      const input=document.getElementById("arcade-answer");
      if(input){ document.getElementById("arcade-check").addEventListener("click",()=>answer(input.value)); input.addEventListener("keydown",e=>{if(e.key==="Enter") answer(input.value);}); input.focus(); }
      document.getElementById("arcade-exit").addEventListener("click",()=>{stage.innerHTML="";});
      document.getElementById("arcade-next").addEventListener("click",()=>{questionIndex++; if(questionIndex<questions.length) renderQuestion(); else finishGame();});
    }
    function answer(value) {
      if(locked)return; const q=questions[questionIndex]; let correct;
      if(q.type==="choice") correct=Number(value)===q.answer;
      else if(activeGame==="math") correct=String(value).trim()!==""&&Number(value)===q.answer;
      else correct=String(value).trim().toUpperCase()===q.answer;
      locked=true; if(correct) gameScore+=20;
      if(q.type==="choice") stage.querySelectorAll("[data-answer]").forEach((btn,i)=>{btn.disabled=true;if(i===q.answer)btn.classList.add("good");else if(i===Number(value))btn.classList.add("bad");});
      else { const input=document.getElementById("arcade-answer"); input.disabled=true; document.getElementById("arcade-check").disabled=true; }
      document.getElementById("arcade-feedback").textContent=(correct?"Correct! +20 points. ":"Good try! ")+q.explain;
      const next=document.getElementById("arcade-next"); next.hidden=false; next.textContent=questionIndex===questions.length-1?"See results →":"Next challenge →";
      stage.querySelector(".arcade-panel-top span:last-child").textContent="⭐ "+gameScore+" pts";
    }
    function finishGame() {
      const max=questions.length*20, xp=gameScore, coins=Math.floor(gameScore/20)*2;
      arcadeData.xp+=xp; arcadeData.coins+=coins; arcadeData.played++;
      arcadeData.best[activeGame]=Math.max(arcadeData.best[activeGame]||0,gameScore); save();
      if(typeof recordQuizResult==="function") recordQuizResult("Curion Arcade",Math.round(gameScore/20),questions.length,gameNames[activeGame]+" · "+difficulty()+" difficulty");
      stage.innerHTML=`<div class="arcade-panel"><span class="tag">RUN COMPLETE</span><h3>${gameNames[activeGame]}</h3><div class="arcade-result-score">${gameScore} / ${max}</div><p>You earned <strong>${xp} XP</strong> and <strong>${coins} coins</strong>.</p><p>${gameScore===max?"Perfect run! Brilliant work.":gameScore>=60?"Nice run! Your skills are levelling up.":"Every round is practice. Give it another shot!"}</p><div class="arcade-actions"><button class="arcade-submit" id="arcade-replay" type="button">Play again</button><button class="arcade-secondary" id="arcade-return" type="button">Back to games</button></div></div>`;
      document.getElementById("arcade-replay").addEventListener("click",()=>startGame(activeGame));
      document.getElementById("arcade-return").addEventListener("click",()=>{stage.innerHTML="";document.getElementById("arcade-games").scrollIntoView({behavior:"smooth",block:"center"});});
    }
    document.querySelectorAll(".arcade-card").forEach(card=>card.addEventListener("click",()=>startGame(card.dataset.game)));
    updateStats();
})();
