import { useEffect, useState } from "react"
import { Track, useActiveTrack } from "react-native-track-player"

export const useLastActiveTrack=() =>{
    const activeTrack = useActiveTrack()
    const [lastActiveTrack, setLactiveTrackIndex] = useState<Track>()

    useEffect(()=>{
        if(!activeTrack) return
        setLactiveTrackIndex(activeTrack)
    },[activeTrack])

    return lastActiveTrack
}