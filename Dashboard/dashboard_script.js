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

var trasferFunction=function (uniqueID,money){
     	this.balance=this.balance-money;
     	uniqueID.deposit(money)
     }
var depositFunction= function(money){
       this.balance=this.balance+money
       return "your balance is: "+this.balance;
     }       

var withdrawFunction=function(money){if (money>this.balance)
	{return "withdrawal Denied"}
         if (money<=this.balance){this.balance=this.balance-money
          return "here's your money: "+money}
      }

var clients=[];

function strongPasswords(string){ 
      var checkUpper=/[A-Z]/;
      var checkLower=/[a-z]/;
      var checkNum=/\d/;
      var checkSpecial=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
     if(checkSpecial.test(string) && checkNum.test(string) && checkLower.test(string) && checkUpper.test(string) && string.length>8){
     	return true;
     }
      
      return false;
      	
      
 } 

$("#signUp").click(function(){
	if(strongPasswords($("#signUpPass").val())){
 		var k=Client($("#Balance").val(),$("#firstName").val(),$("#lastName").val(),$("#signUpEmail").val(),$("#signUpPass").val())
		clients.push(k);
 	}
 	else{
 		$("#weakPass").append("<p>the Password should have :<ul><li>minimum 8 length</li><li>contains a number</li><li>contains an upperCase and lowerCase caracter</li><li>contains a symbol</li></ul> </p>")
 	}
		
})



 $("#signIn").click(function(){
 	for(var i=0;i<clients.length;i++){
 		if(clients[i].email===$('#signInemail').val() && clients[i].password===$('#signInpass').val()){
 			console.log('5edmet')
 			return true;
 		}
 	}
 	$("#wrong").append("<p>Wrong E-mail or Password</p>");
 	
 })
      

