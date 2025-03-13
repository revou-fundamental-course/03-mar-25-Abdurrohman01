document.addEventListener('DOMContentLoaded', function () {
    // Elemen untuk menampilkan waktu
    const currentTimeElement = document.getElementById('current-time');

    if (!currentTimeElement) {
        console.error('Elemen dengan ID "current-time" tidak ditemukan!');
        return;
    }

    // Fungsi untuk memperbarui waktu saat ini
    function updateCurrentTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toLocaleString(); // Format waktu lokal
    }

    // Perbarui waktu saat halaman dimuat
    updateCurrentTime();

    // Perbarui waktu setiap detik
    setInterval(updateCurrentTime, 1000);
});

let currentIndex = 0;
const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');

function showSlide(index) {
    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Otomatis pindah slide setiap 3 detik
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    const resultDiv = document.getElementById('result');
    const showResultButton = document.getElementById('showResultButton');
    const resetFormButton = document.getElementById('resetFormButton');

    // Tombol "Tampilkan Hasil"
    showResultButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value;
    
        if (!name || !birthdate || !gender || !message) {
            alert('Mohon lengkapi semua field!');
            return;
        }
    
        const now = new Date();
        const resultText = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
            <p><strong>Pesan:</strong> ${message}</p>
            <p><strong>Waktu Submit:</strong> ${now.toLocaleString()}</p>
        `;
    
        resultDiv.innerHTML = resultText;
    });

    // Tombol "Kosongkan Formulir"
    // resetFormButton.addEventListener('click', function () {
    //     form.reset(); // Kosongkan formulir
    //     resultDiv.innerHTML = ''; // Hapus hasil yang ditampilkan
    // });
});

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('namePopup');
    const inputName = document.getElementById('inputName');
    const submitButton = document.getElementById('submitName');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Tampilkan pop-up saat halaman dimuat
    popup.style.display = 'flex';

    // Event listener untuk tombol Submit
    submitButton.addEventListener('click', function () {
        const name = inputName.value.trim();

        if (name) {
            // Jika ada nama, perbarui teks sapaan
            welcomeMessage.textContent = `Halo, ${name}! Selamat Datang!`;

            // Sembunyikan pop-up
            popup.style.display = 'none';
        } else {
            alert('Mohon masukkan nama Anda!');
        }
    });
});