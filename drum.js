
// document.querySelectorAll("button")[0].addEventListener("click",function (){
//     alert("i got clicked");
// });

// document.querySelectorAll("button")[1].addEventListener("click",function (){
//     alert("i got clicked");
// });

// document.querySelectorAll("button")[2].addEventListener("click",function (){
//     alert("i got clicked");
// });

// document.querySelectorAll("button")[3].addEventListener("click",function (){
//     alert("i got clicked");
// });


// document.querySelectorAll("button")[4].addEventListener("click",function (){
//     alert("i got clicked");
// });


// document.querySelectorAll("button")[5].addEventListener("click",function (){
//     alert("i got clicked");
// });


// document.querySelectorAll("button")[6].addEventListener("click",function (){
//     alert("i got clicked");
// });


// this is for button press and make sound
    var n=document.querySelectorAll(".drum").length;
    for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        //this.style.color="white";
        // this keyword learn  console.log(this) button function call
       // innerhtml give value like w and bcz this refer to button so we can access w now. 
          // doubt regarding what is the use of for loop here.
     var buttonInnerHTML = this.innerHTML;
     makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);




        





  });
 }



///// this is for detecting keyboard press and make sound 
document.addEventListener("keypress",function(event)
{
   makesound(event.key);
    buttonAnimation(event.key);

});


// this function for make sound;
function makesound(keyy){
switch (keyy) {
    case "w":
        var audio = new Audio("drumsound/Drum Kit_sounds_crash.mp3");
        audio.play();
        break;

    case "a":
        var audio = new Audio("drumsound/Drum Kit_sounds_kick-bass.mp3");
        audio.play();
        break;    
    case "s":
        var audio = new Audio("drumsound/Drum Kit_sounds_snare.mp3");
        audio.play();
        break;

    case "d":
        var audio = new Audio("drumsound/Drum Kit_sounds_tom-1.mp3");
        audio.play();
        break;            

    case "j":
        var audio = new Audio("drumsound/Drum Kit_sounds_tom-2.mp3");
        audio.play();
        break;    
    case "k":
        var audio = new Audio("drumsound/Drum Kit_sounds_tom-3.mp3");
        audio.play();
        break;
    
     case "l":
        var audio = new Audio("drumsound/Drum Kit_sounds_tom-4.mp3");
        audio.play();
        break;     
        
        


        // case "z":
        //         var audio = new Audio("drumsound/Drum Kit_sounds_crash.mp3");
        //         audio.play();
        //         break;
        
        //     case "x":
        //         var audio = new Audio("drumsound/Drum Kit_sounds_kick-bass.mp3");
        //         audio.play();
        //         break;    
        //     case "c":
        //         var audio = new Audio("drumsound/Drum Kit_sounds_snare.mp3");
        //         audio.play();
        //         break;
        
        //     case "v":
        //         var audio = new Audio("drumsound/Drum Kit_sounds_tom-1.mp3");
        //         audio.play();
        //         break;            
        
        //     case "b":
        //         var audio = new Audio("drumsound/Drum Kit_sounds_tom-2.mp3");
        //         audio.play();
        //         break;    
        //     case "n":
        //         var audio = new Audio("drumsound/Drum Kit_sounds_tom-3.mp3");
        //         audio.play();
        //         break;
            
        //      case "m":
        //         var audio = new Audio("drumsound/Drum Kit_sounds_tom-4.mp3");
        //         audio.play();
        //         break;  


        // case "q":
        //     var audio = new Audio("drumsound/Drum Kit_sounds_crash.mp3");
        //     audio.play();
        //     break;
    
        // case "e":
        //     var audio = new Audio("drumsound/Drum Kit_sounds_kick-bass.mp3");
        //     audio.play();
        //     break;    
        // case "r":
        //     var audio = new Audio("drumsound/Drum Kit_sounds_snare.mp3");
        //     audio.play();
        //     break;
    
        // case "t":
        //     var audio = new Audio("drumsound/Drum Kit_sounds_tom-1.mp3");
        //     audio.play();
        //     break;            
    
        // case "y":
        //     var audio = new Audio("drumsound/Drum Kit_sounds_tom-2.mp3");
        //     audio.play();
        //     break;    
        // case "u":
        //     var audio = new Audio("drumsound/Drum Kit_sounds_tom-3.mp3");
        //     audio.play();
        //     break;
        
        //  case "i":
        //     var audio = new Audio("drumsound/Drum Kit_sounds_tom-4.mp3");
        //     audio.play();
        //     break;  



            

        //         case "o":
        //             var audio = new Audio("drumsound/Drum Kit_sounds_crash.mp3");
        //             audio.play();
        //             break;
            
        //         case "p":
        //             var audio = new Audio("drumsound/Drum Kit_sounds_kick-bass.mp3");
        //             audio.play();
        //             break;    
        //         case "f":
        //             var audio = new Audio("drumsound/Drum Kit_sounds_snare.mp3");
        //             audio.play();
        //             break;
            
        //         case "g":
        //             var audio = new Audio("drumsound/Drum Kit_sounds_tom-1.mp3");
        //             audio.play();
        //             break;            
            
        //         case "h":
        //             var audio = new Audio("drumsound/Drum Kit_sounds_tom-2.mp3");
        //             audio.play();
        //             break;    
               


    default: console.log(buttonInnerHTML);
        break;
}
}

// button animation

//setTimeout(function, milliseconds, param1, param2, ...).......

function buttonAnimation(currentkey)
{
    var activbutton = document.querySelector("."+currentkey);
    activbutton.classList.add("pressed");

    setTimeout( function(){
        activbutton.classList.remove("pressed");
    },100);
        
    
}