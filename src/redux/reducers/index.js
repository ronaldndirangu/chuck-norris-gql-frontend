import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer']
};

const loginPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['token', 'name']
};

const rootReducer = combineReducers({
  loginReducer: persistReducer(loginPersistConfig, loginReducer)
});

export default persistReducer(persistConfig, rootReducer);
