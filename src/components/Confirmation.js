import {
    Box,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HeadingText from "./HeadingText";
import LockIcon from "@mui/icons-material/Lock";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import LocalParkingIcon from "@mui/icons-material/LocalParking";
import GroupIcon from "@mui/icons-material/Group";
import AccessibleIcon from "@mui/icons-material/Accessible";
import BungalowIcon from "@mui/icons-material/Bungalow";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FunctionsIcon from "@mui/icons-material/Functions";

import PlaceIcon from "@mui/icons-material/Place";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TaskIcon from "@mui/icons-material/Task";

import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
function Confirmation({ formData, setFormData }) {
    return (
        <>
            {" "}
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
            <Container maxWidth={"md"}>
                <Grid container>
                    <Grid item xs={12} sm={5}>
                        <HeadingText
                            main="Complex Information"
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
                                placeholder="Enter Complex Name"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        comName: e.target.value,
                                    });
                                }}
                                value={formData.comName}
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <PlaceIcon
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
                                placeholder="Enter Complex Address"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        comAddress: e.target.value,
                                    });
                                }}
                                value={formData.comAddress}
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <ApartmentIcon
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
                                placeholder="Enter Number of Units"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        comUnit: e.target.value,
                                    });
                                }}
                                value={formData.comUnit}
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
                                placeholder="Enter Complex Email"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        comMail: e.target.value,
                                    });
                                }}
                                value={formData.comMail}
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
                                placeholder="Enter Complex Phone Number"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        comPhone: e.target.value,
                                    });
                                }}
                                value={formData.comPhone}
                            />
                        </Box>
                        <Box sx={{ marginBottom: "48px" }}>
                            <FormControl fullWidth size="small" focused>
                                <InputLabel id="demo-simple-select-label">
                                    Gated or Open Complex
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Gated or Open Complex"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            gate: e.target.value,
                                        });
                                    }}
                                    value={formData.gate}
                                    color="primary"
                                    IconComponent={
                                        KeyboardArrowDownOutlinedIcon
                                    }
                                    autoFocus
                                    sx={{
                                        color: "#186FE7",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                    }}
                                    startAdornment={
                                        <LocalParkingIcon
                                            sx={{
                                                backgroundColor: "#186fe7",
                                                color: "#fff",
                                                borderRadius: "3px",
                                                scale: "0.8",
                                            }}
                                        />
                                    }
                                >
                                    {" "}
                                    <MenuItem disabled value={"placeholder"}>
                                        <>Selected Gated or Open Complex</>
                                    </MenuItem>
                                    <MenuItem value={" Gated Complex"}>
                                        Gated Complex
                                    </MenuItem>
                                    <MenuItem value={"Open Complex"}>
                                        Open Complex
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={5}>
                        {" "}
                        <HeadingText
                            main="Upload Images of Complex"
                            sub="Upload the most relevant images of the complex for guest and tenants to easily identify the property."
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        {" "}
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <Box
                                component="label"
                                sx={{
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                    display: "block",
                                    position: "relative",
                                    border:
                                        formData.fileName == ""
                                            ? "1px dashed #186FE7"
                                            : "1px solid #186FE7",
                                    borderRadius: "8px",
                                    width: "100%",
                                    padding:
                                        formData.fileName == ""
                                            ? "20px"
                                            : "8px 8px 8px 48px",

                                    "&:hover": {
                                        backgroundColor: "#f9f9f9",
                                    },
                                }}
                            >
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            fileName: e.target.files[0].name,
                                        });
                                    }}
                                    // value={formData.fileName}
                                />

                                {formData.fileName == "" ? (
                                    <>
                                        <AddPhotoAlternateOutlinedIcon
                                            color="primary"
                                            fontSize="large"
                                        />
                                        <Typography
                                            sx={{
                                                fontFamily: "Arimo",
                                                color: "#186FE7",
                                            }}
                                        >
                                            Drop or click to upload your image
                                            here
                                            <Typography
                                                sx={{ fontSize: "10px" }}
                                            >
                                                Supports JPEG, PNG
                                            </Typography>
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Box>
                                            {" "}
                                            <TaskIcon
                                                sx={{
                                                    color: "#186FE7",
                                                    position: "absolute",
                                                    top: "5px",
                                                    left: "12px",
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontFamily: "Arimo",
                                                    color: "#186FE7",
                                                    textAlign: "left",
                                                }}
                                            >
                                                {formData.fileName}
                                            </Typography>
                                        </Box>
                                    </>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth={"md"}>
                <Grid container>
                    <Grid item xs={12} sm={5}>
                        <HeadingText
                            main="Parking Information"
                            sub="Input all the required information to continue."
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <LocalParkingIcon
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
                                placeholder="Number of Parking Spots"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        pSpot: e.target.value,
                                    });
                                }}
                                value={formData.pSpot}
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <LocalParkingIcon
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    left: "12px",
                                    backgroundColor: "#186fe7",
                                    color: "#fff",
                                    borderRadius: "3px",
                                    scale: "0.8",
                                }}
                            />
                            <input
                                className="text_input"
                                type="text"
                                placeholder="Number of Tenant Parking"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        pNumber: e.target.value,
                                    });
                                }}
                                value={formData.pNumber}
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <GroupIcon
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
                                placeholder="Number of Guest Parking"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        pNumGuest: e.target.value,
                                    });
                                }}
                                value={formData.pNumGuest}
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <BungalowIcon
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
                                placeholder="Number of Administration Parking"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        pAdmin: e.target.value,
                                    });
                                }}
                                value={formData.pAdmin}
                            />
                        </Box>
                        <Box
                            sx={{ position: "relative", marginBottom: "48px" }}
                        >
                            <AccessibleIcon
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
                                placeholder="Number of Handicap Parking"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        pHandcap: e.target.value,
                                    });
                                }}
                                value={formData.pHandcap}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={5}>
                        <HeadingText
                            main="System of Labeling Parking Spots"
                            sub="Set a range or specific system to label each parking spot at the complex lot."
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Box sx={{ marginBottom: "48px" }}>
                            <FormControl fullWidth size="small" focused>
                                <InputLabel id="demo-simple-select-label">
                                    Parking System
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Parking System"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            pSystem: e.target.value,
                                        });
                                    }}
                                    value={formData.pSystem}
                                    color="primary"
                                    IconComponent={
                                        KeyboardArrowDownOutlinedIcon
                                    }
                                    autoFocus
                                    sx={{
                                        color: "#186FE7",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                    }}
                                    startAdornment={
                                        <FunctionsIcon color="primary" />
                                    }
                                >
                                    {" "}
                                    <MenuItem disabled value={"placeholder"}>
                                        <>A - Z</>
                                    </MenuItem>
                                    <MenuItem value={0}>A Complex</MenuItem>
                                    <MenuItem value={1}>Z Complex</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* <Complex />
            <Parking /> */}
        </>
    );
}

export default Confirmation;
