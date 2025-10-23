import heroVideo from "@/assets/hero-background.mp4";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Brand Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onCanPlay={(e) => {
            console.log('Video can play, starting playback');
            e.currentTarget.play();
          }}
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            if (video.duration && video.currentTime >= video.duration - 0.1) {
              console.log('Video near end, restarting');
              video.currentTime = 0;
              video.play();
            }
          }}
          onError={(e) => {
            console.log('Video failed to load, hiding element');
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img 
              src={logo} 
              alt="Triad Marcenaria" 
              className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight">
              Móveis sob medida com{" "}
              <span className="font-medium text-accent">design e exclusividade</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              Projetos personalizados, acabamento premium e sofisticação em cada detalhe
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-green-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
