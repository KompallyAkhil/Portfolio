import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a passionate web developer with strong experience in building
              responsive and interactive applications using{" "}
              <strong>React.js, JavaScript, HTML, CSS, and Node.js</strong>.
              Over the past months, I have worked on various real-world
              projects including AI-based apps, video downloaders, portfolio
              trackers, and chatbots.
            </p>

            <p className="text-muted-foreground">
              I enjoy turning ideas into functional, user-friendly digital
              experiences. I constantly explore new technologies to enhance my
              skills and stay up to date with modern web development trends.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
              target="_blank"
                href="https://drive.google.com/file/d/1jswHXnayw5gq_3ozf33TKj9ZB4QkagKx/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                See My Resume
              </a>
            </div>
          </div>

          {/* Right Side - Skills Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, modern web applications using React,
                    JavaScript, and Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Implementation</h4>
                  <p className="text-muted-foreground">
                    Crafting clean, accessible, and intuitive interfaces with a
                    focus on user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience in projects like AI chatbots, portfolio
                    trackers, and video downloader tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
