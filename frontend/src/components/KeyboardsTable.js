import React, { useEffect, useState } from 'react';
import { getKeyboards } from "../services/api";

const KeyboardsTable = () => {
    const [keyboards, setKeyboards] = useState([]);

    useEffect(() => {
        const fetchKeyboards = async () => {
            try {
                const response = await getKeyboards();
                console.log("API Response:", response); // Log the response

                // Check if the response has a `data` property and it's an array
                if (response.data && Array.isArray(response.data)) {
                    setKeyboards(response.data); // Set the `data` array to keyboards
                } else {
                    console.error("Expected an array in 'data', but got:", response);
                    setKeyboards([]); // Set to empty array if data is invalid
                }
            } catch (error) {
                console.error("Error fetching keyboards:", error);
            }
        };
        fetchKeyboards();
    }, []);

    return (
        <div>
            <h2>Keyboards</h2>
            {Array.isArray(keyboards) && keyboards.length > 0 ? (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Barcode</th>
                            <th>Language</th>
                            <th>Buy Date</th>
                            <th>Distribution Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {keyboards.map((keyboard) => (
                            <tr key={keyboard._id}>
                                <td>{keyboard.barcode}</td>
                                <td>{keyboard.keyboard_lan}</td>
                                <td>{keyboard.buy_date}</td>
                                <td>{keyboard.distribution_date}</td>
                                <td>{keyboard.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No keyboards found or data is invalid.</p>
            )}
        </div>
    );
};

export default KeyboardsTable;