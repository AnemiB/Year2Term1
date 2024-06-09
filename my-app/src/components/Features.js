import React from 'react';

const Feature = ({ title, text }) => {
  return (
    <div className="feature">
      <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}>{title}</h3>
      <p style={{ fontSize: '1rem', width: '80%', margin: '0 auto', textAlign: 'center' }}>{text}</p>
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <div className="card" style={{ backgroundColor: '#5ca1ff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '35%', marginLeft: '9%' }}>
      {children}
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="features-content">
        <h2 style={{ marginTop: '-1%', fontSize: '2rem', marginLeft: '2%' }}>
          CHARACTER <span style={{ color: '#42e3ff' }}>IMPACT</span>
        </h2>
        <br />
        <Card>
          <h6 style={{ marginTop: '1%', fontSize: '2rem' }}>About Us</h6>
          <div className="features-grid">
            <Feature
              title="About the Project"
              text="This API serves as a comprehensive repository of information pertaining to the myriad characters featured in Genshin Impact, encompassing details such as their birthdays and elemental attributes within the game."
            />
            <Feature
              title="More info"
              text="
              Character Profiles: Access detailed profiles for each character, including their names, backgrounds, birthdays, and more.
              Elemental Attributes: Explore the elemental affinities of each character, crucial for strategic gameplay and team-building.
              Abilities and Skills: Learn about the unique abilities and skills possessed by each character, helping you tailor your gameplay strategies.
              Weapon Affinities: Discover which weapons are best suited for each character, optimizing their combat effectiveness."
            />
            <Feature
              title="What we do"
              text="We specialize in providing a centralized hub for comprehensive character data from the captivating realm of Genshin Impact. We provide timelines and charts for all your character comparison needs."
            />
            <Feature
              title="About the API"
              text="Total Number of Characters: 26
              Distribution by Element:
              Anemo: 4,
              Geo: 3,
              Electro: 5,
              Hydro: 4,
              Pyro: 6,
              Cryo: 4.
              Rarity Distribution:
              5-Star: 10,
              4-Star: 16. This also includes the genders of the characters, as well as the weapon distribution, most notably; polearm and claymore. Also the way that they are obtained, via quest, wish or unknown."
            />
            <br></br>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesSection;
