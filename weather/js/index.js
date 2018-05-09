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
  return '?' + par.join('&');
}
const url = baseURL + formatPar(urlPar);
const req = new Request(url, {
  mode: 'no-cors',
});
fetch(req)
.then(res => {
  console.log(res);
})
