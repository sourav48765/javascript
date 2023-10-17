# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-5cjfec?file=1-colorChanger%2Fchaiaurcode.js)


# Solutions

## project 1 solution

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    // if(e.target.id === 'grey'){
    //   body.style.backgroundColor = e.target.id
    // }
    switch(e.target.id){
      case 'grey':
      body.style.backgroundColor = e.target.id;
      break;
      case 'white':
      body.style.backgroundColor = e.target.id;
      break;
      case 'blue':
      body.style.backgroundColor = e.target.id;
      break;
      case 'yellow':
      body.style.backgroundColor = e.target.id;
      break;
      case 'purple':
      body.style.backgroundColor = e.target.id;
      break;
    }
  })
})
```

## project 2 solution
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
    function addSpanText(text){
      const span = document.createElement('span');
      span.appendChild(document.createTextNode(text));
      results.appendChild(span);
    }
    if (bmi < 18.6) {
      addSpanText("-you're under Weight");
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      addSpanText("-you're in normal range");
    } else {
      addSpanText("-you're Over Weight");
    }
    // if (bmi < 18.6) {
    //   results.innerHTML += ` - you're under Weight`;
    // } else if (bmi >= 18.6 && bmi <= 24.9) {
    //   results.innerHTML += ` - you're in normal range`;
    // } else {
    //   results.innerHTML += ` - you're Over Weight`;
    // }

  }
});

```

## project 3 solution 
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```