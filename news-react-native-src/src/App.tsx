import React from 'react';
import {  SafeAreaView, FlatList,Text,StyleSheet} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/Card/NewsCard';
import Banner from './components/Banner';

function App() {


    /*

const renderNews = ({item}) => <NewsCard news={item}/>

    return(
        <SafeAreaView style={styles.container}>
           
               
                <Text style={styles.header}>
                    News App
                </Text>

              <FlatList 
              ListHeaderComponent={<Banner />}
              keyExtractor={(item,index)=>item.u_id.toString()}
              data={news_data}
              renderItem={renderNews}
              
              />

                

           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  
    header:{
        fontWeight:'bold',
        fontSize:50,
    },
    container: {
        flex:1,
        backgroundColor:"#eceff1",

    },
    
    
});
*/
}

export default App;