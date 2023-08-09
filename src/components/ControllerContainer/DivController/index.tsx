import { FunctionComponent } from 'react';
import './styles.css';
interface DivControllerProps {
    children: React.ReactNode;
}

const DivController: FunctionComponent<DivControllerProps> = ({ children }) => {
    return <div className='div-controller'>{children}</div>;
};

export default DivController;
