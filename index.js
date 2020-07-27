
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
var model = document.getElementById('id02');

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none" ;
    }
}

$('#contact').click( function() { alert('Thank you for visiting'); });
$('#clients').click( function() { alert('Thank you for visiting'); });
$('#services').click( function() { alert('Thank you for visiting'); });
$('#about').click( function() { alert('Thank you for visiting'); });