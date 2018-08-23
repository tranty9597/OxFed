import React, { Component } from 'react';

import { View, Image, StyleSheet } from "react-native"

import { AppKeyboardView, AppTextInput, AppButton } from "../../components"
import { ViewStyles, AppColor, TextStyles } from '../../styles';

const heightComponent = 55

class Login extends Component {
    render() {
        return (
            <AppKeyboardView contentStyle={ViewStyles.flexCenter} >
                <View style={[styles.container, ViewStyles.flexCenter]}>
                    <Image style={[styles.logo]} source={require("../../assets/images/logo/logo.png")} />

                    <AppTextInput
                        height={heightComponent}
                        placeholder="username"
                    />

                    <AppTextInput
                        height={heightComponent}
                        placeholder="password"
                    />
                    <AppButton
                        onPress={() => this.props.navigation.push("Landing")}
                        height={heightComponent}
                        bgColor={AppColor.blue}
                        textStyle={[TextStyles.mediumSize, { color: AppColor.white }]}
                        title="LOG IN"
                    />
                </View>

            </AppKeyboardView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingLeft: 50,
        paddingRight: 50
    },
    logo: {
        width: 275,
        height: 110,
        marginBottom: 20,
    }
})

export default Login