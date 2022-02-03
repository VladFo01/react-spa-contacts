import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsForm from "../../Components/DetailsForm/DetailsForm";
import Header from "../../Components/Header/Header";
import Info from "../../Components/Info/Info";
import './details.scss';

const Details = ({contacts, setContacts}) => {
    const  { id } = useParams();
    const navigate = useNavigate();

    // find contact with such id
    const contact = contacts.find(elem => elem.id === id);

    // get array of contact values which we already have
    const defContactValues = Object.keys(contact).map(key => ({
        key,
        value: contact[key]
    }));

    const [contactValues, setContactValues] = useState(defContactValues);
    const [successSave, setSuccessSave] = useState(false);

    useEffect(() => {
        setSuccessSave(false);
    }, [contactValues]);

    // save changes
    function handleSaveChanges(state, id) {
        setContacts(prevArr => {
            return prevArr.map(elem => {
                if (elem.id === id) {
                    const newContact = {}
                    state.forEach(item => {
                        newContact[item.key] = item.value;
                    });

                    return newContact;
                }

                return elem;
            });
        });
        setSuccessSave(true);
    }

    console.log(contactValues);

    return (
        <>
            <Header />
            <DetailsForm contactValues={contactValues} setContactValues={setContactValues} />
            <Info contactValues={contactValues} setContactValues={setContactValues} defContactValues={defContactValues} />

            <div className="details-button__group">
                <button 
                    className="details-button save" 
                    onClick={() => handleSaveChanges(contactValues, id)}
                >
                    {successSave ? `Save changes ${String.fromCharCode(10004)}` : "Save changes"}
                </button>
                <button 
                    className="details-button cancel" 
                    onClick={() => navigate('/contacts')}
                >
                    Go back
                </button>
            </div>
        </>
    )
}

export default Details;