import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldAlert, Award, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, setIsOpen, cart, updateQuantity, removeFromCart, clearCart }) {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.spice.price * item.quantity, 0);
  const shipping = subtotal > 15 || subtotal === 0 ? 0 : 3.99;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    
    if (couponCode.toUpperCase() === 'CEYLON10') {
      setDiscount(0.10);
      setCouponSuccess('Success! 10% Discount Applied.');
    } else if (couponCode.toUpperCase() === 'FREEGOLD') {
      setDiscount(0.15);
      setCouponSuccess('Superb! 15% VIP Discount Applied.');
    } else {
      setCouponError('Invalid Coupon Code. Try CEYLON10');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
    }, 2000);
  };

  return (
    <>
      {/* Sliding Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[420px] bg-spice-light border-l border-stone-200 shadow-depth z-[60] flex flex-col transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200/80 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-900">
            <ShoppingBag className="w-5 h-5 text-spice-green" />
            <span className="font-serif text-lg font-bold">Shopping Cart</span>
            <span className="text-xs font-bold font-sans bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
              {cart.reduce((acc, item) => acc + item.quantity, 0)} Items
            </span>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              setCheckoutComplete(false);
            }}
            className="p-2 hover:bg-stone-100 text-stone-500 hover:text-stone-800 rounded-full transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {checkoutComplete ? (
          <div className="flex-1 flex flex-col justify-center items-center p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-spice-green/10 rounded-full flex items-center justify-center text-spice-green mb-2">
              <Award className="w-8 h-8 animate-bounce" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-950">Aroma Incoming!</h3>
            <p className="text-stone-600 text-sm font-sans max-w-xs leading-relaxed">
              Your order has been accepted. Traditional single-origin spices are being freshly packaged at our warehouse. Trace details sent to your email.
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
                setCheckoutComplete(false);
              }}
              className="bg-spice-green text-white font-sans font-bold text-xs px-6 py-3 rounded-xl hover:bg-spice-green/95 transition-all duration-300"
            >
              Continue Savoring Spices
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-center p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-stone-100 border border-stone-200 rounded-full flex items-center justify-center text-stone-400 mb-2">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-800">Your Cart is Empty</h3>
            <p className="text-stone-500 text-xs font-sans max-w-xs leading-relaxed">
              Unlock the bold flavors of Sri Lanka. Add hand-selected spices from our collection to begin.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-spice-red text-white font-sans font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-spice-red/90 transition-all duration-300 shadow-organic"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.spice.id}
                  className="bg-white rounded-2xl p-3 border border-stone-200/50 shadow-organic flex gap-4 items-center group relative"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 bg-stone-50 border border-stone-100 rounded-xl flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src={item.spice.image}
                      alt={item.spice.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>

                  {/* Info details */}
                  <div className="flex-1 space-y-1">
                    <h4 className="font-sans font-extrabold text-[14px] text-stone-900 leading-tight">
                      {item.spice.fullName}
                    </h4>
                    <p className="text-[10px] text-stone-400 font-sans">
                      $ {item.spice.price.toFixed(2)} per {item.spice.unit}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 pt-1.5">
                      <button
                        onClick={() => updateQuantity(item.spice.id, item.quantity - 1)}
                        className="p-1 border border-stone-200 rounded-lg bg-stone-50 text-stone-500 hover:text-stone-800 active:scale-90 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold font-sans text-stone-800 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.spice.id, item.quantity + 1)}
                        className="p-1 border border-stone-200 rounded-lg bg-stone-50 text-stone-500 hover:text-stone-800 active:scale-90 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Price Tag & Trash */}
                  <div className="text-right flex flex-col justify-between h-16">
                    <button
                      onClick={() => removeFromCart(item.spice.id)}
                      className="text-stone-400 hover:text-spice-red p-1 rounded-lg self-end transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-sans font-bold text-sm text-stone-900">
                      $ {(item.spice.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Calculations Summary Footer */}
            <div className="border-t border-stone-200/80 bg-white p-5 space-y-4 flex-shrink-0 shadow-premium">
              {/* Coupon Code Block */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon: e.g. CEYLON10"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs font-sans rounded-xl border border-stone-300 bg-stone-50 uppercase focus:border-spice-green focus:bg-white outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 bg-stone-800 hover:bg-stone-900 text-white font-sans font-bold text-xs rounded-xl transition-colors"
                >
                  Apply
                </button>
              </form>

              {/* Promo Messages */}
              {couponError && <p className="text-[10px] font-sans font-bold text-spice-red">{couponError}</p>}
              {couponSuccess && <p className="text-[10px] font-sans font-bold text-spice-green">{couponSuccess}</p>}

              {/* Price Details Stack */}
              <div className="space-y-1.5 text-xs font-sans text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-stone-900">$ {subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-spice-green font-semibold">
                    <span>Coupon Discount ({(discount * 100)}%)</span>
                    <span>- $ {discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span className="font-bold text-stone-900">
                    {shipping === 0 ? (
                      <span className="text-spice-green uppercase">Free</span>
                    ) : (
                      `$ ${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                {/* Free shipping trigger helper bar */}
                {subtotal > 0 && subtotal < 15 && (
                  <div className="bg-amber-50 border border-amber-200/40 p-2 rounded-lg text-[10px] text-amber-700 flex items-center gap-1.5 leading-none">
                    <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Add <strong className="font-sans font-extrabold">$ {(15 - subtotal).toFixed(2)}</strong> more for free global delivery!</span>
                  </div>
                )}

                <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100">
                  <span>Total Amount</span>
                  <span className="font-sans font-extrabold text-md text-spice-red">$ {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Trigger button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full flex items-center justify-center gap-2 bg-spice-green text-white font-sans font-bold text-sm py-3.5 rounded-2xl hover:bg-spice-green/90 active:scale-95 disabled:opacity-50 transition-all duration-300 shadow-premium"
              >
                {isCheckingOut ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
            setCheckoutComplete(false);
          }}
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs z-50"
        ></div>
      )}
    </>
  );
}
