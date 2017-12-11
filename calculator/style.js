function getNumber(num) {
	var input_num = document.getElementById('input');
	switch(num){
		case 1:
		  input_num.value += '1';
		  break;
		case 2:
		  input_num.value += '2';
		  break;
		case 3:
		  input_num.value += '3';
		  break;    
		case 4:
		  input_num.value += '4';
		  break;  
		case 5:
		  input_num.value += '5';
		  break;  
		case 6:
		  input_num.value += '6';
		  break;  
		case 7:
		  input_num.value += '7';
		  break;  
		case 8:
		  input_num.value += '8';
		  break;  
		case 9:
		  input_num.value += '9';
		  break;  
		case 0:
		  input_num.value += '0';
		  break;  
	}
}

//For mathematical operation

function getOperand(operand){
	var input_op = document.getElementById('input');
    switch(operand){
    	case '+':
    	  input_op.value += '+';
    	  break;

    	case '-':
    	  input_op.value += '-';
    	  break;

    	case 'x':
    	  input_op.value += '*';
    	  break;  
    	case '/':
    	  input_op.value += '/';
    	  break;  
    	case '+/-':
    	  input_op.value += '-' + input_op.value;
    	  
    }
}

//For Clearscree

function clearScreen(){
	document.getElementById('input').value ="";
	document.getElementById('answer').value ="";
}

//For backspace

function backspace(){
	var back_space = document.getElementById('input');
	var x = back_space.value;

	if (x.length > 0) {
		x = x.substring(0, x.length-1); // remove the last character in the input
		back_space.value = x; 
	}
}

//For evaluation

function compute(){
	var input_comp = document.getElementById('input');
	ans = Math.floor(+eval(input_comp.value));
	document.getElementById('answer').value = '=' + ans;
}

//For brackets

var i = 0;
function brackets(){
	var input_var = document.getElementById('input');
    if (i == 0) {
    	input_var.value += '(';
    	i = 1;
    }else if (i == 1) {
    	input_var.value += ')';
    	i = 0;
    }
}