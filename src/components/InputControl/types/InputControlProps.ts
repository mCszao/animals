import React from 'react';

export type InputControlProps = {
    inputName: string;
    textLabel: string;
    inputValue: string;
    inputType: string;
    helperText?: string;
    contentHelperText?: string;
    externalFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
