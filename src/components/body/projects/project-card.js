import React from 'react'
import "./project-card.css"

function ProjectCard({ project }) {
    return (
        <div className='project-card'>
            <div className='Project info'>
                <label className="projcet-title">{project.title}</label>
                <div className='project-links'>
                    {project.demo && (
                        <a className="project-link" href={project.demo}>
                            <div className="link-button">
                                <i class="fi-rr-globe"></i>
                                Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project-link" href={project.github}>
                            <div className="link-button">
                                <i class="fab fa-github"></i> Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className='project-tags'>
                    {project.tag.map((tag) => {
                        return <label className="tag">{tag}</label>;
                    })}
                </div>
            </div>
            <img src={project.image} className='project-photo' />
        </div>
    )
}

export default ProjectCard