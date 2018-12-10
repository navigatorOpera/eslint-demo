import _ from 'lodash';
import chalk from 'chalk';

Array.from(new Set([1, 1, 1, 2, 3, 1, 2, 4, 6]));

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const c = _.chunk(arr, 2);

console.log(c);

const currying = (fn, n) => m => fn.call(this, m, n);

const facidoa = (n, m) => {
	if (n === 1) return m;
	return facidoa(n - 1, n * m);
};

const demo = currying(facidoa, 1);

const value = demo(5);
console.log(chalk.blue(value));
const log = console.log;
const promise = new Promise(resolve => resolve(30));
promise.then(val => log(chalk.red(val)));

// const cc = [];
