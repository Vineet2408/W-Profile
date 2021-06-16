import React from 'react'

const Footer = () => {
    return (
        <div class="container mt-5 pb-5">
            <div class="row">
                <div class="col-md text-left">
                    <i class="fa fa-twitter rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i class="fa fa-linkedin rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i class="fa fa-facebook rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i class="fa fa-youtube-play rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                    <i class="fa fa-instagram rounded-circle p-2 mr-2" style={{backgroundColor: "#DFE2E6", color: "#7B858F"}} aria-hidden="true"></i>
                </div>

                <div class="col-md text-right">
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
