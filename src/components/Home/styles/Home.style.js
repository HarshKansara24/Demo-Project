import { StyleSheet } from 'react-native';
import { Images, Colors, FontName, FontSize } from '../../../utils';
import ResponsivePixels from '../../../utils/ResponsivePixels';

export default styles = StyleSheet.create({

    UploadView: {
        backgroundColor: Colors.Defaultwhite,
        flex:1,
    },
    signal_clicable:{
        borderWidth:1,
        height:50,
        width:50,
        borderRadius:4,
        alignSelf:'center',
        marginTop:ResponsivePixels.size100,
        justifyContent:'center',
        alignContent:'center'
    },
    signal_clicable_second:{
        borderWidth:1,
        height:50,
        width:50,
        alignSelf:'center',
        borderRadius:4,
        marginTop:ResponsivePixels.size20
    },
    signal_View_row:{
        
        top:ResponsivePixels.size50,
        marginHorizontal:16,
        flexDirection:'row',
        height:50,
    },
    signal_clicable_row:{
        borderWidth:1,
        height:50,
        width:50,
        borderRadius:4,
        marginLeft:8,
        justifyContent:'center',
        alignContent:'center'
    },
    signal_clicable_row_second:{
        borderWidth:1,
        height:50,
        width:50,
        borderRadius:4,
        marginLeft:16,
    },right_clicable:{
        marginLeft:ResponsivePixels.size80
    },
    textstyle:{
        textAlign:'center'
    },
    c_singnal_timer:{
        top:ResponsivePixels.size100
    },
    b_singnal_timer:{
        alignSelf:'center',
        left:ResponsivePixels.size75
    },
    d_singnal_timer:{
        alignSelf:'center',
        left:ResponsivePixels.size5
    },
});
