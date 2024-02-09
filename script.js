//UI
const addProjectButton = document.getElementById('addBtn');
const overlay = document.getElementById('overlay');
const addProjectModal = document.getElementById('addProjectModal');
const addProjectForm = document.getElementById('addProject')

const openAddProjectModal = () => {
  
  addProjectModal.classList.add('active');
  overlay.classList.add('active');
}

const closeAddProjectModal = () => {
  addProjectModal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.onclick = closeAddProjectModal;
addProjectButton.onclick = openAddProjectModal;