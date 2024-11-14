import { Github, Linkedin, Mail } from 'lucide-react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Footer({ language }) {

    function MdiWhatsapp(props) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01" /></svg>
        )
    }

    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony-bonilla-a69823273/', icon: Linkedin },
        { name: 'GitHub', href: 'https://github.com/XAnthekiraX', icon: Github },
        { name: 'Email', href: 'mailto:alexbalverde123@gmail.com', icon: Mail }, // Cambia "tuemail@ejemplo.com" por tu dirección de correo real
        { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=593961674799', icon: MdiWhatsapp }, // Número de WhatsApp en formato internacional
    ];

    return (
        <footer className="flex flex-col items-center justify-center w-screen h-auto gap-10 px-5 py-8 text-center text-gray-300 sm:justify-around sm:flex-row animation">
            <div className="">
                <p className="text-xl">
                    © {currentYear} {language == "esp" ? "Desarrollado por" : "Develop by"} <Link to='/Login'>Anthony Bonilla</Link>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-2xl">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors duration-300 font hover:scale-125 hover:text-purple-400"
                    >
                        <link.icon className="w-8 h-8" />
                        <span className="sr-only">{link.name}</span>
                    </a>
                ))}
            </div>


        </footer>
    )
}

Footer.propTypes = {
    language: PropTypes.string
}