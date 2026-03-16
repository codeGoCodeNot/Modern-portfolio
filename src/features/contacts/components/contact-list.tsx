"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { contactInfo } from "../contact-items";

import React, { useState } from "react";

const ContactList = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Your message has been sent! I'll get back to you soon.");
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:h-[54%] order-2 lg:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-3xl font-bold text-primary">
                Let's work together
              </h3>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? Let's discuss how we can work together
                to bring your ideas to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <Select value={form.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="nextjs-development">
                        Next.js Development
                      </SelectItem>
                      <SelectItem value="react-components">
                        React Component Building
                      </SelectItem>
                      <SelectItem value="tailwind-styling">
                        Tailwind CSS Styling
                      </SelectItem>
                      <SelectItem value="api-integration">
                        API Integration
                      </SelectItem>
                      <SelectItem value="auth-setup">
                        Simple Authentication Setup
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Textarea
                placeholder="Your message here..."
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="lg:self-start w-full md:w-auto"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {success && <p className="text-green-500 mt-2">{success}</p>}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
          <div className="flex flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul>
              {contactInfo.map((contact) => (
                <li
                  key={contact.title}
                  className="flex items-center gap-6 mb-6"
                >
                  <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-[#27272c] text-primary rounded-md flex items-center justify-center">
                    <div>{contact.icon}</div>
                  </div>
                  <div className="flex-col flex gap-y-1">
                    <h1 className="text-muted-foreground">{contact.title}</h1>
                    <p>{contact.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactList;
