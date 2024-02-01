/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Fetch and display the response

const URL = 'https://jsonplaceholder.typicode.com/posts';

function DisplayData(data) {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement('div');
    div.innerHTML = `${i}: ${JSON.stringify(data[i])}`;
    document.body.appendChild(div);
  }
}
function getData() {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      DisplayData(json);
    })
    .catch((error) => {
      console.error('Error Found', error);
    });
}

getData();
