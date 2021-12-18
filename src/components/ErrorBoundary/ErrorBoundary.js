import React from 'react';

const ErrorBoundary = (props) => {
    if (props.name !== 'Zaid'){
        throw new Error('Something Went Wrong')
    }
    return (
        <div>
            {props.name}
        </div>
    );
};

export default ErrorBoundary;