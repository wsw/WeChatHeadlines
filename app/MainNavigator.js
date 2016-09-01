import React from 'react';
import {
    Navigator, StatusBar, View, BackAndroid
} from 'react-native';
import MainPage from './containers/MainPage';

class RootNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.backButtonListeners = [];
        this.onBack = this.onBack.bind(this);
        this.addBackButtonListener = this.addBackButtonListener.bind(this);
        this.removeBackButtonListener = this.removeBackButtonListener.bind(this);
        this.handlerConfigureScene = this.handlerConfigureScene.bind(this);
        this.renderScene = this.renderScene.bind(this);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBack);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0.2)'} />
                <Navigator 
                    ref={navigator => this.navigator = navigator}
                    initialRoute={{}}
                    configureScene={this.handlerConfigureScene}
                    renderScene={this.renderScene}
                    />
            </View>
        )
    }

    handlerConfigureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    addBackButtonListener(listener) {
        this.backButtonListeners.push(listener);
    }

    removeBackButtonListener(listener) {
        this.backButtonListeners = this.backButtonListeners.filter(handler => {
            handler !== listener
        });
    }

    onBack() {
        for (let i = this.backButtonListeners.length - 1; i >= 0; i--) {
            if (this.backButtonListeners[i]()) return true; 
        }

        let navigator = this.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        
        let curTimestamp = new Date().getTime();
        if (this.extTimestamp !== undefined && curTimestamp - this.extTimestamp <= 3000) {
            return false;
        } else {
            // 提示
            this.extTimestamp = curTimestamp;
            return ture;
        }
    }

    renderScene(route, navigator) {
        if (route && route.component) {
            let {component: Component, ...route} = route;
            return <Component navigator={navigator} {...route} />;
        }
        return <MainPage navigator={navigator} {...route} />;
    }
}

RootNavigator.childContextTypes = {
    addBackButtonListener: React.PropTypes.func,
    removeBackButtonListener: React.PropTypes.func
};

RootNavigator.getChildContext = () => {
    return {
        addBackButtonListener: this.addBackButtonListener,
        removeBackButtonListener: this.removeBackButtonListener
    }
};

export default RootNavigator;