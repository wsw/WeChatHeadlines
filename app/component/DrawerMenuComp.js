import React from 'react';
import {
    View, Text, Image, StyleSheet, TouchableNativeFeedback
} from 'react-native';
import { SIDE_LEFT_TABS } from '../constants/ActionTypes';
import { APP_MAIN_COLOR } from '../constants/Styles';

class DrawerMenuComp extends React.Component {
    render() {
        return (
            <View>
                <Text>微信精选</Text>
                <View>
                    {this.renderMenuItem(SIDE_LEFT_TABS.HOME, '首页')}
                    {this.renderMenuItem(SIDE_LEFT_TABS.CATEGORY, '标签')}
                </View>
            </View>
        )
    }
    
    renderMenuItem(tab, tabName) {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onTabSelect(tab)}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View>
                    <Text style={{marginLeft: 30}}>{tabName}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default DrawerMenuComp;