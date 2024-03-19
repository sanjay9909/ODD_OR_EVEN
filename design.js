let index=1

document.querySelector('.r-1').innerHTML = 0
document.querySelector('.r-2').innerHTML = 0

if (index<5){
    let play1 = 0
    let play2 = 0
    document.querySelector('.fbtn').addEventListener('click',()=>{
    let rand1 = Math.ceil(Math.random()*100)
    let rand2 = Math.ceil(Math.random()*100)
    console.log("index="+index)
    console.log(rand1)
    console.log(rand2)
    if(rand1%2===0 && rand2%2===0)
    {
        document.querySelector(`#circle-${index}`).style.backgroundColor = 'green'
        document.querySelector(`#circle-${index*2+5}`).style.backgroundColor = 'green'
        play1 = play1+1
        play2 = play2+1
        document.querySelector('.r-1').innerHTML = play1
        document.querySelector('.r-2').innerHTML = play2
        index++;
    }
    else if(rand1%2!==0 && rand2%2!==0)
    {
        document.querySelector(`#circle-${index}`).style.backgroundColor = 'red'
        document.querySelector(`#circle-${index*2+5}`).style.backgroundColor = 'red'
        document.querySelector('.r-1').innerHTML = play1
        document.querySelector('.r-2').innerHTML = play2
        index++;
    }
    else if (rand1%2===0){
        document.querySelector(`#circle-${index}`).style.backgroundColor = 'green'
        document.querySelector(`#circle-${index*2+5}`).style.backgroundColor = 'red'
        play1 = play1+1
        document.querySelector('.r-1').innerHTML = play1
        document.querySelector('.r-2').innerHTML = play2
        index++;
    }
    else if (rand2%2===0){
        document.querySelector(`#circle-${index}`).style.backgroundColor = 'red'
        document.querySelector(`#circle-${index*2+5}`).style.backgroundColor = 'green'
        play2 = play2+1
        document.querySelector('.r-1').innerHTML = play1
        document.querySelector('.r-2').innerHTML = play2
        index++;
    }
    if(index>5){

        if(play1>play2){
            document.querySelector('.win-1').style.display = "block";
            document.querySelector('.win-2').style.display = "none";
            document.querySelector('.win-3').style.display = "none";
        }else if(play2>play1){
            document.querySelector('.win-1').style.display = "none";
            document.querySelector('.win-2').style.display = "block";
            document.querySelector('.win-3').style.display = "none";
            
        }else if (play1===play2){
            document.querySelector('.win-1').style.display = "none";
            document.querySelector('.win-2').style.display = "none";
            document.querySelector('.win-3').style.display = "block";
        }
        }
    
})

}


document.querySelector('.sbtn').addEventListener('click',(event)=>{
    window.location.reload()
})