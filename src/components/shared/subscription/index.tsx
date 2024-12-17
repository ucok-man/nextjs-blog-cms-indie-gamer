import { Mail } from "lucide-react";

export default function Subscription() {
  return (
    <section className="bg-brand-green-400 py-10">
      <div className="flex flex-col items-center space-y-8 text-center">
        <h2 className="font-mono text-4xl font-black lg:text-5xl">
          JOIN_OUR_NEWSLETTER
        </h2>
        <p className="max-w-2xl text-xl">
          Stay updated with the latest articles, tips, and insights from our
          blog. No spam, just pure value delivered to your inbox.
        </p>
        <form className="flex w-full max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-none border-4 bg-brand-white-100 px-4 py-3 font-mono shadow-brand-br-md focus:outline-none sm:flex-1"
          />
          <button
            type="submit"
            className="group flex items-center justify-center rounded-none border-4 bg-black px-6 py-3 font-mono text-brand-white-100 shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none uppercase"
          >
            Subscribe
            <Mail className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}
