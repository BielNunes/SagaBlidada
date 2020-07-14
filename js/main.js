
function hello()
{
    let msg = document.getElementById("hidden");
    let body = document.querySelector("body")
    if (msg.innerHTML == "very nice")
    { 
        msg.innerHTML = null;
        body.style.backgroundColor = "lightblue";
    } else
    {
        msg.innerHTML = "very nice";
        body.style.backgroundColor = "greenyellow";
    }
}