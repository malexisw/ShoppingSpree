import React, { useEffect} from 'react';
import { useLocation } from 'react-router';
import Categories from '../components/Categories';
import Data from '../components/Data';

const Gender = () => {
    const location = useLocation();
    let category = "categories="+location.pathname.substring(1);
    
    useEffect(() => {
        category = "categories="+location.pathname.substring(1);
     }, [location.pathname]);
    

    return (
        <section className='gender'>
            <Categories />
            <Data param={category}/>
        </section>
    );
};

export default Gender; 