/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useToast } from "@/hooks/use-toast";
import Hero from "./comp/Hero";
import { z } from "zod";
import { useState } from "react";

const emailSchema = z.object({
  email: z.string().email(),
})

export default function Home() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const callToAction = async () => {
    try {
      emailSchema.parse({ email });

      toast({
        title: "Demo scheduled",
        description: `We will reach out to you shortly at ${email}`,
      })
    } catch (err) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = async (e: any) => {
    const email = e.target.value
    setEmail(email)
  }

  return (
    <div className="flex justify-center items-center h-screen max-w-7xl mx-auto">
      <Hero cta={callToAction} storeEmail={store} />
    </div>
  );
}
