// Run Script once DOM is loaded
document.addEventListener("DOMContentLoaded", function()
{
    // Validar campos vacíos y coincidencia de contraseña
    document.querySelector("#check").addEventListener("click", function(valid)
    {
        // Leer variables ingresadas en cada campo
        let pass1 = document.querySelector("#pass1");
        let pass2 = document.querySelector("#pass2");
        // Chequear que los campos no estén vacíos
        if (pass1.value == "")
        {
            pass1.style.backgroundColor = "red";
            document.querySelector("#feedback-p1").innerHTML = "Complete este campo";
            //TODO: Hacer que desaparezca ese estilo luego de ingresar correctamente
            valid.preventDefault();
            alert("Por favor ingrese una contraseña");
        }
        else if (pass2.value == "")
        {
            pass2.style.backgroundColor = "red";
            document.querySelector("#feedback-p2").innerHTML = "Complete este campo";
            //TODO: Hacer que desaparezca ese estilo luego de ingresar correctamente
            valid.preventDefault();
            alert("Por favor repita la contraseña");
        }
        else if (pass2.value !== pass1.value)
        {
            pass1.style.backgroundColor = "red";
            pass2.style.backgroundColor = "red";
            document.querySelector("#feedback-p2").innerHTML = "No coinciden";
            valid.preventDefault();
            alert("Verifique la contraseña ingresada");
            //TODO: replace x focus on password
            // erasing autofocus from name and setting to password 1 (ver javascript 5) -
            //https://www.w3schools.com/jsref/prop_text_autofocus.asp & https://www.w3schools.com/tags/att_input_autofocus.asp
            //TODO: clear both fields?
            //TODO: stop showing #feedback (warning time out)
            //TODO: set background to normal again
            // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        }
        else {
            alert("Muchas gracias, luego de chequear Nombre, Apellido y Email, nos estaremos contactando con usted");
            //TODO: Solo gatillar alert si nombre, apellido y mail están ok.
            //TODO: Reemplazar x `Muchas gracias, ${Nombre} ${Apellido}. A la brevedad nos estaremos contactando con usted`
        }
    });
});
