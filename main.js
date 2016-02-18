////////////////////////////////////////
//Average Prices
////////////////////////////////////////
function itemPriceAvg(){

var sel_prices = 0;
  items.forEach(function(num) {
    sel_prices += num.price;
    });
    // console.log("The average is: " + (sel_prices/(items.length)));
}
itemPriceAvg();

////////////////////////////////////////
//Range between numbers
////////////////////////////////////////
function itemsBetween(value){
  // console.log(value.price)
  return (value.price >= 14 && value.price <=18);
}
console.log ("Items that cost between $14.00 USD and $18.00 USD:" + (items.filter(itemsBetween)));
