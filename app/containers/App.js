import React from 'react';
import {
    View, Text
} from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('xx')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }} >
                <Text>Hello world!</Text>
            </View>
        )
    }
}

console.log(App)

export default App;