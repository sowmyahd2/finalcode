import React, { useEffect } from "react"
import './ProductPage.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { pathOr, path } from 'ramda';
import { getAddtoCart } from '../../Redux/Action/CartAction';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router"; 

const ProductTable = () => {
    const productDealer = useSelector(state => pathOr([], ["sellers"], state.Product.productDetails));
    const city = useSelector(state => state.UserPreference.city)
    const user = useSelector(state => state.Login)
    const userId = pathOr("", ["user", "UserId"], user);
    const dispatch = useDispatch();
    const history = useHistory();
    const addtocart = (city, type, dealerPriceId, qty) => {
        if (userId == "") {
            history.replace('/login')
        } else {
            
            dispatch(getAddtoCart(city, type, dealerPriceId, qty))
         //   history.replace('/cart')
     
        }

    }
    return (
        <>

            <div className="producttable col-lg-12 col-md-12 col-sm-12 col-12">

                <div className="container-fluid ">
                    <div className="row">
                        <div className="dealerslist col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="selectdel col-lg-5 col-md-6 col-sm-6 col-12">
                                <h5>Dealers Selling This Product On <b>Cityonnet</b></h5>
                            </div>
                            <div className="selectopt col-lg-4 col-md-6 col-sm-6 col-12">
                                <select className="locationdel">

                                    {productDealer.map((data, index) => {
                                        return (
                                            <option className="productoption">{data.Locality}</option>
                                        )
                                    })

                                    }
                                </select>
                            </div>
                        </div>
                        <hr class="producthorizontal" />
                        <div className="dealertable col-lg-12 col-md-12 col-sm-12 col-12 my-2">
                            <Table className="headertable">
                                <Thead>
                                    <Tr>
                                        <Th className="shopdealername">Dealer</Th>
                                        <Th className="shopdealerprice">Price</Th>
                                        <Th className="shopdealerquantity">Quantity</Th>
                                        <Th className="shopdealerstock">Stock</Th>
                                        <Th className="shopdealerbuying">Buying Options</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        productDealer.map((data, index) => {
                                            return (
                                                <Tr>
                                                    <Td>
                                                        <Link to ={"/shoppage/"+data.DealerId}>
 
                                                        <p className="dealname">{data.ShopName}</p>           </Link> 
                                                        <p className="dealview">{data.Adress}</p>
                                                        <p className="dealloc"><i class="fas fa-map-marker-alt"></i> Location </p>

                                                    </Td>
                                                    <Td>
                                                        <p className="priceprod">{data.LowestSellingPrice}</p>
                                                        <p className="storepriceprod">{data.LowestStorePrice}</p>
                                                        <p className="shippingprod">{data.FreeShipmentStatus}</p>
                                                    </Td>
                                                    <Td>
                                                        <select><option>1</option><option>2</option><option>3</option></select>
                                                    </Td>
                                                    <Td>{data.QuantityAvailable}</Td>
                                                    <Td><div className="picuwarniwats">
                                                        <p className="pickshop col-5" onClick={() => { addtocart(city, 3, data.DealerPriceId, 1); }}>Pick up in Shop</p>
                                                        <p className="homedelivery col-5" onClick={() => { addtocart(city, 2, data.DealerPriceId, 1);}}>Homedelivery</p>
                                                        <p className="whatsappexcla col-2"><i class="fab fa-whatsapp-square wapp"></i><i class="fas fa-exclamation-circle excl"></i></p>
                                          </div>
                                        </Td>                                  
                                    </Tr> 
    
                                    )
                                })
                            }        
                                
                            </Tbody>
                          </Table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductTable;