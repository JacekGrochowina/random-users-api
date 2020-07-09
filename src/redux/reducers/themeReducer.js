import { CHANGE_THEME, SET_THEME } from 'redux/actions/types';

const themeReducer = (state = 'light', action) => {
    switch(action.type) {
        case CHANGE_THEME:
            switch(state) {
                case 'light':
                    return 'dark';
                case 'dark':
                    return 'light';
                default:
                    return 'light';
            }
        case SET_THEME:
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer;