import { StyleSheet } from "react-native";
import { colors, fontSize } from "../constants/tokens";

const defaulStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    text: {
        fontSize: fontSize.base,
        color: colors.text,
    },
})

const utilityStyles = StyleSheet.create({
    itemSeparator: {
        borderColor: colors.textMuted,
        borderWidth: StyleSheet.hairlineWidth,
        opacity: 0.3,
    },
    emptyComponentText: {
        ...defaulStyles.text,
        color: colors.textMuted,
        textAlign: 'center',
        marginTop: 20,
    },
    emptyComponentImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
        opacity: 0.3,
    },
    centeredRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slider: {
        height: 7,
        borderRadius: 16
    },
})

export { defaulStyles, utilityStyles }