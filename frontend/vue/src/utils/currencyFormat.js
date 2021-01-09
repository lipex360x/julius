export default function (currency) {
  return currency.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
}