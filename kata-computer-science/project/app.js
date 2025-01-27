class Student {
  constructor(firstName, lastName, age, enrolledSubjects, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.enrolledSubjects = enrolledSubjects;
    this.grades = grades;
  }

  getAverage() {
    const grades = Object.values(this.grades);
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return grades.length > 0 ? (sum / grades.length).toFixed(1) : 0;
  }

  addSubject(subject, initialGrade = 0) {
    if (!this.enrolledSubjects.includes(subject)) {
      this.enrolledSubjects.push(subject);
      this.grades[subject] = initialGrade;
    }
  }

  updateGrade(subject, grade) {
    if (this.grades[subject] !== undefined) {
      this.grades[subject] = grade;
    }
  }
}

const students = [];

function registerStudent() {
  const firstName = prompt("Ingrese el nombre del alumno:");
  const lastName = prompt("Ingrese los apellidos del alumno:");
  const age = parseInt(prompt("Ingrese la edad del alumno:"));

  const newStudent = new Student(firstName, lastName, age);
  students.push(newStudent);

  console.log(
    `Alumno registrado: ${newStudent.firstName} ${newStudent.lastName}, Edad: ${newStudent.age}`
  );
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
