import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";
import {copyrightSign} from "../assets/icons/index.js";

const Footer = () => {
    return(
        <footer className="max-container">
            <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col ">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="logo" width={150} height={46} />
                    </a>
                    <p className="text-white-400 text-base mt-6 leading-7 font-montserrat sm:max-w-sm">
                        Get shoes ready for the new term at your nearest Nike store.
                        Find Your perfect Size In Store. Get Rewards
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon) => (
                            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src={icon.src} alt={icon.alt} height={24} width={24} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section)=>(
                        <div key={section.title}>
                            <h3 className="text-white font-medium text-2xl font-montserrat leading-normal mb-6">{section.title}</h3>
                            <ul className="text-white-400">
                                {section.links.map((link)=>(
                                    <li className="mt-3 font-montserrat leading-normal text-base
                                    hover:text-slate-gray cursor-pointer" key={link.name}>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0"/>
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & conditions</p>
            </div>
        </footer>
    )
}

export default Footer