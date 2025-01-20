const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#cupon')
const pResult = document.querySelector('#resultado')
bton.addEventListener('click', sacarPorcentaje)




cuponArray.push({
    name: 'cuponx2',
    descuento: 25,
    limit: 500
})



function sacarPorcentaje(){
    const precio = Number(inoutPrice.value)
    const cupon = inputCoupon.value

    if(!precio || !cupon){
        pResult.innerText('Llena el formulario')
        return
    }

    let descuento1

    function encontrarElemento(cuponElemento){
        return cuponElemento.name == cupon
    }

    const cuponEnArray = cuponArray.find(encontrarElemento)

    if(cuponEnArray){
        descuento1 = cuponEnArray.descuento
    }else{
        pResult.innerText('Cupon no valido')
    }

    console.log({
        cupon,
        descuento1,
        cuponEnArray,
        cuponArray
    });


    const resultadoReal = precio*(100 - descuento1)/100
    pResult.innerText = 'El precio con descuento es: $' + resultadoReal
    

}


const cuponArray = []


///el problema es que colocando el descuento no me deja hacer la resta.