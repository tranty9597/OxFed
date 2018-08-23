import React from "react";

import {
    ImageBackground,
    View,
    StyleSheet
} from "react-native";

import AppKeyboardAwareScrollView from "../KeyboardAwareView"

class AppKeyBoardView extends React.Component {

    render() {
        let { scrollEnabled } = this.props;
        return (
            <ImageBackground
                style={styles.background}
                source={require("../../../assets/images/bg/bg.png")}
            >
                {this.props.isLoading && (
                    <Loading loadingMessage={this.props.loadingMessage} />
                )}
                {this.props.header && <View style={{ marginBottom: 20 }} >{this.props.header}</View>}

                <AppKeyboardAwareScrollView
                    contentStyle={this.props.contentStyle}
                    scrollEnabled={scrollEnabled}
                >
                    {this.props.children}
                </AppKeyboardAwareScrollView>
                {this.props.bottomTab}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
});

export default AppKeyBoardView