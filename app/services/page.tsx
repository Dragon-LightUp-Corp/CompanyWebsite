import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Globe, Database, Cloud, Shield, Clock, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
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
              <Link href="/services" className="text-foreground font-medium">
                Services
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
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
              Simple Software Solutions for <span className="text-primary">Cameroonian Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build powerful, user-friendly software that requires minimal technical knowledge to operate. From
              mobile apps to web platforms, we make technology work for you, not against you.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Our Software Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions designed specifically for the Cameroonian market
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12" />,
                title: "Custom Software Development",
                description:
                  "Tailored applications built specifically for your business processes and the unique needs of Cameroonian enterprises.",
                features: [
                  "Business process analysis",
                  "Custom application design",
                  "User-friendly interface development",
                  "Local language support (French/English)",
                ],
                duration: "8-16 weeks",
                investment: "Starting at 2,500,000 FCFA",
              },
              {
                icon: <Smartphone className="h-12 w-12" />,
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications that work seamlessly across Android and iOS devices.",
                features: [
                  "Android & iOS development",
                  "Offline functionality support",
                  "Local payment integration",
                  "Push notifications & analytics",
                ],
                duration: "10-20 weeks",
                investment: "Starting at 3,000,000 FCFA",
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Web Application Development",
                description:
                  "Modern, responsive web platforms that are intuitive to use and require minimal training for your team.",
                features: [
                  "Responsive web design",
                  "Content management systems",
                  "E-commerce integration",
                  "SEO optimization",
                ],
                duration: "6-12 weeks",
                investment: "Starting at 2,000,000 FCFA",
              },
              {
                icon: <Database className="h-12 w-12" />,
                title: "Business Management Systems",
                description: "Comprehensive systems to manage inventory, sales, customers, and operations efficiently.",
                features: [
                  "Inventory management",
                  "Sales tracking & reporting",
                  "Customer relationship management",
                  "Financial reporting tools",
                ],
                duration: "12-20 weeks",
                investment: "Starting at 4,000,000 FCFA",
              },
              {
                icon: <Cloud className="h-12 w-12" />,
                title: "Cloud Solutions & Hosting",
                description:
                  "Secure, scalable cloud infrastructure optimized for reliability and performance in the Cameroonian market.",
                features: [
                  "Cloud migration services",
                  "Automated backup systems",
                  "24/7 monitoring & support",
                  "Scalable infrastructure",
                ],
                duration: "4-8 weeks",
                investment: "Starting at 1,500,000 FCFA",
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Maintenance & Support",
                description:
                  "Ongoing technical support and maintenance to keep your systems running smoothly with minimal downtime.",
                features: [
                  "24/7 technical support",
                  "Regular security updates",
                  "Performance optimization",
                  "User training & documentation",
                ],
                duration: "Ongoing",
                investment: "Starting at 300,000 FCFA/month",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <Badge variant="outline" className="text-xs">
                      {service.duration}
                    </Badge>
                  </div>
                  <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-heading text-lg text-primary">{service.investment}</span>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Development Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete packages designed for different business sizes and needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                description: "Perfect for small businesses and startups getting their first digital solution",
                price: "1,800,000 FCFA",
                duration: "6 weeks",
                features: [
                  "Simple web application",
                  "Basic mobile-responsive design",
                  "Contact forms & basic features",
                  "1 month free support",
                  "Training for 2 users",
                ],
                popular: false,
              },
              {
                name: "Professional",
                description: "Ideal for growing businesses needing comprehensive digital solutions",
                price: "4,500,000 FCFA",
                duration: "12 weeks",
                features: [
                  "Custom web & mobile app",
                  "Database integration",
                  "User management system",
                  "Payment gateway integration",
                  "3 months free support",
                  "Training for up to 10 users",
                  "Basic analytics dashboard",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                description: "For established businesses requiring advanced, scalable solutions",
                price: "8,500,000 FCFA",
                duration: "20 weeks",
                features: [
                  "Full business management system",
                  "Advanced mobile applications",
                  "Cloud infrastructure setup",
                  "Multi-location support",
                  "Advanced reporting & analytics",
                  "6 months free support",
                  "Unlimited user training",
                  "Dedicated project manager",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-xl transition-all duration-300 ${pkg.popular ? "border-primary shadow-lg" : "border-border/50"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <div className="font-heading text-3xl text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ${pkg.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that ensures your software is delivered on time, within budget, and exceeds
              expectations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We understand your business needs and define clear project requirements",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Create user-friendly designs and detailed development roadmaps",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build your software with regular testing and quality assurance",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Launch your solution and provide ongoing support and maintenance",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="font-heading text-xl text-primary">{phase.step}</span>
                </div>
                <h3 className="font-heading text-xl text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Ready to Digitize Your Business?</h2>
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">
                Don't let complex technology hold your business back. Join forward-thinking Cameroonian companies that
                chose simplicity without sacrificing power.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 animate-hypnotic-pulse">
                <p className="text-lg text-primary font-medium mb-2">Free Consultation & Project Estimate</p>
                <p className="text-muted-foreground">
                  Get a detailed project proposal with timeline and costs. No technical jargon, just clear solutions
                  tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group animate-hypnotic-pulse"
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn About Our Team
                </Button>
              </Link>
            </div>
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
