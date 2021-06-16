import React from 'react'
import '@workday/canvas-kit-css-modal/index.scss';
import '@workday/canvas-kit-css-text-input/index.scss';

const ProfilePhotoForm = (props) => {

    return (
        <div>
            <div class="wdc-modal-bg">
                <div class="wdc-modal w-50" role="dialog" aria-labelledby="modal-heading">
                    <div class="wdc-modal-heading text-left" id="modal-heading">
                        <div className="d-flex bd-highlight">
                            <h4 className="text-left w-100"><strong>Profile Photo</strong></h4>
                            <div className="flex-shrink-1">
                                <i class="fa fa-times btn p-0" aria-hidden="true" onClick={props.closeModal}></i>
                            </div>
                        </div>
                    </div>

                    <div class="wdc-modal-body">
                        <form className="text-center">
                            <div className="form-group row">
                                <img className="border rounded-circle mr-auto ml-auto" src={props.profileInfo.profilePic} width="150" height="150" alt="profile pic" />
                            </div>
                            <br/>
                            <button className="btn btn-primary mr-4">Upload Photo</button>
                            <button className="btn btn-secondary mr-4">Select Avatar</button>
                            <button className="btn btn-danger">Remove Photo</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoForm
