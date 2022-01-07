const id = document.getElementById('container');
console.log(id);

const sel = document.querySelector('#container');
console.log(sel);

const second = document.querySelector('section').getElementsByClassName('second');
console.log(second);

const third = document.querySelector('section').querySelector('ol li.third');
console.log(third);

const hi = document.getElementById('container');
hi.append("Hello");
console.log(hi);

let foot = document.getElementsByClassName("footer")[0];
foot.classList.add("main");
console.log(foot);

let foot1= document.getElementsByClassName("footer")[0];
foot1.classList.remove("main");
console.log(foot1);

const nli = document.createElement("li");
nli.innerText = "four";

let litoul = document.querySelector("ul");
litoul.appendChild(nli);

const liinOl = document.querySelectorAll("ol li");
for(let i = 0; i < liinOl.length; i++)
{
    liinOl[i].style.backgroundColor = "green";
}

let foot2 = document.getElementsByClassName("footer")[0];
foot2.remove();