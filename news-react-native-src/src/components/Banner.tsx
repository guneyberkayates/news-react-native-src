import React from "react"
import news_banner_data from '../news_banner.json';
import { ScrollView ,StyleSheet,Dimensions,Image} from "react-native"

function Banner(){
    return(
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => ( <Image
               style={styles.banner}
               source={{uri: bannerNews.imageUrl}} />))}
          </ScrollView>
)};

const styles = StyleSheet.create({
    banner:{
        height:Dimensions.get('window').height/5,
        width:Dimensions.get('window').width/2
    },

});

export default Banner;
