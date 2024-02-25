let chips;
let coke;
let cart = [];
let image;
function cart_but(){
  if (chips.checked == true){
    alert (" chips is added ");
    //cart = []
    cart.push(chips.value)
    document.getElementById("display").innerText = cart
    chips.checked = false
    
  }

  if (coke.checked == true){
    alert (" coke is added ");
    //cart = []
    cart.push(coke.value)
    console.log(cart)
    document.getElementById("display").innerText = cart
    coke.checked = false
  }
  // else{
  //   alert("your cart is empty");
  // }
}



function start_delivery(){  

let cooked= true
let delivery = new Promise(function(resolve, reject){
  setTimeout(function(){
    if (cooked == true){
      resolve("Chill and continue your work we will deliver ", cart)
      image.src = "https://www.gannett-cdn.com/-mm-/0fd37b7b9fa1de003b66f431852e943e07d1edfc/c=0-230-1936-1319/local/-/media/2017/02/24/DetroitFreePress/B9326379387Z.1_20170224182613_000_GVEHH2U5E.1-0.jpg?width=3200&height=1680&fit=crop"
      
    }
    else {
       reject("order rejected")
    }
  },5000)
})
  delivery.then(function(result){
    alert("order will be delivered",result)
  })
}



window.onload = function(){
   chips = document.getElementById("ch01");
   coke = document.getElementById("co01");
  image = document.getElementById("i01")// corrected here

}




















