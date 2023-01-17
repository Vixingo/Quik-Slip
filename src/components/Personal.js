import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HeadingText from "./HeadingText";
import LockIcon from "@mui/icons-material/Lock";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
function Personal({ formData, setFormData }) {
    return (
        <>
            <Container maxWidth={"md"}>
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
                                    left: "12px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Enter Name"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    });
                                }}
                                value={formData.name}
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
                                    left: "12px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Enter Email"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        mail: e.target.value,
                                    });
                                }}
                                value={formData.mail}
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
                                    left: "12px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Enter Phone Number"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        phone: e.target.value,
                                    });
                                }}
                                value={formData.phone}
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
                                    left: "12px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="password"
                                placeholder="Enter Password"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        pass: e.target.value,
                                    });
                                }}
                                value={formData.pass}
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
                                    left: "12px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="password"
                                placeholder="Retype Password"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        rePass: e.target.value,
                                    });
                                }}
                                value={formData.rePass}
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
                                    left: "12px",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Complex Role"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        role: e.target.value,
                                    });
                                }}
                                value={formData.role}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Personal;
