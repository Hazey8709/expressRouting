let products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is product 1.",
        price: 100,
        quantity: 10,
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is product 2.",
        price: 200,
        quantity: 20,
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is product 3.",
        price: 300,
        quantity: 30,
    },
];

//* Get all products
const all = () => {
    console.log("models/products.js - all()");
    return products;
};

//* Create product
const create = (product) => {
    products.push(product);

    console.log("models/products.js - create()");
    return products;
};

//* Find product by id
const find = (id) => {
    console.log("models/products.js - find()");

    id = parseInt(id, 10);

    return products.find((product) => product.id === id);
};

//* Update product by id
const update = (id, updatedProduct) => {
    products.forEach((product) => {
        if (product.id === id) {
            Object.assign(product, updatedProduct);
            console.log(
                "models/products.js - update()-- Inside ForEach Function"
            );
        }
    });
    console.log("models/products.js - update()-- Outside ForEach function");
    return products;
};

//* Delete product by id
const destroy = (id) => {
    products = products.filter((product) => product.id !== id);

    console.log("models/products.js - destroy()");
    return products;
};

//* Export functions
module.exports = { all, create, find, update, destroy };
