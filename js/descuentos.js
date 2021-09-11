//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) /100;

    return precioConDescuento;
}

function calcularDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con el descuento es "+ precioConDescuento + " pesos";

}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/