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

const ContactList = () => {
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
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl font-bold text-primary">
                Let's work together
              </h3>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? Let's discuss how we can work together
                to bring your ideas to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" name="firstname" />
                <Input type="text" placeholder="Lastname" name="lastname" />
                <Input type="email" placeholder="Email" name="email" />
                <Input type="tel" placeholder="Phone" name="phone" />
              </div>
              <Select>
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
              <Textarea placeholder="Your message here..." name="message" />
              <Button type="submit" className="lg:self-start w-full md:w-auto">
                Send Message
              </Button>
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
