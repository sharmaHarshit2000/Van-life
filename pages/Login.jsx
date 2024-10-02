import React, { useState } from "react";
import {
  Form,
  redirect,
  useLoaderData,
  useNavigate,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export async function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigation = useNavigation();
  const errorMessage = useActionData();

  function handleSubmit(e) {
    setStatus("submitting");
    setError(null);
    e.preventDefault();
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {errorMessage && <h3 className="red">{errorMessage}</h3>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
