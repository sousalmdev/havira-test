import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserMap from "./UserMap";
import { FaFilter, FaSync } from "react-icons/fa";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";
const UserList = () => {
  const users = useSelector((state) => state.users);

  const [filterLat, setFilterLat] = useState("all");
  const [filterLng, setFilterLng] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resetFilters = () => {
    setFilterLat("all");
    setFilterLng("all");
    setSortOrder("none");
  };

  const filteredUsers = users.filter((user) => {
    const latCondition =
      filterLat === "all" ||
      (filterLat === "above" && user.lat > 0) ||
      (filterLat === "below" && user.lat < 0);

    const lngCondition =
      filterLng === "all" ||
      (filterLng === "above" && user.lng > 0) ||
      (filterLng === "below" && user.lng < 0);

    return latCondition && lngCondition;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc") return a.name.localeCompare(b.name);
    if (sortOrder === "desc") return b.name.localeCompare(a.name);
    return 0;
  });

  const isFiltered =
    filterLat !== "all" || filterLng !== "all" || sortOrder !== "none";

  return (
    <div id="tabela" className="flex items-center py-28 flex-col min-h-full">
      <div className="bg-user bg-cover bg-center w-full">
        <h1 className="w-full bg-black/20 backdrop-blur-sm font-semibold py-5 md:py-20 md:text-6xl text-3xl text-center">
          Administração de Usuários
        </h1>
      </div>
      <div className="flex flex-col items-center w-full justify-center px-2 mt-10">
        <table className="border-collapse text-center h-96 w-10/12">
          <thead>
            <tr>
              <th className="border text-sm p-2 bg-havGreen text-black">
                Nome
              </th>
              <th className="border text-sm p-2 bg-havGreen text-black">
                Email
              </th>
              <th className="border text-sm p-2 bg-havGreen text-black">
                Cidade
              </th>
              <th className="border text-sm p-2 bg-havGreen text-black hidden md:table-cell">
                Latitude
              </th>
              <th className="border text-sm p-2 bg-havGreen text-black hidden md:table-cell">
                Longitude
              </th>
            </tr>
          </thead>
          <tbody>
            {(isFiltered ? sortedUsers : users).map((user) => (
              <tr
                key={user.id}
                className="border text-sm p-2 bg-white text-black"
              >
                <td className="border">{user.name}</td>
                <td className="border">{user.email}</td>
                <td className="border">{user.city}</td>
                <td className="border text-sm p-2 hidden md:table-cell">
                  {user.lat}
                </td>
                <td className="border text-sm p-2 hidden md:table-cell">
                  {user.lng}
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <div className="my-24 sm:flex sm:flex-col hidden ">
          <h1 className="md:text-5xl text-3xl font-light text-center">Filtre por:</h1>
          <div className="flex flex-col text-black md:flex-row  mt-5 items-center">
            <div className="sm:flex gap-4 hidden">
              <select
                value={filterLat}
                onChange={(e) => setFilterLat(e.target.value)}
                className="border rounded"
              >
                <option value="all">Todas as Latitudes</option>
                <option value="above">Maior que zero</option>
                <option value="below">Menor que zero</option>
              </select>
              <select
                value={filterLng}
                onChange={(e) => setFilterLng(e.target.value)}
                className="border rounded"
              >
                <option value="all">Todas as Longitudes</option>
                <option value="above">Maior que zero</option>
                <option value="below">Menor que zero</option>
              </select>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border rounded"
              >
                <option value="none">Ordem Alfabética</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
              <button
                onClick={resetFilters}
                className="flex items-center border p-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                <FaSync className="mr-2" /> Resetar Filtros
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col mb-10  justify-center w-full">
          <Button
            onClick={() => setIsModalOpen(true)}
            fontWeight={500}
            rightIcon={<FaFilter />}
            color={"black"}
            variant={"solid"}
            colorScheme={"gray"}
            className=" p-2 rounded w-10/12 self-center mt-10  font-light "
          >
            Filtros
          </Button>
          <Modal
            size={"sm"}
            isCentered
            colorScheme="teal"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Filtros</ModalHeader>
              <ModalCloseButton />
              <ModalBody gap={5} display={"flex"} flexDirection={"column"}>
                <Select
                  value={filterLat}
                  onChange={(e) => setFilterLat(e.target.value)}
                  className="border rounded"
                >
                  <option value="all">Todas as Latitudes</option>
                  <option value="above">Maior que zero</option>
                  <option value="below">Menor que zero</option>
                </Select>
                <Select
                  value={filterLng}
                  onChange={(e) => setFilterLng(e.target.value)}
                  className="border rounded"
                >
                  <option value="all">Todas Longitudes</option>
                  <option value="above">Maior que zero</option>
                  <option value="below">Menor que zero</option>
                </Select>
                <Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border rounded"
                >
                  <option value="none">Ordem Alfabética</option>
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={resetFilters}
                  className="border p-2 rounded"
                  colorScheme="green"
                >
                  <FaSync className="mr-2" /> Resetar Filtros
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <div className="w-full">
        <UserMap users={isFiltered ? sortedUsers : users} />
      </div>
    </div>
  );
};

export default UserList;
