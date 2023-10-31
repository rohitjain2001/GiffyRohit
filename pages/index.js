import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

import React, { useState, useEffect } from 'react';
import { fetchGIFs } from "@/components/api/giphy";// Import your GIPHY API function
import Gallery from "@/components/gallery";
import SearchBar from '../components/SearchBar';

const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/router";
import Loader from "@/components/loader";

export default function Home() {

    const {authUser,isLoading,signOut} = useAuth();

    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [gifs, setGIFs] = useState([]);

    // Function to fetch GIFs based on the search query
    const searchGIFs = async () => {
        if (searchQuery) {
        try {
            const data = await fetchGIFs(searchQuery); // Call your GIPHY API function
            setGIFs(data);
        } catch (error) {
            console.error('Error fetching GIFs:', error);
        }
        }
    };

    useEffect(()=>{
        if(!isLoading && !authUser){
             router.push("/login");
        }
     },[authUser,isLoading])

    return !authUser ? ( 
    <Loader/> 
     ) :  (
        <main className="">
            <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={searchGIFs}
            />
            <Gallery gifs={gifs} />
        </main>
    );
}
