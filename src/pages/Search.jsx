import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/api'
import VideoSearch from '../components/video/VideoSearch';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideo ] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?type=video&part=snippet&q=${searchId}`)
            .then((data) => setVideo(data.items));
    }, [searchId]);

    return (
        <section id='searchPage'>

            <h2>😘 {searchId} 영상입니다.</h2>
            <div className='video__inner search'>
                <VideoSearch videos={videos} />
            </div>
        </section>
    )
}

export default Search