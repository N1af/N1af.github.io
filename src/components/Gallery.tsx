import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/b8282c21-fea8-4575-bb9d-01902f84bc39.png",
      title: "Exterior View",
      description: "Beautiful exterior of our boarding home"
    },
    {
      src: "/lovable-uploads/329987da-30e8-4d7e-b2ce-70f79377eef6.png",
      title: "Study Area",
      description: "Dedicated study space for students"
    },
    {
      src: "/lovable-uploads/c4f297c1-ad6e-4053-94a5-69979ad3832a.png",
      title: "Shared Bedroom",
      description: "Comfortable shared accommodation"
    },
    {
      src: "/lovable-uploads/9e78a204-df2b-42e3-9ca2-e0014d7f1c8f.png",
      title: "Double Room",
      description: "Spacious double occupancy room"
    },
    {
      src: "/lovable-uploads/fa886346-c5d7-4468-91fe-53a9a398997c.png",
      title: "Kitchen Facility",
      description: "Well-equipped kitchen for cooking"
    },
    {
      src: "/lovable-uploads/7df54a53-37f0-4e95-a588-8c9d1dd7feb9.png",
      title: "Bathroom",
      description: "Clean and modern bathroom facilities"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our clean, comfortable, and well-maintained facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 bg-card border-0 shadow-soft animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTUwSDIyNVYyMDBIMTc1VjE1MFoiIGZpbGw9IiNEMUQ1REIiLz4KPHA+UGhvdG88L3A+Cjwvc3ZnPgo=';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              See More in Person
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a visit to see our facilities firsthand and meet our friendly staff
            </p>
            <button
              onClick={() => window.open('https://wa.me/94774455342', '_blank')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg transition-colors"
            >
              Schedule a Visit
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;