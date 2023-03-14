import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
  
    return (

        <Link className={`hover:text-primary font-medium ${match? 'text-primary underline underline-offset-4 decoration-2': ''} bg-base-100 uppercase`}
            to={to}> {children} 
        </Link>

    );
};

export default CustomLink;