import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';



export default class Screen2 extends React.Component{
    render()
    {
      return(
          <View style= {{marginTop: 100, alignSelf: "center"}}>
              <TouchableOpacity>
                  <Text>
                      Screen2
                  </Text>
              </TouchableOpacity>
          </View>
      )
    }
  }