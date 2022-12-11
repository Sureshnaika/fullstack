function test(){

    let frst = document.getElementById("firstname").value;
    let lst = document.getElementById("lastname").value;
    let phn = document.getElementById("phone").value;
    let ps = document.getElementById("password").value;
    let em = document.getElementById("email").value;



    let f = localStorage.setItem("frst",frst)
    let l = localStorage.setItem("lst",lst)
    let p = localStorage.setItem("phn",phn)
    let pss = localStorage.setItem("ps",ps)
    let eml = localStorage.setItem("em",em)

    let fg = localStorage.getItem("frst",frst)
    let lg = localStorage.getItem("lst",lst)
    let pg = localStorage.getItem("phn",phn)
    let pssg = localStorage.getItem("ps",ps)
    let emlg = localStorage.getItem("em",em)


    // if (frst==fg && lst==lg && phn==pg && ps==pssg && em==emlg)
    // {
    //     alert("Login successfull")
    // }

    // else
    // {
    //     alert("invalid credential")
    // }

    let domo=document.getElementById("demo")
    demo.innerHTML=`
   <table class="border border-5">
           <tr>  <td> ${fg}  </td></tr>  
             <tr>  <td> ${lg}  </td></tr>
             <tr>   <td> ${pg}  </td></tr>
             <tr>  <td> ${pssg}  </td></tr>
             <tr>   <td> ${emlg}  </td></tr>
    </table>

    
    
    `
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
   document.getElementById("phone").value="";
    document.getElementById("password").value="";
    document.getElementById("email").value="";

}

 
    function new_edit() {
        var parseAmount2 = localStorage.getItem("frst");
        document.getElementById("firstname").value =(parseAmount2);
      }


      function Delete(){
        localStorage.clear()
      }
    
 



