
const BentoCard= ({src,title, description})=>{
   return(
    <div className=' relative size-full'>
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 object-cover object-center size-full"
      />
       <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 text-sm max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
   )


}
    


import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const Features = () => {
  return (
    <section className="bg-black pb-52">
       <div className="container px-3 mx-auto md:px-10">
        <div className="px-5 py-32">
          <p className="text-lg font-mono text-blue-50">
            CREATIVITY IS YOUR GREATEST WEAPON.
          </p>
       
           <p className="max-w-md text-lg opacity-50 font-mono text-blue-50">
            More than guns and bullets, you’ll choose an Agent armed with
            adaptive, swift, and lethal abilities that create opportunities to
            let your gunplay shine.
          </p>
          </div>
          

      <div className="relative w-full overflow-hidden rounded-md border-hsla mb-7 h-96 md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                <b>Dom</b>inat<b>ion</b>
              </>
            }
            description="Capture and control zones to secure tactical map advantage"
          />

        </div>
           <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
              <div className="row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2">
                <BentoCard
                 src="videos/feature-2.mp4"
                  title={
                        <>
                          <b> Warzone</b>
                        </>
                    }
                 />
            </div>
             <div className="row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
                <BentoCard
                 src="videos/feature01.mp4"
                  title={
                        <>
                          <b> Killstreak</b>
                        </>
                    }
                 />
            </div>
             <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                <BentoCard
                 src="videos/feature02.mp4"
                  title={
                        <>
                          <b> Sniper</b>
                        </>
                    }
                 />
            </div>

            <div className="bento-tilt_2">
            <div className="flex flex-col justify-between p-5 size-full bg-violet-300">
              <h1 className="text-black bento-title special-font max-w-64">
                m<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
          <div className='bento-tilt_2'>
            <video 
            src="videos/feature-5.mp4"
            loop
            muted
            className=' object-center object-cover size-full'
            />
            
          </div>
         </div> 
      </div>
    </section>
  )
}

export default Features