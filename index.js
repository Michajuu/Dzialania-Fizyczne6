
function Oblicz()
{
    let S = document.getElementById("S").value;
    let V0 = document.getElementById("V").value;
let a = document.getElementById("t");
a.innerHTML = (9.81*Math.pow(S,2))/(2*Math.pow(V0,2));
}
