import React, { useState } from 'react'
import Layout from "../../container/Layout";
import NewProduct from "./NewProduct";
import Categories from "../../component/Categories";
import { useEffect } from 'react';
import ProductCard from '../../component/ProductCard/ProductCard';
const cssZindex = {
  Zindex: 1,
};

function index() {







  return (
    <Layout>
      {/* <!-- Navbar Start --> */}
      <Categories />
      {/* <!-- Navbar End --> */}
      {/* <!-- Featured Start --> */}

      {/* 
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div> */}



      {/* <!-- Featured End --> */}
      {/* <!-- Categories Start --> */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">





          <ProductCard />






        </div>
      </div>
      {/* <!-- Categories End --> */}
      {/* <!-- Offer Start --> */}
      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img src="img/offer-1.png" alt="" />
              <div className="position-relative" style={cssZindex}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Spring Collection
                </h1>
                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img src="img/offer-2.png" alt="" />
              <div className="position-relative" style={cssZindex}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Winter Collection
                </h1>
                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Offer End --> */}
      {/* <!-- Products Start --> */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trandy Products</span>
          </h2>
        </div>

        
        <div className="row px-xl-5 pb-3">
           
         
       
          
         
        <ProductCard />
       
         
          
        </div>
      </div>
      {/* <!-- Products End --> */}
      {/* <!-- Subscribe Start --> */}
      <div className="container-fluid bg-secondary my-5">
        <div className="row justify-content-md-center py-5 px-xl-5">
          <div className="col-md-6 col-12 py-5">
            <div className="text-center mb-2 pb-2">
              <h2 className="section-title px-5 mb-3">
                <span className="bg-secondary px-2">Stay Updated</span>
              </h2>
              <p>
                Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                diam labore at justo ipsum eirmod duo labore labore.
              </p>
            </div>
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-4"
                  placeholder="Email Goes Here"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Subscribe End --> */}
      {/* <!-- Products Start --> */}
      <NewProduct />
      {/* <!-- Products End --> */}
      {/* <!-- Vendor Start --> */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              <div className="vendor-item border p-4">
                <img src="img/vendor-1.jpg" alt="" />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-2.jpg" alt="" />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-3.jpg" alt="" />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-4.jpg" alt="" />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-5.jpg" alt="" />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-6.jpg" alt="" />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-7.jpg" alt="" />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
