import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import queryString from 'query-string'

export const GetServicesSearch = async ({query, loading, error,success}) => {
	try {
		const stringQuery = queryString.stringify(query)
		console.log(query);
		loading(true)
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.get(`/api/service/byProfession?${stringQuery}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    success(response.data.payload);
    loading(false);
	} catch (error) {
		console.log(error);
	}
}