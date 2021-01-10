export default function (currency) {
  return  parseFloat(currency).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
}