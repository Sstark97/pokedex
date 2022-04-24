import ReactDOM from 'react-dom/client';
import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './redux/Pokemon/pokemon.reducer';
import './index.css';
import App from './containers/App';


const rootReducer = combineReducers({
  pokemonReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);