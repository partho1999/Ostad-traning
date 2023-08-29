import React from 'react';
import getCookie from '../lib/cookieAPI';

const read = async () => {

    const cookie = await getCookie();
    console.log(cookie)

    return (
        <div>
            <p>{cookie}</p>
        </div>
    );
};

export default read;