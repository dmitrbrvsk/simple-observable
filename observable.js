class Observable {
  constructor(source) {
    this.source = source.split('');
    this.result = this.source;
  }

  subscribe(next) {
    for (let item of this.result) {
      next(item);
    }
  }

  map(callback) {
    this.result = this.result.map(callback);
    return this;
  }

  filter(predicate) {
    this.result = this.result.filter(predicate);
    return this;
  }
}

new Observable('HelloWorld')
  .map(str => str.toUpperCase())
  .filter(str => str === 'W')
  .subscribe(str => console.log(str));
