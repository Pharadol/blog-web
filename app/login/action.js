"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function login(prevState, formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await axios.post(
      `${process.env.STRAPI_BASE_URL}/api/auth/local`,
      {
        identifier: email,
        password: password,
      }
    );
    cookies().set('token', response.data.jwt)
  } catch (error) {
    console.log("error", error.response);

    let errorMessage = "Login fail";

    if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
      errorMessage = error.response.data.error.message;
    }
    return { message: errorMessage };
  }
  redirect('/special-blogs')
}
