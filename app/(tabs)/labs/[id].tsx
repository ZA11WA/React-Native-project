import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import TemperatureConverter from "./TemperatureConverter";

const LabsPage = () => {
    const { id } = useLocalSearchParams<{ id: string }>();

    // Define different content and styles for each lab
    let labContent, labStyles;
    if (id === "1") {
        labContent = "Lab 1 Content";
        labStyles = styles.lab1;
          <TemperatureConverter />; // Include the TemperatureConverter component
    } else if (id === "2") {
    } else if (id === "2") {
        labContent = "Lab 2 Content";
        labStyles = styles.lab2;
    } else {
        // Handle other cases or invalid IDs
        labContent = "Invalid Lab ID";
        labStyles = styles.invalid;
    }

    return ( 
        <View style={[styles.container, labStyles]}>
            <Text style={styles.text}>{labContent}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    lab1: {
        backgroundColor: 'lightblue',
    },
    lab2: {
        backgroundColor: 'lightgreen',
    },
    invalid: {
        backgroundColor: 'lightgray',
    }
});
 
export default LabsPage;
