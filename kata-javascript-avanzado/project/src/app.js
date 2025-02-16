const difficulties = "easy, medium, hard";
const types = "boolean, multiple";

async function main() {
  const categories = await getCategories();
  console.log(categories);
  const questions = await getQuestions();
  console.log(questions);
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
