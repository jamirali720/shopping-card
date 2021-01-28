 //  upper part plusSign 


 const increasePlus = document.querySelector("#increaseSign");
 increasePlus.addEventListener("click", function () {

    const quantity = document.querySelector("#mobileQuantity");
    const quantityNumber = parseInt(quantity.value);
    const quantityNumberAmount = quantityNumber + 1;
    quantity.value = quantityNumberAmount;


    // const mobileBalance = document.querySelector("#currentMobilePrice");
    // const MobilePrice = parseFloat(mobileBalance.innerText);
    // const totalMobilePrice = MobilePrice + 1219;
    // mobileBalance.innerText = totalMobilePrice;
    

    // const total = document.querySelector("#subTotalPrice");
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber + 1219;
    // total.innerText = subTotalAmount;


    UpdateMobilePrice("#mobileQuantity");
    UpdateMobilePrice("#currentMobilePrice");
    UpdateMobilePrice("#subTotalPrice");
    UpdateMobilePrice("#grandTotalPrice");

 
 })


// creating plusSign section function
 function UpdateMobilePrice (id){
    const grandTotal = document.querySelector(id);
    const grandTotalNumber = parseFloat(grandTotal.innerText);
    const grandTotalPrice = grandTotalNumber + 1219;
    grandTotal.innerText = grandTotalPrice;
 }
 
 // upper part minusSign

 const decreaseSign = document.querySelector("#decreaseSign");
 decreaseSign.addEventListener("click", function () {

    const Quantity = document.querySelector("#mobileQuantity");
    const quantityNumber = parseInt(Quantity.value);
    const mobileQuantityAmount = quantityNumber -1;
    Quantity.value = mobileQuantityAmount;
    

    // const mobileBalance = document.querySelector("#currentMobilePrice");
    // const MobilePrice = parseFloat(mobileBalance.innerText);
    // const totalMobilePrice = MobilePrice - 1219;
    // mobileBalance.innerText = totalMobilePrice;


    // const total = document.querySelector("#subTotalPrice");
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber -1219;
    // total.innerText = subTotalAmount;

    
    decreaseMobilePrice("#currentMobilePrice");
    decreaseMobilePrice("#subTotalPrice");
    decreaseMobilePrice("#grandTotalPrice");
    // const grandTotal = document.querySelector("#grandTotalPrice");
    // const grandTotalNumber = parseFloat(grandTotal.innerText);
    // const grandTotalPrice = grandTotalNumber - 1219;
    // grandTotal.innerText = grandTotalPrice;

 })


//  creating  minus section function
    function decreaseMobilePrice (id){
        const grandTotal = document.querySelector(id);
    const grandTotalNumber = parseFloat(grandTotal.innerText);
    const grandTotalPrice = grandTotalNumber - 1219;
    grandTotal.innerText = grandTotalPrice;
    }



 // middle part plusSign
 const secondIncreaseSign = document.querySelector("#secondIncreaseSign");
 secondIncreaseSign.addEventListener("click", function () {

    const coverQuantity = document.querySelector("#coverQuantity");
    const coverQuantityNumber = parseInt(coverQuantity.value);
    const coverQuantityAmount = coverQuantityNumber + 1;
    coverQuantity.value = coverQuantityAmount;

    // const mobileCoverPrice = document.querySelector("#mobileCoverFixedPrice");
    // const mobileCoverFixedPrice = parseFloat(mobileCoverPrice.innerText);
    // const mobileCoverAmount = mobileCoverFixedPrice + 59;
    // mobileCoverPrice.innerText = mobileCoverAmount;


    // const total = document.querySelector("#subTotalPrice");
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber + 59;
    // total.innerText =  subTotalAmount;


    // const grandTotal = document.querySelector("#grandTotalPrice");
    // const grandTotalNumber = parseFloat(grandTotal.innerText);
    // const grandTotalPrice = grandTotalNumber + 59;
    // grandTotal.innerText =  grandTotalPrice;

    updateCoverPrice("#mobileCoverFixedPrice");
    updateCoverPrice("#subTotalPrice");
    updateCoverPrice("#grandTotalPrice");

 })

// creating middle part plusSign section function
function updateCoverPrice (id){
    const grandTotal = document.querySelector(id);
    const grandTotalNumber = parseFloat(grandTotal.innerText);
    const grandTotalPrice = grandTotalNumber + 59;
    grandTotal.innerText =  grandTotalPrice;

}


 // middle part minus sign
 const secondDecreaseSign = document.querySelector("#secondDecreaseSign");
 secondDecreaseSign.addEventListener("click", function () {

    const coverQuantity = document.querySelector("#coverQuantity");
    const coverQuantityNumber = parseInt(coverQuantity.value);
    const coverQuantityAmount = coverQuantityNumber - 1;
    coverQuantity.value = coverQuantityAmount;


    // const mobileCoverPrice = document.querySelector("#mobileCoverFixedPrice");
    // const mobileCoverFixedPrice = parseFloat(mobileCoverPrice.innerText);
    // const mobileCoverAmount = mobileCoverFixedPrice - 59;
    // mobileCoverPrice.innerText = mobileCoverAmount;


    // const total = document.querySelector("#subTotalPrice");
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber - 59;
    // total.innerText = subTotalAmount;


    //  const grandTotal = document.querySelector("#grandTotalPrice");
    //  const grandTotalNumber = parseFloat(grandTotal.innerText);
    //  const grandTotalPrice = grandTotalNumber - 59;
    //  grandTotal.innerText = grandTotalPrice;


    middlePartMinusSign("#mobileCoverFixedPrice");
    middlePartMinusSign("#subTotalPrice");
    middlePartMinusSign("#grandTotalPrice");


 })


// creating  middle part minus sign section function
function middlePartMinusSign(id){

    const grandTotal = document.querySelector(id);
    const grandTotalNumber = parseFloat(grandTotal.innerText);
    const grandTotalPrice = grandTotalNumber - 59;
    grandTotal.innerText = grandTotalPrice;

}