window.addEventListener('DOMContentLoaded', function(event) {
    const titleInput = document.querySelector('#input-title')
    const descInput = document.querySelector('#input-desc')
    const imgInput = document.querySelector('#input-img')
    const title = document.querySelector('.card-title')
    const description = document.querySelector('.card-text')
    const imagen = document.querySelector('.card-img')
    const allInputs = document.querySelectorAll('input')
    const submitButton = document.querySelector('#btnSubmit')

    allInputs.forEach(input => {
        input.addEventListener('change', function(event) {
            if (event.target.value) {
                input.classList.remove('is-invalid');
            }
        })
    })

    submitButton.addEventListener('click', function(event){
        event.preventDefault()

        if(!titleInput.value)
            titleInput.classList.add('is-invalid')
        if(!descInput.value)
            descInput.classList.add('is-invalid')
        if(!imgInput.value)
            imgInput.classList.add('is-invalid')
        if (titleInput.value && descInput.value && imgInput.value) {
            title.innerText = titleInput.value
            description.innerText = descInput.value
            imagen.src = imgInput.value

            titleInput.value = ''
            descInput.value = '' 
            imgInput.value = ''
        }
     
    })
})