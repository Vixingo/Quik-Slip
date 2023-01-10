import {
    Box,
    Container,
    Grid,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { AccountCircle } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HeadingText from "./HeadingText";
import LockIcon from "@mui/icons-material/Lock";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
function Personal() {
    return (
        <>
            <Container maxWidth={"md"} sx={{ marginTop: "100px" }}>
                <Grid container>
                    <Grid item xs={12} sm={5}>
                        <HeadingText
                            main="Personal Information"
                            sub="Input all the required information to continue."
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <DriveFileRenameOutlineIcon
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    left: "10px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Enter Name"
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <MailOutlineIcon
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    left: "10px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Enter Email"
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <LocalPhoneIcon
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    left: "10px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Enter Phone Number"
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={5}>
                        {" "}
                        <HeadingText
                            main="Enter Password"
                            sub="Enter a secret password."
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        {" "}
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <LockIcon
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    left: "10px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <LockIcon
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    left: "10px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="password"
                                placeholder="Retype Password"
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={5}>
                        {" "}
                        <HeadingText
                            main="Property Role"
                            sub="Select the role you play at this complex."
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        {" "}
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <ManageAccountsIcon
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    left: "10px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Complex Role"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Personal;
