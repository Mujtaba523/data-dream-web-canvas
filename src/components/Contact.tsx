
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, MapPin, Phone, Mail } from "lucide-react";
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
    <section id="contact" className="py-16 md:py-20 section-padding">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-2">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8 md:mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-foreground/80 mb-4 md:mb-6 text-sm md:text-base">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about data science and AI.
            </p>

            <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardContent className="p-4 md:p-6 flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs md:text-sm text-foreground/70">Email</div>
                  <a 
                    href="mailto:mujtabamateen12@gmail.com" 
                    className="hover:text-primary transition-colors text-sm md:text-base truncate block"
                    title="mujtabamateen12@gmail.com"
                  >
                    mujtabamateen12@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardContent className="p-4 md:p-6 flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-foreground/70">Phone</div>
                  <a 
                    href="tel:+923273374538" 
                    className="hover:text-primary transition-colors text-sm md:text-base"
                  >
                    +92 327 3374538
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardContent className="p-4 md:p-6 flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-foreground/70">Location</div>
                  <div className="text-sm md:text-base">Karachi, Pakistan</div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Download Card */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 md:p-6 flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs md:text-sm text-foreground/70">Resume</div>
                  <div className="text-sm md:text-base">Download my resume</div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full h-8 w-8 md:h-10 md:w-10 p-0 flex-shrink-0" aria-label="Download Resume">
                  <a 
                    href="data-dream-web-canvas\Mujtaba's Updated Resume-II.pdf" 
                    download="Mujtaba_Mateen_Resume.pdf"
                    className="flex items-center justify-center w-full h-full"
                    aria-label="Download Resume"
                  >
                    <Download className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm md:text-base">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm md:text-base">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-base">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-base">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="resize-none min-h-[120px] md:min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full md:w-auto" 
                      disabled={isSubmitting}
                      size="sm"
                    >
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
