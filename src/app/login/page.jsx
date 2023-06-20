import React from "react";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-3/4 mx-auto flex flex-col gap-10">
        {/* title */}
        <div>
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <h1 className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            facilis.
          </h1>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          {/* inputs */}
          <div>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>

          {/* buttons */}
          <div>
            <button type="submit"> Login</button>
          </div>
          <div>
            <button type="submit"> Sign In with Google</button>
          </div>
          <div>
            <button type="submit"> Sign In with Github</button>
          </div>
        </form>

        {/* bottom for register */}
        <p className="text-center text-gray-400">
          Don&apos;t Have An Account? <Link href="/signup"> Sign Up</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
