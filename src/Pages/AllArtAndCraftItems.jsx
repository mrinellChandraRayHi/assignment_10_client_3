import { useLoaderData } from "react-router-dom";
import AllArtAndCraftCard from "../Components/AllArtAndCraftCard";
import { useState } from "react";

const AllArtAndCraftItems = () => {
    const loadedAllArtAndCraftItems=useLoaderData();
    const [allartAndCrafts, setAllArtAndCrafts]=useState(loadedAllArtAndCraftItems);
    return (
        <div>
            <div className="bg-green-600 text-white h-[200px] w-[200px] mx-auto rounded-full text-9xl flex items-center justify-center my-10"><h1>{allartAndCrafts.length}</h1></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 my-20">
                {
                    allartAndCrafts.map(allartandcraft=><AllArtAndCraftCard key={allartandcraft._id} allartAndCrafts={allartAndCrafts} allartandcraft={allartandcraft} setAllArtAndCrafts={setAllArtAndCrafts}/>)
                }
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;