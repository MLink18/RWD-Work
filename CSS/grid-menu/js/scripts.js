function myFunction(){
    console.log("button clicked")
    const topnavElement = document.getElementById("myTopnav");
    if(topnavElement.classname === "topnav"){
        console.log("topnav exists");
        topnavElement.classname += " responsive";
    }
    else {
        console.log("Removing responsive class")
        topnavElement.className = "topnav";
    }
}