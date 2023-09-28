import { Raleway } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400'
})

const raleway = Raleway({
    subsets: ['latin'],
    weight: '900'
})

const ProjectFeatures = ({ project }: { project: Record<string, any> }) => {
    return (
        <div className='lg:px-32 md:px-16 sm:px-8 px-4 bg-[#333] py-16 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <h3
                    className={`${raleway.className} lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-neutral-100`}
                >
                    Features
                </h3>
                {project.features?.map((feature: Record<string, string>) => (
                    <div key={feature.name} className='flex flex-col gap-2'>
                        <h3
                            className={`${raleway.className} font-semibold md:text-2xl text-base text-neutral-100`}
                        >
                            {feature.name}
                        </h3>
                        <p
                            style={{ lineHeight: '1.7em' }}
                            className={`text-neutral-100 md:text-lg sm:text-base text-sm ${montserrat.className}`}
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-5">
                <h3
                    className={`${raleway.className} lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-neutral-100`}
                >
                    State of project
                </h3>
                <p style={{ lineHeight: '1.7em' }}
                    className={`text-neutral-100 md:text-lg sm:text-base text-sm ${montserrat.className}`}>
                    {project.state}
                </p>
            </div>
        </div>
    )
}

export default ProjectFeatures
