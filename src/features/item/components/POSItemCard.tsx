
export const POSItemCard = () => {
    return (
        <div className="p-2 h-44 bg-white rounded-md cursor-pointer 
       shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        ">
            <div className="item-card__image">
                <img src="https://m.media-amazon.com/images/I/61a0KNfNNNL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            </div>
            <div className="item-card__details">
                <div className="text-sm overflow-hidden truncate">Corsair M55 RGB PRO Ambidextrous Multi-Grip Gaming Mouse (AP) CH-9308011-AP Black</div>
                <div className="text-sm font-semibold">$69.59</div>
            </div>
        </div>
    )
}
