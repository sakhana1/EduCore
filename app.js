document.querySelectorAll('[data-nav]').forEach(link=>{
  const page=location.pathname.split('/').pop()||'index.html';
  if(link.getAttribute('href')===page){
    link.classList.add('active');
  }
});

document.querySelectorAll('[data-panel-link]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=link.getAttribute('data-panel-link');

    document.querySelectorAll('[data-panel-link]').forEach(a=>a.classList.remove('active'));
    link.classList.add('active');

    document.querySelectorAll('.panel-section').forEach(section=>{
      section.classList.remove('active');
    });

    const activeSection=document.getElementById(target);
    if(activeSection){
      activeSection.classList.add('active');
      window.scrollTo({top:0,behavior:'smooth'});
    }
  });
});

const detailButtons=document.querySelectorAll('[data-course-open]');
const detailBox=document.getElementById('course-detail-box');

detailButtons.forEach(button=>{
  button.addEventListener('click',e=>{
    e.preventDefault();
    const title=button.dataset.title;
    const instructor=button.dataset.instructor;
    const duration=button.dataset.duration;
    const level=button.dataset.level;
    const category=button.dataset.category;
    const status=button.dataset.status;

    if(detailBox){
      detailBox.innerHTML=`
        <article class="hero-card">
          <span class="tag">${category}</span>
          <h2>${title}</h2>
          <p>Instructor: ${instructor}</p>
          <p>Duration: ${duration} | Level: ${level} | Status: ${status}</p>
          <ul class="list">
            <li>Module 1: Introduction and fundamentals</li>
            <li>Module 2: Guided lessons and video workflow</li>
            <li>Module 3: Practice tasks and completion tracking</li>
            <li>Module 4: Final assessment and certificate eligibility</li>
          </ul>
          <div class="inline-actions" style="margin-top:18px">
            <a class="btn btn-primary" href="student-panel.html">Enroll / Continue</a>
            <a class="btn btn-secondary" href="#courses-top">Back to list</a>
          </div>
        </article>
      `;
      detailBox.scrollIntoView({behavior:'smooth'});
    }
  });
});