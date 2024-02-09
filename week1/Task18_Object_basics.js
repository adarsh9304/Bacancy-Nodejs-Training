/* eslint-disable no-console */
const book = {
  title: 'Psychology of money',
  author: 'Morgan Housel',
  pages: '300',
  displayInfo() {
    console.log(`Title of book is ${this.title} which is written by ${this.author} and total pages are ${this.pages}`);
  },
};
book.displayInfo();
