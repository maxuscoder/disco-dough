import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const divClassName = "flex justify-center items-center";
const labelClassName = "grow text-[15px]";
const inputClassName =
  "w-1/2 rounded-md px-2 py-1 bg-orange-50 text-black focus:outline-none";

function CardLayout() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="space-y-5 w-5/6 m-auto bg-[#211911] p-6 rounded-sm mb-8">
      <div className={divClassName}>
        <label className={labelClassName}>Name on card</label>
        <input
          className={inputClassName}
          type="text"
          name="customer"
          defaultValue={null}
          required
        />
      </div>

      <div className={divClassName}>
        <label className={labelClassName}>Card number</label>
        <input
          className={inputClassName}
          type="text"
          name="customer"
          defaultValue={null}
          required
        />
      </div>

      <div className={divClassName}>
        <label className={labelClassName}>Expiration date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="rounded-md px-2 py-1 bg-orange-50 text-black focus:outline-none"
        />
      </div>

      <div className={divClassName}>
        <label className={labelClassName}>CVC</label>
        <input
          className={inputClassName + " w-1/5"}
          type="text"
          name="customer"
          defaultValue={null}
          required
        />
      </div>
    </div>
  );
}

export default CardLayout;
