import React from 'react';
import '@workday/canvas-kit-css-core/index.scss';
import '@workday/canvas-kit-css-core/lib/colors.scss';
import '@workday/canvas-kit-css-modal/index.scss';
import { FormField } from '@workday/canvas-kit-react';
import { TextInput } from '@workday/canvas-kit-react';

const MyProductAreasForm = (props) => {
    const [value, setValue] = React.useState('');

    let mpa = props.mpa;

    return (
        <div className="wdc-modal-bg" >
            <div className="wdc-modal w-50" role="dialog" aria-labelledby="modal-heading">
                <div class="wdc-modal-heading text-left" id="modal-heading">
                    <div className="d-flex bd-highlight">
                        <h4 className="text-left w-100"><strong>My Product Areas</strong></h4>
                        <div className="flex-shrink-1">
                            <i class="fa fa-times btn p-0" aria-hidden="true" onClick={props.closeModal}></i>
                        </div>
                    </div>
                </div>

                <div className="wdc-modal-body text-left">
                    <h5 className="text-left"><strong>Add New Product</strong></h5>
                    <FormField
                        label=""
                        inputId="my-input-field"
                    >
                        <TextInput value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search Product" grow="true" />
                    </FormField>

                    <div>
                        {
                            mpa.map((obj, index) =>
                                <div key={index}>
                                    <div className="container justify-content-start">
                                        <div className="row ">
                                            <h6 className="text-responsive"><strong>{obj.title}</strong></h6>
                                        </div>

                                        <div className="row justify-content-start">

                                            {obj.values.map((value, i) => <button key={i} className="text-responsive mr-3 wdc-depth-2 btn-tags">{value} X</button>)}


                                        </div>
                                    </div>
                                    {
                                        (index !== mpa.length - 1) ? <hr></hr> : <br></br>
                                    }

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProductAreasForm;
