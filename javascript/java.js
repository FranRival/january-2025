const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#cupon')
const pResult = document.querySelector('#resultado')
bton.addEventListener('click', sacarPorcentaje)

function sacarPorcentaje(){
    const precio = Number(inoutPrice.value)
    const cupon = inputCoupon.value

    if(!precio || !cupon){
        pResult.innerText('Llena el formulario')
        return
    }

    let descuento

    function encontrarElemento(cuponElemento){
        return cuponElemento.name == cupon
    }

    const cuponEnArray = cuponArray.find(encontrarElemento)

}


const cuponArray = []