import React from 'react';

const ProfileInfo = (props) => {
    let profileInfo = props.profileInfo;
    if (!profileInfo) {
        return <h4>not found</h4>
    }

    return (
        <div>
            <header className=" rounded-top text-white" style={{ backgroundColor: "#005CB9" }}>
                <div className="container-fluid">
                    <div className="row  d-flex bd-highlight">
                        <div className="col-md-3">
                            <img className="rounded-circle img-fluid mt-4 mb-4 " style={{ cursor: 'pointer' }} src={profileInfo.profilePic} width="150" height="150" alt="profile pic" onClick={props.openProfilePhotoModal}>
                            </img>
                        </div>
                        <div className="col-md-8   w-100">
                            <div className="row p-2 text-left-responsive">
                                <p>
                                    <strong className="text-responsive-heading mb-2 mt-2 text-white mr-2">
                                        {profileInfo.fullName}
                                    </strong>
                                    <label className="text-responsive mb-2 mt-2">
                                        {(profileInfo.gender === "female") ? "(she/her)" : "he/him"}
                                    </label>
                                </p>

                            </div>
                            <div className="row p-2">
                                <p>
                                    <label className="text-responsive-subHeading mt-2 mb-2">{profileInfo.designation}</label>
                                    <label className="mt-2 mb-2">
                                        <i className="material-icons icon-responsive ml-4 mr-1">fiber_manual_record</i>
                                        <label className="text-responsive-subHeading ">{profileInfo.organisation}</label>
                                    </label>
                                </p>

                            </div>
                            <div className="row p-2 mt-2">
                                <label className="text-responsive mr-3 mb-2">{profileInfo.linkedProfileName}</label>
                                <label className="text-responsive mr-3 mb-2">{profileInfo.twitter}</label>
                                <label className="text-responsive mr-3 mb-2">{profileInfo.orgnizationUrl}</label>
                            </div>

                        </div>
                        {/* <div className="col-1"></div> */}
                        <div className="flex-shrink-1">
                            <i class="fa fa-pencil fa-2x btn p-0 mt-4" aria-hidden="true" onClick={props.openBasicInfoFormModal}></i>
                        </div>

                    </div>
                </div>
            </header>

            <footer className="profileFooter">
                <div className="container p-5">
                    <div className="row p-2">
                        <label className=" text-left text-responsive">{profileInfo.shortInfo}</label>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default ProfileInfo;
