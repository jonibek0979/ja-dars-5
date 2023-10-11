var elTitle = document.querySelector('.title')
var elMainn = document.querySelector('.mainn')
var elBtn__2 = document.querySelector('.btn__2')


function fn() {
    // elTitle.style.color = '#0b4c0e'
    // elTitle.style.disply = 'block'
    // elTitle.style.border = '2px solid green'
    // elTitle.style.textAlign = 'center'
    // elTitle.style.bgckround = 'blue'
    elMainn.classList.toggle('main')
    
    // elTitle.textContent = 'Salomm'

}

var statuss = false



function fn2() {
  if (statuss == true) {
    elBtn__2.textContent = 'kun'
    // elBtn__2.classList.toggle('btn__3')
elBtn__2.style.backgroundColor ='white'
elBtn__2.style.border ='1px solid black'
elBtn__2.style.color ='black'


  }else{
    elBtn__2.textContent = 'tun'
    elBtn__2.style.backgroundColor ='black'
    elBtn__2.style.color ='white'
    elBtn__2.style.border ='2px solid white'

    
  }

  statuss = !statuss
    
    



}





























































