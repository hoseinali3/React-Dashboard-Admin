
import React from 'react'
import { styled } from '@mui/material/styles';
import {  Tooltip, tooltipClasses } from '@mui/material';



    const CustomFontTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
        ))({
            [`& .${tooltipClasses.tooltip}`]: {
                fontFamily: "B-yekan",
            },
        });
        
        


export default CustomFontTooltip
