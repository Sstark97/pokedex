import ReactDOM from 'react-dom/client';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './redux/Pokemon/pokemon.reducer';
import { log } from './middlewares/log'
import './index.css';
import App from './containers/App';


const rootReducer = combineReducers({
  pokemonReducer
});

const composeEnhancers = compose((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(log)));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);