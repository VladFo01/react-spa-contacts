import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import './modal.scss';

const Modal = () => {
    const { onClickAction, paramName } = useOutletContext();
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="modal-wrapper">
            <div className="modal-body">
                <span>Are you sure?</span>
                <div className="modal-button__group">
                    <button className="modal-button green" 
                        onClick={() => {
                            console.log(onClickAction);
                            onClickAction(params[paramName]);
                            navigate(-1)
                        }}
                    >
                        Yes
                    </button>
                    <button className="modal-button red" onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;