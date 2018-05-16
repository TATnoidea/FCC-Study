const baseURL = 'http://v.juhe.cn/weather/index';
const key = '3f0e47f4597e748736a8a37ec8898fa3';
const urlPar = {
  cityname: '1',
  key: key
};

let formatPar = urlPar => {
  let par = [];
  for(let key in urlPar) {
    par.push(key + '=' + urlPar[key]);
  }
  return par.join('&');
}

let script = document.createElement('script');
script.src = baseURL + '?' + formatPar(urlPar) + '&callback=callback';
document.querySelector('body').appendChild(script);

function callback(res) {
  let arr = [];
  for( let prop in res.result.future) {
    let date = prop.split("_")[1].split("").map((item, index) => {
      if(index === 3) {
        return item + '年'
      }
      if(index === 4 && item === '0') {
        return;
      }
      if(index === 5) {
        return item + '月';
      }
      if(index === 6 && item === '0') {
        return;
      }
      if(index === 7) {
        return item + '日';
      }
      return item;
    }).join("");
    res.result.future[prop].date = date;
    arr.push(res.result.future[prop]);
  }
  res.result.future = arr;
  const tpl = document.querySelector("#tpl").innerHTML;
  const html = template(tpl, {data: res.result});
  document.querySelector(".content").innerHTML = html;
  document.body.removeChild(script);
}
