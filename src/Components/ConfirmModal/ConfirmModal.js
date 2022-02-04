import { useNavigate, useParams } from 'react-router-dom';
import Modal from "../Modal/Modal";
import './confirmModal.scss';

const ConfirmModal = ({ onClickAction, paramName, setSave = () => {} }) => {
    const navigate = useNavigate();
    const params = useParams();

    function handleConfirm(value = params[paramName]) {
        onClickAction(value);
        setSave(false);
        navigate(-1);
    }

    return (
        <Modal onClickAction={handleConfirm} confirmText={'Yes'}>
            <span className='confirm-span'>Are you sure?</span>
        </Modal>
    );
}

export default ConfirmModal;