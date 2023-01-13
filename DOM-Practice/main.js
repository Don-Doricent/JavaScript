const container = document.querySelector('#container');

const pText = document.createElement('p');
pText.classList.add('pText');
pText.textContent = 'Hey! Im Red!';
container.appendChild(pText);

const hThree = document.createElement('h3');
hThree.classList.add('hThree');
hThree.textContent = "i'm a blue h3!";
container.appendChild(hThree);
