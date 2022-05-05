// Run Script once DOM is loaded
document.addEventListener("DOMContentLoaded", function()
{
    // Validating password match
    document.querySelector("#check").addEventListener("click", function(mismatch)
    {
        let input1 = document.querySelector("#pass1");
        let input2 = document.querySelector("#pass2");
        if (input2 !== input1)
        {
            input1.style.backgroundColor = "red";
            input2.style.backgroundColor = "red";
            document.querySelector("#feedback").innerHTML = "No coinciden";
            mismatch.preventDefault();
            alert("Verifique la contraseña ingresada");
            //TODO: replace x focus on password
            //TODO: clear both fields?
            //TODO: stop showing #feedback
            //TODO: set background to normal again
        }
    });
});
