"use client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Building2, Clock, ExternalLink, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { GoogleCalendarButton } from "@/components/calendar/google-calendar-button";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  companySize: z.string().min(2).max(255),
  bookDemo: z.boolean(),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("formSubmitted");
    if (submitted) {
      setHasSubmitted(true);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companySize: "1-10",
      bookDemo: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (hasSubmitted) {
      toast({
        title: "Form already submitted",
        description: "You have already submitted a request. We'll get back to you soon!",
        variant: "default",
      });
      return;
    }

    const { firstName, lastName, email, companySize, bookDemo } = values;

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, companySize, bookDemo }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("formSubmitted", "true");
        setHasSubmitted(true);
        toast({
          title: "Message sent",
          description: "We'll get back to you soon!",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32 px-4 md:px-8 lg:px-36">
      <section className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">Meet the Team</h2>

            <h2 className="text-3xl md:text-4xl font-bold">Book a Demo</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Learn how visible your brand is on AI-driven search engines and how to optimize your content for better
            visibility.
          </p>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-muted/60">
              <CardContent className="flex items-center space-x-4 p-6">
                <Mail className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Send us an email</h3>
                  <p className="text-sm text-muted-foreground">hello@essio.ai</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/60">
              <CardContent className="flex items-center space-x-4 p-6">
                <LinkedInIcon className="h-10 w-10 bg-primary rounded-lg p-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                  <Link href="https://www.linkedin.com/in/leomirandadev/">
                    <Button variant="link" className="p-0">
                      Connect
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>

        <div className="w-full bg-no">
          <div className="flex flex-col justify-center items-center">
            <GoogleCalendarButton />
          </div>
        </div>
      </section>
    </section>
  );
};
