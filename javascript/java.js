const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#cupon')
const pResult = document.querySelector('#resultado')
bton.addEventListener('click', sacarPorcentaje)



const cuponArray = []


cuponArray.push({
    name: 'cuponx2',
    descuento1: 25,
    limit: 500
})

cuponArray.push({
    name: 'cuponx3',
    descuento1: 30,
    limit: 500
})


///el problema dice que es una variable que esta en indefinida


function sacarPorcentaje(){
    alert('s')
    const precio = Number(inoutPrice.value)
    const cupon = inputCoupon.value

    if(!precio || !cupon){
        pResult.innerText('Llena el formulario')
        return
    }

    let discuento

    function encontrarElemento(cuponElemento){
        return cuponElemento.name == cupon
    }

    const cuponEnArray = cuponArray.find(encontrarElemento)

    if(cuponEnArray){
        discuento = cuponEnArray.descuento
    }else{
        pResult.innerText('Cupon no valido')
    }

    console.log({
        cupon,
        discuento,
        cuponEnArray,
        cuponArray
    });


    const resultadoReal = precio*(100 - descuento1)/100
    pResult.innerText = 'El precio con descuento es: $' + resultadoReal
    

}






///el problema es que colocando el descuento no me deja hacer la resta.