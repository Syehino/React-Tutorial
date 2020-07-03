import React from "react";
import {Link} from 'react-router-dom'


function ProductCard(props) {
  return (

        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/product/${props.product.id}`}>
                <div style={{'backgroundImage' : `url('${props.product.image[0].images}')`,}} className="w-full h-64  bg-blue bg-cover bg-center ">

                </div>
            </Link> 


            <div className="p-3">
                    <h3 className="font-bold text-xl mb-3">
                        <Link to={`/product/${props.product.id}`}>
                            {props.product.name} 
                        </Link>    
                    </h3>
            </div>


            <div className="p-3">
                    <h3 className="font-bold mb-3">
                        <Link to={`/product/${props.product.id}`}>
                            RM {props.product.price} 
                        </Link>    
                    </h3>
            </div>

            <div className="p-3">
                    <h3 className=" mb-3">
                        <Link to={`/product/${props.product.id}`}>
                             {props.product.description} 
                        </Link>    
                    </h3>
            </div>

            <div className="p-3">
                    <h3 className="bg-blue-500 text-white p-2 flex justify-center">
                        <Link to={`/product/${props.product.id}`}>
                             View
                        </Link>    
                    </h3>
            </div>
          
        </div>

    
        
  );
}

export default ProductCard;
