import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function TestApiPage() {
  const [getResponse, setGetResponse] = useState(null);
  const [postResponse, setPostResponse] = useState(null);
  const [postData, setPostData] = useState('');

  const handleGetTest = async () => {
    try {
      const response = await fetch(`${API_URL}/api/test`);
      const data = await response.json();
      setGetResponse(data);
    } catch (error) {
      console.error('Error fetching GET /api/test:', error);
      setGetResponse({ error: 'Failed to fetch' });
    }
  };

  const handlePostTest = async () => {
    try {
      const response = await fetch(`${API_URL}/api/test`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: postData }),
      });
      const data = await response.json();
      setPostResponse(data);
    } catch (error) {
      console.error('Error fetching POST /api/test:', error);
      setPostResponse({ error: 'Failed to fetch' });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Test API Endpoints</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">GET /api/test</h2>
        <button onClick={handleGetTest} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Test GET
        </button>
        {getResponse && (
          <pre className="bg-gray-800 p-4 rounded mt-2">
            {JSON.stringify(getResponse, null, 2)}
          </pre>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">POST /api/test</h2>
        <input
          type="text"
          value={postData}
          onChange={(e) => setPostData(e.target.value)}
          className="bg-gray-700 p-2 rounded mr-2"
          placeholder="Enter data to post"
        />
        <button onClick={handlePostTest} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Test POST
        </button>
        {postResponse && (
          <pre className="bg-gray-800 p-4 rounded mt-2">
            {JSON.stringify(postResponse, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default TestApiPage;