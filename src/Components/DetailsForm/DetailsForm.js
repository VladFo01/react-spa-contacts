import Form from "../../Components/Form/Form";

const DetailsForm = ({ contactValues, setContactValues }) => {

    function validateInputs(object, state = contactValues) {

        // check wheather such field already exists
        state.forEach(elem => {
            if (elem.key === object.key.toLowerCase()) {
                throw new Error(`Such field already exists!`);
            }
        });

        // check whether there is an empty field
        if (object.value === '' || object.key === '') {
            throw new Error(`There is an empty field!`);
        }
    }

    function setParentState(object) {
        setContactValues(prevArr => {
            prevArr.push(object);
            return prevArr;
        });
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