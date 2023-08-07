
import React from 'react'
import './Profile.css';


const BankInfo = () => {
    return(
        <>
             <div className="personalinfo">
            <div className="container-fluid">
                <div className="row">
                    <div className="personaldetail">
                        <h5>Bank details</h5>
                        <form>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="text" readonly className="form-control" id="staticEmail" value="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputName" className="col-sm-3 col-form-label">Account Holder Name</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                                </div>
                            </div>      
                            
                            <div className="form-group row">
                                <label for="inputName" className="col-sm-3 col-form-label">Bank Name</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                                </div>
                            </div>   
                            
                            <div className="form-group row">
                                <label for="inputName" className="col-sm-3 col-form-label">Branch Name</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                                </div>
                            </div>                         
                            <div className="form-group row">
                                <label for="inputNumber" className="col-sm-3 col-form-label">Account Number</label>
                                <div className="col-sm-9">
                                <input type="number" className="form-control" id="inputNumber" placeholder="Number " />
                                
                                </div>
                            </div>                         
                            <div className="form-group row">
                                <label for="inputNumber" className="col-sm-3 col-form-label">Confirm Account Number</label>
                                <div className="col-sm-9">
                                <input type="number" className="form-control" id="inputNumber" placeholder="Number " />
                                
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label for="inputName" className="col-sm-3 col-form-label">IFSC Code</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                                </div>
                            </div>   
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputCity">Place</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputCity" />
                                </div>
                            </div>
                            <div className="savechanges">
                            <button type="button">Save Changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      

        </>
    )
}
export default BankInfo;