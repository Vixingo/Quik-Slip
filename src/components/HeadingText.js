import { Typography } from "@mui/material";
import React from "react";

function HeadingText(props) {
    return (
        <>
            <Typography
                sx={{
                    fontSize: "20px",
                    color: "#282828",
                    fontWeight: "500",
                }}
            >
                {props.main}
            </Typography>
            <Typography
                sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#282828",
                    mb: 5,
                }}
            >
                {props.sub}
            </Typography>
        </>
    );
}

export default HeadingText;
