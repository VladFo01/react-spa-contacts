import { Link, Route, Routes, useLocation } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import EditModal from '../EditModal/EditModal';
import './info.scss';

const Info = ({ contactValues, setContactValues, defContactValues, setSave }) => {
    const location = useLocation();

    function deleteValue(key) {
        setContactValues(prevArr => {
            return prevArr.filter(elem => elem.key !== key);
        });
    }

    function cancelChange(key, defValues = defContactValues) {
        const value = defValues.find(elem => elem.key === key)['value'];

        setContactValues(prevArr => {
            return prevArr.map(elem => {
                if (elem.key === key) {
                    return ({
                        key,
                        value
                    });
                }
                return elem;
            });
        });
    }

    return (
        <>
            <table className='info-table'>
                <tbody>
                    {contactValues.map(elem => (
                        elem.key !== 'id' ?
                        <tr className='info-tr' key={elem.key}>
                            <td className='info-td'>{elem.key}</td>
                            <td className='info-td'>{elem.value}</td>
                            <td className='info-td'>
                                <Link className='table-link blue' to={`${location.pathname}/${elem.key}/edit`}>
                                    Edit
                                </Link>
                                {elem?.edited ?
                                    <Link className='table-link orange' to={`${location.pathname}/${elem.key}/cancel-change`}>
                                        Cancel change
                                    </Link>
                                : null}
                                {elem.key !== 'name' && elem.key !== 'surname' &&
                                elem.key !== 'phone' && elem.key !== 'email' && elem.key !== 'birthday' ? 
                                    <Link className='table-link red' to={`${location.pathname}/${elem.key}/delete`}>
                                        Delete
                                    </Link>
                                : null}
                            </td>
                        </tr>
                        : null
                    ))}
                </tbody>
            </table>

            <Routes>
                <Route
                    path={':key/delete'}
                    element={<ConfirmModal onClickAction={deleteValue} paramName={'key'} setSave={setSave} />}
                />
                <Route 
                    path={':key/edit'} 
                    element={<EditModal contactValues={contactValues} setContactValues={setContactValues} setSave={setSave} />} 
                />
                <Route
                    path={':key/cancel-change'} 
                    element={<ConfirmModal onClickAction={cancelChange} paramName={'key'} />} 
                />
            </Routes>
        </>
    );
}

export default Info;