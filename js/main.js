
function hello()
{
    var msg = document.getElementById("hidden");
    if (msg.innerHTML == "very nice")
    { 
        msg.innerHTML = null;
    } else
    {
        msg.innerHTML = "very nice";
    }
}