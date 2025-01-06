import { AlignJustify, Minus, Plus, Search } from "lucide-react";
import "./index.css";
import { POSItemCard } from "./features/item/components";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToSummary,
  updateItemQuantity,
  removeItem,
  getSummaryItems,
  getTotalCost
} from "./features/pos/reducers/summary";
import { ListView } from "./views/list";


const data = [
  { name: 'John', age: 30, location: 'New York' },
  { name: 'Jane', age: 25, location: 'San Francisco' },
];

const columns = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Age', accessorKey: 'age' },
  { header: 'Location', accessorKey: 'location' },
];


const tempColumns = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    accessor: "age",
  },
]

function POSApp() {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItemToSummary({ title: "mouse", price: 12 }));
  }

  return (

    <div className="mx-auto max-w-[1200px]">
      <div className="h-full">
        <div className="app-container">
          <Header />
        </div>
        <ListView columns={columns} data={data} />
        {/* <div className="app-container">
          <div className="flex gap-4" >
            <div className="flex-auto">
              <div className="grid gap-4 grid-cols-6">
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
              </div>
            </div>
            <div className="flex-shrink-0 bg-white p-3 rounded-md">
              <POSSummary />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="">
      <div className="">
        <AlignJustify />
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search Item" className="search-box__input" />
        <div className="search-box_icon">
          <Search />
        </div>
      </div>
    </header>
  );
};

interface SummaryItem {
  title: string;
  price: number;
  quantity: number;
}

const POSSummary = () => {
  const summaryItems: Array<SummaryItem> = useSelector(getSummaryItems);
  const totalCost = useSelector(getTotalCost);

  return (
    <div className="">
      <div className="font-bold text-center text-sm">Order Summary</div>
      <div className="pos-summary-items">
        {summaryItems.map((item, index) => (
          <POSSummaryItem
            key={index}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className="pos-summary-detail"></div>
      <div className="pos-summary-actions">
        <div className="flex gap-1">
          <button className="btn">Save Order</button>
          <button className="btn">Cancel Order</button>
        </div>
        <div className="total-cost">
          Total Cost: ${totalCost.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

const POSSummaryItem = ({ title, price }: Omit<SummaryItem, 'quantity'>) => {
  const dispatch = useDispatch();
  const summaryItems = useSelector(getSummaryItems);
  const item = summaryItems.find(item => item.title === title);
  const quantity = item?.quantity || 0;

  const increaseItem = () => {
    dispatch(updateItemQuantity({
      title,
      quantity: quantity + 1,
      oldQuantity: quantity
    }));
  };

  const decreaseItem = () => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({
        title,
        quantity: quantity - 1,
        oldQuantity: quantity
      }));
    } else if (quantity === 1) {
      dispatch(removeItem(title));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(title))
  }

  return (
    <div className="pos-summary-item">
      <div className="pos-summary__item-details">
        <div className="text-sm">{title}</div>
        <div>${(price * quantity).toFixed(2)}</div>
      </div>
      <div className="qty-input">
        <button className="qty-btn" onClick={decreaseItem}>
          <Minus />
        </button>
        <input
          type="text"
          value={quantity}
          className="input-qty"
          readOnly
        />
        <button className="qty-btn" onClick={increaseItem}>
          <Plus />
        </button>
      </div>
      <button onClick={handleRemoveItem}>
        x
      </button>
    </div>
  );
};

export default POSApp;