import {changeAvatarAction, changeNameAction} from "../actions/userActions";
import Avatar from "../components/Avatar";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function mapStateToProps(state) {
    return {
        user: {
            avatar: state.user.avatar,
            name: state.user.name
        }
    }
}

function mapDispatchToProps(dispatch) {
    // return {
    //     changeAvatar: (url) => dispatch(changeAvatarAction(url))
    // }
    return bindActionCreators({
        changeAvatar: changeAvatarAction,
        changeName: changeNameAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);