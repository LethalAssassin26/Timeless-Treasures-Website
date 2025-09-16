import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "John Martinez",
      role: "CEO & Founder",
      description: "15+ years of experience in enterprise technology solutions and business strategy.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      description: "Expert in cloud architecture and cybersecurity with multiple industry certifications.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Michael Thompson",
      role: "Head of Operations",
      description: "Specializes in project management and ensuring seamless implementation of solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-about-title">
              About TechFlow Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
              We're passionate about empowering businesses with innovative technology solutions that drive success and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-mission-title">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-mission-paragraph1">
                At TechFlow Solutions, we believe that the right technology can transform businesses and unlock their full potential. Our mission is to provide cutting-edge solutions that streamline operations, enhance productivity, and drive measurable results.
              </p>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-mission-paragraph2">
                Founded in 2018, we've helped over 500 businesses across various industries implement successful digital transformation strategies. Our team of expert consultants and engineers work closely with each client to understand their unique challenges and deliver tailored solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center" data-testid={`stat-about-${index}`}>
                    <div className="text-3xl font-bold text-primary" data-testid={`text-stat-value-about-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground" data-testid={`text-stat-label-about-${index}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaborating in a modern office environment" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-team-collaboration"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-team-title">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-team-description">
              Our experienced team of professionals is dedicated to delivering exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center" data-testid={`card-team-member-${index}`}>
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={`Professional headshot of ${member.name}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                    data-testid={`img-team-member-${index}`}
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-team-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2" data-testid={`text-team-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm" data-testid={`text-team-description-${index}`}>
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
