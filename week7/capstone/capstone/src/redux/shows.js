export const addShow = title => {
    return {
        type: "ADD_SHOW",
        payload: title
    }
}

export const removeShow = title => {
    return {
        type: "REMOVE_SHOW",
        payload: title
    }
}

export const getShows = () => {
    return {
        type: "GET_SHOWS"
    }
}

const initialState = ["Doom at Your Service", "Crash Landing", "The King", "She is the One", "Love in Time", "Miss the Dragon"];

export const showsReducer = (shows = initialState, action) => {
    switch(action.type) {
        case "ADD_SHOW":
            return [...shows, action.payload];
        case "REMOVE_SHOW":
            return shows.filter(show => show !== action.payload);
        case "GET_SHOWS":
            return shows;
        default:
            return shows;
    }
}