import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-college',
  templateUrl: './about-college.component.html',
  styleUrls: ['./about-college.component.css'],
})
export class AboutCollegeComponent {
  showMoreHerman = false;
  showMoreMegyeri = false;
  showMoreKozma = false;

  onShowHerman() {
    this.showMoreHerman = !this.showMoreHerman;
  }

  onShowMegyeri() {
    this.showMoreMegyeri = !this.showMoreMegyeri;
  }

  onShowKozma() {
    this.showMoreKozma = !this.showMoreKozma;
  }

  textherman = `  A kollégium névadója: Herman Ottó (1835-1914) Herman Ottó 1835. június
  28-án született a Zólyom megyei Breznóbányán (ma Szlovákia, Brezno). Ez a
  pontos adat, ugyanis több századeleji lexikon azt írja, hogy június 26-án,
  és a Borsod megyei Alsóhámorban született, ám ez a változat valószínűleg
  Herman Ottó csínye volt. Megengedhette magának, hiszen mint Péter László
  írja róla: „Csodálatos termékenységű lángelme volt, a múlt század
  legnagyobb polihisztorainak egyike. Ma, a végtelenségig szakosodott
  tudományágak korában már elképzelhetetlen, hogyan alkothatott ez a
  pátriárkakort megért, lakatosinasból lett tudós nem akármilyen, hanem
  alapműveket olyan egymástól távol eső tudományterületeken, mint a
  pákászat, madártan, halászat, pásztorélet.”A lexikonok is több
  foglalkozást említenek: néprajzkutató, természettudós és politikus, a
  magyar nép anyagi kultúrájának első tudományos igényű vizsgálója. Ráadásul
  ő teremtette meg — saját gyűjtésével — a Magyar Néprajzi Múzeum halászati
  anyagának alapjait, ő hozta lére 1893-ban a Magyar Ornitológiai Központot,
  és az elsők közt szorgalmazta Magyarországon (Miskolc környéki
  feltárásaival) az antropológiai és az ősrégészeti kutatásokat. Jelentős
  volt tudománynépszerűsítő tevékenysége is. A nagy polihisztort életében 16
  bel- és külföldi tudományos társaság választotta rendes, illetve
  tiszteletbeli tagjává, a Magyar Utazók Lexikona pedig Észak-Norvégia
  utazójaként tartja számon. Már ez is elég lenne több élet kitöltésére, de
  még nincs vége! Sovány múzeumi fizetését ugyanis már pályájának elején,
  Kolozsvárott újságírással egészítette ki: színházkritikától vezércikkig
  mindent írt. Később is, egész életén át cikkezett napilapokban,
  folyóiratokban, a tudomány dolgairól éppúgy, mint a közélet idoszerű
  kérdéseiről. Könyveit, cikkeit maga látta el rajzaival, illusztrációval.
  Hihetetlen energiájú és munkabírású ember volt, de akkor is felmerül a
  kérdés: hogy illeszkedik ebbe a szédületes életútba Szeged városa?
  Egyszerű a válasz: meghalt Kállay Ödön, a szegedi második választókerület
  képviselője, Kossuth Lajos pedig Herman Ottót ajánlotta az
  alsóvárosiaknak. Életrajzírója, Lambrecht Kálmán meséli, hogy amikor a
  szegediek küldöttsége megjelent Pesten Herman Ottónál, hogy menne velük
  programbeszédét megtartani, Herman — nála nem szokatlan pénzszűkében lévén
  — elment barátjához, Szily Kálmánhoz, s elpanaszolta neki, hogy nincs egy
  fityingje sem, hogy menjen le így kortesútra. Szily adott neki kölcsön 35
  forintot. „Amikor Herman Szegedről a mandátummal a zsebében visszakerült —
  még tizenhét forintot visszahozott belőle. Azóta se került a parlamentbe
  ilyen tiszta mandátum.” Ezzel kezdődött Herman Ottó parlamenti szereplése
  Szeged képviseletében, és tartott nyolc éven át, 1887. június 17-ig. De
  mit is csinált Herman a magyar Parlamentben? Felszólalt a nemzetiségi
  kérdésben, a zsidókérdésben, de szorgalmazta a homoki szőlőtermelést is a
  filoxéra miatt. Ezenkívül a kultúra minden területével foglalkozott:
  sürgette a mezőgazdasági szakoktatást az Alföldön, bírálta a Magyar
  Tudományos Akadémia és az egyetemek munkáját. 1886- ban a pesti jogi
  karról megállapította, hogy öt egyetemi tanár még sosem írt tudományos
  értekezést, kettő pedig még csak hírlapi cikkecskét sem. Követelte is,
  hogy az egyetemi tanári kinevezésnek a tudományos értekezések színvonala,
  tartalmi értéke legyen a feltétele. És végül Herman Ottó nagyon sokszor
  foglalt állást az egyetem Szegedre való telepítésének ügyében. Mint
  képviselő, gyakran megfordult Szegeden. Megtartotta szokásos pünkösdi
  választói beszámolóját, járt Tápén megnézni a gyékényfonást.
  Képviselőválasztási veresége után sem szakadt meg a kapcsolata Szegeddel:
  1894-ben például részt vett itt népgyűlésen, színházi előadáson, lakomán.
  1895-ben (ekkor már hatvan éves) kétszer is megfordult Szegeden: Madarász
  Viktorral, a Nemzeti Múzeum madártani osztályának munkatársával jött ide
  néprajzi gyűjtésre, majd júliusban egyedül jött vissza. Rengeteg tanyai
  specialitást vásárolt össze: tarhonyáskavaró-kanalat, rühelőtartót,
  botokat, bicskákat, kampósszögeket. Közben levelezett Tömörkény Istvánnal
  a pásztorélet dolgában, majd 1899-ben szintén kétszer jött Szegedre.
  Augusztus 20- án ünnepelte negyedszázados fennállását az alsóvárosi
  népkör, erre hívták meg. Itt az esti banketten beszédet is mondott:
  visszavonult, úgymond, a politikától, s életének utolsó éveit a magyarság
  űsi foglalkozásainak kutatására szenteli. Két hét múlva újra Szegeden
  járt, az országos kiállítást nézte meg, de az nem igazán nyújtott számára
  újat, így inkább kiment Pálfy Antal gazda tanyájára, ott töltötte az
  éjszakát, s közben szorgalmasan jegyzetelt. Utolsó szegedi látogatására
  1904. november 20-án került sor: „Egyetem és nemzeti szellem” címmel
  tartott előadást a Dugonics Társaság fölolvasóülésén a városháza
  közgyulési termében. Herman Ottó 1914. december 27-én hunyt el Budapesten.
  Hamvait a Kerepesi temetőből 1965-ben áthelyezték Miskolc-Felsőhámor
  temetőjébe, édesapja mellé. Miskolcon szobra, a Szeleta-barlangban
  emléktáblája van, ezenkívül neveztek el róla múzeumot, emlékházat,
  emlékparkot, utcát, gimnáziumot, barlangot, kőfülkét és egykoron a
  szentléleki turistaházat is. Szegeden a róla elnevezett horgászegyesület
  őrzi emlékét, valamint a Dóm tér déli részén megtaláljuk Székely Károly
  által alkotott domborművét is. -Barna Béla`;

