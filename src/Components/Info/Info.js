import { Link, Outlet, useLocation } from 'react-router-dom';
import './info.scss';

const Info = ({ contactValues, setContactValues }) => {
    const location = useLocation();

    function deleteValue(key) {
        setContactValues(prevArr => {
            return prevArr.filter(elem => elem.key !== key);
        });
    }

    console.log(contactValues);

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
                                <Link className='table-link blue' to={`${location.pathname}/${elem.key}`}>
                                    Edit
                                </Link>
                                {elem.key !== 'name' && elem.key !== 'surname' && elem.key !== 'phone' ? 
                                    <Link className='table-link red' to={`${location.pathname}/${elem.key}`}>
                                        Delete
                                    </Link>
                                : null}
                            </td>
                        </tr>
                        : null
                    ))}
                </tbody>
            </table>

            <Outlet context={{ onClickAction: deleteValue, paramName: 'key' }} />
        </>
    );
}

export default Info;