function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const parseInputValue=parseFloat(inputValue);
    return parseInputValue;
}
function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const parseTextValue=parseFloat(textValue);
    return parseTextValue;
}