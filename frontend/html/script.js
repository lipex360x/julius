function viewEntryForm() {
  const formEntry = document.querySelector('div.formEntry')
  const display = formEntry.style.display

  formEntry.style.display = display === 'block' ? 'none' : 'block'

  const buttonEntryText = document.querySelector('.left .header button').firstChild
  buttonEntryText.data = buttonEntryText.data.trim() === 'Fechar Lançamento' ? 'Novo Lançamento' : 'Fechar Lançamento'
}