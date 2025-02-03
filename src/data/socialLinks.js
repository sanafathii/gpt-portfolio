import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [{
        id: 1,
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/sanafathi/",
        icon: < FontAwesomeIcon icon = { faLinkedin }
        />,
        size: "2x",
    },
    {
        id: 2,
        platform: "GitHub",
        link: "https://github.com/sanafathii",
        icon: < FontAwesomeIcon icon = { faGithub }
        />,
        size: "2x",
    },
];

export default socialLinks;