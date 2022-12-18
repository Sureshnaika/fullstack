let d1=document.getElementById('div1')
d1.style.display="none"
let d2=document.getElementById('div2')
d2.style.display="block"
let d3=document.getElementById('div3')
d3.style.display="none"





let  clicks = 0;
let negativ =0;

function next_btn(inp)
{
    let next1=document.getElementById(inp).nextElementSibling.style.display='block'
    d2.style.display='none'


      clicks += 1;
     

    if (clicks==2){
      d1.style.display='block'
      d3.style.display='none'
    }
   else if(clicks==3){
    d2.style.display='block'
    d1.style.display='none'
    d3.style.display='none'
   }

  
}



function pre_btn(inp)
 {
//     div2.style.display='none'
//     let next2=document.getElementById(inp).previousElementSibling.style.display='block'

    negativ-=1;
      
      switch(negativ)
      {

        case -1:d1.style.display='block',d2.style.display='none',d3.style.display='none'
        break;
        case -2:d2.style.display='block',d1.style.display='none',d3.style.display='none'
        break;
        case -3:d3.style.display='block',d1.style.display='none',d2.style.display='none'
        break;
       

      }
}






// Dropdown code
var states = new Array();
states['India'] = new Array('Karnataka','Andra Pradesh','Tamilnadu','Kerala','Telangana')
states['Canada'] = new Array('Alberta','British Columbia','Ontario');
states['Mexico'] = new Array('Baja California','Chihuahua','Jalisco');
states['United States'] = new Array('California','Florida','New York');


// City lists
var cities = new Array();

cities['India']= new Array();
cities['India']['Karnataka']=new Array('Bangalore','Mangalore','Kolar','Chikkaballapur');
cities['India']['Andra Pradesh' ]= new Array('Hindupur','Ananthpur','Tirupathi');
cities['India']['Tamilnadu' ]= new Array('Chanai','Kochi','Kanyakumari');
cities['India']['Kerala' ]= new Array('Hindupur','Ananthpur','Tirupathi');
cities['India']['Telangana' ]= new Array('Hydarabad','Wizag',);


cities['Canada'] = new Array();
cities['Canada']['Alberta']          = new Array('Edmonton','Calgary');
cities['Canada']['British Columbia'] = new Array('Victoria','Vancouver');
cities['Canada']['Ontario']          = new Array('Toronto','Hamilton');

cities['Mexico'] = new Array();
cities['Mexico']['Baja California'] = new Array('Tijauna','Mexicali');
cities['Mexico']['Chihuahua']       = new Array('Ciudad Ju??rez','Chihuahua');
cities['Mexico']['Jalisco']         = new Array('Guadalajara','Chapala');

cities['United States'] = new Array();
cities['United States']['California'] = new Array('Los Angeles','San Francisco');
cities['United States']['Florida']    = new Array('Miami','Orlando');
cities['United States']['New York']   = new Array('Buffalo','new York');


function setStates() {
  cntrySel = document.getElementById('country');
  stateList = states[cntrySel.value];
  changeSelect('state', stateList, stateList);
  setCities();
}

function setCities() {
  cntrySel = document.getElementById('country');
  stateSel = document.getElementById('state');
  cityList = cities[cntrySel.value][stateSel.value];
  changeSelect('city', cityList, cityList);
}

function changeSelect(fieldID, newOptions, newValues) {
  selectField = document.getElementById(fieldID);
  selectField.options.length = 0;
  for (i=0; i<newOptions.length; i++) {
    selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
  }
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } 
  else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  setStates();
});