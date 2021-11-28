// Write your code herem

main.remove();
const ul = document.createElement("ul");

const newHeader = document.createElement("h1");
const body = document.querySelector("body");
body.append(newHeader,ul);

for(let i = 0; i <3; i++)
{
    const newLi = document.createElement("li")
    newLi.textContent = i+1
    ul.append(newLi);
       
}

const child2 = ul.children[1];
const child3 = ul.children[2];
child2.style.color = "blue";
child3.style.fontSize = "64px"; 

console.log(child2);
// console.log(newHeader);

newHeader.setAttribute("id", "victory");

newHeader.textContent = "Lance is the champion";


