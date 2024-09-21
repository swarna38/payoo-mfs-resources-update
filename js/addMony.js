document.getElementById('btn-add-mony').addEventListener('click', function(event){
    event.preventDefault();
    const addMony = getInputFieldById('input-add-mony');
    const pinNumber = getInputFieldById('input-add-mony-pin');
    console.log(addMony, pinNumber);

    //number validation check
    if(isNaN(addMony)){
        alert('Failed to add mony');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldById('account-balance');
        const newBalance = balance + addMony;
        // console.log(balance);
        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMony} tk . New balance ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('Faild the add mony')
    }
})