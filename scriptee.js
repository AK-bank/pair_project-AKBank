
var img=['images/1.webp','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.webp','images/10.jpg','images/11.gif'];
var image=document.getElementById('img-animation');
var j=0


setInterval((function(){
	image.src=img[j];
	console.log(image.src)
if (j<img.length-1){j++}
	else {j=0}
}),5000)
//var prom=document.getElementById("prompt")
//var usrname=document.getElementById("uname")
//var pass=document.getElementById("upass")
/*function verify(){
 if(usrname.value==="admin"&&pass.value==="admin"){
 	open("file:///C:/RbK%20Projects/HTML/adminTable.html")
}
else { prom.innerHTML="wrong username or password"}
}*/

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = []; 
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) { 
  if (acc === undefined) { 
    acc = array[0]; 
    array = array.slice(1); 
  } 
  each(array, function(element, i) { 
    acc = f(acc, element, i); 
  }); 
  return acc; 
}
/*var table=getElementById("jadwel")
function fill(){
	each(table,function (){})
}*/