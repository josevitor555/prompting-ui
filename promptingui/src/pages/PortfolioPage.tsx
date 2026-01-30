import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PortfolioPage = () => {
  const handleGoHome = () => {
    window.location.hash = '#/';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button 
          variant="outline" 
          onClick={handleGoHome}
          className="mb-4"
        >
          ← Voltar para Home
        </Button>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">John</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#works" className="text-foreground hover:text-primary transition-colors">
                Works
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Resume
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Hi, I am John,<br />
              Creative Technologist
            </h1>
            <p className="text-lg text-foreground mb-8 max-w-2xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
              sunt nostrud amet.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Download Resume
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Avatar className="w-64 h-64 md:w-80 md:h-80">
              <AvatarImage src="/placeholder-user.jpg" alt="John" />
              <AvatarFallback className="bg-muted text-4xl text-muted-foreground">J</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Recent posts</h2>
            <Button variant="link" className="text-primary hover:text-primary/80">
              View all
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Post 1 */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Making a design system from scratch
                </CardTitle>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span>12 Feb 2020</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>Design, Pattern</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                  sunt nostrud amet.
                </p>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Creating pixel perfect icons in Figma
                </CardTitle>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span>12 Feb 2020</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>Figma, Icon Design</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                  sunt nostrud amet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12">Featured works</h2>
        
        <div className="space-y-12">
          {/* Work 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-muted rounded-lg w-full h-48 md:h-64 flex items-center justify-center">
                <span className="text-muted-foreground">Work Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Designing Dashboards
              </h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">2020</Badge>
                <span className="text-muted-foreground">Dashboard</span>
              </div>
              <p className="text-foreground">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet.
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Work 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-muted rounded-lg w-full h-48 md:h-64 flex items-center justify-center">
                <span className="text-muted-foreground">Work Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Vibrant Portraits of 2020
              </h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">2018</Badge>
                <span className="text-muted-foreground">Illustration</span>
              </div>
              <p className="text-foreground">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet.
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Work 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-muted rounded-lg w-full h-48 md:h-64 flex items-center justify-center">
                <span className="text-muted-foreground">Work Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                36 Days of Malayalam type
              </h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">2018</Badge>
                <span className="text-muted-foreground">Typography</span>
              </div>
              <p className="text-foreground">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-primary-foreground text-xs">fb</span>
              </div>
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-primary-foreground text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-primary-foreground text-xs">ig</span>
              </div>
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-primary-foreground text-xs">tw</span>
              </div>
            </div>
            <p className="text-foreground text-center">
              Copyright ©2020 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;