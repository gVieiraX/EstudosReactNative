import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5'

  },
  image:{
    width: 150,
    height: 150,
    borderRadius: '50%',
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black"
  },
  button:{
    backgroundColor: '#3498db',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    marginTop: 16,

    //sombra android
    elevation: 5,

    //sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
   },
  buttonRoute:{
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,

    //sombra android
    elevation: 5,

    //sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5, 
   }
});