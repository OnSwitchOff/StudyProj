import React from 'react';
import {Modal,Dimensions,StyleSheet,TouchableHighlight,TouchableWithoutFeedback,Alert,ActivityIndicator,Text,View,Image } from 'react-native';

export default class ImageList extends React.Component {

  constructor(props){
    super(props);
    this.state={isLoading: true, modalVisible:false};
  }  
    
  setModalVisible(visible,imagekey){
    let modalSrc={uri:this.state.dataSource[imagekey].fullphoto};
    this.setState({modalImage:modalSrc});
    this.setState({modalVisible:visible});
  }

  getData(){
    return fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
            .then((response) => response.json())
            .then((responseJson) => {
                let tUri="gttp//...";
                this.setState({
                    phSrc:{uri:{tUri}},
                    isLoading: false,
                    dataSource: responseJson.map(function(item){return {'name':item.user.name,'photo':item.urls.thumb,'fullphoto':item.urls.full}}),
        });
      })
      .catch((error) =>{
        Alert.alert(error);
      });
  }

  render(){
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    
    
    let images = this.state.dataSource.map((val,key)=>{
    let src={uri:val.photo};
    return <TouchableWithoutFeedback key={key}
              onPress={()=>{this.setModalVisible(true,key)}}>
              <View style={styles.card}>                  
                <Image source={src}  style={styles.image}/>
                <View style={styles.info}> 
                  <Text style={styles.name}>{val.name}</Text>
                  <Text style={styles.text}>Some description</Text> 
                </View>                
              </View>
            </TouchableWithoutFeedback>
    });
    
    
    
    return(     
      <View style={styles.container}> 
     
        <Modal style={styles.modal} animationType={'fade'} transparent={true} visible={this.state.modalVisible} onRequestClose={()=>{}}>
          <TouchableHighlight style={styles.modal} onPress={()=>{this.setState({modalVisible:false})}}>
            <View  style={styles.modal}>
              <Image  source={this.state.modalImage} style={styles.modal}></Image>
            </View>
          </TouchableHighlight>  
        </Modal>

         {images}

      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    flex:4,
    flexDirection:'column',
    bacgroundColor: "#eee",
    alignContent:"space-around",
  },
  card:{
    flex:4,
    flexDirection:'row',
    alignItems:'center',
    margin:5,
    backgroundColor:'darkgrey',
    overflow:'hidden'
  },
  image:{
    flex:1,   
    height: (Dimensions.get('window').height/10),
  },
  info:{
    color:'red',    
    flex:4,
    padding: 10,   
  },  
  name:{
    fontSize:20,
    color:'red',
  },
  text:{
    fontSize:14,
    color:'yellow',
  },
  modal:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0)",
  },
});
