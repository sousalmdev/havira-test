import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStore from "../store";
import { Button } from "@chakra-ui/react";

export const UserForm = () => {
  const addUser = useStore((state) => state.addUser);
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      lat: "",
      lng: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      city: Yup.string().required("Required"),
      lat: Yup.number().required("Required"),
      lng: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      setIsSubmitting(true);
      setTimeout(() => {
        addUser(values);
        formik.resetForm();
        setIsSubmitting(false);
      }, 1000); 
    },
  });

  return (
    <div id="form" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-havGreen/40 to-transparent py-20">
      <div className="bg-user w-full"><h1 className="w-full bg-black/20 backdrop-blur-sm font-semibold py-10 md:py-20 md:text-6xl text-3xl text-center text-white">
        Cadastre seu usuário
      </h1></div>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 sm:w-8/12 w-11/12 text-white bg-black/50 rounded-lg shadow-md p-6 space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            {...formik.getFieldProps("name")}
            className="border rounded-md p-2 text-black focus:outline-none focus:border-yellow-500"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps("email")}
            className="border rounded-md text-black p-2 focus:outline-none focus:border-yellow-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="text-lg">
            Cidade:
          </label>
          <input
            type="text"
            id="city"
            {...formik.getFieldProps("city")}
            className="border rounded-md text-black p-2 focus:outline-none focus:border-yellow-500"
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500">{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="lat" className="text-lg">
            Latitude:
          </label>
          <input
            type="number"
            id="lat"
            {...formik.getFieldProps("lat")}
            className="border rounded-md text-black p-2 focus:outline-none focus:border-yellow-500"
          />
          {formik.touched.lat && formik.errors.lat ? (
            <div className="text-red-500">{formik.errors.lat}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="lng" className="text-lg">
            Longitude:
          </label>
          <input
            type="number"
            id="lng"
            {...formik.getFieldProps("lng")}
            className="border rounded-md text-black p-2 focus:outline-none focus:border-yellow-500"
          />
          {formik.touched.lng && formik.errors.lng ? (
            <div className="text-red-500">{formik.errors.lng}</div>
          ) : null}
        </div>
        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Submitting"
          colorScheme="green"
          variant="solid"
          className="w-full"
        >
          Adicionar Usuário
        </Button>
      </form>
    </div>
  );
};
