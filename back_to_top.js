// Modified version of this code:
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


// Get the button:
var mybutton = document.getElementById('to_top_btn');
var doc_height = document.documentElement.scrollHeight;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
    var curr_height = window.scrollY
    var height_ratio = curr_height / doc_height;
  if (height_ratio > 0.25) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;             // For Safari
  document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
}