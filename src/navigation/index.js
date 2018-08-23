import {
    createStackNavigator,
} from "react-navigation";

import Login from "../screens/login"
import Landing from "../screens/landing"
import PlanJourney from "../screens/planJourney"


const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Landing: Landing,
        PlanJourney: PlanJourney
    },
    {
        initialRouteName: "Login",
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        },
    }
);

export default AppNavigator