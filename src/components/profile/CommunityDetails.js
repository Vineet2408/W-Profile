import React from 'react'

const CommunityDetails = (props) => {
    const communityDetails = props.communityDetails
    console.log(communityDetails);

    if (!communityDetails) {
        return <h4>Not found</h4>
    }
    if (communityDetails.length <= 0) {
        return <h5>Not found Any value</h5>
    }

    return (
        <div>
            <h4 className="text-left w-100"><strong>Community Details</strong></h4>
            <br/>

            {/* {
                communityDetails.map((obj, index) => {
                    return <div className="text-left w-50" key={index}>
                        <div >
                            <p className="m-0"><strong>{obj.title}</strong></p>
                            <p>{obj.value}</p>
                        </div>
                    </div>

                })
            } */}

            <div className="text-left row">
                <div className="col-sm-6">
                    <p className="m-0"><strong>{communityDetails[0].title}</strong></p>
                    <p>{communityDetails[0].value}</p>
                </div>

                <div className="col-sm-6">
                    <p className="m-0"><strong>{communityDetails[1].title}</strong></p>
                    <p>{communityDetails[1].value}</p>
                </div>
            </div>

            <div className="text-left row">
                <div className="col-sm-6">
                    <p className="m-0"><strong>{communityDetails[2].title}</strong></p>
                    <p>{communityDetails[2].value}</p>
                </div>

                <div className="col-sm-6">
                    <p className="m-0"><strong>{communityDetails[3].title}</strong></p>
                    <p>{communityDetails[3].value}</p>
                </div>
            </div>

            <div className="text-left row">
                <div className="col-sm-6">
                    <p className="m-0"><strong>{communityDetails[4].title}</strong></p>
                    <p>{communityDetails[4].value}</p>
                </div>

                <div className="col-sm-6">
                    <p className="m-0"><strong>{communityDetails[4].title}</strong></p>
                    <p>{communityDetails[4].value}</p>
                </div>
            </div>
        </div>
    );
}

export default CommunityDetails;
