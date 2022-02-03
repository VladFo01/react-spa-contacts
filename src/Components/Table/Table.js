import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './table.scss';

const Table = ({ contacts, setContacts }) => {

    function deleteContact(id) {
        setContacts(prevArr => {
            return prevArr.filter(elem => elem.id !== id);
        });
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact?.id}>
                            <td>{contact?.name ?? ''}</td>
                            <td>{contact?.surname ?? ''}</td>
                            <td>{contact?.phone ?? ''}</td>
                            <td>
                                <Link className='table-link blue' to={`/details/${contact.id}`}>
                                    More details
                                </Link>
                                <Link className='table-link red' to={`/contacts/${contact.id}`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Outlet context={{ onClickAction: deleteContact, paramName: 'id' }} />
        </>
    )
}

export default Table;