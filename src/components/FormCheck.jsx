import React from 'react'

const FormCheck = ({name, identifer, value, label}) => (
    <div class="form-check">
        <input class="form-check-input" type="radio" name={name} id={identifer} value={value} />
        <label class="form-check-label" for={identifer}>
            {label}
        </label>
    </div>
);

export default FormCheck;