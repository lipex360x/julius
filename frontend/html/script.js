const $ = document.querySelector.bind(document)

let localEntries = localStorage.getItem('entries')

let entries = localEntries ? JSON.parse(localEntries) : []
renderEntries()

function viewEntryForm() {
  const formEntry = $('div.formEntry')
  const display = formEntry.style.display

  formEntry.style.display = display === 'block' ? 'none' : 'block'

  const buttonEntryText = $('.left .header button').firstChild
  buttonEntryText.data = buttonEntryText.data.trim() === 'Fechar Lançamento' ? 'Novo Lançamento' : 'Fechar Lançamento'

  $('#inputValor').focus()
}

function setEntry(event) {
  event.preventDefault()

  const entry = {
    valor: parseFloat($('#inputValor').value),
    descricao: $('#inputDescricao').value,
    dataLancamento: $('#inputData').value
  }

  entries.push(entry)

  localStorage.setItem('entries', JSON.stringify(entries))

  renderEntries()

  cleanForm()

  $('#inputValor').focus()
}

function cleanForm() {
  $('#inputValor').value = '',
  $('#inputDescricao').value = '',
  $('#inputData').value = ''
}

function renderEntries() {
  if(entries) {
    let htmlEntry = ''
    let accountBalance = 0

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
}

function renderAccount(accountBalance) {
  const balance = accountBalance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  $(".right .header h2").innerText = balance
  $(".right .header h2").style.color = accountBalance > 0 ? 'green' : 'red'
}