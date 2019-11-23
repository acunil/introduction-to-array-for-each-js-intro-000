// Add your doToElementsInArray() function here:

var evens = [0, 2, 4, 6, 8, 10];
 
evens.forEach(even => {
  console.log(`${even} is not odd!`);
});


// Add your changeCompletely() function here:


evens.forEach(num => {
  num === 6 ? console.log(`${num} is 6!`) : console.log(`${num} is not 6...`);
});


var cart = [
  {"name":"quora", "price":20},
  {"name":"boots", "price":10},
  {"name":"june", "price":5},
  {"name":"bike", "price":3}
  ];
  

function checkCart(item)
cart.forEach(obj => {
  if(obj.name === item){
    return `${item} costs $${obj.price}.`;
  } else {
    return `${item} is not sold here.`;
  }
})