import React from 'react';


const Services = () => {
  const servicesData = [
    {
      name: 'DSTV',
      description: 'DStv offers a wide range of packages to suit you and your family’s viewing needs. ',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/DSTV.png',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1o1sxZMDXf3pcupGoLhfiHXzjcpg216rqg&s',
      subscribe : 'Subscribe'
    },
    {
      name: 'GOTV',
      description: 'Get the latest local and international news, features and keep updated with whats hot and trending',
      logoUrl: 'https://getlogo.net/wp-content/uploads/2021/05/gotv-nigeria-logo-vector.png',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRH3HlNgItPotPobb8AwhvrPEja4PB8s6eng&s',
      subscribe : 'Subscribe'
    },
    {
      name: 'Startimes',
      description: 'Enjoy Startimes self-service such as recharge decoder, change bouquet, check balance and expiring date.', 

      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrQLQdIifPv-sVSardAlZMLigN8ptTZA32Q&s',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyurzmmSb-D4tiJRBdrG4rvxr_6Opivfku6g&s',
      subscribe : 'Subscribe'
    },
    {
      name: 'Showmax',
      description: 'Stream or download hit series, movies and more. Plus watch every Premier League and Betway Premiership match live on mobile.',
      logoUrl: 'https://shockng.com/wp-content/uploads/2024/01/showmax-2024-logo-300x164.png',
      imageUrl: 'https://shockng.com/wp-content/uploads/2024/01/Showmax-Targets-1Billion-Streaming-Revenue-From-Africa.png',
      subscribe : 'Subscribe'
    },
  ];

  return (
    <div className="services-container">
      {/* <h2>Our Services</h2> */}
      <p className="service-p" >We offer sales, subscriptions, and financial services, bringing entertainment and convenience directly to you. </p>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <li key={index} className="service-item">
            <div className="service-text">
              <img
                src={service.logoUrl}
                alt={`${service.name} logo`}
                className="service-logo"
              />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href='./subscribe'>{service.subscribe}</a>
            </div>
            <img
              src={service.imageUrl}
              alt={service.name}
              className="service-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;


