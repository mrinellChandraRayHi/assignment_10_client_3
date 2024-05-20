import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCraftItem = () => {
    const handleAddCraft=(e)=>{
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

        fetch('https://assignment-10-server-3.vercel.app/crafts',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            form.reset();
        })
    }
    return (
        <div>
            <div><h1 className="text-center font-bold text-5xl my-10">This is Add Form:</h1></div>
            <form onSubmit={handleAddCraft}>
                <div className="bg-gray-400 p-4 rounded mb-10">
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Item_Name: </label>
                        <input className="w-full p-2 border border-black rounded" type="text" name="item_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Subcategory_Name: </label>
                        <input className="w-full p-2 border border-black rounded" type="text" name="subcategory_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Pricing: </label>
                        <input className="w-full p-2 border border-black rounded" type="number" name="pricing" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Customization: </label>
                        <select  name="customization" id="" className="w-full border border-black p-2 rounded">
                            <option value="yes">Yes</option>
                            <option value="no">NO</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Processing_time:</label>
                        <input className="w-full border border-black p-2 rounded" type="number" name="processing_time" id="" />
                    </div>
                    <div>
                        <label className="text-xl font-bold" htmlFor="">Rating: </label>
                        <input className="w-full border border-black p-2 rounded" type="number" name="rating" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Short Description: </label>
                        <textarea className="w-full border border-black p-2 rounded" name="description" id=""></textarea>
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Photo: </label>
                        <input className="w-full border border-black p-2 rounded" type="text" name="photo" id="" />
                    </div>
                    <div>
                        <input className="w-full border border-black p-2 rounded mt-10 bg-red-200 font-bold" type="submit" value="Add Craft" />
                    </div>
                    <Link to='/allArtAndCraftItems'>
                    <button className="btn btn-active btn-primary btn-sm text-xl mt-5"><FaLongArrowAltLeft /></button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddCraftItem;