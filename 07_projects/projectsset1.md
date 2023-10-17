# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-5cjfec?file=1-colorChanger%2Fchaiaurcode.js)

## project 1

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