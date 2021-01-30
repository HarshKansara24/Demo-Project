import { StyleSheet } from 'react-native';
import { Images, Colors, FontName, FontSize } from '../../../utils';
import ResponsivePixels from '../../../utils/ResponsivePixels';

export default styles = StyleSheet.create({

    UploadView: {
        backgroundColor: Colors.Backgroundgrey,
        flex: 1,
    },
    sub_view: {
        margin: 16,
        marginTop: 20,
        backgroundColor: Colors.Defaultwhite,
        height: ResponsivePixels.size120
    },
    sub_view_sec: {
        marginHorizontal: 16,
        backgroundColor: Colors.Defaultwhite,
        height: ResponsivePixels.size150
    },
    textstyle: {
        fontWeight: 'bold',
        fontSize: ResponsivePixels.size20,
        marginHorizontal: 16,
        marginTop: 16,
    },
    EditTextstyle: {
        marginHorizontal: 16,
        marginTop: 10
    }, textstylerotation: {
        flex: 1,
        fontSize: ResponsivePixels.size18,
        marginHorizontal: 16,
        marginTop: 5,
    },
    radioButton: {
        height: 20,
        width: 20,
        right: 10,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent:'center',
        alignContent:'center'
    },
    radioButton_inner: {
        alignSelf:'center',
        height: 16,
        width: 16,
        borderRadius: 8,
       
    }
});
