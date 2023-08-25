import { useState } from 'react';
import { IPet } from '../interfaces/IPet';

export default function useMultiStepData() {
    const [petData, setPetData] = useState<IPet>();
    const updatePetData = (key: string, value: string) => {
        setPetData({ ...petData, [key]: value });
    };
    return { petData, setPetData, updatePetData };
}
