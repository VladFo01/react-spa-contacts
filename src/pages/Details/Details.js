import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import DetailsForm from "../../Components/DetailsForm/DetailsForm";
import Header from "../../Components/Header/Header";
import Info from "../../Components/Info/Info";
import './details.scss';

const Details = ({contacts, setContacts}) => {
    const  { id } = useParams();

    // find contact with such id
    const contact = contacts.find(elem => elem.id === id);

    // get array of contact values which we already have
    const defContactValues = Object.keys(contact).map(key => ({
        key,
        value: contact[key]
    }));

    const [contactValues, setContactValues] = useState(defContactValues);

    console.log(contactValues);

    return (
        <>
            <Header />
            <DetailsForm contactValues={contactValues} setContactValues={setContactValues} />
            <Info contactValues={contactValues} setContactValues={setContactValues} />

            <div className="details-button__group">
                <Link className="details-button save" to={'/contacts'}>Save changes</Link>
                <Link className="details-button cancel" to={'/contacts'}>Cancel</Link>
            </div>

            <Outlet context={{}} />
        </>
    )
}

export default Details;