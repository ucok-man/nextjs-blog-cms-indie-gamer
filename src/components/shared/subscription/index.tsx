"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SectionWrapper from "../section-wrapper";

const formSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: "Should not be empty",
    })
    .email({
      message: "Must be valid email format",
    }),
});

export default function Subscription() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: `Thank you for subscribing ${values.email}`,
      description: "Stay updated with our latest posts! 😄",
    });
    form.reset();
  };

  return (
    <SectionWrapper className="bg-brand-green-400">
      <div className="flex flex-col items-center space-y-8 text-center">
        <h2 className="font-mono text-4xl font-black lg:text-5xl">
          JOIN_OUR_NEWSLETTER
        </h2>
        <p className="mb-4 max-w-4xl">
          Stay updated with the latest articles, tips, and insights from our
          blog. No spam, just pure value delivered to your inbox.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full max-w-lg flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center items-center"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="relative isolate w-full">
                    <FormControl>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-none border-4 bg-brand-white-100 px-4 pt-5 pb-3 font-mono shadow-brand-br-md focus:outline-none sm:flex-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute top-0 left-0 mx-auto w-full pt-2 text-red-500 text-xs" />
                  </div>
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="group flex items-center justify-center rounded-none border-4 bg-black px-6 py-3 font-mono text-brand-white-100 shadow-brand-br-md transition-all hover:translate-x-brand-md hover:translate-y-brand-md hover:shadow-none uppercase"
            >
              Subscribe
              <Mail className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Form>
      </div>
    </SectionWrapper>
  );
}
