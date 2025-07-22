document.getElementById('btn-addMoney').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('add-amount');
    const pinNumber=getInputFieldValueById('enter-pin-number');
    if(isNaN(addMoney)){
        alert('invalid amount');
        return;
    }
    if(pinNumber===1234){
        const totalAmount=getTextFieldValueById('total-amount');
        const finalTotalAmount=addMoney+totalAmount;
        document.getElementById('total-amount').innerText=finalTotalAmount;

        // add to transaction history
       const p= document.createElement('p');
       p.innerText=`Added:${addMoney}tk,total Balance:${finalTotalAmount} tk`;
    //    should be a common function
        document.getElementById('transaction-container').appendChild(p)
        
    }
    else{
        alert('something Wrong!please try again!')
    }
})