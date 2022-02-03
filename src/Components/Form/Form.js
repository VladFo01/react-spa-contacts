import { useState } from "react";
import './form.scss';
import Field from "../Field/Field";

const Form = ({ fields = [], setParentState, validate, legend, addBtnValue }) => {
    const defObject = fields.reduce((acc, field) => {
        acc[field.id] = '';
        return acc;
    }, {});

    const [object, setObject] = useState(defObject);
    const [error, setError] = useState(null);

    function handleChange(event) {
        const key = event.target.id;
        let value = event.target.value;

        setObject(prevObject => ({
            ...prevObject,
            [key]: value,
        }));
    }


    function handleAdd() {
        try {
            validate(object);
        } catch (error) {
            return setError(error);
        }
        setParentState(object);
        setError(null);
        console.log('works');
        handleClear();
    }

    function handleClear() {
        setObject(defObject);
    }

    return (
        <fieldset>
            <legend>{legend}</legend>
            {fields.map(field => (
                <Field
                    key={field.id}
                    label={field.label}
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    value={object[field.id]}
                    onChangeHandler={handleChange}
                />
            ))}
            {error ?
                <div className="form-error">{`Error! ${error.message}`}</div>
            : null}
            <button 
                type="submit" 
                id="add" 
                className="button-1"
                onClick={handleAdd}
            >
                {addBtnValue}
            </button>
            <button 
                type="submit" 
                id="clear" 
                onClick={handleClear}
                className="button-1"
            >
                Clear
            </button>
        </fieldset>
    );
}

export default Form;