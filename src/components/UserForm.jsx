import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../store";
import { Button, useToast } from "@chakra-ui/react";

export const UserForm = () => {
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      lat: "",
      lng: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Obrigatório."),
      email: Yup.string().email("Invalid email").required("Obrigatório."),
      city: Yup.string().required("Obrigatório."),
      lat: Yup.number().required("Apenas números."),
      lng: Yup.number().required("Apenas números."),
    }),
    onSubmit: (values) => {
      setIsSubmitting(true);
      setTimeout(() => {
        dispatch(addUser(values));
        formik.resetForm();
        setIsSubmitting(false);

        setTimeout(() => {
          toast({
            title: "Usuário cadastrado com sucesso.",
            description: "Criamos seu usuário.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        });
      }, 1000);
    },
  });

  return (
    <div
      id="form"
      className="flex flex-col items-center justify-center md:min-h-screen  pb-44"
    >
      <div className="bg-hav bg-center bg-cover w-full">
        <h1 className="w-full bg-black/20 backdrop-blur-sm font-semibold py-10 md:py-20 md:text-6xl text-3xl text-center text-white">
          Cadastre seu usuário
        </h1>
      </div>
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
          backgroundColor={'#88E771'}
          _hover={{backgroundColor:'#45713a',color:'white'}}
          variant="solid"
          className="w-full"
        >
          Adicionar Usuário
        </Button>
      </form>
    </div>
  );
};
