const tabItems = document.querySelectorAll('.tab-item');
const tabcontantItems = document.querySelectorAll('.tab-content-item');
// select tab content item
function select(e) {
       removeborder();
       removeshow();
       //Add border to current tab
       this.classlist.add('tab-border');
       // Grab content item from DOM
       const tabcontentItem = document.querySelector(' #${this.id}-content ');
       // Add show class
       tabcontentItem.classList.add(' show');
}

function removeborder() {
       tabItems.forEach(item => item.classlist.remove('tab-border'));
}

function removeshow() {
       tabcontantItems.forEach(item => item.classlist.remove('show'));
       // Listen for tab click 
       tabItems.forEach(item => item.addEventlistener('click', selectItem));
}


