import React from 'react'


const AccountDetails = (props) => {
    console.log(props.user);

    let split = new Date().toString().split(" ");
    let timeZoneFormatted = Intl.DateTimeFormat().resolvedOptions().timeZone + " " + split[5];

    return (
        <div>
            <div className="d-flex bd-highlight">
                <h4 className="text-left w-100"><strong>Account Details</strong></h4>
                <div className="flex-shrink-1">
                    <i class="fa fa-pencil fa-2x btn p-0" aria-hidden="true" onClick={props.openModal}></i>
                </div>
            </div>
            <br />
            <div className="text-left">
                <div>
                    <p className="m-0"><strong>User Name</strong></p>
                    <p>{props.user.username}</p>
                </div>
                <div>
                    <p className="m-0"><strong>Role</strong></p>
                    <p>{props.user.role}</p>
                </div>
                <div>
                    <p className="m-0"><strong>Timezone</strong></p>
                    <p>{timeZoneFormatted}</p>
                </div>
                <div>
                    <p className="m-0"><strong>Location</strong></p>
                    <p>{props.user.location}</p>
                </div>
                <div>
                    <p className="m-0"><strong>Email &nbsp;<i class="fa fa-eye-slash" aria-hidden="true"></i></strong></p>
                    <p className="btn-link" style={{ color: "#0875E1" }}>{props.user.email}</p>
                </div>
                <div>
                    <p className="m-0"><strong>Phone &nbsp;<i class="fa fa-eye-slash" aria-hidden="true"></i></strong></p>
                    <p>{props.user.phone}</p>
                </div>

                <div>
                    <p className="btn btn-link p-0">
                        <strong>Change My Password &nbsp;

                        </strong>
                    </p>
                </div>
                <div>
                    <p className="btn btn-link p-0">
                        <strong>Check Privacy Setting &nbsp;

                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountDetails;
