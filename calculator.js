
let Display_ = document.getElementById('display'); // The display which shows all the numbers clicked.


// NOTE these functions are called by the operate() function, which takes an operator and two numbers as its parameters and checks the operator against an if statement and calls a correct arithmetic function accordingly.

function add(a,b) {
    Display_.textContent = parseFloat(a) + parseFloat(b);
}
function sub(a,b) {
    let Array = [a,b];
    let Result = Array.reduce((acc,current) => acc-current);
     return Display_.textContent = Result;
}
function mul(a,b) {
    let Array = [a,b];
    let Result = Array.reduce((acc,current) => acc*current);

     return Display_.textContent = Result;
}
function div(a,b){
    let Array = [a,b];
    let Result = Array.reduce((acc,current) => acc/current );
     return Display_.textContent = Result;
}

// ----------------------------------------------------------------

// The operate function is called when the = button is pressed.

function operate(operator,a,b) {
    if (operator == "+") {
        add(a,b);
    }
    if (operator == "-") {
        sub(a,b);
    }
    if(operator == "*") {
        mul(a,b);
    }
    if( operator == "÷") {
        div(a,b);

    }
}


let _save, save_, save; // LHS operand,RHS operand, The arithmetic operator.

let NUMBERS = document.querySelectorAll('.n'); // selecting all the buttons with numeric values

// for each button we are adding a click event which basically displays the buttons value on the display.

NUMBERS.forEach((n) => {
    n.addEventListener('click' , function () {
        Display_.textContent += n.textContent;
    })
})

// ---------------------------------------


let CLEAR = document.getElementById('clear'); // getting the clear button

// clear when clicked, flushes the display

CLEAR.addEventListener('click', function () {
    Display_.textContent = null;
})

// ---------------------------

let OPERATORS = document.querySelectorAll('.operator'); // getting all the operators except for =

let G_OPERATE; // will use this to store the value of the arithmetic operator clicked so that later on we can send it to operate() and call an appropriate function accordingly.

// for each operator button, we are adding a click event which will basically set the value of _save(LHS operand) to the value on the display and then flushing the display so that when the user inputs/selects another number, that number will be stored in save_(RHS operand) when the equal operator is clicked.  

OPERATORS.forEach((o) => {
    o.addEventListener('click' , function () {
       _save = parseFloat(Display_.textContent);
       Display_.textContent = null;
       G_OPERATE = o.textContent;

    })
})

let EQUAL = document.getElementById('equal'); // getting the equal button.

EQUAL.addEventListener('click' , function () {
    save_ = parseFloat(Display_.textContent); // upon clicking, store the RHS operand in save_ (RHS operand)
    operate(G_OPERATE,_save,save_);
})

