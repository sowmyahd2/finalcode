import React, { useState, useEffect, Suspense,useCallback } from 'react';
import './Header.css';
import { useDispatch, useSelector, } from 'react-redux';
import 'react-responsive-modal/styles.css';

import { fetchcity,setCityname } from '../../Redux/Slice/CitySlice';
import { getSearch } from '../../Redux/Slice/SearchSlice';

import { Link, useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { Dropdown } from 'react-bootstrap';
import Loader from '../Loader';
import Popup from '../Popup';
import GoogleTranslate from '../GoogleTranslate';
const Logo = React.lazy(() => import('../Generic/Logo'));
const Modal = React.lazy(() => import('react-responsive-modal'))
const Sticky = React.lazy(() => import('react-sticky-el'))


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [userId, setuserId] = useState(0);
    const [pcount, setonlinecount] = useState(0);
    const [homecount, sethomecount] = useState(0);
    const [cityModalOpen, setCityToggleModal] = useState(false);
    const [languageModalOpen, setLanguageToggleModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
   

   
    const cityList=useSelector(state=>state.city);
  



    const selectedCity = cityList.selectedCity
   
    useEffect(() => {
        // Dispatch the fetchCity thunk here
        dispatch(fetchcity());
      }, [selectedCity]);
     
       
        useEffect(() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
              
                (position) => {
                  const apiKey = "AIzaSyCstriROXRCEDBDY9w_5p7pt7hT1cUp3zI";
                  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`;
                  fetch(apiUrl)
                  .then(response => response.json())
                  .then(data => {
                    if (data.status === 'OK') {
                        const addressComponents = data.results[0].address_components;
                        const cityComponent = addressComponents.find((component) =>
                          component.types.includes('locality')
                        );
                        const postalCodeComponent = addressComponents.find((component) =>
                          component.types.includes('postal_code')
                        );
                  
                        const city = cityComponent ? cityComponent.long_name : 'City not found';
                        const postalCode = postalCodeComponent
                          ? postalCodeComponent.short_name
                          : 'Postal code not found';
                  
                          dispatch(setCityname({"city":city,"pincode":postalCode}))
                      } else {
                        console.error('Error in geocoding:', data.status);
                      }
               
                    
                  })
                  .catch(error => {
                    console.error("Error fetching city:", error);
                  });
                },
                (error) => {
                  console.log(error.message);
                }
              );
            } else {
                alert(selectedCity);
              console.log('Geolocation is not supported by this browser.');
            }
          }, []);
       
          const {searchcategory,searchbrands,searchstores} = useSelector(state => state.search)
  
    const [suggestion, setSuggestion] = useState([]);
    const selectCity = (city) => {
       
        dispatch(setCityname({"city":city.toLowerCase(),pincode:0}))
      
        setCityToggleModal(!cityModalOpen)
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
        
     }
    const onSuggestionsFetchRequested = (term) => {
        if (term.length > 0) {
            dispatch(getSearch({"selectedCity":selectedCity, "term":term}))
        } 
        //   setSuggestion(suggestion);
    }
    const onSuggestionsClearRequested = () => {
        setSuggestion([])
    }

 
 const handleInputChange=()=>{
  
    dispatch(setCityname({"city":selectedCity.toLowerCase(),pincode:0}))
      
 }
 const userlogout = (event) => {
    event.preventDefault();
   
}
    return (
        <>
                          
                        
    
  
            <div className="cityonnet_Header_xs d-block d-md-none">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="headerleft col-6 ">
                            <i className="fas fa-list" ></i>

                            <Logo/>

                        </div>
                        <div className="headerright col-6">
                            <ul className="nav navlist justify-content-end" > 
                                <li className="nav-item" onClick={() => { setLanguageToggleModal(!languageModalOpen) }}>
                                    <a className="nav-link" href="#"><i className="fas fa-language" /></a>
                                </li>
                                <li className="nav-item" onClick={() => { setCityToggleModal(!cityModalOpen) }}>
                                    <a className="nav-link" href="#"><i className="fas fa-map-marker-alt" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-shopping-cart" /></a>
                                </li>
                                {userId != "" && (
                                    <li className="nav-item">
                                 <Link to={"/login"} className="nav-link" onClick={(event) => { userlogout(event) }} ><i className="fas fa-user logcolor" /></Link>
                                    </li>
                                )}
                                {userId == "" && (
                                    <li className="nav-item">
                                        <Link to={"/login"} className="nav-link" ><i className="fas fa-user" /></Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                    
                        <div className="headersearch col-12">
                            <input
                               
                                className="inputbar"
                                type="text"
                                onChange={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                onFocus={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                placeholder="Search by Products, Brands, Stores, Bussiness" />
                            <button className="gobutton"><i className="fas fa-search" /></button>
                             <div className="searchinputlist" style={(searchcategory.length > 0 || searchstores.length > 0 || searchbrands.length > 0) ? { display: 'block' } : { display: 'none' }}>
                                {searchcategory.length > 0 && (<h6>Categories</h6>)}

                                {
                                    searchcategory.map((data, index) => {
                                        return (

                                            <Link to={"/maincategory/" + data.MainCategoryId}><li className="suggestedlist" key={index}>{data.MainCategoryName}</li></Link>

                                        )
                                    })

                                }
                                {searchbrands.length > 0 && (<h6>Brands</h6>)}
                                {
                                    searchbrands.map((data, index) => {
                                        return (


                                            <Link to={"/brandcategory/" + data.BrandId}><li className="suggestedlist" key={index}>{data.BrandName}</li></Link>

                                        )
                                    })
                                }
                                {searchstores.length > 0 && (<h6>Stores</h6>)}
                                {
                                    searchstores.map((data, index) => {
                                        return (
                                            <Link to={"/shoppage/" + data.DealerId}> <li className="suggestedlist" key={index}>{data.ShopName}</li></Link>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cityonnet_Header d-none d-md-block">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="headerleft col-2 ">
                            <Logo />
                            
                        </div>
                        <div className="headerright col-10">
                            <ul className="nav navlist justify-content-end">
                                <li className="nav-item">
                                <GoogleTranslate /> 
                                </li>
                               
                                <li className="nav-item" onClick={() => { setCityToggleModal(!cityModalOpen) }}>
                                    <a className="nav-link" href="#"><i className="fas fa-map-marker-alt" /> <span> {selectedCity}</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-download" /> <span> App</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-user" /> <span>Seller App</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Sticky className="stickymenu">
                <div className="cityonnet_Header_menu d-none d-md-block" >
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="headersearch col-12">
                                <a className="col-2 categories px-2" href=""><i className="fas fa-list " /> All Categories </a>
                                <div className="col-5 searchinput">
                                    <input
                                        
                                        className="inputbar"
                                        type="text"
                                        onChange={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                        onFocus={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                        placeholder="Search by Products, Brands, Stores, Bussiness" />
                                    <button className="gobutton"><i className="fas fa-search" /></button>
                                    <div className="searchinputlist" style={(searchcategory.length > 0 || searchstores.length > 0 || searchbrands.length > 0) ? { display: 'block' } : { display: 'none' }}>
                                        {searchcategory.length > 0 && (<h6>Categories</h6>)}

                                        {
                                            searchcategory.map((data, index) => {
                                                return (

                                                    <Link to={"/maincategory/" + data.MainCategoryId}><li className="suggestedlist" key={index}>{data.MainCategoryName}</li></Link>

                                                )
                                            })

                                        }
                                        {searchbrands.length > 0 && (<h6>Brands</h6>)}
                                        {
                                            searchbrands.map((data, index) => {
                                                return (


                                                    <Link to={"/brandcategory/" + data.BrandId}><li className="suggestedlist" key={index}>{data.BrandName}</li></Link>

                                                )
                                            })
                                        }
                                        {searchstores.length > 0 && (<h6>Stores</h6>)}
                                        {
                                            searchstores.map((data, index) => {
                                                return (
                                                    <Link to={"/shoppage/" + data.DealerId}> <li className="suggestedlist" key={index}>{data.ShopName}</li></Link>

                                                )
                                            })
                                        }
                                    </div>
                                </div>


                                <ul className="nav navlist_menu col-5">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart" /> <span> PickupinStore {pcount!=0 ?(pcount):("")}</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart"><i className="fa fa-motorcycle" aria-hidden="true" /> <span> Home Delivery{homecount!=0?(homecount):("")} </span></Link>
                                    </li>
                                    {userId != "" && (
                                        <li className="nav-item">
                                        {isOpen &&     
                                            <Popup/>  }
                            {isOpen && 
                            
                            <Popup
                            handleClose={togglePopup}
   
      
    />}
                                            <a className="nav-link" href="#" onClick={togglePopup}><i className="fas fa-user" /> <span>Logout</span></a>
                                        </li>
                                    )}
                                    {userId == "" && (
                                        <li className="nav-item">
                                            <Link to={"/login"} className="nav-link" ><i className="fas fa-user" /> <span> Login </span></Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Sticky>
            <Suspense>
                <Modal open={languageModalOpen} onClose={() => { setLanguageToggleModal(!languageModalOpen) }} center>
                    <ul className="list-group citylist">
                        <h6>Select a Language</h6>
                    </ul>
                </Modal>
                <Modal open={cityModalOpen} onClose={() => { setCityToggleModal(!cityModalOpen) }} center>
                <Dropdown className='list-group citylist'>
      <Dropdown.Toggle variant="default" id="dropdown-basic">
      Select City
      </Dropdown.Toggle>

      <Dropdown.Menu >
      {cityList.cityList.map((data, index) => {
                            return (
                                <Dropdown.Item onClick={() => { selectCity(data.NewCityName) }} ><a href="#">{data.NewCityName}</a></Dropdown.Item>

                            )
                        })}
       
       
      </Dropdown.Menu>
    </Dropdown>
    <input type='text' placeholder='pincode' onBlur={handleInputChange}/>
                    <ul className="list-group citylist">
                        
                         
                        <h6>Select a City</h6>
                        {cityList.cityList.map((data, index) => {
                            return (
                                <li onClick={() => { selectCity(data.NewCityName) }} className="list-group-item listli" key={index}><a href="#">{data.NewCityName}</a></li>
                            )
                        })}

                 

                    </ul>
                </Modal>
                
            </Suspense>

        </>
    )
}

// https://cityonnet-api.herokuapp.com/v1/search/autocomplete

export default Header;