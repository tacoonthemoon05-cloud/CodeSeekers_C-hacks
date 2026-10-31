// =========================================
// CURION — LEARNING HUB QUIZ SYSTEM
// Original Mathematics, Science and English
// question bank retained.
// =========================================

const questionBank = {
    Mathematics: {
        6: [
            ["What is 12 × 4?", ["36", "48", "42", "52"], 1, "12 multiplied by 4 equals 48."],
            ["What is half of 80?", ["20", "30", "40", "50"], 2, "Half means dividing by 2."],
            ["How many sides does a hexagon have?", ["5", "6", "7", "8"], 1, "A hexagon has six sides."],
            ["What is 3/4 of 20?", ["10", "12", "15", "18"], 2, "20 divided by 4, then multiplied by 3, is 15."],
            ["What is the perimeter of a square with side 5 cm?", ["10 cm", "15 cm", "20 cm", "25 cm"], 2, "Perimeter of a square is 4 × side."]
        ],
        7: [
            ["What is -5 + 12?", ["5", "7", "17", "-7"], 1, "Adding 12 to -5 gives 7."],
            ["Simplify the ratio 10:15.", ["1:2", "2:3", "3:2", "5:3"], 1, "Divide both numbers by 5."],
            ["What is 25% of 200?", ["25", "40", "50", "75"], 2, "25% means one-fourth. One-fourth of 200 is 50."],
            ["Solve: x + 8 = 15.", ["5", "6", "7", "8"], 2, "Subtract 8 from both sides."],
            ["What is the sum of angles in a triangle?", ["90°", "180°", "270°", "360°"], 1, "The interior angles of a triangle add up to 180°."]
        ],
        8: [
            ["What is the square of 9?", ["18", "72", "81", "99"], 2, "9 × 9 = 81."],
            ["What is 15% of 200?", ["20", "25", "30", "35"], 2, "15% of 200 is 30."],
            ["Solve: 3x = 21.", ["6", "7", "8", "9"], 1, "Divide both sides by 3."],
            ["What is the cube of 3?", ["9", "18", "27", "36"], 2, "3 × 3 × 3 = 27."],
            ["What is the value of 2⁴?", ["8", "12", "16", "24"], 2, "2 multiplied by itself four times is 16."]
        ],
        9: [
            ["What is the degree of 5x³ + 2x + 1?", ["1", "2", "3", "5"], 2, "The highest power of x is 3."],
            ["What is the value of √144?", ["10", "11", "12", "14"], 2, "12 × 12 = 144."],
            ["Which point is the origin?", ["(1,1)", "(0,0)", "(1,0)", "(0,1)"], 1, "The origin is where both axes meet."],
            ["What is the sum of angles in a quadrilateral?", ["180°", "270°", "360°", "540°"], 2, "The interior angles add up to 360°."],
            ["What is the median of 2, 4, 6, 8, 10?", ["4", "5", "6", "8"], 2, "The middle value is 6."]
        ],
        10: [
            ["What are the roots of x² - 5x + 6 = 0?", ["1 and 6", "2 and 3", "-2 and -3", "1 and 5"], 1, "Factorise as (x - 2)(x - 3) = 0."],
            ["What is sin 30°?", ["0", "1/2", "√3/2", "1"], 1, "The standard value of sin 30° is 1/2."],
            ["What is the distance between (0,0) and (3,4)?", ["3", "4", "5", "7"], 2, "Using the distance formula gives √(9 + 16) = 5."],
            ["What is the probability of getting a head on a fair coin?", ["0", "1/4", "1/2", "1"], 2, "There is one favourable outcome out of two."],
            ["What is the common difference in 3, 7, 11, 15?", ["2", "3", "4", "5"], 2, "Each term increases by 4."]
        ]
    },
    Science: {
        6: [
            ["Which organ pumps blood around the body?", ["Lungs", "Heart", "Brain", "Kidneys"], 1, "The heart pumps blood through the circulatory system."],
            ["Which part of a plant absorbs water?", ["Flower", "Leaf", "Root", "Fruit"], 2, "Roots absorb water and minerals from the soil."],
            ["What is the main natural source of light for Earth?", ["Moon", "Sun", "Stars", "Fire"], 1, "The Sun provides most of Earth's natural light."],
            ["Which state of matter has a fixed shape?", ["Liquid", "Gas", "Solid", "Vapour"], 2, "Solids have a definite shape and volume."],
            ["Which sense organ helps us hear?", ["Eye", "Ear", "Nose", "Skin"], 1, "Our ears detect sound."]
        ],
        7: [
            ["What is the process by which plants make food?", ["Respiration", "Photosynthesis", "Digestion", "Evaporation"], 1, "Plants use light energy to make food by photosynthesis."],
            ["Which gas do humans need for respiration?", ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"], 1, "Humans use oxygen during cellular respiration."],
            ["What is the SI unit of temperature?", ["Celsius", "Kelvin", "Metre", "Joule"], 1, "The SI unit of temperature is kelvin."],
            ["Which force pulls objects towards Earth?", ["Friction", "Magnetism", "Gravity", "Tension"], 2, "Gravity attracts objects towards Earth."],
            ["Which part of the cell controls its activities?", ["Cell wall", "Nucleus", "Cytoplasm", "Membrane"], 1, "The nucleus controls many cell activities."]
        ],
        8: [
            ["What is the basic unit of life?", ["Tissue", "Organ", "Cell", "Atom"], 2, "The cell is the basic structural and functional unit of life."],
            ["Which gas is released during photosynthesis?", ["Oxygen", "Nitrogen", "Hydrogen", "Methane"], 0, "Oxygen is released as a by-product of photosynthesis."],
            ["What is the chemical formula of water?", ["CO₂", "O₂", "H₂O", "NaCl"], 2, "A water molecule contains two hydrogen atoms and one oxygen atom."],
            ["Which type of friction acts in liquids?", ["Rolling", "Fluid friction", "Static", "Sliding"], 1, "Liquids exert fluid friction on objects moving through them."],
            ["Which instrument measures electric current?", ["Voltmeter", "Ammeter", "Thermometer", "Barometer"], 1, "An ammeter measures electric current."]
        ],
        9: [
            ["What is the SI unit of force?", ["Joule", "Newton", "Watt", "Pascal"], 1, "Force is measured in newtons."],
            ["Which organelle is known as the powerhouse of the cell?", ["Nucleus", "Mitochondrion", "Ribosome", "Vacuole"], 1, "Mitochondria release energy through cellular respiration."],
            ["What is the approximate speed of light in vacuum?", ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10⁴ m/s", "300 m/s"], 1, "Light travels at about 3 × 10⁸ metres per second."],
            ["Which tissue transports water in plants?", ["Phloem", "Xylem", "Epidermis", "Meristem"], 1, "Xylem transports water and minerals."],
            ["What is the smallest unit of an element?", ["Cell", "Atom", "Molecule", "Tissue"], 1, "An atom is the smallest unit that retains the properties of an element."]
        ],
        10: [
            ["What is the pH of a neutral solution at room temperature?", ["0", "5", "7", "14"], 2, "A neutral solution has a pH of 7 at room temperature."],
            ["Which lens is used to correct myopia?", ["Convex", "Concave", "Cylindrical", "Plane"], 1, "A concave lens helps correct myopia."],
            ["What is the functional unit of the kidney?", ["Neuron", "Nephron", "Alveolus", "Villus"], 1, "The nephron filters blood and forms urine."],
            ["Which gas is mainly responsible for the greenhouse effect from human activities?", ["Oxygen", "Carbon dioxide", "Helium", "Neon"], 1, "Carbon dioxide is a major greenhouse gas released by human activities."],
            ["What is the SI unit of electric resistance?", ["Ampere", "Volt", "Ohm", "Watt"], 2, "Electrical resistance is measured in ohms."]
        ]
    },
    English: {
        6: [
            ["Choose the correct plural of 'child'.", ["Childs", "Children", "Childes", "Childrens"], 1, "The plural form of child is children."],
            ["Which word is a noun?", ["Quickly", "Beautiful", "Garden", "Run"], 2, "Garden is the name of a place."],
            ["Choose the correct article: ___ apple.", ["A", "An", "The only", "No article"], 1, "An is used before a vowel sound."],
            ["What is the opposite of 'ancient'?", ["Old", "Modern", "Historic", "Past"], 1, "Modern means belonging to the present time."],
            ["Choose the correct verb: She ___ to school.", ["go", "going", "goes", "gone"], 2, "She is singular, so we use goes."]
        ],
        7: [
            ["Identify the adjective: 'The bright sun shone.'", ["The", "Bright", "Sun", "Shone"], 1, "Bright describes the noun sun."],
            ["Choose the past tense of 'write'.", ["Writed", "Written", "Wrote", "Writing"], 2, "The simple past tense is wrote."],
            ["Which is a conjunction?", ["And", "Beautiful", "Slowly", "House"], 0, "And joins words or clauses."],
            ["Choose the correct pronoun: Ravi and ___ went home.", ["me", "I", "mine", "my"], 1, "I is the subject pronoun."],
            ["What is a synonym of 'happy'?", ["Angry", "Joyful", "Tired", "Afraid"], 1, "Joyful has a similar meaning to happy."]
        ],
        8: [
            ["Identify the adverb: 'She spoke softly.'", ["She", "Spoke", "Softly", "None"], 2, "Softly describes how she spoke."],
            ["Choose the correct passive voice: 'The boy kicked the ball.'", ["The ball kicked the boy.", "The ball was kicked by the boy.", "The boy was kicked.", "The ball is kicking."], 1, "The object becomes the subject in passive voice."],
            ["Which sentence is in the present perfect tense?", ["I eat lunch.", "I ate lunch.", "I have eaten lunch.", "I will eat lunch."], 2, "Have eaten is present perfect tense."],
            ["What is the opposite of 'generous'?", ["Kind", "Selfish", "Helpful", "Friendly"], 1, "Selfish is the opposite of generous."],
            ["Choose the correct reported speech: He said, 'I am tired.'", ["He said that he is tired.", "He said that he was tired.", "He says tired.", "He said I tired."], 1, "The present tense usually changes to past tense in reported speech."]
        ],
        9: [
            ["Identify the figure of speech: 'The wind whispered.'", ["Simile", "Metaphor", "Personification", "Hyperbole"], 2, "The wind is given a human action."],
            ["Choose the correct conditional: If it rains, we ___ inside.", ["stay", "stayed", "will stay", "staying"], 2, "The first conditional uses will in the main clause."],
            ["Which word is an antonym of 'reluctant'?", ["Unwilling", "Eager", "Hesitant", "Doubtful"], 1, "Eager means willing or enthusiastic."],
            ["Choose the correctly punctuated sentence.", ["Where are you.", "Where are you?", "Where are you!", "Where are you,"], 1, "A direct question ends with a question mark."],
            ["What is a metaphor?", ["A direct comparison", "An exaggeration", "A sound word", "A repeated vowel sound"], 0, "A metaphor describes one thing as another."]
        ],
        10: [
            ["Which is an example of alliteration?", ["The stars are bright.", "Wild winds whistle.", "Time is money.", "As cold as ice."], 1, "Alliteration repeats initial consonant sounds."],
            ["Choose the correct form: Neither of the boys ___ present.", ["are", "were", "is", "have"], 2, "Neither is treated as singular in this sentence."],
            ["What does 'meticulous' mean?", ["Careless", "Very careful", "Confused", "Impatient"], 1, "Meticulous means showing great attention to detail."],
            ["Identify the clause: 'Although it was raining, we played.'", ["Although it was raining", "We played", "It was", "Raining"], 0, "Although it was raining is a dependent clause."],
            ["Which sentence uses a semicolon correctly?", ["I was tired; I went to bed.", "I; was tired.", "I was; tired I went.", "I was tired I; went to bed."], 0, "A semicolon can join two closely related independent clauses."]
        ]
    }
};

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let selectedSubject = "";
let selectedGrade = 8;

function selectSubject(subject) {
    selectedSubject = subject;
    selectedGrade = Number(document.getElementById("grade").value);
    currentQuestions = questionBank[subject][selectedGrade];
    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz-title").textContent = subject + " Quiz";
    document.getElementById("quiz-grade").textContent = "Grade " + selectedGrade;
    document.getElementById("score").textContent = "Score: 0";
    document.getElementById("next").textContent = "Next Question";
    document.getElementById("next").onclick = nextQuestion;
    document.getElementById("quiz").hidden = false;
    showQuestion();
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
}

function showQuestion() {
    answered = false;
    const q = currentQuestions[currentQuestion];
    document.getElementById("progress").textContent = "Question " + (currentQuestion + 1) + " of " + currentQuestions.length;
    document.getElementById("progress-fill").style.width = ((currentQuestion + 1) / currentQuestions.length * 100) + "%";
    document.getElementById("question").textContent = q[0];
    document.getElementById("answers").innerHTML = "";
    document.getElementById("feedback").textContent = "";
    const nextButton = document.getElementById("next");
    nextButton.disabled = true;

    q[1].forEach(function(answer, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = answer;
        button.className = "answer-btn";
        button.onclick = function() { checkAnswer(index); };
        document.getElementById("answers").appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    const q = currentQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(function(button, index) {
        button.disabled = true;
        if (index === q[2]) button.classList.add("correct");
        if (index === selectedIndex && selectedIndex !== q[2]) button.classList.add("incorrect");
    });

    if (selectedIndex === q[2]) {
        score++;
        document.getElementById("feedback").textContent = "Correct! " + q[3];
    } else {
        document.getElementById("feedback").textContent = "Not quite. " + q[3];
    }

    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("next").disabled = false;
    if (currentQuestion === currentQuestions.length - 1) {
        document.getElementById("next").textContent = "See Results →";
    }
}

function nextQuestion() {
    if (!answered) return;
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) showQuestion();
    else showResults();
}

function showResults() {
    document.getElementById("progress").textContent = "Quiz completed!";
    document.getElementById("progress-fill").style.width = "100%";
    document.getElementById("question").textContent = "Well done! You completed the quiz.";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("feedback").textContent = "Your final score is " + score + " out of " + currentQuestions.length + ".";
    recordQuizResult(selectedSubject, score, currentQuestions.length, selectedSubject + " Grade " + selectedGrade + " Quiz");

    const nextButton = document.getElementById("next");
    nextButton.textContent = "Try Again";
    nextButton.disabled = false;
    nextButton.onclick = function() {
        currentQuestion = 0;
        score = 0;
        nextButton.textContent = "Next Question";
        nextButton.onclick = nextQuestion;
        document.getElementById("score").textContent = "Score: 0";
        showQuestion();
    };
}

function backToSubjects() {
    document.getElementById("quiz").hidden = true;
    document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
}

let textSize = 16;
function changeText(amount) {
    textSize = Math.max(12, Math.min(24, textSize + amount));
    document.documentElement.style.fontSize = textSize + "px";
}
function resetText() {
    textSize = 16;
    document.documentElement.style.fontSize = "16px";
}
