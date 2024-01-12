import React from 'react'
import Trainer1 from '../assets/images/Personal-Trainer.webp'
import TrainerSection from '../components/TrainerSection';

const About = () => {
    return ( 
        <div className="w full h-screen text-white bg-red-300">
            <div style={{ backgroundColor: '#ff5733' }}>

      <TrainerSection
        title="Marcin Nowak"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione alias totam, aperiam porro amet delectus aspernatur nulla necessitatibus dolorum, accusamus eum distinctio modi cumque est ipsum dolore nemo molestias voluptatem?"
        image={Trainer1}
      />
      <TrainerSection
        title="Inny Trener"
        description="Inny opis."
        image={Trainer1}
        reverse={true}
      />
      <TrainerSection
        title="Mateusz Krawczyk"
        description="filefielfe"
        image={Trainer1}
        reverse={false}
      />
    </div>
    </div>

     );
}
 
export default About;