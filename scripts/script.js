function selectCard(id){
    

    // console.log(element.querySelector('h2').innerText);
    // console.log(element.querySelector('p').innerText);
    addProductById(id);
    calculateTotalById(id);
    
    const purchaseButtonElement = document.getElementById('Purchase-btn');
    purchaseButtonElement.removeAttribute('disabled');
}

function applyCoupon(){
    //console.log('coupon applied');
    const couponField = document.getElementById('coupon-field');
    const givenCouponCode = couponField.value.split(' ').join('').toUpperCase();
    
    if(givenCouponCode === 'SELL200')
    {
        const totalPrice = parseFloat(document.getElementById('total-price').innerText);
        if(totalPrice > 200)
        {
            const discountElement = document.getElementById('discount');
            const discountInNumber = parseFloat(discountElement.innerText);
            const discount =( totalPrice * .2 ).toFixed(2) ;

            discountElement.innerHTML = discount ;
            

            const finalCostElement = document.getElementById('final-price');
            finalCostElement.innerText = (totalPrice - discount ).toFixed(2);
        }
        else{
            alert('Buy More Than 200')
        }
    }
    else{
        alert('Not A Coupon');
    }
    couponField.value = '';
}