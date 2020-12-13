const $ = document.querySelector.bind(document)

let localEntries = localStorage.getItem('entries')

// CHART OPTIONS
const chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: 'Saldo'
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Dias'
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Renda'
      }
    }]
  }
}


let entries = localEntries ? JSON.parse(localEntries) : []
renderEntries()
renderChart()


// SHOW / HIDE FORM ENTRY
function viewEntryForm() {
  const formEntry = $('div.formEntry')
  const display = formEntry.style.display

  formEntry.style.display = display === 'block' ? 'none' : 'block'

  const buttonEntryText = $('.left .header button').firstChild
  buttonEntryText.data = buttonEntryText.data.trim() === 'Fechar Lançamento' ? 'Novo Lançamento' : 'Fechar Lançamento'

  $('#inputValor').focus()
}

// SET NEW ENTRIES
function setEntry(event) {
  event.preventDefault()

  const upOrDown = $("#downRadio").checked ? -1 : 1

  const entry = {
    valor: parseFloat($('#inputValor').value) * upOrDown,
    descricao: $('#inputDescricao').value,
    dataLancamento: $('#inputData').value
  }

  entries.push(entry)

  localStorage.setItem('entries', JSON.stringify(entries))

  renderEntries()
  cleanForm()
  renderChart()
  $('#inputValor').focus()
}


function renderChart () {
  if(entries) {
    const orderEntry = entries.sort((a, b) => a.dataLancamento - b.dataLancamento)
    let dates = []
    let values = []
    let currentValue = 0

    orderEntry.forEach( order => {
      const date = new Date(order.dataLancamento).toLocaleDateString()
      dates.push(date)

      currentValue += order.valor
      values.push(currentValue)
    })

    const colorCurve = currentValue < 0 ? 'red' : 'blue'
    const chartConfig = {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Comportamento do seu dinheiro',
          backgroundColor: colorCurve,
          borderColor: colorCurve,
          data: values,
          fill: false
        }],
      },
      options: chartOptions
    }

    const context = $('#chartMoney').getContext('2d')
    new Chart(context, chartConfig)
  }
}


// CLEAN FORM
function cleanForm() {
  $('#inputValor').value = '',
  $('#inputDescricao').value = '',
  $('#inputData').value = ''
}


// RENDER ENTRIES
function renderEntries() {
  let htmlEntry = ''
  let accountBalance = 0

  if(entries.length === 0) {
    htmlEntry = `
      <div class="empty">
        <p>Nenhum Lançamento Encontrado</p>
      </div>
    `
    $('.entry').innerHTML = htmlEntry

    return
  }
 
  for(let i = entries.length - 1; i > -1; i --) {
    const valor = entries[i].valor
    accountBalance += valor

    const entryObject = {
      class: valor > 0 ? 'up' : 'down',
      image: valor > 0 ? 'mais.png' : 'menos.png',
      alt: valor > 0 ? 'Entrada' : 'Saída',
      valor: valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
      descricao: entries[i].descricao,
      dataLancamento: new Date(entries[i].dataLancamento).toLocaleDateString()
    }

    const html = `
      <div class="entry">
        <img src="img/${entryObject.image}" alt="${entryObject.alt}">

        <div class="descriptionEntry">
          <span class="value ${entryObject.class}">${entryObject.valor}</span>
          <span class="data">${entryObject.dataLancamento}</span>
          <span class="description">${entryObject.descricao}</span>
        </div>

      </div>
    `

    htmlEntry += html
  }

  $('.entryBlock').innerHTML = htmlEntry

  renderAccount(accountBalance)
  
}

// RENDER ACCOUNT BALANCE
function renderAccount(accountBalance) {
  const balance = accountBalance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  $(".right .header h2").innerText = balance
  $(".right .header h2").style.color = accountBalance > 0 ? 'green' : 'red'
}