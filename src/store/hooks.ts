import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux/es/exports';
import { AppDispatch, RootState } from 'store/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
