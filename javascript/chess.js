let ches=document.getElementById('chessboard')
for(let i=0;i<8;i++){
    for(j=0;j<8;j++){
        let innerchess=document.createElement('div')
        innerchess.classList.add('chess-squere')
        if((i+j)%2==0){
            innerchess.style.backgroundColor='#000'
        }
        ches.appendChild(innerchess)
    }
}
