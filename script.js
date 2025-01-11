document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    let uname = document.getElementById('uname').value;
    let email = document.getElementById('uemail').value;
    let age = document.getElementById('uage').value;
    let description = document.getElementById('description').value;
    let recommend = document.querySelector('input[name="recommend"]:checked');
    let langframe = document.querySelectorAll('input[name="langframe"]:checked');
    let comments = document.getElementById('comments').value;

    let recommendValue = recommend ? recommend.value : '';
    let langframeValues = langframe.length > 0 ? Array.from(langframe).map(element => element.value) : [];

    let result = {
        uname,
        email,
        age,
        description,
        recommend: recommendValue,
        langframe: langframeValues,
        comments
    };

    console.log(JSON.stringify(result, null, 2));

    document.body.innerHTML = '<div class="form-submitted"><p>Formulario enviado. ¡Muchas gracias! </p></div>';
});