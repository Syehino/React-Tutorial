import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Loader from "../Components/Loader"
import useAxiosGet from "../Hooks/HttpRequest"

function Product(){

    const { id } = useParams()
    const url = `https://5efee6c6d18ced0016e40c84.mockapi.io/api/v1/products/${id}` 

    let content = null

    let product = useAxiosGet(url)

    if(product.loading){
        content = <Loader />
    }

    if(product.error){
        content = <p> Error, please try again later </p>
    }


    if(product.data){
        content =

        <div>
            <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
               
                <div>
                    <img src={product.data.image[0].images} alt={product.name}
                    />
                </div>

                <div className="font-bold text-xl mb3">
                        $ {product.data.price}
                </div>

                <div className="font-bold mb3">
                     {product.data.description}
                </div>
        </div>
        
    
  }
  

  return(

    <div>
        {content}
    </div>
  )
}

export default Product