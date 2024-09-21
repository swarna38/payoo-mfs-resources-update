document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldById('input-cash-out');
    const pinNumber = getInputFieldById('input-cash-out-pin')
    console.log(cashOut, pinNumber);
    //number validation check
    if(isNaN(cashOut)){
        alert('Faild to cash out');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldById('account-balance');

        //balance teke cashout jodi besi korte cay 
        if(cashOut>balance){
            alert('You do not have enough mony to cash out');
            return;
         }
        
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerHTML = newBalance;

        //add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-pink-300', 'p-4');
        div.innerHTML = `
            <h4 class="font-bold text-2xl text-center">cash out</h4>
            <p>${cashOut} withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }else{
        alert('please try again');
    }
})