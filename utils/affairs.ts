let url = "https://newsdata.io/api/1/latest?apikey=pub_638542ad25922ade974c55434592694722755&country=in"

export const fetchAffairs = async (text?: string) => {
    try {
        if (text) {
            url += `&q=${text}`;
        }   
        const response = await fetch(url, {
            method: "GET",
        });

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}