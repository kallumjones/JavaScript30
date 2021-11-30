//returns a node list of all div with panel class
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleOpenActive(event) {
    console.log(event.propertyName);
    if(event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//nodelist has a foreach, we want to add an event listener to each of the panels
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));


console.log(panels);