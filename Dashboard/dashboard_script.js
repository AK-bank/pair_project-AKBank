function Client(init,firstName,lastName,email,password){
	return {
		id:ids(),
		firstName:firstName,
		lastName:lastName,
		email:email,
		password:password,
		balance:Number(init),
		withdraw: withdrawFunction, 
		deposit: depositFunction,
    transfer: trasferFunction
		}
}



function IDGenerator(){

	var id=0;
	function generator(){
		id++;
		return id
	}
	return generator
}
var ids=IDGenerator()
localStorage.setItem('counter', JSON.stringify(ids));

;
var trasferFunction=function (uniqueID,money){
		if (money>this.balance)
			{
				return "withdrawal Denied"
			}
    if (money<=this.balance){
    	console.log("te5dem")
      this.balance-=money;
      for(var i=0;i<clients.length;i++){
      	
      	if(parseInt(clients[i].id)===parseInt(uniqueID)){
      		
      		clients[i].deposit(money);
      		return;
      	}
      }
}
}
    
     
var depositFunction= function(money){
	console.log(typeof this.balance,typeof money, )
       this.balance+=money;
       this.balance;
       console.log(this.balance)
       return this.balance;

     }       

var withdrawFunction=function(money){if (money>this.balance)
	{return "withdrawal Denied"}
         if (money<=this.balance){var result=this.balance-=money
         
         return this.balance}
      }

var clients=[];
clients=JSON.parse(localStorage.getItem('client'));
for(var i=0;i<clients.length;i++){
	clients[i].withdraw=withdrawFunction;
	clients[i].deposit=depositFunction;
	clients[i].transfer=trasferFunction

}

JSON.parse(localStorage.getItem('client'));

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
		JSON.parse(localStorage.getItem('client'));
		clients.push(k);
		localStorage.setItem('client', JSON.stringify(clients));
		

 	}
 	else{
 		$("#weakPass").append("<p>the Password should have :<ul><li>minimum 8 length</li><li>contains a number</li><li>contains an upperCase and lowerCase caracter</li><li>contains a symbol</li></ul> </p>")
 	}
})
var index=JSON.parse(localStorage.getItem('index'));
var connectedClient;
connectedClient=JSON.parse(localStorage.getItem('connected'));
 $("#signIn").click(function(){
 	for(var i=0;i<clients.length;i++){
 		if(clients[i].email===$('#signInemail').val() && clients[i].password===$('#signInpass').val()){
 			 connectedClient=clients[i]
 			 index=localStorage.setItem('index', JSON.stringify(i));;
 			 localStorage.setItem('connected', JSON.stringify(connectedClient));
				window.open("../dashboard/dashboard.html");
 			 return ;
 		}
 	}
 	$("#wrong").append("<p>Wrong E-mail or Password</p>");
 	
 })
 connectedClient.withdraw=withdrawFunction;
	connectedClient.deposit=depositFunction; 
	connectedClient.transfer=trasferFunction;
function openMethod(evt,method ) {
  var i, x, tablinks;
  x = $(".behaviour");
  for (i = 0; i < x.length; i++) {
    x.eq(i).css("display","none");
  }
  tablinks = $(".tablink");
  for (i = 0; i < x.length; i++) {
    
  }
  $('#'+method).css("display","block");
  
}

$(".welcome").text("welcome " + connectedClient.firstName +" "+ connectedClient.id);



$("#withdraw_button").click(function(){
	connectedClient.withdraw(parseInt($("#withdrawAmount").val()))
	clients[index]=connectedClient;
	localStorage.setItem('client', JSON.stringify(clients))
	localStorage.setItem('connected', JSON.stringify(connectedClient))
});

	
$("#deposit_button").click(function(){

connectedClient.deposit(parseInt($("#depositAmount").val()))
clients[index]=connectedClient;
localStorage.setItem('client', JSON.stringify(clients))

	localStorage.setItem('connected', JSON.stringify(connectedClient))
}); 			 

$('#transfer_button').click(function(){
	connectedClient.transfer(parseInt($('#clientID').val()),parseInt($('#transfeAmount').val()))
	clients[index]=connectedClient;
	localStorage.setItem('client', JSON.stringify(clients))

	localStorage.setItem('connected', JSON.stringify(connectedClient))


})