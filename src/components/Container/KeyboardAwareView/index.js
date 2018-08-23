
import React from "react";
import { View } from "react-native"

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { ViewStyles, screenHeight } from "../../../styles";

class AppKeyboardAwareScrollView extends React.Component {
    render() {
        let { scrollEnabled } = this.props
        return (
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                scrollEnabled={scrollEnabled}
            >
                <View style={[this.props.contentStyle, { width: "100%", height: screenHeight }]}>
                    {this.props.children}
                </View>

            </KeyboardAwareScrollView >
        )
    }
}
export default AppKeyboardAwareScrollView