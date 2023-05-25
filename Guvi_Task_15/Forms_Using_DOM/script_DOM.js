//Create div and create ID for div and append div to the body tag
let container =document.createElement('div')
container.id="form_container"
container.classList.add('container')
document.body.append(container)

// var heading = document.createElement('div');
// heading.setAttribute('class', 'h2');
// heading.innerHTML = "HTML FORM"
// heading.id="title"
// heading.style.textAlign = "center";

//Create heading element
let heading_text=document.createElement('h1');
heading_text.id="title"
heading_text.innerHTML="Form"
heading_text.style.textAlign = "center";

//Create paragraph element
let paragraph_text=document.createElement('p')
paragraph_text.id="description"
paragraph_text.innerHTML="Please fill the below details:"
paragraph_text.setAttribute('class','fw-bold')

//create form element
let forms=document.createElement('form');
forms.setAttribute('class', 'p-5')
forms.id="form"



//Function to create input elements
function createInputElement(label_name,input_type,id_name)
{
    let input_div = document.createElement('div');
    input_div.setAttribute('class', 'form-group row');
    var label = document.createElement('label');
    label.classList.add('col-3','form-label');
    label.innerHTML=label_name;
    let type_of_input=document.createElement('input')
    type_of_input.setAttribute('type',input_type)
    type_of_input.id=id_name;
    type_of_input.placeholder=label_name
    type_of_input.classList.add('col-7','form-control')
    type_of_input.required=true;
    input_div.append(label,type_of_input)
    return input_div;
}

//Function to create textarea
function createTextarea(label_name,input_type,id_name)
{
    let input_div = document.createElement('div');
    input_div.setAttribute('class', 'form-group row');
    var label = document.createElement('label');
    label.classList.add('col-3','form-label');
    label.innerHTML=label_name;
    let type_of_input=document.createElement('textarea')
    type_of_input.setAttribute('type',input_type)
    type_of_input.id=id_name;
    type_of_input.placeholder=label_name
    type_of_input.classList.add('col-7','form-control')
    type_of_input.required=true;
    input_div.append(label,type_of_input)
    return input_div;
}
//Function to create radio for gender
function radio(label_name){
    
    let radio_div=document.createElement('div');
    radio_div.setAttribute('class', 'row form-group');

    var label = document.createElement('label');
    label.classList.add('col-3','form-label');
    label.innerHTML=label_name;

    let d1=document.createElement('div');
    d1.setAttribute('class', 'col-2 form-check');  
    let radio1=document.createElement('input')
    radio1.setAttribute('type','radio')
    radio1.setAttribute('class', 'form-check-input');
    radio1.id="Male"
    radio1.value="Male"
    radio1.name="gender"
    let male_label=document.createElement('label')
    male_label.setAttribute('for','Male')
    male_label.innerHTML="Male";
    male_label.setAttribute('class',' form-check-label');

    let d2=document.createElement('div');
    d2.setAttribute('class', 'col-2 form-check');
    let radio2=document.createElement('input')
    radio2.setAttribute('type','radio')
    radio2.setAttribute('class', 'form-check-input');
    radio2.id="Female"
    radio2.value="Female"
    radio2.name="gender"
    let female_label=document.createElement('label')
    female_label.setAttribute('for','Female')
    female_label.innerHTML="Female";
    female_label.setAttribute('class','form-check-label');

    d1.append(radio1,male_label)
    d2.append(radio2,female_label)
    radio_div.append(label,d1,d2)
    return radio_div;
}

//Function to create checkbox for food
function checkbox(food_lbl)
{
    let food_div=document.createElement('div')
    food_div.setAttribute('class','form-group row')

    let label=document.createElement('label')
    label.setAttribute('class','col-3 form-label')
    label.innerHTML=food_lbl;

    function food_check(food_value){
        let chk_div_2=document.createElement('div')
        chk_div_2.setAttribute('class', 'col-auto form-check '); 
        let food_select_2=document.createElement('input')
        food_select_2.setAttribute('type','checkbox')
        food_select_2.setAttribute('class','form-check-input')
        food_select_2.id= food_value;
        food_select_2.value=food_value;
        food_select_2.name=food_value;
        let chk_label_2=document.createElement('label'); 
        chk_label_2.for= food_value;
        chk_label_2.innerHTML=food_value
        chk_label_2.setAttribute('class','col-auto form-check-label');
        chk_div_2.append(food_select_2,chk_label_2);
        return chk_div_2
    }

   let pizza=food_check("Pizza")
   let burger=food_check("Burger")
   let fries=food_check("Fries")
   let cookies=food_check("Cookies")
   let popcorn=food_check("Popcorn")
   food_div.append(label,pizza,burger,fries,cookies,popcorn)
   return food_div;
}

