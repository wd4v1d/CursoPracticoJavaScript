//-----------------Código del Cuadrado------------------------------
console.group("Cuadrados")

    //***********Perimetro del cuadrado***********
    function perimetroCuadrado (lado){
        return lado * 4;
    } 
    
    //************Area del cuadrado*********
    function areaCuadrado (lado){
        return lado * lado;
    }
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    //console.log(value);
    const perimetrocua = perimetroCuadrado(value);
    //alert(perimetrocua);
    //console.log("El perimetro es: "+perimetrocua);

    if (value == ""){
        resultado.textContent = "!ingresa el lado del cuadrado¡";
        alerta();
    }
    else if (value <=0){
        resultado.textContent = "!Un cuadrado no tiene numeros negativos, y no puede ser 0¡";
        alerta();
    }
    else{
        resultado.textContent = perimetrocua;
        normal();
    }
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    console.log(value);
    const areacua = areaCuadrado(value);
    //alert(areacua);
    //console.log("El area es: "+areacua);
    if (value == ""){
        resultado.textContent = "!ingresa el lado del cuadrado¡";
        alerta();
    }
    else if (value <=0){
        resultado.textContent = "!Un cuadrado no tiene numeros negativos, y no puede ser 0¡";
        alerta();
    }
    else{
        normal();
        resultado.textContent = areacua; 
    }
}



//---------------------Código del Triangulo-------------------------
console.group("Triangulo");
    
    //**************Perimetro del triangul**********
    function perimetroTriangulo (lado1,lado2,base) {
        return (parseInt(lado1) + parseInt(lado2)) + parseInt(base);
    }
    //*****************Area del triangulo************
    function areaTriangulo (base, altura){
        return (base * altura)/2;
    }
console.groupEnd();

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo1")
    const valuelado1 = input.value;
    const input2 = document.getElementById("InputTriangulo2")
    const valuelado2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3")
    const valuebase = input3.value;
    if (valuelado1 <= 0 || "") {
        alerta();
        resultado.textContent = "Lado 1 no puede ser un numero menor a 1 o vacio";
    }
    else if (valuelado2 <= 0 || ""){
        alerta();
        resultado.textContent = "Lado 2 no puede ser un numero menor a 1 o vacio";
    }
    else if (valuebase <= 0 ||""){
        alerta();
        resultado.textContent = "Base no puede ser un numero menor a 1 o vacio";
    }
    else {
        normal();
        const perimetrotri = perimetroTriangulo(valuelado1,valuelado2,valuebase);
        //alert(perimetrotri);
        resultado.textContent = perimetrotri;  
    }    
}

function calcularAreaTriangulo(){
    const input4 = document.getElementById("InputTriangulo4")
    const valueAltura = input4.value;
    const input3 = document.getElementById("InputTriangulo3")
    const valuebase = input3.value;
    const areatri = areaTriangulo(valueAltura, valuebase);
    //alert(areatri);
    
    if (valueAltura <= 0 || "") {
        alerta();
        resultado.textContent = "Altura no puede ser un numero menor a 1 o vacio";
    }
    else if (valuebase <= 0 ||""){
        alerta();
        resultado.textContent = "Base no puede ser un numero menor a 1 o vacio";
    }
    else {
        normal();
        resultado.textContent = areatri;  
    }  
}

//------------------------Código del Circulos-----------------------
console.group("Circulos");

    //**************Diametro***************
    function diametroCirculo (radio) {
        return radio * 2;
    }
    // ******************PI*****************
    const PI = Math.PI;
    console.log("PI es: " + PI + ".");
    // *********************Perimetro**************
    function perimetroCirculo (radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
    //Area
    function areaCirculo (radio) {
        return (radio*radio)*PI;
    }
console.groupEnd();

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value;
    //console.log(value);
    const perimetrocir = perimetroCirculo(value);
    //alert(perimetrocir);
    if (value <= 0 || "") {
        alerta();
        resultado.textContent = "Radio no puede ser un numero menor a 1 o vacio";
    }
    else {
        normal();
        resultado.textContent = perimetrocir; 
    }  
}

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value;
    const DiametroCir = diametroCirculo(value);
    //alert(DiametroCir);
    if (value <= 0 || "") {
        alerta();
        resultado.textContent = "Radio no puede ser un numero menor a 1 o vacio";
    }
    else {
        normal();
        resultado.textContent = DiametroCir; 
    }
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value;
    const AreaCir = areaCirculo(value);
    //alert(AreaCir);
    if (value <= 0 || "") {
        alerta();
        resultado.textContent = "Radio no puede ser un numero menor a 1 o vacio";
    }
    else {
        normal();
        resultado.textContent = AreaCir;
    }
}
var resultado = document.getElementById("resultado")

function limpiar(){
    resultado.textContent = "";
}
function alerta(){
    document.getElementById("resultado").style.color = "red";
    document.getElementById("resultado").style.fontSize = "30px";
    return;
}
function normal(){
    document.getElementById("resultado").style.color = "black";
    document.getElementById("resultado").style.fontSize = "35px";
    return;
}