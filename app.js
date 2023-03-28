const anchors = document.querySelectorAll('li a');
const buttons = document.querySelectorAll('.post');
const gmail = document.querySelector('.gmail');
const linkedin = document.querySelector('.linkedin');
const github = document.querySelector('.github');
const collapseButtons = document.querySelectorAll('.collapsible');

anchors.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let content = e.target.nextElementSibling;
    let text = content.firstElementChild;
    text.style.padding = "30px";
    text.style.marginTop = "0px";
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

gmail.addEventListener('mouseover', e => {
  e.target.lastElementChild.style.color = "#e04b43";
})

gmail.addEventListener('mouseout', e => {
  e.target.lastElementChild.style.color = "";
})

linkedin.addEventListener('mouseover', e => {
  e.target.lastElementChild.style.color = "#0072B1";
})

linkedin.addEventListener('mouseout', e => {
  e.target.lastElementChild.style.color = "";
})

github.addEventListener('mouseover', e => {
  e.target.lastElementChild.style.color = "#3fb64f";
})

github.addEventListener('mouseout', e => {
  e.target.lastElementChild.style.color = "";
})

collapseButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.target.classList.toggle("active");
  })
});
