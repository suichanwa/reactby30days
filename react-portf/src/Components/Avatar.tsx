import React from 'react';

const Avatar = () => {
    const avatarStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '100%',
        backgroundColor: '#f44336',
        display: 'block',
        marginBottom: '20px',
        backgroundRepeat: 'no-repeat',
    };

    const avartImg = "https://cdn.donmai.us/sample/a2/fe/__hoshimachi_suisei_hololive_drawn_by_puunyannyan__sample-a2fe33c7a48091d9021f9400d7e3771b.jpg";

    return (
        <img src={avartImg} style={avatarStyle} />
    );
};

export default Avatar;