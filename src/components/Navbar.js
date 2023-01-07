import { Button, Drawer, IconButton, SwipeableDrawer, Toolbar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

function Navbar({isMobile}){

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const scrollTo = (ref) => {
        const anchor = document.querySelector(ref);
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    

    const toggleDrawer = (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
        setIsDrawerOpen(!isDrawerOpen);
    };

    return <div className='toolbarcontainer'>
        {
            isMobile ?
            <div>
                <IconButton color='primary' onClick={toggleDrawer}><MenuIcon/></IconButton>
                <SwipeableDrawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer} onOpen={toggleDrawer}>
                    <Box sx={{width:250, backgroundColor:'#655a7cff', height:'100%'}} 
                    role="presentation"
                    >
                        <CustomLink to={"/reflection"} onClick={()=>scrollTo('#home')} className="navdrawer">Home</CustomLink>
                        
                        <CustomLink to={"/reflection/about"} onClick={()=>scrollTo('#about')} className="navdrawer">About</CustomLink>
                        
                        <CustomLink to={"/reflection/education"} onClick={()=>scrollTo('#education')} className="navdrawer">Education</CustomLink>
                        
                        <CustomLink to={"/reflection/experience"} onClick={()=>scrollTo('#experience')} className="navdrawer">Experience</CustomLink>
                    </Box>
                </SwipeableDrawer>
            </div>
            :
            <Toolbar className='toolbar'>
                <CustomLink to={"/reflection"} onClick={()=>scrollTo('#home')} className="navbar font-large">Home</CustomLink>
                
                <CustomLink to={"/reflection/about"} onClick={()=>scrollTo('#about')} className="navbar font-large">About</CustomLink>
                
                <CustomLink to={"/reflection/education"} onClick={()=>scrollTo('#education')} className="navbar font-large">Education</CustomLink>
                
                <CustomLink to={"/reflection/experience"} onClick={()=>scrollTo('#experience')} className="navbar font-large">Experience</CustomLink>
                <CustomLink to={"/reflection/projects"} onClick={()=>scrollTo('#projects')} className="navbar font-large">Projects</CustomLink>
                {/* <CustomLink to={"/reflection/others"} className="navbar">Others</CustomLink> */}
            </Toolbar>
        }
        
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