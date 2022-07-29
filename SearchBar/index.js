const inputFiled = document.getElementById( "usernameInput" )


inputFiled.addEventListener( "keyup", function ( event ) {
    let usernameInput = event.target.value.toLowerCase()
    let allNameCollection=document.getElementsByClassName("name")
    for ( i = 0; i < allNameCollection.length;i++ ){
        const currentName = allNameCollection[i].textContent.toLowerCase();
        if ( currentName.includes(usernameInput)) {
            allNameCollection[i].style.display="block"
        }
        else {
            allNameCollection[i].style.display="none"
        }
       
    }
})