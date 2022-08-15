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

function Sidebar() {
    const { data: session, status } = useSession();
    
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
        <div className="space-y-4">
            <SidebarItems Icon={""} title='Logout' onclick={() => signOut()}/>
            <SidebarItems Icon={HomeIcon} title='Home'/>
            <SidebarItems Icon={SearchIcon} title='Search'/>
            <SidebarItems Icon={LibraryIcon} title='Your Library'/>
            <hr className="border-t-[0.1px] border-gray-900" />
            <SidebarItems Icon={PlusCircleIcon} title='Create Playlist'/>
            <SidebarItems Icon={HeartIcon} title='Liked Songs'/>
            <SidebarItems Icon={RssIcon} title='Your Episodes'/>
            <hr className="border-t-[0.1px] border-gray-900" />

            {/* Playlists... */}
            <p className="cursor-pointer hover:text-white">
                Playlist name...
            </p>
        </div>

    </div>
  );
}

export default Sidebar;