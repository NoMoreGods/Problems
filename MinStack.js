//Имплементировать MinStack в котором функции работают за константное время

class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }
  push(value) {
    this.min = this.min <= value ? value : this.min;
    this.stack.push([value, this.min]);
  }
  pop() {
    return this.stack.pop()[0];
  }
  getMin() {
    return this.stack.at(-1)[1];
  }
}
