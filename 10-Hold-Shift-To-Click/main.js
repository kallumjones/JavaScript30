const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

    let lastChecked;

    function handleCheck(event) {
        console.log(event);
        let inBetween = false;
        if(event.shiftKey && this.checked){
            console.log('Holding shift');
            checkboxes.forEach(checkbox => {
                if(checkbox === this || (checkbox === lastChecked && lastChecked.checked === true)){
                    inBetween = !inBetween;
                }

                if(inBetween) {
                    checkbox.checked = true;
                }
            })

        }
        lastChecked = this;
    }



    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
    // console.log(checkboxes);
