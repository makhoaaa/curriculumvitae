$(document).ready(function () {
  $("#about-me").click(function () {
    functionam1();
    functionam2();
    functionam3();
  });

  function functionam1() {
    $("#slide1").fadeOut(0, function () {
      $("#slide1").fadeIn(500);
    });
  }

  function functionam2() {
    $("#slide2").fadeOut(0, function () {
      $("#slide1").fadeIn(500);
    });
  }

  function functionam3() {
    $("#slide3").fadeOut(0, function () {
      $("#slide1").fadeIn(500);
    });
  }

  $("#this-website").click(function () {
    functiontw1();
    functiontw2();
    functiontw3();
  });

  function functiontw1() {
    $("#slide2").fadeOut(0, function () {
      $("#slide2").fadeIn(500);
    });
  }

  function functiontw2() {
    $("#slide1").fadeOut(0, function () {
      $("#slide2").fadeIn(500);
    });
  }

  function functiontw3() {
    $("#slide3").fadeOut(0, function () {
      $("#slide2").fadeIn(500);
    });
  }

  $("#lucky-ones").click(function () {
    functionlo1();
    functionlo2();
    functionlo3();
  });

  function functionlo1() {
    $("#slide3").fadeOut(0, function () {
      $("#slide3").fadeIn(500);
    });
  }

  function functionlo2() {
    $("#slide1").fadeOut(0, function () {
      $("#slide3").fadeIn(500);
    });
  }

  function functionlo3() {
    $("#slide2").fadeOut(0, function () {
      $("#slide3").fadeIn(500);
    });
  }

  $("#education-b").click(function () {
    functione1();
    functione2();
    functione3();
    functione4();
    functione5();
  });

  function functione1() {
    $("#education").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  function functione2() {
    $("#experience").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  function functione3() {
    $("#achievement").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  function functione4() {
    $("#skills").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  function functione5() {
    $("#portfolio").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  $("#experience-b").click(function () {
    functionex1();
    functionex2();
    functionex3();
    functionex4();
  });

  function functionex1() {
    $("#education").fadeOut(0, function () {
      $("#experience").fadeIn(500);
    });
  }

  function functionex2() {
    $("#achievement").fadeOut(0, function () {
      $("#experience").fadeIn(500);
    });
  }

  function functionex3() {
    $("#skills").fadeOut(0, function () {
      $("#experience").fadeIn(500);
    });
  }
  function functionex4() {
    $("#portfolio").fadeOut(0, function () {
      $("#experience").fadeIn(500);
    });
  }

  $("#achievement-b").click(function () {
    functiona1();
    functiona2();
    functiona3();
    functiona4();
  });

  function functiona1() {
    $("#education").fadeOut(0, function () {
      $("#achievement").fadeIn(500);
    });
  }

  function functiona2() {
    $("#experience").fadeOut(0, function () {
      $("#achievement").fadeIn(500);
    });
  }

  function functiona3() {
    $("#skills").fadeOut(0, function () {
      $("#achievement").fadeIn(500);
    });
  }

  function functiona4() {
    $("#portfolio").fadeOut(0, function () {
      $("#achievement").fadeIn(500);
    });
  }

  $("#portfolio-b").click(function () {
    functionp1();
    functionp2();
    functionp3();
    functionp4();
  });

  function functionp1() {
    $("#education").fadeOut(0, function () {
      $("#portfolio").fadeIn(500);
    });
  }

  function functionp2() {
    $("#experience").fadeOut(0, function () {
      $("#portfolio").fadeIn(500);
    });
  }

  function functionp3() {
    $("#achievement").fadeOut(0, function () {
      $("#portfolio").fadeIn(500);
    });
  }

  function functionp4() {
    $("#skills").fadeOut(0, function () {
      $("#portfolio").fadeIn(500);
    });
  }

  $("#skills-b").click(function () {
  functionsk1();
  functionsk2();
  functionsk3();
  functionsk4();
  });

  function functionsk1() {
  $("#education").fadeOut(0, function () {
      $("#skills").fadeIn(500);
  });
  }

  function functionsk2() {
  $("#experience").fadeOut(0, function () {
      $("#skills").fadeIn(500);
  });
  }

  function functionsk3() {
  $("#achievement").fadeOut(0, function () {
      $("#skills").fadeIn(500);
  });
  }

  function functionsk4() {
  $("#portfolio").fadeOut(0, function () {
      $("#skills").fadeIn(500);
  });
  }

});

// Add the missing animateSkillBars function
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        if (percent) {
            // Set CSS custom property for animation
            skill.style.setProperty('--target-width', percent);
            // Add class to trigger animation
            skill.style.width = percent;
        }
    });
}

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');

            // Call animateSkillBars when skills section is revealed
            if (reveal.id === 'skills') {
                setTimeout(animateSkillBars, 300); // Small delay for better effect
            }
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const modal = document.getElementById('portfolioModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

function openPortfolioModal(title, content) {
  modalContent.innerHTML = `
    <h2>${title}</h2>
    ${content}
  `;
  modal.style.display = 'block';
}

document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => {
    const title = item.dataset.title;
    const content = item.dataset.content;
    openPortfolioModal(title, content);
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Print PDF document functionality
function printPDF() {
  // Replace 'path/to/your/cv-document.pdf' with the actual path to your PDF
  const pdfUrl = 'cv.pdf'; // Update this path
  
  // Method 1: Open PDF in new window and trigger print
  const printWindow = window.open(pdfUrl, '_blank');
  printWindow.onload = function() {
    printWindow.print();
  };
  
  // Alternative Method 2: If you prefer to embed and print
  // You can uncomment this if Method 1 doesn't work in some browsers
  /*
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = pdfUrl;
  document.body.appendChild(iframe);
  
  iframe.onload = function() {
    iframe.contentWindow.print();
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  };
  */
}
