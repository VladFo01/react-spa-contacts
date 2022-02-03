import Form from '../Form/Form';
import { validateText, validatePhone } from '../../Scripts/validation/validatePhone';

const ContactForm = ({ contacts, setContacts }) => {

    // function for general validation of the form
    function validateInputs(values, state = contacts) {
        for (let key in values) {
            // check whether there is an empty field
            if (values[key] === '') {
                throw new Error(`Your ${key} is empty!`);
            }

            // validate name and surname
            if (key === 'name' || key === 'surname') {
                validateText(values[key], key);
            }

            // validate phone number
            if (key === 'phone') {
                // check whether there is a contact with the same phone number
                if (Boolean(state.find(elem => elem[key] === values[key]))) {
                    throw new Error(`There is a contact with the same phone number!`);
                }
                validatePhone(values[key]);
            }
        }
    }

    function setParentState(currentObject) {
        setContacts(prevArr => {
            const newObject = {
                ...currentObject,
                id: Math.random().toString(36).slice(2)
            }
            return [...prevArr, newObject];
        });
    }

    return (
        <Form
            fields={[
                {
                    label: 'Name',
                    id: 'name',
                    placeholder: 'Name',
                    type: 'text',
                },
                {
                    label: 'Surname',
                    id: 'surname',
                    placeholder: 'Surname',
                    type: 'text',
                },
                {
                    label: 'Phone number',
                    id: 'phone',
                    placeholder: 'Phone number',
                    type: 'tel',
                }
            ]}
            setParentState={setParentState}
            validate={validateInputs}
            legend={'New Contact'}
            addBtnValue={'Add contact to list'}
        />
    );
}

export default ContactForm;