document.querySelector('button').addEventListener('mouseover', (e)=>{
    document.querySelector('.moving').style.transform='translate(0,-50px) scaleX(0)'
    document.querySelector('.moving').style.visibility='hidden'
    if(document.querySelector('button').style.backgroundColor == '#86b7fe'){
        document.querySelector('button').style.backgroundColor='white'
    }else {
        setTimeout(function () {
            document.querySelector('button').style.backgroundColor = '#86b7fe'
        }, 900)
    }
