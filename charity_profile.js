document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('contactFormContainer').style.display = 'block';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
})

const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover" , event => {
    event.target.style.backgroundColor = "blue"



})
myButton.addEventListener("mouseout" , event => {
    event.target.style.backgroundColor = "#707070"


})


function openPopup(){
    popup.classList.add("open-popup");

}
function closePopup(){
    popup.classList.remove("open-popup")
}

