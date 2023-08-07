import React from 'react'
import PropTypes from 'prop-types'

const Ship = props => {
  return (
    <div>
       <div className="wrapper">
      <h1>Add Shipping address</h1>
      <form>
        <fieldset>
          <label>
            <p>Pincode</p>
            <input name="pincode" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Mobile no</p>
            <input name="number" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Address</p>
            <textarea name="pincode" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Locality/Town</p>
            <input  name="Locality" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Landmark</p>
            <textarea name="Landmark" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>city</p>
            <input  name="Locality" />
          </label>
        </fieldset>  <fieldset>
          <label>
            <p>State</p>
            <input  name="Locality" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}



export default Ship