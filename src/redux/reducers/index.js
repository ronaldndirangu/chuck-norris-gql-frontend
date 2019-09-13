import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import jokeReducer from './jokeReducer';
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
  blacklist: ['token']
};

const rootReducer = combineReducers({
  loginReducer: persistReducer(loginPersistConfig, loginReducer),
  jokeReducer
});

export default persistReducer(persistConfig, rootReducer);
