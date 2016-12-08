document.addEventListener("DOMContentLoaded", function (event) { 
    
    var resultArray = [],
        result,
        decimal = false;
    
    var output = document.getElementById("output"),
        outline = document.getElementById("outline"),
        ce = document.getElementById("ce"),
        current = document.getElementById("current"),
        equals = document.getElementById("equals");
    

    ce.addEventListener('click', function(){
        clearer();
    });
    equals.addEventListener('click', function(){
        evaluate(resultArray);
    });
    
    
   
    // push keypress to resultArray and check decimals then display 
    outline.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        num = target.value;
        
    //check no more than one decimal per number
    if (decimal === true && num ==='.') {
        num = '';
    } else if (decimal === false & num ==='.') {
        decimal = true;
    } else if (num === "+" || num === "-" || num === "/" || num === "*") {
        decimal = false;
    }
        
    //not undefined and not equal button
    if (num && num !== "=") {
        resultArray.push(num);
        console.log(num);
        displayCurrent(resultArray);
    }
    });
 

    // inputs shown with operators
    function displayCurrent(a) {
        a = a.join('');
        current.value = a;
    }
    
    // final result
    function displayOutput(b) {
        output.value = b;
    }
    
    function evaluate(input) {
        input = input.join("");
        result = eval(input);
        displayOutput(result);
    }
    
    //no inputs, only destruction
    function clearer() {
        output.value = 0;
        current.value = '';
        resultArray = [];
    }

    
    


});

    