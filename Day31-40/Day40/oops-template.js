// ===============================
// 🔹 1. Class & Encapsulation
// ===============================
// Encapsulation = bundling data + methods together, controlling access using private (#)
class Student {
  #marks; // private property

  constructor(name, grade, marks) {
    this.name = name;
    this.grade = grade;
    this.#marks = marks;
  }

  // Public method (accessor)
  getMarks() {
    return this.#marks;
  }

  // Public method (mutator)
  setMarks(marks) {
    if (marks >= 0 && marks <= 100) {
      this.#marks = marks;
    } else {
      console.log("Invalid marks!");
    }
  }

  displayInfo() {
    console.log(`${this.name} is in grade ${this.grade} and scored ${this.#marks} marks.`);
  }
}

// ===============================
// 🔹 2. Inheritance
// ===============================
// Inheritance = child class reuses parent’s code
class Topper extends Student {
  constructor(name, grade, marks, rank) {
    super(name, grade, marks); // call parent constructor
    this.rank = rank;
  }

  displayInfo() {
    // ===============================
    // 🔹 3. Polymorphism (Method Overriding)
    // ===============================
    // Polymorphism = same method name, different behavior
    console.log(`${this.name} is a topper of grade ${this.grade} with rank ${this.rank}.`);
  }
}

// ===============================
// 🔹 4. Abstraction
// ===============================
// Abstraction = hiding complex logic, showing only necessary details
class Report {
  generate(student) {
    console.log("Generating report...");
    // hide internal logic
    console.log(`Name: ${student.name}`);
    console.log(`Grade: ${student.grade}`);
    console.log(`Marks: ${student.getMarks()}`);
  }
}

// ===============================
// 🔹 5. Object Creation & Usage
// ===============================
let s1 = new Student("Aditya", 10, 88);
s1.displayInfo();     // Aditya is in grade 10 and scored 88 marks.
s1.setMarks(92);
console.log(s1.getMarks()); // 92

let t1 = new Topper("Riya", 10, 98, 1);
t1.displayInfo();     // Riya is a topper of grade 10 with rank 1.

let report = new Report();
report.generate(t1);  // Abstraction example