  textmegyeri = `Titulusok
  igazgató: 1982.02.01. - 2004.06.30.
  nevelőtanár: 2004.07.01. - 2006.02.17.
  Írások
  Erdélyi Ágnes: Ancsa
  Almási Tibor: Megyeri Árpádné emlékezete`;

  textkozma = `Szomorúan és mély fájdalommal tudatjuk, hogy a Herman Ottó Kollégium első igazgatója, Dr. Kozma László, a Pécsi Tudományegyetem professor emeritusa, a Magyar Tudományos Akadémia doktora életének 81. évében, 2013. április 9-én váratlanul elhunyt.


  Életrajza:
  Dr. Kozma László (Gyoma, 1933. február 27. - Budapest, 2013. április 9.)
  
  A békési Szegedi Kis István Gimnáziumban érettségizett 1953-ban. Egyetemi tanulmányait a Szegedi Tudományegyetem fizika-matematika szakán végezte 1953-1957 között. 1962-ben egyetemi doktori címet szerzett (Szeged), 1969-ben lett a fizika tudományok kandidátusa (Budapest), 1977-ben a fizika tudományok doktora (Minszk). 1962-1982 között a szegedi József Attila Tudományegyetem oktatója (tanársegéd, adjunktus, docens), 1972-1982 között a szegedi Hermann Ottó kollégium igazgatója. 1982-2003 között a pécsi Janus Pannonius Tudományegyetem egyetemi tanára. A JPTE Tanárképző Karának dékánja 1984-1989 között, a Természettudományi Kar megbízott dékánja 1997-1998-ban. Aktív szerepet vállalt a tanárképző főiskola egyetemmé fejlesztésében, az egyetemi szintű fizika szakos képzés oktatási-kutatási hátterének megteremtésében. 1983-1998 között a JPTE Fizika Tanszék tanszékvezető egyetemi tanára, az impulzus gázlézerek, a lézerspektroszkópiai, ezen belül a lézerindukált fluoreszcencia kutatások megalapozója és vezetője Pécsett. Kutatási területe: molekuláris lumineszcencia elméleti és kísérleti kérdéseinek vizsgálata, hangolható festéklézerek vizsgálata, fizikai módszerek biomedikális és kriminalisztikai alkalmazási lehetőségének vizsgálata. Behatóan foglalkozott a lézerek orvosi alkalmazása során lejátszódó folyamatokkal és az okmánybiztosítással. 1999-től a JPTE TTK FEEFI (később PTE FEEK) tanára, majd 2003-tól professor emeritusa, oktatási-kutatási területe a tudomány-technika-társadalom kapcsolatrendszere.
  
  
  Több mint kétszáz publikáció, könyvek, jegyzetek, szabadalmak főződnek a nevéhez.
  
  
  Kitüntetései:
  Miniszteri dicséret (1967)
  Schmid Rezső-díj (1971)
  Oktatásügy Kiváló Dolgozója (1968, 1974)
  Kiváló Munkáért minisztertanácsi kitüntetés (1979)
  Ifjúságért Érdemérem (1982)
  Pro Universitate Quinqueecclesiensi Emlékérem (1998)
  Nemzetbiztonságért Emlékplakett arany fokozat (1998)
  Tudományos Munkáért Belügyi Emlékérem (2000).`;
}
