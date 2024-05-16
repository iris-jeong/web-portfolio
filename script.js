// -- Toggle Mobile Menu --
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const navLinks = document.querySelector('aside');

menuButton.addEventListener('click', () => {
	navLinks.classList.toggle('show');
});

closeButton.addEventListener('click', () => {
	navLinks.classList.remove('show');
});

// -- Animations on Scroll --
const itemsToAnimate = document.querySelectorAll(
	'.about-description p, .about-image img, .about-image div, #contact h2, #contact p, #contact a, .project-image, .project-content > h3, .project-content > h4, .project-content p, .project-tech-list, .project-links, .project-grid-title, .project-grid-item, .section-heading'
);

let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.2,
};

let callback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			if (entry.target.id === 'about-image-backdrop') {
				entry.target.classList.add('slide-in-backdrop');
			} else if (Array.from(entry.target.classList).includes('project-image')) {
				entry.target.classList.add('fade-in');
			} else {
				entry.target.classList.add('slide-in-from-bottom');
			}
		}
	});
};

let observer = new IntersectionObserver(callback, options);

itemsToAnimate.forEach((element) => {
	observer.observe(element);
});

// -- Email Button Hover --
const buttons = document.querySelectorAll('.email-button');

// Add event listeners to each email button.
buttons.forEach((button) => {
	['mouseenter', 'mouseout'].forEach((evt) => {
		button.addEventListener(evt, (e) => {
			// Get the position of the button relative to the document.
			let buttonRect = button.getBoundingClientRect();
			let docX = buttonRect.left + window.scrollX;
			let docY = buttonRect.top + window.scrollY;

			// Calculate the relative mouse position.
			let relX = e.pageX - docX;
			let relY = e.pageY - docY;

			const span = button.querySelector('span');

			span.style.top = `${relY}px`;
			span.style.left = `${relX}px`;
		});
	});
});

// -- Header Visibility --
let prevScrollPos = window.pageYOffset;
const header = document.querySelector('header');

function toggleHeaderVisibility() {
	const currentScrollPos = window.pageYOffset;

	if (prevScrollPos > currentScrollPos) {
		header.style.top = 0;

		if (currentScrollPos > 50) {
			header.classList.add('scrolling');
			header.classList.remove('move-back-animation');
		} else {
			header.classList.add('move-back-animation');
			header.classList.remove('scrolling');
		}
	} else {
		header.style.top = `-${header.clientHeight}px`;
	}

	prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', toggleHeaderVisibility);

// -- Project Links Hover  --
const githubIcons = document.querySelectorAll('.github-icon');
const websiteIcons = document.querySelectorAll('.website-icon');

githubIcons.forEach((icon) => {
	icon.addEventListener('mouseenter', () => {
		icon.src = 'icons/github-link-hover-icon.svg';
	});
	icon.addEventListener('mouseout', () => {
		icon.src = 'icons/github-link-icon.svg';
	});
});

websiteIcons.forEach((icon) => {
	icon.addEventListener('mouseenter', () => {
		icon.src = 'icons/link-hover-icon.svg';
	});
	icon.addEventListener('mouseout', () => {
		icon.src = 'icons/link-icon.svg';
	});
});

// -- Social Links Hover --
const linkedInIcon = document.querySelector('.linkedin-icon');
const twitterIcon = document.querySelector('.twitter-icon');
const resumeIcon = document.querySelector('.resume-icon');

linkedInIcon.addEventListener('mouseenter', () => {
	linkedInIcon.src = 'icons/linkedin-hover.svg';
});
linkedInIcon.addEventListener('mouseleave', () => {
	linkedInIcon.src = 'icons/linkedin.svg';
});

twitterIcon.addEventListener('mouseenter', () => {
	twitterIcon.src = 'icons/twitter-hover.svg';
});
twitterIcon.addEventListener('mouseleave', () => {
	twitterIcon.src = 'icons/twitter.svg';
});

// resumeIcon.addEventListener("mouseenter", () => {
// 	resumeIcon.src = "icons/resume-hover.svg";
// });
resumeIcon.addEventListener('mouseleave', () => {
	resumeIcon.src = 'icons/resume.svg';
});
