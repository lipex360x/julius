export default class Transaction {

  constructor (value, description, date ) {
    this.id = Math.random().toString(36).substr(2, 5)
    this.value = value
    this.description = description
    this.date = date
  }
}