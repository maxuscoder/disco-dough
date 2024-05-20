import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const divClassName = "flex flex-col justify-center items-center";
const labelClassName = "grow text-[15px]";
const inputClassName =
  "w-full sm:w-1/2 rounded-md px-2 py-1 bg-orange-50 text-black focus:outline-none";

function CardLayout() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="space-y-5 w-full flex flex-col m-auto bg-[#211911] p-6 rounded-sm mb-8">
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

      <div className={divClassName + " md:flex-row"}>
        <label className={labelClassName}>Expiration date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="rounded-md w-full px-2 py-1 bg-orange-50 text-black focus:outline-none"
        />
      </div>

      <div className={divClassName}>
        <label className={labelClassName}>CVC</label>
        <input
          className={
            "rounded-md px-2 py-1 bg-orange-50 text-black focus:outline-none w-[30%] sm:w-1/5"
          }
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
