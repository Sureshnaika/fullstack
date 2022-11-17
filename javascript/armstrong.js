function armstrong(num)
{   
    let pow1
    let sum=0

    function splitIntoArray(num) 
      {
        return Array.from(String(num), Number);
      }
      const arr1 = splitIntoArray(num);
      console.log(arr1);
      
      for (let i=0;i<=arr1.length-1;i++)
        {
          
            pow1=arr1[i]*arr1[i]*arr1[i]
            console.log(pow1)
            sum+=pow1
        }
     
      console.log(sum)
        
      if(sum==num)
        {
          console.log("Given number is Armstrong number")
        }
        else
        {
          console.log("Given number is not a Armstrong number")
        }

}
armstrong(153)

