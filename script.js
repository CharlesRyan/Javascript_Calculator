document.addEventListener("DOMContentLoaded", function(event) { 
    
    var resultArray = [],
        result,
        decFlag = false,
        numFlag = false,
        tenKey = /[0-9]/g;
    
    var outline = document.getElementById("outline"),
        ce = document.getElementById("ce"),
        ac = document.getElementById("ac"),
        equals = document.getElementById("equals");
    
    var main = {
        output: document.getElementById("output"),
        current: document.getElementById("current"),
        
        // inputs shown with operators
        displayCurrent: function(a) {
            a = a.join('');
            this.current.value = a;
        },
    
        displayOutput: function (b) {
        // final result with rounding in the case of a decimal
            let c = round(b, String(b));
            this.output.value = c;
        },
        
        //no inputs, only destruction
        clearer: function() {
            this.output.value = 0;
            this.current.value = '';
            decFlag = false;
            numFlag = false;
            resultArray = [];
        },
        
        evaluate: function(input) {
            input = input.join("");
            result = eval(input);
            this.displayOutput(result);
    }
        
    }

    
    
    
    ce.addEventListener('click', function(){
        main.clearer();
    });
    ac.addEventListener('click', function(){
        main.clearer();
    });


    equals.addEventListener('click', function(){
        main.evaluate(resultArray);
    });
    
    function decCheck(input) {
        //check no more than one decimal per number
        if (decFlag === true && input === '.') {
            input = '';
        } else if (decFlag === false && input ==='.') {
            decFlag = true;
            if (numFlag === false) {
                //most recent keypress non-numerical
                input = "0.";
            }
        } else if (input === "+" || input === "-" || input === "/" || input === "*") {
            //reset
            decFlag = false;
        }
    
    return input;
    }
    
    function numCheck(input) {
        //check if most recent keypress is numerical
        if (input.match(tenKey)) {
            numFlag = true;
        } else {
            numflag = false;
        }
    }
    
    function round(c, str) {
        if (str.indexOf(".") !== -1) {
                    c = c.toFixed(2);
                }
        return c;
    }
    
   
    // push keypress to resultArray and check decimals then display 
    outline.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        num = target.value;
        
    num = decCheck(num);
    console.log(num);
    numCheck(num);  
        
    //not undefined and not equal button
    if (num && num !== "=") {    
            //breaking the chain of operations with a numeric or decimal entry
            if (main.output.value !== 0 && (num.match(tenKey) || num === ".")) {
                main.output.value = 0;
                main.current.value = 0;
            } 
        resultArray.push(num);
        main.displayCurrent(resultArray);
    }
    });
 
});



    
