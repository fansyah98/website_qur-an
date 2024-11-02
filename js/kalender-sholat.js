document.addEventListener('DOMContentLoaded', () => {
    const latitude = '-6.200000'; // Ganti dengan latitude Anda
    const longitude = '106.816666'; // Ganti dengan longitude Anda
    const prayerTimesDiv = document.getElementById('list-sholat');

    // Mengambil data waktu sholat dari tanggal 1 sampai 30 November
    for (let day = 1; day <= 30; day++) {
        const date = `2024-11-${String(day).padStart(2, '0')}`; // Format YYYY-MM-DD
        const formattedDate = `${String(day).padStart(2, '0')}/11/2024`; // Format DD/MM/YYYY

        
        fetch(`https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=2&date=${date}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log respons untuk debugging
                // Memastikan data dan formatnya benar
                if (data && data.data && data.data.timings) {
                    const timings = data.data.timings;
                    prayerTimesDiv.innerHTML += `
                        <tr>
                            <td>${date}</td>
                            <td>${timings.Fajr}</td>
                            <td>${timings.Dhuhr}</td>
                            <td>${timings.Asr}</td>
                            <td>${timings.Maghrib}</td>
                            <td>${timings.Isha}</td>
                        </tr>
                    `;
                } else {
                    console.error('Data format is incorrect', data);
                }
            })
            .catch(error => console.error('Error fetching prayer times:', error));
    }
});
