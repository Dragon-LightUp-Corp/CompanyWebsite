import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/dragon-lightup-logo.png" alt="Dragon LightUp" width={40} height={40} className="w-10 h-10" />
              <span className="font-heading text-xl text-foreground">Dragon LightUp</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground font-medium">
                Contact
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight">
              Your Digital Journey <span className="text-primary">Starts Here</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every successful business in Cameroon needs reliable technology. Don't let complex systems hold you back
              when simple, powerful solutions are just one conversation away.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 animate-hypnotic-pulse">
              <p className="text-lg text-primary font-medium mb-2">Your Competitors Are Already Digital</p>
              <p className="text-muted-foreground">
                While you're thinking about it, other businesses are already using technology to serve customers better
                and grow faster. Don't get left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl text-foreground">Ready to Simplify Your Technology?</h2>
                <p className="text-lg text-muted-foreground">
                  Tell us about your business needs and we'll provide a free consultation with a detailed project
                  proposal - no technical jargon, just clear solutions.
                </p>
              </div>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center">
                    <Code className="w-5 h-5 text-primary mr-2" />
                    Free Project Consultation
                  </CardTitle>
                  <CardDescription>
                    Get a detailed proposal with timeline, costs, and features - completely free with no obligations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Jean" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Mballa" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="jean@monentreprise.cm" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Business Name *</Label>
                    <Input id="company" placeholder="Your Business Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+237 6XX XX XX XX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City/Location</Label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                      <option value="">Select your city...</option>
                      <option value="yaounde">Yaoundé</option>
                      <option value="douala">Douala</option>
                      <option value="bamenda">Bamenda</option>
                      <option value="bafoussam">Bafoussam</option>
                      <option value="garoua">Garoua</option>
                      <option value="maroua">Maroua</option>
                      <option value="ngaoundere">Ngaoundéré</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">What Do You Need? *</Label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                      <option value="">Select project type...</option>
                      <option value="website">Business Website</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="management-system">Business Management System</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="custom-software">Custom Software Solution</option>
                      <option value="not-sure">Not Sure - Need Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Tell Us About Your Business & Needs *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your business, what challenges you're facing, and what you hope to achieve with technology..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget Range</Label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                      <option value="">Select budget range...</option>
                      <option value="under-1m">Under 1,000,000 FCFA</option>
                      <option value="1m-3m">1,000,000 - 3,000,000 FCFA</option>
                      <option value="3m-5m">3,000,000 - 5,000,000 FCFA</option>
                      <option value="5m-10m">5,000,000 - 10,000,000 FCFA</option>
                      <option value="over-10m">Over 10,000,000 FCFA</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">When Do You Want to Launch?</Label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                      <option value="">Select timeline...</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="planning">Just planning ahead</option>
                    </select>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group animate-hypnotic-pulse"
                  >
                    Get My Free Consultation & Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information stays confidential and is never shared.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl text-foreground">Get In Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Prefer to talk directly? We're here to help you understand how technology can transform your business.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Call Us",
                    content: "+237 6XX XX XX XX",
                    description: "Mon-Fri, 8AM-6PM (Cameroon Time)",
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email Us",
                    content: "hello@dragonlightup.cm",
                    description: "We respond within 4 hours",
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Visit Our Office",
                    content: "Yaoundé, Cameroon",
                    description: "By appointment only",
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "WhatsApp",
                    content: "+237 6XX XX XX XX",
                    description: "Quick responses during business hours",
                  },
                ].map((contact, index) => (
                  <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary">{contact.icon}</div>
                        <div className="space-y-1">
                          <h3 className="font-heading text-lg text-foreground">{contact.title}</h3>
                          <p className="text-foreground font-medium">{contact.content}</p>
                          <p className="text-sm text-muted-foreground">{contact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Urgency Section */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-heading text-lg text-foreground">Why Start Your Digital Journey Now?</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Your customers expect digital convenience
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Competitors with better systems win more business
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Technology gets more expensive to implement later
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Free consultations help you plan without risk
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about working with Dragon LightUp in Cameroon
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What happens during the free consultation?",
                answer:
                  "We'll discuss your business needs, understand your challenges, and provide a detailed proposal with timeline and costs. No technical jargon - just clear explanations of how technology can help your business grow.",
              },
              {
                question: "Do you provide support in French and English?",
                answer:
                  "Yes! Our team is fluent in both French and English. All documentation, training, and support can be provided in your preferred language.",
              },
              {
                question: "How long does it take to build software?",
                answer:
                  "Simple websites take 2-4 weeks, mobile apps take 8-12 weeks, and complex business systems take 12-20 weeks. We'll give you an exact timeline during your consultation.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "We specialize in making powerful technology accessible to businesses of all sizes across Cameroon. We have solutions starting from 1,000,000 FCFA.",
              },
              {
                question: "What if I need changes after the software is built?",
                answer:
                  "We provide ongoing support and maintenance. Minor updates are often free, and we offer affordable monthly support packages to keep your software running perfectly.",
              },
              {
                question: "Can you help if I'm not tech-savvy?",
                answer:
                  "That's exactly why we exist! We build software that's so simple to use, you won't need technical knowledge. Plus, we provide complete training for you and your team.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Ready to Go Digital?</h2>
            <p className="text-xl text-muted-foreground">
              Every successful business in Cameroon will eventually need technology. The question is: will you be ahead
              of the curve or playing catch-up?
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 animate-hypnotic-pulse">
              <p className="text-lg text-primary font-medium mb-2">Your Digital Future Starts Today</p>
              <p className="text-muted-foreground">
                Don't wait until your competitors have better systems. Get your free consultation and see exactly how
                technology can transform your business.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group animate-hypnotic-pulse"
            >
              Get My Free Consultation Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/dragon-lightup-logo.png" alt="Dragon LightUp" width={32} height={32} className="w-8 h-8" />
              <span className="font-heading text-lg text-foreground">Dragon LightUp</span>
            </Link>
            <p className="text-muted-foreground">© 2025 Dragon LightUp. Simplifying technology across Cameroon.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
