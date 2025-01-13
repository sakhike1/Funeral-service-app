

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
              Trusted in more than 100 countries & 5 million customers. Have any query?
            </p>
            <button className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
              Contact us
            </button>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">{section.title}</h4>
              <ul className="text-sm transition-all duration-500">
                {section.links.map((link) => (
                  <li key={link} className={`${link === section.links[section.links.length - 1] ? '' : 'mb-6'}`}>
                    <button className="text-gray-600 hover:text-gray-900">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io">pagedone</a> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerSections = [
  {
    title: "Pagedone",
    links: ["Home", "About", "Pricing", "Features"]
  },
  {
    title: "Products",
    links: ["Figma UI System", "Icons Assets", "Responsive Blocks", "Components Library"]
  },
  {
    title: "Resources",
    links: ["FAQs", "Quick Start", "Documentation", "User Guide"]
  },
  {
    title: "Blogs",
    links: ["News", "Tips & Tricks", "New Updates", "Events"]
  }
];

const socialLinks = [
  {
    name: "Twitter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    icon: (
      <svg className="w-5 h-4 text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529Z" fill="currentColor"/>
      </svg>
    )
  }
];

export default FooterSection;