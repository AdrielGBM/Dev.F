async function main() {
  initializeCreateSection();
  const questions = await getQuestions();
  console.log(questions);
}

async function initializeCreateSection() {
  const createSection = document.querySelector(".main__create");
  const categorySelect = document.getElementById("category");
  const createButton = document.querySelector(".main__create-button");

  const categories = await getCategories();
  if (categories) {
    categorySelect.innerHTML = "";
    categories.unshift({ id: 0, name: "Cualquier categoría" });
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.id;
      option.text = category.name;
      categorySelect.appendChild(option);
    });

    createButton.addEventListener("submit", initializeTriviaSection);
    createButton.disabled = false;
  }
}

function initializeTriviaSection(event) {
  event.preventDefault();
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

async function getQuestions(category = 0, difficulty = "", type = "") {
  let URL = "https://opentdb.com/api.php?amount=10";
  URL += category ? `&category=${category}` : "";
  URL += difficulty ? `&difficulty=${difficulty}` : "";
  URL += type ? `&type=${type}` : "";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error:", error);
  }
}

document.addEventListener("DOMContentLoaded", main);
