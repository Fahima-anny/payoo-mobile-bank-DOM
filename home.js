
// add money part 
let accountBalance = document.getElementById("accountBalance").innerText
let accountBalanceNum = parseFloat(accountBalance)

document.getElementById("addMoneyBtn").addEventListener("click",function(e){
    e.preventDefault() ;
   let addMoneyInp = document.getElementById("addMoneyInp").value
   let addMoneyPinInp = document.getElementById("addMoneyPinInp").value
    console.log(addMoneyInp,addMoneyPinInp)

if(pinInp === '1234'){
    console.log('verified')
    console.log(accountBalance)
    let addMoneyInpNum = parseFloat(addMoneyInp)
    let newAccountBalance = addMoneyInpNum + accountBalanceNum ;
    console.log(newAccountBalance)
    document.getElementById("accountBalance").innerText = newAccountBalance
    // accountBalance = newAccountBalance
}
else{
    alert("Failed to add money!! Try again later.")
}

})



// cashout money part 
document.getElementById("cashOutBtn").addEventListener("click",function(e){
e.preventDefault() ;
let cashOutInp = document.getElementById("cashOutInp").value
let cashOutPinInp = document.getElementById("cashOutPinInp").value
console.log(cashOutInp,cashOutPinInp)

if(cashOutPinInp === '1234'){
    console.log("success")
    let cashOutInpFloat = parseFloat(cashOutInp)
let newAccountBalance = accountBalanceNum - cashOutInpFloat
console.log(newAccountBalance)
document.getElementById("accountBalance").innerText = newAccountBalance ;
// accountBalance = newAccountBalance
}
else{
    alert("Failed to cash out!! Try again later.")
}

})

document.getElementById("displayCashOut").addEventListener("click",function(){
    // console.log('cashout clicked')
    document.getElementById("cashOutDiv").style.display = 'block'
    document.getElementById("addMoneyDiv").style.display = 'none'
})

document.getElementById("displayAddMoney").addEventListener("click",function(){
    // console.log('cashout clicked')
    document.getElementById("addMoneyDiv").style.display = 'block'
    document.getElementById("cashOutDiv").style.display = 'none'
})








