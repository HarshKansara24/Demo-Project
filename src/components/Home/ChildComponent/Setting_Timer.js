import React, { Component } from 'react';
import { View, Text, FlatList, Image, AppState } from 'react-native';
import * as constants from '../../../utils/AppConstants'
import { connect } from 'react-redux';
import * as actions from '../../../actions/CommonActions'
import ResponsivePixels from "../../../utils/ResponsivePixels";
import { MainContainer, EditText, Clickable, PhotoPicker, Button, ScrollContainer } from '../../common';
import { Images, Utils, Colors } from '../../../utils';
import { strings } from '../../../language/Language';
import styles from '../styles/Setting_Timer.style'
import BackgroundTimer from 'react-native-background-timer';
import Navigator from '../../../navigation/Navigator';
//****************************************************************
//* Import Declaration END                                       *
//****************************************************************

//****************************************************************
//* Class Declaration Start                                      *
//****************************************************************
class Setting_Timer extends Component {
    //****************************************************************
    //* Variable Declaration Start                                   *
    //**************************************
    state = {

        default_timer: 0,
        default_amb_timer: 0,
        rotation_type: this.props.rotation_type
    }

    //****************************************************************
    //* Variable Declaration end                                    *
    //****************************************************************

    componentDidMount = () => {

    }


    render() {
        return (
            <MainContainer
                header={{
                    backgroundColor: Colors.BlackColor,
                    left: {
                        image: Images.ic_BankRoundArrowIcon,
                        onPress: () => this.props.navigation.goBack(),
                    },
                    title: strings.Configration_screen.toUpperCase(),
                    hideUnderLine: true,
                    light: true,
                    titleColor: 'white',
                    titleStyle: { textAlign: 'center', }
                    // 
                }}>
                <ScrollContainer>
                    <View style={styles.UploadView}>
                        <View style={styles.sub_view}>
                            <Text style={styles.textstyle}>{strings.time_duration_seconds}</Text>
                            <EditText
                                style={styles.EditTextstyle}
                                hint={this.props.default_timer.toString()}
                                value={this.state.default_timer}
                                inputType='numeric'
                                onChangeText={(text) => {
                                    let newText = '';
                                    let numbers = '0123456789';

                                    for (var i = 0; i < text.length; i++) {
                                        if (numbers.indexOf(text[i]) > -1) {
                                            newText = newText + text[i];
                                        } else {
                                            // your call back function
                                            // Utils.showDangerToast(strings.enter_amount)
                                            // alert("please enter numbers only");
                                        }

                                    }
                                    this.setState({ default_timer: newText })
                                }}
                            ></EditText>
                        </View>
                        <View style={styles.sub_view_sec}>

                            <Text style={styles.textstyle}>{strings.Rotation}</Text>
                            <Clickable onPress={() => { this.setState({ rotation_type: 1 }) }} style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.textstylerotation}>{strings.Clockwise}</Text>
                                <Clickable style={styles.radioButton}>
                                    <View style={{ ...styles.radioButton_inner, backgroundColor: this.state.rotation_type === 1 ? Colors.BlackColor : Colors.Defaultwhite }}></View>
                                </Clickable>
                            </Clickable>

                            <Clickable onPress={() => { this.setState({ rotation_type: 2 }) }} style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.textstylerotation}>{strings.Anticlockwise}</Text>
                                <Clickable style={styles.radioButton}>
                                    <View style={{ ...styles.radioButton_inner, backgroundColor: this.state.rotation_type === 2 ? Colors.BlackColor : Colors.Defaultwhite }}></View>
                                </Clickable>
                            </Clickable>
                            <Clickable onPress={() => { this.setState({ rotation_type: 3 }) }} style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={styles.textstylerotation}>{strings.uptodownlefttoright}</Text>
                                <Clickable style={styles.radioButton}>
                                    <View style={{ ...styles.radioButton_inner, backgroundColor: this.state.rotation_type === 3 ? Colors.BlackColor : Colors.Defaultwhite }}></View>
                                </Clickable>
                            </Clickable>

                        </View>
                        <View style={styles.sub_view}>
                            <Text style={styles.textstyle}>{strings.time_duration_seconds + strings.amb}</Text>
                            <EditText
                                value={this.state.default_amb_timer}
                                style={styles.EditTextstyle}
                                hint={this.props.default_amb_timer.toString()}
                                inputType='numeric'
                                onChangeText={(text) => {
                                    let newText = '';
                                    let numbers = '0123456789';

                                    for (var i = 0; i < text.length; i++) {
                                        if (numbers.indexOf(text[i]) > -1) {
                                            newText = newText + text[i];
                                        } else {
                                            // your call back function
                                            // Utils.showDangerToast(strings.enter_amount)
                                            // alert("please enter numbers only");
                                        }

                                    }
                                    this.setState({ default_amb_timer: newText })
                                }}
                            ></EditText>
                        </View>
                        <Button style={styles.EditTextstyle} title={strings.save.toUpperCase()}
                            onPress={async () => {
                                if (this.state.default_timer && this.state.default_timer < 5 || this.state.default_timer > 120) {
                                    Utils.showDangerToast("Please enter signal time between 5 to 120")
                                    return
                                } else if ( this.state.default_amb_timer && this.state.default_amb_timer < 5 || this.state.default_amb_timer > 120) {
                                    Utils.showDangerToast("Please enter ambulance signal time between 10 to 300")
                                    return
                                }
                                await actions.storedefaulttimer(this.state.default_timer == 0 ? this.props.default_timer : this.state.default_timer)
                                await actions.storeambdefaulttimer(this.state.default_amb_timer == 0 ? this.props.default_amb_timer : this.state.default_amb_timer)
                                await actions.storerotationtype(this.state.rotation_type)
                                Navigator.resetNavigation("Home")

                            }}
                        ></Button>
                    </View>

                </ScrollContainer>
            </MainContainer>
        )
    }

    //****************************************************************
    //*  View Coding End                                             *
    //****************************************************************
}

//****************************************************************
//* Class Declaration End                                        *
//****************************************************************

const mapStateToProps = (state) => {

    return {
        default_amb_timer: state.common.default_amb_timer,
        default_timer: state.common.default_timer,
        rotation_type: state.common.rotation_type,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { ...actions, ...mapDispatchToProps })(Setting_Timer)
