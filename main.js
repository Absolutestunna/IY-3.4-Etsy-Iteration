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
