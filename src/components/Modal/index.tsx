import { XCircle } from 'lucide-react';

import './styles.css';
import { ModalProps } from '../../interfaces/IModalProps';

export const Modal = ({
    settings,
    isOpen,
    modalOpen,
    children,
}: ModalProps) => {
    const newSet = settings;
    if (isOpen) {
        return (
            <div className='backdrop' onClick={modalOpen}>
                <div className='modal'>
                    {newSet.btnClose && (
                        <button
                            type='button'
                            className='buttonClose'
                            onClick={modalOpen}
                        >
                            <XCircle size={30} />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        );
    }
    return null;
};
