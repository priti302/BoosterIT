const API_URL = "http://localhost:5000/api/stream";

export const streamService = {
    async getLiveStream() {
        const response = await fetch(`${API_URL}/live`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to fetch live stream");
        return data;
    },

    async goLive(token: string) {
        const response = await fetch(`${API_URL}/go-live`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to go live");
        return data;
    },

    async endLive(token: string) {
        const response = await fetch(`${API_URL}/end-live`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to end live stream");
        return data;
    },
};
