import Student from "../public/statics/js/Student.js";

const students = [];
const groups = new Map();

function main() {
  initializeSpans();
  initializeForms();

  updateStudents();
}

function initializeSpans() {
  const spanElements = document.querySelectorAll(".aside__section-span");

  spanElements.forEach((span) => {
    const form = span.nextElementSibling;
    const icon = span.querySelector("i");

    span.addEventListener("click", () => {
      const isFormVisible = !form.classList.contains("hide");

      document.querySelectorAll(".aside__form").forEach((form) => {
        form.classList.add("hide");
      });
      document.querySelectorAll(".aside__section-span i").forEach((icon) => {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-right");
      });

      if (!isFormVisible) {
        icon.classList.toggle("fa-chevron-right");
        icon.classList.toggle("fa-chevron-down");
        form.classList.toggle("hide");
      }
    });
  });
}

function initializeForms() {
  document
    .querySelector(".aside__form--add-student")
    .addEventListener("submit", addStudent);
  document
    .querySelector(".aside__form--enroll-subject")
    .addEventListener("submit", enrollSubject);
  document
    .getElementById("student-grade")
    .addEventListener("change", updateSubjects);
  document
    .querySelector(".aside__form--assign-grade")
    .addEventListener("submit", assignGrade);
}

function addStudent(event) {
  event.preventDefault();

  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const age = parseInt(document.getElementById("age").value, 10);
  const studentExists = students.some(
    (student) =>
      student.firstName === firstName && student.lastName === lastName
  );

  if (studentExists) {
    alert("Ya existe un estudiante con el mismo nombre y apellidos.");
    return;
  }

  const newStudent = new Student(firstName, lastName, age);
  students.push(newStudent);
  updateStudents();
  updateStudentTable();

  console.log(
    `Alumno registrado: ${newStudent.firstName} ${newStudent.lastName}, Edad: ${newStudent.age}`
  );
  document.querySelector(".aside__form--add-student").reset();
}

function updateStudents() {
  const dataLists = document.querySelectorAll(".aside__form-students");

  dataLists.forEach((datalist) => {
    datalist.innerHTML = "";
    students.forEach((student) => {
      const option = document.createElement("option");
      option.value = `${student.firstName} ${student.lastName}`;
      datalist.appendChild(option);
    });
  });
}

function enrollSubject(event) {
  event.preventDefault();

  const studentName = document.getElementById("student-subject").value.trim();
  const student = students.find(
    (student) => `${student.firstName} ${student.lastName}` === studentName
  );
  const subject = document.getElementById("subject").value.trim();

  if (student) {
    if (student.subjects && student.subjects[subject]) {
      console.log(`${studentName} ya está inscrito en la materia ${subject}.`);
    } else {
      student.addSubject(subject);
      updateStudentTable();
      console.log(`${studentName} ha sido inscrito en la materia ${subject}.`);
    }
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
  document.querySelector(".aside__form--enroll-subject").reset();
}

function updateSubjects() {
  const dataLists = document.querySelectorAll(".aside__form-subjects");
  const studentName = document.getElementById("student-grade").value.trim();
  const student = students.find(
    (student) => `${student.firstName} ${student.lastName}` === studentName
  );

  if (student) {
    dataLists.forEach((datalist) => {
      datalist.innerHTML = "";
      if (Object.keys(student.subjects).length !== 0) {
        toggleElementsVisibility(
          ".aside__form--assign-grade .aside__form--hide",
          true
        );
        Object.keys(student.subjects).forEach((subject) => {
          const option = document.createElement("option");
          option.value = subject;
          datalist.appendChild(option);
        });
      } else {
        console.log("No hay materias inscritas.");
        document.querySelector(".aside__form--assign-grade").reset();
      }
    });
  } else {
    toggleElementsVisibility(
      ".aside__form--assign-grade .aside__form--hide",
      false
    );
    console.log(`Alumno ${studentName} no encontrado.`);
  }
}

function assignGrade(event) {
  event.preventDefault();

  const studentName = document.getElementById("student-grade").value.trim();
  const student = students.find(
    (student) => `${student.firstName} ${student.lastName}` === studentName
  );
  const subject = document.getElementById("subject-grade").value.trim();
  const isStudentSubject = student.subjects[subject] !== undefined;
  const grade = parseFloat(document.getElementById("grade").value);

  if (student) {
    if (isStudentSubject) {
      student.updateGrade(subject, grade);
      updateStudentTable();
      console.log(
        `Se ha asignado la calificación ${grade} en ${subject} a ${studentName}.`
      );
    } else {
      console.log(
        `El alumno ${studentName} no está inscrito en la materia ${subject}.`
      );
    }
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
  toggleElementsVisibility(
    ".aside__form--assign-grade .aside__form--hide",
    false
  );
  document.querySelector(".aside__form--assign-grade").reset();
}

function toggleElementsVisibility(classes, show) {
  const elements = document.querySelectorAll(classes);
  elements.forEach((element) => {
    if (show) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
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

function updateStudentTable() {
  const tableBody = document.querySelector(".main__table-body");
  tableBody.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");
    row.classList.add("main__table-list");

    const ageCell = document.createElement("td");
    ageCell.classList.add("main__table-item");
    ageCell.textContent = student.age;

    const nameCell = document.createElement("td");
    nameCell.classList.add("main__table-item");
    nameCell.textContent = `${student.firstName} ${student.lastName}`;

    const groupCell = document.createElement("td");
    groupCell.classList.add("main__table-item");
    groupCell.textContent = "-"; // Grupo no implementado

    const subjectsCell = document.createElement("td");
    subjectsCell.classList.add("main__table-item");
    if (Object.keys(student.subjects).length !== 0) {
      subjectsCell.textContent = Object.entries(student.subjects)
        .map(([subject, grade]) => `${subject}: ${grade}`)
        .join(", ");
    } else {
      subjectsCell.textContent = "-";
    }

    const averageCell = document.createElement("td");
    averageCell.classList.add("main__table-item");
    averageCell.textContent = "-"; // Promedio no implementado

    row.appendChild(ageCell);
    row.appendChild(nameCell);
    row.appendChild(groupCell);
    row.appendChild(subjectsCell);
    row.appendChild(averageCell);

    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", main);
