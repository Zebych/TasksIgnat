import React from 'react';

type RequestAPIProps = {
    errorMessage?: string,
}
const RequestApi = (props: RequestAPIProps) => {
    return (
        <div>
            <h1>{props.errorMessage}</h1>
        </div>
    );
};

export default RequestApi;