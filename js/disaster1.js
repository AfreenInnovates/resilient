document.addEventListener('DOMContentLoaded', function() {
  // Tab click event
  const tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  // Tab switch function
  function tabSwitch() {
    // Remove active class from all tabs and panels
    document.querySelector('.tab.is-active').classList.remove('is-active');
    document.querySelector('.panel.is-show').classList.remove('is-show');

    // Add active class to clicked tab
    this.classList.add('is-active');

    // Show corresponding panel
    const index = Array.from(this.parentNode.children).indexOf(this);
    document.querySelectorAll('.panel')[index].classList.add('is-show');
  };
}, false);