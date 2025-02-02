import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item));
  }
  return (
    <>
      {items.map((item) => {
        return <div data-testid="itemsId" className="item-box flex justify-between border-b-2 mb-4 leading-7 pb-4" key={item.id}>
          <div className="w-5/6">
            <h3 className="text-lg text-slate-500 font-bold">{item.name}</h3>
            <p>₹{item.price || item.defaultPrice}</p>
            {item.rating ? <p>Rating : {item.rating}</p>: null}
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="">
            <button onClick={()=>handleAddItem(item)} className={`${item.image?"absolute":null} ml-4 bg-white text-black border border-zinc-700 font-semibold px-4`}>Add +</button>
            {item.image?<img src={CDN_URL+item.image} className="ml-4 w-32 object-cover h-32"/>:null}
          </div>
        </div>
      })}
    </>
  );
};

export default ItemsList;

