import { useNavigate } from 'react-router-dom';
import './modal.scss';

const Modal = ({ children, onClickAction, confirmText }) => {
    const navigate = useNavigate();
    
    return (
        <div className="modal-wrapper">
            <div className="modal-body">

                { children }

                <div className="modal-button__group">
                    <button className="modal-button green" 
                        onClick={() => {
                            onClickAction();
                        }}
                    >
                        { confirmText }
                    </button>
                    <button className="modal-button red" onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;