import Toast from 'react-native-root-toast';

let toast;

export default class CusToast {
    
    static show(content, duration = Toast.durations.SHORT) {
        
        if (toast !== undefined) {
            Toast.hide(toast);
        }

        toast = Toast.show(content.toString(), {
            duration: duration,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
        });
    }
}