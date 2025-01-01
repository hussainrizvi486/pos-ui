
import { AlignJustify, Minus, Plus, Search } from "lucide-react";
import "./styles/main.css";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "./components/ui/dropdown";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";

function POSApp() {
  return (
    <>
      <div className="h-full max-w-screen-xl	 mx-auto">
        <div className="app-container">
          <Header />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <a>Edit Profile</a>
          </DialogTrigger>

          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>


            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sapiente veniam non nemo fuga facilis odio voluptatibus corporis saepe ducimus!

            <DialogFooter>
              <button type="submit">Save changes</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <br />
        <br />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* <div className="app-container">
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
        </div> */}
      </div>
    </>
  )
}

const Header = () => {
  // DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent
  return (
    <header className="pos-header">
      <div className="menu-button">
        <AlignJustify />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild={true}>
            <a href="#">User</a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a href="#">Settings</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Logout</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
