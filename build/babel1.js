"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.set");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

var _lodash = _interopRequireDefault(require("lodash"));

var _chalk = _interopRequireDefault(require("chalk"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Array.from(new Set([1, 1, 1, 2, 3, 1, 2, 4, 6]));
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var c = _lodash.default.chunk(arr, 2);

console.log(c);

var currying = function currying(fn, n) {
  return function (m) {
    return fn.call(_this, m, n);
  };
};

var facidoa = function facidoa(n, m) {
  if (n === 1) return m;
  return facidoa(n - 1, n * m);
};

var demo = currying(facidoa, 1);
var value = demo(5);
console.log(_chalk.default.blue(value));
var log = console.log;
var promise = new Promise(function (resolve) {
  return resolve(30);
});
promise.then(function (val) {
  return log(_chalk.default.red(val));
});
var cc = [];