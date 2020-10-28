import {StyleSheet} from 'react-native';

export const css = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        
        // justifyContent: 'center',
        // marginTop: "5%"
    },
    containerAux: {
        flex:1,
        backgroundColor: '#363636',
        alignItems: 'center',
        
        // justifyContent: 'center',
        // marginTop: "5%"
    },
    containerMenu: {
        flex:1,
        backgroundColor: '#363636',
    },
    refreshButtonText:{
        color: '#000',
        textAlign:'center',
        fontSize: 20,
        paddingBottom: "5%",
        fontWeight: 'bold',
        marginBottom:"5%"
     },
     refreshButton: {
        backgroundColor: '#98FB98',
        padding: 15,
        height: '15%',
        width:280,
        fontWeight: 'bold',
        borderWidth: 10,
        borderColor: "#00FF7F",
        borderRadius: 0,
     },
     refreshButtonLotoFacil: {
        backgroundColor: '#98FB98',
        padding: 15,
        height: 75,
        width:280,
        fontWeight: 'bold',
        borderWidth: 10,
        borderColor: "#00FF7F",
        borderRadius: 0,
     },
    generateButtonText:{
        color: '#000',
        textAlign:'center',
        fontSize: 20,
        paddingBottom: "5%",
        fontWeight: 'bold',
     },
     generateButton: {
        backgroundColor: '#9ACD32',
        padding: 15,
        height: '10%',
        width:280,
        fontWeight: 'bold',
        borderWidth: 10,
        borderColor: "#228B22",
        borderRadius: 0,
        marginTop:"30%"
     },
     generateButtonLotoFacil: {
        backgroundColor: '#9ACD32',
        padding: 15,
        height: 75,
        width:280,
        fontWeight: 'bold',
        borderWidth: 10,
        borderColor: "#228B22",
        borderRadius: 0,
        marginTop:"1%"
     },
    input:{
        padding:10,
        backgroundColor: '#CCCC',
        color: '#000',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 0,
        marginTop:"2%"
    },
    conteudo:{
        alignSelf:"center",
        margin:"1%",
        fontWeight:'bold',
        fontSize:18,
        color:'#0000FF',
        shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
    },
    month:{
        alignSelf:"center",
        margin:"1%",
        fontWeight:'bold',
        fontStyle:'italic',
        fontSize:22,
        color:'#0000FF',
        shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
    }
     
  });
  