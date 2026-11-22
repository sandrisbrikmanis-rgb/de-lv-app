const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Ondan sakın!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Bir aksilik olmazsa. • Her şey planlandığı gibi giderse.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Bunu tahmin edebiliyorum!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Yoksa hasta mı?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Ne var?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Daha da çok.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Ne kadar çok olursa o kadar iyi.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Her şey yağmur yağacağını gösteriyor.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Bunun bana pek faydası yok.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "İşi nedeniyle gelemiyor.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Konuşsanıza!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Gök gürlüyor.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "İki kat büyük.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Oradan.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Vakit daralıyor.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Onu dertler bunaltıyor.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Kitabı baştan sona çalıştın mı?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Geçiş yoktur!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Bu dansı bana lütfeder misiniz? • Bu taraftan buyurur musunuz?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Susadım.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Tam da bunu kastediyorum.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Hiç fark etmez.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Aslında ne istiyorsunuz?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Bu iş acil mi?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Çok acil!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Acelem var.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Sadece hasta olduğunu sanıyorsun.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Bu ne cüret? • Aklına ne geliyor?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Bir varmış, bir yokmuş.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Lütfen binin!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Buyurun, girin!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Orada bazı şeyleri beğendim.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Tavsiye edilir.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Bu şişede sirke var.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Affedersiniz!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Ya... ya da...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Birinci kimdi?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Bugün kim yok?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Neyin var?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Adınız nedir?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Bu ne demek oluyor?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Lütfen daha yakına gelin!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Çıkar ağzındaki baklayı!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "sonbaharda",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Bayanlar baylar!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "bugünden itibaren",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "bu sabah",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "bu gece • dün gece",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "İmdat!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Her gün Almanca öğreniyorum.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Lütfen bunu tekrarlar mısın?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Garda buluşuyoruz.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Sana kısmen katılıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Bu kararın geniş kapsamlı sonuçları var.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Birden fazla bakış açısı göz önünde bulundurulmalı.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Bunu daha ayrıntılı açıklayabilir misiniz?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Bana gelince,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Kaç yaşındasınız?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Yirmi yaşındayım.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Bugünden itibaren.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Şu andan itibaren.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Başka türlü olmuyor.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Beni arayın.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Lütfen radyoyu kapatın.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Lütfen trafiğe dikkat et.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Buna dikkat etmelisin.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Bugün bunu farklı yapıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Otobüsü bekliyoruz.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Yalnız yaşıyor.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Mesleki eğitimimi tamamladım. • Öğrenimimi tamamladım.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Yağmurun dinmesini bekliyorum.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Satış bölümünde çalışıyor.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Kedilere alerjim var.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Öte yandan onu anlıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Durumu analiz ettim.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Önerimi kabul etti.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Bunu daha ayrıntılı analiz etmek istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Sözleşmeyi değiştirmek istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Sürekli fikir değiştiriyor.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Benzer sorunları daha önce de yaşamıştık.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Hiçbir fikrim yok!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Sızlanmayı bırak.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Bu elbise şık ve klasik.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Akordiyon müziği dinlemeyi severim.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Cihaza tıklayabilir misin?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Lütfen dosyayı aç ve üzerine tıkla.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Bir kaza geçirdim.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Gara yürüyoruz.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Lütfen televizyonu aç.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Bilgisayarım çöktü.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Hafta sonu balık tutmaya gidiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Aramayı kaçırdım.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Beni daha sonra arayabilir misin?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Lütfen önerimi kabul et.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Teklifini kabul ediyorum.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Daveti kabul etti.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Örümceklerden korkarım.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Korkma, her şey yoluna girecek.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Beğeni kazanmak. • Yankı uyandırmak.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Duruma bağlı.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Bu vesileyle.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Diyelim ki...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Sen orada ne yaptın böyle?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Sonuna kadar.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Bana inanmıyor gibisin.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Bana göre...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Bu kadar abartma!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "İşe koyulmak.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Nefes nefese olmak.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Afiyet olsun!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Bir solukta.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Her durumda. • Mutlaka.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Birden her şey sessizleşti.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Lütfen kapıyı aç!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Krediyi aldı.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Bugün ortalığı toplamalıyız.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Şimdi bırakıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Çoktan kalktı.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Toplantıyı ertelememiz gerekiyor.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Beni sinirlendirdi.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Birdenbire.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Derhâl.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Zararı karşılamak.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Lütfen kapıyı açın!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Dik oturmak.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Kalktı.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Bütün gücünü harcamak.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Çok emek vermek.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Gözümün önünden çekil!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Baş başa.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Zaman darlığından.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Bu nedenle.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Sen hariç herkes.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Dış görünüşe önem vermek.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "En kötü ihtimalle.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Son derece önemli.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Deniz manzarası.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Şansı yüksek.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Bu kelime nasıl telaffuz edilir?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Başsağlığı dilemek.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Şampiyonalar ne zaman düzenlendi?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Ne iş yapıyorsunuz?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Etkide bulunmak.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Dışarıda yemek yemek.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Demir yoluyla.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Trenle.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "En kısa zamanda.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Ödüm kopuyor.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Ağırdan almak.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Nakit ödemek.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Cevher çıkarmak.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "İşi yüzüne gözüne bulaştırmak.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Görevlendirildim.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "İhtiyaca göre.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Ona acıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Bu kelime ne anlama geliyor?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "Şu şartla ki...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Morali bozuk görünüyor.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Talimatlara uymak.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Emirleri yerine getirmek.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Postayla göndermek.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Öğrenmek için sabırsızlanıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Başlangıçta.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Başta.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Başlarken.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Birinin eşliğinde.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Eşlikçisiyle.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Geç anlar.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Akılda tutmak.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Sofrada.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Aklı başında olmak.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Gündüz.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Hiç de o kadar değil.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "İkisi de.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Bir alkış tufanı koptu.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Beğeni toplamak.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Taziyelerini sunmak.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Kendi ayakları üzerinde durmak.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Örneğin.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Yardımda bulunmak.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Katkıda bulunmak.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Biriyle tanışmak.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Tanışıklık kurmak.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sandviçler.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Nasıl isterseniz.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Herhangi bir zamanda.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Sessizliği korumak.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Kolaylık olsun diye.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Hazır olmak. • Razı olmak.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Kaza kurbanlarını kurtarmak.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Rapor vermek.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Bütün yerler dolu.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Yeni süpürge iyi süpürür.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Bir evi var.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Çok cesur.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Daha da iyi.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Geçmiş olsun!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Ne kadar istesem de.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "En iyisi.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Şüphe var.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Onun görevi şudur...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Selam söylemek.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Kesinlikle.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Ziyarete gelmek.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Misafirlikte olmak.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Sık sık konsere gitmek.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Hangi okulda okudu?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Göz önünde bulundurmak.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Hesaba katmamak.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Bir otel işletiyor.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "İkisi de.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Her şeyi ödemek.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Bir şeyle ilgili olarak.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Rica ederim. • Buyurun.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Efendim?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Bir şey değil. • Buyurun.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Sizden bir ricam var.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Trompet çalmak.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Bir kitabı karıştırmak.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Yalın ayak.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Çıplak gözle.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "İltifat için teşekkürler!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Her şey yolunda.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Lütfen kontrol ediniz.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "İşte orada!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Her şey bunu gösteriyor.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Benim suçum değil.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Buna karşıyım.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Bir itirazım yok.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Evden.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Vezirle hamle yapmak.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Hava kararıyor. • Gün ağarıyor.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Çok teşekkür ederim!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Ara sıra.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Buna güvenebilirsin.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Bundan bir şey çıkmaz.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Öyle ki...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Beni kim sanıyorsunuz?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Elini çek!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Moralini bozma!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "evde",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "eve gitmek",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "aslen • doğuştan",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "En içten tebriklerimi sunarım!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Zahmet olmazsa!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Lütfedin!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Neyin var?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "İzin verin lütfen!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Sigara içmeye izin var mı?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "İtiraf etmeliyim ki...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "dün sabah",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "dün akşam",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Benim için fark etmez, ister...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Ne oldu?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Saçmalık yapma!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "... şöyle dursun...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Dosdoğru gidin!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Nasılsınız?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Fırsat bulursan ona bir sor, acaba...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "yarın sabah",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "ilkbaharda",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Ne var ne yok?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Bu mektuptan anlaşılıyor ki...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Devam et!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "...-i pek sevmez...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Ortaya çıktı ki...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Beni hatırlıyor musun? • Beni düşünüyor musun?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "kışın",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Kaç doğumlusunuz?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Görünce içim acıyor...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "ne kadar çok, o kadar iyi",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "şimdiye kadar",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "İstasyona nasıl giderim?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Buraya gel!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Bayan N. ile görüşebilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Bu ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Gösteri ne kadar sürüyor?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Yapma! • Bırak şunu!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Beni rahat bırak!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "İzin verin, size yardım edeyim!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Gidelim!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "E, işler nasıl?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Yaşasın!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Hoşça kalın!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Ne oluyor?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Bu iş yorucu.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Yorucu bir gündü.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Almanca öğrenmek yorucu olabilir.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Bir açıklama istiyor.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Satıcı çok fazla para istiyor.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Kanun bunu böyle gerektiriyor.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Bu hiç de o kadar zor değil.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Hiç param yok.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Hiçbir şey söylemedi.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Köpek bağlı değil.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Burası çok hareketli.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Kes sesini! • Abartma!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Ne yapıyorsun?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Söylesene!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Bununla ne demek istiyorsunuz?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Sizinle geliyoruz.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Trenle gidiyorum.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "çarşamba günü",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Olabilir.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Bundan hoşlanmıyorum.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "pazartesi günü",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Günaydın!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "sabahleyin",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "İyi geceler!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Buyurun, oturun!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "En son yenilik!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Değil mi?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Yok canım! • Yapma!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Nihayet!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Bu ne işe yarar?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Bütün bunların ne faydası var?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Park yapmak yasaktır!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Park yapmayınız!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Haklı.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Söz konusu olan ne?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Bu söz konusu bile olamaz.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "İyi yolculuklar!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Sabrım tükeniyor.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Derler ki...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Tamam, tamam!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Buyurun! • Rica ederim!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Borcum ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Kullanmadan önce çalkalayınız!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Bir bakın!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Her ne kadar...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Ne zamandan beri?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Ne yapmalıyım?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "yazın",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Yalnızca... değil, aynı zamanda... da...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Başka bir şey?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Şaka bir yana!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Saat kaç oldu?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Araç geçişine kapalıdır!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Almanca biliyor musunuz?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "...-mak yerine...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Ne var ne yok?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Bu şapka ona yakışıyor.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "İyi günler!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Nerede buluşalım?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Daha yakına gelin!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Dürüstlük bir erdemdir.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Çok işim var.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Fena değil!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Üst katımda oturuyor.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Bundan emin.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Âdet böyledir.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Saatin geri kalıyor.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Saat kaç?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Sabah saat sekizde.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "daha da çok",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Sağa dön!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Hem de nasıl!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "şöyle ki",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "...-in hesabına...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Seyirciler arasında oturuyordu.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Bir şey değil!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Kararlaştırıldığı gibi oldu.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Sigara içmek yasaktır!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Yanlış numara!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Giriş yasaktır!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Beni anlıyor musunuz?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Bu işten hiçbir şey anlamaz.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Kendi görüşünü savunmak.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Tartışmaya yol açmak.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Çok daha iyi.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Çok fazla.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Kulaktan dolma.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Zaman zaman.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Meslek olarak.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Berlin doğumlu.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Pencerenin önünde duruyor.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Güneş doğmadan önce.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "İki hafta önce.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Sevinçten.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Her şeyden önce.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Önceden.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Şu şartla ki...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Bu çekinceyle.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Mevcut olmak. • Var olmak.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Geçen hafta.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Önlem almak.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Bana tanıdık geliyor.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Edebiyata düşkün.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Bu sabah. • Bugün öğleden önce.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Önden. • Baştan.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "İleriye.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "En başından.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Avantajlı durumda olmak.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Uyanık olmak.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Uyanmak.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Nöbet tutmak.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Bir yıl boyunca.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Savaş sırasında.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Boşuna nefes tüketmek.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Yerin kulağı var.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Ne zamana kadar?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Hava sıcak.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Bir haber beklemek.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Ne istiyorsunuz?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Ne tür bir...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Yarı yolda.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Bu şekilde. • Bu yolla.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Barışçıl yollarla.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Dostluğumuz hatırına.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Kanunen. • Hakkaniyete göre.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Acımak.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Noel'de.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Ne şekilde?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Yöntem.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Hiç beklemeden. • Hiç zorlanmadan.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "İkinci bir duyuruya kadar.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Vesaire.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Başka bir şey yok.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Hangi gün?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Bütün dünya. • Herkes.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Birkaç gün içinde.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Çok az.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Her ne kadar.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kim o?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schiller'in toplu eserleri.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Seçme eserler.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Şunu hak ediyor:...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "İki avro değerinde.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Batıya.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Batıdan.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Rekabete girmek.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Koşu yarışı yapmak.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Neyine iddiaya girelim?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Hava nasıl olacak?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Jimnastik yarışması.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "İsteğim dışında.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protesto etmek. • İtiraz etmek.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Kaç yaşında?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Ne kadar süre?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Görüşmek üzere!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Hoşça kalın!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Vahşi hayvanlar.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Hoş geldiniz!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Hamle sırası sende.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Cereyan var.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Oldukça soğuk.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Sucuğun ucu.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Onun yanına gitmek.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Okula gitmek.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Evde kalmak.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Günden güne.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Neyse ki.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "İçme suyu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Yürüyerek.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "At sırtında.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Bisikletle.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Yağmur dindi.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Daha yapacak çok işim var.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Çok erken.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Çok büyük.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Omuz silkmek.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Bir dikişte içmek.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Mahvolmak.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Temel almak. • Esas almak.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "İlk kez.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Lütfen kapıyı kapatın!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Kilo aldı.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Günler uzuyor.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Bir şeyle bağlantılı olmak.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Kapı kapalı.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Bunu ondan beklemezdim.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Giriş serbest.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Girmek yasaktır!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Bu çok fazla!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Tiksinti vermek. • Usanç vermek.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Şöyle ki.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Hiç şüphe yok.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Şüphesiz.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "İkincisi.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Yeni yılınız kutlu olsun!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Doğum günün kutlu olsun!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "İyi yolculuklar!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Sizinle tanıştığıma memnun oldum.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Lütfen bana bir iyilik yapar mısınız?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Size çok minnettarım.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Lütfen oturun!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, lütfen tahtaya gel!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Lütfen ders kitaplarınızı açın!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Lütfen spor salonuna gidin!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Hâlâ uyuyor musun?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Hâlâ uyuyor musunuz?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Derin bir uykuya daldı.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Lütfen onu uyandır, artık geç oldu!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Çok üzgünüm!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Çok teşekkürler!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, lütfen başla!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Lütfen okunanı metinden takip edin!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, lütfen pencereden dışarı bakma!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, lütfen defterleri getir!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Lütfen yerine geri dön!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Saat yedi buçuk.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Genellikle ne zaman uyanırsın?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Hemen kalkıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Kalk, Hanna, saat çalıyor! • Kalk, Hanna, kapı çalıyor!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Beş dakika daha uyumama izin ver!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Odayı havalandırmayı unutma!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Havlu nerede?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Dişlerimi fırçalamak istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Dişlerini neyle fırçalıyorsun?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Giyinmek istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Lütfen çabuk giyin!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Daha kalın giyin, dışarısı serin.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Günaydın, nasılsın?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "İyiyim, teşekkürler.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Ne var ne yok?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Burası ne kadar dağınık!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Ortalığı toplamana yardım edebilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Sabahları ne içersin, kahve mi çay mı?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Genellikle sabahları bir fincan kahve içerim.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "En çok sütsüz kahve içmeyi severim.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Günaydın, iyi uyudun mu?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Hâlâ çok yorgunum.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Kahve mi istiyorsun, süt mü?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Lütfen bana peynirli bir sandviç ver.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Şimdi gitmem lazım!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Kahvaltını unutma!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, lütfen sofrayı kur!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Peçeteleri unutma!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Öğle yemeğini ne zaman yersiniz?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Yemek vakti.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Bugün öğle yemeğinde ne var?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Çorbayı nasıl buldun?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Açıkçası biraz fazla tuzlu.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Sana bir dilim ekmek verebilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Teşekkürler, bende zaten var.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Etin tadı mükemmel.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Teşekkürler, ben doydum.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Bugün misafirimiz var.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Bu akşam boş musun?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Bugün öğle yemeğine bize gelsene!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Sofraya oturalım.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Buyur, kendin al!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Sigara içilmesi seni rahatsız ediyor mu?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Sıcak karşılama için teşekkürler!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Ne zaman yatarsın?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "İşten geldiğimde hep yorgun oluyorum.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Yatma vakti.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Hava güzel.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Benimle yürüyüşe çıkmak ister misin?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Bak, birazdan yağmur yağacak.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Şemsiyeyi yanına al!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Yağmur yağıyor.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Şimdiden sırılsıklam oldum.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Sence bütün gün yağmur yağacak mı?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Yağmur diniyor.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Güneş yeniden parlıyor.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Hava çok sıcak.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Yağmur yağacağa benziyor.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Birazdan fırtına kopacak.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Fırtına geçiyor.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Bulutlar dağılıyor.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Gökkuşağını görüyor musun?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Kış geldi, kar yağdı.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Kar yağıyor.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Kışın orman ne kadar güzel!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Üşüyorum, donuyorum.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Dışarıda yerler buz tutmuş, dikkat et!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Buz pateni pistine gidelim mi?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Ceketini giy, üşütebilirsin.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Saat altı buçuk.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Saatim beş dakika ileri gidiyor.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Yarın sabah beni saat yedide uyandır!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Bugün ayın kaçı?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Bugün 11 Temmuz.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Akşamları genellikle ne yaparsın?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Görüşmeyeli uzun zaman oldu.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Nasılsın?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Affedersin, seninle bir şey konuşmak istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Yürüyüşe çıkalım!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Canın benimle parka gitmek istiyor mu?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Seni yürüyüşe çıkarmaya geldim.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Lütfen biraz daha yavaş yürü, sana yetişemiyorum!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Bu bölgeye ilk kez geliyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Biraz dinlenelim.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Şimdi geri dönebiliriz.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Açıkçası oldukça yorgunum.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Affedersin, en yakın metro istasyonu nerede?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "En kısa yol hangisi?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Buradan ikinci sokaktan sola dön, sonra hep dümdüz git.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Tren istasyonuna en çabuk nasıl giderim?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Yarın yolculuğa çıkmayı planlıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Nereye gitmek istiyorsun?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "İş için mi seyahat ediyorsun, yoksa özel olarak mı?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn Berlin'e kadar bizimle geliyor, sonra da deniz kenarına gidecek.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Gemi ne zaman kalkıyor?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Yarım saat sonra.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Hâlâ bir kamara alabilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Pasaportunu unutma!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Bavulu hazırlama vakti.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Tren altı buçukta kalkıyor.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Lütfen bana bir taksi çağır, yoksa treni kaçıracağım!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Lütfen beni istasyona götür!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Acele etmeliyim.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Gişe açıldı mı?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Köln'e bir bilet, lütfen.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Tren ne zaman kalkıyor?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Tren kalkmak üzere.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Koblenz'de aktarma yapmam gerekiyor mu?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Evet, orada aktarma yapmalısın.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Bu yer boş mu?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Hayır, burada kimse oturmuyor.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Peron bileti otomatı nerede?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "El bagajımı bagaj rafına koy.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Pencereyi açabilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Cereyan var, lütfen pencereyi kapat!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Bir sonraki istasyon hangisi?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Tren ne kadar duruyor?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Nerede aktarma yapmalıyım?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Tren rötarlı.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Bu vagon sigara içmeyenler için.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Şimdi sınırı geçiyoruz.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Gümrüğe tabi bir şeyin var mı?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Berlin'e vardık.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Bana iyi bir otel önerebilir misin?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Boş odanız var mı?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "İki yataklı bir oda, lütfen.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Odanın gecelik fiyatı ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Yarın ayrılıyorum. Beni saat yedide uyandır!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Hesap, lütfen!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Şehir kütüphanesi nerede?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Müze ne zaman açık?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Müzeye gidelim mi?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Otobüsle mi gidiyoruz, metroyla mı?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "En yakın otobüs durağı nerede?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Çok açım.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Birlikte yemeğe gidelim mi?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Garson, menü lütfen!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Balık taze mi?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Bunun tadı harika!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Garson, hesap lütfen!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Kafeye kahve içmeye gidiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Sen de gelmek ister misin?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Bir fincan sütlü kahve, lütfen!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Lütfen daha hızlı, acelem var!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Kahveni soğutma!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Serinletici bir şeyiniz var mı?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Bir porsiyon dondurma, lütfen!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Bu sabah bir mektup aldım.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Ona hemen yazmalıyım.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "En yakın posta kutusu nerede?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Postane nerede?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Yarın bana yazmayı hatırlat!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Lütfen bu mektubu posta kutusuna atın.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Alo, ben Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Seni sonra arayabilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Çok bekleyecek miyim?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Lütfen saçımı kesin.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Arkası lütfen çok kısa olmasın.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Gösteri ne zaman başlıyor?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Yedi buçukta başlıyor.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Bütün biletler tükendi.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Üç bilet, lütfen!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Ceketlerimizi vestiyere bırakıyoruz.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Lütfen çabuk, perde açılmak üzere!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Perde iniyor.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Benimle dans eder misin?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Düğününüz ne zaman?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Bir daire arıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Bu binada boş daire var mı?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Kira ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Dairede üç oda ve bir mutfak var.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Bugün taşınıyoruz.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, lütfen eşyaları kutulara koy!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Her şeyi paketledin mi?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Arkadaşımla iletişim hâlindeyim.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Tiyatroya gidelim mi?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Her şey yüklendi mi?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Ne güzel bir manzara!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Artık her şeyi yeniden toparlayabiliriz.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Kaç odanız var?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Yazın denize gidiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Yüzme biliyor musun?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Fazla açıklara yüzme!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Her gün denize giriyor musun?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Hava güzel olduğunda balığa çıkarım.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Görünüşü nasıl?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Gerçekten de epey değişmiş.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "İnsan olarak nasıl biri?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Her zaman nazik ve cana yakındır.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Kendimi iyi hissetmiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Başım çok ağrıyor.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Üşüttüm.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Nezleyim.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Başım dönüyor.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Doktora gitmeliyim.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Yatağına uzan!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Ateşin var mı?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Dün biraz ateşim vardı.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Dişim ağrıyor.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Dişçiye gitmem lazım.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Finn'in hasta olduğunu biliyor musun?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Doktora göre yakında iyileşecek.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Evimi yeniden döşemek istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Bunu taksitle alabilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Kendini daha iyi hissedene kadar yatakta kal!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah iki haftada yüzmeyi öğrendi.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Yemek konusunda bir süre daha dikkatli ol.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Almanca konuşuyor musun?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Evet, biraz.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Oldukça akıcı konuşuyorsun.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Almancayı nerede öğrendin?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Bir yıldır Almanca dersi alıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Her zaman Almanca konuşma fırsatı arıyorum.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Kitap hâlâ stokta var mı?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Kitap maalesef tükendi.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Yeni baskı ne zaman çıkacak?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Size nasıl yardımcı olabilirim?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Taptaze yumurtanız var mı?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Bunlar ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Bu fazla pahalı.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Bana yarım kilo tartar mısınız?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Ne kadar ödemem gerekiyor?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Kilosu ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Lütfen bana iki kilo tartın.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Havucunuz da var mı?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "İyi sığır etiniz var mı?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Bana iki kilo kıyma verin.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Bir somun ekmek lütfen, ama fazla gevrek olmasın.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Ekmek fırından yeni çıktı.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Bugün ne tür meyveleriniz var?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Elmalar ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "O zaman iki kilo elma alayım.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Armutlar çok pahalı.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Her şeyi eve teslim edebilir misiniz?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Pirinciniz var mı?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Lütfen bana bir kilo pirinç verin.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Teşekkürler, bu sefer değil.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Bu halı ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Mobilyaları evime teslim edebilir misiniz?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Lütfen kasada ödeyiniz.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Lütfen faturayı kesin.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Metresi ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Bu kumaşı beğendim.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Lütfen bana üç metre kesin.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Başka desenleriniz de var mı? • Başka numuneleriniz de var mı?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Bu rengi beğenmiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Bana daha açık bir renk verin.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Bu çoraplar ne kadar?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Hangi eldivenleri istersiniz?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Bunlar bana biraz dar.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Tamam, şimdi tam oldu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Bana iyi bir terzi önerebilir misin?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Bir takım elbise diktirmek istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Ne zaman hazır olacak?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Takım elbise iyi oturuyor.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Pantolon fazla uzun.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Lütfen temizleyip ütüleyin!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Elbise ne zaman hazır olacak?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Ayakkabılar fazla dar.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Ayakkabıları bugün tamir edebilir misiniz?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Ayakkabıları ne zaman alabilirim?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Kol saatim çalışmıyor.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Beş dakika ileri gidiyor.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Miyop musun yoksa hipermetrop musun?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Bir gözlük almak istiyorum.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Gözlüğümü tamir edebilir misiniz?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Sadece çeyrek saat sürer.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Fiyat benim için fazla yüksek.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Pasaportum için iki fotoğrafa ihtiyacım var.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Lütfen paketleyip evime gönderin.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Fiyatlarımız sabittir.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Lütfen fotoğrafımı çekin.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Oturun, doğruca kameraya bakın ve kıpırdamayın!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Prova baskıyı ne zaman görebilirim?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Fotoğraflar ne zaman hazır olur?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Çekim başarılı oldu.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotoğraflar iyi çıkmış.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Fotoğrafı ayrıca büyütebilir misiniz?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Bu taşlar gerçek mi?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Bu gerçek altın mı?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Lütfen bana birkaç alyans gösterin.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Yüzük bana biraz bol.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Onu daraltabilirim.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Bu yüzük parmağıma tam oldu.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Bana hediyelik güzel şeyler gösterin.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Bu küpeleri nasıl buldun?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Bu broş gerçekten çok güzel.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Bu taş safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Bu gerçek taş değil, cam.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Bu bileziği size özellikle tavsiye edebilirim.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "İşçiliği özellikle güzel.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Fiyat yüksek değil.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Kutu ücretsiz mi?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Bütün mücevherler damgalıdır.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Eşim beğenmezse değiştirebilir miyim?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Elbette, istediğiniz zaman.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;
