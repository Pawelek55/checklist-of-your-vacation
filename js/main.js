let inputs = document.querySelectorAll('input');
let lastChecked

function changeInput(e){
//    console.log(e.shiftKey);
//    console.log(this.checked);

    let inBetween = false;
    if(e.shiftKey && this.checked){
        inputs.forEach(input => {
            if(input === this || input === lastChecked){
                inBetween = !inBetween;
            }
        
            if(inBetween){
                input.checked = true;
            } 
        });
    }
    
    lastChecked = this;
}


inputs.forEach(input => input.addEventListener('click', changeInput));