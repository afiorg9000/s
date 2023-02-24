import { createStore, combineReducers } from 'redux';
import virtualReplicaReducer from './reducers/virtualReplicaReducer';
import clothingItemReducer from './reducers/clothingItemReducer';

const rootReducer = combineReducers({
    virtualReplica: virtualReplicaReducer,
    clothingItems: clothingItemReducer,
});

const store = createStore(rootReducer);

export default store;