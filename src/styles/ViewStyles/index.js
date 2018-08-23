import { StyleSheet } from "react-native";


const ViewStyles = StyleSheet.create({
    flexCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    flexCenterVertical: {
        display: "flex",
        justifyContent: "center"
    },
    flexCenterHorizontal: {
        display: "flex",
        alignItems: "center"
    },
    flexDirectionRow: {
        flexDirection: "row"
    },
    containerFluid: {
        width: "100%",
        padding: 0,
    },
    container: {
        width: "100%",
        padding: 15,
    }
});

export default ViewStyles