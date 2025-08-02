document.addEventListener('DOMContentLoaded', function() {
    // Guest User Section Show (No New Post Button)
    const authSection = document.getElementById('auth-section');
    if (authSection) {
        authSection.innerHTML = `<span class="user-name">Welcome, Guest!</span>`;
    }

    // Loading animation for post links
    const loadingDiv = document.getElementById('loading');
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="post"]') || e.target.matches('a[href="blog.html"]')) {
            e.preventDefault();
            if (loadingDiv) loadingDiv.style.display = 'block';
            setTimeout(() => {
                if (e.target.matches('a[href="blog.html"]')) {
                    window.location.href = 'blog.html';
                    loadBlogPosts();
                } else {
                    window.location.href = e.target.href;
                }
            }, 1000);
        }
    });

    // Function to load and display blog posts on blog.html
    function loadBlogPosts() {
        if (window.location.pathname.includes('blog.html')) {
            const mainContent = document.querySelector('.main-content');
            const sidebar = document.querySelector('.sidebar');
            if (mainContent && sidebar) {
                mainContent.innerHTML = '<h2>All Blog Posts</h2><div class="blog-posts"></div>';
                const blogPostsDiv = mainContent.querySelector('.blog-posts');
                const posts = [
                    { 
                        title: 'Exploring AI in Daily Life', 
                        date: 'July 22, 2025', 
                        topic: 'Technology', 
                        link: 'post1.html',
                        fullContent: `Artificial Intelligence (AI) is no longer a futuristic concept; it's part of our daily lives. From voice assistants like Siri to recommendation systems on Netflix, AI is everywhere. In this post, we explore how AI enhances productivity, healthcare, and entertainment. For example, AI-powered apps can predict your next move in traffic or diagnose diseases early. However, with great power comes responsibility. We also discuss ethical concerns like privacy and job displacement. Stay tuned for more tech insights!`
                    },
                    { 
                        title: 'Healthy Living Tips for Busy People', 
                        date: 'July 22, 2025', 
                        topic: 'Lifestyle', 
                        link: 'post2.html',
                        fullContent: `In today's fast-paced world, maintaining health can be challenging. Here are some tips for busy individuals. Start with short workouts like 10-minute walks, stay hydrated, and opt for balanced meals. Prioritize sleep and mindfulness to reduce stress. Incorporate habits like meal prepping and using fitness apps to track progress. Remember, small changes lead to big results! Additional tip: Try yoga for flexibility.`
                    },
                    { 
                        title: 'Travel Adventures in India', 
                        date: 'July 22, 2025', 
                        topic: 'Travel', 
                        link: 'post3.html',
                        fullContent: `India is a land of diverse landscapes and cultures. From the Himalayas to the beaches of Goa, there's something for every traveler. Explore Rajasthan's forts, Kerala's backwaters, and Delhi's historical sites. Tips for budget travel and must-try local foods included. Plan your next adventure with these insights! Also, visit the Taj Mahal for a cultural experience.`
                    },
                    { 
                        title: 'Coding Basics for Beginners', 
                        date: 'July 22, 2025', 
                        topic: 'Technology', 
                        link: 'post4.html',
                        fullContent: `Coding is an essential skill in the digital age. This guide covers basics like variables, loops, and functions in Python. Step-by-step examples and resources to get you started. No prior experience required! Practice with simple projects like a calculator or to-do list app. Continue learning with online courses!`
                    },
                    { 
                        title: 'Productivity Hacks for 2025', 
                        date: 'July 22, 2025', 
                        topic: 'Productivity', 
                        link: 'post5.html',
                        fullContent: `As we enter 2025, productivity tools like AI assistants and time-tracking apps are game-changers. Learn hacks like the Pomodoro technique, digital detox, and automation for tasks. Implement these to achieve more in less time! Try setting daily goals for better focus.`
                    },
                    { 
                        title: 'Sustainable Living Ideas', 
                        date: 'July 22, 2025', 
                        topic: 'Environment', 
                        link: 'post6.html',
                        fullContent: `Sustainable living is key to protecting our planet. Reduce waste by recycling, using reusable items, and conserving energy. Ideas include home gardening, solar power, and zero-waste shopping. Small steps can make a big difference. Join local eco-groups for support!`
                    }
                ];

                // Set default sidebar content to the latest post
                const latestPost = posts[posts.length - 1]; // Last post as latest
                sidebar.innerHTML = `
                    <h3>${latestPost.title}</h3>
                    <div class="post-thumbnail" style="background: url(${latestPost.link.replace('.html', '.jpg')}) no-repeat center/cover; height: 100px;"></div>
                    <div class="post-date">${latestPost.date}</div>
                    <div class="post-topic">${latestPost.topic}</div>
                    <div class="post-description">${latestPost.fullContent}</div>
                `;

                posts.forEach(post => {
                    const postElement = document.createElement('a');
                    postElement.href = post.link;
                    postElement.className = 'blog-post';
                    postElement.dataset.title = post.title;
                    postElement.dataset.date = post.date;
                    postElement.dataset.topic = post.topic;
                    postElement.dataset.fullContent = post.fullContent;
                    postElement.innerHTML = `
                        <div class="post-thumbnail" style="background: url(${post.link.replace('.html', '.jpg')}) no-repeat center/cover;"></div>
                        <div class="post-date">${post.date}</div>
                        <div class="post-topic">${post.topic}</div>
                        <div class="post-description">${post.fullContent.substring(0, 100)}...</div>
                    `;
                    blogPostsDiv.appendChild(postElement);

                    // Hover event for preview in sidebar
                    postElement.addEventListener('mouseenter', function() {
                        sidebar.innerHTML = `
                            <h3>${post.title}</h3>
                            <div class="post-thumbnail" style="background: url(${post.link.replace('.html', '.jpg')}) no-repeat center/cover; height: 100px;"></div>
                            <div class="post-date">${post.date}</div>
                            <div class="post-topic">${post.topic}</div>
                            <div class="post-description">${post.fullContent}</div>
                        `;
                    });

                    postElement.addEventListener('mouseleave', function() {
                        // Reset to latest post on mouse leave
                        sidebar.innerHTML = `
                            <h3>${latestPost.title}</h3>
                            <div class="post-thumbnail" style="background: url(${latestPost.link.replace('.html', '.jpg')}) no-repeat center/cover; height: 100px;"></div>
                            <div class="post-date">${latestPost.date}</div>
                            <div class="post-topic">${latestPost.topic}</div>
                            <div class="post-description">${latestPost.fullContent}</div>
                        `;
                    });
                });
                if (loadingDiv) loadingDiv.style.display = 'none';
            }
        }
    }

    // Load blog posts when blog.html is loaded
    if (window.location.pathname.includes('blog.html')) {
        loadBlogPosts();
    }

    // Contact Form handler (remains as is)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const feedback = document.getElementById('contact-feedback').value;
            if (!name || !email || !feedback) {
                document.getElementById('contact-message').innerText = 'Sab fields fill karein!';
                document.getElementById('contact-message').style.color = 'red';
                document.getElementById('contact-message').style.display = 'block';
                return;
            }
            const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
            feedbacks.push({ name, email, feedback, date: new Date().toISOString() });
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            document.getElementById('contact-message').innerText = 'Feedback successfully submitted! Thank you.';
            document.getElementById('contact-message').style.color = 'green';
            document.getElementById('contact-message').style.display = 'block';
            contactForm.reset();
        });
    }
});