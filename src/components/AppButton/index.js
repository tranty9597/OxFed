import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image
} from "react-native";

import {
    ViewStyles,
    TextStyles,
    caculateAppMinHeight,
    InputStyles,
    caculateAppMaxHeight,
    AppColor
} from "../../styles";

const { height: screenHeight } = Dimensions.get("window");

class AppButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { showLeftIcon, showRightIcon, showTitle, disabled, disabledColor, isActive } = this.props;
        return (
            <View style={[ViewStyles.flexCenter, { width: "100%", marginBottom: 20 }]}>
                <TouchableOpacity
                    disabled={disabled}
                    onPress={this.props.onPress}
                    style={[
                        {
                            backgroundColor: disabled ? disabledColor : this.props.bgColor,
                            width: "100%",
                            height: this.props.height,
                            borderColor: "transparent",
                            borderWidth: 0
                        },
                        ViewStyles.flexCenter,
                        this.props.containerStyle
                    ]}
                >
                    <View style={[ViewStyles.flexDirectionRow, ViewStyles.flexCenter,]}>
                        {showLeftIcon && (
                            <Image style={{ marginRight: 15 }} source={this.props.leftIcon} />
                        )}
                        {showTitle && (
                            <Text style={[this.props.textStyle]}>{this.props.title}</Text>
                        )}
                        {showRightIcon && (
                            <Image style={{ marginLeft: 15 }} source={this.props.rightIcon} />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

AppButton.defaultProps = {
    disabledColor: AppColor.disable,
    title: "Button",
    showLeftIcon: false,
    showRightIcon: false,
    showTitle: true,
    disabled: false,
    textStyle: TextStyles.buttonTitle,
    bgColor: AppColor.white
};

export default AppButton;
