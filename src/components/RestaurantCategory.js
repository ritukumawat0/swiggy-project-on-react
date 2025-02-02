import ItemsList from "./ItemsList";

const RestaurantCategory = ({ category, setShowItems, showItems , setShowIndex , index}) => {
  const handleClick = () => {
    setShowItems(!showItems);
    setShowIndex(index)
  };

  return (
    <div
      className="res-category w-6/12 mx-auto p-4 mt-4  shadow-md hover:cursor-pointer"
      key={category.resTitle}
    >
      <div
        className="res-title mb-4 flex justify-between"
        onClick={() => handleClick()}
      >
        <h3 className="font-semibold">
          {category.resTitle} ({category.items.length})
        </h3>
        <span>⬇️</span>
      </div>
      {showItems ? <ItemsList items={category.items} /> : null}
    </div>
  );
};

export default RestaurantCategory;
