import { FunctionComponent } from 'react';
import InputContainer from '../../ControllerContainer';
import DivController from '../../ControllerContainer/DivController';
import InputController from '../../ControllerContainer/InputController';
import useMultiStepData from '../../../hooks/useMultiStepData';
import { IPet } from '../../../interfaces/IPet';

interface PetPrimaryFormProps {
    data?: IPet;
    handleChange: (key: string, value: string) => void;
}

const PetPrimaryForm: FunctionComponent<PetPrimaryFormProps> = ({
    data: petData,
    handleChange,
}) => {
    return (
        <InputContainer>
            <InputContainer>
                <DivController>
                    <InputController
                        name='pet-name'
                        value={petData?.petName}
                        type='text'
                        required
                        onChange={(e) => {
                            handleChange('petName', e.currentTarget.value);
                            console.log(petData);
                        }}
                    />
                    <label htmlFor='petName'>Nome Pet</label>
                </DivController>
                <DivController>
                    <InputController
                        name='size'
                        value={petData?.size}
                        type='text'
                        required
                        onChange={(e) => {
                            handleChange('size', e.currentTarget.value);
                            console.log(petData);
                        }}
                    />
                    <label htmlFor='size'>Tamanho</label>
                </DivController>
                <DivController>
                    <InputController
                        name='weight'
                        value={petData?.weight}
                        type='text'
                        required
                        onChange={(e) => {
                            handleChange('weight', e.currentTarget.value);
                            console.log(petData);
                        }}
                    />
                    <label htmlFor='weight'>Peso (kg)</label>
                </DivController>
                <DivController>
                    <InputController
                        name='sex'
                        type='text'
                        value={petData?.sex}
                        required
                        onChange={(e) => {
                            handleChange('sex', e.currentTarget.value);
                            console.log(petData);
                        }}
                    />
                    <label htmlFor='sex'>Sexo</label>
                </DivController>
            </InputContainer>
        </InputContainer>
    );
};

export default PetPrimaryForm;
