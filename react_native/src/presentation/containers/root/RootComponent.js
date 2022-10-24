import { View, Text } from "react-native"
import styles from "../../stylesheets/StyleSet"

/**
 * component ui that is used in container.
 * @returns {JSX.Element}
 */
export default function RootComponent(scanningState) {
    return (
        <View style={styles.root_container}>
            <Text>Aiden Koo's Page</Text>
            <Text>Scanning State: {scanningState}</Text>
        </View>
    )
}