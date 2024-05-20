import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const AllArtAndCraftCard = ({allartandcraft, allartAndCrafts, setAllArtAndCrafts}) => {
    const {item_name, subcategory_name, pricing, customization, processing_time, rating, description, photo,_id}=allartandcraft;
    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/crafts/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
        }
        const remaining=allartAndCrafts.filter(allart=>allart._id !==_id);
        setAllArtAndCrafts(remaining);
        });
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Item_name: {item_name}</h2>
                <p>Subcategory_name: {subcategory_name}</p>
                <p>Pricing: {pricing}</p>
                <p>Customization: {customization}</p>
                <p>Processing_time: {processing_time}</p>
                <p>Rating: {rating}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}>
                <button className="btn bg-green-600 text-xl text-white btn-sm hover:text-black"><TbListDetails /></button>
                </Link>
                <Link to={`/updateCraftItems/${_id}`}>
                <button className="btn bg-yellow-600 text-xl text-white btn-sm hover:text-black"><CiEdit /></button>
                </Link>
                <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 text-xl text-white btn-sm hover:text-black"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default AllArtAndCraftCard;