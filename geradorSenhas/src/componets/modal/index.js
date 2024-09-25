import { Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';



export function ModalPassword({senha, handleClose}) {
  return(
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}> Senha gerada </Text>

        <Pressable style={styles.innerPassword}>
            <Text style={styles.text}>
                {senha}
            </Text>
        </Pressable>

        <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} onPress={handleClose}>
                <Text style={styles.buttontext}>Voltar</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.button, styles.buttonSave]}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Salvar Senha</Text>
            </TouchableOpacity>
        </View>

        </View>
        </View>
        
         
        
  )
  }
  const style = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6",
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop:24,
        paddingBottom:24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color: "#000",
        marginBottom:24,
    },
    innerPassword:{
        backgroundColor: "#e0e0e0",
        width: "90%",
        padding:14,
        borderRadius: 8,
    },
    text:{
        color:"#FFF",
        textAlign:"center"
    },
    buttonArea:{
        flexDirection: "row",
        width:"90%",
        marginTop: 8,
        alignItems:"center",
        justifyContent: "space-between",
    },
    button:{
        flex: 1,
        marginTop: 14,
        marginBottom: 14,
        alignItems:"center",
        padding: 8,
    },
    buttonsave:{
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },
    buttonSaveText:{
        Color: "FFF",
        fontWeight: 'bold',
    },
  })