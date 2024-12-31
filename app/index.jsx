import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, ImageBackground, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import iceCoffee from '@/assets/images/iced-coffee.png';

export default function Index() {
  return (
    <>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <View style={styles.container}>
        <ImageBackground
          source={iceCoffee}
          resizeMode="cover"
          style={styles.image}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={styles.title}>Coffee Shop</Text>
            <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Our Menu</Text>
              </Pressable>
            </Link>
            <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Contact Us</Text>
              </Pressable>
            </Link>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title:{
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'roboto',
    textAlign: 'center',
  },
  link:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'roboto',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  button:{
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    justifyContent: 'center',
    margin:2
  },
  buttonText:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'roboto',
    textAlign: 'center',
    padding: 2,
    marginVertical: 'auto',
  }
});
