import React, {Component} from "react";
const {Provider, Consumer} = React.createContext();

class ThingContextProvider extends Component {
    state = {
        data: [ 
        {
            title: "Ugly and Creepy",
            description: "Creepy Spider",
            link: "https://images.unsplash.com/photo-1613682596280-b759eaa406a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHVnbHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Ugly view",
            description: "Ugly landfill of trash",
            link: "https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Mold",
            description: "Moldy gross lemons",
            link: "https://images.unsplash.com/photo-1591519374169-7aa492cac8fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9sZCUyMGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ]}
    
    getIndexOfThing = (title) => {
        let id;
        this.state.data.forEach(item => {
            if (item.title === title) {
                id = this.state.data.indexOf(item)
            }
        });
        return(id);
    }

    updateThing = (title, update) => {
        this.setState(prevState => (
            prevState.data[this.getIndexOfThing(title)] = update
        ))
    }

    removeThing = (title) => {
        this.getIndexOfThing(title) &&  this.setState(prevState => (
            prevState.data.splice(this.getIndexOfThing(title), 1)
        ));
    }

    addThing = (title, description, link) => {
        this.setState(prevState => {
            return prevState.data.push({title: title, description: description, link: link});
        })
    }
    
    render() {
        const state = this.state;
        const addThing = this.addThing;
        const removeThing = this.removeThing;
        const updateThing = this.updateThing;
        return (
            <Provider value={{state, addThing, removeThing, updateThing}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {ThingContextProvider, Consumer as ThingContextConsumer}