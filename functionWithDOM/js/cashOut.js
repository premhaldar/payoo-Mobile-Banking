document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmount=getInputFieldValueById('input-cash-out');
    const cashOutPin=getInputFieldValueById('cash-out-pin-number');

    if(isNaN(cashOutAmount)){
        alert('invalid Amount');
        return;
    }
    if(cashOutPin===1234){
        const balance=getTextFieldValueById('total-amount');

        if(cashOutAmount>balance){
            alert('you do not have enough Money!')
            return;
        }
        
        const totalBalance=balance-cashOutAmount;
        document.getElementById('total-amount').innerText=totalBalance;

        // cash out history
        const div=document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML=`
        <h4 class="text-2xl font-bold" >Cash Out</h4>
        <p>Money Withdrow: ${cashOutAmount}tk,total amount ${totalBalance}tk </p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Cash out invalide!')
    }
})