import { FunctionComponent } from 'react';

interface PetPrimaryFormProps {}

const PetPrimaryForm: FunctionComponent<PetPrimaryFormProps> = () => {
    return (
        <div>
            <div>
                <label htmlFor='size'>Tamanho</label>
                <input type='text' name='size' id='size' />
            </div>
            <div>
                <label htmlFor='weight'>Peso</label>
                <input type='text' name='weight' id='weight' />
            </div>
            <div>
                <label htmlFor='sex'>Sexo</label>
                <input type='text' name='sex' id='sex' />
            </div>
        </div>
    );
};

export default PetPrimaryForm;
