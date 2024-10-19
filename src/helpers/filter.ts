export const trackTitleFilter = (title: string)=>(track: any)=>
    track.title.toLowerCase().includes(title.toLowerCase())

// export const trackArtistFilter = (artist: string)=>(track: Track)=>