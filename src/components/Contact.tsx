
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // In a real implementation, you'd send this data to a backend service
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-foreground/80 mb-6">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about data science and AI.
            </p>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-foreground/70">Email</div>
                  <a href="mailto:johndoe@example.com" className="hover:text-primary">
                    johndoe@example.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a 
                  href="mailto:johndoe@example.com"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a 
                  href="#" 
                  aria-label="Download Resume"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="resize-none min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
