import React from 'react';
import AppNav from '../component/AppNav';

const Layout = (props) => {
    return (
        <div>
            <AppNav/>
            {props. children}
        </div>
    );
};

export default Layout;