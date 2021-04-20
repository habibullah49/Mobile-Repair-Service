import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div>
            <div class="error-template">
                <h2>404 Not Found</h2>
                <h3><Link to="/home">Back to Home</Link></h3>
            </div>
        </div>
    );
};

export default NoMatch;