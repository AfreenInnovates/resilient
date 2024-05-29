document.addEventListener('DOMContentLoaded', function() {
  // Tab click event
  const tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  // Tab switch function
  function tabSwitch() {
    // Remove active class from all tabs and panels
    document.querySelector('.tab.is-active').classList.remove('is-active');
    document.querySelector('.panel.is-show').classList.remove('is-show');

    // Add active class to clicked tab
    this.classList.add('is-active');

    // Show corresponding panel
    const index = Array.from(this.parentNode.children).indexOf(this);
    document.querySelectorAll('.panel')[index].classList.add('is-show');
  };
}, false);





document.addEventListener('DOMContentLoaded', function() {
  try {
    // Initialize the map with a lower zoom level to show a broader area
    var mymap = L.map('map').setView([62.4540, -114.3718], 4); // Adjust the coordinates and zoom level

    // Add a tile layer (you can use any tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);

    // Add the first marker to the map and bind a popup (but keep it closed)
    var marker1 = L.marker([51.5, -0.09]).addTo(mymap);
    marker1.bindPopup('A marker pointing to a location.');

    // Event listener for marker click to open the popup
    marker1.on('click', function(e) {
      this.openPopup();
    });

    // Add a marker for Yellowknife
    var yellowknifeMarker = L.marker([62.4540, -114.3718]).addTo(mymap);
    yellowknifeMarker.bindPopup('Yellowknife, Northwest Territories || Extreme wildfire forcast');

    // Event listener for marker click to open the popup
    yellowknifeMarker.on('click', function(e) {
      this.openPopup();
    });

    // Add a marker for Ontario (Toronto)
    var torontoMarker = L.marker([43.65107, -79.347015]).addTo(mymap);
    torontoMarker.bindPopup('Whitehorse, Yukon || Low wildfire forcast');

    // Event listener for marker click to open the popup
    torontoMarker.on('click', function(e) {
      this.openPopup();
    });

    // Add a marker for Whitehorse (Yukon)
    var whitehorseMarker = L.marker([60.7212, -135.0568]).addTo(mymap);
    whitehorseMarker.bindPopup('Whitehorse, Yukon || Low wildfire forcast');

    // Event listener for Whitehorse marker click to open the popup
    whitehorseMarker.on('click', function(e) {
      this.openPopup();
    });

    // Add a marker for Rankin Inlet (Kivalliq Region)
    var rankinInletMarker = L.marker([62.8086, -92.0853]).addTo(mymap);
    rankinInletMarker.bindPopup('Rankin Inlet, Kivalliq Region, NU || Moderate wildfire forcast');

    // Event listener for marker click to open the popup
    rankinInletMarker.on('click', function(e) {
      this.openPopup();
    });


  } catch (error) {
    console.error('Error initializing map:', error);
  }
});






const quizData = [
  {
    question: "Which material is non-combustible?",
    a: "Metal",
    b: "Wood",
    c: "Straw",
    d: "Paper",
    correct: "a",
  },
  {
    question: "Why are wildfires becoming more devastating?",
    a: "Urbanization of wildfire-prone areas",
    b: "Changes in firefighting techniques",
    c: "Decreased vegetation around structures",
    d: "Increased prevalence of climate change",
    correct: "d",
  },
  {
    question: "What role do building materials play in wildfire resistance?",
    a: "They can significantly reduce the risk of ignition",
    b: "They increase the risk of ignition",
    c: "They contribute to the spread of wildfires",
    d: "They are not relevant to wildfire protection",
    correct: "a",
  },
  {
    question: "How do ember-resistant vents help protect structures?",
    a: "They prevent ember penetration into the structure",
    b: "They enhance the spread of wildfires",
    c: "They are not relevant to wildfire protection",
    d: "They increase the risk of internal fires",
    correct: "a",
  },
  {
    question: "What is defensible space, and why is it important?",
    a: "A space designed for recreational activities",
    b: "A zone where vegetation is encouraged to grow freely",
    c: "A space designated for firefighters during emergencies",
    d: "An area around a structure where flammable materials are managed or removed",
    correct: "d",
  },
  {
    question: "How can landscaping reduce wildfire risks around structures?",
    a: "By creating a buffer zone with fire-resistant plants",
    b: "By ignoring vegetation management altogether",
    c: "By maintaining dense vegetation close to the building",
    d: "By using highly flammable plants",
    correct: "a",
  }
];


const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const totalNumberOfQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLabel = document.querySelectorAll(".answer-label");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitquiz = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");


let currentQtn = 0;
let answered = 0;

const loadQuiz = () => {
  countQuestion.innerHTML = `${currentQtn + 1}`;
  totalNumberOfQuestion.innerHTML = quizData.length;
  questionNumber.innerHTML = `${currentQtn + 1}`;
  questionTitle.innerHTML = quizData[currentQtn].question;
  answerLabel[0].innerHTML = quizData[currentQtn].a;
  answerLabel[1].innerHTML = quizData[currentQtn].b;
  answerLabel[2].innerHTML = quizData[currentQtn].c;
  answerLabel[3].innerHTML = quizData[currentQtn].d;

  reset();

  if (currentQtn == quizData.length - 1) {
    nextQuestionbtn.style.display = "none";
    submitquiz.style.display = "block";
  }
}
const reset = () => {
  allInputs.forEach((allInputs) => {
    allInputs.checked = false;
  })
}

nextQuestionbtn.addEventListener("click", () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQtn].correct) {
      answered++;
    }
    currentQtn++;
    if (currentQtn < quizData.length) {
      loadQuiz();
    }
  }
});

submitquiz.addEventListener("click", () => {
  let answer = getSelected();
  if (answer === quizData[currentQtn].correct) {
    answered++;
  };
  currentQtn++;
  if (getSelected()) {
    quiz.style.display = "none";
    resultEl.style.display = "block";
    scoreEl.innerHTML = `Questions Answered Correctly ${answered} / ${quizData.length}`;
  }
})

const getSelected = () => {
  let answer;
  allInputs.forEach((allInputs) => {
    if (allInputs.checked) {
      answer = allInputs.value;
    }
  });
  return answer;
}
loadQuiz();
