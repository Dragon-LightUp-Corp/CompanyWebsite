import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Zap, Target, Users, TrendingUp, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight">
                  Reducing Tech Complexity in <span className="text-primary">Cameroon</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every business in Cameroon deserves powerful software without the complexity. We build innovative
                  solutions that require minimal tech input, empowering local businesses to thrive in the digital age.
                  Your digital transformation shouldn't be complicated.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 animate-hypnotic-pulse">
                  <p className="text-lg text-primary font-medium">
                    Join the digital revolution in Cameroon. Simple. Powerful. Effective.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group animate-hypnotic-pulse"
                >
                  Start Your Digital Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  See Our Solutions
                </Button>
              </div>
            </div>
            {/* Floating Innovation Cards */}
            <div className="relative lg:col-span-1">
              <div className="relative h-96 w-full">
                {/* Central Dragon Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl"
                    style={{ animation: "pulse 6s ease-in-out infinite" }}
                  >
                    <Zap className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Orbiting Innovation Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-80 h-80 animate-spin" style={{ animationDuration: "60s" }}>
                    {/* Innovation Nodes */}
                    {[
                      {
                        icon: <Lightbulb className="w-6 h-6" />,
                        label: "Simple",
                        position: "top-0 left-1/2 -translate-x-1/2",
                        animation: "animate-float-slow",
                      },
                      {
                        icon: <Target className="w-6 h-6" />,
                        label: "Effective",
                        position: "top-1/4 right-0 translate-x-1/2",
                        animation: "animate-float-delayed",
                      },
                      {
                        icon: <TrendingUp className="w-6 h-6" />,
                        label: "Scalable",
                        position: "bottom-0 left-1/2 -translate-x-1/2",
                        animation: "animate-float",
                      },
                      {
                        icon: <Users className="w-6 h-6" />,
                        label: "Local",
                        position: "top-1/4 left-0 -translate-x-1/2",
                        animation: "animate-float-fast",
                      },
                    ].map((node, index) => (
                      <div key={index} className={`absolute ${node.position} transform`}>
                        <div
                          className={`bg-card border border-border rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${node.animation}`}
                        >
                          <div className="text-primary mb-1 group-hover:scale-110 transition-transform">
                            {node.icon}
                          </div>
                          <div className="text-xs font-medium text-foreground">{node.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background Glow Effect */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                  style={{ animation: "pulse 8s ease-in-out infinite" }}
                ></div>

                {/* Connecting Lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="200"
                      cy="200"
                      r="160"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 200 200"
                        to="360 200 200"
                        dur="90s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* Innovation Metrics */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-center">
              {[
                { value: "50+", label: "Apps Built" },
                { value: "99%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((metric, index) => (
                <div key={index} className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
                  <div className="font-heading text-2xl text-primary">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">Software Solutions Made Simple</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating powerful software that requires minimal technical knowledge to operate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Custom Software Development",
                description: "Tailored applications built specifically for Cameroonian businesses and workflows",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Mobile App Development",
                description: "User-friendly mobile solutions that work seamlessly across all devices",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Web Applications",
                description: "Modern web platforms that are intuitive and require minimal training",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Business Automation",
                description: "Streamline your operations with smart automation that works behind the scenes",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Cloud Solutions",
                description: "Secure, scalable cloud infrastructure optimized for the Cameroonian market",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Technical Support",
                description: "24/7 local support in French and English to keep your systems running smoothly",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">
              Ready to Simplify Your Business Technology?
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">
                Don't let complex technology hold your business back. Join forward-thinking Cameroonian companies that
                chose simplicity without sacrificing power.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 animate-hypnotic-pulse">
                <p className="text-lg text-primary font-medium mb-2">
                  Free Consultation: Discover Your Perfect Solution
                </p>
                <p className="text-muted-foreground">
                  Get a custom software recommendation tailored to your business needs. No technical jargon, just clear
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 animate-hypnotic-pulse"
                >
                  Get Your Free Consultation
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
