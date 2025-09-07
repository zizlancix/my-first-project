document.addEventListener('DOMContentLoaded', () => { 
const toast = document.getElementById('car-toast');
  const closeBtn = toast.querySelector('.close-btn');
 
 
// Helper to show toast
  function showToast() {
    toast.style.display = 'flex';
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  // Auto-hide after 5 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 300);
    }, 5000);
  }

                          // ask for browzer notification premission
  if ('Notification' in window) {
    Notification.rewuestPremission().then (premission =>  {
      if (preission === 'granted') {
        setTimeout(() => {
          // Show toast
          showToast();
 
          // Trigger native browser notification
          new Notification('Hey there!', {
            body: 'Thanks for visiting our app.',
            icon: 'apple-touch-icon.png'
          });
        }, 2000); // 2s delay before showing
      } else {
        // if browzer doesnt support notfications, just show toast
      setTimeout(showToast, 2000);
      }
      }).catch(err => console.error('Notification permission error:', err));
  } else {
    // If browser doesn't support notifications, just show toast
    setTimeout(showToast, 2000);
  }
  // Close button
  closeBtn.addEventListener('click', () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 300);
  });
});
