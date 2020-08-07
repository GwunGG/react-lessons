const AddPost="ADD-POST";
const UpdateAreaText="UPDATE-AREA-TEXT"
const AddMessage="ADD-MESSAGE"
const MessageAreaChange="MESSAGE-AREA-CHANGE"
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
        if(action.type===AddPost){
            let newPost={
                id:5,
                message:this._state.Profile.NewPostText,
                likesCount:0
            };
            this._state.Profile.PostData.push(newPost);
            this._state.Profile.NewPostText='';
            this.rerenderAllTree();
        } else if(action.type===UpdateAreaText){
            this._state.Profile.NewPostText=action.newtext;
            this.rerenderAllTree();
        }

        if(action.type===AddMessage){
            let NewMessage ={
                id:0,
                message:this._state.Dialogs.MessageText
            }
            this._state.Dialogs.MessagesData.push(NewMessage);
            this._state.Dialogs.MessageText='';
            this.rerenderAllTree();
        }else if(action.type===MessageAreaChange){
            this._state.Dialogs.MessageText=action.someText;
            this.rerenderAllTree();
        }
    }
}

export const actionCreatorAddPost = ()=>{
    return{
        type: "ADD-POST"
    }
}
export const actionCreatorOnPostChange=(gettext)=>{
    return{
        type:"UPDATE-AREA-TEXT",
        newtext:gettext
    }
}
export const actionCreatorAddMessage =()=>{
    return{
        type:"ADD-MESSAGE"
    }
}
export const actionMessageAreaChange =(text)=>{
    return{
        type:"MESSAGE-AREA-CHANGE",
        someText:text
    }
}
export default store;