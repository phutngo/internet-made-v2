export const getData = async (url, func) => {
    const request   = await fetch(url);
    const json      = await request.json();

    if(typeof func === 'function'){
        func(json);
    }

    return json;
};