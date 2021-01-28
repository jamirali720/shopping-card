 //  upper part plusSign 


 const increasePlus = document.querySelector("#increaseSign");
 increasePlus.addEventListener("click", function () {

    const quantity = document.querySelector("#mobileQuantity").value;
    const quantityNumber = parseFloat(quantity);
    let mobileDefaultQuantity = 1;
    const quantityNumberAmount = quantityNumber + mobileDefaultQuantity;
    document.querySelector("#mobileQuantity").value = quantityNumberAmount;



    const mobileBalance = document.querySelector("#currentMobilePrice").innerText;
    const MobilePrice = parseFloat(mobileBalance);
    let mobileFixedPrice = 1219;
    const totalMobilePrice = MobilePrice + mobileFixedPrice;
    document.querySelector("#currentMobilePrice").innerText = totalMobilePrice;

    const total = document.querySelector("#subTotalPrice").innerText;
    const totalNumber = parseFloat(total);
    const subTotalAmount = totalNumber + mobileFixedPrice;
    document.querySelector("#subTotalPrice").innerText = subTotalAmount;

    const grandTotal = document.querySelector("#grandTotalPrice").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber + mobileFixedPrice;
    document.querySelector("#grandTotalPrice").innerText = grandTotalPrice;
 })

 // upper part minusSign

 const decreaseSign = document.querySelector("#decreaseSign");
 decreaseSign.addEventListener("click", function () {

    const Quantity = document.querySelector("#mobileQuantity").value;
    const quantityNumber = parseFloat(Quantity);
    let mobileDefaultQuantity = 1;
    const mobileQuantityAmount = quantityNumber - mobileDefaultQuantity;
    document.querySelector("#mobileQuantity").value = mobileQuantityAmount;


    const mobileBalance = document.querySelector("#currentMobilePrice").innerText;
    const MobilePrice = parseFloat(mobileBalance);
    let mobileFixedPrice = 1219;
    const totalMobilePrice = MobilePrice - mobileFixedPrice;
    document.querySelector("#currentMobilePrice").innerText = totalMobilePrice;


    const total = document.querySelector("#subTotalPrice").innerText;
    const totalNumber = parseFloat(total);
    const subTotalAmount = totalNumber - mobileFixedPrice;
    document.querySelector("#subTotalPrice").innerText = subTotalAmount;

    const grandTotal = document.querySelector("#grandTotalPrice").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber - mobileFixedPrice;
    document.querySelector("#grandTotalPrice").innerText = grandTotalPrice;

 })

 // middle part plusSign
 const secondIncreaseSign = document.querySelector("#secondIncreaseSign");
 secondIncreaseSign.addEventListener("click", function () {

    const mobileCoverPrice = document.querySelector("#mobileCoverFixedPrice").innerText;
    const mobileCoverFixedPrice = parseFloat(mobileCoverPrice);
    let mobileCoverDefaultPrice = 59;
    const mobileCoverAmount = mobileCoverFixedPrice + mobileCoverDefaultPrice;
    document.querySelector("#mobileCoverFixedPrice").innerText = mobileCoverAmount;


    const coverQuantity = document.querySelector("#coverQuantity").value;
    const coverQuantityNumber = parseFloat(coverQuantity);
    let coverDefaultQuantity = 1;
    const coverQuantityAmount = coverQuantityNumber + coverDefaultQuantity;
    document.querySelector("#coverQuantity").value = coverQuantityAmount;


    const total = document.querySelector("#subTotalPrice").innerText;
    const totalNumber = parseFloat(total);
    const subTotalAmount = totalNumber + mobileCoverFixedPrice;
    document.querySelector("#subTotalPrice").innerText = subTotalAmount;


    const grandTotal = document.querySelector("#grandTotalPrice").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber + mobileCoverFixedPrice;
    document.querySelector("#grandTotalPrice").innerText = grandTotalPrice;

 })

 // middle part minus sign
 const secondDecreaseSign = document.querySelector("#secondDecreaseSign");
 secondDecreaseSign.addEventListener("click", function () {

    const mobileCoverPrice = document.querySelector("#mobileCoverFixedPrice").innerText;
    const mobileCoverFixedPrice = parseFloat(mobileCoverPrice);
    let mobileCoverDefaultPrice = 59;
    const mobileCoverAmount = mobileCoverFixedPrice - mobileCoverDefaultPrice;
    document.querySelector("#mobileCoverFixedPrice").innerText = mobileCoverAmount;


    const coverQuantity = document.querySelector("#coverQuantity").value;
    const coverQuantityNumber = parseFloat(coverQuantity);
    let coverDefaultQuantity = 1;
    const coverQuantityAmount = coverQuantityNumber - coverDefaultQuantity;
    document.querySelector("#coverQuantity").value = coverQuantityAmount;







    const total = document.querySelector("#subTotalPrice").innerText;
    const totalNumber = parseFloat(total);
    const subTotalAmount = totalNumber - mobileCoverFixedPrice;
    document.querySelector("#subTotalPrice").innerText = subTotalAmount;


    const grandTotal = document.querySelector("#grandTotalPrice").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber - mobileCoverFixedPrice;
    document.querySelector("#grandTotalPrice").innerText = grandTotalPrice;



 })

