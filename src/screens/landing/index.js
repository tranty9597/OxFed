import React, { Component } from 'react';

import { View, Image, StyleSheet, Text, Alert } from "react-native"

import { AppImageBackground, AppButton } from "../../components"
import { ViewStyles, AppColor, TextStyles } from '../../styles';

const heightComponent = 60

class Landing extends Component {
    render() {
        return (
            <AppImageBackground >
                <View style={[ViewStyles.container, ViewStyles.flexCenter, styles.container]}>
                    <Image style={[styles.logo]} source={require("../../assets/images/logo/logo.png")} />

                    <Text style={[ViewStyles.container, TextStyles.mediumSize, TextStyles.alignCenterText, { color: AppColor.blue, marginBottom: 15 }]}>
                        Your next ride is on 9 August 2018 to Botley Medical Centre
                    </Text>
                    <AppButton
                        onPress={() => this.props.navigation.push("PlanJourney")}
                        height={heightComponent * 1.6}
                        title="NEW JOURNEY"
                        bgColor={AppColor.blue}
                        textStyle={{
                            color: "#D3EDE8", fontSize: 30, fontWeight: '500',
                        }}
                    />

                    <AppButton
                        onPress={() => this.props.navigation.push("PlanJourney")}
                        height={heightComponent}
                        textStyle={{
                            color: AppColor.gray, fontSize: 20, fontWeight: '500',
                        }}
                        title="UPCOMING JOURNEYS"
                    />
                    <AppButton
                        onPress={() => Alert.alert("Setting", "Onpress sucessfully!")}
                        height={heightComponent}
                        textStyle={{
                            color: AppColor.gray, fontSize: 20, fontWeight: '500',
                        }}
                        title="SETTINGS"
                    />
                </View>

            </AppImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 30,
    },
    logoContainer: {

    },
    logo: {
        width: 275,
        height: 110,
        marginBottom: 20,
    }
})

export default Landing