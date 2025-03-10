async function main() {
  initializeCreateSection();
}

async function initializeCreateSection() {
  const categorySelect = document.getElementById("category");
  const createButton = document.querySelector(".main__create-button");

  const categories = await getCategories();
  if (categories) {
    categorySelect.innerHTML = "";
    categories.unshift({ id: "all", name: "Cualquier categoría" });
    categories.forEach((category) => {
      const optionElement = document.createElement("option");
      optionElement.value = category.id;
      optionElement.text = category.name;
      categorySelect.appendChild(optionElement);
    });

    createButton.addEventListener("click", createTrivia);
    setTimeout(() => {
      createButton.disabled = false;
    }, 5000);
  }
}

async function createTrivia(event) {
  event.preventDefault();

  const category = document.getElementById("category").value;
  const difficulty = document.getElementById("difficulty").value;
  const type = document.getElementById("type").value;
  const createSection = document.getElementsByClassName("main__create")[0];
  const createButton = document.querySelector(".main__create-button");
  const triviaSection = document.getElementsByClassName("main__trivia")[0];
  const triviaFieldset = document.getElementsByClassName(
    "main__trivia-fieldset"
  )[0];

  createButton.disabled = true;
  createButton.innerHTML = "Cargando...";
  const questions = await getQuestions(category, difficulty, type);
  if (questions.length === 0) {
    return;
  }
  triviaFieldset.innerHTML = "";
  questions.forEach((question, index) => {
    const label = document.createElement("label");
    label.classList.add("main__trivia-label");
    label.innerHTML = `Pregunta ${index + 1}`;
    triviaFieldset.appendChild(label);

    const divInfo = document.createElement("div");
    divInfo.classList.add("main__trivia-info");
    triviaFieldset.appendChild(divInfo);

    const pCategory = document.createElement("p");
    pCategory.innerHTML = question.category;
    divInfo.appendChild(pCategory);

    const pDifficulty = document.createElement("p");
    pDifficulty.innerHTML =
      question.difficulty === "easy"
        ? "Fácil"
        : question.difficulty === "medium"
        ? "Mediana"
        : "Difícil";
    divInfo.appendChild(pDifficulty);

    const pQuestion = document.createElement("p");
    pQuestion.classList.add("main__trivia-question");
    pQuestion.innerHTML = question.question;
    triviaFieldset.appendChild(pQuestion);

    const divAnswers = document.createElement("div");
    divAnswers.classList.add("main__trivia-answers");
    triviaFieldset.appendChild(divAnswers);

    const answers = question.incorrect_answers.concat(question.correct_answer);
    answers.sort(() => Math.random() - 0.5);
    answers.forEach((answer, i) => {
      const input = document.createElement("input");
      input.classList.add("hidden");
      input.type = "radio";
      input.id = `question${index}answer${i}`;
      input.name = `question${index}`;
      input.value = answer;
      divAnswers.appendChild(input);

      const label = document.createElement("label");
      label.classList.add("main__trivia-answer");
      if (question.correct_answer === answer) {
        label.classList.add("main__trivia-answer--correct");
      }
      label.setAttribute("for", `question${index}answer${i}`);
      label.innerHTML = answer;
      divAnswers.appendChild(label);
    });
  });
  const button = document.createElement("button");
  button.classList.add("main__trivia-button");
  button.setAttribute("type", "submit");
  button.innerHTML = "Evaluar";
  button.addEventListener("click", results);
  triviaFieldset.appendChild(button);

  createSection.classList.add("hidden");
  createButton.innerHTML = "Crear trivia";
  createButton.disabled = false;
  triviaSection.classList.remove("hidden");
}

function results(event) {
  event.preventDefault();

  const createSection = document.getElementsByClassName("main__create")[0];
  const triviaSection = document.getElementsByClassName("main__trivia")[0];
  const resetSection = document.getElementsByClassName("main__reset")[0];
  const triviaFieldset = document.getElementsByClassName(
    "main__trivia-fieldset"
  )[0];
  const answers = triviaFieldset.querySelectorAll(".main__trivia-answer");
  const correctAnswers = triviaFieldset.querySelectorAll(
    ".main__trivia-answer--correct"
  );
  const scoreP = document.getElementsByClassName("main__reset-score")[0];
  const resetButton = document.getElementsByClassName("main__reset-button")[0];

  let correct = 0;
  answers.forEach((answer) => {
    if (answer.classList.contains("main__trivia-answer--correct")) {
      const input = document.getElementById(answer.getAttribute("for"));
      if (input.checked) {
        correct++;
      }
    }
  });
  scoreP.innerHTML = `Has obtenido ${
    correct * 100
  } puntos de un total de 1000.`;
  resetButton.addEventListener("click", () => {
    triviaSection.classList.add("hidden");
    resetSection.classList.add("hidden");
    createSection.classList.remove("hidden");
  });

  triviaSection.classList.add("hidden");
  resetSection.classList.remove("hidden");
}

async function getCategories() {
  const URL = "https://opentdb.com/api_category.php";
  let categories = [];

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getQuestions(category = "", difficulty = "", type = "") {
  let URL = "https://opentdb.com/api.php?amount=10";
  URL += category !== "all" ? `&category=${category}` : "";
  URL += difficulty !== "all" ? `&difficulty=${difficulty}` : "";
  URL += type !== "all" ? `&type=${type}` : "";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.response_code !== 0) {
      error(
        "Solicitud fallida tipo " +
          data.response_code +
          ". Vuelva a intentarlo."
      );
    }
    return data.results;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

function error(message) {
  const createSection = document.getElementsByClassName("main__create")[0];
  const createButton = document.querySelector(".main__create-button");
  const triviaSection = document.getElementsByClassName("main__trivia")[0];
  const resetSection = document.getElementsByClassName("main__reset")[0];
  const scoreP = document.getElementsByClassName("main__reset-score")[0];
  const resetButton = document.getElementsByClassName("main__reset-button")[0];

  createButton.innerHTML = "Crear trivia";
  createButton.disabled = false;
  scoreP.innerHTML = message;
  resetButton.addEventListener("click", () => {
    triviaSection.classList.add("hidden");
    resetSection.classList.add("hidden");
    createSection.classList.remove("hidden");
  });

  createSection.classList.add("hidden");
  triviaSection.classList.add("hidden");
  resetSection.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", main);
