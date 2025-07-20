document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmount=getInputFieldValueById('input-cash-out');
    const cashOutPin=getInputFieldValueById('cash-out-pin-number')
    if(cashOutPin===1234){
        const balance=getTextFieldValueById('total-amount');
        const totalBalance=balance-cashOutAmount;
        document.getElementById('total-amount').innerText=totalBalance;
    }
    else{
        alert('Cash out invalide!')
    }
})