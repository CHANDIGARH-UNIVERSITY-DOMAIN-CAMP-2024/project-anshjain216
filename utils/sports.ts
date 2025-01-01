const headers = {
    'x-rapidapi-key': "29ac37c149msh13826fdddb83388p1aa0adjsn44f7f582afc0",
    'x-rapidapi-host': "sportapi7.p.rapidapi.com",
    'Content-Type': 'application/json', // Optional, depending on the API you're calling
};

const url = "https://sportapi7.p.rapidapi.com/api/v1/sport"

export const fetchSports = async (text?: string) => {
    try {
        const category = text ? text : "cricket"
        const response = await fetch(`${url}/${category}/events/live`, {
            method: "GET",
            headers: headers,
        });

        return await response.json();
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch sports data")
    }
}