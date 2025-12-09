import {useRef,useState,useEffect} from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import gsap from "gsap";
import { useWindowScroll } from "react-use";


const navItems = ["Media", "News", "Leaderboards", "About", "Contact"];

const NavBar = () => {

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);


     const navContainerRef = useRef(null);
      const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


     const toggleAudioIndicator= ()=>{
        setIsAudioPlaying((prev)=>(!prev))
        setIsIndicatorActive((prev)=>(!prev))
     }


  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
     <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
              <img 
              src='/img/logoC.jpg' 
              alt='logo' 
              className='w-10 rounded-full'/>

              <Button
                id="Product-button"
                title="Products"
                rightIcon={<TiLocationArrow/>}
                containerClass=" bg-blue-50 md:flex hidden justifly-center item-center gap-1"
              />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
                {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >

                <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
             />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                 className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}>
                </div>
                
               
              ))}
          
            </button>

        </div>
        </nav>
      </header>
     </div>
  )
}

export default NavBar