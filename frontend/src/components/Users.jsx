const user = {
  firstName: "Sahil ",
  lastNmae: "Chauhan",
  _id: 123,
};
import { Button } from "./Button";
export const Users = () => {
  return (
    <>
      <div className="font-bold mt-6 text-lg pl-4">Users</div>
      <div className="my-2 pl-3">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"></input>
      </div>
      <div className="pl-3">
        <User user={user}></User>
      </div>
    </>
  );
};
function User({ user }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
