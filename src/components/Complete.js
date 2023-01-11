import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Complete() {
    return (
        <>
            <Box sx={{ textAlign: "center" }}>
                <img src="/img/mini_logo.png" alt="" />
                <Typography
                    sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "#282828",
                        mt: "48px",
                        mb: "12px",
                    }}
                >
                    Congratulations, Eric!
                </Typography>
                <Typography
                    sx={{
                        fontSize: "12px",
                        color: "#282828",
                        marginBottom: "44px",
                    }}
                >
                    You have completed registration, you can start using
                    QuikSlip!
                </Typography>
                <Box sx={{ maxWidth: "400px", margin: "0 auto" }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            backgroundColor: "#fff",
                        }}
                    >
                        Launch QuikSlip
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default Complete;
