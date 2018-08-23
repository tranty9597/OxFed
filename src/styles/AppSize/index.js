import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export function caculateAppMaxWidth() {
    if (screenWidth < 600) {
        return screenWidth;
    } else if (screenWidth >= 600 && screenWidth < 700) {
        return screenWidth * 0.9;
    } else if (screenWidth >= 700 && screenWidth < 1000) {
        return screenWidth * 0.7;
    } else {
        return screenWidth * 0.6;
    }
}

export { screenHeight, screenWidth }