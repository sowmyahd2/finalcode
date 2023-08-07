import React from 'react'


const Shippingaddress = (props) => {
    
    const adress=props.address;
    const renderaddress=()=>{
      
        if(adress.length >0){
         
         const address = []
         adress.forEach((shop, index) => {
             address.push({
                 Name: shop.CustomerName,
                 adress: shop.BillingAddress,
                 city: shop.City,
                 number: shop.MobileNumber,
                 state: shop.State,
                 pincode:shop.Pincode,
                 locality:shop.Locality,
                 shipid:shop.ShippingId
             })
         })   
         return address.map((shop, index) => {
            return (
                <div className="selerdetails" key={index}onClick={() => props.setshipid(shop.shipid)}>
                    
                    <p>{shop.Name}</p>
                    <p>Ph : {shop.number}</p>
                    <p>Address : {shop.adress}</p>
                    <p>Locality:{shop.locality}</p>
                    <p>{shop.city}</p>
                    <p>{shop.state}-{shop.pincode}</p>
            
                </div>
            )
        })  
        }
        
        }
  return (
    <div>{renderaddress()}</div>
  )
}



export default Shippingaddress