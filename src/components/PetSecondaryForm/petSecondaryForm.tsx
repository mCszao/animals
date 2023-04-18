import { FunctionComponent } from 'react';

interface PetSecondaryFormProps {
    
}

const PetSecondaryForm: FunctionComponent<PetSecondaryFormProps> = () => {
    return (
        <div>
            <div>
                <label htmlFor='color'>Cor</label>
                <input type='text' name='color' id='color' />
            </div>
            <div>
                <label htmlFor='specie'>Espécie</label>
                <input type='text' name='specie' id='specie' />
            </div>
        </div>
    );
};

export default PetSecondaryForm;
