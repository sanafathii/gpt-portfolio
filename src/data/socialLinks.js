import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faLeetcode,
    faEnvelope,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [{
        id: 1,
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/sanafathi/",
        icon: < FontAwesomeIcon icon = { faLinkedin }
        size = "2x" / > ,
    },
    {
        id: 2,
        platform: "GitHub",
        link: "https://github.com/sanafathii",
        icon: < FontAwesomeIcon icon = { faGithub }
        size = "2x" / > ,
    },
    {
        id: 3,
        platform: "Leetcode",
        link: "https://leetcode.com/sanafathi/",
        icon: < FontAwesomeIcon icon = { faLeetcode }
        size = "2x" / > ,
    },
    {
        id: 4,
        platform: "Email",
        link: "mailto:sana.fathi30@gmail.com",
        icon: < FontAwesomeIcon icon = { faEnvelope }
        size = "2x" / > ,
    },
];

export default socialLinks;