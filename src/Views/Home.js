import React, { useState, useEffect } from "react"
import axios from "axios"
import Loader from "../Components/Loader"
import ProductCard from "../Components/ProductCard"
import useAxiosGet from "../Hooks/HttpRequest"

function Home(){

    const url = `https://5efee6c6d18ced0016e40c84.mockapi.io/api/v1/products?page=1&limit=10` 
    
    let products = useAxiosGet(url)

    let content = null

    if(products.loading){
        content = <Loader />
    }

    if(products.error){
        content = <p> Error, please try again later </p>
    }

    if(products.data){
        content =

        products.data.map((product) => 
        <div key={product.id}>
            <ProductCard
                product = {product}
            />
        </div>
        )
    }

     
    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
            {content}        
        </div>
    )
}

export default Home