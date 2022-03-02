window.addEventListener('DOMContentLoaded', function(event) {
    const inputName = document.querySelector("#input-name");
    const inputNickName = document.querySelector('#input-nick-name')
    const inputComment = document.querySelector("#input-comment");
    const inputImg = document.querySelector("#input-img");
    const allInputs = document.querySelectorAll('input');
    const buttonSubmit = document.querySelector('#btnSubmit');
    const divFeed = document.querySelector('#div-feed');
    const divEmpty = document.querySelector('#div-empty');

    allInputs.forEach(input => {
        input.addEventListener('change', function(event) {
            if (event.target.value) {
                input.classList.remove('is-invalid');
            }
        })
    });
    if (divFeed.childElementCount == 0)
        divEmpty.style.display = "block";

    buttonSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        let isValid = true;

        if (!inputName.value) {
            inputName.classList.add('is-invalid');
            isValid = false;
        }

        if (!inputNickName.value) {
            inputNickName.classList.add('is-invalid');
            isValid = false;
        }

        if (!inputComment.value) {
            inputComment.classList.add('is-invalid');
            isValid = false;
        }

        if (!inputImg.value) {
            inputImg.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            inputName.classList.remove('is-invalid');
            inputNickName.classList.remove('is-invalid');
            inputComment.classList.remove('is-invalid');
            inputImg.classList.remove('is-invalid');

            if (divEmpty.style.display === 'block')
                divEmpty.style.display = 'none';
            
            let url = window.URL.createObjectURL(inputImg.files[0]);
            let content = divFeed.innerHTML;
            divFeed.innerHTML =
                `
                <div class="col- col-sm-12 col-md-6 col-lg-3 col-xl-2 d-block">
                    <div class="c-card">
                        <img src="https://s18.postimg.cc/4zap9fhmx/twitter.png" alt="" class="c-card-social-img" />
                        <img src="${url}" alt="" class="c-card-main-img" />
                        <span class="c-card-text">${inputComment.value}</span>
                        <span class="c-card-name">${inputName.value}</span>
                        <span class="c-card-handle">${inputNickName.value}</span>
                    </div>
                </div>
                `+ content;

            inputName.value = '';
            inputNickName.value = '';
            inputComment.value = '';
            inputImg.value = '';
        }

    });
});