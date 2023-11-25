const Popup = () => {
  return (
    <div className="w-4/12 h-44 bg-blue-50 shadow-2xl p-5 rounded-lg">
      <p className="font-semibold">
        Your cart consists of items from different restaurant, adding this item
        will remove other items.
      </p>
      <p className="italic font-thin mt-5">Do you want to continue?</p>
      <div className="flex justify-between my-2">
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md py-1 px-2">
          Cancel
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md py-1 px-2">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Popup;
