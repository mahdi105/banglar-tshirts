import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div>
            <h1>This Home</h1>
        </div>
    );
};

export default Home;