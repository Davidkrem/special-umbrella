/*Q2. OOP general programming
In the real world, a man has a mouth. His mouth can do operations like open/close at the man's will.
● He can open and close his mouth as he wishes.
● Nobody can force a man to open/close his mouth.
● A doctor can ask a man to open/close his mouth and a man will do so.
● He refuses anyone else who asks him to open/close his mouth other than doctors

Use OOP Designs to make needed classes with methods to meet those requirements. You can use any language or
pseudo-code to write down your results. */

//write a Class for opening and closing mouth
class Man {
  constructor(name, isDoctor = false) {
    this.name = name;
    this.isDoctor = isDoctor;
  }
  getName() {
    return `Hi, I'm ${this.name}!`;
  }
  mouthOpen() {
    return `${this.name} opened his mouth`;
  }
  mouthClosed() {
    return `${this.name} closed his mouth`;
  }
  isDoctor() {
    return this.isDoctor;
  }
  doctorRequestsOpenMouth() {
    if (this.isDoctor) {
      this.mouthOpen();
    }
  }
  doctorRequestsCloseMouth() {
    if (this.isDoctor) {
      this.mouthClose();
    }
  }
  refuseOpenMouth() {
    if (!this.isDoctor) {
      return `${this.name} refused to open his mouth`;
    }
  }
}

class Doctor extends Man {
  hello(greet) {
    return `$Hi ${this.name}, I'm ${greet}! `;
  }
}

let doctorKrem = new Doctor('Dr. Kremenitzer');

doctorKrem.hello('Doctor Kremenitzer. Great to see you');
doctorKrem.doctorRequestsOpenMouth();
doctorKrem.doctorRequestsCloseMouth();
