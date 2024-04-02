import React from "react";
import { Link } from "react-router-dom";
import useGetAllUsers from "../../../../hooks/admin/useGetAllUsers";
import { useRemoveUser } from "../../../../hooks/admin/useRemoveUser";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { BeatLoader } from "react-spinners";
import { formatDate } from "../../../../utils/formatDate";
import { FaCheck, FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import { toast } from "react-toastify";

const UserList = () => {
  const { refetchUsers, areUsersLoading, usersError, users } = useGetAllUsers();
  const { removeUser, isUserRemoveLoading } = useRemoveUser();

  const deleteHandler = async (id) => {
    try {
      const response = await removeUser(id);
      toast.success(response.message);
      refetchUsers();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <table>
        <thead className="bg-darkestPurple">
          <tr className="h-[48px] text-center">
            <th className="hidden md:table-cell">User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="hidden xs:table-cell">Created on</th>
            <th className="hidden xs:table-cell">Admin</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersError && (
            <tr>
              <td>
                <ErrorMessage msg={usersError} />
              </td>
            </tr>
          )}
          {areUsersLoading && (
            <tr>
              <td>
                <BeatLoader color="#fff" />
              </td>
            </tr>
          )}
          {users &&
            !areUsersLoading &&
            users.map((user, index) => (
              <tr
                key={index}
                className={`h-[48px] text-center font-semibold ${index === 0 || index % 2 === 0 ? "bg-mediumPurple" : "bg-lightPurple"}`}
              >
                <td className="hidden md:table-cell">{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="hidden xs:table-cell">
                  {formatDate(user.createdAt)}
                </td>
                <td className="hidden xs:table-cell">
                  <div className="flex w-full items-center justify-center text-xl text-darkGreen">
                    {user.isAdmin ? <FaCheck /> : null}
                  </div>
                </td>
                <td>
                  <div className="flex w-full items-center justify-center">
                    <Link
                      to={`/admin/profile/userlist/details/${user._id}`}
                      className="flex w-fit items-center justify-center rounded-md border-none bg-darkGrey/70 px-2 py-2 hover:bg-lightGrey hover:text-black"
                    >
                      <FaRegPenToSquare />
                    </Link>
                  </div>
                </td>
                <td>
                  <button
                    className="rounded-md border-none bg-sepiaRed px-2 py-2 hover:bg-lightSepiaRed disabled:cursor-not-allowed disabled:bg-sepiaPurple"
                    disabled={isUserRemoveLoading}
                    onClick={() => deleteHandler(user._id)}
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <span className="w-full text-center">No users were created yet.</span>
      )}
    </div>
  );
};

export default UserList;
