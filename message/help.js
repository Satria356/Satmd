const moment = require("moment-timezone");
const fs = require("fs");
const speed = require("performance-now");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

const timestamp = speed();
const latensi = speed() - timestamp

exports.allmenu = (ucapanWaktu, mundur, sender, prefix, jam, tanggal, runtime, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
    return`${ucapanWaktu} ${pushname} πͺ

Hitung Mundur Hari Raya Idul Fitri
${mundur.data.result}

π Creator : ${setting.ownerName}
π€ Bot Name : ${setting.botName}
π Prefix : β¨ ${prefix} β©
π Language : Javascript
ποΈ Lib : Baileys-Md
β Time : ${jam}
π Date : ${tanggal}
πΆ Speed : ${latensi.toFixed(4)}
β³ Runtime :
${runtime(process.uptime())}

*γ Info User γ*
> Name : ${pushname}
> Nomor : ${sender.split('@')[0]}
> Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
> Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
> Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
> Balance : $${toCommas(getBalance(sender, balance))}

*γ Main Menuπͺ γ*
β’ cekprefix
β’ ${prefix}menu
β’ ${prefix}donasi
β’ ${prefix}rules
β’ ${prefix}owner
β’ ${prefix}speed
β’ ${prefix}runtime
β’ ${prefix}cekpremium
β’ ${prefix}listpremium
β’ ${prefix}ahh
β’ ${prefix}simi
β’ ${prefix}cekapikey

*γ Store Menuπ€ γ*
β’ ${prefix}list
β’ ${prefix}addlist
β’ ${prefix}dellist
β’ ${prefix}update

*γ Tools Menuπ γ*
β’ ${prefix}attp
β’ ${prefix}sticker
β’ ${prefix}emror
β’ ${prefix}tovideo
β’ ${prefix}nulis

*γ Downloads Menuπ₯ γ*
β’ ${prefix}play <query>
β’ ${prefix}ytmp3 <linkyt>
β’ ${prefix}ytmp4 <linkyt>
β’ ${prefix}getmusic
β’ ${prefix}getvideo
β’ ${prefix}tiktok <linktt>
β’ ${prefix}instagram <linkig>
β’ ${prefix}facebook <linkfb>

*γ Search Menuβ»οΈ γ*
β’ ${prefix}ytsearch <query>
β’ ${prefix}lirik <judullagu>
β’ ${prefix}lirik2 <judullagu>
β’ ${prefix}groupwa <query>
β’ ${prefix}pinterest <query>
β’ ${prefix}wikipedia <query>
β’ ${prefix}nickff
β’ ${prefix}nickml
β’ ${prefix}nickpubg
β’ ${prefix}nickdomino
β’ ${prefix}nickcod
β’ ${prefix}nickaov
β’ ${prefix}nickpb

*γ Group MenuπΉ γ*
β’ ${prefix}welcome
β’ ${prefix}linkgc
β’ ${prefix}setppgc
β’ ${prefix}setnamegc
β’ ${prefix}setdesc
β’ ${prefix}group
β’ ${prefix}revoke
β’ ${prefix}hidetag
β’ ${prefix}add
β’ ${prefix}kick

*γ Fun Menuπͺ γ*
β’ ${prefix}suit
β’ ${prefix}slot
β’ ${prefix}tictactoe
β’ ${prefix}delttc
β’ ${prefix}tebakgambar
β’ ${prefix}apakah
β’ ${prefix}bisakah
β’ ${prefix}kapankah
β’ ${prefix}bagaimanakah
β’ ${prefix}rate
β’ ${prefix}gantengcek
β’ ${prefix}cantikcek
β’ ${prefix}sangecek
β’ ${prefix}gaycek
β’ ${prefix}lesbicek

*γ [Balance MenuπΈ] γ*
β’ ${prefix}limit
β’ ${prefix}balance
β’ ${prefix}transfer
β’ ${prefix}buylimit
β’ ${prefix}buyglimit
β’ ${prefix}topglobal
β’ ${prefix}toplocal

*γ Maker MenuβοΈοΈ γ*
β’ ${prefix}pornhub <text>
β’ ${prefix}grafity <text>
β’ ${prefix}grafity <text>
β’ ${prefix}logo-wolf <text>
β’ ${prefix}logo-wolf2 <text>
β’ ${prefix}black-pink <text>
β’ ${prefix}magma <text>
β’ ${prefix}neon-light <text>
β’ ${prefix}water-color <text>
β’ ${prefix}larva <text>

*γ Other Menuπ­ γ*
β’ ${prefix}ssweb <linkweb>
β’ ${prefix}kalkulator
β’ ${prefix}readmore <text>

*γ Owners Menuπ» γ*
β’ >
β’ x
β’ $
β’ ${prefix}join
β’ ${prefix}leave
β’ ${prefix}broadcast
β’ ${prefix}setpp
β’ ${prefix}exif
β’ ${prefix}addpremium
β’ ${prefix}delpremium

*γ Thanks Toπͺ γ*
β’ X-None Team
β’ Fadly ID
β’ And Me
β’ Rtwone
β’ Aqulzz
β’ Ramlan ID
β’ Penyedia Api & Module
β’ Adiwajshing/Baileys
β’ Note Jika ada fitur
  yg eror mohon maaf
`
}

exports.tos = (pushname, ownerNumber) => {
    return`\t\t\t\t*π°γ DONATE γπ°*

Hai ${pushname}πͺ
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
π§ 083811034750 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti πΉ

Arigatou!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}

exports.rules = (prefix) => {
    return`Syarat & Ketentuan *BOT*

β’ Bot *hanya menyimpan nomor anda* di dalam database sebagai nomor user
β’ Bot *tidak pernah meminta informasi pribadi* anda seperti alamat rumah, asal daerah, dan lain-lain
β’ Bot tidak menerima *Telpon / Video Call*
β’ Dilarang *copy tampilan* bot
β’ Dilarang melakukan *spam* terhadap bot
β’ Bot tidak menyimpan *data pribadi* anda
β’ Kami *tidak bertanggungjawab atas fitur apapun yang anda gunakan*
β’ Bot *tidak* menyimpan foto, video, atau media apapun yang anda kirimkan
β’ Apabila menemukan bug, error, atau request fitur harap hubungi developer bot
β’ Bot berhak *memblokir* atau *ban* terhadap user dengan alasan maupun tanpa alasan

_Regards : BOTWEA_`
}
