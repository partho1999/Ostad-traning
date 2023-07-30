import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import BlogList from '../component/BlogList';
import { postLatests } from '../APIRequest/APIRequest';
import Loader from '../Component/Loader';

const HomePage = () => {

    const [list, setList]=useState(null);
    console.log(list)
    useEffect(()=>{
        (async()=>{
            let res= await postLatests()
            setList(res)
        })()
    },[])
    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}/>}
            
        </Layout>
    );
};

export default HomePage;