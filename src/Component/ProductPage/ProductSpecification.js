import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel, 
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; 
import { useSelector } from 'react-redux';
import{pathOr} from 'ramda';
const ProductSpecification = () => {
    const productDescription = useSelector(state => state.Product.productDetails);
    const specification = useSelector(state => pathOr([],["specification"],state.Product.productDetails));
    
    return(
        <div class="productspedesc">            
            <Accordion >
                <AccordionItem dangerouslySetExpanded={true}>
                    <AccordionItemHeading >
                        <AccordionItemButton > 
                            Product Descriptions
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>{pathOr("",["productdetail","Description"], productDescription)} </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem dangerouslySetExpanded={true}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Product Specifications
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <div className="pspecefication col-lg-6 col-md-6 col-sm-8 col-12">
                            <ul className="listogroup">
                        {specification.map((data,index) => {
                            return(
                                <>
                                <li className="col-5">{data.SpecificationName}</li>
                                <li className="col-2">:</li>
                                <li className="col-5">{data.SpecificationValue}</li>
                                </>
                                  )
                            })
                        }
                        </ul>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ProductSpecification;