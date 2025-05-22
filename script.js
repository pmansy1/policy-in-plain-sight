
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      const icon = mobileMenuBtn.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Form submission handling
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      
      // Simple validation
      let isValid = true;
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        } else {
          field.classList.remove('error');
        }
      });
      
      if (isValid) {
        showMessage('Form submitted successfully!', 'success');
        form.reset();
      } else {
        showMessage('Please fill in all required fields.', 'error');
      }
    });
  });
  
  // Filter functionality for articles page
  const categoryFilter = document.getElementById('category-filter');
  const locationFilter = document.getElementById('location-filter');
  const sortFilter = document.getElementById('sort-filter');
  const articleCards = document.querySelectorAll('.article-card');
  
  if (categoryFilter && locationFilter && sortFilter && articleCards.length) {
    const applyFilters = () => {
      const category = categoryFilter.value;
      const location = locationFilter.value;
      
      articleCards.forEach(card => {
        let showCard = true;
        
        // Category filtering
        if (category && !card.querySelector(`.tag-${category}`)) {
          showCard = false;
        }
        
        // Here you would implement location filtering if each card had location data
        
        card.style.display = showCard ? 'block' : 'none';
      });
    };
    
    categoryFilter.addEventListener('change', applyFilters);
    locationFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', () => {
      // Sort functionality would be implemented here
      showMessage('Sorting functionality would be implemented in a real application', 'info');
    });
  }
  
  // Search functionality
  const searchInputs = document.querySelectorAll('.search-box input, .filter-search');
  
  searchInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        
        const searchTerm = input.value.trim().toLowerCase();
        if (searchTerm) {
          showMessage(`Search for "${searchTerm}" would be implemented in a real application`, 'info');
        }
      }
    });
  });
  
  // Pagination functionality
  const paginationItems = document.querySelectorAll('.pagination-item');
  
  paginationItems.forEach(item => {
    item.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        document.querySelectorAll('.pagination-item.active').forEach(activeItem => {
          activeItem.classList.remove('active');
        });
        
        this.classList.add('active');
        
        // In a real application, you would load new content here
        showMessage('Pagination would load new content in a real application', 'info');
      }
    });
  });
  
  // Message notification system
  function showMessage(message, type = 'info') {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.innerHTML = `
      <div class="message-content">
        <p>${message}</p>
        <button class="message-close">&times;</button>
      </div>
    `;
    
    document.body.appendChild(messageElement);
    
    // Style the message
    Object.assign(messageElement.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '1000',
      maxWidth: '300px',
      backgroundColor: type === 'success' ? '#d4edda' : 
                      type === 'error' ? '#f8d7da' : '#cce5ff',
      color: type === 'success' ? '#155724' : 
             type === 'error' ? '#721c24' : '#004085',
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    });
    
    // Add close button functionality
    const closeBtn = messageElement.querySelector('.message-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        document.body.removeChild(messageElement);
      });
      
      // Style close button
      Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        marginLeft: '10px'
      });
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (document.body.contains(messageElement)) {
        document.body.removeChild(messageElement);
      }
    }, 5000);
  }
});
