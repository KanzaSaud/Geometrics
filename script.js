function calculate(){
    var radius = parseInt(document.getElementById('radius').value);
    var area = document.getElementById('area');
    var circumference = document.getElementById('circumference');

    area.innerHTML = `Area (sq. m): ${Math.round(Math.PI*(radius*radius))}`;
    circumference.innerHTML = `Circumference (m): ${Math.round(2*Math.PI*radius)}`;
}
function refresh(){
    document.getElementById('radius').value=null;
    document.getElementById('area').innerHTML=null;
    document.getElementById('circumference').innerHTML=null;
}