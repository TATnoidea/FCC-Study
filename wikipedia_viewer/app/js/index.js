let btnSearch = document.querySelector(".shell");
let input = document.querySelector(".search");
let line = document.querySelector(".line");
let close = document.querySelector(".close");
// 搜索的api地址
const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
//点击搜索按钮展开搜索框
btnSearch.addEventListener("click", () => {
  btnSearch.style.width = "300px";
  line.style.top = "5px";
  line.style.right = "15px";
  line.style.opacity = 0;
  close.style.display = "block";
  close.style.opacity = 1;
  setTimeout(() => {
    input.readOnly = false;
  }, 300);
});
// 点击关闭时关闭搜索框
close.addEventListener("click", e => {
  document.querySelector('.res-list').innerHTML = '';
  document.querySelector('.res-list').style.display = 'none';
  document.querySelector('.explain').style.display = 'block';
  e.cancelBubble = true;
  btnSearch.style.width = "40px";
  close.style.display = "none";
  close.style.opacity = 0;
  input.value = "";
  input.readOnly = true;
  setTimeout(() => {
    line.style.opacity = 1;
    line.style.top = "15px";
    line.style.right = "5px";
  }, 300);
});
// 创建script标签，发送jsonp请求
function jsonp(link, callback) {
  let script = document.createElement('script');
  script.id = 'jsonp';
  script.src = link + '&callback=' + callback;
  document.querySelector('body').appendChild(script);
}
// 请求回调
function callback(res) {
  document.querySelector('.explain').style.display = "none";
  document.querySelector('.res-list').style.display = 'block';
  let html = ""
  for(let i = 0; i < res[1].length; i++) {
    html += `<li class="res-list-item"><a target="_blank" href="${res[3][i]}"><h3>${res[1][i]}</h3><p>${res[2][i].split('.')[0]}.</p></a></li>`
  }
  document.querySelector(".res-list").innerHTML = html;
  document.querySelector('body').removeChild(document.querySelector('#jsonp'));//成功后删除标签
}

input.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    let link = url + input.value;
    jsonp(link, 'callback')
  }
})


