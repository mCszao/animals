import { useState } from 'react';
import UserForm from '../components/MultiStepForm/UserForm/userForm';
import PetPrimaryForm from '../components/MultiStepForm/PetPrimaryForm/petPrimaryForm';
import PetSecondaryForm from '../components/MultiStepForm/PetSecondaryForm/petSecondaryForm';
import useMultiStepData from './useMultiStepData';
import useOwner from './useOwner';

export default function useForm() {
    const { petData, updatePetData } = useMultiStepData();
    const { owner, updateOwnerField } = useOwner();
    const [step, setStep] = useState(0);
    const changeStep = (moreOrLess: boolean) => {
        if (moreOrLess) setStep(step + 1);
        if (!moreOrLess) setStep(step - 1);
    };

    const stepsComponents = [
        <UserForm owner={owner} handleChange={updateOwnerField} />,
        <PetPrimaryForm data={petData} handleChange={updatePetData} />,
        <PetSecondaryForm data={petData} handleChange={updatePetData} />,
    ];

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (step >= 3 || step < 0) return;
        if (e.currentTarget.innerText === 'Avançar') changeStep(true);
        if (e.currentTarget.innerText != 'Avançar') changeStep(false);
    };
    return {
        step,
        changeStep,
        currentComponent: stepsComponents[step],
        stepsComponents,
        handleClick,
        petData,
        owner,
        updatePetData,
    };
}
