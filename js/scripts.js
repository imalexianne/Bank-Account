/*var Bank = {
    balance: 0,
    deposit: function(amount1) {
      this.balance = this.balance + amount1;
    },
    withdraw: function(amount2) {
      this.balance = this.balance - amount2;
    }
  };

  $(document).ready(function () {
   if ( $("button#sub").onclick(function(event) {
      event.preventDefault();
  
      var inputDeposit = $(".amount1").val();
  
       balance=balance+amount1;
    console.log("your balance is:"+balance+".")
       $(".balance").text(newBalance.toFixed());
   }));
  
   if( $("button#sub").onclick(function(event) {
        event.preventDefault();
  
        
        var inputWithdraw = $(".amount2").val();
  
       balance=balance-amount2;
        
       console.log("your balance is:"+balance+".")
       
        $(".balance").text(newBalance.toFixed());
  
      
    }));
});*/
//method for create account
function BankAccount(name, initialDeposit, balance) {
  this.userName = name;
  this.firstDeposit = initialDeposit;
  this.balance = balance;
}




//method for adding a deposit.
BankAccount.prototype.makeDeposit = function(deposit) {
  this.balance += deposit;
}
//method for substracting a withdrawl.
BankAccount.prototype.makeWithdrawl = function(withdrawl) {
  this.balance -= withdrawl;
}

//User interface logic
$(document).ready(function(){
  $('form#submit_your_account').submit(function(event) {
    event.preventDefault();
   var  inputtedFullName = $("input#user_name").val();
   var  inputedID = $('#client_id').val();
   var  name = $("input#client_name").val();
     initialDeposit = parseInt($('#initial_deposit').val());
     newBalance = initialDeposit;
     userAccount = new BankAccount(name, initialDeposit, newBalance);
    console.log(userAccount);
    
    $('.balance_here').text(`$${userAccount.balance}`);

    $('#make_deposit').submit(function(event) {
      event.preventDefault();
       deposit = parseInt($('#current_deposit').val());
      userAccount.makeDeposit(deposit);
      $('.balance_here').text(`${userAccount.balance}`);
      $('#make_deposit').trigger('reset');
      });

      $('#make_withdrawl').submit(function(event) {
        event.preventDefault();
         withdrawl = parseInt($('#current_withdrawl').val());
        userAccount.makeWithdrawl(withdrawl);
        $('.balance_here').text(`${userAccount.balance}`);
        $('#make_withdrawl').trigger('reset');
      })
  })
})