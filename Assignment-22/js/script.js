 function calculateAge() {
      const birthDate = document.getElementById("birthDate").value;
      const birthTime = document.getElementById("birthTime").value;

      if (!birthDate || !birthTime) {
        alert("Please enter both date and time.");
        return;
      }

      const birthDateTime = new Date(`${birthDate}T${birthTime}`);
      const now = new Date();
      let diff = now - birthDateTime;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      // Calculate years and months
      let birth = new Date(birthDateTime);
      let today = new Date();

      let yearDiff = today.getFullYear() - birth.getFullYear();
      let monthDiff = today.getMonth() - birth.getMonth();
      let dayDiff = today.getDate() - birth.getDate();

      if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
      }

      document.getElementById("years").value = yearDiff;
      document.getElementById("months").value = monthDiff;
      document.getElementById("days").value = dayDiff;
      document.getElementById("hours").value = hours;
      document.getElementById("minutes").value = minutes;
      document.getElementById("seconds").value = seconds;
    }