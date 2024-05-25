
const UserService = {
    getUserCash : async (): Promise<> => {
        try {

            const token = localStorage.getItem('auth');
            const bearerToken = 'Bearer '+ token;


            const request = new Request('http://localhost:8080/api/v1/user/current', {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': bearerToken }),
            });

            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json().then( i=> i.cash);
                })
                .catch(() => {
                    throw new Error('Network error')
                });
        } catch (error) {
            throw error;
        }
    },
    getUser : async (): Promise<> => {
        try {

            const token = localStorage.getItem('auth');
            const bearerToken = 'Bearer '+ token;


            const request = new Request('http://localhost:8080/api/v1/user/current', {
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
                .catch(() => {
                    throw new Error('Network error')
                });
        } catch (error) {
            throw error;
        }
    }
}


export default UserService;