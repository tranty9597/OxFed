import { StyleSheet, Platform } from "react-native"
import AppColor from "../Color"

const AppFont = "Avenir";
const AppBoldFont = "Avenir";

const TextStyles = StyleSheet.create({
    appFont: {
        fontFamily: AppFont,
    },
    boldFont: {
        fontFamily: AppBoldFont
    },

    //=============
    whiteText: {
        color: AppColor.white
    },
    blackText: {
        color: AppColor.black
    },
    shadowText: {
        color: AppColor.shadow
    },
    //=============
    normalWeigth: {
        fontWeight: "400"
    },
    highWeigth: {
        fontWeight: "600"
    },
    boldText: {
        fontWeight: 'bold',
    },

    //=============
    titleText: {
        fontFamily: AppBoldFont,
        fontSize: 19,
        fontWeight: Platform.OS === "ios" ? "700" : "400"
    },
    buttonTitle: {
        fontFamily: AppBoldFont,
        fontSize: 25,
        fontWeight: Platform.OS === "ios" ? "700" : "400",
        color: "#777777",
    },
    largeSize: {
        fontFamily: AppFont,
        fontSize: 18
    },
    mediumSize: {
        fontFamily: AppFont,
        fontSize: 16
    },
    smallSize: {
        fontFamily: AppFont,
        fontSize: 14
    },
    smallSizeNumber: {
        fontFamily: AppFont,
        fontSize: 12
    },
    largeTitle: {
        fontFamily: AppFont,
        fontSize: 26,
        // fontWeight: "500",
    },
    alignCenterText: {
        textAlign: "center"
    },
    alignLeftText: {
        textAlign: "left"
    }
});

export default TextStyles