import cheerio from 'cheerio';
import oldnames from '$lib/data/99names_0.json';

const html = `
<table class="tg">
  <tbody><tr>
    <th width="7%" class="tg-baqh">No.</th>
    <th width="22%" class="tg-0lax">Nama</th>
    <th width="26%" class="tg-0lax">Transliterasi</th>
    <th class="tg-0lax">Makna</th>
  </tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">1</td>
    <td class="tg-0lax">الرَّحْمَٰنُ</td>
    <td class="tg-0lax">Al-Raḥmān</td>
    <td class="tg-0lax">Yang Maha Pengasih</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Raḥmān Yang Maha Pengasih, Maha Pemurah atau Maha Belas Kasihan (rahmat). Dia menaburkan kasih kepada semua makhluk di alam semesta ini walaupun mereka tidak menyembah-Nya dan tidak mengucapkan terima kasih kepada-Nya atau tidak meminta kepada-Nya. Rahmat Allah meliputi segala-galanya.</td>
  </tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">2</td>
    <td class="tg-0lax">الرَّحِيمُ</td>
    <td class="tg-0lax">Al-Raḥīm</td>
    <td class="tg-0lax"><p>Yang Maha Penyayang</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Raḥīm Maha Penyayang. Allah penyayang kepada hamba-Nya yang beriman. Dengan sayang-Nya Dia memelihara hamba pilihan-Nya untuk tetap berada di dalam redha-Nya. Sayang Allah akan berakhir dengan balasan syurga di akhirat.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">3</td>
    <td class="tg-0lax">الْمَلِكُ</td>
    <td class="tg-0lax">Al-Malik</td>
    <td class="tg-0lax">Yang Maha Berkuasa</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Malik Yang Maha Berkuasa, Maha Memiliki. Dia memiliki seluruh isi langit dan bumi  secara mutlak. Dan Dia memiliki diri kita, tubuh badan kita, anak-anak kita, suami/isteri kita. Dia boleh memberi dan mengambil apa sahaja daripada manusia pada bila-bila masa. Tiada siapa yang mampu menghalang Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">4</td>
    <td class="tg-0lax">الْقُدُّوسُ</td>
    <td class="tg-0lax">Al-Quddūs</td>
    <td class="tg-0lax">Yang Maha Suci</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Quddūs bererti Allah Maha Suci, Maha Bersih atau Maha Sempurna dari segala kesalahan, kecacatan atau kekurangan. Penciptaan langit dan bumi membuktikan kesempurnaan penciptaan-Nya dan kekuasaan-Nya. Allah Al—Quddus juga membawa makna Allah mempunyai pekerti yang Maha Mulia diliputi dengan kasih sayang tanpa kebencian. Kesucian Allah Ya Quddus membolehkan Allah menyucikan jiwa-jiwa manusia.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">5</td>
    <td class="tg-0lax">السَّلاَمُ</td>
    <td class="tg-0lax">Al-Salām</td>
    <td class="tg-0lax">Yang Maha Pemberi Sejahtera</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Salām bererti Maha Sejahtera, Maha Tenang, Maha Menyelamatkan dan Maha Damai. Dia yang memberi kesejahteraan, ketenangan, keselamatan dan kedamaian kepada manusia. Dia memberi kesejahteraan jiwa, pemikiran, emosi dan tubuh badan. Untuk mendapat kesejahteraan dari As-Salam, hendaklah mendekatkan diri dengan-Nya dengan melakukan ketaatan dan ibadah sunat.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">6</td>
    <td class="tg-0lax">الْمُؤْمِنُ</td>
    <td class="tg-0lax">Al-Mu’min</td>
    <td class="tg-0lax">Yang Maha Mengamankan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Mu'min memberi keamanan jiwa, emosi dan jasmani, dibebaskan dari rasa takut dan bimbang. Allah menjaga keamanan kehidupan manusia dan Dia juga mampu memberikan bahaya dan ancaman (Ya Dharr). Untuk mendapat keamanan dari Ya Mukmin, hendaklah beriman kepada Allah, Malaikat, Rasul, Kitab, Akhirat, Qada' dan Qadar.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">7</td>
    <td class="tg-0lax">الْمُهَيْمِنُ</td>
    <td class="tg-0lax">Al-Muhaymin</td>
    <td class="tg-0lax">Maha Pelindung</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Muhaymin Maha Pelindung. Dia melindungi hidup manusia daripada bahaya dan bencana. Dia melindungi manusia daripada tergelincir dari jalan kebenaran dan daripada mengikut bisikan syaitan serta memelihara hamba-hamba yang beriman daripada api neraka.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">8</td>
    <td class="tg-0lax">الْعَزِيزُ</td>
    <td class="tg-0lax">Al-‘Azīz</td>
    <td class="tg-0lax">Yang Maha Perkasa</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya ‘Azīz Yang Maha Perkasa. Dia lebih perkasa daripada segala sesuatu. Keperkasaan-Nya dapat dilihat dalam penciptaan langit dan bumi serta makhluk-Nya. Dia perkasa dalam menguasai setiap makhluk-Nya seperti matahari, bulan, bintang, binatang, gunung serta manusia. Seluruh keperkasaan makhluk-Nya samada manusia, binatang dan sebagainya adalah keperkasaan-Nya. Dia juga mampu memperkasakan jiwa manusia agar cekal dan tabah dalam menghadapi ujian kehidupan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">9</td>
    <td class="tg-0lax">الْجَبَّارُ</td>
    <td class="tg-0lax">Al-Jabbār</td>
    <td class="tg-0lax">Maha Pemaksa</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Jabbār Yang Maha Memaksa yang kehendak-Nya tidak dapat diingkari oleh sesiapa pun. Pemaksaan-Nya tanda kasih sayang-Nya kepada hamba-hamba pilihan-Nya kerana manusia sering lupa dan lalai. Hanya dengan pemaksaan dan kehendak-Nya manusia akan ingat kepada Allah ketika diri lalai.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">10</td>
    <td class="tg-0lax">الْمُتَكَبِّرُ</td>
    <td class="tg-0lax">Al-Mutakabbir</td>
    <td class="tg-0lax">Yang Maha Hebat</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Mutakabbir Yang Maha Hebat, Maha Memiliki Kebesaran. Dia lebih hebat daripada segala sesuatu. Seluruh kebesaran di atas dunia ini adalah milik-Nya seperti gelaran kemuliaan dan jawatan. Kebesaran-NYa juga membawa erti Dia zat yang Maha Besar yang kebesaran-Nya meliputi kebesaran alam ini. Manusia dan alam semesta sangat kerdil berbanding dengan kebesaran Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">11</td>
    <td class="tg-0lax">الْخَالِقُ</td>
    <td class="tg-0lax">Al-Khāliq</td>
    <td class="tg-0lax">Maha Pencipta / Perancang</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Khāliq Yang Maha Pencipta menciptakan alam semesta ini serta seluruh isi langit dan bumi tanpa bantuan sesiapa. Dia pencipta dan pemilik mutlak ke atas segalanya. Penciptaan-Nya sangat sempurna, indah dan harmoni. Manusia adalah ciptaan Allah dan sebagai pencipta, Allah mengetahui keperluan manusia dan mengatur segala keperluan manusia di atas dunia ini.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">12</td>
    <td class="tg-0lax">الْبَارِئُ</td>
    <td class="tg-0lax">Al-Bārī’</td>
    <td class="tg-0lax">Yang Maha Pembuat, Maha Merancang, Maha Menjadikan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Bārī’ Yang Maha Merancang merancang dan mengatur kejadian alam diri, merancang kehidupan manusia dan perjalanan seluruh makhluk di dunia ini. Perancangan dan pengaturan-Nya sangat hebat dan sempurna.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">13</td>
    <td class="tg-0lax">الْمُصَوِّرُ</td>
    <td class="tg-0lax">Al-Muṣawwir</td>
    <td class="tg-0lax">Maha Pembentuk</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muṣawwir mereka bentuk alam semesta dan semua makhluk-Nya dengan cantik dan sempurna serta penuh keunikan dan kreatif. Setiap kreativiti manusia merupakan sifat Allah Ya Muṣawwir, bukan kehebatan kreativiti dan mereka bentuk manusia. Dia mengalirkan sifat Al-Muṣawwir kepada manusia sehingga manusia menjadi kreatif dalam perbuatannya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">14</td>
    <td class="tg-0lax">الْغَفَّارُ</td>
    <td class="tg-0lax">Al-Ghaffār</td>
    <td class="tg-0lax">Yang Maha Pengampun</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Ghaffār Yang Maha Pengampun sentiasa mengampun dosa hambaNya walaupun dosa itu sebanyak buih di lautan. Walau berulang kali melakukan kesalahan tetapi sekiranya setiap kali melakukan kesalahan dia dan bertaubat dan memohon ampun, pasti akan diampunikan oleh Allah Ya Ghaffār.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">15</td>
    <td class="tg-0lax">الْقَهَّارُ</td>
    <td class="tg-0lax">Al-Qahhār</td>
    <td class="tg-0lax">Yang Maha Menundukkan / Menguasai</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ketika manusia berdegil tidak mematuhi perintah Allah, Allah Ya Qahhar akan menghukum agar manusia kembali ke jalan Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">16</td>
    <td class="tg-0lax">الْوَهَّابُ</td>
    <td class="tg-0lax">Al-Wahhāb</td>
    <td class="tg-0lax">Maha Pemberi Kurnia</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Wahhāb sentiasa memberi nikmat kepada manusia tanpa meminta balasan dan seringkali Allah memberi tanpa manusia meminta.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">17</td>
    <td class="tg-0lax">الرَّزَّاقُ</td>
    <td class="tg-0lax">Al-Razzāq</td>
    <td class="tg-0lax">Maha Pemberi Rezeki</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Razzāq memberi rezekiNya kepada setiap makhlukNya. Setiap makhluk samada manusia atau binatang sudah tersedia rezeki masing—masing. Rezeki Allah dalam pelbagai bentuk. Ada dalam bentuk keperluan duniawi seperti makan—minum, kesihatan, wang ringgit, rumah, kenderaan dan sebagainya. Ada dalam bentuk ukhrawi iaitu keimanan dan ilmu mengenal Allah dan syurga. Rezeki merupakan ujian daripada Allah. Allah memerintahkan kita menafkahkan sebahagian daripada rezekiNya kepada orang yang memerlukan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">18</td>
    <td class="tg-0lax">الْفَتَّاحُ</td>
    <td class="tg-0lax">Al-Fattāḥ</td>
    <td class="tg-0lax">Yang Maha Membuka</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Fattah membuka setiap yang tertutup. Dia membuka pintu rezeki, pintu penyelesaian segala masalah hidup, membuka pintu kasih sayang hati yang tertutup, membuka minda dan pemikiran yang buntu dan tertutup dan membuka setiap sesuatu yang tertutup yang diperlukan oleh manusia. Dia juga mampu membuka jalan ke arahNya dan mendekatkan manusia denganNya dengan membuka pintu hati dan akal.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">19</td>
    <td class="tg-0lax">اَلْعَلِيْمُ</td>
    <td class="tg-0lax">Al-‘Alīm</td>
    <td class="tg-0lax">Yang Maha Mengetahui</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Alim mengetahui setiap sesuatu yang berlaku. Dia mengetahui perkara-perkara
yang ghaib yang di luar jangkauan manusia dan Dia mengetahui apa yang akan berlaku. Tiada sehelai daun pun yang gugur tanpa pengetahuanNya. Ilmu Allah Ya Alim sangat hebat. Kehebatan ilmuNya terserlah dalam kesempurnaan penciptaan makhlukNya. Ya Alim memberikan ilmuNya kepada sesiapa yang dikehendakiNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">20</td>
    <td class="tg-0lax">الْقَابِضُ</td>
    <td class="tg-0lax">Al-Qābiḍ</td>
    <td class="tg-0lax">Yang Maha Menyempitkan / Mengekang</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Qobid mampu menggenggam, menyempitkan, menghalang. Dia mampu menyempitkan rezeki seseorang sekiranya Dia merasakan perlu sebagai peringatan dan hukuman kepada hambaNya. Dia juga mampu menghalang atau menangguhkan seseorang daripada mendapat sesuatu seperti jawatan, harta, kasih sayang dan sebagainya. Tetapi setiap ketentuan Allah Ya Qobid mempunyai kebaikan yang seringkali tidak mampu difikirkan oleh manusia.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">21</td>
    <td class="tg-0lax">الْبَاسِطُ</td>
    <td class="tg-0lax">Al-Bāsiṭ</td>
    <td class="tg-0lax">Yang Maha Meluaskan / Melapangkan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Basit mampu melapangkan rezeki seseorang setelah disempitkanNya. Allah melapangkan rezeki seseorang mengikut keperluannya dan kesesuaiannya. Disebalik kelapangan itu tersirat ujian daripada Allah. Setiap kelapangan harus diiringi dengan syukur, digunakan sebagai alat untuk mendekatkan diri kepadaNya dan juga untuk membantu orang lain.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">22</td>
    <td class="tg-0lax">الْخَافِضُ</td>
    <td class="tg-0lax">Al-Khāfiḍ</td>
    <td class="tg-0lax">Yang Maha Merendahkan / Menjatuhkan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Khāfiḍ berhak merendahkan atau menghinakan makhlukNya sekiranya Dia merasakan perlu bagi memberi peringatan kepada hambaNya yang lalai. Allah juga mampu menghinakan tempat kembali mereka di akhirat di neraka disebabkan dosa-dosa mereka.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">23</td>
    <td class="tg-0lax">الرَّافِعُ</td>
    <td class="tg-0lax">Al-Rāfi’</td>
    <td class="tg-0lax">Yang Maha Meninggikan / Mengangkat</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Rafi' mampu meninggikan seseorang mengikut pilihanNya. Dia mampu meninggikan seseorang samada semasa hidup atau selepas mati. Perjuangan manusia semasa hidup akan dinikmati oleh generasi akan datang dan kemaksiatan akan menghinakan generasi akan datang.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">24</td>
    <td class="tg-0lax">الْمُعِزُّ</td>
    <td class="tg-0lax">Al-Mu’izz</td>
    <td class="tg-0lax">Yang Maha Memuliakan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Kemuliaan itu milik Allah Ya Mu'izz dan Dia memberinya kepada sesiapa yang Dia kehendaki, dan Dia memberi kepada utusanNya dan orang-orang yang beriman. Allah boleh menarik balik kemuliaan itu dengan menghinakan. Orang-orang yang menjadi hamba dunia, pangkat dan wang tidak akan mendapat kemuliaan dari Ya Mu'izz.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">25</td>
    <td class="tg-0lax">المُذِلُّ</td>
    <td class="tg-0lax">Al-Mudhill</td>
    <td class="tg-0lax">Yang Maha Menghinakan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah ya Mudhill berhak dan berkuasa menghinakan seseorang dan tiada siapa yang terlepas daripadaNya. Tiada siapa yang dapat memuliakan seseorang yang dihina Allah. Allah menghina manusia yang melampau batas, zalim, mementing diri sendiri dan sombong. Allah menghina manusia ketika mereka menjauhiNya, melakukan laranganNya dan tidak menghiraukan perintahNya dan ketika manusia lebih takut kepada manusia daripada murka Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">26</td>
    <td class="tg-0lax">السَّمِيعُ</td>
    <td class="tg-0lax">Al-Samī’</td>
    <td class="tg-0lax">Yang Maha Mendengar</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Sami' mendengar dan mengabulkan permintaan hamba-hambaNya, mendengar keluhan serta puji-pujian kepadaNya. Allah juga mendengar setiap rahsia yang disembunyi oleh hamba-hambaNya. Dia mendengar suara lidah dan suara hati dan menghitungnya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">27</td>
    <td class="tg-0lax">الْبَصِيرُ</td>
    <td class="tg-0lax">Al-Baṣīr</td>
    <td class="tg-0lax">Yang Maha Melihat</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Basir Maha Melihat. Dia melihat setiap perbuatan manusia dan menghitung setiap perbuatan tersebut. Tiada sesuatupun yang boleh terlepas daripada pandangan dan perhatian Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">28</td>
    <td class="tg-0lax">الْحَكَمُ</td>
    <td class="tg-0lax">Al-Ḥakam</td>
    <td class="tg-0lax">Yang Maha Memberi Hukuman</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Hakam mempunyai ketetapan hukum terhadap manusia. Allah menetapkan hukum untuk kebaikan manusia dan agar manusia mengikut jalan yang benar. Tiada siapa yang boleh menghalang dan mengingkari hukuman Allah. Manusia harus menerima apa sahaja hukum Allah sebagai anugerah dan nikmat, bukan bencana.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">29</td>
    <td class="tg-0lax">الْعَدْلُ</td>
    <td class="tg-0lax">Al-‘Adl</td>
    <td class="tg-0lax">Yang Maha Adil</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya 'Adl bersifat Maha Adil kepada makhlqNya. Seseorang tidak akan dirugikan dan dibalasi mengikut apa yang dia kerjakan. Jalan keburukan yang dilalui oleh manusia akan dibalas dengan adil oleh Allah Ya Adl. Manusia harus menerima pengadilan Allah dengan penuh rasa nikmat kerana kasih sayangNya menyelamatkan kita daripada bencana. Seringkali apa yang disukai Allah tidak disukai manusia dan apa yang dibenci Allah disukai manusia. Oleh itu sentiasa ingat bahawa setiap pengadilan Allah itulah yang paling adil dan baik untuk manusia dan terimalah dengan redha.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">30</td>
    <td class="tg-0lax">اللَّطِيفُ</td>
    <td class="tg-0lax">Al-Laṭīf</td>
    <td class="tg-0lax">Yang Maha Lembut</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Maha Lembut membawa erti hasil ciptaanNya maha halus. Setiap takdir ke atas manusia penuh kebaikan dan hikmah dan Allah melihat sesuatu dengan penuh lembut dan halus. Allah Ya Latif juga melayan hamba-hambaNya dengan penuh kelembutan dan kasih sayang. Kelembutannya dapat dirasai ketika dimaafkan segala kesalahan kita ketika kita memohon ampun, dimakbulkan segala keperluan ketika kita memohon, diselamatkan dari bala bencana ketika kita memohon perlindungan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">31</td>
    <td class="tg-0lax">الْخَبِيرُ</td>
    <td class="tg-0lax">Al-Khabīr</td>
    <td class="tg-0lax">Yang Maha Waspada</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Khobiir Yang Maha Waspada sentiasa benrwaspada terhadap tingkahlaku manusia. Sekiranya manusia terseleweng, maka akan diperbetulkan ke jalan yang benar.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">32</td>
    <td class="tg-0lax">الْحَلِيمُ</td>
    <td class="tg-0lax">Al-Ḥalīm</td>
    <td class="tg-0lax">Yang Maha Penyantun</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Halim Yang Maha Penyantun sentiasa bersifat santun kepada hamba-hambaNya walaupun mereka tidak santun kepadaNya. Dia santun dalam memberikan nasihat dan teguran, santun dalam layanan, santun dalam perkataan, santun dalam tindakbalas kasar hambaNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">33</td>
    <td class="tg-0lax">الْعَظِيمُ</td>
    <td class="tg-0lax">Al-‘Aẓīm</td>
    <td class="tg-0lax">Yang Maha Agung</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya 'Aẓīm Yang Maha Agong memiliki seluruh isi langit dan bumi. KeagunganNya mengatasi keagungan manusia kerana manusia hanyalah hamba yang menggunakan pinjaman dan amanah Allah secara sementara. Allahlah pemilik yang mutlak dan dia mampu berbuat apa sahaja kepada sesiapa sahaja tanpa keizinan hamba-hambaNya. Dia mengurus, mengatur dan mengawal setiap makhlukNya tanpa bantuan dan begitu sempurna tanpa cacat cela.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">34</td>
    <td class="tg-0lax">الْغَفُورُ</td>
    <td class="tg-0lax">Al-Ghafūr</td>
    <td class="tg-0lax">Yang Maha Pengampun</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Ghafūr Yang Maha Pengampun mengampun dosa hambaNya tidak kira sebesar mana dosa tersebut (selain dosa syirik). Allah Ya Ghofuur Yang Maha Pengampun mengampuni hambaNya walaupun dosa hambaNya sebanyak buih di lautan. Setiap kali hambaNya melakukan dosa dan kemudian memohon ampun kepada Allah Ya Ghofuur, pasti Dia akan mengampunkan dosa mereka. Seorang hamba semestinya lah sentiasa memohon keampunan daripada Allah Ya Ghofuur kerana tanpa keampunanNya pastilah seseorang itu akan menerima azab api nerakaNya di akhirat kelak.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">35</td>
    <td class="tg-0lax">الشَّكُورُ</td>
    <td class="tg-0lax">Al-Syakūr</td>
    <td class="tg-0lax">Yang Maha Mensyukuri</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Syakuur Yang Maha Mensyukuri dan Menghargai sentiasa menghargai hamba-hambaNya yang mentaatinya dan mengikut perintahNya serta melakukan kebaikan dan amal soleh. Dia Ya Syakuur akan sentiasa menunjukkan penghargaanNya dengan mengalirkan kasih sayangNya, mengalirkan rezeki dan kekayaanNya, memberikan perlindunganNya dan memberikan balasan syurga di akhirat kelak.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">36</td>
    <td class="tg-0lax">الْعَلِيُّ</td>
    <td class="tg-0lax">Al-‘Alīy</td>
    <td class="tg-0lax"><p>Yang Maha Tinggi</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Aliy Yang Maha Tinggi mempunyai kedudukan yang lebih tinggi daripada yang ditakluki dan dikalahkan, sekali gus menakluki makhlukNya. Kedudukan Allah Ya Aliy mencapai puncak tertinggi di tempat yang tinggi. Dia Maha Tinggi disebabkan Zat dan sifat-sifatNya, lebih daripada gambaran makhlukNya. Dia Ya Aliy menganugerahkan darjat ketinggian kepada hamba-hamba pilihanNya seperti para nabi dan rasul.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">37</td>
    <td class="tg-0lax">الْكَبِيرُ</td>
    <td class="tg-0lax">Al-Kabīr</td>
    <td class="tg-0lax"><p>Yang Maha Besar</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Kabir Yang Maha Besar merupakan ungkapan kesempurnaan zat. KebesaranNya menyebabkan Dia tidak memerlukan kepada sesiapapun, malah semua makhlukNya memerlukan kepadaNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">38</td>
    <td class="tg-0lax">الْحَفِيظُ</td>
    <td class="tg-0lax">Al-Ḥafīẓ</td>
    <td class="tg-0lax"><p>Maha Penjaga</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Hafiz Yang Maha Memelihara dan Menjaga seluruh ciptaanNya. Tidak ada satu pun yang terlepas daripada jagaanNya. Dia memelihara langit dan bumi dan setiap apa yang ada di antara keduanya. Manusia dijaga oleh Malaikat atas perintah Allah. Diantara pemeliharaan Allah ke atas manusia adalah dikurniakan kesihatan yang baik. Walaupun begitu melalui kesakitan, Allah Ya Hafiz memelihara jiwa kita agar sentiasa ingat kepadaNya dan ketika sakit manusia mampu merenungi apa yang berlaku di sekelilingnya terutama berinteraksi dengan Tuhan yang selama ini dilupakannya. Ujian kesusahan dan kesakitan adalah cara Allah menyelamatkan hambaNya dari azab api neraka. Allah Ya Hafiz juga mampu melindungi kita daripada bisikan hawa nafsu dan syaitan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">39</td>
    <td class="tg-0lax">المُقيِت</td>
    <td class="tg-0lax">Al-Muqīt</td>
    <td class="tg-0lax"><p>Yang Maha Memberi Kekuatan dan Kecukupan</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muqit Yang Maha Memberi Kekuatan dan Kecukupan. Allah Ya Muqit mencukupkan keperluan manusia, berkuasa ke atas manusia serta mampu menggenggam manusia mengikut kehendakNya. Allah Ya Muqit juga mencukupkan rasa kebahagiaan dan kepuasan kepada hamba-hambaNya hasil daripada amalan dan ketaatan hamba itu kepada Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">40</td>
    <td class="tg-0lax">الْحسِيبُ</td>
    <td class="tg-0lax">Al-Ḥasīb</td>
    <td class="tg-0lax"><p>Maha Pembuat Perhitungan</p></td></tr>
<tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Hasib Yang Maha Menghisab, Menghitung atau Maha Mencukupi. Allah Ya Hasib mencukupkan segala keperluan makhlukNya tidak lebih dan tidak kurang, semuanya telah ditetap dan diatur oleh Allah. Apabila Allah Ya Hasib mencukupkan anugerah dan keperluan seseorang, tiada siapapun yang boleh mengurangkannya. Allah Ya Hasib juga menghitung setiap perbuatan manusia walau sebesar biji zarah sekalipun dan setiap kebaikan itu akan dibalas dengan adil, begitu juga dengan keburukan dan kejahatan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">41</td>
    <td class="tg-0lax">الْجَلِيلُ</td>
    <td class="tg-0lax">Al-Jalīl</td>
    <td class="tg-0lax"><p>Yang Maha Mempunyai Keagungan dan Kesempurnaan</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Jalil Yang Maha Mempunyai Keagungan dan Kesempurnaan, maha kaya, maha suci, maha luas dan semuanya. Apabila sifat Al-Jalil mampu dilihat dengan mata hari akan nampaklah kecantikan dan keindahan Allah. Ia akan melahirkan suasana kekaguman yang luar biasa, akan membangkitkan kehairanan, ketakjuban dan penghargaan yang tak terhingga sehingga tidak mampu digambarkan dengan kata—kata.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">42</td>
    <td class="tg-0lax">الْكَرِيمُ</td>
    <td class="tg-0lax">Al-Karīm</td>
    <td class="tg-0lax"><p>Yang Maha Pemurah</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Karim Yang Maha Mulia, Maha Pemurah, Maha Dermawan dan memberi tanpa hitungan, tak pernah menghalang siapapun untuk datang kepadaNya dan gembira memberi anugerah kepada makhlukNya. Kemuliaan Allah Ya Karim juga digambarkan ketika Allah memberi pendidikan, pemeliharaan dan pembaikan kepada makhlukNya. Allah Ya Karim tak pernah memutuskan harapan hambaNya yang meminta kepadaNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">43</td>
    <td class="tg-0lax">الرَّقِيبُ</td>
    <td class="tg-0lax">Al-Raqīb</td>
    <td class="tg-0lax">Yang Maha Mengawasi</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Roqib yang Maha Mengawasi sentiasa mengawasi hambaNya. Dia Ya Roqib mengawasi daripada bisikan syaitan dan nafsu, daripada kejahatan dan dosa, penyelewengan. Apabila Dia mendapati hambaNya terleka dan tersasar, Dia akan menegur dengan memberi sedikit ujian dan musibah sebagai peringatan. Ketika hamba sedang diuji, pada hakikatnya Allah Ya Roqib mengawasi kerana sayang kepada hambaNYa. Ibubapa boleh memohon Allah Ya Roqib untuk mengawasi anak—anaknya daripada kejahatan dan dosa apabila sudah tiada daya upaya dan keadaan yang begitu mencabar.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">44</td>
    <td class="tg-0lax">الْمُجِيبُ</td>
    <td class="tg-0lax">Al-Mujīb</td>
    <td class="tg-0lax">Yang Maha Mengabulkan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Mujib Yang Maha Mengabulkan pasti menjawab dan memberi response kepada setiap keluhan, permohonan dan rayuan hambaNya. Allah memberi masalah dan ujian hanya semata-mata untuk menguji tahap keimanan dan keyakinan hambaNya. Ya Mujib berhak mempercepat atau melambatkan pengabulan hajat hambaNya kerana kebijaksanaanNya dalam menentukan samada hajat itu membawa manafaat atau mudarat. Doa hajat hendaklah dipohon dengan penuh yakin dan sedar. Allah Ya Mujib tidak pernah jemu dengan keluhan dan permintaan hamba-hambaNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">45</td>
    <td class="tg-0lax">الْوَاسِعُ</td>
    <td class="tg-0lax">Al-Wāsi’</td>
    <td class="tg-0lax">Yang Maha Luas</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Wasi' Yang Maha Luas pemberian dan nikmatNya yang tidak dapat dihitung dan diperincikan. Allah Ya Wasi' juga Maha Luas ilmuNya, Maha Luas kekuasaanNya, Luas petunjuk dan bimbinganNya, Luas rezekiNya, Luas keampunanNya dan ganjaranNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">46</td>
    <td class="tg-0lax">الْحَكِيمُ</td>
    <td class="tg-0lax">Al-Ḥakīm</td>
    <td class="tg-0lax">Yang Maha Bijaksana</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Hakim Yang Maha Bijaksana, kebijaksanaanNya tidak mampu difikirkan dan difahami oleh sesiapa kecuali Nabi Muhammad s.a.w. Dia bertindak penuh hikmah bagi menampakkan kekuasaanNya. KebijaksanaanNya tidak mampu dilihat dengan pandangan zahir, bahkan hanya dengan pandangan mata hati. Semua tindakan Allah penuh dengan kebijaksanaan. Penciptaan alam ini juga melambangkan kebijaksanaan Allah Ya Hakim yang mana semuanya berlaku penuh harmoni dan saling berkait.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">47</td>
    <td class="tg-0lax">الْوَدُودُ</td>
    <td class="tg-0lax">Al-Wadūd</td>
    <td class="tg-0lax">Yang Maha Menyintai</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Wadud Yang Maha Pencinta mencintai makhlukNya dengan kecintaan yang suci, abadi dan luar biasa. Cinta adalah ciptaan pertama yang dicipta yang melahirkan kekuatan kreativiti dan kehidupan yang sangat indah di dunia ini. Dia Ya Wadud mengalirkan rasa cinta ke dalam jiwa hamba-hambaNya agar mencintaiNya dan sesama makhluk.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">48</td>
    <td class="tg-0lax">الْمَجِيدُ</td>
    <td class="tg-0lax">Al-Majīd</td>
    <td class="tg-0lax">Yang Maha Mulia</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Majid Yang Maha Mulia memuliakan hamba pilihanNya sehingga Dia mampu mengkayakan seorang hamba tanpa harta, dicukupkan segala keperluan tanpa usaha dan dimuliakan tanpa susah payah. Begitu juga sebaliknya Dia mampu menimpakan musibah secara mendadak. Disebabkan kemuliaan itu hak Allah Ya Majid, manusia tidak boleh berbangga apabila dipuji kerana segala sifat baik dan terpuji itu adalah sifat Allah Ya Majid.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">49</td>
    <td class="tg-0lax">الْبَاعِثُ</td>
    <td class="tg-0lax">Al-Bā’ith</td>
    <td class="tg-0lax">Yang Maha Membangkitkan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Baa'ith yang Maha Membangkitkan. Dia membangkitkan manusia selepas kematian, membangkitkan selepas tidur, membangkitkan lintasan hati untuk kebaikan dan keburukan. Allah Ya Ba'ith mampu membangkitkan ketenangan jiwa kepada hamba pilihanNya sehingga lahir keilkhlasan, rela, redha dan mahu menurut apa sahaja kehendakNya. Keikhlasan adalah kunci utama bagi mendekatkan diri pada Allah dan mendapatkan cahaya dariNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">50</td>
    <td class="tg-0lax">الشَّهِيدُ</td>
    <td class="tg-0lax">Al-Syahīd</td>
    <td class="tg-0lax">Yang Maha Menyaksikan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Syahid Yang Maha Menyaksikan yang membawa erti Allah wujud, hadir, melihat dan menyaksikan setiap perbuatan manusia dan apa sahaja yang berlaku di alam semesta. Allah Ya Syahid menjadikan anggota manusia berkata-kata sebagai saksi perbuatan manusia di dunia. Allah menyaksikan apa yang dizahirkan
oleh manusia dan apa yang disembunyikan di dalam hati.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">51</td>
    <td class="tg-0lax">الْحَقُّ</td>
    <td class="tg-0lax">Al-Ḥaqq</td>
    <td class="tg-0lax">Yang Maha Benar</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Haq Yang Maha Benar adalah sumber kebenaran. KalimahNya benar, janjiNya benar, balasan dan azabNya benar, akhiratNya benar, cinta dan kasih sayangNya benar dan apa yang dibawa oleh Nabi dan rasulNya benar. Oleh itu hendaklah kita bersandarkan dan bersumberkan daripada kebenaran Allah Ya Haq dalam setiap kata-kata, perbuatan, ibadah, hukuman dan seluruh tindakan kita di dunia ini.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">52</td>
    <td class="tg-0lax">الْوَكِيلُ</td>
    <td class="tg-0lax">Al-Wakīl</td>
    <td class="tg-0lax">Maha Pemegang Amanah</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Wakil Yang Maha Menguruskan Amanah melaksanakan urusan pentadbiran di dunia ini dengan penuh kesempurnaan. Sebagai seorang hamba yang tidak berdaya, seharusnya kita menyerahkan segala urusan kita
kepada Allah Ya Wakil. Dia Ya Wakil pasti menjadi wakil yang amanah dan sempurna dalam menguruskan urusan hambaNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">53</td>
    <td class="tg-0lax">الْقَوِيُّ</td>
    <td class="tg-0lax">Al-Qawīy</td>
    <td class="tg-0lax">Yang Maha Kuat</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Qowiy yang Maha Kuat mempunyai kekuatan yang maha hebat yang tiada siapa mempunyai kekuatan sepertiNya. Dia Ya Qowiy mampu menggerakkan bulan, matahari, bumi dan bintang. KekuatanNya mampu menenggalamkan bumi dan manusia. KekuatanNya juga mampu mengalahkan seluruh musuh walaupun seluruh manusia dan jin berkumpul untuk mengalahkanNya sudah pasti tidak akan mampu. Kekuatan yang ada pada manusia merupakan kekuatan Allah Ya Qowiy dan bukanlah kekuatan manusia sesungguhnya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">54</td>
    <td class="tg-0lax">الْمَتِينُ</td>
    <td class="tg-0lax">Al-Matīn</td>
    <td class="tg-0lax">Yang Maha Teguh</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Matin Yang Maha Teguh, seluruh keteguhan yang ada di dunia ini adalah keteguhan Allah. KeteguhanNya lah yang menjadikan gunung-gunung teguh menjadi pasak bumi, kedudukan bulan, bintang dan matahari sangat teguh, tidak bergoyang sedikitpun dalam peredarannya. Keteguhan yang ada dalam setiap ciptaanNya merupakan keteguhan Ya Matin. Begitu juga manusia yang teguh jiwa dan iman merupakan anugerah Allah Ya Matin yang menyebabkan manusia mampu menghadapi apa jua dugaan hidup dengan penuh keteguhan dan kesabaran.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">55</td>
    <td class="tg-0lax">الْوَلِيُّ</td>
    <td class="tg-0lax">Al-Walīy</td>
    <td class="tg-0lax">Yang Maha Melindungi</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Allah Ya Waliy Yang Maha Melindungi lagi Maha mengurus. Ya Waliy juga sentiasa menolong dan membantu hamba-hambaNya yang dalam kesusahan dan ketika mereka dalam kesesatan. Allah Ya Waliy membimbing dan memberi rasa tenteram dan memberikan kejayaan dalam urusan hamba-hambaNya di dunia dan akhirat. Bagi hamba yang menjadikan Allah sebagai walinya, Allah akan menjaga dan membantu orang itu daripada segala yang dihajatinya dan sentiasa berada dalam taufik dan hidayah Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">56</td>
    <td class="tg-0lax">الْحَمِيدُ</td>
    <td class="tg-0lax">Al-Ḥamīd</td>
    <td class="tg-0lax">Yang Maha Terpuji</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Hamid menciptakan sesuatu dengan baik dan Allah mempunyai sifat yang terpuji dan segala perbuatan terpuji itu adalah sifatNya. Dia Ya Hamid layak untuk menerima pujian kerana Dia yang mencipta dan menghidupkan, yang menganugerahkan keperluan hidup dan Dia yang memberi petunjuk sehingga manusia mencapai kebahagiaan dunia dan akhirat. Allah Ya Hamid layak mendapat pujian bukan hanya ketika menerima kesenangan tetapi juga ketika menerima kesempitan dan bencana kerana ianya merupakan proses pendidikan Allah kepada hamba-hambaNya. Seorang hamba hendaklah berbaik sangka dengan Allah walaupun apa pun yang dilakukan Allah kepadanya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">57</td>
    <td class="tg-0lax">الْمُحْصِي</td>
    <td class="tg-0lax">Al-Muḥsī</td>
    <td class="tg-0lax"><strong></strong>Yang Maha Menghitung</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muhsi Yang Maha Menghitung sentiasa menghitung amalan dan perbuatan hambaNya walaupun mungkin hambaNya lupa. Setiap perhitungan itu pasti akan dibalas diakhirat kelak kerana Allah itu hakim yang seadil-adilnya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">58</td>
    <td class="tg-0lax">الْمُبْدِئُ</td>
    <td class="tg-0lax">Al-Mubdi'</td>
    <td class="tg-0lax">Yang Maha Memulai</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Mubdi' Yang Maha Memulai, Dialah yang memulai menciptakan makhlukNya dan tidak ada yang mendahului Allah dalam penciptaanNya. KehebatanNya lah dalam penciptaan alam ini yang membolehkan Ya Mubdi', mencipta dan menguruskan makhlukNya tanpa bantuan dan Dia yang memulai setiap apa yang ada di dunia ini.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">59</td>
    <td class="tg-0lax">الْمُعِيدُ</td>
    <td class="tg-0lax">Al-Mu’īd</td>
    <td class="tg-0lax">Yang Maha Mengembalikan / Memulihkan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Mu'id Yang Maha Mengembalikan mengembalikan manusia kepadaNya di hari akhirat untuk dihisab dan diadili akan setiap perbuatan mereka di atas dunia ini. Dia Ya Mu'id juga mampu mengembalikan hamba-hamba pilihanNya kepada fitrah yang asal sehingga mereka ini mampu hidup sebagai hamba kepada Allah s.w.t dan pengikut Rasulullah s.a.w.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">60</td>
    <td class="tg-0lax">الْمُحْيِي</td>
    <td class="tg-0lax">Al-Muḥyī</td>
    <td class="tg-0lax">Yang Maha Menghidupkan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah ya Muhyi Yang Maha Menghidupkan mampu menghidupkan sesuatu yang telah mati samada tanah yang mati, manusia, termasuk jiwa. Jiwa yang dihidupkan oleh Allah Ya Muhyi akan subur dan mampu mengenal Allah sehingga mampu sentiasa melakukan ketaatan dan kebaikan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">61</td>
    <td class="tg-0lax">اَلْمُمِيتُ</td>
    <td class="tg-0lax">Al-Mumīt</td>
    <td class="tg-0lax">Yang Maha Mematikan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Mumit Yang Maha Mematikan, Dia memegang nyata makhlukNya dan mampu mematikan pada bila-bila masa, di mana jua tanpa ada yang mampu menahanNya. Begitu juga sekiranya Dia Ya Mumit ingin menahan kematian seseorang, maka tiada siapa yang mampu mematikannya. Orang yang dekat dengan Allah tidak takut mati kerana kematian merupakan jalan untuk berjumpa Allah Ya Wadud yang dirindui.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">62</td>
    <td class="tg-0lax">الْحَيُّ</td>
    <td class="tg-0lax">Al-Ḥayy</td>
    <td class="tg-0lax">Yang Maha Hidup</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah hidupNya kekal, tidak pernah musnah dan tidak terikat oleh sebarang syarat dan keadaan. Dia yang memberi kehidupan kepada makhluk. Dia terus hidup, tidak pernah tidur atau mengantuk atau letih.</td>
  </tr><tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">63</td>
    <td class="tg-0lax">الْقَيُّومُ</td>
    <td class="tg-0lax">Al-Qayyūm</td>
    <td class="tg-0lax">Yang Maha Berdiri Dgn Sendiri</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Qayyum berdiri sendiri lagi maha tegak. Dia mengatur segala sesuatu yang menjadi keperluan makhlukNya secara sempurna, terus menerus tanpa bantuan sesiapa. Dia tidak memerlukan ketaatan hambaNya mahupun tidak berkurang kekuasaan dan kemuliaanNya sekiranya semua makhlukNya menjauhkan diri dariNya.</td>
  </tr><tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">64</td>
    <td class="tg-0lax">الْوَاجِدُ</td>
    <td class="tg-0lax">Al-Wājid</td>
    <td class="tg-0lax">Yang Maha Menemukan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Waajid Yang Maha Menemukan. Dia yang menemukan jalan keluar kepada hamba-hambaNya yang dalam kesusahan dan Dia juga menemukan jalan menuju kepadaNya. Allah Ya Waajid telah memberikan sepenuh potensi kepada manusia untuk menjadi khalifah di bumi ini, tetapi seringkali potensi itu tertutup seperti awan menutup gunung yang indah, manusia akan menemui potensi diri itu apabila mampu menyingkap tabir itu dengan membersihkan diri dari dosa-dosa dan mendekatkan diri kepada Allah Ya Waajid.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">65</td>
    <td class="tg-0lax">الْمَاجِدُ</td>
    <td class="tg-0lax">Al-Mājid</td>
    <td class="tg-0lax">Yang Maha Luas Kemuliaan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Maajid Yang Maha Mulia, dan Dialah yang menunjukkan kebaikan dan kemuliaan yang tidak terhingga kepada makhlukNya. Dengan kebaikan dan kemuliaan Allah Ya Maajid seseorang hambaNya mampu berbuat kebaikan dan dipandang mulia oleh Allah walaupun dia mendapat penghinaan manusia. Kemuliaan Allah Ya Maajid mampu melahirkan keyakinan yang luar biasa yang akan melahirkan kekuatan luar biasa pada otak dan tindakan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">66</td>
    <td class="tg-0lax">الْواحِدُ</td>
    <td class="tg-0lax">Al-Wāḥid</td>
    <td class="tg-0lax">Yang Maha Esa</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Waahid Yang Maha Esa tuhan yang satu. Tidak ada yang berhak disembah melainkanNya. Dia adalah permulaan segala sesuatu dan sumber kewujudan semua makhluk.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">67</td>
    <td class="tg-0lax">اَلاَحَدُ</td>
    <td class="tg-0lax">Al-Aḥad</td>
    <td class="tg-0lax">Yang Maha Tunggal</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Ahad Yang Maha Tunggal dzatNya, tidak ada yang menyerupai dan dan menyamaiNya. Allah unik. Dia Maha Tunggal pada sifat-sifatNya, tidak ada yang seumpama denganNya. Tiada sekutu bagiNya dan Dia tidak bergantung kepada siapa pun. Dia menyendiri dengan segala kesempurnaan, keagungan, kebesaran, keindahan, pujian, hikmah, rahmah dan selainnya dari sifat-sifat kesempurnaan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">68</td>
    <td class="tg-0lax">الصَّمَدُ</td>
    <td class="tg-0lax">Al-Ṣamad</td>
    <td class="tg-0lax">Yang Maha Diperlukan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Somad Yang Maha diperlukan, Dia diperlukan oleh setiap makhlukNya dan padanya kesudahan segala kekuasaan dan kemuliaan. Allah Ya Somad mengetahui setiap keperluan hamba-hambaNya dan memenuhi keperluan itu mengikut kehendakNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">69</td>
    <td class="tg-0lax">الْقَادِرُ</td>
    <td class="tg-0lax">Al-Qādir</td>
    <td class="tg-0lax">Yang Maha Berupaya</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Ya Qadir Yang Maha Berupaya, Dia berupaya melakukan apa sahaja yang dikehendakiNya apabila Dia menghendakinya. Kekuasaan Allah Ya Qadir tercermin dalam penciptaan alam semesta.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">70</td>
    <td class="tg-0lax">الْمُقْتَدِرُ</td>
    <td class="tg-0lax">Al-Muqtadir</td>
    <td class="tg-0lax">Yang Maha Menentukan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muqtadir Yang Maha Menentukan menentukan segala sesuatu dan Dia memegang kekuasaan mutlak. Tidak ada sesiapa yang dapat menghalang kehendak dan ketentuanNya. Dengan kekuatan Allahlah berlaku sesuatu kehendakNya melalui makhlukNya, tanpa kekuatanNya, makhlukNya tidak mampu melakukan apa-apa pun.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">71</td>
    <td class="tg-0lax">الْمُقَدِّمُ</td>
    <td class="tg-0lax">Al-Muqaddim</td>
    <td class="tg-0lax"><p>Yang Maha Mendahulukan</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muqaddim Yang Maha Mendahulukan mempunyai kuasa mutlak mendahulukan sesuatu mengikut kehendakNya. Dia mampu menyegerakan sesuatu perkara mengikut kehendakNya semahuNya. Seringkali Allah Ya Muqaddim mendahulukan kegagalan dan kesulitan sebelum diberiNya kejayaan yang lebih besar. Ternyata kesulitan itu adalah kejayaan dan keuntungan yang tiada taranya. Dengan kesulitan, akal akan berfikir mencari jalan keluar. Sesungguhnya ukuran kemajuan yang sebenarnya adalah darjat kedekatan seseorang pada Allah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">72</td>
    <td class="tg-0lax">الْمُؤَخِّرُ</td>
    <td class="tg-0lax">Al-Mu’akhkhir</td>
    <td class="tg-0lax">Yang Maha Mengakhirkan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muakhkhir Yang Maha Mengakhirkan mampu mengakhirkan atau melambatkan sesuatu permintaan hambaNya. Dia memberi pada masa yang paling sesuai dan tepat untuk hambaNya dan keputusanNya penuh dengan kasih sayang dan kebijaksanaan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">73</td>
    <td class="tg-0lax">الأوَّلُ</td>
    <td class="tg-0lax">Al-Awwal</td>
    <td class="tg-0lax">Yang Maha Awal</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Awwal telah sedia ada wujud dan kewujudanNya tiada permulaan. Tidak ada sesuatu pun yang mendahuluiNya. Dan kedahuluan Allah itu bersifat mutlak bukan kedahuluan yang relatif (nisbi). Segala sesuatu selain Allah adalah ciptaan Allah, semuanya baru ada setelah sebelumnya tiada.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">74</td>
    <td class="tg-0lax">الآخِرُ</td>
    <td class="tg-0lax">Al-Ākhir</td>
    <td class="tg-0lax">Yang Maha Akhir</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Akhir Yang Maha Akhir, ketika semua makhluk musnah, Dia tetap ada kekal abadi dan tiada pengakhirannya. Dia merupakan tujuan dan tempat bergantung yang seluruh makhluk menuju kepadaNya dengan ibadah, harapan, rasa takut dan seluruh keperluan mereka.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">75</td>
    <td class="tg-0lax">الظَّاهِرُ</td>
    <td class="tg-0lax">Al-Ẓāhir</td>
    <td class="tg-0lax">Yang Maha Nyata</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Zahir Yang Maha Nyata menegaskan kepada kita Dia nyata, dapat dilihat dan sesungguhnya hadir. Kehadiran Dia Ya Zohir kelihatan jelas pada setiap sesuatu yang dilihat. Disebalik keindahan dan keharmonian yang menakjubkan itu membuktikan adanya Allah Yang Maha Pencipta. Dia seperti cahaya yang membuat segalanya dapat dilihat, tetapi cahaya yang cukup hebat itu membuatnya tidak terlibat, tetapi Ya Zohir nyata dalam setiap sesuatu.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">76</td>
    <td class="tg-0lax">الْبَاطِنُ</td>
    <td class="tg-0lax">Al-Bāṭin</td>
    <td class="tg-0lax">Yang Maha Tersembunyi</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Batin yang Maha Ghaib sehingga kewujudanNya tidak mampu dilihat oleh fikiran manusia yang menjadi silau dan tumpul. Kita harus merenung sifat-sifat Allah dalam makhluk sekeliling kita tapi dilarang membayangkan DzatNya kerana ianya di luar kemampuan akal kita untuk memikirkan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">77</td>
    <td class="tg-0lax">الْوَالِي</td>
    <td class="tg-0lax">Al-Wālī</td>
    <td class="tg-0lax">Yang Maha Memerintah</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Waali Yang Maha Memerintah dan Maha Memberi, Dia memerintah dan mengawal alam semesta mengikut kehendakNya. Seluruh makhluk dikawal oleh ilmu dan kekuasaan Allah, dibawah kasih sayang, perlindungan dan belaianNya. Dia Ya Waali melindungi hamba-hambaNya daripada setiap bencana.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">78</td>
    <td class="tg-0lax">الْمُتَعَالِي</td>
    <td class="tg-0lax">Al-Muta’ālī</td>
    <td class="tg-0lax">Yang Maha Tinggi</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muta'ali Yang Maha Tinggi yang ketinggianNya tidak terbatas dan akal manusia tidak dapat membayangkannya. Dia yang paling tinggi DzatNya, martabatNya, kedudukanNya, kemuliaanNya, kekayaanNya, kasih sayangNya dll.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">79</td>
    <td class="tg-0lax">الْبَرُّ</td>
    <td class="tg-0lax">Al-Barr</td>
    <td class="tg-0lax"><p>Yang Maha Dermawan</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Barr Yang Maha Baik dan Dermawan menganugerahkan pelbagai jenis kebaikan kepada makhlkNya walaupun mereka derhaka dan tidak menyembahNya. KebaikanNya tergambar dalam sifat pemaafNya kepada hamba-hambaNya yang berdosa. Dia tidak terus menghukum, mereka diberi peluang untuk bertaubat dan diampunkan dosa-dosa itu.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">80</td>
    <td class="tg-0lax">التَّوَابُ</td>
    <td class="tg-0lax">Al-Tawwāb</td>
    <td class="tg-0lax"><p>Maha Penerima Taubat</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Tawwab Yang Maha Penerima Taubat memberi dan menerima taubat hambaNya tanda kehalusan dan kelembutanNya kepada hamba-hambaNya. Allah tidak melihat kepada kesalahan dan keburukan perbuatannya, tetapi hamba itu perlu menyesali semua perkara buruk yang dilakukan dengan azam tidak mahu mengulangi dan takut dengan dosa tersebut. Allah bukan hanya menerima taubat, setelah hambaNya disucikan dari dosa, dialirkanNya kasih sayangNya dan cintaNya Ya Rahman Ya Rahim Ya Wadud. Allah Ya Tawwab seringkali memberi taubat dengan memberi anugerah musibah kepada hamba-hamba yang lupa memohon taubat, tetapi hukuman itu cukup ringan berbanding dengan Azab di akhirat kelak. Oleh itu hendaklah seseorang itu syukur dalam musibah.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">81</td>
    <td class="tg-0lax">الْمُنْتَقِمُ</td>
    <td class="tg-0lax">Al-Muntaqim</td>
    <td class="tg-0lax">Maha Penyiksa</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muntaqim Yang Maha Penyiksa hanya menyiksa hamba-hambaNya yang sudah keterlaluan membuat kerosakan dan kezaliman di bumi ini serta menyengutukan Allah. Namun begitu, sebelum turun azab, Allah akan beri peringatan demi peringatan agar mereka bertaubat demi kasih sayang dan rahmatNya. Tetapi ketika mereka berterusan melakukan dosa dan tidak menghiraukan peringatan Allah dan merasa gembira dengan kejahatan itu, maka akan turunlah azab Ya Muntaqim. Bagi sesiapa yang memohon ampun segera setelah menyedari kesilapan, seringkali Allah mengampuninya tanpa menghukumnya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">82</td>
    <td class="tg-0lax">العَفُوُّ</td>
    <td class="tg-0lax">Al-‘Afūw</td>
    <td class="tg-0lax">Yang Maha Pemaaf</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya ‘Afūw Yang Maha Pemaaf menghapuskan dan memadam dosa sama sekali. Allah suka memaaf dan menghapuskan dosa. Dia tidak menghukum segera hamba-hambaNya yang melakukan dosa agar mereka bertaubat dan memohon maaf kepada Allah. Walaupun neraka itu wujud, tetapi jalan untuk menyelamatkan diri terlalu banyak.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">83</td>
    <td class="tg-0lax">الرَّؤُوفُ</td>
    <td class="tg-0lax">Al-Ra’ūf</td>
    <td class="tg-0lax">Yang Maha Pengasih</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Rouf Yang Maha Pelimpah Kasih mencipta alam ini dengan penuh limpahan kasih sayang. KasihNya diberikan kepada seluruh makhluk walaupun makhluk itu tidak berterima kasih kepadaNya. Tetapi kasih sayangNya seringkali dalam bentuk ujian dan penderitaan bagi membersihkan hamba-hambaNya supaya mereka dapat menerima cahaya dan kasihNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">84</td>
    <td class="tg-0lax">مَالِكُ الْمُلْكِ</td>
    <td class="tg-0lax">Mālik-ul-Mulk</td>
    <td class="tg-0lax">Yang Maha Mempunyai Kerajaan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Maalikal Mulki Yang Maha Memiliki Kerajaan memiliki kerajaan alam semesta di langit dan di bumi, di dunia dan di akhirat. Dia tidak merasa berat menguruskan dan mentadbir dan tidak memerlukan bantuan. Allah adalah Raja yang sebenarnya dan Dia memerintah dengan penuh keadilan. Di dunia Dia Ya Malikal Mulki memilih hamba-hambaNya menjadi raja bagi pihakNya dan Allah mengambilnya kembali dengan menurunkan takhtanya bila tiba masanya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">85</td>
    <td class="tg-0lax">ذُوالْجَلاَلِ وَالإكْرَامِ</td>
    <td class="tg-0lax">Dhul-Jalāli-wal-Ikrām</td>
    <td class="tg-0lax">Yang Maha Memiliki Kebesaran Serta Kemuliaan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Dzal Jalaali Wal lkram Yang Maha Memiliki Kebesaran Dan Kemuliaan, semua kesempurnaan, kemuliaan dan rahmat datang dariNya. Dia mampu memberi dan mengambilnya kembali.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">86</td>
    <td class="tg-0lax">الْمُقْسِطُ</td>
    <td class="tg-0lax">Al-Muqsiṭ</td>
    <td class="tg-0lax">Yang Maha Adil</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Muqsit Yang Maha Adil mencipta dengan penuh keseimbangan dan mengkagumkan, harmoni dan seimbang penuh kesempurnaan. KeadilanNya memberikan kekayaan kepada sebahagian manusia dan kemiskinan kepada sebahagian yang lain, begitu juga memberi kelemahan kepada sebahagian yang lain dan kekuatan kepada yang lain. Dia memberi anugerahNya kepada setiap hambaNya dengan tepat. Allah Ya Muqsit juga membalas setiap amal kebaikan, budi pekerti yang mulia dengan ganjaran yg penuh adil dan setimpal.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">87</td>
    <td class="tg-0lax">الْجَامِعُ</td>
    <td class="tg-0lax">Al-Jāmi’</td>
    <td class="tg-0lax"><p>Maha Pengumpul</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Jami' Yang Maha Menghimpun akan menghimpunkan orang-orang yang telah mati dan dihidupkan kembali untuk dihitung oleh Allah Ya Muhsi, dihisab oleh Ya Hasib ,dibalas oleh Ya Muntaqim dan diadili oleh Ya Adl. Di hari penghimpunan, manusia akan sedar siapakah Allah sebenarnya yang mana di dunia ini mereka tidak takuti akan azabNya, tidak bersyukur akan nikmatNya. Di hari penghimpunan ini, manusia yang sentiasa ingat Allah akan mendapat perhatian istimewa dariNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">88</td>
    <td class="tg-0lax">الْغَنِيُّ</td>
    <td class="tg-0lax">Al-Ghanīy</td>
    <td class="tg-0lax"><p>Yang Maha Kaya</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Ghaniyy Yang Maha Kaya memiliki seluruh kekayaan langit dan bumi. Kekayaan yang ada pada orang kaya itu adalah kekayaan Allah. Dia mampu memberi kekayaan kepada sesiapa yang Dia kehendaki dan mengambil kembali kekayaan tersebut. Kekayaan Allah tidak mampu dilihat dengan mata kasar kerana yang nampak itu hanyalah terlalu sedikit dari kekayaanNya yang ada.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">89</td>
    <td class="tg-0lax">الْمُغْنِي</td>
    <td class="tg-0lax">Al-Mughnī</td>
    <td class="tg-0lax">Yang Maha Mengkayakan</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Mughni Yang Maha Pemberi Kekayaan suka memberi kekayaan kepada hamba-hambaNya. Kekayaan Allah bukan hanya dalam bentuk harta benda, tetapi juga Dia mampu memberi kekayaan jiwa sehingga sesiapa yang dikurniakan kekayaan jiwa, mereka akan menjadi seorang yang redha dan tenang dalam hidupnya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">90</td>
    <td class="tg-0lax">اَلْمَانِعُ</td>
    <td class="tg-0lax">Al-Māni’</td>
    <td class="tg-0lax">Yang Maha Mencegah</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Maani' yang maha mencegah sentiasa mencegah hamba-hamba pilihanNya daripada melakukan kemaksiatan kepadaNya. Allah Ya Maani' seringkali mencegah dengan cara memberi ujian kesusahan, kesempitan dan kesakitan ketika hambaNya lalai kepadaNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">91</td>
    <td class="tg-0lax">الضَّارَّ</td>
    <td class="tg-0lax">Al-Ḍārr</td>
    <td class="tg-0lax">Maha Pemberi Derita</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Dhoorru Yang Maha Pemberi Derita mampu memberi penderitaan kepada hamba-hambaNya bagi mengingatkan mereka tentang kesilapan yang dilakukan. Allah memberi hukuman kepada hambaNya yang memohon taubat kepadaNya sebagai pengajaran dan ia merupakan sebahagian dari proses penyucian dari dosa yang telah dilakukan. Allah Ya Dhooru bukan memberi penderitaan kerana benci kepada hamba-hambaNya, tetapi lebih kepada hukuman dan pelajaran kepada hambaNya agar mereka insaf dengan kesalahan yang dilakukan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">92</td>
    <td class="tg-0lax">النَّافِعُ</td>
    <td class="tg-0lax">Al-Nāfi’</td>
    <td class="tg-0lax">Maha Pemberi Manfaat</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Naafi' Yang Maha Pemberi Manfaat mampu memberikan manfaat kepada hamba-hambaNya. Setiap manfaat yang diterima oleh setiap manusia datangnya dari Allah Ya Naafii'. Dia mampu memberi manfaat dan mampu menarik kembali manfaat dengan memberikan mudarat.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">93</td>
    <td class="tg-0lax">النُّورُ</td>
    <td class="tg-0lax">Al-Nūr</td>
    <td class="tg-0lax">Maha Pemberi Cahaya</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Yaa Nuur Yang Maha Bercahaya mampu memberikan cahaya kepada jiwa manusia yang mana jiwa yang mendapat cahaya Allah akan pasti mendapat bimbingan dan cinta Allah. Allah juga memberikan cahayaNya kepada kehidupan di bumi dengan memancarkan cahaya An—NuurNya melalui matahari. Dialah sumber semua cahaya di seluruh alam semesta ini.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">94</td>
    <td class="tg-0lax">الْهَادِي</td>
    <td class="tg-0lax">Al-Hādī</td>
    <td class="tg-0lax">Maha Pemberi Petunjuk</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Haadi Yang Maha Memberi Petunjuk memberi petunjuk dan hidayah kepada hamba-hamba pilihanNya. Dia sahaja yang mampu memberi petunjuk, bimbingan dan hidayah kepada jalan yang lurus. Sekiranya Ya Haadi tidak memberikan hidayah, tiada siapa yang mampu memberinya, maka akan sesatlah seseorang yang tidak dibimbing Allah Ya Haadi.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">95</td>
    <td class="tg-0lax">الْبَدِيعُ</td>
    <td class="tg-0lax">Al-Badī’</td>
    <td class="tg-0lax"><p>Maha Pencipta</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Badi, yang maha pencipta keindahan mencipta alam ini penuh dengan keindahan dan kecantikan. Manusia harus merenungi keindahan ciptaan Allah dan memuja memuji Allah atas kehebatanNya.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">96</td>
    <td class="tg-0lax">اَلْبَاقِي</td>
    <td class="tg-0lax">Al-Bāqī</td>
    <td class="tg-0lax">Yang Maha Kekal</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Baaqi Yang Maha Kekal akan tetap kekal, tidak akan hancur dan musnah. Tetapi sebaliknya makhluk ciptaanNya akan pasti hancur dan musnah satu hari nanti dan bersifat sementara.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">97</td>
    <td class="tg-0lax">الْوَارِثُ</td>
    <td class="tg-0lax">Al-Wārith</td>
    <td class="tg-0lax">Yang Maha Mewarisi</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Waarith Maha Mewarisi segala apa yang ada di alam semesta ini kerana Dialah yang memiliki dan semuanya akan kembali kepadaNya. Dia Ya Waarith berhak mewariskan apa sahaja kepada siapa sahaja. Allah Ya Waarith mewariskan syurga kepada hambaNya yang bertaqwa dan sebaliknya Dia mewariskan hukuman kepada hambaNya yang melakukan kejahatan.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">98</td>
    <td class="tg-0lax">الرَّشِيدُ</td>
    <td class="tg-0lax">Al-Rashīd</td>
    <td class="tg-0lax">Yang Maha Bijaksana</td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Rashid Yang Maha Pintar, pandai dan cerdik dalam memberi petunjuk kepada hambaNya ke arah kebaikan dan dengan kepintaranNya Ya Rashid menyelesaikan segala permasalahan makhlukNya. Ya Rashid merupakan guru terhebat dan tertinggi yang mengajar kita menghadapi kehidupan ini mengikut kehendakNya dan seterusnya mencapai kebahagiaan dunia dan akhirat.</td></tr>
  <tr class="collapsible" title="Klik untuk baca huraian">
    <td class="tg-baqh">99</td>
    <td class="tg-0lax">الصَّبُورُ</td>
    <td class="tg-0lax">Al-Ṣabūr</td>
    <td class="tg-0lax"><p>Yang Maha Sabar</p></td>
  </tr>
  <tr class="tg-unxplain" style="display: none;"><td colspan="4">Allah Ya Sobur Maha Sabar dalam segala tindakanNya. Ya Sobur tidak bersifat tergesa-gesa dan terburu-buru dalam mengambil apa jua tindakan terhadap makhlukNya. Manusia yang melakukan dosa diberi peluang oleh Allah untuk insaf dan bertaubat, mereka tidak dihukum serta merta. Segala yang Allah Ya Sobur lakukan tepat pada waktunya dengan cara yang sebaiknya dan sepatutnya.</td></tr>
</tbody></table>
`;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  const $ = cheerio.load(html);

  const data = $('tr.collapsible')
    .map((i, el) => {
      const $el = $(el);
      const id = $el.find('td').eq(0).text().trim();
      const name_ar = $el.find('td').eq(1).text().trim();
      const name_tr = $el.find('td').eq(2).text().trim();
      const name_ms = $el.find('td').eq(3).text().trim();
      const desc_ms = $el.next().text().trim();

      const oldData = oldnames.find((o) => o.id === id);

      return {
        id,
        name_ar,
        name_tr,
        name_ms,
        name_en: oldData.english,
        desc_ms,
        desc_en: oldData.description,
      };
    })
    .get();

  return {
    body: data,
  };
}
