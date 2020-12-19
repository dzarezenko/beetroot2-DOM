let element = document.getElementById("container");
console.log(element);

element.style.backgroundColor = "red";
element.style.width = "200px";
element.style.height = "200px";
console.log(element.style);

//let headers = document.getElementsByClassName('header1');
let headers = document.getElementsByTagName("h1");
console.log(headers);
let i = 0;
let colors = ["blue", "red", "orange"];
for (let h of headers) {
  h.style.color = colors[i++];
}

let el = document.querySelector("h1:first-child");
console.log(el);
