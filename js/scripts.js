
//method for create account
function BankAccount(name, initialDeposit, balance) {
  this.userName = name;
  this.firstDeposit = initialDeposit;
  this.balance = balance;
}
// adding a deposit.
BankAccount.prototype.makeDeposit = function(deposit) {
  this.balance += deposit;
}
// substracting a withdrawl.
BankAccount.prototype.makeWithdrawl = function(withdrawl) {
  this.balance -= withdrawl;
}

//User interface logic
$(document).ready(function(){
  $('form#submit_new_account').submit(function(event) {
    event.preventDefault();
   var  inputtedFullName = $("input#user_name").val();
   var  inputedID = $('#user_id').val();
   var  name = $("input#user_name").val();
     initialDeposit = parseInt($('#initial_deposit').val());
     newBalance = initialDeposit;
     userAccount = new BankAccount(name, initialDeposit, newBalance);
    console.log(userAccount);
    
    $('.balance_here').text(`$${userAccount.balance}`);

   
  })
})