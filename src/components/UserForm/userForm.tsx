import { ChangeEvent, FunctionComponent } from 'react';
import { IPet } from '../../interfaces/IPet';
import { DivController } from '../InputController/inputController.styled';
import InputController from '../InputController/inputController';

interface UserFormProps {
    data: IPet;
    externalFunc: (key: string, value: string) => void;
}

const UserForm: FunctionComponent<UserFormProps> = ({ data, externalFunc }) => {
    return (
        <div>
            <InputController
                title='Pai do Pet'
                name='owner'
                value={data.owner}
                type='text'
                externalFunc={externalFunc}
            />
            <InputController
                title='e-mail'
                name='mail'
                value={data.mail}
                type='email'
                externalFunc={externalFunc}
            />
        </div>
    );
};

export default UserForm;
