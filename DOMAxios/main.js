let sum = 0
let quantity = 0

axios.get("https://northwind.vercel.app/api/orders").then((response) => {
    response.data.filter(element => element.customerId == 'FOLKO').forEach(element => {

        for (let index = 0; index < element.details.length; index++) {

            sum += element.details[index].quantity * element.details[index].unitPrice
            quantity += element.details[index].quantity

        }
    })
    console.log("Sum: " + sum)
    console.log("Quantity of All orders: " + quantity)
    console.log("Average: " + sum / quantity)


})