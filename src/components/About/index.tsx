import Davide from "../../../public/davide.jpg"

const About = () => {
    return (
        <div>
            <p>Hi there! I'm Davide Baldi, a passionate and dedicated Fullstack Web Developer based in Stockholm, Sweden, with a strong focus on creating elegant, user-friendly, and responsive websites.</p>
            
            <p>Web development is more than just a job for me—it's a passion. I love turning ideas into reality, solving complex problems, and constantly learning new things. I focus on creating websites that are not only visually appealing but also provide real value to end users.</p>
            
            <p>Over the years, I've expanded my skills to include a significant part of the DevOps and AWS Cloud environment. I love working with Git, Docker, Kubernetes, and the entire AWS ecosystem! I find the concept of Serverless architecture particularly exciting!</p>

            <h3>My Expertise:</h3>

            <ul>
                <li>Front-End Development: HTML, CSS, JavaScript, jQuery, TypeScript, React, Next.js.</li>
                <li>Back-End Development: Node.js, Express, and databases like MongoDB, SQL, and AWS DynamoDB.</li>
                <li>Responsive Design: Ensuring that websites are accessible and functional across all devices, from desktops to smartphones.</li>
                <li>DevOps: Git, Docker, Kubernetes.</li>
                <li>AWS Cloud Framework: IAM, EC2, S3, Lambda, CDK, CloudFormation, Elastic Beanstalk, CloudWatch, RDS, DynamoDB, API Gateway.</li>
            </ul>

            <h4>My Journey</h4>
            <p>My journey began when I realized how tired I was of working in the restaurant business. While I loved meeting new people every day, balancing evening and weekend shifts with family life became increasingly difficult. In 2022, I decided to change careers and enrolled in a professional education program (Yrkeshögskolan) in Stockholm to challenge myself and return to studying. So far, I’ve loved the process and am thrilled with my choice! Below a picture at my last job during Halloween!😊</p>
            
            <div><img src={Davide} width="60%" height="auto"/></div>
        </div>

    )
};

export default About
