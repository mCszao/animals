import React from 'react';
import { IPet } from '../interfaces/IPet';

export const useInput = () => {
    const [dataPet, setDataPet] = React.useState<IPet>({
        owner: '',
        mail: '',
        size: '',
        weight: '',
        sex: '',
        color: '',
        specie: '',
    });
    return {
        handleChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => {
            setDataPet({
                ...dataPet,
                [e.currentTarget.name]: e.currentTarget.value,
            });
            console.log(dataPet);
        },
        dataPet,
    };
};
