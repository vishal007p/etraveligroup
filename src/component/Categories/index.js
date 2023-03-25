import React from "react";
import Slider from "../Slider/Slider";
 
 

function index() {
  const Categories = [
    {
      id: 1,
      name: 'Dresses'

    },

    {
      id: 2,
      name: 'Shirts'

    },

    {
      id: 3,
      name: 'Jeans'

    },

    
    {
      id: 3,
      name: 'Swimwear'

    },
    
    {
      id: 3,
      name: 'Sleepwear'

    },
    
    {
      id: 3,
      name: 'Sportswear'

    },
    
    {
      id: 3,
      name: 'Jumpsuits'

    },
    
    {
      id: 3,
      name: 'Blazers'

    },
    
    {
      id: 3,
      name: 'Jackets'

    },
    
    {
      id: 3,
      name: 'Shoes'

    },

  ]


  return (
    <>

      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">

        
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
            // style="height: 65px; margin-top: -1px; padding: 0 30px;"
            >
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav
              className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
              id="navbar-vertical"
            >
              {


                Categories.map(Categories => ((
                  <>

                    <div
                      className="navbar-nav w-100 overflow-hidden" key={Categories.id} >



                      <div className="nav-item dropdown">


                        <a href="#" className="nav-link" data-toggle="dropdown">
                          {Categories.name} <i className="fa fa-angle-down float-right mt-1"></i>
                        </a>
                        <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                          <a href="" className="dropdown-item">
                            Men's Dresses
                          </a>
                          <a href="" className="dropdown-item">
                            Women's Dresses
                          </a>
                          <a href="" className="dropdown-item">
                            Baby's Dresses
                          </a>
                        </div>
                      </div>
 
                    </div>



                  </>
                )))

              }

            </nav>
          </div>
          
 <Slider/>
      
        </div>
      </div>





    </>
  );
}

export default index;
