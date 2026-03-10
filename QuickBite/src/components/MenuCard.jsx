import React from 'react';
const MenuCard = ({ item, onAddToCart }) => {
    if (!item) {
        return null;
    }

    const {
        name = "Unknown Item",
        price = 0,
        category = "General",
        isVeg = true,
        available = false
    } = item;

    // Function to handle add to cart click
    const handleAdd = () => {
        if (available && onAddToCart) {
            onAddToCart(item);
        }
    };

    return (
        <div className={`relative flex flex-col p-4 rounded-2xl border transition-all duration-300 ${available
            ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1'
            : 'bg-slate-50 border-slate-100 opacity-75'
            }`}>

            {/* Veg/Non-Veg Indicator */}
            <div className="flex justify-between items-start mb-2">
                <div className={`w-5 h-5 border-2 flex items-center justify-center rounded-sm ${isVeg ? 'border-green-600' : 'border-red-600'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                </div>
                {!available && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                        Out of Stock
                    </span>
                )}
            </div>

            {/* Item Details */}
            <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">{name}</h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{category}</p>
            </div>

            {/* Price and Action */}
            <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-sm text-slate-400 font-medium">Price</span>
                    <span className="text-xl font-extrabold text-slate-900">
                        ₹{price}
                    </span>
                </div>

                <button
                    onClick={handleAdd}
                    disabled={!available}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${available
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        }`}
                >
                    {available ? 'Add' : 'Unavailable'}
                </button>
            </div>

            {/* Visual background element for decorative purposes */}
            <div className="absolute top-0 right-0 -z-10 opacity-5 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="text-slate-400">
                    <circle cx="90" cy="10" r="40" />
                </svg>
            </div>
        </div>
    );
};

export default MenuCard;
