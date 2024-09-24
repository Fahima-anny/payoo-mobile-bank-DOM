
// add money part 


document.getElementById("addMoneyBtn").addEventListener("click",function(e){
    e.preventDefault() ;
    let accountBalance = getInnerTextById('accountBalance')
   let addMoneyInp = getInputValueById('addMoneyInp')
   let addMoneyPinInp = getInputValueById('addMoneyPinInp')
    // console.log(addMoneyInp,addMoneyPinInp)
document.getElementById("addMoneyInp").value = ''
document.getElementById("addMoneyPinInp").value = ''

if(isNaN(addMoneyInp)){
    alert("Please give a valid input")
    return ;
}

if(addMoneyPinInp === 1234){
    // console.log('verified')
    // console.log(accountBalance)
    // let addMoneyInpNum = parseFloat(addMoneyInp)
    let newAccountBalance = addMoneyInp + accountBalance ;
    // console.log(newAccountBalance)
    document.getElementById("accountBalance").innerText = newAccountBalance
    // accountBalance = newAccountBalance

    transactionHistory('Add-money',addMoneyInp,newAccountBalance)

}
else{
    alert("Failed to add money!! Try again later.")
}



})



// cashout money part 
document.getElementById("cashOutBtn").addEventListener("click",function(e){
e.preventDefault() ;
let accountBalance = getInnerTextById('accountBalance')
let cashOutInp = getInputValueById('cashOutInp')
let cashOutPinInp = getInputValueById('cashOutPinInp')
// console.log(cashOutInp,cashOutPinInp)

document.getElementById("cashOutInp").value = ''
document.getElementById("cashOutPinInp").value = ''

if(isNaN(cashOutInp)){
    alert("Please give a valid input")
    return ;
}

if(cashOutPinInp === 1234){
    // console.log("success")
    // let cashOutInpFloat = parseFloat(cashOutInp)

if(cashOutInp>accountBalance){
    alert("Sorry,The cash out amount is greater than your balance")
    return ;
}

let newAccountBalance = accountBalance - cashOutInp
// console.log(newAccountBalance ,accountBalance, cashOutInp)
document.getElementById("accountBalance").innerText = newAccountBalance ;
// accountBalance = newAccountBalance

transactionHistory('Cash-out',cashOutInp,newAccountBalance)

// add to transaction history 
// let transactionDiv = document.getElementById("transactionDiv")
// let p = document.createElement('p')
// p.innerText = `Cash-out: ${cashOutInp}TK  New Balance: ${newAccountBalance}TK`
// transactionDiv.appendChild(p)

}

else{
    alert("Failed to cash out!! Try again later.")
}

})




document.getElementById("displayCashOut").addEventListener("click",function(){
    // console.log('cashout clicked')
showThisSection('cashOutDiv')
    // document.getElementById("cashOutDiv").style.display = 'block'
    // document.getElementById("addMoneyDiv").style.display = 'none'
})

document.getElementById("displayAddMoney").addEventListener("click",function(){
    // console.log('cashout clicked')
    showThisSection('addMoneyDiv')
//     document.getElementById("addMoneyDiv").style.display = 'block'
//     document.getElementById("cashOutDiv").style.display = 'none'
})

document.getElementById("transactionBtn").addEventListener("click",function(){
    showThisSection('transactionDiv')
})








