import { ReactNode, useState, MouseEvent } from 'react';
import './style.css';
interface MultiStepProps {
    title: string;
    steps: ReactNode[];
}
export const MultiStepForm = ({ title, steps }: MultiStepProps) => {
    const [step, setStep] = useState(0);
    const handleSubmit = () => {};
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (step >= 3 || step < 0) return;
        if (e.currentTarget.innerText === 'Avançar') setStep(step + 1);
        if (e.currentTarget.innerText != 'Avançar') setStep(step - 1);
    };

    console.log(step);

    return (
        <div className='teste'>
            <h1>{title}</h1>
            <form>
                <div>{steps[step]}</div>
                {step != 0 && (
                    <button onClick={handleClick} type='button'>
                        Voltar
                    </button>
                )}
                {step >= 2 && (
                    <button type='submit' onClick={handleSubmit}>
                        Finalizar
                    </button>
                )}
                {step < 2 && (
                    <button type='button' onClick={handleClick}>
                        Avançar
                    </button>
                )}
            </form>
        </div>
    );
};
