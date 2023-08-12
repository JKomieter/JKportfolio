


const SkillItem = ({ name, Icon }: { 
    name: string;
    Icon: any;
 }) => {
    return (
        <div className="rounded-sm p-3 flex flex-col items-center justify-center shadow-md bg-neutral-100">
            <Icon className="text-5xl" />
            <p className="text-neutral-700 font-medium">{name}</p>  
        </div>
    )
 }

 export default SkillItem;