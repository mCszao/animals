import { XCircle } from 'lucide-react';
import './styles.css';

interface ModalProps {
    settings: ModalSettings;
    isOpen: boolean;
    modalOpen: () => void;
}
interface ModalSettings {
    btnClose?: boolean;
}
export const Modal = ({ settings, isOpen, modalOpen }: ModalProps) => {
    const newSet = settings;
    const handleClick = () => {};
    if (isOpen) {
        return (
            <div className='backdrop' onClick={modalOpen}>
                <div className='modal'>
                    {newSet.btnClose && (
                        <button
                            type='button'
                            className='buttonClose'
                            onClick={handleClick}
                        >
                            <XCircle size={30} />
                        </button>
                    )}
                </div>
            </div>
        );
    }
    return null;
};
