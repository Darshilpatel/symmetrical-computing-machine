
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 49 || event.keyCode == 97) {
        numberInput(1);
    }
    else if(event.keyCode == 50 || event.keyCode == 98) {
        numberInput(2);
    } else if(event.keyCode == 51 || event.keyCode == 99) {
        numberInput(3);
    }else if(event.keyCode == 52 || event.keyCode == 100) {
        numberInput(4);
    }else if(event.keyCode == 53 || event.keyCode == 101) {
        numberInput(5);
    }else if(event.keyCode == 54 || event.keyCode == 102) {
        numberInput(6);
    }else if(event.keyCode == 55 || event.keyCode == 103) {
        numberInput(7);
    }else if(event.keyCode == 56 || event.keyCode == 104) {
        numberInput(8);
    }else if(event.keyCode == 57|| event.keyCode == 105) {
        numberInput(9);
    } else if(event.keyCode == 48 || event.keyCode == 96) {
        numberInput(0);
    } else if(event.keyCode == 107) {
        Operation('+');
    } else if(event.keyCode == 189 || event.keyCode == 109) {
        Operation('-');
    } else if(event.keyCode == 106 ) {
        Operation('*');
    } else if(event.keyCode == 191 || event.keyCode == 111) {
        Operation('/');
    } else if(event.keyCode == 13 || event.keyCode == 187) {
        Operation('=');
    } else if(event.keyCode == 190 ) {
        runDecimal();
    } else if(event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 110) {
        deleteChar();
    } else if(event.keyCode == 67 ) {
        clearEntry();
    } 
});
	   var evaluateCos;
    var evaluateSin;
    var powerRun;
      var evaluateSquareRoot;
      var saevdMemory;
    
      var powerRunFinalValue;


var inputedValue = document.calculatorMain; // saves the value in the form calculatorMain to a variable -- Unused Variable
var finalValue = 0 ; 	// uses this variable to save the parseFloat value
var operationCheck = false; //checks if the operator is inputed or not
var operatorValue = ""; // sets the value of the operator to empty. later changed to a value
 
 function numberInput (Num){
 	if (operationCheck) { //if an operator is inserted than it will run this.
 		calculatorMain.screenValue.value = Num; // sets the value of the display to the number clicked. Will only run once
 		operationCheck = false; // makes sure this does not run and it links to the else else statement. !!! Connection Sent - After operator is clicked
 	} else {
 			if (calculatorMain.screenValue.value == "0") // checks if the value of the display is 0
 				calculatorMain.screenValue.value = Num; // if it is 0 it will set the value to the number clicked
 			else
 			calculatorMain.screenValue.value += Num; // if a number has been already inputted than it will add onto the string. ex. 55 = 5+=5 !!!Connection Received Here
 	}
 }

  function Operation(Op){
  	var calcVal = calculatorMain.screenValue.value; // saves the value of the string to a variable
  


  	if(powerRun == 5 && operationCheck && operatorValue != "=" );// checks if the user is not input is not = 
  	{
  		operationCheck = true; // sets the boolean to true
  		if ('+' == operatorValue){ // looks to check if the operator is a + 
  			finalValue += parseFloat(calcVal); //saves the value as a variable in int format
      }
  		 else if ('-' == operatorValue){ // similar as above
  			finalValue -= parseFloat(calcVal);
      }
  		  else if('*' == operatorValue){ 
  		  	finalValue *= parseFloat(calcVal);
        }
  		  else if('/' == operatorValue){
  		   	finalValue /=parseFloat(calcVal); 
         }
  		   else if('%' == operatorValue){
  		   	finalValue %=parseFloat(calcVal);
         } else if (operatorValue == 5){
       powerRunFinalValue = Math.pow(calcVal, finalValue);
        finalValue = powerRunFinalValue;

      }

         else {
  		   		finalValue = parseFloat(calcVal); // saves the finalvaluable variable as a int
         }
  		   	calculatorMain.screenValue.value = finalValue;  // prints it to the text field

  		   	operatorValue = Op;	// uses the operator inputed before to do the calcualation
  	}
  }




            function Clear(){
            	calculatorMain.screenValue.value = "0"; // sets the value to 0. The value that is inputed after the operator is clicked
            }

              function powerRunFinal(){
                      powerRunFinalValue= Math.pow(powerRun, calculatorMain.screenValue.value);
                      calculatorMain.screenValue.value = powerRunFinalValue;

              }


    function runCos() {
      evaluateCos = Math.cos( calculatorMain.screenValue.value);
      calculatorMain.screenValue.value = evaluateCos;

    }


     function runTan() {
      evaluateCos = Math.tan( calculatorMain.screenValue.value);
      calculatorMain.screenValue.value = evaluateCos;

    }
    
    function runSin() {
      evaluateSin = Math.sin( calculatorMain.screenValue.value);
        calculatorMain.screenValue.value = evaluateSin;
    }

    function deleteChar() {
      calculatorMain.screenValue.value = calculatorMain.screenValue.value.substring(0,calculatorMain.screenValue.value.length - 1)
    }


  function runDecimal(){
      calculatorMain.screenValue.value += ".";
    }
            function ClearFinal () {
                 calculatorMain.screenValue.value = "0";
                operationCheck = true;
                   finalValue = 0;
                operatorValue = "";
            }
            function clearEntry () {
             
                ClearFinal();
            }


    function squareRootFunction(){
      evaluateSquareRoot = Math.sqrt(calculatorMain.screenValue.value);
      calculatorMain.screenValue.value = evaluateSquareRoot;
    }

    

    function runmemorySave (){
    saevdMemory  = calculatorMain.screenValue.value;
    
    calculatorMain.screenValue.value = "0";	
    }
    function runmemoryRecall(){
    	if ('+' == operatorValue) // looks to check if the operator is a + 
  			finalValue += parseFloat(saevdMemory); //saves the value as a variable in int format
  		 else if ('-' == operatorValue) // similar as above
  			finalValue -= parseFloat(saevdMemory);
  		  else if('*' == operatorValue) 
  		  	finalValue *= parseFloat(saevdMemory);
  		  else if('/' == operatorValue)
  		   	finalValue /=parseFloat(saevdMemory);
  		   else if('%' == operatorValue)
  		   	finalValue %=parseFloat(saevdMemory);


      calculatorMain.screenValue.value = finalValue
    }


     function Neg () {
          inputedValue.screenValue.value = parseFloat(inputedValue.screenValue.value) * -1; // makes the input in the text field negative
            }
