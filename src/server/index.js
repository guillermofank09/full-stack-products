const express = require("express")

const app = express();

app.list(3000)

const products = [
    {
        id: 1,
        name: "Milk",
        reviews: [
            'So good', 'It is ugly'
        ]
    },
        {
        id: 2,
        name: "Bread",
        reviews: [
            'It is old'
        ]
    },
        {
        id: 3,
        name: "Chocolate",
        reviews: [
            'Expensive'
        ]
    }
]

app.get("/products", (req, res) => {
    res.status(200).send(products)
})

app.get("/products/:id/reviews", (req, res) => {
    const productId = req.params.id
    const newReview = req.body
    if(newReview.length < 5){
        new Error("Review should have at least 5 characters")
    }
    const selectedProduct = products.find((pr)=> pr.id === productId)
    selectedProduct.reviews = [...selectedProduct.reviews, req.body ]
    res.status(201)
})