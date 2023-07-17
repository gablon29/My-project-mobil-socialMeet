import React from 'react';
import { SelectAdres } from './SelectAdres';
import { useNavigation } from '@react-navigation/native';
import { Cart } from './Cart';
import { Button } from 'react-native';

export const Checkout = () => {
  const [steps, setSteps] = useState(0);
  const cart = useSelector((state) => state.ReducerCart.cart);
  const navigation = useNavigation();
  const profile = useSelector((state) => state.ReducerAuth.profile);

  const finishBuy = () => {};

  return (
    <>
      {steps === 0 ? <SelectAdres setStepsetSteps={setSteps} cart={cart} /> : steps === 1 ? <Cart cart={cart} /> : null}

      <View className="mt-5">
        <TouchableOpacity className="w-64 h-12 mx-auto rounded-xl bg-naranja justify-center items-center my-4" onPress={steps === 0 ? setSteps(1) : finishBuy()}>
          <Text className="text-sm text-center text-white font-poppinsSemiBold">{steps === 0 ? 'Siguiente' : 'Comprar'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
