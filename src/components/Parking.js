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
import GroupIcon from "@mui/icons-material/Group";
import AccessibleIcon from "@mui/icons-material/Accessible";
import BungalowIcon from "@mui/icons-material/Bungalow";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FunctionsIcon from "@mui/icons-material/Functions";
function Parking() {
    const [age, setAge] = React.useState("placeholder");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
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
                                    value={age}
                                    label="Parking System"
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
        </>
    );
}

export default Parking;
