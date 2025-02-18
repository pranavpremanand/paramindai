import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";

import logo from "../assets/images/Logo/Logo.png";
export { logo };

const baseUrl = process.env.PUBLIC_URL;

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const companyDetails = {
  name: "Paramind AI",
  number: "+0000000000",
  address: "India",
  email: "abc@example.com",
  facebook: "",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const whyChooseUs = {
  mainHeading:
    "At Paramind AI, we understand that choosing the right technology partner is crucial for your business's success. Here’s why we stand out in a crowded marketplace",
  details: [
    {
      image: imageOne,
      heading: "Tailored Solutions",
      description:
        "We believe that one size does not fit all. Our custom solutions are meticulously crafted to align with your specific business needs and objectives. Whether you require bespoke software, mobile applications, or comprehensive cloud services, we work closely with you to ensure our offerings are tailored to meet your unique challenges and goals. This personalized approach ensures that you receive the most effective solutions that drive meaningful results.",
    },
    {
      image: imageTwo,
      heading: "Expert Team",
      description:
        "Our interdisciplinary team comprises seasoned professionals with diverse expertise across various domains. From software developers and UX/UI designers to data scientists and cybersecurity specialists, our collective knowledge ensures that you receive the best guidance and support at every stage of your project. We are committed to leveraging our experience to help you navigate the complexities of technology and achieve your desired outcomes.",
    },
    {
      image: imageThree,
      heading: "Commitment to Innovation",
      description:
        "In today’s fast-paced digital landscape, staying ahead of the curve is essential. At Paramind AI, we are dedicated to continual innovation. We adopt the latest technologies and industry best practices to provide you with solutions that not only meet your current needs but also anticipate future trends. Our forward-thinking approach allows your business to remain agile and responsive to market changes.",
    },
  ],
};

// client logos
export const clientLogos = [
  {
    id: 1,
    img: require("../assets/images/clients/1.png"),
  },
  {
    id: 2,
    img: require("../assets/images/clients/2.png"),
  },
  {
    id: 3,
    img: require("../assets/images/clients/3.png"),
  },
  {
    id: 4,
    img: require("../assets/images/clients/4.png"),
  },
  {
    id: 5,
    img: require("../assets/images/clients/5.png"),
  },
  {
    id: 6,
    img: require("../assets/images/clients/6.png"),
  },
  {
    id: 7,
    img: require("../assets/images/clients/7.png"),
  },
];

// all services
export const allServices = [
  {
    image: <i className="fas fa-code" />,
    title: "Web Development",
    shortDesc:
      "Transform your ideas into powerful web applications that deliver seamless user experiences.",
    heading: "Web Development: Scalable, Secure & Engaging Digital Solutions",
    html: `
    <p>Our web development services focus on delivering high-quality, scalable, and secure digital solutions tailored to meet your business needs. We ensure that your website not only looks great but also performs flawlessly across all devices and browsers. We take a strategic approach to web development that considers both user experience and business objectives. By working closely with you, we are able to create web applications that align with your vision and provide tangible results.</p>

    <p>We offer a wide range of services designed to ensure your online presence is effective, secure, and future-proof. Our web development process is customized to cater to your specific business requirements, whether you're looking to build a new website or revamp an existing one. Here's a closer look at the services we provide:</p>
    <ul>
      <li><strong>E-Commerce Solutions:</strong> We develop feature-rich e-commerce websites that enhance sales, streamline user experience, and offer seamless payment gateway integration. Our e-commerce solutions come with advanced features such as inventory management, multi-currency support, secure payment processing, and detailed analytics to help you track customer behavior and optimize your sales strategies.</li>
      <li><strong>Website Upkeep:</strong> Regular updates, security patches, and performance optimizations are essential to ensure your website stays secure and runs at peak performance. We offer ongoing maintenance packages that cover everything from content updates to security enhancements, ensuring that your website evolves as your business grows.</li>
      <li><strong>Search Engine Optimization:</strong> Implementing best SEO practices to improve your website's ranking on search engines and attract organic traffic. We focus on on-page SEO strategies such as optimizing content, images, and meta tags, as well as off-page SEO techniques like link building and local SEO to boost visibility and drive traffic to your website.</li>
      <li><strong>Tailored Web Design:</strong> Custom website designs that align with your brand identity and create a lasting impression on visitors. We understand the importance of having a unique, visually appealing design that resonates with your audience and sets you apart from your competitors.</li>
      <li><strong>Mobile-First Design:</strong> Ensuring a responsive experience across all devices, from desktops to smartphones, for a seamless browsing experience. With mobile traffic continuing to grow, we prioritize creating websites that are optimized for mobile users, ensuring a smooth and intuitive experience no matter the device.</li>
    </ul>
    
    <p>Our team utilizes the latest web development technologies, including React.js, Next.js, and other modern frameworks, to create fast, scalable, and secure web applications. Whether you're launching a new website or revamping an existing one, our web development expertise ensures your digital presence is strong, efficient, and future-ready. We also provide services like API development, custom web apps, and content management systems (CMS) to ensure you have full control over your site's content and functionality.</p>

    <p>We believe in the power of collaboration, so we work closely with you throughout the development process, from the initial concept to the final launch. Our focus is always on creating a website that meets your business objectives and exceeds your users' expectations. With a strong emphasis on user-centric design, scalable architecture, and performance optimization, our web development services are tailored to help your business succeed in the digital landscape.</p>
    `,
  },

  {
    image: <i className="fas fa-mobile-alt" />,
    title: "App Development",
    shortDesc:
      "From concept to launch, we create mobile apps that are intuitive, high-performing, and designed to engage users.",
    heading: "App Development: Intuitive & High-Performance Mobile Solutions",
    html: `
    <p>Our app development services provide innovative and tailored solutions for businesses looking to expand their digital presence on mobile platforms. We develop applications that offer seamless user experiences, optimized performance, and robust security. Whether you're looking to build a simple app or a complex, feature-rich mobile application, our team has the expertise to bring your ideas to life.</p>

    <p>We offer end-to-end mobile app development services, from initial concept and design to development, testing, and deployment. Our team works with you to understand your business goals, your target audience, and your unique requirements, ensuring that the app we build delivers real value. Here are some of the services we specialize in:</p>
    <ul>
      <li><strong>Custom App Development:</strong> We craft apps that align with your unique business needs, ensuring they are fully functional, intuitive, and scalable. Whether you need a native app for iOS and Android or a cross-platform solution, we have the tools and expertise to build a customized app that fits your requirements perfectly.</li>
      <li><strong>Multi-Platform Solutions:</strong> Our apps are designed to provide a consistent experience across iOS, Android, and web-based platforms. By using technologies such as React Native and Flutter, we ensure that your app delivers a seamless experience on all devices, helping you reach a broader audience without compromising on performance or user experience.</li>
      <li><strong>User-Centered Design:</strong> We prioritize intuitive navigation, engaging UI/UX, and accessibility to enhance user satisfaction. Our design team works to create an app interface that is both visually appealing and easy to use, ensuring that users have an enjoyable and frictionless experience from start to finish.</li>
      <li><strong>Robust Backend Development:</strong> Secure, scalable backend architecture for data management, authentication, and real-time functionalities. We use modern technologies like Node.js, Express, and Firebase to create the backend of your app, ensuring that it is secure, reliable, and capable of handling large amounts of data.</li>
      <li><strong>App Support and Updates:</strong> Ongoing support, feature enhancements, and maintenance to ensure your app remains up-to-date and competitive. We offer continuous monitoring and troubleshooting, and we are committed to keeping your app aligned with evolving market trends and user expectations.</li>
    </ul>

    <p>We specialize in developing apps that are not only high-performing but also designed to meet the needs of today’s mobile-first world. Our expertise covers all stages of the app development lifecycle, from ideation and wireframing to development, testing, and final deployment. Whether you’re looking to create an app that engages users, drives sales, or streamlines internal operations, we work with you to build an app that supports your business goals.</p>

    <p>In addition to developing native mobile apps for iOS and Android, we also offer cross-platform mobile app development services, allowing you to launch your app on multiple platforms without needing to develop separate apps for each. Our team leverages the latest tools and frameworks to build apps that are optimized for speed, security, and usability.</p>

    <p>As your mobile app development partner, we are dedicated to creating apps that not only function well but also provide long-term value to your business. From app monetization strategies to user feedback integration, we ensure that your app remains relevant and competitive in a fast-changing market.</p>
    `,
  },
  {
    image: <i className="fas fa-gamepad" />,
    title: "Game Development",
    shortDesc:
      "Bring your gaming ideas to life with our expert game development services. From concept to launch, we create immersive, high-quality games that captivate players and deliver unforgettable experiences.",
    heading: "Game Development: Creating Immersive & Engaging Experiences",
    html: `
    <p>We bring innovative gaming ideas to life with cutting-edge technology and immersive design. Whether you are a startup, an independent developer, or an established gaming company, our team has the expertise and passion to create unforgettable gaming experiences.</p>
<p>Our game development process ensures that every game we create is not only visually stunning but also filled with immersive gameplay elements that captivate players. We embrace a creative approach, ensuring that we deliver high-quality games that align with your vision and goals. Our core game development services include:</p>
<ul>
  <li><strong>2D & 3D Game Development:</strong> We specialize in designing and developing both 2D and 3D games, from casual mobile games to intricate, high-fidelity console and PC games. We focus on visually impressive environments, realistic animations, and engaging storylines that ensure the gameplay experience remains fresh and exciting.</li>
  <li><strong>Cross-Platform Compatibility:</strong> Our game development team works with a wide range of platforms, including mobile devices (iOS and Android), PC, and major gaming consoles. We use powerful cross-platform development tools to ensure that your game runs smoothly across multiple platforms, expanding your audience reach and providing a seamless experience for players regardless of their preferred device.</li>
  <li><strong>VR & AR Integration:</strong> We integrate the latest in Virtual Reality (VR) and Augmented Reality (AR) technologies into our games, allowing for highly interactive, immersive environments that push the boundaries of traditional gaming. Whether you want to create a VR experience for gaming headsets or a mobile AR app, we have the expertise to build these solutions that will engage users in entirely new ways.</li>
  <li><strong>AI-Driven Gaming:</strong> AI technology is revolutionizing the gaming industry, and we incorporate AI-driven solutions such as smart Non-Playable Characters (NPCs) and dynamic, adaptive gameplay. Our AI algorithms enable characters to learn and evolve based on player interaction, creating an intelligent, immersive experience where no two sessions are alike.</li>
  <li><strong>Multiplayer & Online Features:</strong> We build multiplayer experiences that allow players to interact with one another in real-time. This includes creating secure server environments, multiplayer gameplay mechanics, and online match systems that keep players engaged. Additionally, we implement features such as in-game chat, leaderboards, and matchmaking systems to enhance the social experience.</li>
  <li><strong>Game Monetization:</strong> Our game development team understands the complexities of monetizing games. Whether it’s through in-app purchases, advertisements, or premium game sales, we provide strategic monetization options that enhance player experience while helping you maximize your revenue.</li>
  <li><strong>Game Testing & Quality Assurance:</strong> Quality assurance is a critical aspect of game development. Our team conducts thorough testing, from gameplay mechanics to performance under heavy load, ensuring that your game meets the highest quality standards. We ensure that there are no bugs or glitches that could disrupt the player experience.</li>
</ul>
<p>At the core of our game development services is our passion for crafting captivating, engaging experiences. We aim to create games that not only look fantastic but also challenge, entertain, and leave a lasting impression on players.</p>
    `,
  },
  {
    image: <i className="fas fa-brain" />,
    title: "Machine Learning",
    shortDesc:
      "Leverage the power of machine learning to uncover insights, automate tasks, and enhance decision-making.",
    heading: "Machine Learning: Smart Solutions for Data-Driven Decisions",
    html: `
    <p>Machine learning is transforming industries by enabling businesses to unlock the potential hidden within their data. At our core, we harness machine learning techniques to help businesses solve complex problems, drive innovation, and make data-driven decisions that lead to actionable insights and enhanced performance. Our machine learning solutions are tailored to meet the specific needs of your business, regardless of its size or industry.</p>
<p>We focus on delivering solutions that are not only powerful but also practical. Our machine learning experts work closely with your team to understand your challenges, define key objectives, and implement models that solve real-world problems efficiently. Here are some of the services we offer:</p>
<ul>
  <li><strong>Predictive Analytics:</strong> Predictive analytics allows businesses to forecast future trends based on historical data. By identifying patterns and making predictions, businesses can optimize strategies, improve decision-making, and stay ahead of the competition. We help companies leverage predictive analytics to anticipate customer behavior, market trends, and business outcomes.</li>
  <li><strong>Natural Language Processing (NLP):</strong> NLP allows machines to understand, interpret, and generate human language in a meaningful way. We use NLP to create intelligent systems that understand customer sentiment, automate customer support through chatbots, and extract insights from large volumes of unstructured text data. This leads to smarter, more personalized customer experiences and business processes.</li>
  <li><strong>Computer Vision:</strong> Computer vision technology enables machines to interpret and make decisions based on visual data. We develop advanced computer vision applications for facial recognition, object detection, image classification, and automated image processing. By applying computer vision, businesses can automate processes, enhance security, and improve customer engagement.</li>
  <li><strong>Custom AI Models:</strong> Every business is unique, and we recognize that a one-size-fits-all solution often doesn’t cut it. Our team specializes in building custom AI models that are tailored specifically to your business needs. Whether it’s building recommendation systems for e-commerce, fraud detection for financial institutions, or customized prediction engines for manufacturing, we design AI-driven solutions that foster business growth and innovation.</li>
  <li><strong>Reinforcement Learning:</strong> Reinforcement learning is an area of machine learning focused on decision-making. By simulating environments and rewarding successful actions, we develop systems that continuously learn and improve their performance. These techniques are particularly useful for areas such as robotics, game AI, and autonomous vehicles.</li>
  <li><strong>AI-Powered Automation:</strong> Automating processes with machine learning and AI enhances operational efficiency, reduces costs, and eliminates human error. From automating manual data entry to streamlining customer service operations with AI, our solutions help businesses scale while maintaining high quality.</li>
  <li><strong>Data Preprocessing & Feature Engineering:</strong> We help businesses prepare their data for machine learning by cleaning, organizing, and transforming it into the right format. By selecting the best features and reducing noise, we improve the accuracy and effectiveness of machine learning models.</li>
</ul>
<p>With the power of machine learning, we equip businesses with the tools they need to make smarter, faster, and more informed decisions. From developing custom algorithms to optimizing existing systems, we help businesses unlock the true potential of their data.</p>

    `,
  },
  {
    image: <i className="fas fa-cloud" />,
    title: "Cloud Computing",
    shortDesc:
      "Maximize efficiency and scalability with our cloud computing solutions. We help businesses leverage the cloud to store, manage, and process data seamlessly.",
    heading:
      "Cloud Computing: Scalable, Secure & High-Performance Infrastructure",
    html: `
    <p>Cloud computing has revolutionized the way businesses manage and store data, providing scalable, reliable, and cost-effective solutions for all kinds of applications. Our cloud computing services enable businesses to access cutting-edge cloud technologies, improve operational efficiency, and ensure business continuity in the digital age.</p>
<p>Our cloud computing solutions are designed to provide flexible, scalable, and secure environments that empower businesses to operate more efficiently. We collaborate with your team to assess your unique needs and design customized cloud infrastructure that supports your goals. Our cloud computing services include:</p>
<ul>
  <li><strong>Cloud Architecture Design:</strong> We help businesses design cloud architectures that are optimized for performance, cost, and scalability. Our team ensures that the architecture is future-proof, capable of handling growth, and flexible enough to adapt to changing needs. Whether you are moving from on-premises infrastructure or scaling existing cloud environments, we provide guidance every step of the way.</li>
  <li><strong>Cloud Storage & Security:</strong> Cloud storage offers businesses a secure and cost-effective way to store and manage data. We provide solutions for encrypted storage, ensuring that your data is protected from unauthorized access while being easily accessible when needed. Our solutions also include backup and disaster recovery, ensuring that your data is safe and recoverable at all times.</li>
  <li><strong>Serverless Computing:</strong> Serverless computing allows businesses to run code without managing servers. This approach reduces operational overhead and improves scalability. We help businesses implement serverless architectures, enabling them to focus on their applications and business logic while the cloud provider handles the underlying infrastructure.</li>
  <li><strong>Cloud Integration:</strong> Businesses today rely on a mix of on-premises and cloud-based systems. We provide cloud integration services that connect cloud services with your existing business workflows. Whether you are integrating with CRM, ERP, or legacy systems, we ensure that your cloud solutions work seamlessly with your existing infrastructure.</li>
  <li><strong>Cloud Migration:</strong> Our cloud migration services ensure that businesses can transition to the cloud with minimal disruption and downtime. We plan and execute migrations efficiently, ensuring that business operations are not negatively affected. We also offer post-migration support to optimize performance and monitor the health of your cloud infrastructure.</li>
  <li><strong>Cloud Cost Optimization:</strong> We help businesses maximize the ROI on their cloud investments by implementing cost-effective solutions. Through careful monitoring, we identify areas where cloud usage can be optimized, and unnecessary costs can be eliminated.</li>
  <li><strong>Managed Cloud Services:</strong> For businesses looking to outsource cloud management, we offer managed cloud services. Our team handles everything from server management to security updates, allowing businesses to focus on their core operations while we take care of the cloud infrastructure.</li>
</ul>
<p>Whether you are looking to migrate to the cloud, optimize your existing cloud infrastructure, or develop a fully scalable cloud environment, we offer end-to-end cloud computing services designed to meet the unique needs of your business. Let us help you harness the full potential of the cloud for business success.</p>

    `,
  },
  {
    image: <i className="fas fa-chart-line" />,
    title: "Data Science",
    shortDesc:
      "Transform raw data into actionable insights with our data science expertise. We help businesses analyze trends, predict outcomes, and make data-driven decisions.",
    heading: "Data Science: Unlocking Insights for Business Growth",
    html: `
    <p>In today’s data-driven world, businesses need to leverage their data to make informed decisions, uncover insights, and predict future trends. Data science allows businesses to extract actionable insights from large volumes of data, enabling better decision-making and more efficient processes. Our data science services are designed to help you turn raw data into meaningful and valuable business insights.</p>
<p>We provide end-to-end data science services that span the entire data lifecycle, from data collection and cleaning to advanced analytics and predictive modeling. Our team of experts uses the latest techniques and tools to ensure that your data is analyzed accurately, providing you with clear insights that lead to measurable business results. Our services include:</p>
<ul>
  <li><strong>Big Data Analytics:</strong> We help businesses process and analyze large datasets to uncover hidden trends, correlations, and patterns. Our big data analytics solutions allow you to make sense of complex data from various sources, providing insights that drive business growth and improve operations.</li>
  <li><strong>Data Visualization:</strong> Data visualization is key to making complex data more understandable and actionable. We specialize in creating intuitive, interactive dashboards and reports that make it easy for decision-makers to interpret data and take action. With clear visualizations, your team can quickly grasp insights, track key metrics, and make informed decisions.</li>
  <li><strong>AI-Powered Insights:</strong> We integrate artificial intelligence with data science to provide businesses with intelligent insights. By leveraging machine learning algorithms, we can automate data analysis and create predictive models that deliver accurate forecasts and recommendations, helping businesses stay ahead of the competition.</li>
  <li><strong>Custom Data Solutions:</strong> Every business has unique data challenges, and we develop custom data science solutions that are tailored to meet your specific needs. Whether it's building a recommendation system, customer segmentation, or predictive maintenance models, we provide solutions that help you unlock the full potential of your data.</li>
  <li><strong>Statistical Analysis & Hypothesis Testing:</strong> We use statistical methods to analyze data, test hypotheses, and determine the significance of findings. This rigorous approach ensures that decisions are based on sound, empirical evidence.</li>
  <li><strong>Data Engineering:</strong> Our data engineering services ensure that your data is properly structured, cleaned, and optimized for analysis. We help build the infrastructure necessary to collect, store, and process data efficiently, setting the foundation for powerful analytics.</li>
</ul>
<p>With our expertise in data science, we empower businesses to harness the power of data to improve operations, enhance customer experiences, and achieve strategic objectives. Let us help you unlock insights that drive business success.</p>

    `,
  },
  {
    image: <i className="fas fa-cloud-upload-alt" />,
    title: "Cloud Migration Services",
    shortDesc:
      "Seamlessly transition your business to the cloud with our expert cloud migration services. We ensure minimal downtime and optimized performance during the migration process.",
    heading: "Cloud Migration: Seamless Transition to Scalable Infrastructure",
    html: `
    <p>Cloud migration is a critical process for businesses seeking to leverage the flexibility, scalability, and cost-efficiency of the cloud. However, the migration journey can be complex and daunting without the right expertise. Our cloud migration services provide businesses with the guidance and technical expertise they need to move to the cloud with minimal disruption and maximum efficiency.</p>
<p>We understand that each business has unique needs, and our cloud migration services are designed to be flexible and adaptable. We ensure that your transition to the cloud is smooth, secure, and optimized for performance. Our migration process includes a thorough assessment of your current infrastructure, strategic planning, and continuous support before, during, and after the migration. Here's what we offer:</p>
<ul>
  <li><strong>Cloud Strategy & Planning:</strong> We start by working closely with your team to understand your business goals, current infrastructure, and specific cloud needs. Our experts help design a detailed migration roadmap that includes timelines, resource requirements, and risk management strategies, ensuring a seamless transition.</li>
  <li><strong>Secure Data Migration:</strong> One of the most critical aspects of migration is ensuring the safe transfer of data to the cloud. Our team uses best practices to secure your data during the migration process, minimizing the risk of data loss or security breaches. We also perform rigorous testing to ensure the integrity of your data post-migration.</li>
  <li><strong>Infrastructure Optimization:</strong> After migration, we optimize your cloud infrastructure for maximum performance and efficiency. This includes configuring cloud resources, load balancing, and ensuring that your cloud environment is cost-effective while meeting the performance needs of your business.</li>
  <li><strong>Post-Migration Support:</strong> Our services don’t stop after migration. We provide continuous monitoring and support to ensure that your cloud infrastructure runs smoothly. This includes ongoing performance tuning, troubleshooting, and regular health checks to ensure everything is running at optimal levels.</li>
  <li><strong>Cloud Security & Compliance:</strong> Security is a top priority when migrating to the cloud. We ensure that your cloud environment meets industry security standards and regulatory compliance requirements. We implement robust security measures, including encryption, access controls, and continuous monitoring to protect your data.</li>
  <li><strong>Application Migration:</strong> In addition to data, we help businesses migrate applications to the cloud. This includes rehosting, replatforming, or refactoring applications to take full advantage of cloud-native services and infrastructure.</li>
</ul>
<p>Our cloud migration services help businesses minimize downtime and risks during migration while optimizing cloud environments for performance, security, and cost efficiency. Let us guide you through a successful cloud migration journey.</p>

    `,
  },
];

// services for web development
export const webDevelopmentServices = [
  {
    image: <i className="flaticon-web-development" />,
    heading: "E-Commerce Solutions",
    description: "Enhance your sales with bespoke e-commerce websites.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "Website Upkeep",
    description: "Ensure your site stays up-to-date and performs flawlessly.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "Search Engine Optimization",
    description:
      "Improve your site's visibility using effective on-page SEO strategies.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "Tailored Web Design",
    description:
      "Create unique websites that truly represent your brand and engage visitors.",
  },
  {
    image: <i className="flaticon-responsive" />,
    heading: "Mobile-First Design",
    description:
      "Deliver an exceptional user experience across desktops, tablets, and smartphones.",
  },
];

// services for mobile development
export const appDevelopmentServices = [
  {
    image: <i className="flaticon-app-development" />,
    heading: "Custom App Development",
    description:
      "Custom apps crafted to meet your business’s specific requirements.",
  },
  {
    image: <i className="flaticon-software-development" />,
    heading: "Multi-Platform Solutions",
    description:
      "Apps that deliver a consistent experience on iOS, Android, and the web.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "User-Centered Design",
    description:
      "Designing intuitive and engaging interfaces for a seamless user experience.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "Robust Backend Development",
    description:
      "Building secure, scalable, and reliable backend systems for your app.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "App Support and Updates",
    description:
      "Regular updates and maintenance to keep your app running smoothly.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/website projects/5ghomes.webp"),
    title: "5g Homes",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/website projects/bayut.webp"),
    title: "Bayut",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/website projects/cold creekcap.webp"),
    title: "Cold Creekcap",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/website projects/emergency music .webp"),
    title: "Emergency Music",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/website projects/flatiorn.webp"),
    title: "Flatiorn",
  },
  {
    id: 6,
    img: require("../assets/images/portfolio/website projects/maven.webp"),
    title: "Maven",
  },
  {
    id: 7,
    img: require("../assets/images/portfolio/website projects/menissa caterings.webp"),
    title: "Menissa Caterings",
  },
  {
    id: 8,
    img: require("../assets/images/portfolio/website projects/methodist.webp"),
    title: "Methodist",
  },
  {
    id: 9,
    img: require("../assets/images/portfolio/website projects/think reality.webp"),
    title: "Think Reality",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/app projects/dubai travel guide.webp"),
    title: "Dubai Travel Guide",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/app projects/elora hair palour.webp"),
    title: "Elora Hair Palour",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/app projects/evans francis.webp"),
    title: "Evans Francis",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/app projects/house of deliverence.webp"),
    title: "House of Deliverance",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/app projects/mybitsshop.webp"),
    title: "Mybits Shop",
  },
  {
    id: 6,
    img: require("../assets/images/portfolio/app projects/namaz.webp"),
    title: "Namaz",
  },
  {
    id: 7,
    img: require("../assets/images/portfolio/app projects/potea.webp"),
    title: "Potea",
  },
  {
    id: 8,
    img: require("../assets/images/portfolio/app projects/rentop bike and car.webp"),
    title: "Rentop Bike and Car",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Lucas W",
    designation: "Game Producer, Twitch",
    review:
      "When we approached Paramind AI to develop a mobile game, we had high expectations, and they delivered in spades. The game is not only fun and addictive but also polished and well-designed. We’ve had a great response from users, and it has opened up new revenue streams for us.",
  },
  {
    id: 2,
    name: "Emma David",
    designation: "Product Manager, ShopEase",
    review:
      "We couldn’t be more pleased with the mobile app Paramind AI built for us. From the very beginning, they took the time to understand our vision and user needs. The app is now a core part of our business and is helping us engage with customers in ways we hadn’t imagined before.",
  },
  {
    id: 3,
    name: "Michael T",
    designation: "CTO, PulseFit",
    review:
      "Paramind AI helped us build a cross-platform app that’s user-friendly and runs flawlessly on both iOS and Android. The result is a robust, engaging app that has enhanced the experience for our users and streamlined our operations.",
  },
  {
    id: 4,
    name: "Alan Kumar",
    designation: "Head of IT, TrendVista",
    review:
      "Migrating to the cloud was a critical decision for our company, and Paramind AI helped make it a smooth and successful process. From planning to execution, they were thorough and professional. We now benefit from better system performance and have the ability to scale faster as our business grows.",
  },
  {
    id: 5,
    name: "Daniel",
    designation: "Operations Manager, SecureBank Solutions",
    review:
      "The machine learning solution Paramind AI developed for us has completely transformed how we operate. By automating key processes and providing more accurate insights, we've been able to increase productivity and cut costs. Their team worked closely with us to ensure everything aligned with our goals.",
  },
];
