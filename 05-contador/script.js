'use strict'

function gerarContagem () {
    const inicio = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const salto = document.getElementById('salto')
    const lista = document.getElementById('lista')

    console.log (inicio.value)
    console.log (fim.value)
    console.log (salto.value)

    lista.replaceChildren()
    for (let i = Number(inicio.value); i <= fim.value; i += Number(salto.value)){
     const itemLista = document.createElement('li')

     itemLista.textContent = i
     lista.appendChild(itemLista)
    }
}

