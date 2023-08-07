import React, { useState, useEffect, Suspense,useCallback } from 'react';
import './Header.css';
import { useDispatch, useSelector, } from 'react-redux';
import 'react-responsive-modal/styles.css';
import { getcity } from '../../Redux/Action/CityAction';
import { setCity,getpcartcount,gethomecartcount } from '../../Redux/Action/UserPreferenceAction';

import { getSearch, ClearAutoComplete } from '../../Redux/Action/SearchAction';
import { Link, useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { logout } from '../../Redux/Action/LoginAction';
import Loader from '../Loader';
import Popup from '../Popup';
import GoogleTranslate from '../GoogleTranslate';
const Logo = React.lazy(() => import('../Generic/Logo'));
const Modal = React.lazy(() => import('react-responsive-modal'))
const Sticky = React.lazy(() => import('react-sticky-el'))


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [pickcount, setpickount] = useState(0);
    const [onlinecount, setonlinecount] = useState(0);
    const [cityModalOpen, setCityToggleModal] = useState(false);
    const [languageModalOpen, setLanguageToggleModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getcity())
        dispatch(ClearAutoComplete())

    }, [])
    const user = useSelector(state => state.Login)
    const userId = pathOr("", ["user", "UserId"], user);
 
    const userlogout = (event) => {
        event.preventDefault();
        dispatch(logout())
    }

    const city = useSelector(state => state.City.city);
    const selectedCity = useSelector(state => state.UserPreference.city)
    const pcount = useSelector(state => state.UserPreference.pcount)
    const homecount = useSelector(state => state.UserPreference.homecount)
   
        useEffect(() => {
            if(userId!=""){
            dispatch(getpcartcount(userId,selectedCity))
            dispatch(gethomecartcount(userId,selectedCity))
        }
        }, [pcount,homecount])
       

    const search = useSelector(state => state.Search.search)
  
    const [suggestion, setSuggestion] = useState([]);
    const selectCity = (city) => {
        dispatch(setCity(city.toLowerCase()))
      
        setCityToggleModal(!cityModalOpen)
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
        
     }
    const onSuggestionsFetchRequested = (term) => {
        if (term.length > 0) {
            dispatch(getSearch(selectedCity, term))
        } else {
            dispatch(ClearAutoComplete())

        }
        //   setSuggestion(suggestion);
    }
    const onSuggestionsClearRequested = () => {
        setSuggestion([])
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
                                onBlur={() => { dispatch(ClearAutoComplete()) }}
                                className="inputbar"
                                type="text"
                                onChange={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                onFocus={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                placeholder="Search by Products, Brands, Stores, Bussiness" />
                            <button className="gobutton"><i className="fas fa-search" /></button>
                            <div className="searchinputlist" style={(search.category.length > 0 || search.stores.length > 0 || search.brands.length > 0) ? { display: 'block' } : { display: 'none' }}>
                                {search.category.length > 0 && (<h6>Categories</h6>)}

                                {
                                    search.category.map((data, index) => {
                                        return (

                                            <Link to={"/maincategory/" + data.MainCategoryId}><li className="suggestedlist" key={index}>{data.MainCategoryName}</li></Link>

                                        )
                                    })

                                }
                                {search.brands.length > 0 && (<h6>Brands</h6>)}
                                {
                                    search.brands.map((data, index) => {
                                        return (


                                            <Link to={"/brandcategory/" + data.BrandId}><li className="suggestedlist" key={index}>{data.BrandName}</li></Link>

                                        )
                                    })
                                }
                                {search.stores.length > 0 && (<h6>Stores</h6>)}
                                {
                                    search.stores.map((data, index) => {
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
                                        onBlur={() => { dispatch(ClearAutoComplete()) }}
                                        className="inputbar"
                                        type="text"
                                        onChange={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                        onFocus={(e) => { onSuggestionsFetchRequested(e.target.value) }}
                                        placeholder="Search by Products, Brands, Stores, Bussiness" />
                                    <button className="gobutton"><i className="fas fa-search" /></button>
                                    <div className="searchinputlist" style={(search.category.length > 0 || search.stores.length > 0 || search.brands.length > 0) ? { display: 'block' } : { display: 'none' }}>
                                        {search.category.length > 0 && (<h6>Categories</h6>)}

                                        {
                                            search.category.map((data, index) => {
                                                return (

                                                    <Link to={"/maincategory/" + data.MainCategoryId}><li className="suggestedlist" key={index}>{data.MainCategoryName}</li></Link>

                                                )
                                            })

                                        }
                                        {search.brands.length > 0 && (<h6>Brands</h6>)}
                                        {
                                            search.brands.map((data, index) => {
                                                return (


                                                    <Link to={"/brandcategory/" + data.BrandId}><li className="suggestedlist" key={index}>{data.BrandName}</li></Link>

                                                )
                                            })
                                        }
                                        {search.stores.length > 0 && (<h6>Stores</h6>)}
                                        {
                                            search.stores.map((data, index) => {
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
                    <ul className="list-group citylist">
                        <h6>Select a City</h6>
                        {city.map((data, index) => {
                            return (
                                <li onClick={() => { selectCity(data.CityName) }} className="list-group-item listli" key={index}><a href="#">{data.CityName}</a></li>
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