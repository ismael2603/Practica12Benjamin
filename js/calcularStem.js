function calcula_masa(){
    var empuje= 2200;
    var a= 0.39;
    var m= (3260-empuje);
    var masa= m/a;
    var d=document.getElementById("resultadoA");
    d.innerHTML=masa+'kg';
    }
