import { NavigationActions} from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};


export const navigate = (routeName, params) => {
    //use the context of navigator to force the changing of the screen
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}
