const btnOpen = document.getElementById( "open-modal" )
const popUp = document.getElementById( "ovelay" )
const closePopup=document.getElementById("closeModal")
btnOpen.addEventListener( "click", function () {
    popUp.style.display="block"
} )
closePopup.addEventListener( "click", function () {
    popUp.style.display="none"
})