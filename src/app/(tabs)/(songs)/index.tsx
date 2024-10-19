import { TracksList } from "@/src/components/TrackList";
import { screenPadding } from "@/src/constants/tokens";
import { useNavigationSearch } from "@/src/hooks/useNavigationSearch";
import { defaulStyles } from "@/src/styles";
import { ScrollView, Text, View } from "react-native";
import library from '../../../../assets/data/library.json'
import { useMemo } from "react";
import { trackTitleFilter } from "@/src/helpers/filter";

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Search for songs...',
            textColor: '#fff',
            
        }
    })

    const filteredTracks = useMemo(()=>{
        if(!search) return library

        return library.filter(trackTitleFilter(search))
        
    }, [search])
    return (
        <View style={defaulStyles.container}>
            <ScrollView 
            contentInsetAdjustmentBehavior="automatic"
            style={{paddingHorizontal: screenPadding.horizontal}}
            >
                <TracksList tracks={filteredTracks} scrollEnabled={false} />
            </ScrollView>
        </View>
    )
};

export default SongsScreen