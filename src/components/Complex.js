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
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
function Complex() {
    const [age, setAge] = React.useState("placeholder");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Container maxWidth={"md"} sx={{ marginTop: "100px" }}>
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
                                    value={age}
                                    label="Gated or Open Complex"
                                    onChange={handleChange}
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
                                        <LocalParkingIcon color="primary" />
                                    }
                                >
                                    {" "}
                                    <MenuItem disabled value={"placeholder"}>
                                        <>Selected Gated or Open Complex</>
                                    </MenuItem>
                                    <MenuItem value={0}>Gated Complex</MenuItem>
                                    <MenuItem value={1}>Open Complex</MenuItem>
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
                                    border: "1px dashed #186FE7",
                                    borderRadius: "8px",
                                    width: "100%",
                                    padding: "20px",
                                    "&:hover": {
                                        backgroundColor: "#f9f9f9",
                                    },
                                }}
                            >
                                <input hidden accept="image/*" type="file" />
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
                                    Drop or click to upload your image here
                                    <Typography sx={{ fontSize: "10px" }}>
                                        Supports JPEG, PNG
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Complex;
