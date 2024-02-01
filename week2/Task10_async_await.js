/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
const URL = 'https://jsonplaceholder.typicode.com/posts';

function DisplayData(data) {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement('div');
    div.innerHTML = `${i}: ${JSON.stringify(data[i])}`;
    document.body.appendChild(div);
  }
}
async function getData() {
  try {
    const response = await fetch(URL);
    const json = await response.json();
    DisplayData(json);
  } catch (error) {
    console.error('Error Found', error);
  }
}

getData();
