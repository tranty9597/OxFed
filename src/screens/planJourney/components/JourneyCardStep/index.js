import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native"

import { ExpandView } from "../../../../components"
import { TextStyles, AppColor, } from '../../../../styles';


const RenderCardTitle = ({ show, title }) => {
    if (show) {
        return (
            <Text
                style={[TextStyles.alignLeftText, {
                    paddingLeft: 5, paddingRight: 10,
                    fontWeight: "normal", fontSize: 18, color: show ? AppColor.gray : AppColor.white
                }]}>{title}
            </Text>
        )
    } else {
        return null
    }

}


class JourneyCardItem extends Component {
    constructor(props) {
        super(props);
        this.state = { expand: false, hasDone: false }
    }
    toggleExpand = () => {

        let { expand } = this.state;
        this.setState({ expand: !expand, hasDone: true })
    }

    render() {
        let { title, expandComponent, progress, showLittle } = this.props

        let { expand, hasDone } = this.state
        // if (forceExpand !== expand) {
        //     this.expandView.toggleColappse();
        // }
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    // this.props.onPress()
                    this.expandView.toggleColappse();
                    this.toggleExpand()
                }}
            >
                <View style={[styles.container,]}>
                    {expand || <TouchableOpacity onPress={() => {
                        this.expandView.toggleColappse();
                        this.toggleExpand()
                    }} style={[styles.overlay]} />}
                    <ExpandView
                        ref={(r) => { this.expandView = r }}
                        onPress={() => { this.toggleExpand() }}
                        progress={hasDone ? progress : null}
                        expand={expand}
                        renderView={() =>
                            <View style={[styles.expandContainer]}>
                                <RenderCardTitle show={(!expand || expand && showLittle)} title={title} />
                            </View>

                        }
                        renderCollapseView={(expand) =>
                            <View style={[styles.expandContainer, { paddingTop: 0, paddingBottom: 60 }]}>
                                {expandComponent}
                            </View>
                        } />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginBottom: 15,
        // elevation: 1,
        // borderWidth: 0.5
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 5,
        backgroundColor: "rgba(250,255,250,0.7)"
    },
    expandContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: AppColor.white
    }
})

JourneyCardItem.defaultProps = {
    showLittle: true
}

export default JourneyCardItem