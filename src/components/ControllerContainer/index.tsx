import React, { FunctionComponent } from 'react';
import './styles.css';
interface ControllerContainerProps {
    children: React.ReactNode;
}

const ControllerContainer: FunctionComponent<ControllerContainerProps> = ({
    children,
}) => {
    return <div className='input-container'>{children}</div>;
};

export default ControllerContainer;
