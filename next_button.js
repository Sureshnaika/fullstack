let d1=document.getElementById('div1')
d1.innerHTML=`
       <p>Hi</>
`

let d2=document.getElementById('div2')
d1.innerHTML=`
       <p>Hello</>
`



var sliderimg1=document.querySelector('.abc');
var images = ['d1' , 'd2',];
var i=0;
function prev(){
   if( i <= 0 )i=images.length;
   i--;
  return setImg();
   } 
    
function next(){
    if(i >= images.length-1)
      i=0; 
        i++;
        return setImg();
}

function setImg(){
    return sliderimg1.setAttribute( images[i]);
}




