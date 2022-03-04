const { KhmerDate } = require('./lib');

const date = new KhmerDate(new Date('2020-07-17T21:30:15.330Z'))

console.log(date.getDate())