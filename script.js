{
  const stepAll = document.querySelectorAll('.step')
  const btnNext = document.querySelector('.btn-submit')
  const formAll = document.querySelectorAll('form')

  let activeStep = 0

  btnNext.addEventListener('click', setStatus)


  function setStatus(event){
    event.preventDefault()
    if(activeStep < stepAll.length){
      stepAll[activeStep].classList.add('done')
      formAll[activeStep].classList.toggle('hidden')
    }else
      return
    if(activeStep < stepAll.length-1){
      stepAll[activeStep+1].classList.add('active')
      formAll[activeStep+1].classList.toggle('hidden')
    }
    activeStep++
    console.log(activeStep)
  }

}
