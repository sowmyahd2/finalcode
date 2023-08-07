import React from 'react'


const Shopdetail=({shopdetails})=>{

    return (
        <> <div className="dealslayout col-lg-12 col-md-12 col-sm-12 col-12">
            
          
           
            <div className="departmentname">
        
            <p>{shopdetails.ShopName}</p>
            <p>{shopdetails.Adress}</p>
            <p>{shopdetails.MobileNumber}</p>
           
        </div>    
            
     
    </div> 
    </>
  )
}



export default Shopdetail
