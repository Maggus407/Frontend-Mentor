  document.getElementById('accepted').style.display = 'none'

function get_infos() {
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value
  const month = document.getElementById('month').value
  const year = document.getElementById('year').value
  const cvc = document.getElementById('cvc').value
  const form = document.getElementById('card-infos')

  form.addEventListener("submit", (e) =>{
    e.preventDefault()
      set_infos(name, number, month, year, cvc)
      change_form(form)
  })
}

function set_infos(name, number, month, year, cvc) {
  let set_name = document.getElementById('user-name')
  let set_cvc = document.getElementById('cvc-output')
  let set_number = document.getElementById('card-number')
  let set_date = document.getElementById('date-output')

  set_name.textContent  = name
  set_cvc.textContent = cvc
  set_date.textContent = month + '/' + year

  d = ""
  for(i = 0; i < 16; i++){
    if(i==4 || i==8|| i==12){
      d += ' ' + number.charAt(i)
    }else{
      d += number.charAt(i)
    }
  }
  set_number.textContent = d
}

function change_form(form) {
  let f = document.getElementById('card-infos')
  f.style.display = 'none'

  document.getElementById('accepted').style.display = 'flex'
}
