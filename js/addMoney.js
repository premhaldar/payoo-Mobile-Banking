document.getElementById('btn-addMoney').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('add-amount').value;
    const finalAmount=parseFloat(amount);
    const pin=document.getElementById('enter-pin-number').value;
    const totalAmountElement=document.getElementById('total-amount');
    const totalAmountText=totalAmountElement.innerText.replace('$','').trim();
    const finalTotalAmount=parseFloat(totalAmountText);
    if(pin==='prem'){
        const totalTK=finalAmount+finalTotalAmount;
        totalAmountElement.innerText=`$${totalTK}`;
    }
    else{
        alert('wrong pin!');
    }
})