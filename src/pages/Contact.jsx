import { useState, useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "HB Portfolio | Contact";
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "Contact", name, email, message }),
      });
      if (response.ok) {
        const result = await response.json();
        alert("Form successfully sent!");
        return result;
      }
    } catch (error) {
      alert("Error: ", error);
    }
  };

  return (
    <section className="p-4">
      <h1 className="text-[42px] md:text-5xl font-header text-accent text-center">
        Contact Me
      </h1>
      <form
        name="Contact"
        className="mt-6 bg-primary px-8 py-6 rounded-xl shadow-lg w-full md:w-4/5 lg:w-3/5 m-auto"
        onSubmit={handleSubmit}
        // eslint-disable-next-line react/no-unknown-property
        netlify
      >
        <div className="flex flex-col justify-start mb-6 gap-y-2">
          <label
            htmlFor="name"
            className="font-mainText text-accent2 text-xl md:text-2xl"
          >
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="First Last"
            className="font-mainText text-accent text-xl md:text-2xl rounded-xl outline-none  px-2 py-1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start mb-6 gap-y-2">
          <label
            htmlFor="email"
            className="font-mainText text-accent2 text-xl md:text-2xl"
          >
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="example@gmail.com"
            className="font-mainText text-accent text-xl md:text-2xl rounded-xl outline-none  px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start mb-6 gap-y-2">
          <label
            htmlFor="message"
            className="font-mainText text-accent2 text-xl md:text-2xl"
          >
            Message:{" "}
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            placeholder="Enter message here..."
            className="font-mainText text-accent text-xl md:text-2xl rounded-xl outline-none shadow px-2 py-1"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="block m-auto text-xl md:text-2xl rounded-xl p-4 bg-secondary font-mainText text-accent2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
