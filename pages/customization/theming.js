import { 
    experimental_extendTheme as extendedTheme, 
    responsiveFontSizes 
} from "@mui/material/styles";
import { green, pink } from "@mui/material/colors";

const white = "#FFF";
const black = "#000";
const darkGray = "#3B3B3B";
const primaryGreen = "#008000";
const secondaryBlue = "#1976D2";

const desktop_media = "@media (max-width:1149px)";
const tablet_media = "@media (max-width:629px)";
const mobile_media = "@media (max-width:415px)";

let theme = extendedTheme({
    colorSchemes: {
        light: {
            typography: {
                h1Primary: {
                    fontFamily: [
                        "thirsty-rough-two", 
                        "sans-serif"
                    ].join(","), 
                    fontSize: "2rem"
                }, 
                h1Secondary: {
                    fontFamily: [
                        "harman-sans", 
                        "sans-serif"
                    ].join(","), 
                    fontSize: "3.5rem", 
                    lineHeight: "1", 
                    [desktop_media]: {
                        fontSize: "3rem"
                    }, 
                    [tablet_media]: {
                        fontSize: "2rem"
                    }, 
                    [mobile_media]: {
                        fontSize: "1rem"
                    }
                }, 
                body1: {
                    fontfamily: [
                        "Roboto", 
                        "Arial", 
                        "Helvetica", 
                        "sans-serif"
                    ].join(",")
                }
            }, 
            palette: {
                primary: {
                    main: primaryGreen, 
                    contrastText: white
                }, 
                secondary: {
                    main: secondaryBlue
                }, 
                secondaryTwo: {
                    main: "#FFF0AD"
                }, 
                accentPink: {
                    main: "#FB2FA3"
                }, 
                accentYellow: { 
                    main: "#F9B501"
                }, 
                accentGreen: {
                    main: "#92B72C"
                }, 
                accentGray: {
                    main: "#818084"
                }, 
                background: {
                    main: white 
                }, 
                whiteToBlack: {
                    main: white
                }, 
                text: {
                    primary: darkGray, 
                    primaryGreen: primaryGreen, 
                    secondary: secondaryBlue, 
                    white: white, 
                    black: black
                }
            }
        }, 
        dark: {
            typography: {
                h1Primary: {
                    fontFamily: [
                        "thirsty-rough-two", 
                        "sans-serif"
                    ].join(","), 
                    fontSize: "2rem"
                }, 
                h1Secondary: {
                    fontFamily: [
                        "harman-sans", 
                        "sans-serif"
                    ].join(","), 
                    fontSize: "3.5rem", 
                    lineHeight: "1", 
                    [desktop_media]: {
                        fontSize: "3rem"
                    }, 
                    [tablet_media]: {
                        fontSize: "2rem"
                    }, 
                    [mobile_media]: {
                        fontSize: "1rem"
                    }
                }, 
            }, 
            palette: {
                primary: {
                    main: darkGray
                }, 
                secondaryTwo: {
                    main: darkGray
                }, 
                background: {
                    main: black, 
                }, 
                whiteToBlack: {
                    main: black
                }, 
                text: {
                    primary: white, 
                    primaryGreen: white, 
                    secondary: white
                }
            }
        }
    }
});

// theme = responsiveFontSizes(theme);

export default theme;