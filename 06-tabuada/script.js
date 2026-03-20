'use strict'

function gerarTabuada(){

    const numero = parseInt(document.getElementById('numero').value)

    const tabela = document.getElementById('tabela')

    // limpa a tabela antes de gerar novamente
    tabela.innerHTML = ""

    for(let i = 1; i <= 10; i++){

        const resultado = numero * i

        tabela.innerHTML += `
            <tr>
                <td>${numero} x ${i}</td>
                <td>${resultado}</td>
            </tr>
        `
    }

}