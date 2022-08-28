import fetch from 'axios';
let Data = async (username) => {
    switch (username) {
        case '':
            break;
    
        default:
            let res =  await fetch(`https://api.github.com/search/users?q=${username}&per_page=100`, { 
                headers: {
                    'Accept' : 'application/vnd.github.v3+json',
                    // 'Authorization' : 'token <removed after testing>'
                }
            });
            return res.data;
    }
};

let Single = async(data) => {
    const response = await fetch(`https://api.github.com/users/${data}`, { 
        headers: {
            'Authorization' : 'token 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'
        }
    });
    return response.data;
}

export default {Data, Single};