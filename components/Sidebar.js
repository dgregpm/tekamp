import React from 'react';
import SidebarItems from './SidebarItems';
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import useSpotify from '../hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistatom';


function Sidebar() {
    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [playlists, setPlaylists] = useState([]);
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

    useEffect(() => {
        if(spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items);
            });
        }
    }, [session, spotifyApi]);
    
  return (
    <div className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36">
        <div className="space-y-4">
            <SidebarItems Icon={HomeIcon} title='Home'/>
            <SidebarItems Icon={SearchIcon} title='Search'/>
            <SidebarItems Icon={LibraryIcon} title='Your Library'/>
            <hr className="border-t-[0.1px] border-gray-900" />
            <SidebarItems Icon={PlusCircleIcon} title='Create Playlist'/>
            <SidebarItems Icon={HeartIcon} title='Liked Songs'/>
            <SidebarItems Icon={RssIcon} title='Your Episodes'/>
            <hr className="border-t-[0.1px] border-gray-900" />

            {/* Playlists... */}
            {playlists.map((playlist) => (
                <p key={playlist.id} className="cursor-pointer hover:text-white">
                {playlist.name}
                </p>
                )
            )}
        </div>

    </div>
  );
}

export default Sidebar;