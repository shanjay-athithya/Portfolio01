import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/shanjay-athithya-g-921852241/', icon: faLinkedin },
  { href: 'https://github.com/shanjay-athithya', icon: faGithub },
  { href: 'https://x.com/shanjay_aadhi', icon: faTwitter },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-cyan-400 font-bold mb-8">Contact Me</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-gray-400 transition duration-300"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
