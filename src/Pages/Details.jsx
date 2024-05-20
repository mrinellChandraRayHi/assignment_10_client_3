import { Link, useLoaderData } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Details = () => {
    const loadedDetails=useLoaderData();
    const {item_name, subcategory_name, pricing, customization, processing_time, rating, description, photo}=loadedDetails;
    return (
        <div className="card card-compact w-96 bg-base-100 mx-auto mt-20 shadow-xl">
            <figure><img src={photo} alt="Photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">Item_name: {item_name}</h2>
                <p>Subcategory_name: {subcategory_name}</p>
                <p>Pricing: {pricing}</p>
                <p>Customization: {customization}</p>
                <p>Processing_time: {processing_time}</p>
                <p>Rating: {rating}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                <Link to='/allArtAndCraftItems'>
                <button className="btn btn-primary btn-sm text-xl"><FaLongArrowAltLeft /></button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;