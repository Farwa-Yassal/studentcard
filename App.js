import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ImageBackground } from 'react-native-web';


const decor = StyleSheet.create({
  design: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  canvas: {
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    border: '3px solid #f3f3f3'
    
  },
  pic: {
    left: 0,
    top: 0,
    position: 'relative',
    height: 180,
    width: 180,
    marginRight:6,

  },
  bold: {
    fontWeight: 'bold'
  },
  col: {
    flexDirection: 'column'
  },
  text:
  {
    padding: 10,
  }
});

export default function App() {
  return (
    <View style={decor.design}>

      <View style={decor.canvas}>
  
        <Image
          style={decor.pic}
          source={require('./assets/pic.jpg')}
        />

        <View style={decor.col}>

          <Text style={ decor.text}>
          <Text style={ decor.bold}>Name: </Text>Farwa Yassal</Text>
     
          <Text style={ decor.text}>
          <Text style={ decor.bold}>Regitration no: </Text>19-ARID-1183</Text>

          <Text style={ decor.text}>
          <Text style={ decor.bold}>Degree: </Text>BSSE</Text>

          <Text style={ decor.text}>
          <Text style={ decor.bold}>Semester: </Text>5th</Text>

          <Text style={ decor.text}>
          <Text style={ decor.bold}>Course: </Text>Software Construction</Text>

          <StatusBar style="auto" />

        </View>
  
      </View>
  
    </View>
  );
}