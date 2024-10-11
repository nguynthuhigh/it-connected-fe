

const JobMainContent = () => {
  
  const contentStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const listStyle = {
    paddingLeft: '20px',
    marginBottom: '10px',
  };

  const listItemStyle = {
    marginBottom: '5px',
    fontSize: '16px',
    color: 'black',
  };

  return (
    <div style={contentStyle}>
      <section style={sectionStyle}>
        <h3 style={headingStyle}>Top 3 reasons to join us</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Working in a professional environment</li>
          <li style={listItemStyle}>Unlimited bonus according to work performance</li>
          <li style={listItemStyle}>Fully insured according to country regulations</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3 style={headingStyle}>Job description</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Working in a professional environment</li>
          <li style={listItemStyle}>Unlimited bonus according to work performance</li>
          <li style={listItemStyle}>Fully insured according to country regulations</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3 style={headingStyle}>Your skills and experience</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Experience in ReactJS, NextJS, JavaScript</li>
          <li style={listItemStyle}>Familiar with front-end development</li>
          <li style={listItemStyle}>Good communication skills</li>
        </ul>
      </section>
      <section style={sectionStyle}>
        <h3 style={headingStyle}>Your skills and experience</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Experience in ReactJS, NextJS, JavaScript</li>
          <li style={listItemStyle}>Familiar with front-end development</li>
          <li style={listItemStyle}>Good communication skills</li>
        </ul>
      </section>
      

    </div>
    
  );
};

export default JobMainContent;
