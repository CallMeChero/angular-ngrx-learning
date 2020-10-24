import { createAction, createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
    { maskUserName: true },
    on(createAction('[User] Toggle User Code'), state => {
        console.log('original state: ', JSON.stringify(state))
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
)