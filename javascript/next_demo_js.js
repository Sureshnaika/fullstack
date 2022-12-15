// let aa= document.getElementById('div1')
//     aa.classList.add('d-none')
    
// let bb= document.getElementById('div2')
// bb.classList.add('d-none')
// let cc= document.getElementById('div3')
// cc.classList.add('d-none')


// function next_btn(){

// //     let divs = document.getElementsByTagName("div");
// //     //divs now contain each and every div element on the page
// //     let  selectionDiv = document.getElementById("div2");

// //     for(let i = 0; i < divs.length;i++)
// // {
// //    if(divs[i] == selectionDiv)
// //    {
// //      let previous = divs[i - 1];
// //      let next = divs[i + 1];
// //    }
// // }



//     let bb= document.getElementById('div2')
//     bb.classList.add('d-none')
// //     let cc= document.getElementById('div3')
// //     cc.classList.add('d-none')

// //  let sib = document.getElementById('div1').nextSibling;
// //  sib.classList.add('d-block')





// //     // if (inp==aa){
        
// //     //     document.getElementById('div1').style.visible=visible;
// //     // }
// //     // else if(inp==bb)
// //     // {
// //     //     document.getElementById('div2').style.visible=visible;
// //     // }
// //     // else{
// //     //     document.getElementById('div3').style.visible=visible;
// //     // }

// //     // let array=['div1','div2','div3']
// //     // for(let i=0;i<=array.length;i++)
// //     // {
// //     //    let d1= document.getElementById('div2')
// //     //    d1.classList.add('bg-danger')

      
       
// //     // }

// //     // for(let i=0;i<=array.length;i++)
// //     // {
// //     //     let d2=document.getElementById('div3')
// //     //     d2.classList.add('bg-light')
    
      
       
// //     }


   


// let aa= document.getElementById('div1')
//     aa.classList.add('d-none')

//     let bb= document.getElementById('div2')
//     bb.classList.add('d-none')

//     let cc= document.getElementById('div3')
//     cc.classList.add('d-block')


//     let dd= document.getElementById('div4')
//     dd.classList.add('d-none')


//     let ee= document.getElementById('div5')
//     ee.classList.add('d-none')


    







// function next_btn(){
    
//     let d3=document.getElementById('div3').nextElementSibling
  
   


    
    
// }

const scrollButtons = document.querySelectorAll('.slide-btn')
const slideItems = Array.apply(
    null,
  document.querySelectorAll('.slide-item')
)

const getActiveIndex = () => slideItems.findIndex(item => {
    return item.classList.contains('active')
})

scrollButtons.forEach(btn => {
    btn.addEventListener('click', ({ target }) => {
    const activeIndex = getActiveIndex()
    slideItems[activeIndex].classList.remove('active')

    let newActiveIndex
    if (target.id === 'previous') {
      newActiveIndex = activeIndex === 0 ? slideItems.length - 1 : activeIndex - 1
    } else {
      newActiveIndex = activeIndex === slideItems.length - 1 ? 0 : activeIndex + 1
    }

    slideItems[newActiveIndex].classList.add('active')
  })
})