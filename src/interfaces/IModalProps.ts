import { ReactNode } from 'react';
export interface ModalProps {
    settings: ModalSettings;
    isOpen: boolean;
    modalOpen: () => void;
    children?: ReactNode | null;
}
export interface ModalSettings {
    btnClose?: boolean;
}
