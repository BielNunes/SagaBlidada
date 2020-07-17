
function hello()
{
    let msg = document.getElementById("hidden");
    let body = document.querySelector("body")
    if (msg.innerHTML == "very nice")
    { 
        msg.innerHTML = '';
        body.style.backgroundColor = "lightblue";
    } else
    {
        msg.innerHTML = "very nice";
        body.style.backgroundColor = "greenyellow";
    }
}

function motimaker(eID1, eID2) {
    let index = Math.floor(Math.random() * choices.length);
    let phrases = [
        ["Não se preocupe se hoje foi ruim...", "...amanhã será pior"],
        ["Ódio é arma apontada...", "...ao próprio peito de quem odeia!"]
    ];

    let fst = document.getElementById(eID1);
    let snd = document.getElementById(eID2);

    fst.innerHTML = '';
    snd.innerHTML = '';
}