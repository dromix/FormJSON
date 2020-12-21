export async function postData(url: string, data: string) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: data
    });

    return await res.json();
}
