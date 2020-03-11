// function addButton(){
//     let html = "";
//     html += `
//         <div class="cartcard">
//             <img src="/Images/Brand1.png">
//             <div>Product Name<br><br><b>Brand</b><br><br>5 Star</div>
//             <div class="button">
//                 <button id="button1">-</button>
//                 <input type="text" name="" id="value" value="0">
//                 <button id="button2">+</button>
//             </div>
//             <div class="price">$19.99</div>
//         </div>
//     `
//     let cartlisting = document.querySelector("#cartlisting");
//     console.log(cartlisting);
//     cartlisting.innerHTML = html;
//     console.log(cartlisting);
// }

let getItDown = document.querySelector(".footer");
getItDown.style.marginTop = "2390px";

let remove= document.getElementsByClassName("remove");
console.log(remove);

for (var i = 0; i < remove.length; i++) {
    var button = remove[i]
    console.log(button)
    button.addEventListener('click', function(event) {
        console.log("clicked");
        var buttonclicked = event.target;
        buttonclicked.parentElement.remove()
    })
}

function totalprice() {
    let ab = document.getElementsByClassName("cartlistings");
    let ivalue = 1;
    let inputbox = document.querySelector(".value");
    ivalue = parseInt(inputbox.value) + 1;
    inputbox.setAttribute("value", ivalue);

    let totalprice = 19.99 * parseInt(inputbox.value);
    totalpricediv = document.querySelector(".totalprice");
    totalpricediv.innerText = "$"+totalprice; 
}

function decprice(){
    let ab = document.getElementsByClassName("cartlistings");
    let inputbox = document.querySelector(".value");
    ivalue = parseInt(inputbox.value) - 1;
    inputbox.setAttribute("value", ivalue);

    totalpricediv = document.querySelector(".totalprice");
    
    let totalprice = (19.99 * parseInt(inputbox.value));

    if (inputbox.value == 0){
        totalpricediv.innerText = "$0"
    } else{
        totalpricediv.innerText = "$"+totalprice;
    }
}

function buy(){
    alert("Order Booked!\nThank You!");
}

function scrolld(){
    window.scrollTo(0,2200);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// function update(params) {
//     var button1 = document.getElementsByClassName('button1')[0];
//     var cardlistings = document.getElementsByClassName('cartlistings');
//     console.log(numberOfItems)
//     for (let i = 0; i < cardlistings; i++) {
//         var cartListings = cardlistings[i];
//         var price = cartListings.getElementsByClassName('price')[0];
        
        
//     }
// }

