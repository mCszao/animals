import { FunctionComponent } from 'react';
import InputContainer from '../../ControllerContainer';
import DivController from '../../ControllerContainer/DivController';
import InputController from '../../ControllerContainer/InputController';

import { IPet } from '../../../interfaces/IPet';

interface PetSecondaryFormProps {
    data?: IPet;
    handleChange: (key: string, value: string) => void;
}
const PetSecondaryForm: FunctionComponent<PetSecondaryFormProps> = ({
    data: petData,
    handleChange,
}) => {
    return (
        <InputContainer>
            <InputContainer>
                <DivController>
                    <InputController
                        name='color'
                        value={petData?.color}
                        type='text'
                        required
                        onChange={(e) => {
                            handleChange('color', e.currentTarget.value);
                            console.log(petData);
                        }}
                    />
                    <label htmlFor='color'>Cor</label>
                </DivController>
                <DivController>
                    <InputController
                        name='specie'
                        value={petData?.specie}
                        type='text'
                        required
                        onChange={(e) => {
                            handleChange('specie', e.currentTarget.value);
                            console.log(petData);
                        }}
                    />
                    <label htmlFor='specie'>Espécie/Raça</label>
                </DivController>
                <DivController>
                    <InputController
                        name='abouy'
                        value={petData?.about}
                        type='text'
                        required
                        onChange={(e) => {
                            handleChange('about', e.currentTarget.value);
                            console.log(petData);
                        }}
                    />
                    <label htmlFor='about'>Sobre</label>
                </DivController>
            </InputContainer>
        </InputContainer>
    );
};

export default PetSecondaryForm;
