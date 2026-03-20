'use strict'

function simularFinanciamento(){

    const total = parseFloat(document.getElementById('total').value)
    const taxa = parseFloat(document.getElementById('juros').value) / 100
    const parcelas = parseInt(document.getElementById('numero-parcela').value)
    const parcela = parseFloat(document.getElementById('valor-parcela').value)

    const tabela = document.getElementById('tabela')

    let saldoDevedor = total


    tabela.innerHTML = ""

    for(let mes = 1; mes <= parcelas; mes++){

        const jurosMes = saldoDevedor * taxa

        const totalMes = parcela + jurosMes

        const saldoFinal = saldoDevedor + jurosMes - parcela

        tabela.innerHTML += `
        <tr>
            <td>${mes}</td>
            <td>R$ ${jurosMes.toFixed(2)}</td>
            <td>R$ ${parcela.toFixed(2)}</td>
            <td>R$ ${totalMes.toFixed(2)}</td>
            <td>R$ ${saldoFinal.toFixed(2)}</td>
        </tr>
        `

        saldoDevedor = saldoFinal
    }

}