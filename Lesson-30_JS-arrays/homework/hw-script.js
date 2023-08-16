let purchases = [
    {
        name: 'Product 1',
        quantity: 5,
        sell: false,
        cost: 99,
        sum: this.quantity * this.cost,
    },

    {
        name: 'Product 2',
        quantity: 2,
        sell: true,
        cost: 115,
        sum: this.quantity * this.cost,
    },

    {
        name: 'Product 3',
        quantity: 4,
        sell: true,
        cost: 213,
        sum: this.quantity * this.cost,
    },

    {
        name: 'Product 4',
        quantity: 3,
        sell: false,
        cost: 68,
        sum: this.quantity * this.cost,
    }
];

function displayPurchases() {
    function displayPurchasesBySell(sell) {
        purchases
            .filter((purchase) => purchase.sell === sell)
            .forEach((purchase) => console.log(purchase))
    }
    displayPurchasesBySell(false);
    displayPurchasesBySell(true);
}

// displayPurchases();

function buyProduct(productName) {
    const product = purchases.find((purchase) => purchase.name === productName);
    if (product) {
        console.log(product);
        product.sell = !product.sell;
    }
    console.log(product);
}

// buyProduct('Product 2');

function removeProduct(productName) {
    purchases = purchases.filter((purchase) => purchase.name !== productName);
    console.log(purchases);
}
// removeProduct('Product 2');

function addProduct(newProduct) {
    const product = purchases.find((purchase) => purchase.name === newProduct.name);
    if (!product) {
        purchases.push(newProduct);
        return;
    }
    product.quantity += 1;

}

// console.log(purchases);

// addProduct({
//     name: 'Product 5',
//     quantity: 7,
//     sell: false,
//     cost: 65,
//     sum: this.quantity * this.cost,
// });

// addProduct({
//     name: 'Product 4',
//     quantity: 8,
//     sell: false,
//     cost: 56,
//     sum: this.quantity * this.cost,
// });

// Maximum
function totalProductsSum() {
    return purchases.reduce((acc, purchase) => acc + purchase.cost * purchase.quantity, 0);
}



// console.log(totalProductsSum());

function notSellProductSum() {
    return purchases
        .filter((purchase) => !purchase.sell)
        .reduce((acc, purchase) => acc + purchase.cost * purchase.quantity, 0);
}

// console.log(notSellProductSum());

function displayProductsBySum(dsc = false) {
    purchases.sort((a, b) => dsc ? b.cost - a.cost : a.cost - b.cost);
    console.log(purchases);
}

displayProductsBySum();
// displayProductsBySum(true);