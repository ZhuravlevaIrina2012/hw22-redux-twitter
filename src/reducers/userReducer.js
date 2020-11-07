import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";

export default function userReducer(state =
               {avatar: 'https://bipbap.ru/wp-content/uploads/2017/07/1445775778_youloveit_ru_dove_camerone_fotografii_avatarki14.jpg',
                name: 'Girl'}, action) {
    const user = {...state};
    switch (action.type) {
        case CHANGE_AVATAR:
            user.avatar = action.payload || user.avatar;
            return {...user};
        case CHANGE_NAME:
            user.name = action.payload || user.name;
            return {...user};
        default:
            return state;
    }
}