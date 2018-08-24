import React, { Component } from 'react';

import { View, StyleSheet, Text, FlatList } from "react-native"

import { Header, AppImageBackground, AppButton, ToggleSwitch } from "../../components"
import { ViewStyles, AppColor, screenHeight, TextStyles } from '../../styles';

import { JourneyCardStep } from './components/';

const heightComponent = 55

let steps = [
    { content: "Step 1: Which practice are you going to?", active: true },
    { content: "Step 2: Select pick-up location", active: true },
    { content: "Step 3: Select transport provider", active: true },
    { content: "Step 4: Mobility Aid / Passenger Assistance", active: false },
    { content: "Step 5: Time", active: true }
]
let titles = [
    [
        { content: "Botley Medical Centre", active: false },
        { content: "Kennington Health Centre", active: false },
        { content: "Observatory Medical Practice", active: false }
    ],
    [
        { content: "Home", active: false },
        { content: "Current Location", active: false },
    ],
    [
        { content: "Aspire", active: false },
        { content: "OxSwift", active: false },
    ],
    [
        { content: "WheelChair access", active: false },
        { content: "Hydraulic lift", active: false },
        { content: "Carer", active: false },
        { content: "Guide Dog", active: false },
    ],
    {
        date: [
            { content: "Friday, 17 Aug", active: false },
            { content: "Saturday, 18 Aug", active: false },
            { content: "Sunday, 19 Aug", active: false },
        ],
        time: [
            { content: "10:00", active: false },
            { content: "12:00", active: false },
            { content: "14:00", active: false },
        ]
    }

]

const CardButton = ({ title, selected, onPress }) => {
    return (
        <AppButton
            onPress={onPress}
            textStyle={[{ fontSize: 18 }, TextStyles.whiteText]}
            title={title}
            bgColor={selected ? AppColor.blue : AppColor.aqua}
            height={heightComponent}
        />
    )
}

const MainButton = ({ title, onPress }) => {
    return (
        <View style={{ marginBottom: 35 }}>
            <AppButton
                onPress={onPress}
                textStyle={[TextStyles.buttonTitle, { color: "#D3EDE8" }]}
                title={title}
                bgColor={AppColor.blue}
                height={heightComponent * 1.6}
            />
        </View >

    )
}

const CardSwitch = ({ label }) => {
    return (
        <View style={[ViewStyles.containerFluid, { paddingBottom: 20 }]}>
            <ToggleSwitch
                onToggle={() => { }}
                labelStyle={{ fontSize: 18, paddingLeft: 20, color: AppColor.gray }}
                label={label}
                onColor={AppColor.aqua}
                offColor={AppColor.disable}

            />
        </View>

    )
}

class RenderStepComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: -1,
            timeAct: -1,
            dateAct: -1,
        }
    }
    render() {
        let { step } = this.props
        let { activeBtn, timeAct, dateAct } = this.state
        let content;

        switch (step) {
            case 3:
                content = titles[step].map((t, i) => {
                    return <CardSwitch
                        key={i}
                        onPress={() => this.setState({ activeBtn: i })}
                        selected={activeBtn === i}
                        label={t.content}
                    />
                })
                break;
            case 4:
                let date = []
                titles[step].date.forEach((t, i) => {
                    date.push(<CardButton
                        key={i}
                        onPress={() => this.setState({ dateAct: i })}
                        selected={dateAct === i}
                        title={t.content}
                    />)
                })
                let time = []
                titles[step].time.forEach((t, i) => {
                    time.push(
                        <View key={i} style={{ width: "33%", padding: 5 }}>
                            <CardButton
                                onPress={() => this.setState({ timeAct: i })}
                                selected={timeAct === i}
                                title={t.content}
                            />
                        </View>
                    )
                })
                content =
                    (
                        <View style={[ViewStyles.containerFluid, { marginTop: -30, paddingBottom: 60 }]}>

                            <Text style={[TextStyles.alignLeftText, styles.titleStyle, { margin: 10, marginLeft: -20, }]}>Select date</Text>
                            {date}
                            <Text style={[TextStyles.alignCenterText, styles.titleStyle, { fontStyle: "italic", marginTop: -10, fontWeight: "600" }]}>More dates</Text>
                            <Text style={[TextStyles.alignLeftText, styles.titleStyle, { margin: 10, marginLeft: -20, }]}>Select Time</Text>
                            <View style={[ViewStyles.flexDirectionRow, { marginLeft: -5, marginRight: -5 }]}>
                                {time}
                            </View>

                        </View>

                    )

                break;
            default:
                content = titles[step].map((t, i) => {
                    return <CardButton
                        key={i}
                        onPress={() => this.setState({ activeBtn: i })}
                        selected={activeBtn === i}
                        title={t.content}
                    />
                })
                break;
        }
        return (
            <View style={[ViewStyles.container, { paddingBottom: 20 }]} >
                {content}
            </View>
        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: -1,
            appStep: 0
        }
    }
    render() {
        let { activeStep, appStep } = this.state
        let header = <Header />
        let firstStep = <View style={[ViewStyles.container, { height: screenHeight * 0.85, padding: 30, marginTop: 20 }]}>
            <MainButton
                title="GP/SURGERY"
                onPress={() => this.setState({ appStep: 1 })}
            />
            <MainButton
                title="DAY CARE CENTER"
                onPress={() => this.setState({ appStep: 1 })}
            />
            <MainButton
                title="HOSTPITAL DEPARTMENT"
                onPress={() => this.setState({ appStep: 1 })}
            />
        </View>
        let secStep = <View style={[ViewStyles.container, { height: screenHeight * 0.85, padding: 10 }]}>
            <FlatList
                ListFooterComponent={<View style={{ height: 50 }} />}
                keyExtractor={(item, index) => "Journey " + index}
                data={steps}
                renderItem={(item) => {
                    return (
                        <JourneyCardStep
                            showLittle={item.index !== 4}
                            onPress={() => this.setState({ activeBtn: item.index })}
                            forceExpand={activeStep === item.index}
                            progress={1 / 5 * (item.index + 1)}
                            title={item.item.content}
                            expandComponent={
                                <RenderStepComp
                                    titles={titles[item.index]}
                                    selectedBtn={titles[item.index]}
                                    step={item.index}
                                />
                            }
                        />
                    )
                }}
            />
        </View>
        let appSteps = [firstStep, secStep]
        return (
            <AppImageBackground header={header} >

                <View style={[styles.containerFluid, ViewStyles.flexCenter]}>
                    <Text style={[TextStyles.largeTitle, TextStyles.alignCenterText, { color: AppColor.blue, marginTop: -10, marginBottom: 20 }]}>Plan your Journey</Text>
                    {appSteps[appStep]}
                </View>

            </AppImageBackground>
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
    },
    titleStyle: {
        fontWeight: "normal",
        fontSize: 17,
        color: AppColor.gray
    }
})

export default Login