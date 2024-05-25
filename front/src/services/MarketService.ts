
const MarketService = {
    getCardInstanceBuyable : async (): Promise<> => {
        try {

            const token = localStorage.getItem('auth');
            const bearerToken = 'Bearer '+ token;


            const request = new Request('http://localhost:8080/api/v1/marketPlace', {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': bearerToken }),
            });

            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json()
                })
                .then(res => {
                    return res
                })
                .catch(() => {
                    throw new Error('Network error')
                });
        } catch (error) {
            throw error;
        }
    },

    buyCardInstanceBuyable : async (id: number): Promise<any> => {
        try {

            const token = localStorage.getItem('auth');
            const bearerToken = 'Bearer '+ token;
            const url = 'http://localhost:8080/api/v1/marketPlace/buy/'+id

            const request = new Request(url, {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': bearerToken }),
            });

            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json()
                })
                .then(res => {
                    return res
                })
                .catch(() => {
                    throw new Error('Network error')
                });
        } catch (error) {
            throw error;
        }
    },

    sellCardInstance : async (id: number): Promise<any> => {

        try {

            const token = localStorage.getItem('auth');
            const bearerToken = 'Bearer '+ token;
            const url = `http://localhost:8080/api/v1/marketPlace/sell/${id}`;

            const request = new Request(url, {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': bearerToken }),
            });

            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json()
                })
                .then(res => {
                    return res
                })
                .catch(() => {
                    throw new Error('Network error')
                });
        } catch (error) {
            throw error;
        }
    },
}


export default MarketService;