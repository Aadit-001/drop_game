document.body.onload = screen1_animation;
let screen1_image = document.getElementById("screen1");
let loading_element = document.getElementById("loading");
let entry_element = document.getElementById("entry");

function screen1_animation(){
    setTimeout(() => {
        screen1_image.style.opacity = "0.7";
        loading_element.style.visibility = "hidden";
        entry_element.style.visibility = "visible";
    }, 2500);
}

let namee = document.getElementById("text_input");
let user_name = document.getElementById("uname");
export let userkanaam = namee.value;

// function screen1_animation() {
//     let id = null;
    // let screen1_image = document.getElementById("screen1");
    // let loading_element = document.getElementById("loading");
    // let entry_element = document.getElementById("entry");
//     let opacity1 = 1.0;
//     let opacity_pop = 0.0;

//     clearInterval(id);
//     id = setInterval(frame, 2);
//     function frame(){
//         if (opacity1 == 0.7 || opacity_pop == 1.0){
//             clearInterval(id);
//             loading_element.remove();
//         }
//         else{
//         opacity1 = opacity - 0.1;
//         opacity_pop = opacity_pop + 0.1;
//         screen1_image.style.opacity = opacity1;
//         entry_element.style.opacity = opacity_pop;
        
//         }
    
//     }
// }