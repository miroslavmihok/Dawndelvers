import React from "react";
import { Link } from "react-router-dom";
import useGamesFetch from "../../../../hooks/useGamesFetch";
import { useRemoveGame } from "../../../../hooks/admin/useRemoveGame";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { BeatLoader } from "react-spinners";
import { formatDate } from "../../../../utils/formatDate";
import { FaPlus, FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import { toast } from "react-toastify";

const GameList = () => {
  const { refetchGames, areGamesLoading, gamesError, games } = useGamesFetch(
    `${process.env.REACT_APP_GAMES_URL}`,
  );
  const { removeGame, isGameRemoveLoading } = useRemoveGame();

  const deleteHandler = async (id) => {
    try {
      const response = await removeGame(id);
      toast.success(response.message);
      refetchGames();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full items-center justify-end">
        <Link
          to={"/admin/profile/gamelist/add"}
          className="flex w-fit items-center justify-center gap-2 rounded bg-mediumPurple px-5 py-2 font-semibold text-white hover:bg-lightPurple"
        >
          <FaPlus size={14} />
          <span>Add</span>
        </Link>
      </div>
      <table>
        <thead className="bg-darkestPurple">
          <tr className="h-[48px] text-center">
            <th className="hidden xs:table-cell">Game ID</th>
            <th>Name</th>
            <th>Created on</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {gamesError && (
            <tr>
              <td>
                <ErrorMessage msg={gamesError} />
              </td>
            </tr>
          )}
          {areGamesLoading && (
            <tr>
              <td>
                <BeatLoader color="#fff" />
              </td>
            </tr>
          )}
          {games &&
            !areGamesLoading &&
            games.map((game, index) => (
              <tr
                key={index}
                className={`h-[48px] text-center font-semibold ${index === 0 || index % 2 === 0 ? "bg-mediumPurple" : "bg-lightPurple"}`}
              >
                <td className="hidden xs:table-cell">{game._id}</td>
                <td>{game.title}</td>
                <td>{formatDate(game.createdAt)}</td>
                <td>
                  <div className="flex w-full items-center justify-center">
                    <Link
                      to={`/admin/profile/gamelist/details/${game.url}`}
                      className="flex w-fit items-center justify-center rounded-md border-none bg-darkGrey/70 px-2 py-2 hover:bg-lightGrey hover:text-black"
                    >
                      <FaRegPenToSquare />
                    </Link>
                  </div>
                </td>
                <td>
                  <button
                    className="rounded-md border-none bg-sepiaRed px-2 py-2 hover:bg-lightSepiaRed disabled:cursor-not-allowed disabled:bg-sepiaPurple"
                    disabled={isGameRemoveLoading}
                    onClick={() => deleteHandler(game._id)}
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {games.length === 0 && (
        <span className="w-full text-center">No games were created yet.</span>
      )}
    </div>
  );
};

export default GameList;
