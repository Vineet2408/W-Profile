import React from 'react'

const Accreditations = (props) => {
    const accreditations = props.accreditations;
    console.log(accreditations);

    if (!accreditations) {
        return <h4>Not found</h4>
    }
    if (accreditations.length <= 0) {
        return <h5>Not found Any value</h5>
    }

    return (
        <div>
            <h4 className="text-left w-100"><strong>Accreditations</strong></h4>
            <br />
            
            {
                accreditations.map((obj, index) =>
                    <div key={index}>
                        <div className="container justify-content-start">
                            <div className="row">
                                <p className="text-left m-0"><strong>{obj.title}</strong></p>
                            </div>

                            <div className="row  justify-content-start" style={{ padding: "0px" }}>
                                <div className="col-8 text-left" style={{ padding: "0px" }}>
                                    <small>{obj.type} | {obj.taskDate}</small>
                                </div>
                            </div>

                        </div>
                        {
                            (index !== accreditations.length - 1) ? <hr></hr> : <br></br>
                        }


                    </div>
                )



            }

        </div>
    );
}

export default Accreditations;
