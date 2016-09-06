import React from 'react';
import {
    View, Text
} from 'react-native';
import { connect } from 'react-redux';
import fetchArticleList from '../actions/articles';
// import CommonLoadView from '../component/common/LoadView';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchArticleList(1, 0, 1));
    }

    render() {
        console.log(this.props.articles)
        if (this.props.articles.isRefreshing) {
            return <View><Text>Loading</Text></View>
        }
        return (<View>
                {this.props.articles && this.props.articles.data.map(() => {
                    return <Text>HEELO WORLD</Text>;
                })}
            </View>);
    }
}

export default connect((store) => {
    return {
        articles: store.articles
    }
})(HomePage);;