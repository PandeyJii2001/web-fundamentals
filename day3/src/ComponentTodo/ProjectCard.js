import React from 'react';


function ProjectCard (props) {

        return (<>

            <div className='userinfo'>{props.project.projectTitle}</div>
            <div className='userinfo'>{props.project.projectStatus}</div>
            <div className='userinfo'>{props.project.projectOwner}</div>
            <div className='userinfodueDate'>{props.project.dueDate}</div>
           
        </>
        )
  
}

export default ProjectCard;