import { MouseEventHandler } from 'react';

export interface ModalProps {
    settings: ModalSettings;
    isOpen: boolean;
    modalOpen: () => void;
}
export interface ModalSettings {
    btnClose?: boolean;
}
