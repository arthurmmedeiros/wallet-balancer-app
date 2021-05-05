import { useCallback } from 'react';
import {
    useSelector as useSelect,
    useDispatch as useDispatcher,
} from 'react-redux';
import ActionTypes from './ActionTypes';
import { AppState } from './AppState';

export const useSelector = <TReturnType>(
    selector: (state: AppState) => TReturnType
) => useSelect<AppState, TReturnType>(selector);

export const useDispatch = () => {
    const dispatcher = useDispatcher();

    const callback = useCallback((action: ActionTypes) => dispatcher(action), [
        dispatcher,
    ]);
    return callback;
};
