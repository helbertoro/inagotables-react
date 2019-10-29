import React from 'react'

const FormCheck = ({name, identifer, value, label, action}) => (
    <div className="form-check">
        <input className="form-check-input" type="radio" name={name} id={identifer} value={value} onChange={action} />
        <label className="form-check-label" htmlFor={identifer}>
            {label}
        </label>
    </div>
);

export default FormCheck;