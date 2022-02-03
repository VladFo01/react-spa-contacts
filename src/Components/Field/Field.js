import './field.scss';

const Field = ({ label, id, type, placeholder, onChangeHandler, value }) => {

    return (
        <div className="text-field">
            <label className="text-field__label" htmlFor={id}>{label}</label>
            <input
                className="text-field__input"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default Field;