class Timer {
  constructor() {
    this.record = 0;
  }

  start() {
    this.record = Date.now();
    return this;
  }

  stop() {
    this.record = Date.now() - this.record;
    return this;
  }

  print() {
    console.log('time:', this.record);
  }
}

module.exports = Timer;