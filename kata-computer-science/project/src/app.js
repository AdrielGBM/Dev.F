import Student from "../public/statics/js/Student.js";

let students = [];

function main() {
  loadFromLocalStorage();
  initializeSpans();
  initializeForms();

  updateStudents();
  updateSubjects("aside__form--assign-grade", "subject-grade", "student-grade");
  updateSubjects(
    "aside__form--delete-elements",
    "subject-delete",
    "student-delete"
  );
  updateGroups();
  updateStudentsTable();
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
  document.getElementById("student-grade").addEventListener("input", () => {
    updateSubjects(
      "aside__form--assign-grade",
      "subject-grade",
      "student-grade"
    );
  });
  document
    .querySelector(".aside__form--assign-grade")
    .addEventListener("submit", assignGrade);
  document
    .querySelector(".aside__form--assign-group")
    .addEventListener("submit", assignGroup);
  document.getElementById("student-delete").addEventListener("input", () => {
    updateSubjects(
      "aside__form--delete-elements",
      "subject-delete",
      "student-delete"
    );
  });
  document
    .querySelector(".aside__form--delete-elements")
    .addEventListener("submit", deleteElements);
  document
    .getElementById("filter")
    .addEventListener("input", updateStudentsTable);
  document
    .getElementById("order")
    .addEventListener("input", updateStudentsTable);
  document
    .querySelector(".main__section-button")
    .addEventListener("click", (event) => changeSortOrder(event));
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
  sortStudents();
  updateStudents();
  updateStudentsTable();

  console.log(
    `Alumno registrado: ${newStudent.firstName} ${newStudent.lastName}, Edad: ${newStudent.age}`
  );
  document.querySelector(".aside__form--add-student").reset();
}

function updateStudents() {
  const selects = document.querySelectorAll(
    "#student-subject, #student-grade, #student-group, #student-delete"
  );

  selects.forEach((select) => {
    select.innerHTML = "";
    students.forEach((student) => {
      if (
        select.id === "student-grade" &&
        Object.keys(student.subjects).length === 0
      ) {
        return;
      }
      const option = document.createElement("option");
      option.value = `${student.firstName} ${student.lastName}`;
      option.innerHTML = `${student.firstName} ${student.lastName}`;
      select.appendChild(option);
    });
  });
}

function enrollSubject(event) {
  event.preventDefault();

  const studentName = document.getElementById("student-subject").value.trim();
  const student = findStudent(studentName);
  const subject = document.getElementById("subject").value.trim();

  if (student) {
    if (subject in student.subjects) {
      console.log(`${studentName} ya está inscrito en la materia ${subject}.`);
    } else {
      student.addSubject(subject);
      updateStudentsTable();
      console.log(`${studentName} ha sido inscrito en la materia ${subject}.`);
    }
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
  document.querySelector(".aside__form--enroll-subject").reset();
}

function updateSubjects(formClass, selectId, studentNameId) {
  const select = document.getElementById(selectId);
  const studentName = document.getElementById(studentNameId).value.trim();
  const student = findStudent(studentName);

  console.log(student);

  if (student) {
    select.innerHTML = "";
    toggleElementsVisibility(`.${formClass} .aside__form--hide`, true);
    Object.keys(student.subjects).forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.innerHTML = subject;
      select.appendChild(option);
    });
  } else {
    toggleElementsVisibility(`.${formClass} .aside__form--hide`, false);
    console.log(`Alumno ${studentName} no encontrado.`);
  }
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

