import axios from "axios"

export const getChip = async ({ item, loading, error, success }) =>{
    try {
        loading(true);
        const response = await axios.post(
          "https://dashboard.stripe.com/v1/products/prod_ODLaCJVZYdeqvM",
          {
            default_price: item,
          },
          {
            headers: {
              Authorization:
                "Bearer sk_test_51NNLCpD6q36zl0Ib9bzWPLvXai9SE15p34hbHwXkiqCYVfQCDd4SOXK0dsoPA7xGXSPKFljW1gm3a1TFbfF66Taj00KsEMdevs",
            },
          }
        );
        success(response.data)
        loading(false)
        
      } catch (error) {
        loading(false);
        error(error.message)
        // Manejar el error aquí
        console.error(error);
      }
    };
    