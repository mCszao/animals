import { useState } from 'react';

export function useForm(array: JSX.Element[]) {
    const [step, setStep] = useState(0);
    const changeStep = (moreOrLess: boolean) => {
        if (moreOrLess) setStep(step + 1);
        if (!moreOrLess) setStep(step - 1);
    };
    return {
        step,
        changeStep,
        currentComponent: array[step],
    };
}
