import React from 'react'

const MyProductAreas = (props) => {

    const mpa = props.myProductAreas;
    console.log(mpa);
    if (!mpa) {
        return <h4>Not found</h4>
    }

    if (mpa.length <= 0) {
        return <h4>Not found</h4>
    }

    return (
        <div>
            <div className="d-flex bd-highlight">
                <h4 className="text-left w-100"><strong>My Product Areas</strong></h4>
                <div className="flex-shrink-1">
                    <i className="fa fa-pencil fa-2x btn p-0" aria-hidden="true" onClick={props.openModal}></i>
                </div>
            </div>

            <br></br>
            {
                mpa.map((obj, index) =>
                    <div key={index}>
                        <div className="container justify-content-start">
                            <div className="row ">
                                <h6 style={{ color: "#0875E1" }}><strong>{obj.title}</strong></h6>
                            </div>

                            <div className="row ">
                                {obj.values.map((value, i) => <label key={i} className="mr-2">{value}</label>)}
                            </div>
                        </div>
                        {
                            (index !== mpa.length - 1) ? <hr></hr> : <br></br>
                        }
                    </div>
                )
            }
        </div>
    );
}

export default MyProductAreas;
