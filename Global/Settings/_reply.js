let prefix = client.guilds.cache.get(sistem.SERVER.ID).emojiGöster(emojiler.Iptal)

module.exports = {
    prefix,
    noyt:          `${prefix} Bu komutu kullanabilmek için herhangi bir yetkiye sahip değilsin.`,
    bot:           `${prefix} \`BOT ÜYE\` bu üye üzerinde hiç bir şekilde işlem yapamazsın.`,
    üye:           `${prefix} \`Üye belirtilmedi\` Lütfen bir üye etiketleyin veya ID giriniz! __Örn:__`,
    süre:          `${prefix} \`Süre belirtilmedi\` Lütfen bir süre belirleyin!  __Örn:__ `,
    sebep:         `${prefix} \`Sebep belirtilmedi\` Sebep yazmalısın veya geçerli bir sebep girmelisin!`,
    yetkiust:      `${prefix} \`Yetki Üstünlüğü\` İşlem yapmaya çalıştığın üye senle aynı yetkide veya senden üstün.`,
    dokunulmaz:    `${prefix} \`Yönetim/Erişim\` Yetersiz bot yetkisi nedeniyle iptal edildi.`,
    kayıtlı:       `${prefix} \`Kayıtlı Üye\` Belirlediğiniz üye sunucuda zaten kayıtlı ne için tekrardan kayıt ediyorsun?`,
    kayıtsız:      `${prefix} \`Kayıtsız Üye\` Belirlediğiniz üye sunucuda zaten kayıtsız ne için tekrardan kayıtsıza atmaya çalışıyorsun?`,
    kendi:         `${prefix} \`Aynı Üye\` Lütfen Kendi üzerine işlem uygulamaya çalışma!`,
    bulunamadi:    `${prefix} \`ID bulunamadı\` Lütfen bir üye __ID__ numarası giriniz.`,
    üyeyok:        `${prefix} \`Üye bulunamadı\` Lütfen bir üye etiketleyin veya ID giriniz.`,
    yenihesap:     `${prefix} \`Yeni Hesap\` Belirtilen üyeye kayıt işlemi yapılamıyor.`,
    cezaliuye:     `${prefix} Belirttiğin üye \`Cezalı\` olarak işaretlendiği için kayıt işlemi yapılamadı.`,
    yetersizyaş:   `${prefix} \`Yaş Sınırı (${ayarlar ? ayarlar.minYaş : 0})\` Belirtilen üyenin yaşı, yaş sınırının altında olduğu için isim işlemi yapılamadı.`,
    argümandoldur: `${prefix} \`Argüman doldurulmadı\` Lütfen tüm argümanları doldurunuz!  __Örn:__`,
    taglıalım:     `${prefix} \`Taglı Alım\` Belirtilen üyenin isminde \`${ayarlar ? ayarlar.tag : "X"}\` bulunmadığından dolayı kayıt işlemi yapılamadı.`,
    isimapi:       `${prefix} \`İsim Hatası (32 Karakter)\` İsim karakteri fazla olduğundan dolayı işlem yapılamadı.`,
    cezavar:       `${prefix} \`Aktif Ceza\` belirtilen üyenin zaten aktif bir cezalandırılması bulunmaktadır.`,
    cezayok:       `${prefix} \`De-Aktif Ceza\` bu kişinin aktif cezalandırması bulunamadı.`,
    teyitzorunlu:  `${prefix} \`Teyit zorunlu\` olduğundan dolayı kayıt işlemi gerçekleştirilemedi.`,
    yetkilinoban:  `${prefix} \`Yetkili\` Bu kişi yetkili olduğu için yasaklayamazsın.`,
    yasaklamayok:  `${prefix} \`Yasaklama Yok\` Sunucu da hiç yasaklama bulunamadı.`,
    ayarlamayok:       `${prefix} Belirtilen komutun ayarları yapılmadığından dolayı işlem iptal edildi. Sistem yöneticisine başvurun!`,
    notSetup: `${prefix} Lütfen kullanılan komut ayarlarını tamamlayın. \`${global.sistem.botSettings.Prefixs[0]}setup\` komutundan kurulumunu yapınız.`

}