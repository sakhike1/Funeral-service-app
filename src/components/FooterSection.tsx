import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="https://pagedone.io" className="flex justify-center lg:justify-start">
              {/* SVG logo code remains the same */}
            </a>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Celebrating Memories and Honouring your loved ones
            </p>
            <Link to="/contact">
              <button className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                Contact us
              </button>
            </Link>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">{section.title}</h4>
              <ul className="text-sm transition-all duration-500">
                {section.links.map((link) => (
                  <li key={link} className={`${link === section.links[section.links.length - 1] ? '' : 'mb-6'}`}>
                    <Link
                      to={
                        section.title === "Our Objectives"
                          ? "/request-transport" // All links under "Our Objectives" go to /request-transport
                          : section.title === "Products"
                          ? "/contact" // All links under "Products" go to /contact
                          : `/${link.toLowerCase().replace(/\s+/g, '-')}` // Default behavior for other sections
                      }
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io">Gold Tears Send Off </a> 2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerSections = [
  {
    title: "Gold Tears Send Off",
    links: ["Home", "Service", "About", "Contact"],
  },
  {
    title: "Products",
    links: ["Transportation", "Real-time tracking", "Digital solutions"],
  },
  {
    title: "Our Objectives",
    links: ["Nationwide Reach", "Technological Integration", "Client Satisfaction", "International Expansion"],
  },
];

export default FooterSection;