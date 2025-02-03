export default class Student {
  constructor(firstName, lastName, age, subjects = {}, group = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.subjects = subjects;
    this.group = group;
  }

  getAverage() {
    const grades = Object.values(this.subjects);
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return grades.length > 0 ? parseFloat((sum / grades.length).toFixed(2)) : 0;
  }

  addSubject(subject, initialGrade = 0) {
    if (!this.subjects[subject]) {
      this.subjects[subject] = initialGrade;
    }
  }

  updateGrade(subject, grade) {
    if (this.subjects[subject] !== undefined) {
      this.subjects[subject] = grade;
    }
  }

  setGroup(groupName) {
    this.group = groupName;
  }
}
