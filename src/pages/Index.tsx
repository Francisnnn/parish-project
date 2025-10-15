import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
{/*import { Church, ArrowRight, Calendar, Heart, Users, BookOpen } from "lucide-react";*/}
import { Link } from "react-router-dom";
import { LeaderCard } from "@/components/common/LeaderCard";
import { BackToTop } from "@/components/common/BackToTop";
import churchHero from "@/assets/church-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-accent/90 z-10" />
        <img 
          src={churchHero} 
          alt="Catholic Church" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="animate-fade-in">
            <Church className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-primary mx-auto mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Welcome Home
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 sm:mb-8 lg:mb-12 drop-shadow-md max-w-4xl mx-auto px-4">
              Holy Trinity Catholic Church & St. John of the Cross Outstation
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 drop-shadow-md">
              Choose your faith community below
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Bar */}
      <section className="bg-primary text-primary-foreground py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-center">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-medium">
              Join us for Sunday Mass | Parish: 08:00AM | Outstation: 06:30AM
            </p>
          </div>
        </div>
      </section>

      {/* Spiritual Leaders Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 section-underline">
              Our Spiritual Leaders
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Guided by faith, serving with love
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
            <LeaderCard 
              title="Holy Father"
              name="Pope Francis"
              subtitle="Supreme Pontiff"
            />
            <LeaderCard 
              title="Archbishop"
              name="Most Rev. Gabriel Abegunrin"
              subtitle="Archdiocese of Ibadan"
            />
            <LeaderCard 
              title="Parish Priest"
              name="Rev. Fr. John Doe"
              subtitle="Holy Trinity Catholic Church"
            />
          </div>
        </div>
      </section>

      {/* Site Selection */}
      <section className="py-12 sm:py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Parish Community</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Two locations, one faith, united in Christ
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Holy Trinity Card */}
            <Card className="shadow-elegant hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in group border-2 hover:border-primary/50">
              <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
                <div className="mx-auto mb-4 sm:mb-6 p-4 sm:p-6 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Church className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl lg:text-3xl mb-2">Holy Trinity Catholic Church</CardTitle>
                <CardDescription className="text-base sm:text-lg">Main Parish</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 px-4 sm:px-6 pb-6 sm:pb-8">
                <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                  Our main parish offers a vibrant community with multiple daily masses, 
                  diverse ministries, and programs for all ages. Join us in worship, fellowship, and service.
                </p>
                <div className="bg-primary/5 rounded-lg p-3 sm:p-4 space-y-2">
                  <p className="font-semibold text-sm sm:text-base">Sunday Masses</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">8:00 AM</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Weekday Masses Available</p>
                </div>
                <Link to="/parish" className="block">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base py-5 sm:py-6"
                  >
                    Visit Parish Website
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* St. John Outstation Card */}
            <Card className="shadow-elegant hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in group border-2 hover:border-[hsl(var(--outstation-brown))]/50" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
                <div className="mx-auto mb-4 sm:mb-6 p-4 sm:p-6 bg-[hsl(var(--outstation-brown))]/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Church className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-[hsl(var(--outstation-brown))]" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl lg:text-3xl mb-2">St. John of the Cross</CardTitle>
                <CardDescription className="text-base sm:text-lg">Outstation</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 px-4 sm:px-6 pb-6 sm:pb-8">
                <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                  A peaceful outstation serving our extended parish community. 
                  Experience intimate worship and strong fellowship in a close-knit spiritual family.
                </p>
                <div className="bg-[hsl(var(--outstation-brown))]/5 rounded-lg p-3 sm:p-4 space-y-2">
                  <p className="font-semibold text-sm sm:text-base">Mass Schedule</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Sunday: 6:30 AM</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Fri 6:00 PM</p>
                </div>
                <Link to="/outstation" className="block">
                  <Button 
                    size="lg"
                    className="w-full bg-[hsl(var(--outstation-brown))] hover:bg-[hsl(var(--outstation-darkbrown))] text-white shadow-lg group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base py-5 sm:py-6"
                  >
                    Visit Outstation Website
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 section-underline">
              Why Join Our Community
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="text-center p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors duration-300">
              <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-primary/10 rounded-full w-fit">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Spiritual Growth</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Deepen your faith through prayer and sacraments</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors duration-300">
              <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-secondary/10 rounded-full w-fit">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Community</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Connect with fellow believers in fellowship</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors duration-300">
              <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-accent/10 rounded-full w-fit">
                <Church className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Service</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Serve others through various ministries</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors duration-300">
              <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-primary/10 rounded-full w-fit">
                <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Faith Formation</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Learn and grow in Catholic teachings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <p className="text-xs sm:text-sm opacity-90 mb-2">
            © {new Date().getFullYear()} Holy Trinity Catholic Church & St. John of the Cross. All rights reserved.
          </p>
          <p className="text-xs opacity-75">
            Archdiocese of Ibadan, Nigeria
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
};

export default Index;
