document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let form = event.target;
    let validateField = (group, message) => {
        let fields = form.querySelectorAll(`input[name="${group}"]`);
        let isValid = [...fields].some(input => input.checked);
        fields[0].setCustomValidity(isValid ? '' : message);
        return isValid;
    };

    if (
        validateField('recommend', 'Please select an option for "Would you recommend this site?"') &&
        validateField('langframe', 'Please select at least one "Language and Framework".')
    ) { let result = {
            uname: form.uname.value,
            email: form.uemail.value,
            age: form.uage.value,
            description: form.description.value,
            recommend: form.querySelector('input[name="recommend"]:checked').value,
            langframe: [...form.querySelectorAll('input[name="langframe"]:checked')].map(el => el.value),
            comments: form.comments.value
        };

        console.log(JSON.stringify(result, null, 2));
        document.body.innerHTML = '<div class="form-submitted"><p>Formulario enviado. ¡Muchas gracias!</p></div>';
    } else {
        form.reportValidity();
    }
});

['recommend', 'langframe'].forEach(group => 
    document.querySelectorAll(`input[name="${group}"]`).forEach(input => 
        input.addEventListener('change', () => {
            let isValid = [...document.querySelectorAll(`input[name="${group}"]`)].some(el => el.checked);
            document.querySelector(`input[name="${group}"]`).setCustomValidity(isValid ? '' : '');
        })
    )
);