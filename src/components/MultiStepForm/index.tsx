import { ButtonPrevNext, MainContainer } from './styles';
import UserForm from '../UserForm/userForm';
import { useForm } from '../../hooks/useForm';
import PetPrimaryForm from '../PetPrimaryForm/petPrimaryForm';
import PetSecondaryForm from '../PetSecondaryForm/petSecondaryForm';
import { IPet } from '../../interfaces/IPet';
import { ChangeEvent, useState } from 'react';

const formBuilder: IPet = {
    owner: '',
    mail: '',
    size: '',
    weight: '',
    sex: '',
    color: '',
    specie: '',
};

export const MultiStepForm = () => {
    const [data, setData] = useState(formBuilder);
    const changeValueInput = (key: string, value: string) => {
        console.log(key, value);

        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };
    const stepsComponents = [
        <UserForm data={data} externalFunc={changeValueInput} />,
        <PetPrimaryForm />,
        <PetSecondaryForm />,
    ];
    const { step, changeStep } = useForm(stepsComponents);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (step >= 3 || step < 0) return;
        if (e.currentTarget.innerText === 'Avançar') changeStep(true);
        if (e.currentTarget.innerText != 'Avançar') changeStep(false);
    };

    return (
        <MainContainer>
            <h1>Olá! vamos cadastrar algumas informações do seu Pet </h1>
            <form>
                {stepsComponents[step]}
                {step != 0 && (
                    <ButtonPrevNext
                        borderColor=' #f00'
                        onClick={handleClick}
                        type='button'
                    >
                        Voltar
                    </ButtonPrevNext>
                )}
                {step >= 2 && (
                    <ButtonPrevNext
                        borderColor=' #10454f'
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(data);
                        }}
                    >
                        Finalizar
                    </ButtonPrevNext>
                )}
                {step < 2 && (
                    <ButtonPrevNext
                        borderColor=' #10454f'
                        type='button'
                        onClick={handleClick}
                    >
                        Avançar
                    </ButtonPrevNext>
                )}
            </form>
        </MainContainer>
    );
};
