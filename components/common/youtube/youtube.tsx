import React from "react";

const PageYouTube = () => {
    return (
        <>
            <h1 className="text-center text-4xl py-2">PageYouTube</h1>
            <iframe
                className='m-auto'
                width="800"
                height="450"
                src="https://www.youtube.com/embed/o6o33FT5YME?si=r_kBzq_YM9oirMeR"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </>
    );
}

export default PageYouTube;
