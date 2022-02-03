import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Modal from "../Modal/Modal";
import './EditModal.scss';

const EditModal = ({ contactValues, setContactValues }) => {
    const navigate = useNavigate();
    const { key } = useParams();
    const defValue = contactValues.find(elem => elem.key === key).value;

    // switch input type
    let type;
    switch (key) {
        case 'phone':
            type = 'tel';
            break;
        case 'email':
            type = 'email';
            break;
        case 'birthday':
            type = 'date';
            break;
        default:
            type = 'text';
            break;
    }

    const [value, setValue] = useState(defValue);

    function handleChange(event) {
        const newValue = event.target.value;

        setValue(newValue);
    }
    
    function onClickAction (state = value, currKey = key) {
        if (state === '') return;

        setContactValues(prevArr => {
            return prevArr.map(elem => {
                if (elem.key === currKey && elem.value !== state) {
                    return ({
                        key: currKey,
                        value: state,
                        edited: true
                    });
                }
                return elem;
            });
        });
        navigate(-1);
    }

    return (
        <Modal onClickAction={onClickAction} confirmText={'Edit'}>
            <input
                className="edit-input text-field__input"
                type={type}
                value={value}
                onChange={handleChange}
            />
        </Modal>
    );
}

export default EditModal;