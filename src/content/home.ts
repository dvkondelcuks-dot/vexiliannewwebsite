export const navItems = [
  { label: "Noplūde", href: "#noplude" },
  { label: "Klusie mēneši", href: "#klusie-menesi" },
  { label: "Metode", href: "#metode" },
  { label: "Kam tas der", href: "#kam-tas-der" },
  { label: "Audits", href: "#audits" },
] as const;

export const homeCopy = {
  hero: {
    eyebrow: "Latvijas viesmīlības vietu īpašniekiem",
    title: "Jūsu viesi raksta no visurienes. Bet kur pazūd rezervācijas?",
    description:
      "Vexilian palīdz viesu namiem, pirts kompleksiem un pasākumu vietām atrast, kur cilvēki pazūd starp pirmo interesi un rezervāciju, un sakārtot skaidrāku ceļu līdz apstiprinātam klientam.",
    primaryCta: "Noskaidrojiet, kur jums pazūd klienti",
    secondaryCta: "Apskatīt noplūdes piemērus",
    trust:
      "Bezmaksas klientu noplūdes audits atlasītiem viesu namiem, pirts kompleksiem un pasākumu vietām Latvijā.",
  },
  leakageRecognition: {
    eyebrow: "Kur sākas noplūde",
    title: "Pieprasījums nav tas pats, kas rezervācija.",
    description:
      "Cilvēks var uzrakstīt Instagram, apskatīt cenu Booking platformā, piezvanīt, pajautāt par brīvu datumu un pēc tam pazust. Ja nav skaidrs, kas ar šo cilvēku notika tālāk, īpašniekam paliek tikai sajūta, nevis kontrole.",
    support:
      "Vexilian skatās uz visu ceļu: no pirmā kontakta līdz rezervācijai un atkārtotam viesim.",
    microCta: "Tieši šos posmus pārbaudām klientu noplūdes auditā.",
    cards: [
      {
        title: "Pieprasījums ienāk",
        text: "Bet nav skaidrs, cik tas ir vērtīgs un cik ātri jāreaģē.",
      },
      {
        title: "Atbilde aiziet",
        text: "Bet tā ne vienmēr virza cilvēku uz lēmumu.",
      },
      {
        title: "Cilvēks pazūd",
        text: "Un nav skaidrs, vai viņš jāatgriež, jāuzrunā vēlreiz vai jāmaina piedāvājums.",
      },
      {
        title: "Rezervācija notiek",
        text: "Bet nav redzams, kurš kanāls to patiesībā atveda.",
      },
      {
        title: "Viesis aizbrauc",
        text: "Un bieži netiek atgriezts nākamajā sezonā.",
      },
    ],
  },
  leakagePath: {
    eyebrow: "Ceļš līdz rezervācijai",
    title: "Klienti nepazūd vienā brīdī. Viņi pazūd pa ceļam.",
    description:
      "Rezervācija parasti nav viens klikšķis. Tā ir vairāku mazu soļu ķēde: cilvēks ierauga vietu, jautā, salīdzina, gaida atbildi, pārdomā, atgriežas vai pazūd. Ja viens posms nav skaidrs, potenciālais klients var aiziet pie citas vietas.",
    stages: [
      {
        label: "Redzamība",
        note: "Saturs piesaista skatienu, bet neskaidro, kāpēc rezervēt tagad.",
      },
      {
        label: "Pieprasījums",
        note: "Cilvēks jautā, bet netiek novērtēts pēc vērtības un steidzamības.",
      },
      {
        label: "Atbilde",
        note: "Atbilde ir pieklājīga, bet bez skaidra nākamā soļa.",
      },
      {
        label: "Nākamais solis",
        note: "Ja cilvēks neatbild, viņš vienkārši pazūd.",
      },
      {
        label: "Rezervācija",
        note: "Nav redzams, no kura kanāla tā atnāca.",
      },
      {
        label: "Atkārtots viesis",
        note: "Viesis aizbrauc, bet netiek atgriezts nākamajā sezonā.",
      },
    ],
  },
  offSeason: {
    eyebrow: "Klusie mēneši",
    title: "Lielākā noplūde parādās tad, kad sezona beidzas.",
    description:
      "Sezona bieži noslēpj sistēmas trūkumu. Vasarā cilvēki paši meklē vietas, datumus un brīvdienas. Bet ziemā, darba dienās un starp sezonām kļūst redzams, vai jums ir savs klientu ceļš, savi piedāvājumi un skaidrs plāns, kā aizpildīt klusākus periodus.",
    intro:
      "Klusais mēnesis parasti nesākas kalendārā. Tas sākas agrāk — brīdī, kad neviens nepārbauda, kurus cilvēkus vēl var atgriezt.",
    questions: [
      "Vai zināt, kuri mēneši jums vienmēr krīt?",
      "Vai iepriekšējie viesi tiek uzrunāti pirms šiem mēnešiem?",
      "Vai piedāvājums mainās pēc sezonas?",
      "Vai saturs dod iemeslu rezervēt tagad?",
      "Vai īpašnieks zina, kam šonedēļ jāraksta tālāk?",
    ],
    microCta:
      "Auditā skatāmies, kur klusais mēnesis sākas pirms tas kļūst tukšs.",
  },
  platform: {
    eyebrow: "Platformas nav jūsu sistēma",
    title:
      "Booking un Airbnb var palīdzēt jūs atrast. Tie neaizstāj jūsu pašu klientu ceļu.",
    description:
      "Platformas ir noderīgas redzamībai. Bet tās pašas par sevi neveido atkārtoto viesu plūsmu, sezonālos piedāvājumus, tiešo saziņu un īpašnieka skatu uz to, kas patiesībā kļuva par rezervāciju.",
    reframe:
      "Ja cilvēks atnāk caur platformu, paliek pie jums un pēc tam pazūd uz visiem laikiem, tā joprojām ir noplūde.",
    questions: [
      "Vai zināt, kuri platformu viesi varētu atgriezties?",
      "Vai varat viņus uzrunāt pirms klusā mēneša?",
      "Vai zināt, kuri kanāli nes vērtīgākos klientus?",
      "Vai cilvēks pēc pirmās intereses nonāk pie skaidra nākamā soļa?",
      "Vai jūsu saturs tikai izskatās labi, vai arī palīdz cilvēkam rezervēt?",
    ],
  },
  method: {
    eyebrow: "Vexilian metode",
    title: "Vispirms atrodam noplūdi. Tad sakārtojam ceļu līdz rezervācijai.",
    intro:
      "Mēs nesākam ar pieņēmumu, ka jums vajag jaunu mājaslapu. Mēs sākam ar jautājumu: kur cilvēks pazūd, pirms kļūst par klientu?",
    steps: [
      {
        title: "Atrodam avotus",
        text: "Skatāmies, no kurienes šobrīd nāk interese: Instagram, Booking, zvani, e-pasti, mājaslapas forma un iepriekšējie viesi.",
      },
      {
        title: "Atrodam noplūdes vietas",
        text: "Nosakām, kur cilvēks pazūd: pirms atbildes, pēc cenas jautājuma, pirms datuma apstiprinājuma vai pēc pirmās uzturēšanās.",
      },
      {
        title: "Sakārtojam piedāvājumu",
        text: "Pārbaudām, vai vēstījums atbilst sezonai, vietas tipam un cilvēka iemeslam rezervēt.",
      },
      {
        title: "Sakārtojam pieprasījumu ceļu",
        text: "Katram pieprasījumam jābūt saprotamam: no kurienes tas atnāca, kādā statusā tas ir un kas jādara tālāk.",
      },
      {
        title: "Atgriežam klientus",
        text: "Nepabeigtie pieprasījumi un iepriekšējie viesi nedrīkst vienkārši pazust pēc pirmās sarunas.",
      },
      {
        title: "Dodam īpašniekam skaidru bildi",
        text: "Īpašniekam jāredz, kas rada rezervācijas un kur jāreaģē nākamais.",
      },
    ],
  },
  ownerControl: {
    eyebrow: "Īpašnieka skats",
    title: "Ne vairāk trokšņa. Vairāk skaidrības.",
    description:
      "Labs īpašnieka skats nav par skaistiem grafikiem. Tas parāda, kur ir nauda, kur ir kavēšanās, kam jāseko līdzi un kuri cilvēki var kļūt par rezervāciju.",
    support: "Mērķis nav vairāk tabulu. Mērķis ir mazāk minēšanas.",
  },
  useCases: {
    eyebrow: "Kam tas der",
    title: "Vietām, kur rezervācija nenotiek vienā klikšķī.",
    intro:
      "Vexilian ir paredzēts viesmīlības vietām, kur katrs labs pieprasījums ir vērtīgs un pazudis klients nozīmē reālu zaudētu iespēju.",
    cards: [
      {
        title: "Viesu nami",
        text: "Pieprasījumi ienāk pa vairākiem kanāliem, bet nav skaidrs, kas patiesībā pārvēršas rezervācijās. Sakārtojam avotus, sezonālos piedāvājumus un veco viesu atgriešanu.",
        visible:
          "Redzams, kuri kanāli strādā, kuri mēneši krīt un kam jāraksta tālāk.",
      },
      {
        title: "Pirts / sauna kompleksi",
        text: "Cilvēki jautā par datumiem, cenām un kompānijas izmēru, bet daļa pazūd bez nākamā kontakta. Sakārtojam atbildes ritmu, datumu prioritātes un klusā mēneša aizpildi.",
        visible:
          "Redzams, kuri interesenti jāatgriež un kuri piedāvājumi palīdz aizpildīt tukšos datumus.",
      },
      {
        title: "Pasākumu vietas",
        text: "Lielāki pieprasījumi var būt vērtīgi, bet bez skaidra statusa tie ievelkas vai pazūd. Sakārtojam pieprasījuma vērtību, stadiju un konkrētu nākamo soli.",
        visible:
          "Redzams, kuri pasākumi ir tuvāk lēmumam un kur jāreaģē ātrāk.",
      },
    ],
  },
  pricing: {
    eyebrow: "Cenas un apjoms",
    title: "Ne katrai vietai vajag vienādu sistēmu.",
    description:
      "Darba apjoms ir atkarīgs no tā, cik daudz kanālu jums ir, kur šobrīd pazūd klienti, kāds ir satura stāvoklis un cik skaidrs ir ceļš līdz rezervācijai. Tāpēc sākam ar auditu, nevis universālu cenu lapu.",
    items: [
      {
        title: "Klientu noplūdes audits",
        text: "Bez maksas atlasītiem viesmīlības uzņēmumiem Latvijā.",
      },
      {
        title: "Rezervāciju noplūdes sistēmas izveide",
        text: "Apjoms un sākuma budžets tiek noteikts pēc audita.",
      },
      {
        title: "Mēneša uzraudzība un uzlabošana",
        text: "Pēc vajadzīgā ritma, sezonas un atbildības līmeņa.",
      },
    ],
    note: "Šis nav risinājums vietām, kur vajag tikai lētāku mājaslapu. Tas ir paredzēts īpašniekiem, kuri grib skaidrāk saprast, kur pazūd klienti un kā šo ceļu sakārtot.",
  },
  finalAudit: {
    eyebrow: "Bezmaksas audits",
    title: "Noskaidrojiet, kur jums pazūd klienti.",
    description:
      "Aizpildiet īsu pieteikumu. Mēs apskatīsim jūsu vietas situāciju, pieprasījumu kanālus un iespējamos noplūdes punktus. Ja redzēsim reālu potenciālu, sazināsimies WhatsApp vai pa telefonu.",
    trust:
      "Nav universālu ieteikumu. Mēs skatāmies uz konkrētu vietu, konkrētiem kanāliem un konkrētiem klusajiem mēnešiem.",
    helper: "Aizpildīšana aizņem aptuveni dažas minūtes.",
    consent:
      "Piekrītu, ka Vexilian ar mani sazinās par klientu noplūdes auditu WhatsApp, telefoniski vai e-pastā.",
  },
  footer:
    "Vexilian palīdz Latvijas viesmīlības vietu īpašniekiem atrast, kur pazūd klienti ceļā līdz rezervācijai.",
} as const;

export const formFields = {
  required: [
    "Vārds",
    "Uzņēmuma / vietas nosaukums",
    "Tālrunis vai e-pasts",
    "Vietas tips",
    "Kur šobrīd nāk pieprasījumi?",
    "Kur, jūsuprāt, pazūd klienti?",
  ],
  optional: [
    "Mājaslapas vai profila saite",
    "Vājākie mēneši vai periodi",
    "Vai jums ir iepriekšējo klientu kontakti?",
    "Vai vēlaties vairāk tiešo rezervāciju?",
    "Aptuvenā rezervācijas / pasākuma vērtība",
  ],
} as const;
