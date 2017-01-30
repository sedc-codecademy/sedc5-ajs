/**
 * Get file contents using Ajax. If a callback function is given, the content recieved from the response is passed as an argument. If array of file names is given a random file is selected.
 * @param {(string|Array<string>)} file
 * @param {Function} calculateCb 
 */
function getFile(file, calculateCb) {
  if (typeof calculateCb !== 'function') {
  calculateCb = content => console.log(content);
  }

  let xhr = new XMLHttpRequest();
  xhr.open('GET', `./data/${file}`, true);
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let response = JSON.parse(xhr.response);
      if (Array.isArray(response)) {
        let fileList = response;
        let randomFileIndex = Math.floor(Math.random() * fileList.length);
        let randomFile = fileList[randomFileIndex];
        getFile(randomFile, calculateCb);
      }
      else {
        calculateCb(xhr.response);
      }
    }
  }
}

/**
 * Responsible to find and perform proper math operation.
 * @param {string} content
 */
function calculate(content) {
  content = JSON.parse(content);
  let numbersList = content.data;
  let operation = calculator[content.operation];
  let result = numbersList.map((num) => operation(num));
  result = result.reduce((a, b) => a + b, 0)
  result = `The operation <b>${content.operation}</b> applied to the array ${numbersList.toString()} gives a result of <b>${result}</b>.`;
  displayResult(result);
}

/**
 * Displays the result on the page
 * @param {string} result
 */
function displayResult(result) {
  let display = document.getElementById('display');
  let p = document.createElement('p');
  p.innerHTML = result;
  display.innerHTML = '';
  display.appendChild(p);
}

let calculator = {
  sine: num => Math.sin(num),
  cosine: num => Math.cos(num),
  log: num => Math.log(num),
  square: num => num * num,
  cube: num => num * num * num
}

document.addEventListener('DOMContentLoaded', function(){
  let button = document.getElementById('button');
  let file = 'filelist.json';
  button.addEventListener('click', function () {
    getFile('filelist.json', calculate);
  }) 
})