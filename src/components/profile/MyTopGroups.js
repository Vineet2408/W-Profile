import React from 'react'

const MyTopGroups = (props) => {

    let mtg = props.myTopGroups;
    console.log(mtg);

    if (!mtg) {
        return <h4>Not found</h4>
    }
    if (mtg.length <= 0) {
        return <h5>Not found Any value</h5>
    }

    return (
        <div>
            <h3 className="text-left"><strong>My Top Groups</strong></h3>
            <br></br>

            {
                mtg.map((obj, index) =>
                    <div key={index}>
                        <div className="container justify-content-start">
                            <div className="row ">
                                <label className="text-left" style={{ color: "#0875E1" }}>{obj.title}</label>
                            </div>

                            <div className="row  justify-content-start" style={{ padding: "0px" }}>
                                <div className="col-8 text-left" style={{ padding: "0px" }}>
                                    <label style={{ color: "#5E6A75" }}>Last Activity {obj.lastActive} | {obj.userGroup}</label>
                                </div>

                                <div className="col-4 text-right">
                                    <i className="fa fa-users" aria-hidden="true"></i> <label className="mr-3">{obj.people}</label>
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i> <label>{obj.calendarEngagement}</label>
                                </div>

                            </div>
                        </div>
                        {
                            (index !== mtg.length - 1) ? <hr></hr> : <br></br>
                        }


                    </div>
                )



            }
            <div className="text-left">
                <p className="btn btn-link p-0"><strong>Go to Groups</strong></p>
            </div>

        </div>
    );
}

export default MyTopGroups;
