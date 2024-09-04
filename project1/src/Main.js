// menambahkan tombol tutup pada item daftar
function addCloseButton(li) {
    const span = document.createElement("SPAN");
    span.textContent = "\u00D7"; // Simbol "×"
    span.className = "close";
    span.onclick = () => li.style.display = "none"; // Menyembunyikan item daftar ketika tombol tutup diklik
    li.appendChild(span);
}

function handleListClick(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked'); // Menambahkan atau menghapus kelas 'checked' pada item daftar
    }
}

// menambahkan item baru dalam daftar
function newElement() {
    const inputValue = document.getElementById("myInput").value.trim();
    if (inputValue === '') {
        alert("Anda harus menulis sesuatu!"); // Menampilkan peringatan jika input kosong
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputValue;
    addCloseButton(li); // Menambahkan tombol tutup pada item daftar baru
    document.getElementById("myUL").appendChild(li); // Menambahkan item daftar ke dalam ul
    document.getElementById("myInput").value = ""; // Mengosongkan input
}

// tombol tutup untuk item daftar yang sudah ada
document.querySelectorAll("li").forEach(addCloseButton);

document.querySelector('ul').addEventListener('click', handleListClick); // Menangani klik pada item daftar
document.querySelector('.addBtn').addEventListener('click', newElement); // Menangani klik pada tombol "Add"
