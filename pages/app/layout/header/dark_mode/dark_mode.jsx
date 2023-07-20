import { useState } from 'react';
import { 
    useColorScheme, 
    IconButton
} from "@mui/material";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

const DarkModeButton = () => {
    const { mode, setMode } = useColorScheme();
    const [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark((prevState) => { 
            prevState ? setMode('light') : setMode('dark');
            return !prevState
        });
    }

    return (
        <IconButton onClick={toggleDarkMode} color="secondary">
            { !dark ? <DarkModeRounded /> : <LightModeRounded /> }
        </IconButton>
    );
};

export default DarkModeButton;