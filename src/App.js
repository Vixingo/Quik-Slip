import { Box } from "@mui/material";
import "./App.css";
import SignUp from "./components/SignUp";
function App() {
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    mt: 4,
                    mb: 4,
                }}
            >
                <img src="/img/logo.png" alt="" />
            </Box>
            <SignUp />
        </>
    );
}

export default App;
