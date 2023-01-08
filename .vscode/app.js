const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navbarLinks = document.getElementsByClassName("navBarLinks")[0]
const line1 = document.getElementsByClassName("line1")[0]
const line2 = document.getElementsByClassName("line2")[0]
const line3 = document.getElementsByClassName("line3")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}