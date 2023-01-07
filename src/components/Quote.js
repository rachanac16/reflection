import { Typography } from "@mui/material";
import {React} from "react";

export default function Quote(){
    return <div style={{width:"100%", backgroundColor:"white", color:"black", padding:"100px"}}>
        <Typography variant="h3" align="center" className="text-style">
            "Hi I said something I will put here and try to impress you"
        </Typography>
    </div>
}