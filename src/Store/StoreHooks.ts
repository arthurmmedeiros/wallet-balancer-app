import { useSelector as useSelect } from 'react-redux';
import {AppState} from './AppState';


export const useSelector = <TReturnType>(selector: (state: AppState) => TReturnType) => useSelect<AppState, TReturnType>(selector);