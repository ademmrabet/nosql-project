import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import axios from 'axios';

const LandingPage = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const executeCode = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/execute', { code });
            setResult(JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.error("Full error:", error);
            setResult(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                    <Typewriter
                        options={{
                            strings: ['Welcome to the Keyboard Management System!', 'Interrogate your MongoDB database with ease.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter your MongoDB query here..."
                    style={{
                        width: '100%',
                        height: '150px',
                        padding: '10px',
                        fontSize: '1rem',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginBottom: '10px',
                    }}
                />
                <button
                    onClick={executeCode}
                    disabled={isLoading}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    {isLoading ? 'Executing...' : 'Execute Code'}
                </button>
            </div>

            <div>
                <h2>Result:</h2>
                <pre
                    style={{
                        backgroundColor: '#f5f5f5',
                        padding: '15px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        overflowX: 'auto',
                    }}
                >
                    {result || 'Results will appear here...'}
                </pre>
            </div>
        </div>
    );
};

export default LandingPage;