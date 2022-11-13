let count = 0
let sum = 0;
let discountedPrice = 0

axios.get("https://northwind.vercel.app/api/orders").then((response) => {
    response.data.filter(element => element.shipAddress.country == "Sweden").forEach(element => {


        for (let index = 0; index < element.details.length; index++) {


            discountedPrice = element.details[index].quantity * (element.details[index].unitPrice * (1 - element.details[index].discount))
            count += element.details[index].quantity
            sum += discountedPrice

        }
    })
    console.log("Sum:" + sum)
    console.log("Count:" + count)
    console.log("Average:" + sum / count)


})