import ContactForm from "../../Components/ContactForm/ContactForm";
import Table from '../../Components/Table/Table';
import Header from '../../Components/Header/Header';

const Contacts = ({contacts, setContacts}) => {

    return (
        <>
            <Header />
            <ContactForm contacts={contacts} setContacts={setContacts} />
            <Table contacts={contacts} setContacts={setContacts} />
        </>
    )
}

export default Contacts;