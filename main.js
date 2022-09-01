function getBotPilih() {
    const bot = Math.random();
    
    if (bot < 0.34) return 'batu';
    if (bot >= 0.34 && bot < 0.67) return 'gunting';
        return 'kertas';
    }

    function getHasil(bot, p) {
    if (p == bot) return 'Seri';
    if (p == 'batu') return (bot == 'gunting') ? 'Menang' : 'Kalah'
    if (p == 'gunting') return (bot == 'batu') ? 'Kalah' : 'Menang';
    if (p == 'kertas') return (bot == 'batu') ? 'Menang' : 'Kalah';
    }

    const pilihan = document.querySelectorAll('li');
    pilihan.forEach(function(pilih) {
        pilih.addEventListener('click', function() {
            const botPilih = getBotPilih();
            const pilihanPlayer = pilih.className;
            const hasil = getHasil(botPilih, pilihanPlayer);
    
            const pilihanBot = document.querySelector('.pilihan-bot');
            pilihanBot.innerHTML = botPilih;
    
            const info = document.querySelector('.info');
            info.innerHTML = 'Hasil: ' + hasil;
        });
    });