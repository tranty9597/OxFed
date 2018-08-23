import React from "react";

import {
    ImageBackground,
    View,
    StyleSheet
} from "react-native";

import { caculateAppMaxWidth, screenWidth } from "../../../styles"

class AppImageBackground extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require("../../../assets/images/bg/bg.png")}
            >
                {this.props.header}

                <View
                    style={[
                        {
                            marginLeft: (screenWidth - caculateAppMaxWidth()) / 2,
                            maxWidth: caculateAppMaxWidth(),
                            width: screenWidth,
                            paddingBottom: 0,
                            marginTop: 20
                        }
                    ]}
                >
                    {this.props.isLoading && (
                        <Loading loadingMessage={this.props.loadingMessage} />
                    )}

                    {this.props.children}
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
});

export default AppImageBackground 