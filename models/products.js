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
    return products;
};

//* Create product
const create = (product) => {
    products.push(product);
    return products;
};

//* Find product by id
const find = (id) => {
    return products.find((product) => product.id === id);
};

//* Update product by id
const update = (id, product) => {
    products.map((product) => {
        if (product.id === id) {
            product = { ...product, ...product };
        }
        return product;
    });

    return product;
};

//* Delete product by id
const destroy = (id) => {
    products.filter((product) => product.id !== id);

    return products;
};

//* Export functions
module.exports = { all, create, find, update, destroy };
