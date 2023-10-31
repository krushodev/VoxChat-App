import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: responsiveFontSize(10),
    height: responsiveFontSize(10),
    borderRadius: 50,
    backgroundColor: colors.chetwodeBlue600,
    shadowColor: colors.zinc950,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  button: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
