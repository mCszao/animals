import { FunctionComponent } from 'react';
import InputContainer from '../../ControllerContainer';
import DivController from '../../ControllerContainer/DivController';
import InputController from '../../ControllerContainer/InputController';
import { IPet } from '../../../interfaces/IPet';
import { IOwner } from '../../../interfaces/IOwner';

interface UserFormProps {
    owner?: IOwner;
    handleChange: (key: string, value: string) => void;
}
const UserForm: FunctionComponent<UserFormProps> = ({
    owner: petData,
    handleChange,
}) => {
    return (
        <InputContainer>
            <DivController>
                <InputController
                    type='mail'
                    required
                    name='email'
                    value={petData?.mail}
                    onChange={(e) => {
                        handleChange('email', e.currentTarget.value);
                        console.log(petData);
                    }}
                />
                <label htmlFor='email'>E-mail</label>
            </DivController>
            <DivController>
                <InputController
                    required
                    name='city'
                    value={petData?.city}
                    onChange={(e) => {
                        handleChange('city', e.currentTarget.value);
                        console.log(petData);
                    }}
                />
                <label htmlFor='city'>Cidade</label>
            </DivController>
            <DivController>
                <InputController
                    required
                    name='owner'
                    value={petData?.owner}
                
                    onChange={(e) => {
                        handleChange('owner', e.currentTarget.value);
                        console.log(petData);
                    }}
                />
                <label htmlFor='owner'>Dono</label>
            </DivController>
            <DivController>
                <InputController
                    required
                    type='password'
                    name='password'
                    value={petData?.password}
                
                    onChange={(e) => {
                        handleChange('password', e.currentTarget.value);
                        console.log(petData);
                    }}
                />
                <label htmlFor='password'>Senha</label>
            </DivController>
        </InputContainer>
    );
};

export default UserForm;
