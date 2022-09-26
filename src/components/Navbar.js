import { Toolbar } from '@mui/material';
import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

function Navbar(){
    return <div>
        <Toolbar className='toolbar'>
            <CustomLink to={"/reflection"} className="navbar">Home</CustomLink>
            <CustomLink to={"/reflection/about"} className="navbar">About</CustomLink>
            <CustomLink to={"/reflection/experience"} className="navbar">Experience</CustomLink>
            <CustomLink to={"/reflection/others"} className="navbar">Others</CustomLink>
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