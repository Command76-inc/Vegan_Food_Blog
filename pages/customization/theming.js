import { experimental_extendTheme as extendedTheme } from "@mui/material/styles";
import { green, pink } from "@mui/material/colors";

export const theme = extendedTheme({
    colorSchemes: {
        light: {
            typography: {
                h1: {
                    // color: 'rgba(226,129,129,0.87)',
                }
            }, 
            palette: {
                primary: {
                    main: "#008000", 
                    contrastText: "#FFF"
                }, 
                secondary: {
                    main: "#FFF"
                }, 
                customColor: {
                    main: "#FFF"
                }, 
                text: {
                    primary: '#FFF', 
                    secondary: '#000', 
                }
            }
        }, 
        dark: {
            palette: {
                primary: pink
            }
        }
    }
});