var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var balance = 1000;
var withdraw;
var deposit;
var withdrawHistory = [];
var depositHistory = [];
var oldBal = 0;

var home = prompt('Would you like to (d)eposit, (w)ithdraw, or (q)uit? ');

while(home != 'q'){
if(home === 'd'){
  deposit = prompt('How much would you like to deposit? ');
  deposit = parseFloat(deposit);
  oldBal = balance
    balance += deposit;
      depositHistory.push(deposit);
      console.log('Your old balance was $' + oldBal.toFixed(2));
        console.log('Your new balance is $' + balance.toFixed(2));
  }
if(home === 'w'){
  withdraw = prompt('How much would you like to withdraw? ');
  withdraw = parseFloat(withdraw);
  oldBal = balance
    balance -= withdraw;
  withdrawHistory.push(withdraw);
  
if(balance < 0){
  balance -= 50;

console.log('Your balance is negative $');
}
  console.log('Your old balance was $' + oldBal.toFixed(2));
    console.log('Your new balance is $' + balance.toFixed(2));
}
home = prompt('Would you like to (d)eposit, (w)ithdraw, or (q)uit? ');
}

var sum = 0;
sum = parseFloat(sum);

for(var q = 0; q < withdrawHistory.length; q++){
  sum += withdrawHistory[q];
}
console.log('The sum of your withdraws is $' + chalk.red(sum));

console.log(withdrawHistory);

var sumd = 0;
sumd = parseFloat(sumd);

for(var r = 0; r < depositHistory.length; r++){
  sumd += depositHistory[r];
}
console.log('The sum of your deposits is $' + chalk.green(sumd));

console.log(depositHistory);

console.log('This is your final balance: $' + balance.toFixed(2));

//Teacher's Code
//
//var prompt = require('sync-prompt').prompt;
//var chalk = require('chalk');
//
//var balance = 1000, deposits = [], withdraws = [];
//var option = prompt('(d)eposit, (w)ithdraw, (q)uit: ');
//
//while(option != 'q'){
//  var amount = prompt('Amount: ');
//    amount = parseFloat(amount);
//
//    if(option === 'd'){
//      deposits.push(amount);
//    }else{
//      withdraws.push(amount);
//    }
//
//    option = prompt('(d)eposit, (w)ithdraw, (q)uit: ');
//}
//
//var deps = 0, withs = 0;
//
//for(var i = 0; i < deposits.length; i++){
//  deps += deposits[i];
//}
//
//for(var j = 0; j < withdraws.length; j++){
//  withs += withdraws[j];
//}
//balance += deps - withs;
//
//if(balance < 0){
//  balance -+ 50;
//}
//console.log('Deposits:  ', chalk.green(deposits));
//console.log('Withdraws: ', chalk.red(withdraws));
//console.log('Balance:    $' + balance.toFixed(2));
