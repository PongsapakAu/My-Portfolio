type SkillCardProps = {
    key : number;
    title : string;
    skills : string[];
}
export function SkillCard ({ title, skills} : SkillCardProps) {
    return (
        <div className="flex flex-col rounded-lg border p-4 shadow-md duration-250 hover:scale-103">
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <li
                        key={i}
                        className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
