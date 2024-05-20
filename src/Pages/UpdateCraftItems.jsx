import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraftItems = () => {
    const loadedUpdateItems=useLoaderData();
    const {item_name, subcategory_name, pricing, customization, processing_time, rating, description, photo, _id}=loadedUpdateItems;
    const handleUpdateCraft=(e)=>{
        e.preventDefault();
        const form=e.target;
        const item_name=form.item_name.value;
        const subcategory_name=form.subcategory_name.value;
        const pricing=form.pricing.value;
        const customization=form.customization.value;
        const processing_time=form.processing_time.value;
        const rating=form.rating.value;
        const description=form.description.value;
        const photo=form.photo.value;
        const addCraft={item_name, subcategory_name, pricing, customization, processing_time, rating, description, photo}
        console.log(addCraft);

        fetch(`http://localhost:5000/crafts/${_id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
            <div><h1 className="text-center font-bold text-5xl my-10">This is Update Form:</h1></div>
            <form onSubmit={handleUpdateCraft}>
                <div className="bg-gray-400 p-4 rounded mb-10">
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Item_Name: </label>
                        <input defaultValue={item_name} className="w-full p-2 border border-black rounded" type="text" name="item_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Subcategory_Name: </label>
                        <input defaultValue={subcategory_name} className="w-full p-2 border border-black rounded" type="text" name="subcategory_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Pricing: </label>
                        <input defaultValue={pricing} className="w-full p-2 border border-black rounded" type="number" name="pricing" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Customization: </label>
                        <select defaultValue={customization}  name="customization" id="" className="w-full border border-black p-2 rounded">
                            <option value="yes">Yes</option>
                            <option value="no">NO</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Processing_time:</label>
                        <input defaultValue={processing_time} className="w-full border border-black p-2 rounded" type="number" name="processing_time" id="" />
                    </div>
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Rating: </label>
                        <input defaultValue={rating} className="w-full border border-black p-2 rounded" type="number" name="rating" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Short Description: </label>
                        <textarea defaultValue={description} className="w-full border border-black p-2 rounded" name="description" id=""></textarea>
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Photo: </label>
                        <input defaultValue={photo} className="w-full border border-black p-2 rounded" type="text" name="photo" id="" />
                    </div>
                    <div>
                        <input className="w-full border border-black p-2 rounded mt-10 bg-red-200 font-bold" type="submit" value="Update Craft" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateCraftItems;