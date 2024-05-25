const CardService = {
    getAll : async (): Promise<> => {
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

export default CardSeimport axios from "axios";
import {Card} from "@/models/Card";
import {CardInstance} from "@/models/CardInstance.ts";

export const fetchCards = async (): Promise<CardInstance[]> => {
    let token: string = `Bearer ${localStorage.getItem('auth')}`;
    console.log(token);

    try {
        const response = await axios.get('http://localhost:8080/api/v1/cardsInstances/currentuser', {
            headers: {
                'Authorization': token
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}; // to use: const cards = await fetchCards()

export const getCardDetails = async (id: number): Promise<Card> => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/cards/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}