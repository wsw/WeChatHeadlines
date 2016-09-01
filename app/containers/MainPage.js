import React from 'react';
import {
    View, Text, DrawerLayoutAndroid, Navigator
} from 'react-native';
import { connect } from 'react-redux';
import { SIDE_LEFT_TABS } from '../constants/ActionTypes';
import DrawerMenuComp from '../component/DrawerMenuComp';
import HomePage from './HomePage';
import CategoryPage from './CategoryPage';

class MainPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        console.log(this.context);

        this.state = {
            curSelTag: SIDE_LEFT_TABS.HOME
        }

        this.ROUT_STACKS = [
            {component: HomePage},
            {component: CategoryPage}
        ]
        
        this.renderDrawerMenuView = this.renderDrawerMenuView.bind(this);
        this.onDrawerOpen = this.onDrawerOpen.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.onBackButton = this.onBackButton.bind(this);
        this.onDrawerMenuToggle = this.onDrawerMenuToggle.bind(this);
        this.renderScener = this.renderScener.bind(this);
    }

    render() {
        return (
            <DrawerLayoutAndroid 
                ref={drawer => this.drawer = drawer}
                drawerWidth={280}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={this.renderDrawerMenuView}
                onDrawerClose={this.onDrawerClose}
                onDrawerOpen={this.onDrawerOpen} >
                <Navigator 
                    ref={navigator => this.navigator=navigator}
                    navigator={this.props.navigator}
                    configureScene={() => {
                        return {
                            ...Navigator.SceneConfigs.FadeAndroid,
                            defaultTransitionVelocity: 1000,
                            gestures: {}
                        };
                    }}
                    initialRoute={this.ROUT_STACKS[0]}
                    initialRouteStack={this.ROUT_STACKS}
                    renderScene={this.renderScener}
                />
            </DrawerLayoutAndroid>
        )
    }

    renderScener(route, navigator) {
        var {component: Component, ...route} = route;
        return  <Component 
                    navigator={this.props.navigator}
                    {...route}
                    onDrawerMenuToggle={this.onDrawerMenuToggle}
                    curSelTag={this.curSelTag}
                />;
    }

    onDrawerOpen() {
        this.context.addBackButtonListener(this.onBackButton);
    }

    onDrawerClose() {
        this.context.removeBackButtonListener(this.onBackButton);
    }

    onDrawerMenuToggle() {
        this.drawer.closeDrawer();
        return true;
    }

    onBackButton() {
        this.drawer.closeDrawer();
        return true;
    }

    onTabSelect(tab) {
        this.drawer.closeDrawer();

        if (tab !== this.state.curSelTag) {
            this.setState({curSelTag: tab});

            switch (tab) {
                case SIDE_LEFT_TABS.HOME:
                    this.navigator.jumpTo(this.ROUT_STACKS[0]);
                    break;
                case SIDE_LEFT_TABS.CATEGORY:
                    this.navigator.jumpTo(this.ROUT_STACKS[1]);
                    break;
            }
        }
    }

    renderDrawerMenuView() {
        return  <DrawerMenuComp 
                    tab={this.state.tab}
                    onTabSelect={tab => this.onTabSelect(tab)}
                />; 
    }
}

MainPage.contextTypes = {
    addBackButtonListener: React.PropTypes.func,
    removeBackButtonListener: React.PropTypes.func
};

export default MainPage;