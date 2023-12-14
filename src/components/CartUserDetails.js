const CartUserDetails = () => {
  return (
    <div className="w-8/12">
      <div className=" bg-slate-100 shadow-xl p-5 mb-10">
        <h1 className="text-lg font-semibold">Account</h1>
        <p className="text-gray-500">
          To place your order now, log in to your existing account or sign up.
        </p>
        <section className="flex gap-4 mt-10">
          <div className="border border-green-700 text-center text-green-700 py-1 px-4 cursor-pointer">
            <p className="text-sm">Have an Account</p>
            <p>LOG IN</p>
          </div>
          <div className="border bg-green-700 text-white text-center py-1 px-4 cursor-pointer">
            <p className="text-sm">New to Tasty Food</p>
            <p>SIGN UP</p>
          </div>
        </section>
      </div>
      <div className="bg-slate-100 text-gray-600 font-semibold p-5 mb-10">
        Delivery Address
      </div>
      <div className="bg-slate-100 text-gray-600 font-semibold p-5">
        Payment
      </div>
    </div>
  );
};

export default CartUserDetails;
