import { FunctionComponent } from 'react';
import { DivController, InputField } from './inputController.styled';

interface InputControllerProps {
    type: string;
    title: string;
    name: string;
    value: string;
    externalFunc: (key: string, value: string) => void;
    isRequired?: boolean;
}

const InputController: FunctionComponent<InputControllerProps> = ({
    type,
    externalFunc,
    title,
    name,
    value,
    isRequired,
}) => {
    return (
        <DivController>
            <label htmlFor={name}>{title}</label>
            <InputField
                type={type}
                name={name}
                id={name}
                value={value || ''}
                onChange={(e) =>
                    externalFunc(e.currentTarget.name, e.currentTarget.value)
                }
                required={isRequired ? isRequired : false}
            />
        </DivController>
    );
};

export default InputController;
