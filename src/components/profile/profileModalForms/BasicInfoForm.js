import React from 'react';

const BasicInfoForm = (props) => {

    let user = props.user;
    console.log(user);
    return (
        <div>
            <div class="wdc-modal-bg">
                <div class="wdc-modal w-50" role="dialog" aria-labelledby="modal-heading">
                    <div class="wdc-modal-heading text-left" id="modal-heading">
                        <div className="d-flex bd-highlight">
                            <h4 className="text-left w-100"><strong>Profile</strong></h4>
                            <div className="flex-shrink-1">
                                <i class="fa fa-times btn p-0" aria-hidden="true" onClick={props.closeModal}></i>
                            </div>
                        </div>
                    </div>

                    <div class="wdc-modal-body">
                        <form className="text-left">
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="firstName"><strong>First Name*</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="First Name"
                                        defaultValue={props.user.firstName}
                                        required
                                    />
                                    
                                    <p className="text-danger mt-2" id="errorMsgFirstName"><strong>Error:</strong> First name is a required field</p>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName"><strong>Last Name*</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last Name"
                                        defaultValue={props.user.lastName}
                                        required
                                    />
                                    
                                    <p className="text-danger mt-2" id="errorMsgFirstName"><strong>Alert:</strong> Last name is required field</p>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="pronouns"><strong>Pronouns</strong></label>
                                    <br></br>
                                    <select id="pronouns" name="pronouns" className="form-control">
                                        <option>she / her</option>
                                        <option>he / him</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="title"><strong>Tilte*</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Title"
                                        defaultValue={props.user.designation}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="organisation"><strong>Organisation</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Organisation"
                                        placeholder="Email"
                                        defaultValue={props.user.organisation}
                                        
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="linkedProfileName"><strong>LinkedIn</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="linkedProfileName"
                                        placeholder="LinkedIn Username"
                                        defaultValue={props.user.linkedProfileName}
                                        
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="twitter"><strong>Twitter</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="twitter"
                                        placeholder="Twitter Username"
                                        defaultValue={props.user.twitter}
                                        
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="facebook"><strong>Facebook</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="facebook"
                                        placeholder="Facebook Username"
                                        defaultValue={props.user.twitter}
                                        
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="website"><strong>Website</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="website"
                                        placeholder="Website Url"
                                        defaultValue={props.user.orgnizationUrl}
                                        
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="privateMessaging"><strong>Private Messaging</strong></label>
                                    <br></br>
                                    <input type="radio" id="enable" name="privateMessaging" value="enable"/>
                                    <label htmlFor="enable" className="ml-1">Enable</label>
                                    <br></br>
                                    <input type="radio" id="disable" name="privateMessaging" value="disable"></input>
                                    <label htmlFor="disable" className="ml-1">Disable</label>
                                </div>

                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="aboutMe"><strong>About Me</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="aboutMe"
                                        placeholder="Short Introduction about Yourself."
                                        defaultValue={props.user.shortInfo}
                                        
                                    />
                                </div>
                            </div>

                            <br />
                            <button type="submit" className="btn btn-primary mr-4">Save</button>
                            <button className="btn btn-danger" onClick={props.closeModal}>Cancel</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicInfoForm;
