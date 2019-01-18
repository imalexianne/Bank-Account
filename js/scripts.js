var Bank = {
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
});