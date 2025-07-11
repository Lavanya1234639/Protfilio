function addRecommendation() {
      const recText = document.getElementById('newRec').value;
      if (recText.trim() !== '') {
        const newDiv = document.createElement('div');
        newDiv.className = 'recommendation';
        newDiv.textContent = recText;
        document.getElementById('recList').appendChild(newDiv);

        // Task 9: Show popup
        const popup = document.getElementById('popup');
        popup.classList.add('show');
        setTimeout(() => popup.classList.remove('show'), 3000);

        document.getElementById('newRec').value = '';
      }
    }