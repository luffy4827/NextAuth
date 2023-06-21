import React from "react";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

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
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputText}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.inputText}
            />
          </div>

          {/* login buttons */}
          <div>
            <button type="submit" className={styles.button}>
              {" "}
              Login
            </button>
          </div>
          <div className={styles.orContainer}>
            <hr className={styles.line}/>
            <p className={styles.or}>OR</p>
          </div>
          <div>
            <button type="button" className={styles.buttonCustom}>
              {" "}
              Sign In with Google <Image src="/assets/google.svg" width={18} height={18} alt="" className="mx-2" />
            </button>
          </div>
          <div>
            <button type="button" className={styles.buttonCustom}>
              {" "}
              Sign In with Github <Image src="/assets/github.svg" width={20} height={20} alt="" className="mx-2" />
            </button>
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
