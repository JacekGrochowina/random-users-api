import { CHANGE_THEME, SET_THEME } from './types';

export const changeTheme = () => {
    return {
        type: CHANGE_THEME
    }
}

export const setTheme = (theme) => {
    return {
        type: SET_THEME,
        payload: theme
    }
}