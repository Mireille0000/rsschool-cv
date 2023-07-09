(function () {
    const buttonProject = document.querySelector('.button_project');
    const project = document.querySelector('.project');

    buttonProject.addEventListener('click', ()=>{
        project.classList.toggle('project_active');
        buttonProject.classList.toggle('button_project_active');
    } )
} ()
)