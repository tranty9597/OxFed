import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";

const propTypes = {
    renderView: PropTypes.func.isRequired,
    renderCollapseView: PropTypes.func.isRequired,
    collapse: PropTypes.bool,
    tension: PropTypes.number,
}
const defaultProps = {
    collapse: false,
    tension: 10
};

class CollapseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: this.props.collapse,
            animation: new Animated.Value(),
            first: true,
            sec: true
        };
    }

    collapse = () => {
        const { startpoint, endpoint, animation, collapse, first } = this.state;
        let startAnim = collapse ? endpoint + startpoint : startpoint;
        let endAnim = collapse ? startpoint :  startpoint + endpoint;
        this.setState({
            collapse: !this.state.collapse
        })

        animation.setValue(startAnim);
        Animated.spring(
            this.state.animation,
            {
                toValue: endAnim,
                tension: this.props.tension,
            }
        ).start();
    }

    startpoint = (layout) => {
        let { first } = this.state
        if (!this.state.collapse && first) this.setState(
            {
                animation: new Animated.Value(layout.nativeEvent.layout.height),
                startpoint: layout.nativeEvent.layout.height,
                first: false
            }
        );

    }

    endpoint = (layout) => {
        let { sec } = this.state
        if (this.state.collapse && sec) this.setState(
            {
                animation: new Animated.Value(layout.nativeEvent.layout.height),
                endpoint: layout.nativeEvent.layout.height,
                sec: false
            }
        );
    }

    render() {
        const { startpoint, endpoint, animation, collapse } = this.state;

        return (
            <Animated.View style={{ height: this.state.animation, backgroundColor: 'transparent', overflow: 'hidden' }}>
                <TouchableOpacity activeOpacity={1} onPress={() => { this.props.onPress(); this.collapse() }} onLayout={this.startpoint}>
                    {this.props.renderView(this.state.collapse)}
                </TouchableOpacity>
                <View onLayout={this.endpoint}>
                    {this.props.renderCollapseView(this.state.collapse)}
                </View>
            </Animated.View >
        );
    }
}

CollapseView.propTypes = propTypes;
CollapseView.defaultProps = defaultProps;
export default CollapseView;