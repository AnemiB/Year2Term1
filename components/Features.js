import React from 'react';

const Feature = ({ title, text }) => {
  return (
    <div className="feature">
      <h3 style={{ fontSize: '2rem', textAlign: 'center' }}>{title}</h3>
      <p style={{ fontSize: '1.5rem', width: '70%', margin: '0 auto', textAlign: 'center' }}>{text}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="features-content">
        <h2 style={{ marginTop: '-25%' }}>CHARACTER <span style={{ color:'#42e3ff'}}>IMPACT</span></h2>
        <br />
        <br />
        <h6 style={{ marginTop: '-12%' }}>About Us</h6>
        <div className="features-grid">
          <Feature
            title="About the API"
            text="This API serves as a comprehensive repository of information pertaining to the myriad characters featured in Genshin Impact, encompassing details such as their birthdays and elemental attributes within the game."
          />
          <br></br>
          <Feature
            title="More info"
            text="
            Character Profiles: Access detailed profiles for each character, including their names, backgrounds, birthdays, and more.
            Elemental Attributes: Explore the elemental affinities of each character, crucial for strategic gameplay and team-building.
            Abilities and Skills: Learn about the unique abilities and skills possessed by each character, helping you tailor your gameplay strategies.
            Weapon Affinities: Discover which weapons are best suited for each character, optimizing their combat effectiveness."
          />
          <br></br>
          <Feature
            title="What we do"
            text="We specialize in providing a centralized hub for comprehensive character data from the captivating realm of Genshin Impact. We provide timelines and charts for all your character comparison needs. "
          />
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
