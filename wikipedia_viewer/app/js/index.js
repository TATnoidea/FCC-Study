let btnSearch = document.querySelector(".shell");
let input = document.querySelector(".search");
let line = document.querySelector(".line");
let close = document.querySelector(".close");
// let xhr = new XMLHttpRequest();
// let req = new Request(url)
const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
btnSearch.addEventListener("click", () => {
  btnSearch.style.width = "300px";
  line.style.top = "5px";
  line.style.right = "15px";
  close.style.display = "block";
  close.style.opacity = 1;
  setTimeout(() => {
    input.readOnly = false;
  }, 300);
});
// btnSearch.addEventListener("transitionend", () => {
//   if(btnSearch.style.width = "300px") {
//     input.readOnly = false;
//   }
// })
close.addEventListener("click", e => {
  e.cancelBubble = true;
  btnSearch.style.width = "40px";
  close.style.display = "none";
  close.style.opacity = 0;
  input.value = "";
  input.readOnly = true;
  setTimeout(() => {
    line.style.top = "15px";
    line.style.right = "5px";
  }, 300);
});

input.addEventListener("keydown", e => {
  if(e.keyCode === 13) {
     let link = url + input.value;
    fetch(link).then(res => {
      console.log(res)
    })
  }
}) 