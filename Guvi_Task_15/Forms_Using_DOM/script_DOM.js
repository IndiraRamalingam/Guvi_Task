//Create div and create ID for div and append div to the body tag
let container =document.createElement('div')
container.id="form_container"
container.classList.add('container')
document.body.append(container)

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

    function food_check(food_value,food_id,name){
        let chk_div_2=document.createElement('div')
        chk_div_2.setAttribute('class', 'col-auto form-check '); 
        let food_select_2=document.createElement('input')
        food_select_2.setAttribute('type','checkbox')
        food_select_2.setAttribute('class','form-check-input')
        food_select_2.id= food_id;
        //console.log("ID  " +food_select_2.id)
        food_select_2.value=food_value;
        food_select_2.name=name;
        console.log(food_select_2.name)
        //let food_val=food_select_2.name.valueOf()
      //  console.log(food_val)
        let chk_label_2=document.createElement('label'); 
        chk_label_2.setAttribute('for','food_id');
        chk_label_2.innerHTML=food_value
        chk_label_2.setAttribute('class','col-auto form-check-label');
        chk_div_2.append(food_select_2,chk_label_2);
        return chk_div_2
    }

   let pizza1=food_check("Pizza","pizza","food_name")
   let burger1=food_check("Burger","burger","food_name")
   let fries1=food_check("Fries","fries","food_name")
   let cookies1=food_check("Cookies","cookies","food_name")
   let popcorn1=food_check("Popcorn","popcorn","food_name")
   food_div.append(label,pizza1,burger1,fries1,cookies1,popcorn1)
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
   
    var states = ["TamilNadu","Kerala","Karnataka","Andhra Pradesh","Delhi"];
 
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
   
    var countries = ["India","United States of America","Australia","Africa","United Kingdom"];
 
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
table.setAttribute('class', 'table table-striped table-hover mt-5');
table.id="table"

var thead = document.createElement('thead');
//thead.setAttribute('class','table-primary')
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

function submitData(){
    //console.log("Thank You")
    let table_first_name=document.getElementById('first-name')
    //console.log(table_first_name.value)
    let table_last_name=document.getElementById('last-name')
   // console.log(table_last_name.value)
    let table_address=document.getElementById('address')
   // console.log(table_address.value)
    let table_pincode=document.getElementById('pincode')
   // console.log(table_pincode.value)
    let table_gender=document.getElementsByName('gender')
    let gen=[];
        for (let i = 0; i < table_gender.length; i++) {
            if (table_gender[i].checked === true)
                //console.log(table_gender[i].value);
                gen.push(table_gender[i].value)
        }
       // console.log(gen);
    //Condition to select only two checkbox
        var checkBoxGroup = document.forms['form']['food_name'];			
        var limit = 2;
        for (var i = 0; i < checkBoxGroup.length; i++) {
            checkBoxGroup[i].onclick = function() {
                var checkedcount = 0;
                for (var i = 0; i < checkBoxGroup.length; i++) {
                    checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
                }
                if (checkedcount > limit) {
                    //console.log("You can select maximum of " + limit + " checkboxes.");
                    alert("You can select maximum of " + limit + " checkboxes.");						
                    this.checked = false;
                }
            }
        }
        let table_food= document.querySelectorAll('input[name="food_name"]:checked');
        let food_output= [];
        table_food.forEach((checkbox) => {
        food_output.push(checkbox.value);
        });
         //console.log("You have selected ", food_output);
    let table_state=document.getElementById('state')
    //console.log(table_state.value)
    let table_country=document.getElementById('country')
        //console.log(table_country.value)
    

//Create table row for tbody
if (!table_first_name.value) {
    console.log("please enter first")
    alert('Please Enter First Name');
} else if (!table_last_name.value) {
    alert('Please Enter Last Name');
} else if (!table_address.value) {
    alert('Please Enter Address');
} else if (!table_pincode.value) {
    alert('Please Enter pincode');
} else {
let table_row = document.createElement('tr');
let td1=document.createElement('td')
td1.textContent=table_first_name.value;
let td2=document.createElement('td')
td2.textContent=table_last_name.value;
let td3=document.createElement('td')
td3.textContent=table_address.value;
let td4=document.createElement('td')
td4.textContent=table_pincode.value;
let td5=document.createElement('td')
td5.textContent=gen;
let td6=document.createElement('td')
td6.textContent=food_output;
let td7=document.createElement('td')
td7.textContent=table_state.value;
let td8=document.createElement('td')
td8.textContent=table_country.value;

//console.log("Table   "+td.textContent)
table_row.append(td1,td2,td3,td4,td5,td6,td7,td8)
tbody.append(table_row)
alert('Thank You for submitting the form!!!')
//To reset form
document.getElementById("form").reset();
}
}
divtable.append(table);
table.append(thead, tbody);
thead.append(tr1);
tr1.append(th1, th2, th3, th4,th5,th6,th7,th8);

//Append h1, p, form and table to div container
container.append(heading_text,paragraph_text,forms,divtable);
