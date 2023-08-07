import React from 'react'
import './FilterBox.css';
import { prop } from 'ramda';
import { Link } from 'react-router-dom';

const FilterBox = (props) => {
    return (
        <div className="filterbox">
            <ul className="list-group filterllist">
                <li className="list-group-item ">
                    {props.checkbox &&
                        <input name={props.name} onChange={(event) => {props.onChange(event.target)}} value={props.id} className="filterinput" type="checkbox" />
                    }
                    {
                        props.newArrival &&
                    <p className="filterlabels" onClick={props.onClick}>{props.label}</p>
                    }
                    {!props.newArrival &&
                        <Link  className="filterlabel" to={props.link}>{props.label}</Link>
                    }
                    </li>
                
            </ul>
        </div>

    )
}

export default FilterBox;