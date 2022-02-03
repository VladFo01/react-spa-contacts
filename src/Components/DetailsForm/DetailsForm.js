import Form from "../../Components/Form/Form";
import { validateEmail, validateText, validatePhone } from "../../Scripts/validation/validatePhone";

const DetailsForm = ({ contactValues, setContactValues }) => {

    function validateInputs(object, state = contactValues) {

        // check wheather such field already exists
        state.forEach(elem => {
            if (elem.key === object.key.toLowerCase()) {
                throw new Error(`Such field already exists!`);
            }
        });

        // check whether there is an empty field
        if (object.value === '') {
            throw new Error(`Your ${object.key} is empty!`);
        }

        // validate name and surname
        if (object.key.toLowerCase() !== 'phone' && object.key.toLowerCase() !== 'email') {
            validateText(object.value, object.key);
        }

        // validate phone number
        if (object.key.toLowerCase() === 'phone') {
            validatePhone(object.value);
        }

        // validate email
        if (object.key.toLowerCase() === 'email') {
            validateEmail(object.value);
        }
    }

    function setParentState(object) {
        setContactValues(prevArr => {
            prevArr.push(object);
            return prevArr;
        })
    }

    return (
        <Form
            fields={[
                {
                    label: 'Field',
                    id: 'key',
                    placeholder: 'Field name',
                    type: 'text',
                },
                {
                    label: 'Value',
                    id: 'value',
                    placeholder: 'Value',
                    type: 'text',
                }
            ]}
            legend={'Contact Info'}
            addBtnValue={'Add field to contact'}
            setParentState={setParentState}
            validate={validateInputs}
        />
    );
}

export default DetailsForm;