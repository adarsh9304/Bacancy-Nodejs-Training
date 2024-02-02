/* eslint-disable no-console */
// prints passed arguments in node command.

const nameArg = process.argv.slice(2);

if (nameArg.length === 0) {
  console.log('please provide your name');
} else {
  console.log('you type your name is', nameArg.join('_'));
}
