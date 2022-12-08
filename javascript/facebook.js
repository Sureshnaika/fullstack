


function change_color(){
     let btn =document.getElementById('btn')
    
         btn.classList.add('text-primary')

    
}


function comment(){
    let comment=document.getElementById('comment')
    comment.innerHTML=`
    <input type="text-area" class="form-control-lg w-100 position-relative" placeholder="type comment here">
    <button class="btn btn-secondaty position-absolute ">Submit</button>
        `
}
