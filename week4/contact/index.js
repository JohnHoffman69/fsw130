const redux = require("redux");

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {
    count: 0,
    allContacts: [],
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_CONTACT":
            return {
                ...state,
                allContacts: [...state.allContacts, action.payload]
            }
        case "REMOVE_CONTACT": 
            const updatedArr = state.allContacts.filter(contact => contact.name !== action.payload)
            return {
                ...state,
                allContacts: updatedArr
            }    
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({
    name: "James Kirk", 
    phone: "557-827-8735",
    email: "jkirk@United Federation of Planets.space"
}))

store.dispatch(addContact({
    name: "S'chn Spok", 
    phone: "777-827-8735", 
    email: "sspock@United Federation of Planets.space"
}))

store.dispatch(addContact({
    name: "Leonard McCoy", 
    phone: "567-827-8735", 
    email: "lmccoy@United Federation of Planets.space"
}))

store.dispatch(removeContact("Leonard McCoy"))