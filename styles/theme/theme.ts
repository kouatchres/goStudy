import { createTheme, responsiveFontSizes } from "@mui/material/styles";



let  theme =createTheme({

    palette:{
        primary:{
            main:"#22b0ac"
        }, secondary:{
            main:"#19857b"
            // main:"#22b0ac"
            // main:"#f5d7cc"
            // main:"#d5d7cc"
            // main:"#b5d7cc"
        },
        error:{
            main:"#dfcc"
        },
    },
});
theme = responsiveFontSizes(theme);
export default theme