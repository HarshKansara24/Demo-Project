import React, { Component } from 'react';
import { View, Text, FlatList, Image, AppState } from 'react-native';
import * as constants from '../../../utils/AppConstants'
import { connect } from 'react-redux';
import * as actions from '../../../actions/CommonActions'
import ResponsivePixels from "../../../utils/ResponsivePixels";
import { MainContainer, EditText, Clickable, PhotoPicker, Button, ScrollContainer } from '../../common';
import { Images, Utils } from '../../../utils';
import { strings } from '../../../language/Language';
import styles from '../styles/Home.style'
import BackgroundTimer from 'react-native-background-timer';
//****************************************************************
//* Import Declaration END                                       *
//****************************************************************

//****************************************************************
//* Class Declaration Start                                      *
//****************************************************************
class Home extends Component {
    //****************************************************************
    //* Variable Declaration Start                                   *
    //**************************************
    state = {

        a_timer: this.props.default_timer,
        b_timer: this.props.default_timer,
        c_timer: this.props.default_timer,
        d_timer: this.props.default_timer,
        default_timer: this.props.default_timer,
        active_timer: 'A',
        default_amb_timer: this.props.default_amb_timer,
        default_amb_active: false,
        rotation_type: this.props.rotation_type
    }

    //****************************************************************
    //* Variable Declaration end                                    *
    //****************************************************************

    componentDidMount = () => {
        BackgroundTimer.runBackgroundTimer(() => {



            switch (this.state.active_timer) {
                case "A":

                    if (this.state.a_timer <= this.state.default_amb_active === true ? this.state.default_amb_active : this.state.default_timer) {
                        let atimer = this.state.a_timer - 1
                        if (atimer === 0) {
                            let navigation_timer = ''
                            switch (this.state.rotation_type) {
                                case 1:
                                    navigation_timer = "B"
                                    break;
                                case 2:
                                    navigation_timer = "D"
                                    break;
                                case 3:
                                    navigation_timer = "C"
                                    break;
                            }
                            this.setState({ active_timer: navigation_timer })
                            this.setState({ a_timer: this.props.default_timer })
                        } else {
                            this.setState({ a_timer: atimer })
                        }

                    }

                    break;
                case "B":
                    if (this.state.b_timer <= this.state.default_amb_active === true ? this.state.default_amb_active : this.state.default_timer) {
                        let btimer = this.state.b_timer - 1
                        if (btimer === 0) {
                            let navigation_timer = ''
                            switch (this.state.rotation_type) {
                                case 1:
                                    navigation_timer = "C"
                                    break;
                                case 2:
                                    navigation_timer = "A"
                                    break;
                                case 3:
                                    navigation_timer = "A"
                                    break;
                            }
                            this.setState({ active_timer: navigation_timer })
                            this.setState({ b_timer: this.props.default_timer })
                        } else {
                            this.setState({ b_timer: btimer })
                        }

                    }
                    break;
                case "C":
                    if (this.state.c_timer <= this.state.default_amb_active === true ? this.state.default_amb_active : this.state.default_timer) {
                        let ctimer = this.state.c_timer - 1
                        if (ctimer === 0) {
                            let navigation_timer = ''
                            switch (this.state.rotation_type) {
                                case 1:
                                    navigation_timer = "D"
                                    break;
                                case 2:
                                    navigation_timer = "B"
                                    break;
                                case 3:
                                    navigation_timer = "D"
                                    break;
                            }
                            this.setState({ active_timer: navigation_timer })
                            this.setState({ c_timer: this.props.default_timer })
                        } else {
                            this.setState({ c_timer: ctimer })
                        }

                    }
                    break;
                case "D":
                    if (this.state.d_timer <= this.state.default_amb_active === true ? this.state.default_amb_active : this.state.default_timer) {
                        let dtimer = this.state.d_timer - 1
                        if (dtimer === 0) {
                            let navigation_timer = ''
                            switch (this.state.rotation_type) {
                                case 1:
                                    navigation_timer = "A"
                                    break;
                                case 2:
                                    navigation_timer = "C"
                                    break;
                                case 3:
                                    navigation_timer = "B"
                                    break;
                            }
                            this.setState({ active_timer: navigation_timer })
                            this.setState({ d_timer: this.props.default_timer })
                        } else {
                            this.setState({ d_timer: dtimer })
                        }

                    }
                    break;
            }

        },
            1000);
    }


