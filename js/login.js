document.getElementById('btn-login').addEventListener('click',function(event){
event.preventDefault();
const phoneNumber=document.getElementById('phone-number').value;
const pinNumber=document.getElementById('enter-pin').value;
if(pinNumber==='prem'){
    window.location.href='/home.html'
}
else{
    alert('wrong pin or phone number!please Try Again!!')
}
})