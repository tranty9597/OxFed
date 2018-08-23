import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet
} from "react-native";


import {
    ViewStyles,
    TextStyles,
    AppColor,
    InputStyles,

} from "../../styles";

class AppTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secureText: true,
            value: ""
        };
    }
    onChangeText(str) {
        switch (this.props.keyboardType) {
            case "numeric":
                // str = InputHelper.numberInputHelper(str);
                str = str.trim()
                break;
            case "phone-pad":
                str = InputHelper.numberInputHelper(str);
                str = InputHelper.phoneInputHelper(str);
                break;
        }
        this.setState({ value: str })
        this.props.onChangeText(str);
    }
    showHidePassHandler() {
        this.setState({ secureText: !this.state.secureText });
    }

    directEvent() {
        this.props.directEvent()
    }

    dropDownEvent() {
        this.props.dropDownEvent()
    }

    addEvent() {
        this.props.addEvent(this.state.value);
    }


    render() {
        let secureText = this.state.secureText && this.props.secureTextEntry;
        let inputComp = secureText ? <TextInput
            maxLength={this.props.maxLength}
            placeholderTextColor={this.props.placeholderStyle}
            autoFocus={this.props.autoFocus}
            multiline={this.props.multiline}
            numberOfLines={this.props.numberOfLines}
            editable={this.props.editable}
            onChangeText={str => this.onChangeText(str)}
            autoCapitalize={this.props.autoCapitalize}
            keyboardType={this.props.keyboardType}
            secureTextEntry={true}
            placeholder={this.props.placeholder}
            value={this.props.value}
            underlineColorAndroid="transparent"
            style={[TextStyles.mediumSize, styles.styleTextInput,]}
        /> : <TextInput
                maxLength={this.props.maxLength}
                placeholderTextColor={this.props.placeholderStyle}
                autoFocus={this.props.autoFocus}
                multiline={this.props.multiline}
                numberOfLines={this.props.numberOfLines}
                editable={this.props.editable}
                onChangeText={str => this.onChangeText(str)}
                autoCapitalize={this.props.autoCapitalize}
                keyboardType={this.props.keyboardType}
                secureTextEntry={false}
                placeholder={this.props.placeholder}
                value={this.props.value}
                underlineColorAndroid="transparent"
                style={[TextStyles.mediumSize, styles.styleTextInput, { color: "#000" }]}
            />
        return (
            <View style={[ViewStyles.containerFluid, { height: this.props.height, backgroundColor: AppColor.white, marginBottom: 20 }]}>
                <View
                    style={[
                        ViewStyles.containerFluid,
                        ViewStyles.flexCenterVertical,
                        styles.input
                    ]}
                >
                    {inputComp}

                    {(this.props.secureTextEntry && this.props.canShowPass) && (
                        <TouchableOpacity
                            onPress={() => { this.showHidePassHandler() }
                            }
                            style={{ position: "absolute", right: 7 }}
                        >
                            <Text style={[TextStyles.mediumSize, { color: AppColor.blue }]}>
                                {secureText ? "Show" : "Hide"}
                            </Text>
                        </TouchableOpacity>
                    )}

                </View>
                <View
                    style={[styles.errContainer, { height: this.props.errorText ? 40 : 20 }]}
                >
                    <Text style={[TextStyles.smallSize, { color: "red" }]}>{this.props.errorText}</Text>
                </View>
            </View>
        );
    }
}
AppTextInput.defaultProps = {
    autoCapitalize: "sentences",
    errorText: "",
    onChangeText: () => { },
    maxLength: 50,
    multiline: false,
    numberOfLines: 1,
    autoFocus: false,
    unitTitle: false,
    canShowPass: true
};
const styles = StyleSheet.create({
    input: {
        paddingRight: 40,
        paddingLeft: 10,
        height: "100%",
    },
    errContainer: {
        paddingLeft: 18,
        paddingTop: 10,
    },
    styleTextInput: {
        height: "100%"
    },
    rightIcon: {
        display: 'flex',
        position: "absolute",
        right: 15,
        width: 55,
        alignItems: 'flex-end',
    },
    leftIcon: {
        position: "absolute",
        left: 15
    }
})
export default AppTextInput;
