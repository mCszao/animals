import { FunctionComponent, InputHTMLAttributes } from 'react';
import './styles.css';
interface InputControllerProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputController: FunctionComponent<InputControllerProps> = ({
    ...props
}) => {
    return <input className='input-controller' {...props}></input>;
};

export default InputController;
