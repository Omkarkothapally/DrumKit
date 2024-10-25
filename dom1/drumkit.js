var numberofdrumsbtns=document.querySelectorAll("button").length ;
for(var i=0;i<numberofdrumsbtns;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
    function handleclick(){
        var buttoninnerhtml=this.innerHTML;
        makesound(buttoninnerhtml);
}
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
})

function makesound(key){
        switch (key){
            case "w":
                var sound=new Audio("dom1/sounds/tom-1.mp3");
                sound.play();
            break;
            case "a":
                var sound=new Audio("dom1/sounds/tom-2.mp3");
                sound.play();
            break;
            case "s":
                var sound=new Audio("dom1/sounds/tom-3.mp3");
                sound.play();
            break;
            case "d":
                var sound=new Audio("dom1/sounds/tom-4.mp3");
                sound.play();
            break;
            case "j":
                var sound=new Audio("dom1/sounds/crash.mp3");
                sound.play();
            break;
            case "k":
                var sound=new Audio("dom1/sounds/snare.mp3");
                sound.play();
            break;
            case "l":
                var sound=new Audio("dom1/sounds/kick-bass.mp3");
                sound.play();
            break;

            default:
                console.log(buttoninnerhtml);
        }

}
