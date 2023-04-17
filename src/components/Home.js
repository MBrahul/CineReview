import Navbar from "./Navbar";
import Movies from "./Movies";
import Filter from "./Filter";
import React from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useSelector } from "react-redux";
export default function Home() {

    const progress = useSelector(state=>state.progress);

    return (
        <>
            <LoadingBar
                color='red'
                progress={progress}
            />
            <Navbar />
            <Filter />
            <Movies />


        </>
    )
}
