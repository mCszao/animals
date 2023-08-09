import { ButtonPrevNext, MainContainer } from './styles';
import useForm from '../../hooks/useForm';

export const MultiStepForm = () => {
    const { step, handleClick, stepsComponents, petData, owner } = useForm();

    return (
        <MainContainer>
            <h1>
                {step >= 1 ? 'Informações do seu Pet🐶' : 'Cadastre-se 🐱‍🏍 '}
            </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    let petDataIsEmpty = true;
                    let ownerDataIsEmpty = true;
                    if (petData)
                        Object.values(petData!).forEach((value) => {
                            if (value != '') petDataIsEmpty = false;
                            if (value == '') petDataIsEmpty = true;
                        });
                    Object.values(owner!).forEach((value) => {
                        if (value != '') ownerDataIsEmpty = false;
                        if (value == '') ownerDataIsEmpty = true;
                    });
                    if (petDataIsEmpty && ownerDataIsEmpty)
                        alert(
                            'Preencha os campos da seção de cadastro para prosseguir!'
                        );
                    if (!ownerDataIsEmpty) {
                        if (!petDataIsEmpty) {
                            console.log(owner, petData);
                        } else {
                            console.log(owner);
                        }
                    }
                }}
            >
                {stepsComponents[step]}
                {step != 0 && (
                    <ButtonPrevNext
                        borderColor=' #f00'
                        backgroundHover='#f00'
                        onClick={handleClick}
                        type='button'
                    >
                        Voltar
                    </ButtonPrevNext>
                )}
                {step >= 2 && (
                    <ButtonPrevNext
                        borderColor=' #10454f'
                        backgroundHover='#10454f'
                        type='submit'
                    >
                        Finalizar
                    </ButtonPrevNext>
                )}
                {step < 2 && (
                    <ButtonPrevNext
                        borderColor=' #10454f'
                        backgroundHover='#10454f'
                        type='button'
                        onClick={handleClick}
                    >
                        Avançar
                    </ButtonPrevNext>
                )}
                {step < 1 && (
                    <ButtonPrevNext
                        borderColor=' #887b06'
                        backgroundHover='#887b06'
                        type='submit'
                    >
                        Cadastrar Pet Depois
                    </ButtonPrevNext>
                )}
            </form>
            <div>
                
            </div>
        </MainContainer>
    );
};
