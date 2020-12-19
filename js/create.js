let el = document.createElement("p");
el.innerText = "My paragraph";
el.style.color = "red";
el.classList.add("my-p");

console.log(el);

document.body.appendChild(el);

el.style.textDecoration = "underline";

let inp = document.createElement("input");
inp.type = "checkbox";
inp.checked = true;
document.forms[0].appendChild(inp);

document.forms[0].prepend(
  document.createElement("input")
);

document.createTextNode();
