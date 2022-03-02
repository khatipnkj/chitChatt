

import React ,{ useState} from 'react';
import Test from './Test';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App = () => {
  const[count, setCount] = useState(0);

  console.log("App")
  return (
    <View>
      <Text>
        Counter:{count}
      </Text>
      <Button onPress={ ()=> setCount(count+1)} title='Count'/>
      <Test count ={1}/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
