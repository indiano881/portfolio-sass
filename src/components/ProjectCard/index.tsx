import "../../global.scss"

interface ProjectCardProps {
    title: string,
    subtitle: string,
    content: string,
    tech: string,
    image: string,
    order: number,
    siteLink: string,
    githubLink: string

}



const ProjectCard = (
    {
        title, 
        subtitle, 
        content, 
        tech, 
        image, 
        order, 
        siteLink, 
        githubLink
    }: ProjectCardProps) => {

    return (
        <div className="cardContainer">
            <img src={image} alt={title} />
            <div>
                <p className="cardContainer__title">
                    <span className="cardContainer__title--order">#{order}</span>
                    {title}
                    </p>
                <p className="cardContainer__subtitle">{subtitle}</p>
                <p className="cardContainer__content">{content}</p>
                <hr className="cardContainer__line"/>
                <p className="cardContainer__tech">Technologies</p>
                <p className="cardContainer__tech--items">{tech}</p>
                <div className="cardContainer__buttons">
                    <a className="cardContainer__buttons--items" href={siteLink} target="_blank">Live site</a>
                    <a className="cardContainer__buttons--items" href={githubLink} target="_blank">Source code</a>
                </div>
            </div>
          
        </div>
    )
};

export default ProjectCard
