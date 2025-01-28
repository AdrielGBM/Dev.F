import Student from "../public/statics/js/Student.js";

const students = [];
const groups = new Map();

function main() {
  initializeSpans();
  initializeForms();
}

function initializeSpans() {
  const spanElements = document.querySelectorAll(".aside__section-span");

  spanElements.forEach((span) => {
    span.addEventListener("click", () => {
      span.classList.toggle("open");
    });
  });
}

function initializeForms() {
  document
    .querySelector(".aside__form--add-student button")
    .addEventListener("click", addStudent);
}

function addStudent() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const age = parseInt(document.getElementById("age").value);

  if (firstName && lastName && !isNaN(age)) {
    const newStudent = new Student(firstName, lastName, age);
    students.push(newStudent);

    console.log(
      `Alumno registrado: ${newStudent.firstName} ${newStudent.lastName}, Edad: ${newStudent.age}`
    );
  } else {
    console.log(
      "Por favor, complete todos los campos del formulario correctamente."
    );
  }
}

function enrollStudentInSubject(studentName, subject) {
  const student = students.find(
    (s) => `${s.firstName} ${s.lastName}` === studentName
  );
  if (student) {
    student.addSubject(subject);
    console.log(`${studentName} ha sido inscrito en la materia ${subject}.`);
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
}

function assignGrade(studentName, subject, grade) {
  const student = students.find(
    (s) => `${s.firstName} ${s.lastName}` === studentName
  );
  if (student) {
    student.updateGrade(subject, grade);
    console.log(
      `Se ha asignado la calificación ${grade} en ${subject} a ${studentName}.`
    );
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
}

function createGroup(groupName) {
  if (!groups.has(groupName)) {
    groups.set(groupName, []);
    console.log(`Grupo ${groupName} creado.`);
  } else {
    console.log(`El grupo ${groupName} ya existe.`);
  }
}

function addStudentToGroup(groupName, studentName) {
  const group = groups.get(groupName);
  const student = students.find(
    (s) => `${s.firstName} ${s.lastName}` === studentName
  );

  if (group && student) {
    group.push(student);
    console.log(`${studentName} ha sido añadido al grupo ${groupName}.`);
  } else if (!group) {
    console.log(`El grupo ${groupName} no existe.`);
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
}

function searchByName(name) {
  const results = students.filter((student) => student.firstName === name);
  console.log(`Resultados para nombre '${name}':`, results);
}

function searchByLastName(lastName) {
  const results = students.filter((student) => student.lastName === lastName);
  console.log(`Resultados para apellido '${lastName}':`, results);
}

function getStudentAverage(studentName) {
  const student = students.find(
    (s) => `${s.firstName} ${s.lastName}` === studentName
  );
  if (student) {
    console.log(`Promedio de ${studentName}: ${student.getAverage()}`);
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
}

function getGroupAverage(groupName) {
  const group = groups.get(groupName);
  if (group) {
    const totalAverage = group.reduce(
      (sum, student) => sum + parseFloat(student.getAverage()),
      0
    );
    const average =
      group.length > 0 ? (totalAverage / group.length).toFixed(2) : 0;
    console.log(`Promedio del grupo ${groupName}: ${average}`);
  } else {
    console.log(`El grupo ${groupName} no existe.`);
  }
}

function sortStudentsByGrade(order = "asc") {
  const sorted = [...students].sort((a, b) => {
    const avgA = parseFloat(a.getAverage());
    const avgB = parseFloat(b.getAverage());
    return order === "asc" ? avgA - avgB : avgB - avgA;
  });
  console.log(
    `Alumnos ordenados por calificación (${
      order === "asc" ? "ascendente" : "descendente"
    }):`,
    sorted
  );
}

function sortStudentsByAge(order = "asc") {
  const sorted = [...students].sort((a, b) => {
    return order === "asc" ? a.age - b.age : b.age - a.age;
  });
  console.log(
    `Alumnos ordenados por edad (${
      order === "asc" ? "ascendente" : "descendente"
    }):`,
    sorted
  );
}

document.addEventListener("DOMContentLoaded", main);
