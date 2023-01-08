const method = require("extra-method")

/* Methods */

// Fastermap
module.exports.fasterMap = Array.prototype.fasterMap = function(transform) {
  const len = this.length
  const newArr = new Array(len);
  for (let i = 0; i < len; i++) {
    newArr[i] = transform(this[i], i);
  }
  return newArr;
};

// Remove
module.exports.remove = Array.prototype.remove = function(value) {
  var index = this.indexOf(value);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

// Remove All
module.exports.removeAll = Array.prototype.removeAll = function(value) {
  var i = 0;
  while (i < this.length) {
    if (this[i] === value) {
      this.splice(i, 1);
    } else {
      ++i;
    }
  }
  return this;
};

