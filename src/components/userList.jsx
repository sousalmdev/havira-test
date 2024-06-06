
import React from "react";
import useStore from "../store";

const UserList = () => {
  const users = useStore((state) => state.users);

  return (
    <div id="tabela" className="flex items-center flex-col pt-20 ">
      <div className="bg-user bg-cover bg-center w-full">
        <h1 className="w-full bg-black/20 backdrop-blur-sm font-semibold py-5 md:py-20 md:text-6xl text-3xl text-center">
          Administração de Usuários
        </h1>
      </div>
      <div className="flex mt-10 flex-col items-center w-full justify-center px-2">
        <table className="border-collapse text-center w-10/12">
          <thead>
            <tr>
              <th className="border text-sm p-1 bg-havGreen text-black ">Nome</th>
              <th className="border text-sm p-1 bg-havGreen text-black ">Email</th>
              <th className="border text-sm p-1 bg-havGreen text-black ">Cidade</th>
              <th className="border text-sm p-1 bg-havGreen text-black  hidden md:table-cell">
                Latitude
              </th>
              <th className="border text-sm p-1 bg-havGreen text-black  hidden md:table-cell">
                Longitude
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border text-sm p-1 bg-white text-black">
                <td className="border">{user.name}</td>
                <td className="border">{user.email}</td>
                <td className="border">{user.city}</td>
                <td className="border text-sm p-1 hidden md:table-cell">{user.lat}</td>
                <td className="border text-sm p-1 hidden md:table-cell">{user.lng}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
