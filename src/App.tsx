import { AlignJustify, Minus, Plus, Search } from "lucide-react";
import "./styles/main.css";
// import { POSItemCard } from "@features/item/components";
import { POSItemCard } from "./features/item/components";
function POSApp() {
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
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
                <POSItemCard />
              </div>
            </div>
            <POSSummary />
          </div>
        </div>
      </div>
    </>
  )
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
  )
}

const POSSummary = () => {
  return (
    <div className="pos-summary">
      <div className="font-bold  text-center text-sm">Order Summary</div>
      <div className="pos-summary-items">
        <POSSummaryItem />
        <POSSummaryItem />
        <POSSummaryItem />
        <POSSummaryItem />
      </div>
      <div className="pos-summary-detail">

      </div>
      <div className="pos-summary-actions">
        <div className="flex gap-1">
          <button className="btn font-semibold btn-sm rounded">Save Order</button>
          <button className="btn font-semibold btn-sm rounded">Cancel Order</button>

        </div>
      </div>
    </div>
  )
}


const POSSummaryItem = () => {
  return (
    <div className="pos-summary-item">
      <div className="pos-summary__item-details">
        <div className="text-sm">
          Lorem ipsum dolor sit amet.
        </div>
        <div>
          $ 130,45
        </div>
      </div>
      <div className="pos-summary__actions">
        <QtyInput />
      </div>
    </div>
  )

}
const QtyInput = () => {
  return (
    <div className="qty-input">
      <button className="qty-btn">
        <Plus />
      </button>
      <input type="text" />
      <button className="qty-btn">
        <Minus />
      </button>
    </div>
  )
}
export default POSApp
