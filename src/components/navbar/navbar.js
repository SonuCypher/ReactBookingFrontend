import React from 'react'
import { AppBar,Typography } from "@mui/material";
import { appBarStyle,headingStyle,imageStyle} from "../../styles"
import stillsites from "../../images/memories.png";

function Navbar() {
    return (
        <AppBar sx={appBarStyle} position="static" color="inherit">
        <Typography sx={headingStyle} variant="h2" align="center">
          StillSites
        </Typography>
        <img styles={imageStyle} src={stillsites} alt="stillsites" height="60" />
      </AppBar>
    )
}

export default Navbar
