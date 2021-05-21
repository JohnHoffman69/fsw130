import redux, {createStore} from 'redux';
import {contactReducer} from './contacts';
const store = createStore(contactReducer)
store.subscribe(() => console.log(store.getState()))

// Export the store.
export default store