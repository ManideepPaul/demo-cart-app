
const productArray = [
    {
        id: "1",
        title: "Macbook",
        price: "119000"
    },
    {
        id: "2",
        title: "Macmini",
        price: "59000"
    },
    {
        id: "3",
        title: "ipad",
        price: "51000"
    },
]

function getProductData(id) {
    let productData = productArray.find(product => product.id === id);

    if (productData === undefined) console.log(`Product data does not exist for ID: ${id}`);

    return productData;
}

export { productArray, getProductData }