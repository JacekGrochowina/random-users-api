import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from 'redux/actions/ThemeActions';
import storage from 'local-storage-fallback';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'
import LightModeIcon from 'assets/icons/sun.svg';
import DarkModeIcon from 'assets/icons/moon.svg';

import './ToggleTheme.css';

const Icon = (icon, size) => (
    <img src={icon} width={size} height={size} />
)

const ToggleTheme = () => {

    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const [defaultChecked, setDefaultChecked] = useState(
        storage.getItem('theme') === 'light' || 
        storage.getItem('theme') === null ? 
            false : true
    );

    return (
        <div>
            <Toggle 
                className='leading-color'
                checked={theme === 'light' ? false : true}
                defaultChecked={defaultChecked}
                icons={{
                    checked: Icon(LightModeIcon, 12),
                    unchecked: Icon(DarkModeIcon, 11),
                }}
                onChange={() => dispatch(changeTheme())}
            />
        </div>
    )
}

export default ToggleTheme;