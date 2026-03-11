"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsChevronLeft } from "react-icons/bs";
import { servicesItems } from "../services-item";

type ServiceStaticPageProps = {
  href: (typeof servicesItems)[number]["href"];
};

const ServiceStaticPage = ({ href }: ServiceStaticPageProps) => {
  const service = servicesItems.find((item) => item.href === href);
  const isWorkflowFirst = service?.layout === "workflow-first";

  if (!service) {
    return (
      <section className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-0 flex items-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-muted/20 p-8"
          >
            <h1 className="text-3xl font-bold text-white/90">
              Service not found
            </h1>
            <p className="mt-3 text-white/70">
              This route is not mapped to an item in your services list.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
            >
              <BsChevronLeft className="text-xs" />
              Back to services
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] py-12 lg:py-0 px-4 sm:px-6 lg:px-0 flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="mx-auto max-w-4xl space-y-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm tracking-[0.2em] text-white/50">
              SERVICE {service.id}
            </span>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
            >
              <BsChevronLeft className="text-xs" />
              Back to services
            </Link>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold text-white/90">
              {service.title}
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70">
              {service.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/15 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold text-white/90">
                What you get
              </h2>
              <ul className="mt-4 space-y-3">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-white/70">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-white/15 bg-muted/20 p-6">
              <h2 className="text-xl font-semibold text-white/90">
                Typical stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm text-primary/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-background transition-all duration-300 hover:bg-primary/90 hover:text-white"
              >
                {service.ctaLabel}
                <BsArrowUpRight className="text-sm" />
              </Link>
            </article>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article
              className={`rounded-2xl border border-white/15 bg-muted/20 p-6 ${isWorkflowFirst ? "md:order-1" : "md:order-2"}`}
            >
              <h2 className="text-xl font-semibold text-white/90">
                How this is delivered
              </h2>
              <ol className="mt-4 space-y-3">
                {service.workflow.map((step, index) => (
                  <li key={step} className="flex gap-3 text-white/70">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article
              className={`rounded-2xl border border-white/15 bg-muted/20 p-6 ${isWorkflowFirst ? "md:order-2" : "md:order-1"}`}
            >
              <h2 className="text-xl font-semibold text-white/90">
                Best fit for
              </h2>
              <ul className="mt-4 space-y-3">
                {service.idealFor.map((fit) => (
                  <li key={fit} className="flex gap-3 text-white/70">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceStaticPage;
