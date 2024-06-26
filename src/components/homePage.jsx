import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../services/api/api";
import { Header } from "./Header";
import { UserForm } from "./UserForm";
import UserList from "./userList";
import { setUsers } from "../store";
import Footer from "./Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

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

      dispatch(setUsers(formattedUsers));
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="min-h-screen scroll-smooth space-y-8">
        <UserList users={users} />
        <UserForm />
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
