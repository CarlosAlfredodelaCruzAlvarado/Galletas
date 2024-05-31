"use client";

import React, { useEffect, useState } from 'react';

interface Data {
    message: string;
}

const Page: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL || 'https://localhost:44322/api';
        fetch(`${apiUrl}/My/GetData`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>React and ASP.NET Core</h1>
            {data ? <p>{data.message}</p> : <p>No data found.</p>}
        </div>
    );
}

export default Page;
