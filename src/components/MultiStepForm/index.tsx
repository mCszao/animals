import { ReactNode, useState } from 'react';
import './style.css';
interface MultiStepProps {
    title: string;
    steps: ReactNode[];
}
export const MultiStepForm = ({ title, steps }: MultiStepProps) => {
    const [step, setStep] = useState();
    const handleStepChange = () => {

    };

    return (
        <div className='teste'>
            <h1>{title}</h1>
            <form>
                <div>{steps[step]}</div>;
                <button type='submit' onClick={handleStepChange}>
                    Avançar
                </button>
            </form>
        </div>
    );
};
