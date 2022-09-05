import Image from "next/image";
import Link from "next/link";
import { BsCalendarDate } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { AiTwotoneStar } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';



function HeroPerson({ 
    h1_title, 
    imageBackground, 
    imagePoster, 
    birthday, 
    vote_average, 
    known_for_department,
    biography, 
    place_of_birth,
    also_known_as,
}) {
    return (
        <>
            <header className="relative z-20 pt-16 smMin:px-10 w-full !h-full flex justify-between items-center
                lg:flex-col
                md:p-5">
                <div className="min-w-[300px] mr-5 h-full pt-5 mt-10">
                    <Image
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${imagePoster}`}
                        width={350}
                        height={480}
                        className="object-cover object-center absolute top-0 left-0 z-10 rounded-xl"
                        priority 
                    />
                </div>

                <div className="h-full py-5 w-full flex flex-col justify-start items-center ml-10
                    md:ml-0">
                    <h1 className="text-7xl text-white font-extrabold w-full text-left pb-2">{h1_title}</h1>

                    {place_of_birth && <p className="italic text-left underline text-version3 w-full py-2 
                        lg:mb-2">"{place_of_birth}"</p>}

                    <div className="w-full flex justify-start items-center py-2
                        md:flex-col md:gap-3 md:mb-2">
                        <p className="text-gray-400 font-medium flex mr-4
                            md:w-full">
                            <BsCalendarDate className="text-gray-400 text-2xl mr-1"/>
                            Birthday: {birthday}
                        </p>
                        <p className="text-gray-400 font-medium flex mr-4
                            md:w-full">
                            <span className="">{known_for_department}</span> 
                            <span className="mx-2">|</span>
                            <AiTwotoneStar className="text-yellow-300 text-2xl mr-1"/>
                            {vote_average}
                        </p>
                    </div>

                    <p className="w-full text-left py-2 text-gray-400">
                        <span className="underline">Also known as:</span>  {`${also_known_as.map(genre => ' ' + genre)}`}
                    </p>

                    <div className="flex flex-col justify-start items-start w-full">
                        <h2 className="text-3xl text-white font-extrabold w-full text-left pb-2 mt-6">
                            Overview</h2>
                        <p className="text-gray-100 font-medium w-full 
                            ">{biography}</p>
                    </div>
                </div>
            </header>

            <div className="fixed top-0 left-0 z-0 w-full h-full">
                <Image
                src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${imageBackground}`}
                layout="fill"
                className="object-cover object-center absolute top-0 left-0 z-10"
                priority 
                />
                <div className="absolute z-20 w-full h-full bg-black/80"></div>
            </div>
        </>
    );
}

export {HeroPerson};