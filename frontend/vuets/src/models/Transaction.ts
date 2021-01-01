interface TransactionProps {
  value: number;
  description: string;
  date: string;
}

export default class Transaction {
  private id: string
  private value: number
  private description: string
  private date: string

  constructor ({ value, description, date }: TransactionProps) {
    this.id = Math.random().toString(36).substr(2, 5)
    this.value = value
    this.description = description
    this.date = date
  }
}
