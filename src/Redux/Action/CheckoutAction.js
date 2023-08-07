import Api from '../../Config/Api';
import Type from './Types';

export const placeOrder = (order, type, city) => async dispatch => {
    try
    {
        const body = order;
        const response = await Api.post('checkout/'+type+'/'+city,body)
        if(response.message === "success"){
            dispatch({
                    type : Type.checkoutSuccess,
                    payload : response.data
                })
            }
            
        } catch(error){
            dispatch({
                type : Type.checkoutFailure,
                payload : error.message
            })          
         
        }
    } 
     export const addreipient = (name,number,userid,city) => {
        
        try {
      
        
          return async dispatch => {
             
           const cartitems=
            {
              name: name,
              number: number,
              userid: userid,
              city:city,
               };
            
      
            const response = await Api.post("checkout/addrecipient",cartitems ,{
              headers: {
                  'Content-Type': 'multipart/mixed',
                },
          });
  
        if (response.data) {
       
          dispatch({
            type: Type.addreceipentSuccess,
            payload: response.data.insertid
          });
        } else {
          console.log('Unable to fetch data from the API BASE URL!');
        }
      };
      } catch (error) {
      // Add custom logic to handle errors
      console.log(error);
          // Add custom logic to handle errors
         
        }
      };
    export const placehomeOrder = ( type, city,shipid) => async dispatch => {
        try
        {
            
            const response = await Api.post('homeordercheckout/'+type+'/'+city+'/'+shipid)
            if(response.message === "success"){
                dispatch({
                        type : Type.homecheckoutSuccess,
                        payload : response.data
                    })
                }
                
            } catch(error){
                dispatch({
                    type : Type.checkoutFailure,
                    payload : error.message
                })          
             
            }
        } 
        export const placepickOrder = ( type, city,shipid) => async dispatch => {
            try
            {
                
                const response = await Api.post('homeordercheckout/'+type+'/'+city+'/'+shipid)
                if(response.message === "success"){
                    dispatch({
                            type : Type.homecheckoutSuccess,
                            payload : response.data
                        }).then(() => {
                            window.replace('/success')
                        })
                        .catch(err => {
                            
                                }
                            );   
                    }
                    
                } catch(error){
                    dispatch({
                        type : Type.checkoutFailure,
                        payload : error.message
                    }).then(() => {
                        window.replace('/success')
                    })
                    .catch(err => {
                        // Process error code
                            }
                        );        
                 
                }
            } 
            export const placepickuporder = ( type, city,userid,day) => async dispatch => {
                try
                {
                    
                    const response = await Api.post('pickordercheckout/'+type+'/'+city+'/'+userid+"/"+day)
                    if(response.message === "success"){
                        dispatch({
                                type : Type.pickcheckoutSuccess,
                                payload : response.data
                            }).then(() => {
                                window.replace('/success')
                            })
                            .catch(err => {
                                // Process error code
                                    }
                                );   
                        }
                        
                    } catch(error){
                        dispatch({
                            type : Type.checkoutFailure,
                            payload : error.message
                        }).then(() => {
                            window.replace('/success')
                        })
                        .catch(err => {
                            // Process error code
                                }
                            );          
                     
                    }
                } 
    

    