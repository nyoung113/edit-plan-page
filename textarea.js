

function submitOnEnter(event){
    if(event.which === 13 && !event.shiftKey){
        document.querySelector('.send-message').click()
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
    }
}

document.getElementById("as").addEventListener("keypress", submitOnEnter);