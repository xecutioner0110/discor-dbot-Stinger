const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ diskoyardım
• 1:Botu Ekledikten Sonra Botun Rolünü En Üste Taşıyınız.	
• 2:'disko' Adında Rol Oluşturunuz.
• 3:disko Rolünü İsteğiniz Kullanıcılara Veriniz.
• 4:Sohbet Kanalına .disko Yazınız Çalışmazsa Botun Rolünden 'Rolleri Yönet' Yetkisi Veriniz.
    DİSKO YARDIM SİSTEMİ`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'diskobilgi',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'diskobilgi'
};