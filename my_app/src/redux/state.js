import DialogsReducer from "./Dialogs-reducer.js";
import ProfileReducer from "./Profile-Reducer.js";
import NameDataReducer from "./NameData-reducer.js";
let store = {
    _state:{
        Profile:{
            PostData:[
                {id: 1, message:"How are you", likesCount:0},
                {id: 2, message:"hello", likesCount:4},
                {id: 3, message:"be", likesCount:2},
                {id: 4, message:"brr", likesCount:6}],
            NewPostText:'Hello'
        },
        Dialogs:{
            DialogsData:[{id: 1, name : "Hleb"},
                        {id: 2, name:"Kosty"},
                        {id: 3, name:"An9"},
                        {id: 4, name:"Kol9"}],
            MessagesData:[
                        {id: 1, message:"ku"},
                        {id: 2, message:"hello"},
                        {id: 3, message:"be"},
                        {id: 4, message:"brr"}],
            MessageText :'Hello'
        },
        NameData :{
            FriendInfo: [
                { name: 'Koly', },
                { name: 'Kosty',},
                { name: 'Gleb'}
                ]
            },
    },
    rerenderAllTree(){
        console.log('FuckGG');
    },
    subscribe(observe){
        this.rerenderAllTree=observe;
    },
    getState(){
        return this._state; 
    },

    dispatch(action){   
        this._state.Profile=ProfileReducer(this._state.Profile, action);
        this._state.Dialogs=DialogsReducer(this._state.Dialogs, action);
        this._state.NameData=NameDataReducer(this._state.NameData, action);
        this.subscribe(this._state);
    }
}


export default store;