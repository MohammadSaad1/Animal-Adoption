import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#000'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: "black",
                    '&.Mui-selected': {
                        fontWeight: 600
                    }
                },
            },
        }
    }
})