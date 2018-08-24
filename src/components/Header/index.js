import React from "react";
import {
    View,
    StatusBar,
    StyleSheet,
    Dimensions,
    Image,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import PropTypes from "prop-types";

import { ViewStyles, TextStyles, AppColor } from "../../styles";
const { height: screenHeight } = Dimensions.get("window");

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    _onPressLeftIcon() {
        Keyboard.dismiss();
        this.props.leftIconOnPress();
    }

    _onPressRightIcon() {
        Keyboard.dismiss();
        this.props.rightIconOnPress();
    }

    render() {
        let { showLeftIcon, showRightIcon, headerTitle, increaseMarginTop } = this.props;
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View
                    style={[
                        styles.container,
                        { paddingTop: Platform.OS === "ios" ? 20 : 0 }
                    ]}
                >
                    <View style={[ViewStyles.flexCenter,
                    ViewStyles.flexDirectionRow,]}>

                        <StatusBar backgroundColor={AppColor.blue} translucent={true} />
                        {showLeftIcon && (
                            <TouchableOpacity
                                onPress={() => this._onPressLeftIcon()}
                                style={[styles.iconLeft, ViewStyles.flexCenterVertical,]}
                            >
                                <Image style={styles.icon} source={this.props.lefIcon} />
                            </TouchableOpacity>
                        )}

                        <Image style={styles.logo} source={require("../../assets/images/whiteLogo/whiteLogo.png")} />
                        {showRightIcon && (
                            <TouchableOpacity
                                onPress={() => this._onPressRightIcon()}
                                style={[styles.iconRight, ViewStyles.flexCenterVertical]}
                            >
                                <Image style={styles.icon} source={this.props.rightIcon} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Header.defaultProps = {
    headerTitle: "Header Title",
    showLeftIcon: true,
    showRightIcon: true,
    rightIcon: require("../../assets/images/setting/setting.png"),
    lefIcon: require("../../assets/images/home/home.png"),
    leftIconOnPress: () => { },
    rightIconOnPress: () => { },
    increaseMarginTop: 10
};

Header.propTypes = {
    headerTitle: PropTypes.string,
    showLeftIcon: PropTypes.bool,
    showRightIcon: PropTypes.bool,
    leftIconOnPress: PropTypes.func,
    rightIconOnPress: PropTypes.func,
    rightIcon: PropTypes.any,
    lefIcon: PropTypes.any
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.blue,
        height: screenHeight * 0.8,
        maxHeight: 60,
        width: "100%",
        position: "relative"
    },
    header: {
        color: "#fff"
    },
    icon: {
        width: 26,
        height: 24,
    },
    logo: {
        width: 87,
        height: 35,
    },
    iconLeft: {
        position: "absolute",
        left: 15,
        width: "15%",
        height: '100%',
    },
    iconRight: {
        width: "15%",
        height: '100%',
        position: "absolute",
        right: 15,
        alignItems: "flex-end"
    }
});

export default Header;
