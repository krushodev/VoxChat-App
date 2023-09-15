import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";

import { IRoom } from "../../types";

import RoomButton from "../RoomButton/RoomButton";
import RoomCard from "../RoomCard/RoomCard";

const RoomsListContainer = () => {
  const [roomsList, setRoomsList] = useState<IRoom[]>([]);

  return (
    <View style={styles.container}>
      {roomsList.length > 0 ? <FlatList data={roomsList} renderItem={({ item }) => <RoomCard item={item} />} keyExtractor={(item) => item.id} /> : <Text style={styles.text}>No hay rooms</Text>}
      <RoomButton setRoomsList={setRoomsList} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  text: {
    fontSize: 30
  }
});

export default RoomsListContainer;