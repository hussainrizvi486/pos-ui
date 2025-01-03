import { AlignJustify, Minus, Plus, Search } from "lucide-react";
import "./styles/main.css";
import { POSItemCard } from "./features/item/components";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToSummary,
  updateItemQuantity,
  removeItem,
  getSummaryItems,
  getTotalCost
} from "./features/pos/reducers/summary";

function POSApp() {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItemToSummary({ title: "mouse", price: 12 }));
  }

  return (
    <>
      <div className="h-full">
        <div className="app-container">
          <Header />
        </div>
        <div className="app-container">
          <div className="pos-home-page">
            <div className="pos-grid__wrapper">
              <div className="pos-items-grid">
                <div onClick={handleAddItem}>
                  <POSItemCard />
                </div>
              </div>
            </div>
            <POSSummary />
          </div>
        </div>
      </div>
    </>
  );
}

const Header = () => {
  return (
    <header className="pos-header">
      <div className="menu-button">
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
  const summaryItems = useSelector(getSummaryItems);
  const totalCost = useSelector(getTotalCost);

  return (
    <div className="pos-summary">
      <div className="font-bold text-center text-sm">Order Summary</div>
      <div className="pos-summary-items">
        {summaryItems.map((item: SummaryItem, index) => (
          <POSSummaryItem 
            key={`${item.title}-${index}`} 
            title={item.title} 
            price={item.price} 
          />
        ))}
      </div>
      <div className="pos-summary-detail"></div>
      <div className="pos-summary-actions">
        <div className="flex gap-1">
          <button className="btn font-semibold btn-sm rounded">Save Order</button>
          <button className="btn font-semibold btn-sm rounded">Cancel Order</button>
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