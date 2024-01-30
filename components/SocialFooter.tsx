import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function SocialFooter() {
    return (
        <footer className="mt-12 border-t-2 border-amber-300 py-8 text-center w-1/2 sm:w-1/6">
            <a href="https://github.com/robinsonlam">
                <FontAwesomeIcon icon={faGithub} size="1x" className="mx-1 p-1 text-amber-400 hover:text-amber-300 transition"/>
            </a>
            <a href="https://www.linkedin.com/in/robinsonlam">
                <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-1 p-1 text-amber-400 hover:text-amber-300 transition"/>
            </a>
        </footer>
    )
}