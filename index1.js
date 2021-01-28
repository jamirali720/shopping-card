
 const increasePlus = document.querySelector("#increaseSign");
 increasePlus.addEventListener("click", function () {

    const quantity = document.querySelector("#mobileQuantity");
    const quantityNumber = parseInt(quantity.value);
    const quantityAmount = quantityNumber + 1;
    quantity.value = quantityAmount;
 })