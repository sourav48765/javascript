const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal
// }, 0)

const mytotal = myNums.reduce((acc, curVal) => (acc + curVal), 5)

// console.log(mytotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 5999
    },
    {
        itemName : "Data science course",
        price : 15999
    },
    {
        itemName : "Ml Course course",
        price : 10999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0 )

console.log(priceToPay);