"use client";

import React from "react";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { HiFingerPrint, HiAtSymbol, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [confirmP, setConfirmP] = useState(false)

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <div className="w-3/4 mx-auto flex flex-col gap-10">
        {/* title */}
        <div>
          <h1 className="text-gray-800 text-4xl font-bold py-4">Resister</h1>
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
              type="text"
              name="username"
              placeholder="Username"
              className={styles.inputText}
            />

            {/* icon */}
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={20} />
            </span>
          </div>
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
          <div className={styles.inputGroup}>
            <input
              type={`${confirmP ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.inputText}
            />

            {/* icon */}
            <span
              onClick={() => setConfirmP(!confirmP)}
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
              Signup
            </button>
          </div>
          <div className={styles.orContainer}>
            <hr className={styles.line} />
            <p className={styles.or}>OR</p>
          </div>
        </form>

        {/* bottom for register */}
        <p className="text-center text-gray-400">
          Have An Account? <Link href="/login"> Sign In</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Signup;
