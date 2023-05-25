var div1 = create('div', 'container');
div1.id='cal_div'

let bg = document.querySelector('body');

//Create heading element
let heading_text=document.createElement('h1');
heading_text.id="title"
heading_text.innerHTML="Calculator"
heading_text.style.textAlign = "center";

//Create paragraph element
let paragraph_text=document.createElement('p')
paragraph_text.id="description"
paragraph_text.innerHTML="Task"
//paragraph_text.setAttribute('class',' fw-bold')

let divarr = createElements('div', 'offset-md-2 offset-sm-1 row text-md-center text-sm-left h4 mb-0', 6);

let input = create('input', 'col-8 border-3 border-light text-right mt-5 mb-1');
input.setAttribute('type', 'text');
input.disabled = true;
input.setAttribute('style', `line-height:60px; background-color:#505354; border-color: #343a40;color: #fff; font-family: 'Comfortaa', cursive;`);
input.id = "result";


var btnnumbers = createElements('button', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2', 10);

btnnumbers[0].setAttribute('onclick', "appendNumber(0)");
btnnumbers[1].setAttribute('onclick', `appendNumber(1)`);
btnnumbers[2].setAttribute('onclick', `appendNumber(2)`);
btnnumbers[3].setAttribute('onclick', `appendNumber(3)`);
btnnumbers[4].setAttribute('onclick', `appendNumber(4)`);
btnnumbers[5].setAttribute('onclick', `appendNumber(5)`);
btnnumbers[6].setAttribute('onclick', `appendNumber(6)`);
btnnumbers[7].setAttribute('onclick', `appendNumber(7)`);
btnnumbers[8].setAttribute('onclick', `appendNumber(8)`);
btnnumbers[9].setAttribute('onclick', `appendNumber(9)`);


let add = createButton('+', '+', `appendNumber('+')`);
add.id="add"
let sub = createButton('-', '-', `appendNumber('-')`);
sub.id="subtract"
let mul = createButton('x', 'X', `appendNumber('*')`);
let division = createButton('/', '/', `appendNumber('/')`);
let dot = createButton('.', '.', `appendNumber('.')`);
let clear = createButton('c', 'c', 'clearScreen()');
clear.id="clear"
let leftArrow=createButton('&#8592','&#8592','clearNumber()');
let doubleZero=createButton('00','00','twoZero()');
let equals = createButtonDouble('=', '=', 'equate()');
equals.id="equal"


document.body.append(div1);
div1.append(heading_text,paragraph_text,divarr[0], divarr[1], divarr[2], divarr[3], divarr[4], divarr[5]);
divarr[0].append(input);
divarr[1].append(clear,leftArrow, dot, division);
divarr[2].append(btnnumbers[7], btnnumbers[8], btnnumbers[9], mul);
divarr[3].append(btnnumbers[4], btnnumbers[5], btnnumbers[6], sub);
divarr[4].append(btnnumbers[1], btnnumbers[2], btnnumbers[3], add);
divarr[5].append(btnnumbers[0],doubleZero, equals);

function create(element, classname) {
    let t = document.createElement(element);
    t.setAttribute('class', classname);
    return t;
}

function createElements(element, classname, num) {
    let elem = [];
    for (let i = 0; i < num; i++) {
        var b = document.createElement(element);
        b.setAttribute('class', classname);
        b.setAttribute('style', `font-family: 'Comfortaa', cursive;`);
        if (element === 'button') {
            b.setAttribute('value', i);
            b.innerHTML = i;
            b.id=i;
        }
        elem.push(b);
    }
    return elem;
}

function createButton(txt, val, fn) {
    let a = document.createElement('button');
    a.setAttribute('class', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2');
    a.setAttribute('value', val);
    a.innerHTML = txt;
    a.setAttribute('onclick', fn);
    return a;
}
function createButtonDouble(txt, val, fn) {
    let a = document.createElement('button');
    a.setAttribute('class', 'btn-fluid btn-dark text-center p-md-3 p-sm-4 p-xs-4 col-4');
    a.setAttribute('value', val);
    a.innerHTML = txt;
    a.setAttribute('onclick', fn);
    return a;
}

function appendNumber(val) {
    input.value += val;
}
function twoZero(){
    input.value +='00'
}


function equate() {
    input.value = Number.isInteger(eval(input.value)) ? eval(input.value) : eval(input.value).toFixed(2);
}

function clearScreen() {
    input.value = "";
}

function clearNumber()
{
    input.value = input.value.toString().slice(0, -1)
}
