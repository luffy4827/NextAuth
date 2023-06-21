"use client"

import React from "react";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);

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

            {/* icon */}
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={20} />
            </span>
          </div>
          <div className={styles.inputGroup}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.inputText}
            />

            {/* icon */}
            <span
              onClick={() => setShow(!show)}
              className="icon flex items-center px-4"
            >
              <HiFingerPrint
                className="cursor-pointer hover:text-indigo-500"
                size={20}
              />
            </span>
          </div>

          {/* login buttons */}
          <div>
            <button type="submit" className={styles.button}>
              {" "}
              Login
            </button>
          </div>
          <div className={styles.orContainer}>
            <hr className={styles.line} />
            <p className={styles.or}>OR</p>
          </div>
          <div>
            <button type="button" className={styles.buttonCustom}>
              {" "}
              Sign In with Google{" "}
              <Image
                src="/assets/google.svg"
                width={18}
                height={18}
                alt=""
                className="mx-2"
              />
            </button>
          </div>
          <div>
            <button type="button" className={styles.buttonCustom}>
              {" "}
              Sign In with Github{" "}
              <Image
                src="/assets/github.svg"
                width={20}
                height={20}
                alt=""
                className="mx-2"
              />
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
