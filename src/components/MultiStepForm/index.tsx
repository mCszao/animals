import { useState } from 'react';
import { IdentificationPet } from '../../components/IdentificationPet';
import { InfosAddPet } from '../../components/InfosAddPet';
import { AddPhotoPed } from '../../components/AddPhotoPet';
import { ButtonPrevNext, MainContainer } from './styles';
import { useInput } from '../../hooks/useInput';
export const MultiStepForm = () => {
    const { dataPet } = useInput();
    const steps = [<IdentificationPet />, <InfosAddPet />, <AddPhotoPed />];

    const [step, setStep] = useState(0);
    const handleSubmit = () => {
        console.log(dataPet);
    };
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (step >= 3 || step < 0) return;
        if (e.currentTarget.innerText === 'Avançar') setStep(step + 1);
        if (e.currentTarget.innerText != 'Avançar') setStep(step - 1);
    };

    return (
        <MainContainer>
            <h1></h1>
            <form>
                {steps[step]}
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
                        type='button'
                        onClick={handleSubmit}
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
