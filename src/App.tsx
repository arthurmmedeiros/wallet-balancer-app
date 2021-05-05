import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './Store/Index';

const App = () => {
    const Wallet = lazy(() => import('./Pages/Wallet/Index'));

    return (
        <Suspense fallback="loading app...">
            <Provider store={store}>
                <Wallet />
            </Provider>
        </Suspense>
    );
};

export default App;
