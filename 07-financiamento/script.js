'use strict'

function simularFinanciamento(){

  const totalInput = document.getElementById('total')
  const jurosInput = document.getElementById('juros')
  const parcelasInput = document.getElementById('numero-parcela')
  const valorParcelaInput = document.getElementById('valor-parcela')
  const tabela = document.getElementById('tabela')

  const total = parseFloat(totalInput.value)
  const taxa = parseFloat(jurosInput.value) / 100
  const parcelas = parseInt(parcelasInput.value)

  // validação
  if (!total || !taxa || !parcelas) {
    alert('Preencha todos os campos corretamente!')
    return
  }

  // limpa tabela (sem innerHTML)
  while (tabela.firstChild) {
    tabela.removeChild(tabela.firstChild)
  }

  let saldoDevedor = total

  // cálculo da parcela (simples)
  const parcela = total / parcelas
  valorParcelaInput.value = parcela.toFixed(2)

  for(let mes = 1; mes <= parcelas; mes++){

    const jurosMes = saldoDevedor * taxa
    const totalMes = parcela + jurosMes

    saldoDevedor -= parcela

    const novaLinha = document.createElement('tr')

    const celulaMes = document.createElement('td')
    const celulaJuros = document.createElement('td')
    const celulaParcela = document.createElement('td')
    const celulaTotalMes = document.createElement('td')
    const celulaSaldo = document.createElement('td')

    // classes
    celulaJuros.classList.add('col-juros')
    celulaTotalMes.classList.add('col-total')
    celulaSaldo.classList.add('col-saldo')

    // conteúdo
    celulaMes.textContent = mes

    celulaJuros.textContent = jurosMes.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    celulaParcela.textContent = parcela.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    celulaTotalMes.textContent = totalMes.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    celulaSaldo.textContent = saldoDevedor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    // montar linha
    novaLinha.appendChild(celulaMes)
    novaLinha.appendChild(celulaJuros)
    novaLinha.appendChild(celulaParcela)
    novaLinha.appendChild(celulaTotalMes)
    novaLinha.appendChild(celulaSaldo)

    tabela.appendChild(novaLinha)
  }
}

function limparSimulacao(){

  const total = document.getElementById('total')
  const juros = document.getElementById('juros')
  const parcelas = document.getElementById('numero-parcela')
  const valorParcela = document.getElementById('valor-parcela')
  const tabela = document.getElementById('tabela')

  // limpa inputs
  total.value = ''
  juros.value = ''
  parcelas.value = ''
  valorParcela.value = ''

  // limpa tabela sem usar innerHTML
  tabela.replaceChildren()
}