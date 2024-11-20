"use client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Building2, Clock, ExternalLink, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">Contact</h2>

            <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free
            to reach out to us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-muted/60">
              <CardContent className="flex items-center space-x-4 p-6">
                <Building2 className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Find us</h3>
                  <p className="text-sm text-muted-foreground">Address, city, country</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/60">
              <CardContent className="flex items-center space-x-4 p-6">
                <Phone className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call us</h3>
                  <p className="text-sm text-muted-foreground">+1 (234) 567-8910</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/60">
              <CardContent className="flex items-center space-x-4 p-6">
                <Mail className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Mail us</h3>
                  <p className="text-sm text-muted-foreground">email@example.com</p>
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
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@doe.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Brand Visibility Tracking">Brand Visibility Tracking</SelectItem>
                            <SelectItem value="Product Performance Tracking">Product Performance Tracking</SelectItem>
                            <SelectItem value="AI SEO Consultation">AI SEO Consultation</SelectItem>
                            <SelectItem value="Content Optimization">Content Optimization</SelectItem>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={5} placeholder="Your message..." className="resize-none" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4">Send message</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
