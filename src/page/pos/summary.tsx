import { useSelector } from "react-redux";
import {  Minus, Plus,} from "lucide-react";

interface POSItem {

}

const POSSummary = () => {
  const summaryItems = [];
  // const totalCost = useSelector(getTotalCost);

  return (
    <div className="w-[350px]">
      <div className="font-bold text-center text-sm">Order Summary</div>
      <div className="pos-summary-items">
        {summaryItems.map((item, index) => (
          <POSSummaryItem key={index} item={item} />
        ))}
      </div>
      <div className="pos-summary-detail"></div>
      <div className="pos-summary-actions">
        {/* <div className="flex gap-1">
            <button className="btn">Save Order</button>
            <button className="btn">Cancel Order</button>
          </div> */}
        {/* <div className="total-cost">Total Cost: ${totalCost.toFixed(2)}</div> */}
      </div>
    </div>
  );
};

export const POSSummaryItem = ({ item }) => {
  if (!item) return;

  return (
    <div className="border mb-2 p-2 rounded">
      <div className="flex justify-between">
        <div className="flex gap-2 flex-auto">
          <div className="border rounded overflow-hidden flex-shrink-0">
            <img className=" max-w-[6rem] h-full " src={item.image} alt="" />
          </div>
          <div className="pt-2 flex-auto ">
            <div className="text-sm line-clamp-2">{item.item_name}</div>
            <div className="text-sm">{item.category}</div>
            <div className="font-semibold mt-2">$ {item.price}</div>
          </div>
        </div>

        <div>
          <div role="button">
            <Trash2 className="size-5 stroke-red-500" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex items-center bg-gray-100 rounded-3xl p-1 w-32">
          <button className="rounded-full bg-white cursor-pointer p-2">
            <Minus className="size-5" />
          </button>
          <input
            type="text"
            value={item.quantity}
            className="h-full w-full bg-transparent outline-none text-center"
            readOnly
          />
          <button className="rounded-full bg-white cursor-pointer p-2">
            <Plus className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
