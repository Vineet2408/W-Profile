import React from 'react'

const Footer = () => {
    return (
        <div className="container mt-5 pb-5">
            <div className="row">
                <div className="col-md text-left">
                    <i className="fa fa-twitter rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i className="fa fa-linkedin rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i className="fa fa-facebook rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i className="fa fa-youtube-play rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i className="fa fa-instagram rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                </div>

                <div className="col-md text-right">
                    <small className="pl-2 pr-3" style={{color: "#0875E1"}}><strong>Contact Us</strong></small> |
                    <small className="pl-2 pr-3" style={{color: "#0875E1"}}><strong>Community Policy</strong></small> |
                    <small className="pl-2 pr-3" style={{color: "#0875E1"}}><strong>Privacy</strong></small> |
                    <small className="pl-2 pr-3" style={{color: "#0875E1"}}><strong>Legal</strong></small> |
                    <small className="pl-2 pr-3" style={{color: "#7B858F"}}><strong>&#169; 2020 Workday, Inc.</strong></small>
                </div>
            </div>
        </div>
    )
}

export default Footer
