import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function SearchForm({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisiblereturn, setDatePickerVisibilityReturn] =
    useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDepartDate(date);
    hideDatePicker();
  };
  const showDatePickerReturn = () => {
    setDatePickerVisibilityReturn(true);
  };

  const hideDatePickerreturn = () => {
    setDatePickerVisibilityReturn(false);
  };

  const handleConfirmReturn = (date) => {
    setReturnDate(date);
    hideDatePickerreturn();
  };

  const onSearchPress = async () => {
    await onSearch({ from, to, departDate, returnDate });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search the best prices for your next trip!
      </Text>

      <TextInput
        placeholder="From"
        value={from}
        onChangeText={setFrom}
        style={styles.input}
      />
      <TextInput
        placeholder="To"
        value={to}
        onChangeText={setTo}
        style={styles.input}
      />
      <View style={styles.datePicker}>
        <Feather
          name="calendar"
          size={26}
          color="gray"
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
        />
        <Text style={styles.pickedDateText}>
          {departDate.toLocaleDateString()}
        </Text>
        <Text style={{ marginLeft: 10, color: "gainsboro", fontSize: 20 }}>
          |
        </Text>
        <Feather
          name="calendar"
          size={26}
          color="gray"
          onPress={showDatePickerReturn}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisiblereturn}
          mode="date"
          onConfirm={handleConfirmReturn}
          onCancel={hideDatePickerreturn}
          minimumDate={departDate}
        />
        <Text style={styles.pickedDateText}>
          {returnDate.toLocaleDateString()}
        </Text>
      </View>

      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    margin: 10,

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    marginVertical: 5,
    padding: 10,
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gainsboro",
    marginVertical: 5,
    padding: 5,
  },
  pickedDateText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginLeft: 8,
  },
});
