import React, { Component, PropTypes } from 'react';
import {
    StyleSheet, View, Text, Button,
    ProgressBarAndroid
} from 'react-native';
import Spinner from 'react-native-spinkit';
import { APP_MAIN_COLOR } from '../../constants/Styles';

const LOAD_STATE_ING = 'ing';
const LOAD_STATE_ERROR = 'error';

class LoadView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            spinnerType: null
        }
    }

    componentDidMount() {
        this.setState({spinnerType: 'ChasingDots'});
    }

    render() {
        let contentView = this.props.loadState === LOAD_STATE_ERROR ?
            this._renderErrorView() : this._renderLoadingView();

        return (
            <View style={{flex: 1}}>
                {contentView}
            </View>
        )
    }

    _renderLoadingView() {
        return (
            <View>
                <Spinner
                    size={45}
                    type={this.state.spinnerType}
                    color={APP_MAIN_COLOR} />
                <Text>
                    正在加载中...
                </Text>
            </View>
        )
    }
    _renderErrorView() {
        return (
            <View>
                <Text>
                    加载失败了喔!
                </Text>
                <Button onPress={this.props.onRetry}>重试</Button>
            </View>
        )
    }
    
}

LoadView.propTypes = {
    loadState: PropTypes.oneOf({
        LOAD_STATE_ING, LOAD_STATE_ERROR
    }).isRequired,
    onRetry: PropTypes.func.isRequired
}

export default LoadView;
