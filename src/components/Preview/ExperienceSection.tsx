import MapExperiences from "./MapExperiences"
import { useExperience } from "../../context/context"

const ExperienceSection = () => {
    const { experiences, currentExperience } = useExperience()

    return (
        <section className="w-full pt-8">
            <h2 className="text-center font-bold pb-2">Experience</h2>
            {experiences.map((experience, index) => (
                <MapExperiences experienceInfo={experience} key={index}/>
            ))}
            {currentExperience && (
                <MapExperiences experienceInfo={currentExperience} key="current"/>
            )}
        </section>
    )
}

export default ExperienceSection