let count = 0

function show_infos() {
  if(window.innerWidth < 1200){
    let i = document.getElementById('socials')
    i.style.display = 'flex'
  }else if(window.innerWidth > 1200){
    if(count == 0){
      let a = document.getElementById('socials-1200')
      a.style.display = 'flex'
      count+=1
    }else{
      count-=1
      let a = document.getElementById('socials-1200')
      a.style.display = 'none'
    }
  }
}

function hide_infos() {
  let i = document.getElementById('socials')
  i.style.display = 'none'
}

window.addEventListener('resize', function(event){
  if(window.innerWidth < 1200){
    let a = document.getElementById('socials-1200')
    a.style.display = 'none'
  }else if(window.innerWidth > 1200){
    let i = document.getElementById('socials')
    i.style.display = 'none'
  }
});