//Function to create dropdown for state
function state_dropdown(label_name)
{
    let state_div=document.createElement('div')
    state_div.setAttribute('class','form-group row ')

    let label=document.createElement('label')
    label.setAttribute('class','col-3 form-label')
    label.innerHTML=label_name;

    let state_select=document.createElement('select')
    state_select.setAttribute('type','button')
    state_select.setAttribute('class','col-7 form-control')
    state_select.id='state';
   
    var states = ["Select your state","TamilNadu","Kerala","Karnataka","Andhra Pradesh","Delhi"];
 
    for(var i=0;i<states.length;i++){     
        var opt = document.createElement("option"); 
        opt.text = states[i];
        opt.value = states[i];
        state_select.options.add(opt);      
    }

    state_div.append(label, state_select)
    return state_div;
}

//Function to create dropdown for country
function country_dropdown(label_name){
    let country_div=document.createElement('div')
    country_div.setAttribute('class','form-group row ')

    let label=document.createElement('label')
    label.setAttribute('class','col-3 form-label')
    label.innerHTML=label_name;

    let country_select=document.createElement('select')
    country_select.setAttribute('type','button')
    country_select.setAttribute('class','col-7 form-control')
    country_select.id='country';
   
    var countries = ["Select your country","India","United States of America","Australia","Africa","United Kingdom"];
 
    for(var i=0;i<countries.length;i++){     
        var opt = document.createElement("option"); 
        opt.text = countries[i];
        opt.value = countries[i];
        country_select.options.add(opt);      
    }

    country_div.append(label, country_select)
    return country_div;
}

//Function to create submit for onsubmit
function create_submit_btn(id)
{
    let submit_div=document.createElement('div');
    submit_div.setAttribute('class','form-group d-grid gap-2 col-4 mx-auto')

    let submit_btn=document.createElement('button');
    submit_btn.innerHTML="Submit"
    submit_btn.setAttribute('type','submit')
    submit_btn.setAttribute('class','btn btn-primary ')
    submit_btn.id=id
    submit_btn.onclick=submitData;

    submit_div.append(submit_btn)
    return submit_div;
}

//Create input fields using function and append it to form
let f_name=createInputElement("First Name",'text',"first-name")
let l_name=createInputElement("Last Name",'text','last-name')
let addr=createTextarea("Address",'textarea','address')
let pin_code=createInputElement("PinCode",'text','pincode')
let gender=radio("Gender");
let food=checkbox("Food");
let state=state_dropdown("State");
let country=country_dropdown("Country");
let submit_btn=create_submit_btn("submit");
forms.append(f_name,l_name,addr,pin_code,gender,food,state,country,submit_btn)

//Creating table

var divtable = document.createElement('div')
divtable.setAttribute('class', 'row');

var table = document.createElement('table');
table.setAttribute('class', 'table mt-5');
table.id="table"

var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

var tr1 = document.createElement('tr');

var th1 = document.createElement('th');
th1.innerHTML = 'First Name';
var th2 = document.createElement('th');
th2.innerHTML = 'Last Name';
var th3 = document.createElement('th');
th3.innerHTML = 'Address';
var th4 = document.createElement('th');
th4.innerHTML = 'Pincode';
var th5 = document.createElement('th');
th5.innerHTML = 'Gender';
var th6 = document.createElement('th');
th6.innerHTML = 'Food';
var th7 = document.createElement('th');
th7.innerHTML = 'State';
var th8 = document.createElement('th');
th8.innerHTML = 'Country';



function submitData() {
    var fn = document.getElementById('first-name').value;
    var ln = document.getElementById('last-name').value;
    var addr = document.getElementById('address').value;
    var pcode = document.getElementById('pincode').value;

    if (!fn) {
        alert('Please Enter First Name');
    } else if (!ln) {
        alert('Please Enter Last Name');
    } else if (!addr) {
        alert('Please Enter Address');
    } else if (!pcode) {
        alert('Please Enter pincode');
    } else {

        let tablebody = document.querySelector('tbody');
        var trow2 = tablebody.insertRow(0);
        var cell1 = trow2.insertCell(0);
        var cell2 = trow2.insertCell(1);
        var cell3 = trow2.insertCell(2);
        var cell4 = trow2.insertCell(3);
        var cell5 = trow2.insertCell(4);
        var cell6 = trow2.insertCell(5);
        var cell7 = trow2.insertCell(6);
        var cell8 = trow2.insertCell(7);
        cell1.innerHTML = fn;
        cell2.innerHTML = ln;
        cell3.innerHTML = addr;
        cell4.innerHTML = pcode;

        var data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true)
                cell5.innerHTML = data[i].value;
        }

        var foodvalues = document.getElementById('food_value');
        cell6.innerHTML = [...foodvalues.options].filter((val) => val.selected).map((opt) => opt.value);
       cell6.innerHTML=document.getElementById('food_value').value;

        cell7.innerHTML = document.getElementById('state').value;
        cell8.innerHTML = document.getElementById('country').value;

        alert('Thank You!!!')
    }


}


divtable.append(table);
table.append(thead, tbody);
thead.append(tr1);
tr1.append(th1, th2, th3, th4,th5,th6,th7,th8);

//Append h1, p, form and table to div container
container.append(heading_text,paragraph_text,forms,divtable);