    render() {
        return (
            <MainContainer
                header={{
                    right: [{
                        image: Images.setting,
                        onPress: () => this.props.navigation.navigate("Setting_Timer"),
                    }],
                    title: strings.traffic_signal,
                    hideUnderLine: true,
                    light: true,

                    titleStyle: { alignItems: 'center', justifyContent: "center", textAlign: 'center' }
                    // 
                }}>
                <ScrollContainer>
                    <View style={styles.UploadView}>
                        <Clickable onPress={() => {
                            this.setState({ active_timer: 'A', default_amb_active: true, a_timer: this.props.default_amb_timer })
                        }} style={styles.signal_clicable}>
                            <Text style={styles.textstyle}>{strings.amb}</Text>
                        </Clickable>
                        <Clickable style={{ ...styles.signal_clicable, ...styles.signal_clicable_second, backgroundColor: this.state.active_timer === 'A' ? Colors.defaultGreenColor : Colors.defaultWhite }}>
                            <Text style={styles.textstyle}>{strings.a}</Text>
                        </Clickable>
                        <Text style={styles.textstyle}>{this.state.a_timer}</Text>
                        <View style={styles.signal_View_row}>
                            <View style={{flex:1,flexDirection:'row'}}>
                            <Clickable onPress={() => {
                                this.setState({ active_timer: 'D', default_amb_active: true, d_timer: this.props.default_amb_timer })
                            }} style={{ ...styles.signal_clicable_row }}>
                                <Text style={styles.textstyle}>{strings.amb}</Text>
                            </Clickable>
                            <Clickable style={{ ...styles.signal_clicable_row, ...styles.signal_clicable_row_second, backgroundColor: this.state.active_timer === 'D' ? Colors.defaultGreenColor : Colors.defaultWhite }}>
                                <Text style={styles.textstyle}>{strings.d}</Text>
                            </Clickable>
                            <Text style={{ ...styles.textstyle, ...styles.d_singnal_timer }}>{this.state.d_timer}</Text>
                            </View>
                            
                            <Text style={{ ...styles.textstyle, ...styles.b_singnal_timer }}>{this.state.b_timer}</Text>
                            <Clickable style={{ ...styles.signal_clicable_row, ...styles.right_clicable, backgroundColor: this.state.active_timer === 'B' ? Colors.defaultGreenColor : Colors.defaultWhite }}>
                                <Text style={styles.textstyle}>{strings.b}</Text>
                            </Clickable>
                            <Clickable onPress={() => {
                                this.setState({ active_timer: 'B', default_amb_active: true, b_timer: this.props.default_amb_timer })
                            }} style={{ ...styles.signal_clicable_row, ...styles.signal_clicable_row_second }}>
                                <Text style={styles.textstyle}>{strings.amb}</Text>
                            </Clickable>

                        </View>
                        <Text style={{ ...styles.textstyle, ...styles.c_singnal_timer }}>{this.state.c_timer}</Text>
                        <Clickable style={{ ...styles.signal_clicable, backgroundColor: this.state.active_timer === 'C' ? Colors.defaultGreenColor : Colors.defaultWhite }} >
                            <Text style={styles.textstyle}>{strings.c}</Text>
                        </Clickable>
                        <Clickable onPress={() => {
                            this.setState({ active_timer: 'C', default_amb_active: true, c_timer: this.props.default_amb_timer })
                        }} style={{ ...styles.signal_clicable, ...styles.signal_clicable_second }}>
                            <Text style={styles.textstyle}>{strings.amb}</Text>
                        </Clickable>
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

export default connect(mapStateToProps, { ...actions, ...mapDispatchToProps })(Home)
