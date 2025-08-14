import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Zap, TrendingUp, Code, Smartphone, Cloud } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-foreground font-medium">
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
              Simplifying Technology for <span className="text-primary">Cameroon's Future</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of Cameroonian developers and innovators on a mission to make powerful technology
              accessible to every business in our country. No complex systems, no overwhelming interfaces—just smart
              solutions that work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize technology across Cameroon by creating software solutions that require minimal
                  technical knowledge to operate. We believe every business deserves access to powerful digital tools
                  without the complexity that traditionally comes with them.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl text-foreground">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A digitally empowered Cameroon where businesses of all sizes can leverage cutting-edge technology to
                  grow, compete globally, and contribute to our nation's economic development.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Code className="w-8 h-8" />, value: "50+", label: "Apps Developed" },
                    { icon: <Users className="w-8 h-8" />, value: "200+", label: "Local Businesses" },
                    { icon: <Smartphone className="w-8 h-8" />, value: "10+", label: "Cities Served" },
                    { icon: <Cloud className="w-8 h-8" />, value: "99.9%", label: "Uptime Record" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-primary mx-auto">{stat.icon}</div>
                      <div className="font-heading text-3xl text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">The Dragon LightUp Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven development methodology focuses on simplicity, local relevance, and powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understand",
                description:
                  "We deeply understand your business processes and the unique challenges facing Cameroonian enterprises.",
                icon: <Target className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Simplify",
                description:
                  "We design intuitive interfaces and workflows that require minimal training and technical expertise.",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Empower",
                description:
                  "We deliver solutions that grow with your business and provide ongoing support in French and English.",
                icon: <TrendingUp className="w-8 h-8" />,
              },
            ].map((phase, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-primary/20 font-heading text-6xl font-black mb-4">{phase.step}</div>
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{phase.icon}</div>
                  <CardTitle className="font-heading text-2xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-center">
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that drive our commitment to Cameroon's digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Simplicity First",
                description: "We believe powerful technology should be simple to use, not complex to understand.",
              },
              {
                title: "Local Impact",
                description: "Every solution we build is designed with Cameroonian businesses and culture in mind.",
              },
              {
                title: "Reliable Support",
                description: "We provide 24/7 technical support in both French and English from our local team.",
              },
              {
                title: "Continuous Innovation",
                description: "We constantly evolve our solutions to meet the changing needs of our growing market.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-heading text-lg text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Ready to Simplify Your Technology?</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of Cameroonian businesses that chose simplicity without sacrificing power. Let's discuss
              your perfect software solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  Explore Our Solutions
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
