import { auth,createOrGetUserProfileDocument } from '../firebase';
import React, { Component ,createContext} from 'react';
const initialUserState = {user:null,loading:false}
export const UserContext = createContext(initialUserState);
class UserProvider extends Component {
    state = initialUserState;

     componentDidMount = async ()=> { 
        // will be fired whenever you got from logged in to logger out or vice versa
        auth.onAuthStateChanged(async (userAuth) => {
            console.log('UserProvider->componentDidMount -> userAuth', userAuth)
            if (userAuth) { 
                const userRef = await createOrGetUserProfileDocument(userAuth)
                console.log('userRef', userRef);
                //Attach listner to listen to user chsnge in firestore
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        user: { uid: snapshot.id, ...snapshot.data() },
                        loading: false,
                    });
                });
            }
            this.setState({ user: userAuth, loading: false });
        });
    }
    render() {
        // const { user, loading } = this.state;
        // const { children } = this.props;
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider ;