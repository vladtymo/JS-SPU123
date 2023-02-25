// -------------- document --------------
const username = prompt("Enter your name:");

// 1 - using document methods
let par = document.createElement("p");
par.innerText = `Hello, dear: ${username}`;
par.style.color = 'darkcyan';

document.body.appendChild(par);

// 2 - using document write
document.write(`<p style='color: darkcyan;'>Hello, dear: ${username}</p>`);
