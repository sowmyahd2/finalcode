import React,{useEffect} from 'react'
import './CommonContainer.css';
import Header from '../Component/Header/Header';

import Footer from '../Component/Footer/Footer';


 
const Careers = () => {
     
    
    return(
        <>
        <Header />
        <div className="container-fluid">
        <div className="row">
            <div className="brandcategorylayout col-lg-2 d-none d-lg-block">    
            <img src="https://www.cityonnet.com/images/contactus.jpg" />
            
            </div>
            </div>
            <div className="row">
        <div className="brandcategorybanner col-lg-6 col-md-6 col-sm-6 col-12 my-2">
        <form>
            <div class="row">
        <div class="col-lg-12">
        <label>Enter your name:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>Enter your Email:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>Mobile Number:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>college:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>Qualification:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>Branch:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>Semester:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>Percentage:</label><input type='text'/>
        </div>
        <div class="col-lg-12">
        <label>Resume:</label><input type='file'/>
        </div>
        <div class="col-lg-12">
        <input type="button" value="submit"/>
        </div>
        </div>
        </form>
        </div>
       
        <div className="brandcategorybanner col-lg-6 col-md-6 col-sm-6 col-12 my-2">
   <img src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/uploaded_files/worlddigital.png"/>

        </div>  
    
        
        </div>
        </div>
<Footer/>
        </>
    )
}

export default Careers;