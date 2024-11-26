"use client";

import Button from "../../../components/Button";
import { useForm, ValidationError } from "@formspree/react";

export default function Component() {
  const [state, handleSubmit] = useForm("xoqgbevr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className=" w-screen py-22 flex flex-col items-center justify-center mb-12">
      <div className="text-center mt-24 mb-48">
        <h2 className="text-3xl font-bold text-gray-50 tracking-tight sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-3  xl:px-48 px-12  md:text-xl text-gray-20">
          Who can I talk to if I have questions? Call support on 0725152255 or
          email us at support@ecovent.co.ke or use the contact form below.
        </p>
      </div>
      <div className="shadow-lg rounded-lg shadow-yellow-200 xl:shadow-green-200 p-10 w-[80%] border border-gray-300">
        <h2 className="font-bold text-2xl text-gray-50">Contact Us</h2>
        <p className="text-gray-20 text-lg">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-4 mt-10 pb-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="block font-medium text-gray-500 mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="border border-gray-300  hover:border-gray-700 hover:ease-in-out hover:duration-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
                id="first-name"
                typeof="text"
                placeholder="Enter your First Name"
                required
              />
              <ValidationError errors={state.errors} />
            </div>
            <div className="space-y-2">
              <label
                className="block font-medium text-gray-500 mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="border border-gray-300  hover:border-gray-700 hover:ease-in-out hover:duration-500 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
                typeof="text"
                id="last-name"
                placeholder="Enter your Last Name"
                required
              />
              <ValidationError errors={state.errors} />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block font-medium text-gray-500 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
              typeof="email"
              id="email"
              placeholder="Enter your Email Address"
              required
            />
            <ValidationError errors={state.errors} />
          </div>
          <div className="space-y-2 text-gray-500">
            <label htmlFor="messages " >Message Our Team</label>
            <textarea
              className="border border-gray-300  rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 min-h-[100px]"
              rows={6}
              typeof="message"
              placeholder="Your Message for the Team"
            />
            <ValidationError errors={state.errors} />
          </div>
        </form>
        <div className="space-y-2">
          <Button type="submit" title="Submit" variant="btn_dark_green_none" />
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="flex items-center justify-center -screen py-24">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Contact Our Team
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block font-medium text-gray-700 mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
                id="firstName"
                name="firstName"
                required
                type="text"
              />
            </div>
            <div>
              <label
                className="block font-medium text-gray-700 mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
                id="lastName"
                name="lastName"
                type="lastName"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
              <input type="email" className="border border-gray-300 rounded-md px-3 py-3 w-full focus:outline-none" required  id="email" name="email"/>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-blue-500 focus:border-blue-500 "
                rows={4}
                name="message"
                id="message"
              />
              <Button type="button" title="Submit" variant="btn_dark_green" />
            </div>
          </div>
        </form>
      </div>
  </div>*/
}
