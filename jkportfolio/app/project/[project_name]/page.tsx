"use client";
import ProjectHero from "@/components/layout/ProjectDetails/ProjectHero";
import { useParams } from "next/navigation";
import { projectdata } from "@/projectdata";
import ProjectMedia from "@/components/layout/ProjectDetails/ProjectMedia";
import ProjectOverview from "@/components/layout/ProjectDetails/ProjectOverview";
import ProjectFeatures from "@/components/layout/ProjectDetails/ProjectFeatures";
import HaveALook from "@/components/layout/ProjectDetails/HaveALook";

export default function Page() {

    const { project_name } = useParams();
    
    return (
        <div className="w-full">
            <ProjectHero project={projectdata[project_name as keyof typeof projectdata]} />
            <ProjectOverview project={projectdata[project_name as keyof typeof projectdata]} />
            <ProjectMedia project={projectdata[project_name as keyof typeof projectdata]} />
            <ProjectFeatures project={projectdata[project_name as keyof typeof projectdata]} />
            <HaveALook project={projectdata[project_name as keyof typeof projectdata]} />
        </div>
    )
}