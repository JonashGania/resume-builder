import { useSkills } from "../../context/skillsContext"

const SkillsSection = () => {
    const { technicalSkills, personalSkills } = useSkills();

    return (
        <section data-testid="skills-section" className="w-full">
            <h2 className="text-center font-bold">Skills</h2>
            <div className="pb-4">
                <h4 className="font-bold">Technical Skills</h4>
                <ul className=" pl-8">
                    {technicalSkills.map((skills, index) => (
                        <li key={index} className="list-disc">{skills}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="font-bold">Personal Skills</h4>
                <ul className="list-disc pl-8">
                    {personalSkills.map((skills, index) => (
                        <li key={index} className=" leading-5">{skills}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SkillsSection