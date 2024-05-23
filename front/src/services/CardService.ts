import {Card} from "@/models/Card";

export const fetchCards = async (): Promise<any> => {
    let token: string = `Bearer ${localStorage.getItem('auth')}`;
    return fetch('http://localhost:8080/api/v1/cardsInstances/currentuser')
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json().then((cardInstances: any) => cardInstances.map((cardInstance: any) => cardInstance.card));
        })
        .catch(() => {
            throw new Error('Network error')
        });
}; // to use: const cards = await fetchCards()

export const getCardDetails = async (id: number): Promise<Card> => {
    try {
        /*const response = await axios.get(`http://localhost:8080/api/v1/cards/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        });
        return response.data;*/
        return {};
    } catch (error) {
        throw error;
    }
}

const CardService = {
    getAll : async (): Promise<any> => {
        try {

            const token = localStorage.getItem('auth');
            const bearerToken = 'Bearer '+ token;


            const request = new Request('http://localhost:8080/api/v1/cards/get', {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': bearerToken }),
            });

            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .catch(() => {
                    throw new Error('Network error')
                });
        } catch (error) {
            throw error;
        }
    },
}

export default CardService;