function myFunction () {
    document.querySelector(".chiki").value = "верно"
}

let max_life = 20;
let life = 20;



let bt = document.querySelector(".prov")
let computer = Math.trunc(Math.random()+1) * 100
let score_el = document.querySelector(".life")

function game_over(){
    if (life <= 0){
         bt.disabled = true;
         score_el.innerHTML= "Game Over";
         score_el.style.color = "red";
    }
}

function check_value() {
    let user = document.querySelector(".chiki")
    console.log(user.value)
if (computer == user.value){
    alert("Чемпион");
    if(record_el.innerHTML=="-") {
        record_el.innerHTML = max_life - life + 1;
    }
    else {
        if (record_el.innerHTML < max_life - life){
            record_el.innerHTML = max_life - life
        }
    }
}
else if (computer < user.value) {
    life--;
    // counter.innerHTML = life;
    score_el.innerHTML = life;
    game_over();
}
else if (computer > user.value) {
    life--;
    // counter.innerHTML = life;
    console.log(score_el)
    score_el.innerHTML = life;
    game_over();
}
}