import React from 'react'
import '@workday/canvas-kit-css-modal/index.scss';
import '@workday/canvas-kit-css-text-input/index.scss';

const AccountDetailsForm = (props) => {
    let split = new Date().toString().split(" ");
    let timeZoneFormatted = Intl.DateTimeFormat().resolvedOptions().timeZone + " " + split[5];

    return (
        <div>
            <div class="wdc-modal-bg">
                <div class="wdc-modal w-50" role="dialog" aria-labelledby="modal-heading">
                    <div class="wdc-modal-heading text-left" id="modal-heading">
                        <div className="d-flex bd-highlight">
                            <h4 className="text-left w-100"><strong>Account Details</strong></h4>
                            <div className="flex-shrink-1">
                                <i class="fa fa-times btn p-0" aria-hidden="true" onClick={props.closeModal}></i>
                            </div>
                        </div>
                    </div>

                    <div class="wdc-modal-body">
                        <form className="text-left">
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label htmlFor="userName"><strong>User Name*</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="User Name"
                                        defaultValue={props.user.username}
                                        required
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="timeZone"><strong>Timezone*</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="timezone"
                                        placeholder="Timezone"
                                        defaultValue={timeZoneFormatted}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label htmlFor="role"><strong>Role</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="role"
                                        placeholder="Role"
                                        disabled
                                        defaultValue={props.user.role}
                                        required
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="location"><strong>Location*</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        placeholder="Location"
                                        defaultValue={props.user.loaction}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label htmlFor="email"><strong>Email*</strong></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        defaultValue={props.user.email}
                                        required
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="phone"><strong>Phone*</strong></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone"
                                        defaultValue={props.user.phone}
                                        required
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
    )
}

export default AccountDetailsForm
