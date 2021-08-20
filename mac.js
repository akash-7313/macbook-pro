// function memory
function memory (memoey8gb) {
    var memoryPrice = document.getElementById('memory-price');

    if (memoey8gb==true){
        memoryPrice.innerText = 0;
    }
    else {
        memoryPrice.innerText = 180;
    }
    total();
}
// memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    memory(true);
})
document.getElementById('memory-16gb').addEventListener('click',function(){
    memory(false);
})

// function storage
function storage (macStorage){
    var storagePrice = document.getElementById('storage-price');

    if(macStorage=='256gb'){
        storagePrice.innerText = 0;
    }
    else if (macStorage=='512gb'){
        storagePrice.innerText = 100;
    }
    else {
        storagePrice.innerText = 180;
    }
    total();
}
// storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    storage('256gb');
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    storage('512gb');
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    storage('1tb');
})

// function delivery
function delivery (deliveryLate) {
    var deliveryPrice = document.getElementById('delivery-cost');

    if (deliveryLate==true){
        deliveryPrice.innerText = 0;
    }
    else {
        deliveryPrice.innerText = 20;
    }
    total();
}
// delivery
document.getElementById('free-delivery').addEventListener('click', function () {
   delivery(true);
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    delivery(false);
})

// each feature price
function eachFeaturePrice (price){
    var eachPrice = document.getElementById(price);
    var eachPriceAmount = parseFloat(eachPrice.innerText);
    return eachPriceAmount;
}
// total
function total () {
    var bestPrice = document.getElementById('best-price');
    var bestPriceAmount = parseFloat(bestPrice.innerText);

    var total = document.getElementById('total-price');
    total.innerText = bestPriceAmount + eachFeaturePrice('memory-price') + eachFeaturePrice('storage-price') + eachFeaturePrice('delivery-cost');

    var allTotal = document.getElementById('all-total');
    allTotal.innerText = total.innerText;
}

// total after promo
document.getElementById('code-btn').addEventListener('click',function(){
    var codeInput = document.getElementById('promocode');
    var code = codeInput.value;
    codeInput.value = '';

    var total = document.getElementById('total-price');
    var allTotal = document.getElementById('all-total');

    if(code=='stevekaku') {
        var priceOff = total.innerText / 5;
        allTotal.innerText = total.innerText - priceOff;
    }
})



















