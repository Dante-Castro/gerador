import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'

export function ModalPassword( {password, handleClose}){
  async function handleCopyPassword(){
    await Clipboard.setStringAsync(password)
    alert("Senha salva com sucesso")
    handleClose();
  }


  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
          <Text style={styles.text}> 
            { password}
          </Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  content:{
    backgroundColor:"#F3F3FF",
    width: "80%",
    padding: 24,
    alignItems:"center",
    justifyContent:'center',
    borderRadius:8,
  },
  title:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword:{
    backgroundColor: "#0e0e0e",
    borderRadius: 8,
    width: "90%",
    padding: 18,    
  },
  text:{
    color:'#FFFFFF',
    fontSize: 18,
    textAlign:'center',
  },
  buttonArea:{
    flexDirection: "row",
    width: '90%',
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button:{
    flex: 1,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
  },
  buttonSave:{
    backgroundColor: '#392DE9',
    borderRadius: 8,
  },  
  buttonSaveText:{
    color: '#FFF',
    fontWeight: 'bold',
  }

})