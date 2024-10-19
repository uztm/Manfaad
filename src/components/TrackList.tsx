import { FlatList, FlatListProps, Text, View } from "react-native"
import library from "../../assets/data/library.json"
import TrackListItem from "./TrackListItem"
import { utilityStyles } from "../styles"
import TrackPlayer, { Track } from "react-native-track-player"
import FastImage from "react-native-fast-image"
import { unknownTrackImageUri } from "../constants/images"

export type TracksListProps = Partial<FlatListProps<Track>> & {
    tracks: any[]
}

const ItemDevider = () => (
    <View style={{ ...utilityStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
    const hendleTrackSelect = async (track: Track) => {
        await TrackPlayer.load(track)
        await TrackPlayer.play()

    }

    return (
        <FlatList
            data={tracks}
            ItemSeparatorComponent={ItemDevider}
            ListFooterComponent={ItemDevider}
            ListEmptyComponent={
                <>
                    <View>
                        <Text style={utilityStyles.emptyComponentText}>No songs found</Text>
                        <FastImage source={{
                            uri: unknownTrackImageUri,
                            priority: FastImage.priority.normal,
                        }}
                            style={utilityStyles.emptyComponentImage}
                        />
                    </View>
                    </>
            }
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            renderItem={({ item: track }) => <TrackListItem onTrackSelect={hendleTrackSelect} track={track} />}
            {...flatlistProps}
        />
    )
}