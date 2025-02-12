document.body.onload = animate_sword;
// import { userkanaam } from "./screen1";

let play_button = document.getElementById("pbutton");
play_button.addEventListener("click",play_click);

function play_click(){
    document.getElementById("play").style.visibility = "hidden";
}

function animate_sword() {
    let id = null;
    const elem1 = document.getElementById("sword1");
    const elem2 = document.getElementById("sword2");
    let posb = 15;
    let posl = 23;

    clearInterval(id);
    id = setInterval(frame, 20);
    function frame(){
        if (posb == -25){
            clearInterval(id);
        }
        else{
        posb = posb - 2;
        posl--;
        elem1.style.bottom = posb + "%";
        elem1.style.left = posl + "%";
        elem2.style.bottom = posb + "%";
        elem2.style.right =  posl + "%";
        }
    }
}

document.getElementById("playing").onclick = start_the_game;
let drop_count = 3;

function start_the_game(){
    document.getElementById("pa").innerHTML = "Pause";
    document.getElementById("reset").style.display = "flex";
    document.getElementById("timmer").style.visibility = "visible";
    countdown();  
}

function countdown(){
    let id = null;
    let number = 3;
    let element = document.getElementById("glowed");

    clearInterval(id);
    id = setInterval(frame, 700);
    function frame(){
        if (number == 0){
            clearInterval(id);
            document.getElementById("timmer").style.visibility = "hidden";
            document.getElementById("timmer").remove();
            
            game_play();
        }
        else{
            number--;
            element.innerHTML = number;
        }
    }   
}
let box_generate_count = 0;
function game_play(){
    box_generate_count++;
    let random_number = Math.floor(Math.random()*5) + 1; 
                switch(random_number){
                    case 1:
                        let ch1 = document.createElement("div");
                        ch1.setAttribute("id",`box1${box_generate_count}`);
                        ch1.setAttribute("class","box_inside");
                        document.getElementById("box1").appendChild(ch1);
                        if (drop_count > 0){
                        setTimeout(game_play, 1000);
                        }else{
                             document.getElementById("end_part").style.visibility = "visible";
                             document.getElementById("scorevalue_project").innerHTML = document.getElementById("scorevalue").innerHTML;
                        }
                        main_game_play(box_generate_count);
                        break;

                    case 2:
                        let ch2 = document.createElement("div");
                        ch2.setAttribute("id",`box1${box_generate_count}`);
                        ch2.setAttribute("class","box_inside");
                        document.getElementById("box2").appendChild(ch2);
                        if (drop_count > 0){
                        setTimeout(game_play, 1000);
                        }else{
                            document.getElementById("end_part").style.visibility = "visible";
                            document.getElementById("scorevalue_project").innerHTML = document.getElementById("scorevalue").innerHTML;
                        }
                        main_game_play(box_generate_count);                      
                        break;

                    case 3:
                        let ch3 = document.createElement("div");
                        ch3.setAttribute("id",`box1${box_generate_count}`);
                        ch3.setAttribute("class","box_inside");
                        document.getElementById("box3").appendChild(ch3);
                        if (drop_count > 0){
                        setTimeout(game_play, 1000);
                        }else{
                            document.getElementById("end_part").style.visibility = "visible";
                            document.getElementById("scorevalue_project").innerHTML = document.getElementById("scorevalue").innerHTML;
                        }
                        main_game_play(box_generate_count);
                        break;

                    case 4:
                        let ch4 = document.createElement("div");
                        ch4.setAttribute("id",`box1${box_generate_count}`);
                        ch4.setAttribute("class","box_inside");
                        document.getElementById("box4").appendChild(ch4);
                        if (drop_count > 0){
                        setTimeout(game_play, 1000);
                        }else{
                            document.getElementById("end_part").style.visibility = "visible";
                            document.getElementById("scorevalue_project").innerHTML = document.getElementById("scorevalue").innerHTML;
                        }
                        main_game_play(box_generate_count);                       
                        break;

                    case 5:
                        let ch5 = document.createElement("div");
                        ch5.setAttribute("id",`box1${box_generate_count}`);
                        ch5.setAttribute("class","box_inside");
                        document.getElementById("box5").appendChild(ch5);
                        if (drop_count > 0){
                        setTimeout(game_play, 1000);
                        }else{
                            document.getElementById("end_part").style.visibility = "visible";
                            document.getElementById("scorevalue_project").innerHTML = document.getElementById("scorevalue").innerHTML;
                        }
                        main_game_play(box_generate_count);                       
                        break;  

                    }

                function main_game_play(box_numberr){
                let id = null;
                let ele = document.getElementById(`box1${box_numberr}`);
                let posp = 0;
                 clearInterval(id);
                 id = setInterval(frame1 , 60);   //time variable
                 function frame1(){
                    if(posp == 800){
                        clearInterval(id);
                        ele.remove();
                        document.getElementById(`heart${drop_count}`).innerHTML = "<i class='fa-regular fa-heart'></i>";
                        drop_count--;
                    }
                    
                    else{
                        posp = posp + 10;
                        ele.style.top = posp + "%";

                        ele.onclick = point_increase;
                        function point_increase(){
                            let value_points = document.getElementById("scorevalue").innerHTML;
                            let val = parseInt(value_points);
                            document.getElementById("scorevalue").innerHTML = val + 1;
                            if(val + 1 > parseInt(document.getElementById("hscorevalue").innerHTML)){
                                document.getElementById("hscorevalue").innerHTML = val + 1;
                            }
                            ele.remove();
                            clearInterval(id);

                        }
                    }

                }
            }
}

document.getElementById("play_again").onclick = run_again;
document.getElementById("reset").onclick = run_again;

function run_again(){
    location.reload();
}
                  
