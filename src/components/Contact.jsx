import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-white px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif text-white mb-8">Contact Me</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto relative">
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              try {
                const response = await fetch('https://your-region-your-project.cloudfunctions.net/sendEmail', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    message
                  })
                });

                if (!response.ok) {
                  throw new Error('Failed to send message');
                }

                // Show confirmation message with fade-in
                const confirmDiv = document.createElement('div');
                confirmDiv.className = 'absolute inset-0 bg-green-500/90 flex items-center justify-center rounded-xl opacity-0 transition-opacity duration-300';
                confirmDiv.innerHTML = '<p class="text-white text-xl">Thank you for contacting me!</p>';
                e.target.parentNode.appendChild(confirmDiv);
                
                // Trigger fade-in
                setTimeout(() => {
                  confirmDiv.classList.add('opacity-100');
                }, 10);
                
                // Clear form
                e.target.reset();
                
                // Start fade-out after 1.7 seconds
                setTimeout(() => {
                  confirmDiv.classList.remove('opacity-100');
                  confirmDiv.classList.add('opacity-0');
                }, 1700);
                
                // Remove element after fade-out completes
                setTimeout(() => {
                  confirmDiv.remove();
                }, 2000);
                
              } catch (error) {
                console.error('Error sending message:', error);
                // Handle error case with fade-in/out
                const errorDiv = document.createElement('div');
                errorDiv.className = 'absolute inset-0 bg-red-500/90 flex items-center justify-center rounded-xl opacity-0 transition-opacity duration-300';
                errorDiv.innerHTML = '<p class="text-white text-xl">Failed to send message. Please try again.</p>';
                e.target.parentNode.appendChild(errorDiv);
                
                setTimeout(() => {
                  errorDiv.classList.add('opacity-100');
                }, 10);
                
                setTimeout(() => {
                  errorDiv.classList.remove('opacity-100');
                  errorDiv.classList.add('opacity-0');
                }, 1700);
                
                setTimeout(() => {
                  errorDiv.remove();
                }, 2000);
              }
            }}
            className="grid grid-cols-1 gap-4"
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              className="p-2 bg-white/10 rounded text-white placeholder-white/60" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              className="p-2 bg-white/10 rounded text-white placeholder-white/60" 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="4" 
              required
              className="p-2 bg-white/10 rounded text-white placeholder-white/60"
            ></textarea>
            <button 
              type="submit" 
              className="p-2 bg-blue-500 rounded text-white hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;