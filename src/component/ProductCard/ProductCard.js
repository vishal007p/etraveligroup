import React, { useState } from 'react';
import { useEffect } from 'react';

const ProductCard = () => {

    const [Product, setProduct] = useState();

    const fetchProduct = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        setProduct(data)

    }

    useEffect(() => {
        fetchProduct()

    }, [])

    return (
        <>
            {
                Product && Product.map((Product, index) => {
                    if (index <= 5) {

                        return (
                            <div className="col-lg-4 col-md-6 pb-1" >
                                <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                                    <p className="text-right">{Product.index}</p>
                                    <a
                                        href="/ProductDetails"
                                        className="cat-img position-relative overflow-hidden mb-3"
                                    >
                                        <img className="img-fluid" src={Product.images} alt="" />
                                    </a>
                                    <h5 className="font-weight-semi-bold m-0">{Product.title}</h5>
                                </div>
                            </div>
                        )
                    }
                })



            }
        </>
    )
}
export default ProductCard