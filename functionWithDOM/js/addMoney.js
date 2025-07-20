document.getElementById('btn-addMoney').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('add-amount');
    const pinNumber=getInputFieldValueById('enter-pin-number');
    if(pinNumber===1234){
        const totalAmount=getTextFieldValueById('total-amount');
        const finalTotalAmount=addMoney+totalAmount;
        document.getElementById('total-amount').innerText=finalTotalAmount;
        
    }
    else{
        alert('something Wrong!please try again!')
    }
})