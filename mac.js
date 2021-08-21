// function of memory & delivery feature
function features (featureId,feature,cost) {
    const featurePrice = document.getElementById(featureId);
    if (feature==true){
        featurePrice.innerText = cost;
    }
    else {
        featurePrice.innerText = cost;
    }
    // total price function call
    total();
}
// memory event handler
document.getElementById('memory-8gb').addEventListener('click',function(){
    features('memory-price',true,0);
})
document.getElementById('memory-16gb').addEventListener('click',function(){
    features('memory-price',false,180);
})

// delivery event handler
document.getElementById('free-delivery').addEventListener('click', function () {
    features('delivery-cost',true,0);
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    features('delivery-cost',false,20);
})

// function of storage feature
function storage (macStorage){
    const storagePrice = document.getElementById('storage-price');
    if(macStorage=='256gb'){
        storagePrice.innerText = 0;
    }
    else if (macStorage=='512gb'){
        storagePrice.innerText = 100;
    }
    else {
        storagePrice.innerText = 180;
    }
    // total price function call
    total();
}
// storage event handler
document.getElementById('storage-256gb').addEventListener('click', function () {
    storage('256gb');
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    storage('512gb');
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    storage('1tb');
})


// function of each feature innertext
function eachFeaturePrice (price){
    const eachPrice = document.getElementById(price);
    const eachPriceAmount = parseFloat(eachPrice.innerText);
    return eachPriceAmount;
}
// function of total price
function total () {
    const bestPrice = document.getElementById('best-price');
    const bestPriceAmount = parseFloat(bestPrice.innerText);

    const total = document.getElementById('total-price');
    total.innerText = bestPriceAmount + eachFeaturePrice('memory-price') + eachFeaturePrice('storage-price') + eachFeaturePrice('delivery-cost');

    const allTotal = document.getElementById('all-total');
    allTotal.innerText = total.innerText;
}
// total price after promocode discount
document.getElementById('code-btn').addEventListener('click',function(){
    const codeInput = document.getElementById('promocode');
    const code = codeInput.value;
    codeInput.value = '';

    const total = document.getElementById('total-price');
    const allTotal = document.getElementById('all-total');

    if(code=='stevekaku') {
        const priceOff = total.innerText / 5;
        allTotal.innerText = total.innerText - priceOff;
    }
    else {
        alert('Opps!!! you entered a wrong promo Code');
    }
})



















