
var user=document.getElementById("userinp");

function main(){
	var inp=user.value
    var btn=document.getElementById("add");
	var x=document.createElement("h2");
	var y=document.createElement("h2");
	var z=document.createElement("h2");
    var alpha="";
    var num="";
	var spl="";
	
	for(var i = 0 ; i < inp.length ; i ++){
	if((/[a-zA-Z]/).test(inp[i])){
		alpha+=inp[i];
	}
	if((/[0-9]/).test(inp[i])){
		num+=inp[i];
	}
	if((/["@""#"".""&""."]/).test(inp[i])){
		spl+=inp[i];
	}
 }
console.log(alpha);
console.log(num);
	
	btn.appendChild(x);
	x.innerText=alpha;
	btn.appendChild(y);
	y.innerText=num;
	btn.appendChild(z);
	z.innerText=spl;
 	clearAndShow();
	
}
function clearAndShow(){
	user.value="";
}

var usermail=document.getElementById("usermail");

function clk(){
	var userdetails=usermail.value,
	 btn1=document.getElementById("show"),
	 a=document.createElement("h3"),
	 b=document.createElement("h3"),
	 spl=userdetails.indexOf("@"),
	 str=userdetails.slice(0,spl),
	 txt=str.match(/[a-z]+/g),
	 num1=str.match(/[0-9]+/g);
	 btn1.appendChild(a);
	 a.innerText=txt;
	 btn1.appendChild(b);
	 b.innerText=num1;
	 console.log(str);
	 console.log(txt);
}




//function useralert(){
//	var userplace=document.getElementById("userinp");
//	var altshow=document.getElementById("show");
//	var userpls=userplace.value;
//	if(((/[0-9]/).test(userpls)|| userpls.length==0)){
//		altshow.style.display="block";
//		altshow.innerText="only alphabets allowed";
//	}
//	else{
//		altshow.style.display="none";
//	}
//}


//grade checking

let grade=70;
let stn=40;

if(grade<=stn && 95<=stn){
	console.log("s grade")
}
else if(grade<=stn && 90<=stn){
	console.log("a grade");
}
else if(grade<=stn && 80<=stn){
	console.log("b grade");
}
else if(grade<=stn && 70<=stn){
	console.log("c grade");
}
else if(grade<=stn && 60<=stn){
	console.log("d grade");
}
else if(grade<=stn && 50<=stn){
	console.log("e grade");
}
else{
	console.log("fail");
}



