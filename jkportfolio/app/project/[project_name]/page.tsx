"use client";
import ProjectHero from "@/components/layout/ProjectDetails/ProjectHero";
import ParticlesBg from "@/particles/ParticlesBg";
import { useParams } from "next/navigation";
import { projectdata } from "@/projectdata";
import ProjectMedia from "@/components/layout/ProjectDetails/ProjectMedia";
import ProjectOverview from "@/components/layout/ProjectDetails/ProjectOverview";

export default function Page() {

    const { project_name } = useParams();
    
    return (
        <div className="w-full">
            {/* <ParticlesBg gradient="linear-gradient(19deg, #222222 0%, #0c92c2 100%)" /> */}
            <ProjectHero project={projectdata[project_name as keyof typeof projectdata]} />
            <ProjectMedia project={projectdata[project_name as keyof typeof projectdata]} />
            <ProjectOverview project={projectdata[project_name as keyof typeof projectdata]} />
        </div>
    )
}