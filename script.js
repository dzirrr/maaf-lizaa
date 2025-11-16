window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Cari elemen dengan class 'fade-in'
    const content = document.querySelector('.fade-in');
    
    // 2. Kita beri sedikit jeda (misal 100ms) agar transisi CSS
    //    berjalan mulus setelah halaman dimuat.
    setTimeout(function(s) {
        // 3. Tambahkan class 'visible' ke elemen tersebut
        //    Ini akan memicu transisi 'opacity' di CSS
        content.classList.add('visible');
    }, 2000);

});