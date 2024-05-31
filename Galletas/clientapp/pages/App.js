import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://localhost:5001/api/MyController/GetData')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>React and ASP.NET Core</h1>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
}

export default App;
