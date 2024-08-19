interface ProjectCardProps {
    title: string,
    subtitle: string,
    content: string,
    tech: string,
    image: string
}



const ProjectCard = ({title, subtitle, content, tech, image}: ProjectCardProps) => {
    return (
        <div className="cardContainer">
            <img src={image} alt={title} />
            <div>
                <p className="cardContainer__title">{title}</p>
                <p className="cardContainer__subtitle">{subtitle}</p>
                <p className="cardContainer__content">{content}</p>
                <p className="cardContainer__tech">Technologies</p>
                <p className="cardContainer__tech--items">{tech}</p>
                <div>
                    <button>Live demo</button>
                    <button>Source code</button>
                </div>
            </div>
          
        </div>
    )
};

export default ProjectCard
