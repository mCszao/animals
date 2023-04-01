import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
} from '@chakra-ui/react';
import { InputControlProps } from './types/InputControlProps';

export const InputControl = ({
    inputName,
    inputType,
    textLabel,
    inputValue,
    helperText,
    contentHelperText,
    externalFunc,
}: InputControlProps) => {
    return (
        <FormControl>
            <FormLabel>{textLabel}</FormLabel>
            <Input
                name={inputName}
                type={inputType}
                value={inputValue}
                onChange={externalFunc}
            />
            {helperText && (
                <FormHelperText>
                    {contentHelperText && contentHelperText}
                </FormHelperText>
            )}
        </FormControl>
    );
};
