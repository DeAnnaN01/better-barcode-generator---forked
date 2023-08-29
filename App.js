import {StyleSheet, Text, View} from "react-native";
import Barcode from "./components/Barcode";
import barcodesList from "./barcodesList";

const App = () => {


    return (
        <View style={styles.container} >
            <Barcode value={barcodesList[0]} options={{format: 'UPC', background: 'yellow'}} />
            <Barcode value={barcodesList[1]} options={{format: 'UPC', background: 'green'}} />
            <Barcode value={barcodesList[2]} options={{format: 'UPC', background: 'pink'}} />
            <Barcode value={barcodesList[3]} options={{format: 'UPC', background: 'lavender'}} />
            <Barcode value={barcodesList[4]} options={{format: 'UPC', background: 'orange'}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
