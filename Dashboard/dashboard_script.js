function Client(init,firstName,lastName,email,password){
	return {
		id:ids(),
		firstName:firstName,
		lastName:lastName,
		email:email,
		password:password,
		balance:init,
		withdraw: withdrawFunction, 
		deposit: depositFunction,
    transfer: trasferFunction
		}
}
function IDGenerator(){
	var id=0
	function generator(){
		id++;
		return id
	}
	return generator
}
var ids=IDGenerator()
var next=function(){
	this.value=this.value+1;
	return this.value;
}
var trasferFunction=function (uniqueID,money){
     	this.balance=this.balance-money;
     	uniqueID.deposit(money)
     }
var depositFunction= function(money){
       this.balance=this.balance+money
       return "your balance is: "+this.balance;
     }       

var withdrawFunction=function(money){if (money>balance)
	{return "withdrawal Denied"}
         if (money<=balance){balance=balance-money
          return "here's your money: "+money}
      }