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
    return`${ucapanWaktu} ${pushname} 🪀

Hitung Mundur Hari Raya Idul Fitri
${mundur.data.result}

👑 Creator : ${setting.ownerName}
🤖 Bot Name : ${setting.botName}
📍 Prefix : ⟨ ${prefix} ⟩
🌎 Language : Javascript
🗄️ Lib : Baileys-Md
⌚ Time : ${jam}
📆 Date : ${tanggal}
📶 Speed : ${latensi.toFixed(4)}
⏳ Runtime :
${runtime(process.uptime())}

*「 Info User 」*
> Name : ${pushname}
> Nomor : ${sender.split('@')[0]}
> Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
> Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
> Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
> Balance : $${toCommas(getBalance(sender, balance))}

*「 Main Menu🪀 」*
• cekprefix
• ${prefix}menu
• ${prefix}donasi
• ${prefix}rules
• ${prefix}owner
• ${prefix}speed
• ${prefix}runtime
• ${prefix}cekpremium
• ${prefix}listpremium
• ${prefix}ahh
• ${prefix}simi
• ${prefix}cekapikey

*「 Store Menu🐤 」*
• ${prefix}list
• ${prefix}addlist
• ${prefix}dellist
• ${prefix}update

*「 Tools Menu📝 」*
• ${prefix}attp
• ${prefix}sticker
• ${prefix}emror
• ${prefix}tovideo
• ${prefix}nulis

*「 Downloads Menu📥 」*
• ${prefix}play <query>
• ${prefix}ytmp3 <linkyt>
• ${prefix}ytmp4 <linkyt>
• ${prefix}getmusic
• ${prefix}getvideo
• ${prefix}tiktok <linktt>
• ${prefix}instagram <linkig>
• ${prefix}facebook <linkfb>

*「 Search Menu♻️ 」*
• ${prefix}ytsearch <query>
• ${prefix}lirik <judullagu>
• ${prefix}lirik2 <judullagu>
• ${prefix}groupwa <query>
• ${prefix}pinterest <query>
• ${prefix}wikipedia <query>
• ${prefix}nickff
• ${prefix}nickml
• ${prefix}nickpubg
• ${prefix}nickdomino
• ${prefix}nickcod
• ${prefix}nickaov
• ${prefix}nickpb

*「 Group Menu🌹 」*
• ${prefix}welcome
• ${prefix}linkgc
• ${prefix}setppgc
• ${prefix}setnamegc
• ${prefix}setdesc
• ${prefix}group
• ${prefix}revoke
• ${prefix}hidetag
• ${prefix}add
• ${prefix}kick

*「 Fun Menu🪀 」*
• ${prefix}suit
• ${prefix}slot
• ${prefix}tictactoe
• ${prefix}delttc
• ${prefix}tebakgambar
• ${prefix}apakah
• ${prefix}bisakah
• ${prefix}kapankah
• ${prefix}bagaimanakah
• ${prefix}rate
• ${prefix}gantengcek
• ${prefix}cantikcek
• ${prefix}sangecek
• ${prefix}gaycek
• ${prefix}lesbicek

*「 [Balance Menu💸] 」*
• ${prefix}limit
• ${prefix}balance
• ${prefix}transfer
• ${prefix}buylimit
• ${prefix}buyglimit
• ${prefix}topglobal
• ${prefix}toplocal

*「 Maker Menu✏️️ 」*
• ${prefix}pornhub <text>
• ${prefix}grafity <text>
• ${prefix}grafity <text>
• ${prefix}logo-wolf <text>
• ${prefix}logo-wolf2 <text>
• ${prefix}black-pink <text>
• ${prefix}magma <text>
• ${prefix}neon-light <text>
• ${prefix}water-color <text>
• ${prefix}larva <text>

*「 Other Menu🎭 」*
• ${prefix}ssweb <linkweb>
• ${prefix}kalkulator
• ${prefix}readmore <text>

*「 Owners Menu💻 」*
• >
• x
• $
• ${prefix}join
• ${prefix}leave
• ${prefix}broadcast
• ${prefix}setpp
• ${prefix}exif
• ${prefix}addpremium
• ${prefix}delpremium

*「 Thanks To🪀 」*
• X-None Team
• Fadly ID
• And Me
• Rtwone
• Aqulzz
• Ramlan ID
• Penyedia Api & Module
• Adiwajshing/Baileys
• Note Jika ada fitur
  yg eror mohon maaf
`
}

exports.tos = (pushname, ownerNumber) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}🪀
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 083811034750 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 🌹

Arigatou!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}

exports.rules = (prefix) => {
    return`Syarat & Ketentuan *BOT*

• Bot *hanya menyimpan nomor anda* di dalam database sebagai nomor user
• Bot *tidak pernah meminta informasi pribadi* anda seperti alamat rumah, asal daerah, dan lain-lain
• Bot tidak menerima *Telpon / Video Call*
• Dilarang *copy tampilan* bot
• Dilarang melakukan *spam* terhadap bot
• Bot tidak menyimpan *data pribadi* anda
• Kami *tidak bertanggungjawab atas fitur apapun yang anda gunakan*
• Bot *tidak* menyimpan foto, video, atau media apapun yang anda kirimkan
• Apabila menemukan bug, error, atau request fitur harap hubungi developer bot
• Bot berhak *memblokir* atau *ban* terhadap user dengan alasan maupun tanpa alasan

_Regards : BOTWEA_`
}
