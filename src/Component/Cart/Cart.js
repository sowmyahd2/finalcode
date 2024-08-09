import React, {useEffect, useState} from 'react'
import './Cart.css';
import { Table, Thead, Tr, Th, Td, Tbody } from 'react-super-responsive-table';
import { getViewCart,removeproduct } from '../../Redux/Action/CartAction';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useHistory } from 'react-router';
import{pathOr} from 'ramda';






const Cart = () => {
    const dispatch = useDispatch();
    const city = "mysore";
    const [type, setType] = useState(1)
    const history = useHistory()

    const userId = "";
    const {pcartitems} = useSelector(state => state.cart)
    const initiateCheckout = () => {
        switch(type){
            case 1: 
            case 3:
            default:
                if(pcartitems.length > 0) {
                    history.replace('/checkout')
                }   
                break
            case 2:
                if(pcartitems.length > 0) {
                    history.replace('/checkouthome')
                }  
                break
        }
    }
    useEffect(()=>{
        dispatch(getViewCart(type ,city))

    },[city, type])

    const removecartproduct = (id,type) => {
        dispatch(removeproduct(userId,type ,city,id))
        window.location.reload();
    }
    let pickotoal = 0;
    let hometotal=0;
    return(
        <>
            <div className="cartlayout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="shoppingcart col-12">
                            <h5  className="selectcart">Shopping Cart</h5>
                            <Tabs className="tabscart">
    <TabList>
      
      <Tab onClick={() => {setType(3)}}>Pickup in Shop</Tab>      
      <Tab onClick={() => {setType(2)}}>Home Delivery</Tab>
    </TabList>

 
    <TabPanel>
    <Table className="headertable">
                                <Thead className="tablehead">
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th>Description</Th>
                                        <Th>Shop</Th>
                                        <Th>Qty</Th>
                                        <Th>Price</Th>
                                        <Th>Subtotal</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                
                                <Tbody>
                                {pcartitems.map((data,index) =>{
                                    pickotoal += data.SubTotal
                                    return(
                                        <Tr>
                                        <Td><img className="img-fluid" src={data.thumb_image}/></Td>
                                        <Td><p>{data.ProductName}</p></Td>
                                    <Td><p>	{data.ShopName} </p></Td>
                                        <Td><select><option>1</option><option>2</option><option>3</option></select></Td>
                                        <Td><i class="fas fa-rupee-sign"></i>{data.StorePrice}</Td>
                                    <Td><i class="fas fa-rupee-sign"></i>{data.SubTotal}</Td>
                                    <Td> <i class="fa fa-trash" onClick={()=>removecartproduct(data.DealerPriceId,3)}></i></Td>
                                    </Tr>
                                    )
                                })}
                                    
                                </Tbody>
                            </Table>
                            
    </TabPanel>
    <TabPanel>
    <Table className="headertable">
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th>Description</Th>
                                        <Th>Shop</Th>
                                        <Th>Qty</Th>
                                        <Th>Price</Th>
                                        <Th>Subtotal</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                
                                <Tbody>
                                {pcartitems.map((data,index) =>{
                                    hometotal += data.SubTotal
                                    return(
                                        <Tr>
                                        <Td><img className="img-fluid" src={data.thumb_image}/></Td>
                                        <Td><p>{data.ProductName}</p></Td>
                                    <Td><p>	{data.ShopName} </p></Td>
                                        <Td><select><option>1</option><option>2</option><option>3</option></select></Td>
                                        <Td><i class="fas fa-rupee-sign"></i>{data.StorePrice}</Td>
                                    <Td><i class="fas fa-rupee-sign"></i>{data.SubTotal}</Td>
                                    <Td> <i class="fa fa-trash" onClick={()=>removecartproduct(data.DealerPriceId,2)}></i></Td>
                                    </Tr>
                                    )
                                })}
                                    
                                </Tbody>
                            </Table>
                            
    </TabPanel>
  </Tabs>
                            <div className="container-fluid">
                                <div className="row">                            
                                    <div className="subtotal col-12">
                                        <p className="col-9">Resolution Of Different Devices (Mobiles,Tablets,Desktops Etc) May Impact The Resultant Colour Displayed On Your Screen Significantly. Please Confirm The Exact Colour/Shade With Your Retailer Before Placing Your Order</p>
                                        <h6 className="col-3">Total : <i class="fas fa-rupee-sign"></i> {pickotoal} </h6>
                                    </div>
                                </div>
                            </div>
                            <hr class="producthorizontal" />   
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 cartorder">
                                        <div className="continueshopping col-6">
                                            <button onClick={() =>  history.replace('/')}>Continue Shopping</button>
                                        </div>
                                        <div className="placeorder col-6">
                                            <button onClick={() => {initiateCheckout()}} className="col-6 orderplacebutton">Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart;