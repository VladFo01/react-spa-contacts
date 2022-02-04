import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsForm from "../../Components/DetailsForm/DetailsForm";
import Header from "../../Components/Header/Header";
import Info from "../../Components/Info/Info";
import './details.scss';

const Details = ({ contacts, setContacts }) => {
    const  { id } = useParams();
    const navigate = useNavigate();

    // get default contact values
    function getDefContactValues (state) {
        // find contact with such id
        const contact = state.find(elem => elem.id === id);

        // get array of contact values which we already have
        const defContactValues = Object.keys(contact).map(key => ({
            key,
            value: contact[key]
        }));

        return defContactValues;
    }

    const defContactValues = getDefContactValues(contacts);

    const [contactValues, setContactValues] = useState(defContactValues);
    const [successSave, setSuccessSave] = useState(false);

    // save changes
    function handleSaveChanges(state, id) {
        setContactValues(prevArr => {
            return prevArr.map(elem => {
                if (elem?.edited) {
                    delete elem.edited;
                }
                return elem;
            });
        });
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

    return (
        <>
            <Header />
            <DetailsForm 
                contactValues={contactValues} 
                setContactValues={setContactValues} 
                setSave={setSuccessSave} 
            />
            <Info 
                contactValues={contactValues} 
                setContactValues={setContactValues} 
                defContactValues={defContactValues} 
                setSave={setSuccessSave} 
            />

            <div className="details-button__group">
                <button 
                    className="details-button save" 
                    onClick={() => handleSaveChanges(contactValues, id)}
                >
                    {successSave ? `Save changes ${String.fromCharCode(10004)}` : 'Save changes'}
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