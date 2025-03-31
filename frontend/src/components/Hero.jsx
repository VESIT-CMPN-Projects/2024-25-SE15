import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-secondary to-background">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-display">
            Learn Skills for <span className="text-primary">Economic Independence</span>
          </h1>
          <p className="mb-8 text-lg">
            EmpowerHer provides women with accessible skill training, market opportunities, and a supportive community.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link to="/skills" className="btn btn-primary">
              Explore Skills
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Join Now
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/hero-image.jpg" 
            alt="Women learning skills" 
            className="object-cover w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
