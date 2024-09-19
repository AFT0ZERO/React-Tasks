
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);  // Handling the response
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);  // Handling the error
        setLoading(false);
      });
  }, []);


  return (
    <div>
     {loading && <p>Loading ......</p>}
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
     
    </div>
  );
}

export default Axios;
