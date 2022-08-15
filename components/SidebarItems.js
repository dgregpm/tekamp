import React from 'react';

function SidebarItems({Icon, title, onclick}) {
    if(Icon) {
        return (
            <button className="flex items-center space-x-2 hover:text-white" onClick={onclick}>
                <Icon className="w-5 h-5" />
                <p>{title}</p>
            </button>
        );
    } else {
        return (
            <button className="flex items-center space-x-2 hover:text-white" onClick={onclick}>      
                <p>{title}</p>
            </button>
        );
    }
}

export default SidebarItems;