import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'
import './TextSphere.css'



const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud';
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        'Problem-solving',
        'Communication',
        'Teamwork',
        'Self-awareness',
        'Self-learning',
        'Accountability',
        'Time management',
        'Emotional intelligence',
        'Open-mindedness',
        'Creativity',
        'Patience',
        'Empathy',
        'Adaptability ',
      ];


      // Decrasing 'radius' value for small screen devices  
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 100;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    }
  }, []);


  return (
    <React.Fragment>
    <div className="skill__cloud">
        <div className="tagcloud"></div>
    </div>
    </React.Fragment>
  )
}

export default TextSphere