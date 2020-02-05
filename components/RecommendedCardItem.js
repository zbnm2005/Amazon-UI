import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CardItem, Card, Right, TabHeading } from 'native-base';
import starRating from 'react-native-star-rating';
import StarRating from 'react-native-star-rating';

class RecommendedCardItem extends React.Component{
  render(){
    return (
      <CardItem>
          <View>
              <Image style ={{height:90, width:90}}
              source={this.props.imageUri}/>
          </View>

          <Right style ={{flex:1, alignItems:'flex-start', height:90,
            paddingHorizontal :20}}>
            <Text>{this.props.itemName}</Text>
            <Text style ={{color :'grey', fontSize:11}}>{this.props.itmeCreator}</Text>
            <Text style={{fontSize:14, fontWeight:'bold',color: '#c4402f'}}>
                {this.props.itemPrice}</Text>
            <Text><Text style = {{color:'grey', fontWeight: '300', fontSize: 11}}>
                you save
            </Text>${this.props.savings}</Text>

            <StarRating
            disabled ={true}
            maxStars ={5}
            rating = {this.props.rating}
            starSize ={12}
            fullStarColor='orange'
            exmptyStarColor ='orange' />
          </Right>
      </CardItem>
    );
  }
}
export default RecommendedCardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});