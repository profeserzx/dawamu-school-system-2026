import React from 'react';
import '../style/pages_css/aboutus.css';
import { FaHistory, FaBullhorn, FaEye, FaSchool } from 'react-icons/fa';  // Importing icons
import BackButton from '../components/BackButton';

function AboutUs() {
  return (

    <>
  

    
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="about-us-hero">
        <div className="hero-content">
          <h1>
            About Our School 
            <span className="namaste">🙏</span> {/* Namaste Emoji */}
          </h1>
          <p>Discover our story, mission, and vision for a brighter future.</p>
        </div>
        
      </div>

      {/* Content Sections */}
      <div className="about-us-content">
        {/* Our Story Section */}
        <section className="about-us-section story-section">
          <div className="section-header">
            <FaHistory className="section-icon" />
            <h2>Our Story</h2>
          </div>
          <p>
          Dawamu School was founded with a simple but powerful vision: to transform boys into leaders who will shape the future of Kenya and beyond. Established along Pipeline Road in Kiserian-Isinya, our journey began with a small group of dedicated educators who believed that leadership in men is the backbone of all societies.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="about-us-section mission-section">
          <div className="section-header">
            <FaBullhorn className="section-icon" />
            <h2>Our Mission</h2>
          </div>
          <p>
          To provide a holistic education that fosters intellectual, emotional, and social growth. We aim to inspire students to become lifelong learners, critical thinkers, and responsible global citizens. Through a supportive and inclusive environment, we empower every boy to achieve their fullest potential.To transform boys into confident leaders through holistic education, character development, and real-world skills
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="about-us-section vision-section">
          <div className="section-header">
            <FaEye className="section-icon" />
            <h2>Our Vision</h2>
          </div>
          <p>
          To transform Boys into leaders. Dawamu strives to stir up a desire in each student to achieve more than they can imagine, at the same time creating a sense of responsibility to themselves and society crucial for leaders of the next generation.To be the leading institution shaping disciplined, innovative, and responsible young men who excel in all areas of life.
          </p>
        </section>
      </div>

      {/* Call to Action Section */}
      <div className="about-us-cta">
        <h2>Join Us on This Journey</h2>
        <p>We invite you to be a part of our vibrant community. Together, let's build a brighter future for our students.</p>
        <button className="cta-button">Learn More</button>
      </div>

      {/* Footer Section */}
      <div className="about-us-footer">
        <p>You've joined the pride of Dawamu. Together, we build leaders who shape tomorrow.</p>
      </div>
    </div>
    </>
  );
}

export default AboutUs;