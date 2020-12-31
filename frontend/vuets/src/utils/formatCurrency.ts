export default function (value: number): string {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
