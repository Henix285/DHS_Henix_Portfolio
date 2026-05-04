import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Phone, Download, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "daraboinaharisupriya@gmail.com",
    href: "mailto:daraboinaharisupriya@gmail.com",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93915 40096",
    href: "tel:+919391540096",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hari-supriya-daraboina",
    href: "https://www.linkedin.com/in/hari-supriya-daraboina",
    accent: "from-blue-500 to-sky-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/HariSupriyaDaraboina",
    href: "https://github.com/HariSupriyaDaraboina",
    accent: "from-gray-500 to-gray-400",
  },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-bottom-left -z-10" />
      <div className="container px-4 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Say Hello</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to build something intelligent together? Reach out via any channel below or drop me a message.
          </p>
        </motion.div>

        {/* Download Resume banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 bg-card border border-primary/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-bold">Download My Resume</p>
            <p className="text-sm text-muted-foreground">Get a full overview of my skills, projects, and experience.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" className="rounded-full gap-2 border-border" asChild>
              <a href="https://drive.google.com/file/d/1example/view" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
                View Resume
              </a>
            </Button>
            <Button size="sm" className="rounded-full gap-2" asChild>
              <a href="https://drive.google.com/uc?export=download&id=1example" download>
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold mb-2">Contact Information</h3>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-all group"
                data-testid={`link-contact-${link.label.toLowerCase()}`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.accent} flex items-center justify-center flex-shrink-0 shadow`}>
                  <link.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium">{link.label}</p>
                  <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{link.value}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary/60 ml-auto flex-shrink-0 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-card border border-border p-6 rounded-2xl shadow-xl">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-background/50 border-border focus:border-primary" {...field} data-testid="input-contact-name" />
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
                        <Input placeholder="your@email.com" type="email" className="bg-background/50 border-border focus:border-primary" {...field} data-testid="input-contact-email" />
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
                          placeholder="Tell me about your project..."
                          className="min-h-[110px] bg-background/50 border-border focus:border-primary resize-none"
                          {...field}
                          data-testid="textarea-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting} data-testid="button-contact-submit">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
