import { useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-white px-3 py-2 text-lg bg-transparent border-[2px] border-transparent focus:border-[#8c8c8c7c] rounded-md focus:border-[2px] focus:outline-none focus:ring-0"
        type="text"
        placeholder="Type here..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className="mt-[35px]">
        {username !== "" ? (
          <Button type="primary" disabled={false}>
            Start ordering
          </Button>
        ) : (
          <Button type="primary" disabled={true}>
            Username Required
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
