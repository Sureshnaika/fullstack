function fiboncci(fn)
{
    let n1=0
    let n2=1
    let fibnext=n1+n1
    
    for( let i=1;i<=fn;++i)
    {
        fibnext=n1+n2
        n1=n2
        n2=fibnext
        
    }
    console.log(fibnext)
}
fiboncci(6)
