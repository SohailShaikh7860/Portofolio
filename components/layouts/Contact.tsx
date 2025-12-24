"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="mt-16 text-center sm:mt-16 max-w-2xl mx-auto px-4">
      <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm sm:text-lg text-background bg-white text-black font-bold " id="contact">
        Contact
      </div>
      <h2 className="font-bold text-white text-3xl tracking-tighter sm:text-5xl text-center mt-2">
        Get In Touch
      </h2>
      <p className="text-gray-400 md:text-xl/relaxed mt-2 text-center mb-8">
        Want to chat? Fill out the form below and I'll respond whenever I can.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className="text-green-500 text-center">Message sent successfully! I'll get back to you soon.</p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
