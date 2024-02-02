import { Section } from "../components/Section"
import { HomeIcon } from '@heroicons/react/20/solid'

const members = [
    {
        name: "Jiho Jin",
        affiliation: "KAIST",
        // role: "PhD candidate",
        // thumb: require("../../public/images/thumb.jpg"),
        web: "https://jinjh0123.github.io/",
        // note: "*Research intern at NAVER AI Lab"
    },
    {
        name: "Jiseon Kim",
        affiliation: "KAIST",
        // role: "PhD candidate",
        // thumb: require("../../public/images/thumb.jpg"),
        web: "https://hikoseon12.github.io/"
    },
    {
        name: "Nayeon Lee",
        affiliation: "KAIST",
        // role: "Associate Professor",
        // thumb: require("../../public/images/thumb.jpg"),
        // web: ""
    },
    {
        name: "Haneul Yoo",
        affiliation: "KAIST",
        // role: "PhD candidate",
        // thumb: require("../../public/images/thumb.jpg"),
        web: "https://haneul-yoo.github.io/"
    },
    {
        name: "Alice Oh",
        affiliation: "KAIST",
        // role: "Professor",
        // thumb: require("../../public/images/thumb.jpg"),
        web: "https://aliceoh9.github.io/"
    },
    {
        name: "Hwaran Lee",
        affiliation: "NAVER AI Lab",
        // role: "Lead Research Scientist",
        // thumb: require("../../public/images/thumb.jpg"),
        web: "https://hwaranlee.github.io/"
    }
]

export const Members = () => {
    return <Section title="Contributors">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {
            members.map(member => {
                return <div key={member.name} className="flex items-center">
                    {/* <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                        <img className="fill" alt={`Thumbnail of ${member.name}`} src={member.thumb}/>
                    </div> */}
                    <div className="flex-1 ml-4">
                        <div className="text-xl font-semibold flex items-center">
                            <span>{member.name}</span>
                            {
                                member.web != null ? <a href={member.web} target="_blank"><HomeIcon className="w-5 h-5 text-gray-500 mb-0.5 ml-1"/></a> : null
                            }
                        </div>
                        
                        <div className="font-light">{member.role}</div>
                        <div className="font-light">{member.affiliation}</div>
                        {member.note != null ? <div className="font-light italic text-sm text-orange-500">{member.note}</div> : null }
                    </div>
                </div>
            })
        }
        </div>
        {/* <div className="mt-8 flex items-center gap-6 gap-y-8 flex-wrap">
            <img className="w-[200px]" alt="NAVER logo" src={require("../../public/images/logos/ai_lab_logo_vertical.png")} width={1728} height={552}/>
            <a href="https://www.si.umich.edu/" target="_blank"><img className="w-20" alt="UMSI logo" src={require("../../public/images/logos/umsi-logo.svg")}/></a>
            <a href="https://global.wkuh.org/" target="_blank"><img className="w-[250px]" alt="Wonkwang logo" src={require("../../public/images/logos/wonkwang-logo.svg")}/></a>
        </div> */}
    </Section>
}