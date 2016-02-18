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
  return (value.price > 14 && value.price < 18);
}

// console.log ("Items that cost between $14.00 USD and $18.00 USD:" + (items.filter(itemsBetween)));

////////////////////////////////////////
//Currency
////////////////////////////////////////

function currencyCode(){
  var final = "";

  items.forEach(function(num) {
    if (num.currency_code === "GBP"){
      final = num.title + " costs " + num.price + "";
        }
    });
    // console.log(final)
    return final;
}
currencyCode();

////////////////////////////////////////
//Wood
////////////////////////////////////////
function wood(){
var woodObjects = "";
// var woodObjArr = [];
  items.forEach(function(num){
    num.materials.map(function(value){
      if (value == "wood"){
        woodObjects = num.title;
        // woodObjArr.push(woodObjects)
        console.log(woodObjects);
      }
    })
  });

  return woodObjects;
}
wood();
