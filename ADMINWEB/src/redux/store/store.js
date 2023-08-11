import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducerAuth from '../reducer/reducerAuth';
import reducerUsuarios from '../reducer/reducerUsuarios';
import reducerProfesionales from '../reducer/reducerProfesionales'

const rootReducer = combineReducers({
  reducerAuth,
  reducerUsuarios,
  reducerProfesionales,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };