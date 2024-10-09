const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const url = event.path.slice(1); // Remove leading slash
    const body = JSON.parse(event.body);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const responseData = await response.json();
        return {
            statusCode: response.status,
            body: JSON.stringify(responseData),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching the URL' }),
        };
    }
};