function assignGrade(event) {
  event.preventDefault();

  const studentName = document.getElementById("student-grade").value.trim();
  const student = findStudent(studentName);
  const subject = document.getElementById("subject-grade").value.trim();
  const isStudentSubject = student.subjects[subject] !== undefined;
  const grade = parseFloat(document.getElementById("grade").value);

  if (student) {
    if (isStudentSubject) {
      student.updateGrade(subject, grade);
      updateStudentsTable();
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
  document.querySelector(".aside__form--assign-grade").reset();
}

function assignGroup(event) {
  event.preventDefault();

  const studentName = document.getElementById("student-group").value.trim();
  const student = findStudent(studentName);
  const groupName = document.getElementById("group").value.trim();

  if (student) {
    if (student.group !== null) {
      console.log(
        `${studentName} ha sido removido del grupo ${student.group}.`
      );
      student.group = null;
    }

    student.setGroup(groupName);
    updateGroups();
    updateStudentsTable();
    console.log(`${studentName} ha sido añadido al grupo ${groupName}.`);
  } else {
    console.log(`Alumno ${studentName} no encontrado.`);
  }
  document.querySelector(".aside__form--assign-group").reset();
}

function updateGroups() {
  const dataLists = document.querySelectorAll(".aside__form-groups");

  const groups = [
    ...new Set(students.map((student) => student.group).filter(Boolean)),
  ];

  dataLists.forEach((datalist) => {
    datalist.innerHTML = "";
    groups.forEach((groupName) => {
      const option = document.createElement("option");
      option.value = groupName;
      datalist.appendChild(option);
    });
  });
}

function deleteElements(event) {}

function findStudent(studentName) {
  return students.find(
    (student) => `${student.firstName} ${student.lastName}` === studentName
  );
}

function updateStudentsTable() {
  const filter = document.getElementById("filter").value.trim();
  const order = document.getElementById("order").value.trim();
  const sort = document.getElementById("sort").textContent;

  const tableBody = document.querySelector(".main__table-body");
  tableBody.innerHTML = "";
  let filtered = [];

  if (filter) {
    filtered = students.filter((student) =>
      [student.age, student.firstName, student.lastName, student.group].some(
        (value) => String(value).toLowerCase().includes(filter.toLowerCase())
      )
    );
  } else {
    filtered = [...students];
  }
  if (order) {
    filtered.sort((a, b) => {
      let valueA, valueB;

      switch (order.toLowerCase()) {
        case "first-name":
          valueA = (a.firstName + a.lastName).toLowerCase();
          valueB = (b.firstName + b.lastName).toLowerCase();
          break;
        case "last-name":
          valueA = (a.lastName + a.firstName).toLowerCase();
          valueB = (b.lastName + b.firstName).toLowerCase();
          break;
        case "age":
          valueA = a.age;
          valueB = b.age;
          break;
        case "group":
          valueA = a.group ? a.group.toLowerCase() : "";
          valueB = b.group ? b.group.toLowerCase() : "";
          break;
        case "average":
          valueA = a.getAverage();
          valueB = b.getAverage();
          break;
        default:
          return 0;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sort === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return sort === "asc" ? valueA - valueB : valueB - valueA;
      }
    });
  }

  filtered.forEach((student) => {
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
    groupCell.textContent = student.group || "-";

    const subjectsCell = document.createElement("td");
    subjectsCell.classList.add("main__table-item");
    const averageCell = document.createElement("td");
    averageCell.classList.add("main__table-item");

    if (Object.keys(student.subjects).length !== 0) {
      subjectsCell.textContent = Object.entries(student.subjects)
        .map(([subject, grade]) => `${subject}: ${grade}`)
        .join(", ");
      averageCell.textContent = student.getAverage();
    } else {
      subjectsCell.textContent = "-";
      averageCell.textContent = "-";
    }

    row.appendChild(ageCell);
    row.appendChild(nameCell);
    row.appendChild(groupCell);
    row.appendChild(subjectsCell);
    row.appendChild(averageCell);

    tableBody.appendChild(row);
  });
  saveToLocalStorage();
}

function changeSortOrder(event) {
  const button = event.target;

  button.textContent = button.textContent === "asc" ? "desc" : "asc";
  sortStudents();
  updateStudentsTable();
}

function sortStudents() {
  const sort = document.getElementById("sort").textContent;

  students = students.sort((a, b) => {
    const valueA = (a.firstName + a.lastName).toLowerCase();
    const valueB = (b.firstName + b.lastName).toLowerCase();
    return sort === "asc"
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  });
}

function loadFromLocalStorage() {
  const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

  storedStudents.forEach((data) => {
    const student = new Student(
      data.firstName,
      data.lastName,
      data.age,
      data.subjects,
      data.group
    );
    students.push(student);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

document.addEventListener("DOMContentLoaded", main);
