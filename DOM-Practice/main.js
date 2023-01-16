const container = document.querySelector('#container');

const pText = document.createElement('p');
pText.classList.add('pText');
pText.textContent = 'Hey! Im Red!';
container.appendChild(pText);

const hThree = document.createElement('h3');
hThree.classList.add('hThree');
hThree.textContent = "i'm a blue h3!";
container.appendChild(hThree);

const div = document.createElement('div');
div.appendChild('h1');
div.appendChild('p');
h1.textContent = "i'm in a div";
p.textContent = "ME TOO!";
container.appendChild(h1);
container.appendChild(p);
