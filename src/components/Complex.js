import React from "react";
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
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HeadingText from "./HeadingText";
import PlaceIcon from "@mui/icons-material/Place";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TaskIcon from "@mui/icons-material/Task";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
function Complex({ formData, setFormData }) {
    return (
        <>
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
        </>
    );
}

export default Complex;
