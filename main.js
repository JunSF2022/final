
let textField = document.getElementById('firstNameP1');
// console.log(typeof textField.value);
let firstNameError = document.getElementById("firstNameError");

let from = document.getElementById('from');
let to = document.getElementById('to');
let flightError = document.getElementById('flightError');
let type = document.getElementsByName('itineraryType');

let isReturn = true; //for radio button

//Variables and function to set from date picker
let date = new Date();
let todayDate = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getUTCFullYear();
let setFromDate;
setFromDatePicker();

//Codes to remove return date picker
var owRadioButton = document.getElementById('oneway');
owRadioButton.addEventListener("click",removeReturnDatePicker);

//Codes to add date picker
var retRadioButton = document.getElementById('return');
retRadioButton.addEventListener("click",addReturnDatePicker);

function display(){
    checkName(textField.value);
    checkFromAndTo();
    checkItineraryType();
    
    // console.log(from.value);
    // console.log(to.value);
    //console.log(isReturn);
}

//Under development
function addReturnDatePicker(){
    let temp = document.getElementById('type');
    // let child 
}

function removeReturnDatePicker(){
    // console.log("listening");
    let temp = document.getElementById('returnDate');
    let parent = temp.parentNode;
    parent.removeChild(temp);
}

//Setting up the current date dynamically
function setFromDatePicker(){
    if(currentMonth < 10){
        currentMonth = "0" + currentMonth;
    }
    if(todayDate < 10){
        todayDate = "0" + todayDate;
    }
    setFromDate = currentYear + "-" + currentMonth + "-" + todayDate;
    // console.log(setFromDate);
    document.getElementById("fromDate").setAttribute("min", setFromDate);    
    document.getElementById("fromDate").r
}


//Calculates number of characters from
function checkName(name){
    if (name.length < 5){
            //alert("Please enter a valid first name");
            firstNameError.innerText = "Please enter a valid first name";
        }
}

//Alerts when from and to cities are same.
function checkFromAndTo(){
    if (from.value === to.value){
            //alert("Please enter correct cities");
            flightError.innerText = "From and to must be different and selected";
        }
}

//Determining which radio button is selected
function checkItineraryType(){
    if(type[0].checked){
        isReturn = false;
    }else{
        isReturn = true;
    }
}


