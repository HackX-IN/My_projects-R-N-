import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Card, Container, Interaction, InteractionWrapper, PostImg, PostText, PostTime, UserImg, UserInfo, UserInfoText, UserName} from '../styles/FeedStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
const HomeScreen = () => {
  return (
    <Container >

      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/user-2.jpg')} />
        <UserInfoText>
        <UserName>James Kary</UserName>
        <PostTime>3 hours Ago</PostTime>
        </UserInfoText>
        </UserInfo>
        <PostText>Hello This is my New Post</PostText>
        <PostImg source={require('../assets/posts/post-img-2.jpg')}/>
        <InteractionWrapper>
          <Interaction>
            <Ionicons name="ios-heart-outline" size={25}/>
            <Text>Like</Text>
          </Interaction>
          <Interaction>
            <Ionicons name="ios-chatbubble-outline" size={25}/>
            <Text>Comment</Text>
          </Interaction>
        </InteractionWrapper>
      </Card>


    
    </Container>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})