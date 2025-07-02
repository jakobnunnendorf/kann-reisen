"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name muss mindestens 2 Zeichen lang sein.",
    })
    .max(50, {
      message: "Name darf nicht länger als 50 Zeichen sein.",
    }),
  tel: z
    .string()
    .min(10, {
      message: "Telefonnummer muss mindestens 10 Zeichen lang sein.",
    })
    .max(20, {
      message: "Telefonnummer darf nicht länger als 20 Zeichen sein.",
    }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Nachricht muss mindestens 10 Zeichen lang sein.",
    })
    .max(500, {
      message: "Nachricht darf nicht länger als 500 Zeichen sein.",
    }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      tel: "",
      email: "",
      message: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.tel,
        message: data.message,
        to_name: "Kann Reisen Team", // Your business name
      };

      const result = await emailjs.send(
        "service_833on0a", // Replace with your EmailJS service ID
        "template_46hgr4s", // Replace with your EmailJS template ID
        templateParams,
        "eTwfo3WVJ4RX6Rlz6" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast.success("Nachricht erfolgreich gesendet!", {
          description: (
            <div className="mt-2">
              <p className="font-medium">Ihre Kontaktdaten:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Name: {data.name}</li>
                <li>E-Mail: {data.email}</li>
                <li>Telefon: {data.tel}</li>
              </ul>
            </div>
          ),
        });

        // Reset form after successful submission
        form.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-4 grid-rows-4 gap-4 p-8"
      >
        <h2 className="uppercase text-2xl opacity-80 font-bold col-span-4">
          Schicken Sie uns eine Nachricht
        </h2>

        <div className="row-start-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dein Name</FormLabel>
                <FormControl>
                  <Input placeholder="Max Mustermann" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="row-start-2">
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefonnummer</FormLabel>
                <FormControl>
                  <Input placeholder="+49 123 12345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-2 row-start-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email addresse</FormLabel>
                <FormControl>
                  <Input placeholder="email@beispiel.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="row-start-2 row-span-2 col-span-2 h-full">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="h-full">
                <FormLabel>Deine Nachricht</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Wie können wir dir weiterhelfen?"
                    className="resize-none h-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="row-start-4 col-span-4 flex justify-end">
          <Button
            type="submit"
            className="text-main-green text-2xl bg-white border border-main-green rounded-md px-4 py-2 hover:bg-main-green hover:text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird gesendet..." : "Senden"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
