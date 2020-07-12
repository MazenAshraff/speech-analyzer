global.fetch = require('node-fetch');
const postData = async(url, data) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)


    });
    console.log(response);
    return response;

}


export { postData }