import React from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';

export default function Home(){
    const params = useParams();

    return (
        <div>
            <h2>this is home page</h2>
        </div>
    )
}
