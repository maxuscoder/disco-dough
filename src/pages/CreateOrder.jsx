import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import Button from "../ui/Button";
import EmptyCart from "../ui/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../ui/cartSlice";
import store from "../store";
import { formatCurrency } from "../utilities/helpers";
import { fetchAddress } from "../user/userSlice";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="grid place-items-center h-screen">
      <div className="text-orange-50 w-2/5">
        <h2 className="mb-8 text-xl font-semibold">Finish your order below:</h2>
        <Form
          method="POST"
          className="border-2 border-yellow-400/5 rounded-lg p-20 bg-[#372a1c]"
        >
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 text-[17px]">First Name</label>
            <input
              className="grow rounded-lg px-2 py-3 bg-orange-50 text-black focus:outline-none"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 text-[17px]">Phone number</label>
            <div className="grow">
              <input
                className="grow w-full rounded-lg px-2 py-3 bg-orange-50 text-black focus:outline-none"
                type="tel"
                name="phone"
                required
              />
              {formErrors?.phone && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40 text-[17px]">Address</label>
            <div className="grow">
              <input
                className="grow w-full rounded-lg px-2 text-sm py-3 bg-orange-50 text-black focus:outline-none"
                type="text"
                name="address"
                disabled={isLoadingAddress}
                defaultValue={address}
                required
              />
              {addressStatus === "error" && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {errorAddress}
                </p>
              )}
            </div>

            {!position.latitude && !position.longitude && (
              <span className="absolute right-[3px] z-50">
                <Button
                  disabled={isLoadingAddress}
                  type="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get position
                </Button>
              </span>
            )}
          </div>

          <div className="mb-12 flex items-center gap-5">
            <label htmlFor="priority" className="font-medium">
              Choose a payment method:
            </label>
            <select
              className="bg-transparent border-2 p-2"
              name="payment"
              id="payment"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            >
              <option className="text-black p-2 hover:bg-red-600">
                Cash 💵
              </option>
              <option className="text-black">Card 💳</option>
            </select>
          </div>

          <div className="mb-12 flex items-center gap-5">
            <input
              className="h-6 w-6 accent-yellow-400 focus:outline-none"
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority" className="font-medium">
              Want to yo give your order priority? (+20%)
            </label>
          </div>

          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <input
              type="hidden"
              name="position"
              value={
                position.longitude && position.latitude
                  ? `${position.latitude},${position.longitude}`
                  : ""
              }
            />

            <Button disabled={isSubmitting || isLoadingAddress} type="primary">
              {isSubmitting
                ? "Placing order...."
                : `Order now from ${formatCurrency(totalPrice)}`}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;