import React, { useEffect } from "react";

import UserList from "./userList";
import UserMap from "./Map";
import { getUsers } from "../services/api/api";
import useStore from "../store";
import { Header } from "./Header";
import { UserForm } from "./Form";

const HomePage = () => {
  const { users, setUsers } = useStore();

  useEffect(() => {
    getUsers().then((response) => {
      const formattedUsers = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
        street: user.address.street,
        suite: user.address.suite,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        companyName: user.company.name,
        lat: parseFloat(user.address.geo.lat),
        lng: parseFloat(user.address.geo.lng),
      }));

      setUsers(formattedUsers);
    });
  }, [setUsers]);

  return (
    <>
      <Header />
      <div className="pt-36 space-y-8">
        <UserList users={users} />
        <UserMap users={users} />
        <UserForm />
      </div>
    </>
  );
};

export default HomePage;
