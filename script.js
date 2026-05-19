/* ── Scroll fade-up animation ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if (e.isIntersecting) { 
      e.target.classList.add('visible'); 
      obs.unobserve(e.target); 
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

/* ── Toast notification helper ── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; 
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

/* ── Copy location to clipboard ── */
function copyLocation() {
  navigator.clipboard.writeText('San Jose Rd., Tigbao Talamban, Cebu City, Philippines, 6000')
    .then(() => showToast('📍 Address copied!'))
    .catch(() => showToast('Address: Talamban, Cebu City'));
}

/* ── Download vCard (.vcf) file ── */
function downloadVCard() {
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Jeallaine Bautista',
    'N:Bautista;Jeallaine;;;',
    'TITLE:Senior Financial Analyst',
    'ORG:QBE Insurance Group',
    'EMAIL;TYPE=INTERNET:jeallainebautista@gmail.com',
    'TEL;TYPE=CELL:+639999891561',
    'ADR;TYPE=HOME:;;Cebu City;Cebu;;6000;Philippines',
    'URL:https://www.linkedin.com/in/jeallaine-bautista-b92a86246/',
    'NOTE:BS Accountancy - Magna Cum Laude | University of San Carlos 2023',
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vcf], { type: 'text/vcard' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; 
  a.download = 'Jeallaine-Bautista.vcf';
  document.body.appendChild(a); 
  a.click();
  document.body.removeChild(a); 
  URL.revokeObjectURL(url);
  showToast('✅ Contact saved!');
}

/* ── Resume download ── */
function downloadResume(e) {
  if (e) e.preventDefault();
  const a = document.createElement('a');
  a.href = 'Bautista, Jeallaine.pdf';
  a.download = 'Bautista, Jeallaine.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('📄 Resume downloaded!');
}

/* ── Contact Modal Functions ── */
function openContactModal() {
  document.getElementById('contactModal').classList.add('active');
}

function closeContactModal() {
  document.getElementById('contactModal').classList.remove('active');
}

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;

  if (!name || !email || !subject || !message) {
    showToast('⚠️ Please fill in all fields');
    return;
  }

  const formData = new FormData();
  formData.append('access_key', 'df223e98-8a81-422e-8b29-f4c1a72b05b2');
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('contactForm').reset();
      closeContactModal();
      showToast('✅ Message sent successfully!');
    } else {
      showToast('❌ Error sending message. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showToast('❌ Error sending message. Please try again.');
  });
}

/* ── Close modal when clicking outside ── */
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('contactModal');
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeContactModal();
    }
  });
});
