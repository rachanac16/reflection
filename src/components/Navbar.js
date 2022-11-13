import { Button, Toolbar } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';


function Navbar(){

    const scrollTo = (ref) => {
        const anchor = document.querySelector(ref)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }

    return <div className='toolbarcontainer'>
        <Toolbar className='toolbar'>
            <CustomLink to={"/reflection"} onClick={()=>scrollTo('#home')} className="navbar">Home</CustomLink>
            
            <CustomLink to={"/reflection/about"} onClick={()=>scrollTo('#about')} className="navbar">About</CustomLink>
            
            <CustomLink to={"/reflection/education"} onClick={()=>scrollTo('#education')} className="navbar">Education</CustomLink>
            
            <CustomLink to={"/reflection/experience"} onClick={()=>scrollTo('#experience')} className="navbar">Experience</CustomLink>
            {/* <CustomLink to={"/reflection/others"} className="navbar">Others</CustomLink> */}
        </Toolbar>
        
    </div>;
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true});
    return <div className={isActive? 'active':''}>
            <Link to={to} {...props}>{children}</Link>
        </div>;
}

export default Navbar;