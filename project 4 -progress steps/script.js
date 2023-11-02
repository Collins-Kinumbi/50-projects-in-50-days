var progress = document.getElementById('progress');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var circles = document.querySelectorAll('.circle');

let currentActive = 1

nextBtn.addEventListener('click', ()=>{

    currentActive++
        if (currentActive > circles.length){
            currentActive = circles.length
        }
        
        update()

    })

prevBtn.addEventListener('click', ()=>{

    currentActive--
        if (currentActive < 1){
            currentActive = 1
        } 

        update()
        
    })

function update(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    var actives = document.querySelectorAll('.active')

    //console.log((actives.length/circles.length)* 100)
    console.log ((actives.length -1)/(circles.length -1)* 100 + '%')
    progress.style.width =(actives.length -1)/(circles.length -1)* 100 + '%'

    if(currentActive === 1){
        prevBtn.disabled = true
    }
    else if (currentActive === circles.length){
        nextBtn.disabled = true
    }
    else{
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}
