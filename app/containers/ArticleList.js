import React from 'react';
import {
    ListView, Text, View, RefreshControl,
    StyleSheet, ActivityIndicator
} from 'react-native';

class ArticleList extends React.Component {
    constructor (props) {
        super(props);

        this.categoryId = this.props.categoryId;
        this.isLoadMore = false
        this.curPageNo = 1;
    }

    render() {
        //
    }
}