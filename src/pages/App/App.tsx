import { useState } from 'react';
import * as AppStyles from './AppStyles';
import { Logo } from '../../components/Logo/Logo';
import logotype from '../../assets/images/logo.png';

function App() {
    return (
        <AppStyles.Body>
            <AppStyles.Header>
                <Logo
                    url='http://localhost:5173/'
                    source={logotype}
                    altTxt='Imagem'
                />
            </AppStyles.Header>
        </AppStyles.Body>
    );
}

export default App;
