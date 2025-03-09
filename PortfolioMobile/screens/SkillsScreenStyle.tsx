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
  skill: {
    flexDirection:'row',
    marginBottom: 15,
    alignItems: "center",
  },
  skillText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginRight:10
  },
});