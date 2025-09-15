// Form Validation and Enhancement
        const form = document.getElementById('bookingForm');
        const inputs = form.querySelectorAll('input[required], select[required]');
        
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidation);
        });
        
        function validateField(e) {
            const field = e.target;
            const feedback = field.parentNode.querySelector('.invalid-feedback');
            
            if (!field.validity.valid || field.value.trim() === '') {
                field.classList.add('border-red-500', 'focus:border-red-500');
                field.classList.remove('border-gray-200', 'dark:border-gray-600');
                feedback.classList.remove('hidden');
                return false;
            } else {
                field.classList.remove('border-red-500', 'focus:border-red-500');
                field.classList.add('border-green-500');
                feedback.classList.add('hidden');
                return true;
            }
        }
        
        function clearValidation(e) {
            const field = e.target;
            const feedback = field.parentNode.querySelector('.invalid-feedback');
            
            if (field.validity.valid && field.value.trim() !== '') {
                field.classList.remove('border-red-500', 'focus:border-red-500');
                field.classList.add('border-green-500');
                feedback.classList.add('hidden');
            }
        }
        
        // Enhanced WhatsApp function
        function sendToWhatsApp() {
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const confirmation = document.getElementById('confirmation');
            
            // Validate all fields
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                showMessage('Please fill out all required fields correctly.', 'error');
                return;
            }
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                people: document.getElementById('people').value,
                notes: document.getElementById('notes').value.trim()
            };
            
            // Additional validation
            if (parseInt(formData.people) > 20) {
                showMessage('Maximum 20 people allowed per booking.', 'error');
                return;
            }
            
            // Format date nicely
            const dateObj = new Date(formData.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            // Button loading state
            submitBtn.disabled = true;
            btnText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
            
            setTimeout(() => {
                // Format WhatsApp message
                let message = `*🎯 NEW BOOKING REQUEST*%0A%0A`;
                message += `👤 *Name:* ${formData.name}%0A`;
                message += `📧 *Email:* ${formData.email}%0A`;
                message += `📅 *Date:* ${formattedDate}%0A`;
                message += `⏰ *Time:* ${formData.time}%0A`;
                message += `👥 *People:* ${formData.people}%0A`;
                
                if (formData.notes) {
                    message += `📝 *Special Requests:* ${formData.notes}%0A`;
                }
                
                message += `%0A✨ *Please confirm this booking request.*`;
                
                // Business WhatsApp number
                const phone = "94770773025";
                
                // Open WhatsApp
                const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
                window.open(whatsappUrl, '_blank');
                
                // Show success message
                showMessage('Booking request sent! We\'ll confirm shortly via WhatsApp.', 'success');
                
                // Reset form after successful submission
                setTimeout(() => {
                    form.reset();
                    inputs.forEach(input => {
                        input.classList.remove('border-green-500', 'border-red-500');
                    });
                }, 2000);
                
                // Reset button
                submitBtn.disabled = false;
                btnText.innerHTML = 'Confirm Booking via WhatsApp';
            }, 1500);
        }
        
        function showMessage(text, type) {
            const confirmation = document.getElementById('confirmation');
            const isSuccess = type === 'success';
            
            confirmation.className = `mt-6 p-4 rounded-xl animate-slide-up ${
                isSuccess 
                    ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700' 
                    : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700'
            }`;
            
            confirmation.innerHTML = `
                <div class="flex items-center">
                    <i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-triangle'} mr-3 text-lg"></i>
                    <span class="font-medium">${text}</span>
                </div>
            `;
            
            confirmation.classList.remove('hidden');
            
            if (isSuccess) {
                setTimeout(() => {
                    confirmation.classList.add('hidden');
                }, 5000);
            }
        }
        
