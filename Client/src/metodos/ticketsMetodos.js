import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const GetTicketsMethod = async ({ loading, error, success }) => {
    try {
        loading(true);
        const token = await AsyncStorage.getItem('Token');
        const response = await axios.get("/api/getuser-tickets", 
        {
            'Content-Type': 'application/json',
            headers: {Authorization: "Bearer " + token}
        });
        success(response.data);
        loading(false);
    } catch (err) {
        console.error('GetTicketsMethod', err);
            error(err.message);
            loading(false);
        }
};

export const CreateTicketMethod = async ({ticket, loading, error, success}) => {
    try {
        loading(true);
        const token = await AsyncStorage.getItem('Token');
        const response = await axios.post("/api/open-ticket", ticket, 
        {headers: 
            { 
             "Content-Type": "application/json",
                Authorization: "Bearer " + token}});
        success(response.data);
        loading(false);
    } catch (err) {
        console.error('CreateTicketMethod', err);
        error(err.message);
        loading(false);
    }
}

export const ReplyTicketMethod = async ({body, loading, error, setTickets}) => {
    try {
        loading(true)
        const token = await AsyncStorage.getItem('Token');
        const response = await axios.put("/api/resp-ticket", body, {headers: 
            { 
                "Content-Type": "application/json",
                Authorization: "Bearer " + token}}
            );
            setTickets(response.data.payload);
            loading(false)
    } catch (err) {
        console.log("este es el error", body)
        console.error("ReplyTicketMethod", err);
        error(err.message);
        loading(false)
    }
} 