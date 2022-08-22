function makeAccount(init){
	if (init===undefined){init=0}
	var balance=init;
	return {withdraw: function(monee){if (monee>balance)
	{return "withdrawal Denied"}
         if (monee<=balance){balance=balance-monee
          return "here's your money: "+monee}
      }

     ,deposit: function(monee){
       balance=balance+monee
       return "your balance is: "+balance;
     }       
     ,transfer: function (uniqueID,monee){
     	balance=balance-monee;
     	uniqueID.deposit(monee)
     }

            }
}
function IDGenerator(init){
	var generator={};
	generator.id=init;
	generator.next=next;
	generator.prec=prec; // most likely not to be used
	return generator
}
var next=function(){
	this.value=this.value+1;
	return this.value;
}
