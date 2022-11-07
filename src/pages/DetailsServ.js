import React from 'react';
import { useParams } from 'react-router';

const DetailsServ = () => {
    const { id } = useParams();
    return (
        <div>
            {id}
        </div>
    );
};

export default DetailsServ;