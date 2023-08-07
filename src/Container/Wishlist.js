import React, {useEffect,useCallback} from 'react'
import './CommonContainer.css';

import { useDispatch, useSelector } from 'react-redux';

import { getwishlist,removewishproduct} from '../Redux/Action/UserprofileAction';

import { pathOr } from 'ramda';





const Wishlist = () => {

    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)


const userId = pathOr("", ["user", "UserId"], user);  
    const city = useSelector(state => state.UserPreference.city)
    const wishlist = useSelector(state => pathOr([], ["products"], state.Userprofile.wishlist));
    const fetchBusinesses = useCallback(() => {
        dispatch(getwishlist(userId,city));
      }, [])
      useEffect(() => {
        fetchBusinesses()
      }, [fetchBusinesses])

    
   const removeproduct=(pid)=>{
    dispatch(removewishproduct(userId,city,pid));
    
   
   }

    return(
        <>
      
      <main>
        <section>
        <div className='container-fluid'>
       

        {wishlist.map(link => 
                 <div className="row">
                <img className="imagesproduct" src={link.thumb_image} alt="Product" />
                <p onClick={()=>removeproduct(link.ProductId)}>X</p>
                  
                <p>{link.ProductName}</p>  
                    </div>
)}
        </div>
        </section>
        </main>
     
        </>
    )
}

export default Wishlist;