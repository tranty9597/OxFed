import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CollapseView from "./CollapseView";

import { ViewStyles, AppColor } from "../../styles";

import { Bar } from 'react-native-progress';

class ExpandableView extends Component {
    constructor(props) {
        super(props);
        this.colappseView;
    }
    toggleColappse = () => {

        this.colappseView.collapse()
    }
    render() {
        return (
            <View style={ViewStyles.containerFluid}>
                {this.props.progress && <Bar
                    useNativeDriver={true}
                    progress={this.props.progress}
                    width={null}
                    height={8}
                    color={AppColor.aqua}
                    borderRadius={0}
                    unfilledColor={AppColor.disable}
                    borderWidth={0}
                /> || null}

                <CollapseView
                    ref={(r) => { this.colappseView = r }}
                    onPress={this.props.onPress}
                    collapse={this.props.expand}
                    tension={100}
                    renderView={this.props.renderView}
                    renderCollapseView={this.props.renderCollapseView}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
export default ExpandableView;