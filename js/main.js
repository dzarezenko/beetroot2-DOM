console.log(document.forms);
console.log(document.images);

setInterval(() => {
  //console.log("!!!");
  let firstSrc = document.images[0].src;
  for (let i = 0; i < document.images.length - 1; i++) {
    //console.log(document.images[i].src);
    document.images[i].src = document.images[i+1].src;
  }
  document.images[document.images.length - 1].src = firstSrc;
}, 3000);
