function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    //hidden all section
    document.getElementById('add-mony-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

    //show the section with the provided as parameter
    document.getElementById(id).classList.remove('hidden');
}