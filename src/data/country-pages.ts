/**
 * Per-country data for /best-iptv-service-in/[country] programmatic pages.
 *
 * Quality bar: every entry below must contain unique broadcaster names,
 * unique sports leagues, and country-specific intro copy so each generated
 * page passes the 40% unique-content threshold. Countries without enough
 * uniquely sourceable signal are intentionally excluded and remain only
 * on the /countries hub page.
 */

export type CountryDetail = {
  name: string;
  slug: string;
  code: string; // ISO 3166-1 alpha-2
  region: string;
  capital: string;
  languages: string[];
  currency: { name: string; code: string };
  topBroadcasters: string[];
  topSportsLeagues: string[];
  intro: string;
  channelHighlights: string;
  sportsHighlights: string;
};

export const COUNTRY_PAGES: CountryDetail[] = [
  {
    name: "United States",
    slug: "united-states",
    code: "US",
    region: "North America",
    capital: "Washington, D.C.",
    languages: ["English", "Spanish"],
    currency: { name: "US Dollar", code: "USD" },
    topBroadcasters: [
      "Major US broadcast networks",
      "Cable-replacement entertainment tier",
      "Premium movie networks",
      "24-hour US news channels",
      "Regional sports networks",
    ],
    topSportsLeagues: [
      "NFL",
      "NBA",
      "MLB",
      "NHL",
      "MLS",
      "NCAA football and basketball",
    ],
    intro:
      "The average US household spends $147 a month on cable, broadband, and two streaming services combined. IPTV UPG consolidates the entertainment side of that bill into a single login. The full broadcast network stack in 4K, regional sports networks, the premium movie tier, and the cable-replacement entertainment package ship on one login at $7.50 a month. The 7-day on-screen guide gives TV the same one-screen feel the cable box used to.",
    channelHighlights:
      "All major US broadcast networks in 4K, the local affiliate feeds for major US markets, the cable-replacement entertainment tier (drama, comedy, lifestyle, kids), 24-hour US news in English and Spanish, and the premium movie networks. The 7-day on-screen guide carries forward programming for every channel.",
    sportsHighlights:
      "NFL, NBA, MLB, NHL, MLS, college football, and college basketball. Motorsport coverage for NASCAR, IndyCar, and Formula 1. Combat sports (UFC, boxing) when broadcast in the US market. International football overlay covering the top European leagues for fans of both domestic and global competitions.",
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    code: "GB",
    region: "Europe",
    capital: "London",
    languages: ["English"],
    currency: { name: "Pound Sterling", code: "GBP" },
    topBroadcasters: [
      "Full UK terrestrial broadcast stack",
      "UK premium pay-TV entertainment tier",
      "UK premium movie tier",
      "24-hour UK news",
      "Regional and Welsh-language feeds",
    ],
    topSportsLeagues: [
      "Top-flight English football",
      "Second-tier and domestic cup football",
      "Premiership Rugby and Six Nations",
      "England cricket (Test, ODI, T20)",
      "Formula 1 and MotoGP",
    ],
    intro:
      "A typical UK household pays the licence fee, a cable or pay-TV bill, and a couple of streaming subscriptions. The combined monthly cost runs over £100 once you add the sports tier and the kids channels. IPTV UPG carries the full UK terrestrial broadcast stack, the UK premium pay-TV tier, and the top-flight football rights on a single $7.50 monthly cost. UK expats abroad use the same login to restore the UK catch-up layer that gets geo-restricted in every other country.",
    channelHighlights:
      "The full UK terrestrial broadcast stack in HD and 4K, the UK premium entertainment tier (movies, drama, kids, lifestyle), 24-hour news in English, and the regional and Welsh-language feeds. Every channel ships with a 7-day on-screen guide.",
    sportsHighlights:
      "The top-flight English football rights bundle, the European club competition coverage, the rugby union and rugby league tiers, the cricket and golf rights. International US major-league sports overlay (NFL, NBA, MLB, NHL) and motorsport (F1, MotoGP) included on the same login.",
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    region: "North America",
    capital: "Ottawa",
    languages: ["English", "French"],
    currency: { name: "Canadian Dollar", code: "CAD" },
    topBroadcasters: [
      "Canadian English-language broadcasters",
      "Quebec French-language broadcasters",
      "Canadian sports networks",
      "US broadcast network feeds",
      "Premium movie and entertainment tier",
    ],
    topSportsLeagues: [
      "NHL",
      "CFL",
      "NBA (Canadian-market coverage)",
      "MLB (Canadian-market coverage)",
      "MLS Canada",
    ],
    intro:
      "Canadian TV bills include the CRTC skinny basic plus the inevitable sports add-on through Bell, Rogers, or Shaw. The combined monthly cost runs above CAD $80 for a household that wants the hockey, the NFL, and the US feeds. IPTV UPG carries the English-language broadcasters, the Quebec French-language lineup, the Canadian sports tier, and the US network feeds on one login at $7.50 a month.",
    channelHighlights:
      "Canadian English-language broadcasters in HD and 4K, Quebec French-language entertainment and news channels, the kids and lifestyle tier, plus the US broadcast network feeds (ABC, NBC, CBS, Fox) for the cross-border sports overlay Canadian households want.",
    sportsHighlights:
      "Full NHL coverage across the Canadian sports networks (every Canadian team plus the US matchups), CFL regular season and Grey Cup, NBA and MLB Canadian-market coverage, Canadian Soccer Championship, and MLS Canadian-club coverage.",
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    region: "Europe",
    capital: "Berlin",
    languages: ["German"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: [
      "German public broadcasters",
      "Regional Dritte channels",
      "Private commercial broadcasters",
      "German pay-TV movie and drama tier",
      "24-hour German news",
    ],
    topSportsLeagues: [
      "Top-flight German football",
      "Second-tier and domestic cup football",
      "European club competition",
      "Handball top flight",
      "German ice hockey",
    ],
    intro:
      "German pay-TV is fragmented across multiple sports and movie packages. Households often need two of them to follow top-flight football properly, and the combined cost runs above €60 a month. IPTV UPG carries the German public broadcasters, the private commercial networks, the German pay-TV entertainment tier, and the top-flight German football rights on a single $7.50 monthly account.",
    channelHighlights:
      "The German public broadcasters plus the regional Dritte channels, the private commercial free-to-air lineup, the German pay-TV movie and drama tier, and 24-hour German-language news. Audio stays in German throughout.",
    sportsHighlights:
      "Top-flight German football matchdays, the second-tier league, domestic cup football, European club competition nights, handball top flight, German ice hockey, and Formula 1 on the German motorsport tier.",
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    region: "Europe",
    capital: "Paris",
    languages: ["French"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: [
      "French public broadcasters",
      "Private commercial channels (TNT free-to-air)",
      "French pay-TV premium tier",
      "French sports networks",
      "24-hour French news",
    ],
    topSportsLeagues: [
      "Top-flight French football",
      "Top 14 Rugby",
      "Roland-Garros tennis",
      "Tour de France cycling",
      "Formula 1 (French coverage)",
    ],
    intro:
      "French TV rights move between several sports and entertainment packages each season. Following one team often means paying for two or three products. IPTV UPG carries the French public broadcasters, the full TNT free-to-air lineup, the French pay-TV premium tier, and the French sports networks on a single $7.50 monthly account.",
    channelHighlights:
      "The French public broadcasters, the TNT free-to-air commercial lineup, the French pay-TV premium movies and drama tier, the French sports networks, and 24-hour French-language news. Audio stays in French throughout.",
    sportsHighlights:
      "Top-flight French football, Top 14 rugby, Roland-Garros tennis, the Tour de France cycling Grand Tour, and Formula 1 with French commentary.",
  },
  {
    name: "Spain",
    slug: "spain",
    code: "ES",
    region: "Europe",
    capital: "Madrid",
    languages: ["Spanish", "Catalan", "Basque", "Galician"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: [
      "Spanish public broadcasters",
      "Private commercial network families",
      "Catalan, Basque, and Galician regional broadcasters",
      "Spanish pay-TV premium tier",
      "24-hour Spanish news",
    ],
    topSportsLeagues: [
      "Top-flight Spanish football",
      "Spanish domestic cup",
      "European club competition",
      "ACB basketball",
      "Vuelta a España cycling",
    ],
    intro:
      "Spanish football rights move between multiple platforms each season, leaving fans paying for two or three packages to follow the top flight and European nights together. IPTV UPG carries the Spanish public broadcasters, the private commercial network families, the regional channels for Catalonia, the Basque Country, and Galicia, the Spanish pay-TV premium tier, and the top-flight football rights bundle on a single $7.50 monthly account.",
    channelHighlights:
      "Spanish public broadcasters, the private commercial network families (general entertainment, kids, news), regional channels for Catalonia, the Basque Country, Galicia, and Andalusia in their respective languages, and the Spanish pay-TV premium movies and drama tier.",
    sportsHighlights:
      "Top-flight Spanish football, the Spanish domestic cup, European club competition nights, ACB basketball, Spanish Grand Prix Formula 1 coverage, and the Vuelta a España cycling Grand Tour.",
  },
  {
    name: "Italy",
    slug: "italy",
    code: "IT",
    region: "Europe",
    capital: "Rome",
    languages: ["Italian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: [
      "Italian public broadcasters",
      "Private commercial network families",
      "Italian pay-TV movie and drama tier",
      "Italian sports networks",
      "24-hour Italian news",
    ],
    topSportsLeagues: [
      "Top-flight Italian football",
      "Italian domestic cup",
      "Second-tier Italian football",
      "Italian top-flight basketball",
      "MotoGP and Formula 1",
      "Giro d'Italia cycling",
    ],
    intro:
      "Italian football rights split across multiple platforms each season, and European nights move between yet another set of providers. IPTV UPG carries the Italian public broadcasters, the private commercial network families, the Italian pay-TV premium tier, and the top-flight football rights bundle on one account at $7.50 a month.",
    channelHighlights:
      "The Italian public broadcaster channels, the private commercial network families (general entertainment, movies, kids, news), and the Italian pay-TV premium movies and drama tier. Audio stays in Italian throughout.",
    sportsHighlights:
      "Top-flight Italian football, Italian domestic cup knockout rounds, second-tier football fixtures, European club competition nights, Italian top-flight basketball, MotoGP, Formula 1, and the Giro d'Italia cycling Grand Tour.",
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    code: "NL",
    region: "Europe",
    capital: "Amsterdam",
    languages: ["Dutch"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["NPO 1", "NPO 2", "NPO 3", "RTL 4", "RTL 5", "SBS6", "Net5", "Veronica"],
    topSportsLeagues: ["Eredivisie", "KNVB Beker", "Eredivisie Vrouwen", "Eredivisie Hockey"],
    intro:
      "Dutch TV is split across public broadcaster NPO and several commercial network families, with top-flight football rights moving between operators every few years. IPTV UPG carries NPO 1/2/3, the major commercial entertainment networks (RTL 4/5/7/8, SBS6, Net5, Veronica), the public news and politics channels, and the Dutch-language sports tier — one login covers the household.",
    channelHighlights:
      "NPO 1, NPO 2, NPO 3, NPO Politiek, NPO Nieuws; RTL 4, RTL 5, RTL 7, RTL 8, RTL Z; SBS6, Net5, Veronica, SBS9; ESPN NL channels with all Eredivisie matches; Ziggo Sport tier; plus 24Kitchen, Discovery NL, National Geographic NL.",
    sportsHighlights:
      "Every Eredivisie matchday on ESPN NL, KNVB Beker domestic cup, Eredivisie Vrouwen women's top flight, plus the Dutch national team's qualifiers and major-tournament games. UEFA Champions League nights via RTL 7 and Ziggo Sport.",
  },
  {
    name: "Belgium",
    slug: "belgium",
    code: "BE",
    region: "Europe",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["VRT (één, Canvas)", "VTM", "RTL TVI", "La Une (RTBF)", "Tipik", "Play4", "Play5"],
    topSportsLeagues: ["Belgian Pro League", "Croky Cup", "Belgian Cycling Classics"],
    intro:
      "Belgian TV splits along language lines — Flemish viewers run on VRT and DPG Media, Walloons on RTBF and RTL Belgium. IPTV UPG carries both sides on one login: VRT 1, Canvas, Ketnet, VTM, Play4, Play5 in Dutch; RTBF La Une, Tipik, La Trois, RTL TVI, Plug RTL, Club RTL in French — plus the Belgian Pro League rights through Eleven Sports / DAZN Belgium.",
    channelHighlights:
      "Flemish: VRT 1, VRT Canvas, VRT Ketnet, VTM, VTM 2, VTM 3, VTM 4, Play4, Play5, Play6, Play7. Walloon: La Une, Tipik, La Trois (RTBF), RTL TVI, Plug RTL, Club RTL, AB3. Plus Eleven Pro League sports channels and Voo Sport.",
    sportsHighlights:
      "Belgian Pro League matches via Eleven Sports / DAZN Belgium, Croky Cup, Belgian Cycling Classics (Tour of Flanders, Liège-Bastogne-Liège, Gent-Wevelgem), plus UEFA Champions League and Europa League nights.",
  },
  {
    name: "Portugal",
    slug: "portugal",
    code: "PT",
    region: "Europe",
    capital: "Lisbon",
    languages: ["Portuguese"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTP1", "RTP2", "SIC", "TVI", "RTP3", "SIC Notícias", "CMTV"],
    topSportsLeagues: ["Primeira Liga", "Taça de Portugal", "Liga Portugal 2", "Volta a Portugal"],
    intro:
      "Following Benfica, Porto and Sporting in Portugal historically meant paying for both Sport TV and Eleven Sports. IPTV UPG bundles the full Primeira Liga rights, the RTP and SIC free-to-air channels, TVI, plus the Sport TV premium tier — and adds Brazilian channels for Portuguese-speaking expats outside the EU.",
    channelHighlights:
      "RTP1, RTP2, RTP3, RTP Memória, RTP Internacional; SIC, SIC Notícias, SIC Mulher, SIC Radical, SIC Kids; TVI, TVI Reality, TVI Ficção, TVI Internacional; pay-TV Sport TV 1–6, Eleven Sports Portugal, plus Cinemundo and TVCine premium movie tiers.",
    sportsHighlights:
      "All Primeira Liga matches via Sport TV and Eleven Sports feeds, Taça de Portugal cup ties, Liga Portugal 2 second-division coverage, plus the Volta a Portugal cycling stage race and Portuguese national team qualifiers.",
  },
  {
    name: "Sweden",
    slug: "sweden",
    code: "SE",
    region: "Europe",
    capital: "Stockholm",
    languages: ["Swedish"],
    currency: { name: "Swedish Krona", code: "SEK" },
    topBroadcasters: ["SVT1", "SVT2", "TV3", "TV4", "Kanal 5", "Kanal 9", "TV6"],
    topSportsLeagues: ["Allsvenskan (football)", "SHL (Ice Hockey)", "HockeyAllsvenskan", "Damallsvenskan"],
    intro:
      "Swedish TV runs across SVT (public), TV4 Group and Viaplay Group — and Viaplay alone tries to charge for football, hockey and movies in separate tiers. IPTV UPG carries SVT1, SVT2, SVT Barn, TV3, TV4, Kanal 5, Kanal 9, plus the Viasat sports lineup with Allsvenskan and SHL hockey for $7.50/month.",
    channelHighlights:
      "SVT1, SVT2, SVT Barn, SVT24, Kunskapskanalen; TV3, TV4, TV4 Fakta, TV4 Film; Kanal 5, Kanal 9, Kanal 11; Sjuan; plus the Viasat sports and movie tiers with V Sport Premium, V Sport Fotboll, V Sport Hockey.",
    sportsHighlights:
      "Allsvenskan top-flight football, SHL (Svenska Hockeyligan), HockeyAllsvenskan second-tier hockey, Damallsvenskan women's football, plus Tre Kronor men's national team and Damlandslaget women's national team during international windows.",
  },
  {
    name: "Norway",
    slug: "norway",
    code: "NO",
    region: "Europe",
    capital: "Oslo",
    languages: ["Norwegian"],
    currency: { name: "Norwegian Krone", code: "NOK" },
    topBroadcasters: ["NRK1", "NRK2", "TV 2", "TVNorge", "TV3 Norge", "TV 2 Sport"],
    topSportsLeagues: ["Eliteserien", "OBOS-ligaen", "GET-ligaen (Ice Hockey)", "Toppserien"],
    intro:
      "Norway's TV market is small but expensive — NRK is licence-funded, TV 2 is the main private broadcaster, and Eliteserien football rights sit with TV 2 Sport. IPTV UPG carries NRK1, NRK2, NRK3, NRK Super, TV 2, TVNorge, TV 2 Sport channels and the Viaplay Group lineup.",
    channelHighlights:
      "NRK1, NRK2, NRK3, NRK Super (kids), NRK Sport; TV 2, TV 2 Nyhetskanalen, TV 2 Sportskanalen; TVNorge, FEM, MAX, VOX, TLC Norge; TV3 Norge, V Sport+, V Film Premiere.",
    sportsHighlights:
      "Eliteserien Norwegian top-flight football, OBOS-ligaen second division, GET-ligaen ice hockey, Toppserien women's football, plus cross-country skiing and biathlon coverage on NRK during winter season.",
  },
  {
    name: "Denmark",
    slug: "denmark",
    code: "DK",
    region: "Europe",
    capital: "Copenhagen",
    languages: ["Danish"],
    currency: { name: "Danish Krone", code: "DKK" },
    topBroadcasters: ["DR1", "DR2", "TV 2 Danmark", "TV3", "Kanal 4", "Kanal 5", "6'eren"],
    topSportsLeagues: ["Superliga", "1. Division", "Liga (Handball)", "Metal Ligaen (Ice Hockey)"],
    intro:
      "Danish TV centres on DR (public) and TV 2 Danmark, with Superliga football rights bouncing between TV3 Sport, TV 2 Sport and Discovery+/Max. IPTV UPG carries all four major broadcasters, the Discovery channels and the sports tier.",
    channelHighlights:
      "DR1, DR2, DR Ramasjang, DR Ultra; TV 2, TV 2 Zulu, TV 2 Charlie, TV 2 News, TV 2 Sport; TV3, TV3+, TV3 Sport, TV3 Puls; Kanal 4, Kanal 5, 6'eren, Eurosport Danmark.",
    sportsHighlights:
      "Superliga top-flight football, 1. Division, Danish men's and women's handball Ligaen — handball is genuinely a big deal in Denmark — Metal Ligaen ice hockey, plus Danish national football team qualifiers.",
  },
  {
    name: "Finland",
    slug: "finland",
    code: "FI",
    region: "Europe",
    capital: "Helsinki",
    languages: ["Finnish", "Swedish"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["Yle TV1", "Yle TV2", "MTV3", "Nelonen", "Sub", "Jim"],
    topSportsLeagues: ["Veikkausliiga", "Liiga (Ice Hockey)", "Mestis", "Korisliiga"],
    intro:
      "Finnish TV is dominated by Yle (public), MTV3 and Nelonen, with Liiga ice hockey rights on Telia and the Nelonen group. IPTV UPG bundles Yle TV1/TV2/Teema/Fem, MTV3, Sub, AVA, Nelonen, Jim and the C More sports tier for the full Veikkausliiga and Liiga coverage.",
    channelHighlights:
      "Yle TV1, Yle TV2, Yle Teema & Fem, Yle Areena; MTV3, Sub, AVA, MTV Max, MTV Sport 1; Nelonen, Jim, Liv, Hero, Nelonen Pro; plus Discovery Finland and Eurosport Finland.",
    sportsHighlights:
      "Veikkausliiga top-flight football, Liiga (Finnish ice hockey league — the actual headline product, not football), Mestis second-tier hockey, Korisliiga basketball, plus Lions and Naisleijonat national team coverage.",
  },
  {
    name: "Poland",
    slug: "poland",
    code: "PL",
    region: "Europe",
    capital: "Warsaw",
    languages: ["Polish"],
    currency: { name: "Polish Zloty", code: "PLN" },
    topBroadcasters: ["TVP1", "TVP2", "TVN", "Polsat", "TV4", "TVN24", "Polsat News"],
    topSportsLeagues: ["Ekstraklasa", "PlusLiga (Volleyball)", "Speedway Ekstraliga", "Tauron Basket Liga"],
    intro:
      "Polish TV is built around TVP (public), TVN and Polsat — and Polsat Sport plus Canal+ Sport split the Ekstraklasa rights. IPTV UPG carries TVP1, TVP2, TVN, Polsat, the full Polsat Sport tier and Canal+ Sport channels on a single login, with PlusLiga volleyball and Polish speedway included.",
    channelHighlights:
      "TVP1, TVP2, TVP3, TVP Info, TVP Polonia, TVP Kultura, TVP Historia, TVP Sport; TVN, TVN24, TVN Style, TVN Fabuła; Polsat, Polsat 2, Polsat News, Polsat Sport, Polsat Sport Extra, Polsat Sport Premium; Canal+ Sport, Canal+ Premium.",
    sportsHighlights:
      "Ekstraklasa top-flight football, PlusLiga men's volleyball — volleyball is unusually popular in Poland, not a niche — Speedway Ekstraliga (Polish speedway is the world's top league), Tauron Basket Liga basketball, plus Polish national football team qualifiers.",
  },
  {
    name: "Greece",
    slug: "greece",
    code: "GR",
    region: "Europe",
    capital: "Athens",
    languages: ["Greek"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["ERT1", "ERT2", "ANT1", "ALPHA TV", "Star Channel", "Skai TV", "Open Beyond"],
    topSportsLeagues: ["Super League Greece", "Greek Cup", "Basket League", "Volley League"],
    intro:
      "Greek football rights sit with Nova and Cosmote TV, splitting the Super League between the two providers and making fans pay for both. IPTV UPG carries ERT1, ERT2, ANT1, Star, Alpha and Skai TV plus the Nova Sports and Cosmote Sport channels with Super League and Greek Cup coverage.",
    channelHighlights:
      "ERT1, ERT2, ERT3, ERT Sports; ANT1, ANT1 Europe; Alpha TV, Star Channel, MEGA TV, Open Beyond, Skai TV; pay-TV Nova Sports 1–6, Cosmote Sport 1–9, plus Cinema channels Nova Cinema and Cosmote Cinema.",
    sportsHighlights:
      "Super League Greece football (Olympiacos, Panathinaikos, AEK, PAOK), Greek Cup, Basket League with Olympiacos and Panathinaikos basketball, Volley League — Greek volleyball has serious clubs — plus UEFA Champions League and Europa League nights.",
  },
  {
    name: "Turkey",
    slug: "turkey",
    code: "TR",
    region: "Europe / Middle East",
    capital: "Ankara",
    languages: ["Turkish"],
    currency: { name: "Turkish Lira", code: "TRY" },
    topBroadcasters: ["TRT 1", "Show TV", "Star TV", "Kanal D", "ATV", "FOX Türkiye", "TV8"],
    topSportsLeagues: ["Süper Lig", "Türkiye Kupası", "Basketbol Süper Ligi", "Sultanlar Ligi"],
    intro:
      "Turkish football rights have shifted between several pay-TV operators over the past decade, leaving fans juggling multiple subscriptions. IPTV UPG consolidates the Turkish-language entertainment, news, and sports tier alongside TRT 1, Show TV, Star TV, Kanal D, ATV, FOX Türkiye, and the wider domestic news lineup — one login covers the household.",
    channelHighlights:
      "TRT 1, TRT 2, TRT Haber, TRT Spor, TRT Çocuk, TRT Müzik, TRT World (English); Show TV, Star TV, Kanal D, ATV, FOX Türkiye, TV8, NTV, CNN Türk, Habertürk; plus beIN Sports HD 1–4 Türkiye and S Sport channels.",
    sportsHighlights:
      "Süper Lig football (Galatasaray, Fenerbahçe, Beşiktaş, Trabzonspor), Türkiye Kupası, Basketbol Süper Ligi (men's basketball — Anadolu Efes, Fenerbahçe Beko), Sultanlar Ligi women's volleyball, plus Turkish national team qualifiers.",
  },
  {
    name: "Russia",
    slug: "russia",
    code: "RU",
    region: "Europe / Asia",
    capital: "Moscow",
    languages: ["Russian"],
    currency: { name: "Russian Ruble", code: "RUB" },
    topBroadcasters: ["Channel One (Pervyi)", "Russia-1", "NTV", "TNT", "STS", "Match TV", "Ren TV"],
    topSportsLeagues: ["RPL (Russian Premier League)", "KHL (Ice Hockey)", "VTB United League"],
    intro:
      "Russian-language TV is a major diaspora market — IPTV UPG carries the full Russian lineup for expats across Europe, Israel, the US and Central Asia: Channel One, Russia-1, NTV, TNT, STS, REN TV, plus Match TV with RPL football and KHL ice hockey.",
    channelHighlights:
      "Channel One (Первый канал), Russia-1 (Россия-1), Russia-K (Культура), Russia-24, NTV, TNT, STS, Domashniy, TV-3, Pyatnitsa, REN TV, Zvezda, Match TV, plus KHL TV and Match Premier sports tiers.",
    sportsHighlights:
      "Russian Premier League football, KHL (Kontinental Hockey League — one of the top two ice hockey leagues globally), VTB United League basketball, plus the Russian national team in non-sanctioned competitions and Russian boxing/MMA cards.",
  },
  {
    name: "Brazil",
    slug: "brazil",
    code: "BR",
    region: "Latin America",
    capital: "Brasília",
    languages: ["Portuguese"],
    currency: { name: "Brazilian Real", code: "BRL" },
    topBroadcasters: [
      "Major Brazilian broadcaster families",
      "Brazilian 24-hour news channels",
      "Brazilian pay-TV movie and drama tier",
      "Brazilian sports networks",
    ],
    topSportsLeagues: [
      "Top-flight Brazilian football (Série A)",
      "Brazilian domestic cup",
      "Second-tier Brazilian football (Série B)",
      "South American club competitions",
      "Brazilian top-flight basketball",
    ],
    intro:
      "Brazilian football rights move between several platforms each season. Following one club often means juggling three or four products. IPTV UPG carries the major Brazilian broadcaster families, the Brazilian pay-TV movie and entertainment tier, the sports networks, and the top-flight football rights on one $7.50 monthly login.",
    channelHighlights:
      "The major Brazilian broadcaster families (general entertainment, news, kids), the Brazilian pay-TV movie and drama tier, lifestyle and documentary channels in Brazilian Portuguese, and 24-hour news. All audio stays in Portuguese.",
    sportsHighlights:
      "Top-flight Brazilian football (Série A) and second-tier (Série B), the Brazilian domestic cup, the major South American club competitions, Brazilian top-flight basketball, and the Brazilian national football team in regional qualifiers.",
  },
  {
    name: "Mexico",
    slug: "mexico",
    code: "MX",
    region: "Latin America",
    capital: "Mexico City",
    languages: ["Spanish"],
    currency: { name: "Mexican Peso", code: "MXN" },
    topBroadcasters: ["Las Estrellas (Televisa)", "Canal 5", "Azteca Uno", "Azteca 7", "Imagen TV", "Canal 11"],
    topSportsLeagues: ["Liga MX", "Liga de Expansión MX", "LMB (Baseball)", "LNBP (Basketball)"],
    intro:
      "Mexican TV is dominated by the Televisa/Univision merger and TV Azteca, with Liga MX rights split across Fox Sports México, ESPN México, TUDN and Caliente TV. IPTV UPG bundles Las Estrellas, Canal 5, Azteca Uno, Azteca 7, plus the TUDN and ESPN México sports tiers — full Liga MX coverage.",
    channelHighlights:
      "Las Estrellas, Canal 5, FOROtv, De Película; Azteca Uno, Azteca 7, ADN40, A Más, Azteca Cinema; Imagen TV, Excélsior TV; pay-TV TUDN, Fox Sports México, ESPN México 1–4, Cinema Gold; plus Telemundo Internacional and Univision feeds for US expats.",
    sportsHighlights:
      "Liga MX Apertura and Clausura tournaments, Liga de Expansión MX second division, LMB Liga Mexicana de Béisbol (baseball is huge in Mexico, not a US-only sport), LNBP basketball, plus the Mexican national football team in CONCACAF qualifiers and Gold Cup.",
  },
  {
    name: "Argentina",
    slug: "argentina",
    code: "AR",
    region: "Latin America",
    capital: "Buenos Aires",
    languages: ["Spanish"],
    currency: { name: "Argentine Peso", code: "ARS" },
    topBroadcasters: ["Telefe", "El Trece", "América TV", "TV Pública", "Canal 9", "Net TV"],
    topSportsLeagues: ["Liga Profesional de Fútbol", "Copa Argentina", "LNB Basketball", "Top 12 Rugby"],
    intro:
      "Argentine football rights are notoriously split — TyC Sports and ESPN Premium between them carry the Liga Profesional, while Disney+ took the Copa Argentina. IPTV UPG bundles Telefe, El Trece, América TV, TV Pública plus TyC Sports and ESPN Premium for full Liga Profesional access.",
    channelHighlights:
      "Telefe, El Trece, América TV, TV Pública, Canal 9, Net TV, El Nueve; news C5N, TN, A24, LN+, Crónica HD; sports TyC Sports, ESPN Premium, DirecTV Sports, Fox Sports Argentina; plus Encuentro and Pakapaka cultural channels.",
    sportsHighlights:
      "Liga Profesional de Fútbol (Boca, River, Racing, Independiente, San Lorenzo plus the rest of the top flight), Copa Argentina, Copa Libertadores and Sudamericana, LNB basketball, Top 12 rugby, plus the Albiceleste national team in CONMEBOL qualifiers.",
  },
  {
    name: "Colombia",
    slug: "colombia",
    code: "CO",
    region: "Latin America",
    capital: "Bogotá",
    languages: ["Spanish"],
    currency: { name: "Colombian Peso", code: "COP" },
    topBroadcasters: ["Caracol TV", "RCN TV", "Canal Uno", "Señal Colombia", "City TV", "Canal Capital"],
    topSportsLeagues: ["Categoría Primera A", "Copa Colombia", "Liga Colombiana de Béisbol Profesional"],
    intro:
      "Colombian football's Categoría Primera A runs on Win Sports, with Selección Colombia qualifiers shared between Caracol and RCN. IPTV UPG carries both major broadcasters plus Win Sports and the DirecTV Sports Latin America tier for full domestic and Copa Libertadores coverage on one $7.50/month account.",
    channelHighlights:
      "Caracol TV, RCN TV, Canal Uno, Señal Colombia, City TV, Canal Capital, Tele Antioquia, Telecaribe; news Noticias Caracol, Noticias RCN, NTN24, Blu Radio TV, Semana TV; sports Win Sports, ESPN Colombia, Fox Sports Colombia, DirecTV Sports.",
    sportsHighlights:
      "Categoría Primera A football (Atlético Nacional, Millonarios, América de Cali, Junior, Santa Fe), Copa Colombia, Liga Colombiana de Béisbol Profesional, plus Selección Colombia in CONMEBOL World Cup qualifiers.",
  },
  {
    name: "United Arab Emirates",
    slug: "united-arab-emirates",
    code: "AE",
    region: "Middle East",
    capital: "Abu Dhabi",
    languages: ["Arabic", "English"],
    currency: { name: "UAE Dirham", code: "AED" },
    topBroadcasters: ["Dubai TV", "Abu Dhabi TV", "Sharjah TV", "MBC 1", "MBC 2", "MBC Action", "Al Aan TV"],
    topSportsLeagues: ["UAE Pro League", "Asian Champions League", "IPL Cricket (in UAE windows)"],
    intro:
      "UAE viewers run beIN Sports for the football and OSN for entertainment, plus a free-to-air mix of local Emirati and pan-Arab MBC channels. IPTV UPG bundles Dubai TV, Abu Dhabi TV, MBC 1–4, MBC Action, OSN entertainment and the full beIN Sports MENA tier.",
    channelHighlights:
      "Dubai TV, Dubai One, Sama Dubai, Abu Dhabi TV, Abu Dhabi Emirates, Abu Dhabi Drama, Sharjah TV; MBC 1, MBC 2, MBC 3, MBC 4, MBC Action, MBC Drama, MBC Bollywood, MBC Masr, MBC Persia; OSN First, OSN Movies, OSN Series; plus Al Arabiya, Al Aan TV, Sky News Arabia.",
    sportsHighlights:
      "UAE Pro League football, AFC Asian Champions League, IPL cricket fixtures hosted in the UAE windows (Dubai, Abu Dhabi, Sharjah), Abu Dhabi Grand Prix F1 weekend, plus full beIN Sports coverage of European leagues for UAE-based expats.",
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    code: "SA",
    region: "Middle East",
    capital: "Riyadh",
    languages: ["Arabic"],
    currency: { name: "Saudi Riyal", code: "SAR" },
    topBroadcasters: ["Saudi TV (Channel 1)", "MBC 1", "Rotana Khalijia", "Al Ekhbariya", "SSC Sports"],
    topSportsLeagues: ["Saudi Pro League (Roshn)", "King's Cup", "AFC Champions League"],
    intro:
      "Saudi football rights are now anchored on SSC Sports (Saudi Sports Channels) after the Pro League's global signings, with international rights still on beIN Sports and Shahid VIP. IPTV UPG carries the full SSC tier, MBC 1–4, Rotana group and beIN Sports MENA.",
    channelHighlights:
      "Saudi Channel 1, Channel 2, Saudi Sports Channel; MBC 1, MBC 2, MBC 3, MBC 4, MBC Action, MBC Drama, MBC Masr, MBC Bollywood; Rotana Khalijia, Rotana Classic, Rotana Cinema, Rotana Music; Al Ekhbariya, Al Arabiya, Iqraa; SSC 1–5 with Saudi Pro League.",
    sportsHighlights:
      "Roshn Saudi League (Al-Nassr, Al-Hilal, Al-Ittihad, Al-Ahli — including Ronaldo, Benzema and Neymar fixtures), King's Cup, AFC Champions League, Saudi Arabian Grand Prix F1 weekend, plus boxing super-fights staged in Riyadh and Diriyah.",
  },
  {
    name: "Egypt",
    slug: "egypt",
    code: "EG",
    region: "Middle East / North Africa",
    capital: "Cairo",
    languages: ["Arabic"],
    currency: { name: "Egyptian Pound", code: "EGP" },
    topBroadcasters: ["Al Nahar TV", "DMC", "ON E", "MBC Masr", "Sada El Balad", "Egyptian TV (Channel 1)"],
    topSportsLeagues: ["Egyptian Premier League", "Egypt Cup", "CAF Champions League"],
    intro:
      "Egyptian football has Al Ahly and Zamalek as the headline product, with rights traditionally on beIN Sports MENA and now ON Time Sports. IPTV UPG bundles the Egyptian terrestrial broadcasters, MBC Masr, DMC, ON E and the ON Time Sports / beIN Sports tier on one login — every Premier League and CAF Champions League match included.",
    channelHighlights:
      "Egyptian TV Channel 1, Channel 2, Nile TV International, Nile Drama, Nile Cinema, Nile News; Al Nahar TV, Al Nahar Drama; DMC, DMC Drama, DMC Sport; ON E, ON Sport, ON Time Sports; MBC Masr 1 & 2; CBC, CBC Drama, CBC Sofra; plus Mehwar TV and Sada El Balad.",
    sportsHighlights:
      "Egyptian Premier League (Al Ahly, Zamalek, Pyramids FC, Al Masry, Ismaily, Ittihad), Egypt Cup, CAF Champions League and Confederation Cup, Egyptian national team in Africa Cup of Nations and World Cup qualifying.",
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
    region: "Asia",
    capital: "New Delhi",
    languages: ["Hindi", "English", "Tamil", "Telugu", "Bengali", "Marathi", "Kannada", "Malayalam"],
    currency: { name: "Indian Rupee", code: "INR" },
    topBroadcasters: [
      "Major Hindi general-entertainment broadcaster families",
      "Indian 24-hour news channels",
      "Tamil, Telugu, Bengali, Malayalam, Kannada, and Marathi regional broadcasters",
      "Indian sports networks",
      "Indian public broadcaster",
    ],
    topSportsLeagues: [
      "IPL T20 cricket (Indian top-flight)",
      "Indian international cricket (Tests, ODIs, T20Is)",
      "Indian top-flight football",
      "Pro Kabaddi League",
      "International cricket tournaments",
    ],
    intro:
      "Indian TV runs across 800+ channels in a dozen languages, with cricket as the headline product and multiple platforms holding the rights each season. IPTV UPG carries the major Hindi general-entertainment broadcaster families, the regional-language channels for Tamil, Telugu, Bengali, Malayalam, Kannada, and Marathi households, plus the Indian sports networks on one $7.50 monthly login.",
    channelHighlights:
      "Major Hindi general-entertainment broadcaster families, the Indian 24-hour news channels (English and Hindi), the regional-language entertainment channels in Tamil, Telugu, Bengali, Malayalam, Kannada, and Marathi, and the Indian sports networks. Movies in Hindi and regional languages on the pay-TV tier.",
    sportsHighlights:
      "IPL T20 cricket (the headline Indian sports product), the full Indian international cricket calendar (Tests, ODIs, T20Is), Indian top-flight football, Pro Kabaddi League (kabaddi is genuinely one of the biggest viewership products in India, not a niche), Indian top-flight hockey, and the major international cricket tournaments.",
  },
  {
    name: "Pakistan",
    slug: "pakistan",
    code: "PK",
    region: "Asia",
    capital: "Islamabad",
    languages: ["Urdu", "English", "Punjabi", "Sindhi"],
    currency: { name: "Pakistani Rupee", code: "PKR" },
    topBroadcasters: ["PTV Home", "Geo TV", "ARY Digital", "Hum TV", "Express News", "Dunya News"],
    topSportsLeagues: ["PSL Pakistan Super League (Cricket)", "Pakistan Premier League (Football)"],
    intro:
      "Pakistani cricket — PSL plus the national team — is the headline TV product, with rights on PTV Sports and A Sports. IPTV UPG bundles PTV Home, Geo, ARY Digital, Hum TV, Express, Dunya, plus PTV Sports and A Sports with full PSL coverage on one login. The same login works for Pakistani expats in the UK, Middle East, and US.",
    channelHighlights:
      "PTV Home, PTV News, PTV Sports, PTV Bolan, PTV Global, PTV World (English); Geo TV, Geo News, Geo Entertainment, Geo Tez, Geo Kahani; ARY Digital, ARY News, ARY Zauq, ARY Zindagi, ARY QTV; Hum TV, Hum News, Hum Sitaray, Hum Masala; Express News, Express Entertainment, Dunya News, BOL News.",
    sportsHighlights:
      "Pakistan Super League (PSL) T20 cricket, Pakistan national cricket team in ICC tournaments, Tests, ODIs and T20Is, Pakistan Premier League football, plus PCB domestic cricket (Quaid-e-Azam Trophy, Pakistan Cup).",
  },
  {
    name: "Philippines",
    slug: "philippines",
    code: "PH",
    region: "Asia",
    capital: "Manila",
    languages: ["Filipino (Tagalog)", "English"],
    currency: { name: "Philippine Peso", code: "PHP" },
    topBroadcasters: ["GMA Network", "ABS-CBN", "TV5", "PTV", "GMA News TV", "ANC"],
    topSportsLeagues: ["PBA (Philippine Basketball Association)", "UAAP", "NCAA Philippines", "PVL Volleyball"],
    intro:
      "Filipino TV runs on GMA, ABS-CBN (now Kapamilya Channel), TV5 and PTV, with PBA basketball as the biggest live sports product. IPTV UPG carries the full GMA and ABS-CBN lineup, TV5, plus the PBA, UAAP and PVL volleyball coverage on one login — same login restores the Philippine channels for OFWs in the Middle East, US, Canada, and Europe.",
    channelHighlights:
      "GMA Network, GMA News TV (now GTV), GMA Pinoy TV (international); ABS-CBN feed via Kapamilya Channel, A2Z, Cine Mo, Jeepney TV, Knowledge Channel, ANC; TV5, One PH, One Sports, AksyonTV; PTV 4, IBC 13, RPN 9, Net 25, INC TV.",
    sportsHighlights:
      "PBA Philippine Basketball Association (one of the world's oldest professional basketball leagues, founded 1975), UAAP and NCAA Philippines college basketball, PVL Premier Volleyball League, plus the Philippine men's basketball team Gilas Pilipinas in FIBA windows.",
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    region: "Oceania",
    capital: "Canberra",
    languages: ["English"],
    currency: { name: "Australian Dollar", code: "AUD" },
    topBroadcasters: [
      "Australian public broadcasters",
      "Australian commercial free-to-air networks",
      "Australian pay-TV sports and movie tier",
      "24-hour Australian news",
    ],
    topSportsLeagues: [
      "Australian Football League (AFL)",
      "National Rugby League (NRL)",
      "A-League football (Men and Women)",
      "Big Bash League T20 cricket",
      "Supercars Championship",
    ],
    intro:
      "Australian sports rights split across multiple commercial networks and the pay-TV tier, with the sports add-on alone running above AUD $30 a month. IPTV UPG carries the Australian public broadcasters, the commercial free-to-air networks, and the pay-TV sports and movie tier on one $7.50 monthly login. AFL, NRL, A-League, and the Big Bash all included.",
    channelHighlights:
      "The Australian public broadcaster channel families (general entertainment, news, kids), the commercial free-to-air networks with their multichannels, and the Australian pay-TV sports and movie tier. Audio in English throughout.",
    sportsHighlights:
      "AFL regular season and finals, NRL with State of Origin, A-League Men and Women, Big Bash League T20 cricket, the Australian Test cricket summer (including the Ashes), Supercars Championship, and the Australian national football and rugby team coverage.",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    region: "Oceania",
    capital: "Wellington",
    languages: ["English", "Māori"],
    currency: { name: "New Zealand Dollar", code: "NZD" },
    topBroadcasters: ["TVNZ 1", "TVNZ 2", "Three", "Bravo", "Māori Television", "Sky Sport NZ"],
    topSportsLeagues: ["Super Rugby Pacific", "All Blacks Tests", "ANZ Premiership Netball", "NZ National League"],
    intro:
      "Kiwi TV runs on TVNZ, Three (Discovery NZ) and Sky New Zealand — and Sky Sport alone is NZD$40+/month for the rugby. IPTV UPG bundles TVNZ 1 & 2, Three, Bravo, Māori Television, plus the full Sky Sport NZ tier with Super Rugby and All Blacks.",
    channelHighlights:
      "TVNZ 1, TVNZ 2, TVNZ Duke; Three, Bravo, Eden, Rush; Māori Television, Te Reo channel; Sky Sport 1–9, Sky Sport Now, Sky Open, Vibe, Jones, plus Discovery Channel NZ and Nat Geo NZ.",
    sportsHighlights:
      "Super Rugby Pacific with Chiefs, Crusaders, Hurricanes, Blues and Highlanders, All Blacks Test matches and Rugby Championship, NPC provincial rugby, ANZ Premiership Netball, NZ National League football, plus Black Caps cricket Tests and ODIs.",
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
    region: "Asia",
    capital: "Tokyo",
    languages: ["Japanese"],
    currency: { name: "Japanese Yen", code: "JPY" },
    topBroadcasters: ["NHK General", "NTV", "TV Asahi", "TBS", "TV Tokyo", "Fuji TV"],
    topSportsLeagues: ["NPB Baseball", "J.League", "B.League Basketball", "V.League Volleyball"],
    intro:
      "Japanese TV runs on NHK plus the five Tokyo private keyholder networks (NTV, TV Asahi, TBS, TV Tokyo, Fuji), with NPB baseball and J.League football as the biggest live products. IPTV UPG carries all the major Japanese channels plus the SkyPerfecTV sports tier on one login — same login works for Japanese expats in the US, Brazil, UK and Australia.",
    channelHighlights:
      "NHK General, NHK Educational, NHK BS1, NHK BS Premium; Nippon TV (NTV), TV Asahi, TBS, TV Tokyo, Fuji TV; satellite/CS BS Nittele, BS Asahi, BS-TBS, BS Japan, BS Fuji; plus J SPORTS, Sky-A Sports+, GAORA, Nittele G+ sports channels.",
    sportsHighlights:
      "Nippon Professional Baseball (NPB — Yomiuri Giants, Hanshin Tigers, Yokohama BayStars in Central League; SoftBank Hawks, Rakuten Eagles in Pacific League), J1 League football, B.League basketball, V.League volleyball, plus sumo basho six times a year on NHK.",
  },
  {
    name: "South Korea",
    slug: "south-korea",
    code: "KR",
    region: "Asia",
    capital: "Seoul",
    languages: ["Korean"],
    currency: { name: "South Korean Won", code: "KRW" },
    topBroadcasters: ["KBS1", "KBS2", "MBC", "SBS", "EBS", "JTBC", "TV Chosun"],
    topSportsLeagues: ["KBO Baseball", "K League 1 Football", "KBL Basketball", "V-League Volleyball"],
    intro:
      "Korean TV runs on KBS, MBC, SBS and EBS terrestrially, plus the JTBC and TV Chosun cable networks that broke out with shows like SKY Castle and Penthouse. IPTV UPG bundles all the major Korean broadcasters, KBS Drama, MBC Drama, SBS Plus, plus the SPOTV / KBSN Sports tier with KBO baseball and K League football.",
    channelHighlights:
      "KBS1, KBS2, MBC, SBS, EBS terrestrial; KBS Drama, MBC Drama, SBS Plus, MBC Every1, KBS Joy; JTBC, JTBC2, JTBC4, TV Chosun, Channel A, MBN; CJ ENM Mnet, tvN, OCN, Olive, On Style; plus YTN, Yonhap News TV, KBS News, MBC News.",
    sportsHighlights:
      "KBO Korean Baseball Organization (Doosan Bears, LG Twins, Samsung Lions, Lotte Giants), K League 1 football, KBL men's basketball, WKBL women's basketball, V-League volleyball, plus Taeguk Warriors national football team in FIFA windows.",
  },
  {
    name: "South Africa",
    slug: "south-africa",
    code: "ZA",
    region: "Africa",
    capital: "Pretoria",
    languages: ["English", "Afrikaans", "Zulu", "Xhosa"],
    currency: { name: "South African Rand", code: "ZAR" },
    topBroadcasters: ["SABC 1", "SABC 2", "SABC 3", "e.tv", "M-Net", "SuperSport"],
    topSportsLeagues: ["DStv Premiership (PSL)", "United Rugby Championship", "SA20 Cricket"],
    intro:
      "South African TV is dominated by SABC (public) and the M-Net / SuperSport pay tier on DStv, with PSL football and Springbok rugby as the headline products. IPTV UPG carries SABC 1/2/3, e.tv, M-Net, kykNET (Afrikaans), and the full SuperSport rugby and football lineup.",
    channelHighlights:
      "SABC 1, SABC 2, SABC 3, SABC News; e.tv, eExtra, eMovies; M-Net, M-Net Movies, kykNET (Afrikaans), kykNET & Kie; SuperSport channels 1–13 including SuperSport Cricket, SuperSport Rugby, SuperSport Football, SuperSport Variety; plus Mzansi Magic, Mzansi Wethu, Lokshin Bioskop.",
    sportsHighlights:
      "DStv Premiership football (Kaizer Chiefs, Orlando Pirates, Mamelodi Sundowns), United Rugby Championship with Bulls, Stormers, Sharks and Lions, Springbok Test matches and Rugby Championship, SA20 T20 cricket league, plus Proteas international cricket.",
  },
  {
    name: "Afghanistan",
    slug: "afghanistan",
    code: "AF",
    region: "Asia",
    capital: "Kabul",
    languages: ["Pashto", "Dari"],
    currency: { name: "Afghan Afghani", code: "AFN" },
    topBroadcasters: ["RTA", "Tolo TV", "Lemar TV", "1TV", "Khurshid TV", "Ariana TV", "Shamshad TV"],
    topSportsLeagues: ["Afghanistan Premier League (Cricket)", "Shpageeza Cricket League", "Afghan Premier League (Football)"],
    intro:
      "Afghan TV viewing is split between RTA's state channels, Tolo TV's dominant private network and the diaspora-focused 1TV and Ariana feeds beamed back from Dubai and Europe. With cable infrastructure thin and satellite the default, IPTV UPG gives families in Kabul, Herat and the wider diaspora across Iran, Pakistan, Germany and the US one login that combines local Pashto and Dari channels with the cricket coverage Afghan fans actually want — the national T20 side is a genuine global tier-2 force now.",
    channelHighlights:
      "RTA (Afghan national broadcaster), RTA Pashto, Tolo TV, Tolo News, Lemar TV, 1TV, Ariana TV, Ariana News, Khurshid TV, Shamshad TV, plus diaspora reach via Afghanistan International. Cricket on Star Sports and A Sports feeds covers ICC fixtures and the Shpageeza league.",
    sportsHighlights:
      "Afghan national cricket team in ICC ODI and T20 World Cup fixtures, Shpageeza Cricket League T20 tournament, Afghanistan Premier League cricket when staged, plus the Afghan Premier League football and AFC Asian Cup qualifiers for the national football side.",
  },
  {
    name: "Albania",
    slug: "albania",
    code: "AL",
    region: "Europe",
    capital: "Tirana",
    languages: ["Albanian"],
    currency: { name: "Albanian Lek", code: "ALL" },
    topBroadcasters: ["RTSH 1", "RTSH 2", "TV Klan", "Top Channel", "Vizion Plus", "News 24", "Report TV"],
    topSportsLeagues: ["Kategoria Superiore", "Albanian Cup", "Albanian Basketball Superliga"],
    intro:
      "Albanian TV runs across RTSH's public stack and the big private trio of Top Channel, TV Klan and Vizion Plus, with Digitalb and Tring carrying the pay-TV sports rights for Kategoria Superiore and the Champions League. IPTV UPG carries all four major free-to-air broadcasters plus the SuperSport Albania feeds with full domestic football — and the same login restores Albanian-language TV for the very large diaspora in Italy, Greece, Germany and the UK.",
    channelHighlights:
      "RTSH 1, RTSH 2, RTSH 3, RTSH Sport; Top Channel, Top News, Top Channel HD; TV Klan, Klan Plus, Klan News, Klan Kosova; Vizion Plus, News 24, Report TV, Ora News, A2 CNN; SuperSport Albania 1–4 with Kategoria Superiore and European nights.",
    sportsHighlights:
      "Kategoria Superiore (KF Tirana, Partizani, Vllaznia, Skënderbeu), Albanian Cup, Albanian Basketball Superliga, plus the Albanian national team in UEFA Euro qualifiers — the Kuq e Zinjtë reaching Euro 2024 turned national-team windows into appointment viewing.",
  },
  {
    name: "Algeria",
    slug: "algeria",
    code: "DZ",
    region: "Africa",
    capital: "Algiers",
    languages: ["Arabic", "Berber", "French"],
    currency: { name: "Algerian Dinar", code: "DZD" },
    topBroadcasters: ["ENTV (Programme National)", "Canal Algérie", "A3", "Echorouk TV", "El Hayat TV", "Ennahar TV", "Dzaïr TV"],
    topSportsLeagues: ["Ligue Professionnelle 1", "Algerian Cup", "CAF Champions League"],
    intro:
      "Algerian households watch a triangle of state ENTV channels, the French-language Canal Algérie feed and a thicket of private Arabic-language broadcasters (Echorouk, Ennahar, El Hayat) — plus beIN Sports MENA for any serious football. IPTV UPG combines the full Algerian terrestrial stack, French TF1/France 2 for the bilingual audience, and the beIN Sports Arabic tier so Ligue 1 Algérie, CAF Champions League and Les Fennecs' qualifiers all land.",
    channelHighlights:
      "ENTV Programme National, Canal Algérie, A3 (Algérie 3), Algérie 4 (Tamazight), Algérie 5 (Coran); private Echorouk TV, Echorouk News, Ennahar TV, El Hayat TV, Dzaïr TV, Numidia News, El Bilad TV; plus beIN Sports MENA 1–12 with Algerian Ligue 1 coverage.",
    sportsHighlights:
      "Ligue Professionnelle 1 (USM Alger, MC Alger, CR Belouizdad, JS Kabylie, ES Sétif), Algerian Cup, CAF Champions League and Confederation Cup, plus Les Fennecs national team in Africa Cup of Nations and World Cup qualifiers.",
  },
  {
    name: "Andorra",
    slug: "andorra",
    code: "AD",
    region: "Europe",
    capital: "Andorra la Vella",
    languages: ["Catalan", "Spanish", "French"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTVA (Andorra Televisió)", "RNA"],
    topSportsLeagues: ["Primera Divisió", "FC Andorra (Spanish Segunda División)", "Vuelta a Andorra"],
    intro:
      "Andorra's domestic broadcasting is a single public outfit — Ràdio i Televisió d'Andorra — and almost every household tops it up with overspill from Spanish TDT and French TNT, plus Movistar+ or Canal+ for the football. IPTV UPG covers that exact stack on one login: ATV from Andorra la Vella, the full Spanish lineup (La 1, Antena 3, Telecinco, laSexta, Movistar+), and the French TF1 and France Télévisions feeds — the trilingual viewing reality of the Pyrenees principality.",
    channelHighlights:
      "Andorra Televisió (ATV); Spanish overspill TVE La 1, La 2, Antena 3, laSexta, Telecinco, Cuatro, Movistar LaLiga; French TF1, France 2, France 3, M6, Canal+; plus TV3 Catalunya for the Catalan-language audience and Eurosport for ski coverage.",
    sportsHighlights:
      "Primera Divisió andorrana domestic football, FC Andorra in the Spanish Segunda División (Gerard Piqué's project), Vuelta a Andorra cycling, plus the Andorran national football team in Euro qualifiers and the alpine ski World Cup stops at Soldeu/Grandvalira on Eurosport.",
  },
  {
    name: "Angola",
    slug: "angola",
    code: "AO",
    region: "Africa",
    capital: "Luanda",
    languages: ["Portuguese"],
    currency: { name: "Angolan Kwanza", code: "AOA" },
    topBroadcasters: ["TPA1", "TPA2", "TPA Internacional", "Zap Viva", "TV Zimbo", "Palanca TV"],
    topSportsLeagues: ["Girabola", "BAI Basket", "Angolan Cup"],
    intro:
      "Angolan pay-TV is dominated by Zap and DStv, with TPA's public channels still the default free-to-air option in Luanda and Lobito. For the diaspora in Portugal, Brazil and France, picking up Angolan TV traditionally meant a satellite dish and a Zap Internacional subscription. IPTV UPG bundles TPA1, TPA2, Zap Viva, TV Zimbo and the SuperSport Africa football tier —Girabola and Palancas Negras matches included.",
    channelHighlights:
      "TPA1, TPA2, TPA Internacional, TPA Notícias; Zap Viva, Zap Novelas, Zap Cinema; TV Zimbo, Palanca TV, Record TV Angola; plus SuperSport Variety, SuperSport Football, RTP África, and RTP Internacional for Portuguese-language drama.",
    sportsHighlights:
      "Girabola top-flight football (Petro de Luanda, 1° de Agosto, Sagrada Esperança, Interclube), Angolan Cup, BAI Basket (Angola's basketball league — historically the strongest in Africa), CAF Champions League, plus the Palancas Negras national team in AFCON.",
  },
  {
    name: "Antigua and Barbuda",
    slug: "antigua-and-barbuda",
    code: "AG",
    region: "Caribbean",
    capital: "Saint John's",
    languages: ["English"],
    currency: { name: "East Caribbean Dollar", code: "XCD" },
    topBroadcasters: ["ABS TV", "CTV Entertainment", "Observer Media"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League", "ABFA Premier Division"],
    intro:
      "Antiguan households run on ABS TV from Saint John's plus heavy DirecTV Caribbean and Flow Sports overlap, with Test cricket at the Sir Vivian Richards Stadium and CPL T20s at the Coolidge ground as the live-TV centrepieces. IPTV UPG carries ABS TV, the regional CBN and Caribbean Media Corporation feeds, plus the ESPN Caribbean and Flow Sports tier with full West Indies and Caribbean Premier League coverage.",
    channelHighlights:
      "ABS TV (Antigua & Barbuda Broadcasting Service), CTV Entertainment, Observer Radio TV; regional CBN, CMC, CaribVision; pay-TV Flow Sports 1 & 2, ESPN Caribbean, plus the US networks via DirecTV Caribbean — ABC, NBC, CBS, Fox — and BBC World News for the still-strong UK link.",
    sportsHighlights:
      "West Indies Test, ODI and T20I cricket (home Tests staged at Sir Vivian Richards Stadium), Caribbean Premier League T20 with Antigua & Barbuda Falcons, ABFA Premier Division football, plus Antigua sailing week and CARIFTA Games athletics.",
  },
  {
    name: "Armenia",
    slug: "armenia",
    code: "AM",
    region: "Asia",
    capital: "Yerevan",
    languages: ["Armenian"],
    currency: { name: "Armenian Dram", code: "AMD" },
    topBroadcasters: ["H1 (Public TV of Armenia)", "Shant TV", "Armenia TV", "Kentron TV", "ATV", "5TV"],
    topSportsLeagues: ["Armenian Premier League", "Armenian Cup", "Armenian Basketball League A"],
    intro:
      "Armenia's TV landscape leans heavily on H1 public broadcasting plus the private trio of Shant, Armenia TV and Kentron — with the very large diaspora in Russia, France, Lebanon and Los Angeles a bigger audience than the eight or nine cable households inside the country. IPTV UPG carries the full Armenian-language stack so Glendale, Marseille and Beirut viewers all get H1, Shant and Armenia TV alongside Russian and French overspill.",
    channelHighlights:
      "H1 (Հ1, Public Television of Armenia), H2, H3 Sport; Shant TV, Shant Premium; Armenia TV, Armenia Premium; Kentron TV, ATV, 5TV, Yerkir Media, Armnews, plus 24News and CivilNet. Russian Channel One and NTV overspill remains widely watched.",
    sportsHighlights:
      "Armenian Premier League football (Pyunik, Ararat-Armenia, FC Urartu), Armenian Cup, Armenian Basketball League A, plus the Armenian national football team in Euro and World Cup qualifiers and the very strong chess and weightlifting traditions on H3 Sport.",
  },
  {
    name: "Austria",
    slug: "austria",
    code: "AT",
    region: "Europe",
    capital: "Vienna",
    languages: ["German"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["ORF 1", "ORF 2", "ORF III", "ORF Sport+", "ServusTV", "ATV", "Puls 4"],
    topSportsLeagues: ["Austrian Bundesliga", "ÖFB-Cup", "ICE Hockey League", "Erste Bank Open"],
    intro:
      "Austrian pay-TV is a fight between Sky Österreich and DAZN for the Bundesliga, with ORF holding the free-to-air rights to the national team and the Vienna Open tennis. IPTV UPG bundles ORF 1, ORF 2, ORF III, ORF Sport+, ServusTV, ATV and Puls 4 alongside the full German ARD/ZDF and RTL Group stack — Austrian and German viewing.",
    channelHighlights:
      "ORF 1, ORF 2, ORF III Kultur und Information, ORF Sport+; ServusTV, ATV, ATV2, Puls 4, Puls 24; plus German overspill ARD Das Erste, ZDF, RTL, ProSieben, Sat.1, Vox; pay-TV Sky Sport Austria 1–11 with Bundesliga and DAZN Austria for Champions League nights.",
    sportsHighlights:
      "Austrian Football Bundesliga (Salzburg, Rapid Wien, Austria Wien, Sturm Graz), ÖFB-Cup, ICE Hockey League with KAC and Vienna Capitals, Erste Bank Open Vienna ATP 500, plus the Hahnenkamm downhill at Kitzbühel and the Vienna City Marathon.",
  },
  {
    name: "Azerbaijan",
    slug: "azerbaijan",
    code: "AZ",
    region: "Asia",
    capital: "Baku",
    languages: ["Azerbaijani"],
    currency: { name: "Azerbaijani Manat", code: "AZN" },
    topBroadcasters: ["AzTV", "İTV (Ictimai TV)", "Lider TV", "Space TV", "ATV", "CBC Sport"],
    topSportsLeagues: ["Azerbaijan Premier League", "Azerbaijan Cup", "Azerbaijani Grand Prix"],
    intro:
      "Azerbaijani TV is state-anchored at AzTV with İTV, Lider and Space TV providing the private alternatives — and CBC Sport carrying every Qarabağ FK Champions League run plus the Baku Formula 1 Grand Prix. IPTV UPG carries the full Azeri-language lineup, Turkish overspill (TRT, Show TV, Kanal D) for the bilingual audience, and the CBC Sport plus beIN Sports tier.",
    channelHighlights:
      "AzTV, İTV (Ictimai), Mədəniyyət, Idman Azerbaijan; Lider TV, Space TV, ATV, Xəzər TV, ARB; CBC, CBC Sport, CBC Sport Plus; plus Turkish overspill TRT 1, Show TV, Kanal D, Star TV; news Real TV, ARB 24, ANS.",
    sportsHighlights:
      "Azerbaijan Premier League football (Qarabağ FK, Neftçi Baku, Sabah FK), Azerbaijan Cup, Qarabağ in UEFA Champions League / Europa League nights, Baku City Circuit Formula 1 Grand Prix, plus Azerbaijani judo and wrestling on Idman Azerbaijan.",
  },
  {
    name: "Bahamas",
    slug: "bahamas",
    code: "BS",
    region: "Caribbean",
    capital: "Nassau",
    languages: ["English"],
    currency: { name: "Bahamian Dollar", code: "BSD" },
    topBroadcasters: ["ZNS-TV (Bahamas)", "Cable 12 Bahamas", "Our News (Eyewitness News)"],
    topSportsLeagues: ["Bahamas Basketball Federation", "Carifta Games", "BAAA Athletics"],
    intro:
      "Bahamian TV centres on ZNS-TV out of Nassau with heavy American cable overlap via Cable Bahamas — the US network feeds frequently outrank the local stations in primetime. IPTV UPG carries ZNS, Cable 12, and the regional Caribbean Media Corporation feed alongside the full US lineup (ABC, NBC, CBS, Fox, ESPN, NFL Network) and Flow Sports Caribbean — the channel mix Bahamian households actually watch,.",
    channelHighlights:
      "ZNS-TV Channel 13, Cable 12 Bahamas, Our News / Eyewitness News, JCN; Caribbean Media Corporation, BBC Caribbean; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2, NFL Network, NBA TV plus the full premium cable tier (HBO, Showtime); Flow Sports Caribbean for regional cricket and football.",
    sportsHighlights:
      "Bahamian sprinting on the World Athletics circuit (Shaunae Miller-Uibo, Steven Gardiner), CARIFTA Games athletics, NCAA basketball and football (the Bahamas Bowl and Battle 4 Atlantis are staged in Nassau), MLB Spring Training Grapefruit League, plus West Indies cricket on Flow Sports.",
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    code: "BH",
    region: "Middle East",
    capital: "Manama",
    languages: ["Arabic"],
    currency: { name: "Bahraini Dinar", code: "BHD" },
    topBroadcasters: ["Bahrain TV", "Bahrain Sports", "MBC 1", "MBC Action", "Al Arabiya"],
    topSportsLeagues: ["Bahraini Premier League", "AFC Asian Cup", "Bahrain Grand Prix"],
    intro:
      "Bahraini households watch Bahrain TV and Bahrain Sports as the state lineup, then a dense layer of pan-Arab MBC, Rotana and OSN content delivered via Etisalat and Batelco IPTV. IPTV UPG bundles Bahrain TV 1/2/4, MBC 1–4, Rotana group, OSN entertainment plus the full beIN Sports MENA tier — Bahraini Premier League, Saudi Pro League and the Bahrain F1 Grand Prix all.",
    channelHighlights:
      "Bahrain TV Channel 1, Bahrain TV Channel 2, Bahrain TV Channel 4 (Quran), Bahrain Sports 1 & 2; MBC 1, MBC 2, MBC 3, MBC 4, MBC Action, MBC Drama, MBC Masr; Rotana Khalijia, Rotana Cinema; OSN First, OSN Movies, OSN Series; beIN Sports HD 1–12 MENA; Al Arabiya, Sky News Arabia.",
    sportsHighlights:
      "Bahraini Premier League football, AFC Asian Cup and AFC Champions League, Bahrain Grand Prix F1 weekend at the Sakhir circuit (often the season opener), Bahrain International Circuit endurance racing, plus FIFA Arab Cup and Gulf Cup nights.",
  },
  {
    name: "Bangladesh",
    slug: "bangladesh",
    code: "BD",
    region: "Asia",
    capital: "Dhaka",
    languages: ["Bengali"],
    currency: { name: "Bangladeshi Taka", code: "BDT" },
    topBroadcasters: ["BTV", "Channel i", "ATN Bangla", "Maasranga TV", "RTV", "Jamuna TV", "Somoy TV", "Ekattor TV"],
    topSportsLeagues: ["Bangladesh Premier League (Cricket)", "Bangladesh Premier League (Football)", "Dhaka Premier Division Cricket"],
    intro:
      "Bangladeshi households run a thicket of Bengali general-entertainment channels — Channel i, ATN Bangla, Maasranga and RTV — alongside BTV's state stack and Indian Bengali overspill from Zee Bangla and Star Jalsha. IPTV UPG carries the full Dhaka lineup plus T Sports and Gazi TV with every Tigers home Test and BPL T20 fixture on one login — same login restores Bangla TV for the very large diaspora in the UK, US, Italy, Malaysia and the Gulf.",
    channelHighlights:
      "BTV, BTV World, Sangsad TV, Bangladesh Television Chittagong; Channel i, ATN Bangla, ATN News, Maasranga TV, RTV, NTV, Boishakhi TV, Bangla Vision, Desh TV, Independent TV, Mohona TV; news Jamuna TV, Somoy TV, Ekattor TV, DBC News, News24; sports T Sports, Gazi TV; plus Indian Bengali Star Jalsha, Zee Bangla.",
    sportsHighlights:
      "Bangladesh Premier League (BPL) T20 cricket, Bangladesh national cricket team (the Tigers) in Tests, ODIs and T20Is, Dhaka Premier Division Cricket League, Bangladesh Premier League football, plus the national football team in SAFF Championship and AFC qualifiers.",
  },
  {
    name: "Barbados",
    slug: "barbados",
    code: "BB",
    region: "Caribbean",
    capital: "Bridgetown",
    languages: ["English"],
    currency: { name: "Barbadian Dollar", code: "BBD" },
    topBroadcasters: ["CBC TV 8", "MCTV", "Slam TV"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League", "Barbados Premier League Football"],
    intro:
      "Barbados has one terrestrial channel — CBC TV 8 — and almost everyone fills the schedule with Flow and DirecTV Caribbean carrying US and UK feeds. The headline live product is cricket at Kensington Oval, and Barbados Royals' CPL home nights are a fixture of the summer calendar. IPTV UPG bundles CBC TV 8, the CMC regional feed, the full US network stack and Flow Sports' West Indies coverage.",
    channelHighlights:
      "CBC TV 8 (Caribbean Broadcasting Corporation), MCTV, Slam TV; Caribbean Media Corporation, CaribVision; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2, plus the premium cable tier HBO, Showtime; Flow Sports 1 & 2 and SportsMax for regional fixtures; BBC One, BBC News for the UK link.",
    sportsHighlights:
      "West Indies Tests, ODIs and T20Is at Kensington Oval, Caribbean Premier League with Barbados Royals, Barbados Premier League football, plus the Barbados Crop Over festival coverage and CARIFTA athletics with home heroes like Ryan Brathwaite tradition.",
  },
  {
    name: "Belarus",
    slug: "belarus",
    code: "BY",
    region: "Europe",
    capital: "Minsk",
    languages: ["Belarusian", "Russian"],
    currency: { name: "Belarusian Ruble", code: "BYN" },
    topBroadcasters: ["Belarus 1", "Belarus 2", "Belarus 3", "ONT", "STV", "Belarus 5 (Sports)"],
    topSportsLeagues: ["Belarusian Premier League", "Belarusian Extraliga (Ice Hockey)", "Belarusian Cup"],
    intro:
      "Belarusian TV is dominated by the state Belteleradiocompany channels (Belarus 1, 2, 3) plus ONT and STV, and ice hockey gets more airtime per capita than football. With international rights heavily sanctioned and Russian feeds tightly woven into the local lineup, IPTV UPG carries Belarus 1–5, ONT and STV alongside the full Russian-language tier (Channel One, NTV, REN TV) on one login — the realistic viewing mix for households in Minsk and Brest and for the diaspora in Poland and Lithuania.",
    channelHighlights:
      "Belarus 1, Belarus 2, Belarus 3 Kultura, Belarus 4 regional, Belarus 5 Sport; ONT, STV, RTR-Belarus; plus Russian Channel One, Russia-1, NTV, REN TV, TNT; news Belarus 24, Mir 24; plus KHL TV for the ice hockey audience.",
    sportsHighlights:
      "Belarusian Premier League football (BATE Borisov, Dinamo Minsk, Shakhtyor Soligorsk), Belarusian Extraliga ice hockey (Dinamo Minsk in KHL when permitted), Belarusian Cup, plus biathlon — a national obsession — through the IBU World Cup on Belarus 5 and Eurosport.",
  },
  {
    name: "Belize",
    slug: "belize",
    code: "BZ",
    region: "Central America",
    capital: "Belmopan",
    languages: ["English", "Spanish"],
    currency: { name: "Belize Dollar", code: "BZD" },
    topBroadcasters: ["Channel 5 Belize", "Channel 7 News (Tropical Vision)", "LOVE TV", "PlusTV", "Krem TV"],
    topSportsLeagues: ["Premier League of Belize", "CONCACAF Nations League", "Belize National Basketball"],
    intro:
      "Belize sits at the rare English/Spanish bilingual TV crossroads — Channel 5 and Channel 7 deliver English-language news, while heavy Mexican and Guatemalan overspill (Televisa, TV Azteca) reaches every household with a UHF antenna. IPTV UPG carries the Belizean broadcasters plus the full US network stack, ESPN Deportes, TUDN and the Caribbean SportsMax feed — the realistic English-Spanish mix.",
    channelHighlights:
      "Channel 5 Belize, Channel 7 News (Tropical Vision), LOVE TV, PlusTV, Krem TV, CTV-3; Mexican overspill Las Estrellas, Canal 5, Azteca Uno; Guatemalan Canal 3, TN23; US ABC, NBC, CBS, Fox, ESPN; SportsMax for CONCACAF coverage.",
    sportsHighlights:
      "Premier League of Belize football, Belize Jaguars national team in CONCACAF Nations League and World Cup qualifying, Belize National Basketball Association, plus the Cross Country Cycling Classic on Easter weekend and English Premier League / Liga MX picked up via SportsMax and TUDN.",
  },
  {
    name: "Benin",
    slug: "benin",
    code: "BJ",
    region: "Africa",
    capital: "Porto-Novo",
    languages: ["French"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["ORTB", "Canal 3 Bénin", "LC2 International", "Sikka TV", "E-Télé"],
    topSportsLeagues: ["Benin Premier League", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Beninese TV runs across ORTB's two state channels and a layer of private broadcasters (Canal 3, LC2, Sikka, E-Télé) — almost everything else comes from French TV5 Monde, France 24 and the Canal+ Afrique bouquet. IPTV UPG carries ORTB and the local private stack alongside the full French TF1 / France Télévisions feeds and Canal+ Sport Afrique with Ligue 1 and CAF football — the realistic francophone West African viewing mix.",
    channelHighlights:
      "ORTB (Office de Radiodiffusion et Télévision du Bénin), Canal 3 Bénin, LC2 International, Sikka TV, E-Télé, Eden TV, Soleil FM TV; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV.",
    sportsHighlights:
      "Benin Premier League football, Benin Squirrels (Écureuils) national team in Africa Cup of Nations qualifiers and the AFCON tournament itself, CAF Champions League and Confederation Cup, plus French Ligue 1 and UEFA Champions League nights via Canal+ Sport.",
  },
  {
    name: "Bhutan",
    slug: "bhutan",
    code: "BT",
    region: "Asia",
    capital: "Thimphu",
    languages: ["Dzongkha", "English"],
    currency: { name: "Bhutanese Ngultrum", code: "BTN" },
    topBroadcasters: ["BBS (Bhutan Broadcasting Service)", "BBS 2"],
    topSportsLeagues: ["Bhutan Premier League", "SAFF Championship", "Archery (national sport)"],
    intro:
      "Bhutan was famously the last country to introduce TV (1999) and the lineup remains thin: BBS 1 and BBS 2 from the state broadcaster, plus a heavy reliance on Indian channels piped in via local cable operators. IPTV UPG carries BBS alongside the full Indian Star, Sony and Zee lineup that Bhutanese households actually watch, plus Star Sports for the cricket and BBC World News — one login covers the practical viewing reality.",
    channelHighlights:
      "BBS 1 (Dzongkha), BBS 2 (English/Dzongkha); Indian Star Plus, Sony Entertainment, Zee TV, Colors, Star Sports 1, Sony Sports Ten; news NDTV 24x7, India Today, BBC World News; plus Discovery, National Geographic and Cartoon Network for kids and lifestyle.",
    sportsHighlights:
      "Bhutan Premier League football, Bhutanese national team in SAFF Championship and FIFA Asian qualifiers, traditional archery tournaments (Bhutan's national sport) carried on BBS, plus Indian Premier League cricket via Star Sports — IPL is the de-facto headline live sports product in Bhutanese homes.",
  },
  {
    name: "Bolivia",
    slug: "bolivia",
    code: "BO",
    region: "South America",
    capital: "Sucre",
    languages: ["Spanish", "Quechua", "Aymara"],
    currency: { name: "Bolivian Boliviano", code: "BOB" },
    topBroadcasters: ["Bolivia TV", "Unitel", "Red Uno", "ATB", "Bolivisión", "Red PAT"],
    topSportsLeagues: ["División Profesional (LFPB)", "Copa Libertadores", "Copa Sudamericana"],
    intro:
      "Bolivian TV runs across the state Bolivia TV, Unitel out of Santa Cruz, La Paz-based ATB and Red Uno, plus Bolivisión and PAT — football rights for the División Profesional sit with Tigo Sports. IPTV UPG bundles all six major terrestrial broadcasters plus Tigo Sports Bolivia and the DirecTV Sports tier with Copa Libertadores and Selección Bolivia qualifiers.",
    channelHighlights:
      "Bolivia TV, Unitel, Red Uno, ATB, Bolivisión, Red PAT, Cadena A; news Bolivisión Noticias, ATB Noticias, Red Uno El Mañanero; sports Tigo Sports Bolivia, DirecTV Sports, ESPN Sur, Fox Sports; plus pan-regional CNN en Español and Telemundo Internacional.",
    sportsHighlights:
      "División Profesional del Fútbol Boliviano (Bolívar, The Strongest, Always Ready, Wilstermann, Oriente Petrolero), Copa Libertadores and Sudamericana, plus the Verde national team in CONMEBOL World Cup qualifiers — Hernando Siles altitude home games are the chaos of the qualifying calendar.",
  },
  {
    name: "Bosnia and Herzegovina",
    slug: "bosnia-and-herzegovina",
    code: "BA",
    region: "Europe",
    capital: "Sarajevo",
    languages: ["Bosnian", "Croatian", "Serbian"],
    currency: { name: "Bosnia and Herzegovina Convertible Mark", code: "BAM" },
    topBroadcasters: ["BHT 1", "Federalna TV (FTV)", "RTRS", "OBN", "Hayat TV", "Pink BH", "Nova BH"],
    topSportsLeagues: ["Premier League of Bosnia and Herzegovina", "Bosnian Cup", "Adriatic Basketball League"],
    intro:
      "Bosnian TV is split across three public broadcasters (BHT 1 federal, FTV for the Federation, RTRS for Republika Srpska) plus a private layer of OBN, Hayat, Pink BH and Nova BH — and the channel you watch often tracks which entity you live in. IPTV UPG carries all three public stacks and the privates alongside Croatian and Serbian overspill on one login — the realistic Western Balkans viewing reality at $7.50/month.",
    channelHighlights:
      "BHT 1 (state); FTV, BHT 2; RTRS, RTRS Plus; OBN, Hayat TV, Hayat Plus, Pink BH, Pink Plus, Nova BH, Nova S; news N1 BiH, Al Jazeera Balkans, Face TV; plus Croatian HRT 1, HRT 2 and Serbian RTS 1, RTS 2 overspill, and SportKlub Bosnia for football.",
    sportsHighlights:
      "Premier League of Bosnia and Herzegovina football (Sarajevo, Željezničar, Zrinjski, Borac Banja Luka), Bosnian Cup, Bosnian basketball in the Adriatic ABA League, plus the Zmajevi national team in Euro and World Cup qualifiers — Edin Džeko-era nostalgia still drives the viewing.",
  },
  {
    name: "Botswana",
    slug: "botswana",
    code: "BW",
    region: "Africa",
    capital: "Gaborone",
    languages: ["English", "Tswana"],
    currency: { name: "Botswana Pula", code: "BWP" },
    topBroadcasters: ["Btv (Botswana TV)", "eBotswana", "Now TV Botswana"],
    topSportsLeagues: ["Botswana Premier League", "AFCON qualifiers", "FNB Botswana Cup"],
    intro:
      "Botswana's TV lineup is thin domestically — Btv from the state plus eBotswana — and almost every middle-class household subscribes to DStv for SuperSport rugby, Premier League football and US drama. IPTV UPG bundles Btv, eBotswana, the full SuperSport tier and the SABC South African feeds, the same lineup customers traditionally pay DStv premium for.",
    channelHighlights:
      "Btv (Botswana Television), eBotswana, Now TV Botswana, BCL TV; South African overspill SABC 1, SABC 2, SABC 3, e.tv; pay-TV SuperSport 1–13, Mzansi Magic, kykNET; plus BBC World News, CNN International, Al Jazeera English.",
    sportsHighlights:
      "Botswana Premier League football, Zebras national team in AFCON and World Cup qualifiers, Botswana Cup, plus athletics on SuperSport — Botswana's 4x400m relay tradition and Letsile Tebogo's sprint breakthrough have made track meets headline viewing.",
  },
  {
    name: "Brunei",
    slug: "brunei",
    code: "BN",
    region: "Asia",
    capital: "Bandar Seri Begawan",
    languages: ["Malay", "English"],
    currency: { name: "Brunei Dollar", code: "BND" },
    topBroadcasters: ["RTB (Radio Television Brunei)", "RTB Aneka", "RTB Sukmaindera", "Kristal Astro"],
    topSportsLeagues: ["Brunei Super League", "AFF Championship", "Sultan's Cup"],
    intro:
      "Brunei runs four state RTB channels plus Kristal Astro as the pay-TV provider — and the channel realities for a Bruneian household closely mirror neighbouring Malaysia, with heavy overspill from RTM, TV3 and Astro. IPTV UPG carries all four RTB channels alongside the full Malaysian and Singaporean lineup, plus beIN Sports Asia and the Premier League feeds Brunei expats actually want — one login.",
    channelHighlights:
      "RTB Perdana, RTB Aneka, RTB Sukmaindera, RTB Go!; Malaysian overspill RTM TV1, TV2, TV3, NTV7, 8TV, TV9, Astro Ria, Astro Prima; Singaporean Channel 5, Channel 8, CNA; sports beIN Sports Asia, Astro SuperSport, Premier League channels.",
    sportsHighlights:
      "Brunei Super League football, Brunei DPMM FC in the Singapore Premier League (cross-border anomaly), AFF Mitsubishi Electric Cup, Sultan's Cup, plus Premier League and Champions League nights via beIN Sports and Astro SuperSport.",
  },
  {
    name: "Bulgaria",
    slug: "bulgaria",
    code: "BG",
    region: "Europe",
    capital: "Sofia",
    languages: ["Bulgarian"],
    currency: { name: "Bulgarian Lev", code: "BGN" },
    topBroadcasters: ["BNT 1", "BNT 2", "bTV", "Nova TV", "Diema", "Bulgaria On Air"],
    topSportsLeagues: ["Bulgarian First League (efbet Liga)", "Bulgarian Cup", "NBL Basketball"],
    intro:
      "Bulgarian TV runs across BNT public, bTV (the dominant private network) and Nova TV, with the First League rights split between Diema Sport and MAX Sport — fans need two pay-TV providers to follow CSKA, Levski and Ludogorets properly. IPTV UPG bundles BNT 1/2/HD, bTV, Nova plus the Diema Sport and MAX Sport tier —every Lions home qualifier and Champions League night included.",
    channelHighlights:
      "BNT 1, BNT 2, BNT 3, BNT 4 regional; bTV, bTV Action, bTV Cinema, bTV Comedy, bTV Lady; Nova TV, Diema, Diema Family, Kino Nova, Nova Sport; Bulgaria On Air, News7; sports Diema Sport 1/2/3, MAX Sport 1/2/3/4 with First League and Champions League nights.",
    sportsHighlights:
      "efbet Liga (Ludogorets, CSKA Sofia, Levski Sofia, Lokomotiv Plovdiv), Bulgarian Cup, NBL basketball, plus Bulgarian volleyball — historically a major export — and the Lions national football team in Euro qualifiers.",
  },
  {
    name: "Burkina Faso",
    slug: "burkina-faso",
    code: "BF",
    region: "Africa",
    capital: "Ouagadougou",
    languages: ["French"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["RTB (Radiodiffusion Télévision du Burkina)", "BF1", "Canal 3 Burkina", "Savane TV"],
    topSportsLeagues: ["Burkinabé Premier League", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Burkinabé TV is anchored on the state RTB plus a small private layer of BF1, Canal 3 and Savane TV — and most households add Canal+ Afrique for Ligue 1 and the AFCON. IPTV UPG carries RTB, BF1, Canal 3 plus the full Canal+ Afrique and TV5 Monde Afrique lineup, with CAF Champions League and Étalons national team coverage.",
    channelHighlights:
      "RTB (Télévision Nationale du Burkina), RTB 2, BF1, Canal 3 Burkina, Savane TV, Burkina Info; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News and RFI Télé.",
    sportsHighlights:
      "Burkinabé Premier League football, Étalons (Stallions) national team in Africa Cup of Nations — finalists in 2013 — and World Cup qualifiers, CAF Champions League and Confederation Cup, plus French Ligue 1 via Canal+ Sport.",
  },
  {
    name: "Burundi",
    slug: "burundi",
    code: "BI",
    region: "Africa",
    capital: "Gitega",
    languages: ["Kirundi", "French"],
    currency: { name: "Burundian Franc", code: "BIF" },
    topBroadcasters: ["RTNB", "Tele Renaissance", "Salama TV"],
    topSportsLeagues: ["Burundi Premier League", "CECAFA Cup", "AFCON qualifiers"],
    intro:
      "Burundian TV is dominated by the state RTNB with a handful of small private outfits and very heavy French and East African satellite overspill via Canal+ Afrique and DStv. IPTV UPG carries RTNB and the private channels alongside the Canal+ Afrique bouquet, TV5 Monde Afrique and SuperSport — the realistic Bujumbura viewing mix on one login, with the Intamba mu Rugamba national team's AFCON qualifiers included.",
    channelHighlights:
      "RTNB (Radiodiffusion Télévision Nationale du Burundi), RTNB 2, Tele Renaissance, Salama TV, Heritage TV; French TF1, France 24, TV5 Monde Afrique; Canal+ Afrique, A+, Nollywood TV; regional KBC Channel 1, Rwanda TV; plus BBC Afrique and RFI.",
    sportsHighlights:
      "Burundi Premier League football, Intamba national team in AFCON and World Cup qualifiers, CECAFA Cup regional tournament, plus French Ligue 1 and African football on Canal+ Sport Afrique.",
  },
  {
    name: "Cabo Verde",
    slug: "cabo-verde",
    code: "CV",
    region: "Africa",
    capital: "Praia",
    languages: ["Portuguese", "Cape Verdean Creole"],
    currency: { name: "Cape Verdean Escudo", code: "CVE" },
    topBroadcasters: ["TCV (Televisão de Cabo Verde)", "Record Cabo Verde", "TIVER"],
    topSportsLeagues: ["Cape Verdean Football Championships", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Cabo Verde's domestic broadcasting runs on TCV plus a Record Cabo Verde feed, with the very large Cape Verdean diaspora in Portugal, the US Northeast and the Netherlands as a bigger TV audience than the islands themselves. IPTV UPG bundles TCV alongside the Portuguese RTP and SIC lineup, plus Canal+ Afrique and SuperSport — the realistic Lusophone Atlantic viewing mix.",
    channelHighlights:
      "TCV (Televisão de Cabo Verde), TCV 2, Record Cabo Verde, TIVER; Portuguese overspill RTP1, RTP África, RTP Internacional, SIC, TVI Internacional; Canal+ Afrique, A+, Nollywood TV; plus CMTV and Benfica TV for the Portuguese football audience.",
    sportsHighlights:
      "Cape Verdean Football Championships (Mindelense, Sporting Praia, CD Travadores), Cape Verde Tubarões Azuis national team — Africa Cup of Nations quarter-finalists 2023 — and World Cup qualifiers, CAF Champions League, plus Portuguese Primeira Liga via Sport TV.",
  },
  {
    name: "Cambodia",
    slug: "cambodia",
    code: "KH",
    region: "Asia",
    capital: "Phnom Penh",
    languages: ["Khmer"],
    currency: { name: "Cambodian Riel", code: "KHR" },
    topBroadcasters: ["TVK", "CTN", "Bayon TV", "CTV8", "Hang Meas HDTV", "MyTV"],
    topSportsLeagues: ["Cambodian Premier League", "AFF Mitsubishi Electric Cup", "Kun Khmer (Cambodian boxing)"],
    intro:
      "Cambodian TV is anchored by TVK's state lineup plus the privates CTN, Bayon and Hang Meas — and the rapid rise of Kun Khmer (the Cambodian version of muay thai) has reshaped the live sports schedule on CTV8 and Bayon. IPTV UPG carries the full Khmer-language lineup alongside Thai overspill (Channel 3, Channel 7), Vietnamese VTV, and Premier League via beIN Sports Asia.",
    channelHighlights:
      "TVK (national broadcaster), TVK 2, CTN, Bayon TV, CTV8, Hang Meas HDTV, MyTV, PNN TV, SEATV, ETV; Thai overspill Channel 3, Channel 7, Channel 5; Vietnamese VTV4; sports beIN Sports Asia, plus Khmer-dubbed Hollywood movies on CTN Cinema.",
    sportsHighlights:
      "Cambodian Premier League football, Cambodia national team in AFF Mitsubishi Electric Cup and AFC Asian Cup qualifiers, Kun Khmer boxing (a fierce rights battle with Thai muay thai), SEA Games coverage when Cambodia hosts, plus European football on beIN Sports.",
  },
  {
    name: "Cameroon",
    slug: "cameroon",
    code: "CM",
    region: "Africa",
    capital: "Yaoundé",
    languages: ["French", "English"],
    currency: { name: "Central African CFA Franc", code: "XAF" },
    topBroadcasters: ["CRTV", "Canal 2 International", "STV", "Equinoxe TV", "Vision 4", "Ariane TV"],
    topSportsLeagues: ["Elite One", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Cameroonian TV runs across CRTV's bilingual state stack plus a private layer of Canal 2 International, STV, Equinoxe and Vision 4 — and the country's dual French/English split makes the channel mix unusually wide. IPTV UPG bundles the full Cameroonian stack, French TF1/France 2 and Canal+ Sport Afrique, plus the BBC for the Anglophone northwest — Indomitable Lions matches and Cameroon-hosted AFCON 2021 nostalgia included.",
    channelHighlights:
      "CRTV, CRTV News, Canal 2 International, Canal 2 Movies, STV, STV 2, Equinoxe TV, Vision 4, Ariane TV, DBS TV; French TF1, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport; English BBC World News, Africa News; Nollywood TV and A+.",
    sportsHighlights:
      "Elite One (MTN Elite One — Coton Sport, Canon Yaoundé, PWD Bamenda), Indomitable Lions national team in AFCON (five-time champions) and World Cup qualifiers, CAF Champions League and Confederation Cup, plus the Tour du Cameroun cycling stage race.",
  },
  {
    name: "Cayman Islands",
    slug: "cayman-islands",
    code: "KY",
    region: "Caribbean",
    capital: "George Town",
    languages: ["English"],
    currency: { name: "Cayman Islands Dollar", code: "KYD" },
    topBroadcasters: ["Cayman 27", "CIGTV", "Hurley's Media"],
    topSportsLeagues: ["Cayman Islands Premier League", "West Indies Cricket", "Caribbean Premier League"],
    intro:
      "The Cayman lineup is a tiny domestic core — Cayman 27 plus CIGTV — surrounded by a thick layer of US cable channels piped in via Logic and Flow. With a financial-services expat population from the UK, Canada, and the US, the realistic viewing mix is BBC, ESPN, Sky Sports and Premier League. IPTV UPG bundles Cayman 27 and the local feeds with the full US and UK sports tier.",
    channelHighlights:
      "Cayman 27, CIGTV (Government TV), Hurley's Media; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2, NFL Network plus premium cable HBO, Showtime; UK BBC One, BBC News, Sky Sports Premier League, Sky Sports F1; Flow Sports Caribbean for regional cricket.",
    sportsHighlights:
      "Cayman Islands Premier League football, West Indies Test cricket on Flow Sports, Caribbean Premier League T20, plus the Cayman Carnival and the well-followed offshore powerboat racing — Caymanian sailing and offshore-racing coverage on Cayman 27.",
  },
  {
    name: "Central African Republic",
    slug: "central-african-republic",
    code: "CF",
    region: "Africa",
    capital: "Bangui",
    languages: ["French", "Sango"],
    currency: { name: "Central African CFA Franc", code: "XAF" },
    topBroadcasters: ["TV Centrafrique", "Radio Centrafrique TV"],
    topSportsLeagues: ["CAR Football Championship", "AFCON qualifiers", "CEMAC Cup"],
    intro:
      "Central African Republic's domestic TV is essentially one state broadcaster — TV Centrafrique out of Bangui — with everything else carried on satellite via TV5 Monde Afrique and the Canal+ Afrique bouquet. IPTV UPG carries TV Centrafrique plus the full francophone Africa satellite lineup, Canal+ Sport Afrique with Ligue 1 and the CAF Champions League, and the BBC Afrique news feed.",
    channelHighlights:
      "TV Centrafrique (Radiodiffusion Télévision Centrafricaine); French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; news Africa News, BBC Afrique, RFI Télé.",
    sportsHighlights:
      "CAR Football Championship, Fauves national team in AFCON qualifiers, CEMAC Cup regional tournament, plus French Ligue 1 and African continental club football via Canal+ Sport Afrique.",
  },
  {
    name: "Chad",
    slug: "chad",
    code: "TD",
    region: "Africa",
    capital: "N'Djamena",
    languages: ["French", "Arabic"],
    currency: { name: "Central African CFA Franc", code: "XAF" },
    topBroadcasters: ["Télé Tchad", "Electron TV"],
    topSportsLeagues: ["Chad Premier League", "AFCON qualifiers", "CEMAC Cup"],
    intro:
      "Chadian TV revolves around Télé Tchad, the state broadcaster, with satellite filling the rest of the lineup — heavy on Canal+ Afrique and Sudanese/Arabic feeds reflecting Chad's bilingual reality. IPTV UPG bundles Télé Tchad alongside French TF1 and France 24, Canal+ Afrique with CAF football, plus MBC and Al Jazeera Arabic for the eastern provinces — one login at $7.50/month.",
    channelHighlights:
      "Télé Tchad (Office National de Radiodiffusion et Télévision du Tchad), Electron TV; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; Arabic MBC 1, Al Jazeera, Sudan TV overspill.",
    sportsHighlights:
      "Chad Premier League football, Sao national team in AFCON and World Cup qualifiers, CEMAC Cup, plus French Ligue 1 and African continental club football on Canal+ Sport.",
  },
  {
    name: "Chile",
    slug: "chile",
    code: "CL",
    region: "South America",
    capital: "Santiago",
    languages: ["Spanish"],
    currency: { name: "Chilean Peso", code: "CLP" },
    topBroadcasters: ["TVN", "Mega", "Canal 13", "Chilevisión (CHV)", "La Red", "TV+"],
    topSportsLeagues: ["Campeonato Nacional (Primera División)", "Copa Chile", "Copa Libertadores", "ANFP"],
    intro:
      "Chilean football rights have ping-ponged between CDF, TNT Sports Chile and ESPN — Primera División fans typically need two products to follow Colo-Colo and Universidad de Chile properly. IPTV UPG bundles TVN, Mega, Canal 13, Chilevisión and La Red plus TNT Sports Chile and ESPN Chile for full Campeonato Nacional and Copa Libertadores coverage.",
    channelHighlights:
      "TVN, Mega, Canal 13, Chilevisión, La Red, TV+, UCV TV; news 24 Horas, T13, CNN Chile, Mega Plus; sports TNT Sports Chile, ESPN Chile, DirecTV Sports, Fox Sports Premium; plus pan-regional CNN en Español, Discovery, Cartoon Network LA.",
    sportsHighlights:
      "Campeonato Nacional Primera División (Colo-Colo, Universidad de Chile, Universidad Católica, Cobreloa), Copa Chile, Copa Libertadores and Sudamericana, La Roja national team in CONMEBOL World Cup qualifiers, plus the Rally Mobil and Chilean tennis on ESPN.",
  },
  {
    name: "China",
    slug: "china",
    code: "CN",
    region: "Asia",
    capital: "Beijing",
    languages: ["Mandarin Chinese"],
    currency: { name: "Chinese Yuan Renminbi", code: "CNY" },
    topBroadcasters: ["CCTV", "Hunan TV", "Jiangsu TV", "Zhejiang TV", "Phoenix TV", "BTV (Beijing TV)", "Dragon TV"],
    topSportsLeagues: ["Chinese Super League", "CBA (Chinese Basketball Association)", "Chinese FA Cup"],
    intro:
      "Mainland Chinese TV is dominated by the CCTV stack of 17 specialty channels plus a tier of powerful satellite broadcasters (Hunan TV's variety dominance, Jiangsu TV's drama, Zhejiang TV's reality) — and the Mandarin-speaking diaspora across Singapore, Malaysia, Australia, Canada and the US is a major audience for these same channels. IPTV UPG carries the full CCTV and provincial satellite lineup on one login, plus Phoenix TV from Hong Kong for international news.",
    channelHighlights:
      "CCTV-1 General, CCTV-2 Economic, CCTV-3 Arts, CCTV-4 International, CCTV-5 Sports, CCTV-5+, CCTV-6 Movies, CCTV-7 Defense, CCTV-8 Drama, CCTV-9 Documentary, CCTV-13 News, CCTV-14 Children, CCTV-17 Agriculture; Hunan TV, Jiangsu TV, Zhejiang TV, Dragon TV (Shanghai), BTV; Phoenix TV (HK), TVBS.",
    sportsHighlights:
      "Chinese Super League football (Shanghai Port, Shandong Taishan, Beijing Guoan), CBA basketball, Chinese FA Cup, plus CCTV-5's wall-to-wall table tennis, badminton and diving — and the Chinese Grand Prix F1 weekend at Shanghai International Circuit.",
  },
  {
    name: "Comoros",
    slug: "comoros",
    code: "KM",
    region: "Africa",
    capital: "Moroni",
    languages: ["Comorian", "French", "Arabic"],
    currency: { name: "Comorian Franc", code: "KMF" },
    topBroadcasters: ["ORTC (Office de Radio et Télévision des Comores)"],
    topSportsLeagues: ["Comoros Premier League", "AFCON qualifiers", "COSAFA Cup"],
    intro:
      "Comoros has a single state broadcaster — ORTC — and most households fill the rest of the lineup from French satellite via Canal+ Afrique plus Arabic MBC overspill. The country's AFCON 2022 run (knockout stage at first attempt) turned national-team windows into appointment viewing. IPTV UPG bundles ORTC plus the full francophone Africa satellite stack and beIN Sports MENA.",
    channelHighlights:
      "ORTC (Comoros state TV); French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+; Arabic MBC 1, Al Jazeera; plus the very large Comorian diaspora in Marseille gets the same French TF1/France 2 stack.",
    sportsHighlights:
      "Comoros Premier League football, Cœlacanthes national team in AFCON (knockout stage debut 2022) and World Cup qualifiers, COSAFA Cup, plus French Ligue 1 and CAF Champions League via Canal+ Sport.",
  },
  {
    name: "Cook Islands",
    slug: "cook-islands",
    code: "CK",
    region: "Oceania",
    capital: "Avarua",
    languages: ["English", "Cook Islands Māori"],
    currency: { name: "New Zealand Dollar", code: "NZD" },
    topBroadcasters: ["Cook Islands TV (CITV)"],
    topSportsLeagues: ["Cook Islands Round Cup", "OFC Nations Cup", "Pacific Games"],
    intro:
      "The Cook Islands lineup is one terrestrial channel — Cook Islands TV out of Rarotonga — and almost everything else comes from New Zealand via Sky NZ. IPTV UPG carries CITV alongside the full TVNZ and Sky Sport NZ lineup, plus Fiji and Samoa overspill — the realistic Pacific viewing reality, with Super Rugby Pacific and All Blacks tests included.",
    channelHighlights:
      "Cook Islands TV (CITV); New Zealand overspill TVNZ 1, TVNZ 2, Three NZ, Bravo NZ, Sky Sport NZ 1–9; Pacific feeds FBC TV Fiji, TV1 Samoa; plus BBC World News and Al Jazeera English.",
    sportsHighlights:
      "Cook Islands Round Cup football, Cook Islands rugby league and rugby union (Cook Islands has produced multiple NRL players), OFC Nations Cup, Pacific Games, plus All Blacks tests and Super Rugby Pacific via Sky Sport NZ.",
  },
  {
    name: "Costa Rica",
    slug: "costa-rica",
    code: "CR",
    region: "Central America",
    capital: "San José",
    languages: ["Spanish"],
    currency: { name: "Costa Rican Colón", code: "CRC" },
    topBroadcasters: ["Teletica (Canal 7)", "Repretel (Canal 6, 4, 11)", "Sinart (Canal 13)", "Multimedios"],
    topSportsLeagues: ["Primera División de Costa Rica (Liga Promerica)", "CONCACAF Champions Cup", "CONCACAF Nations League"],
    intro:
      "Costa Rican TV is a Teletica-versus-Repretel duopoly with Sinart (public) and Multimedios filling out the dial — and Tigo Sports and FUTV split the Liga Promerica rights. IPTV UPG bundles Teletica's Canal 7, Repretel's Canal 6, 4 and 11, Sinart's Canal 13 plus Tigo Sports Costa Rica and FUTV for full Primera División and La Sele coverage.",
    channelHighlights:
      "Teletica Canal 7, Repretel Canal 6, Canal 4, Canal 11, Sinart Canal 13, Multimedios; news Telenoticias 7, Noticias Repretel, ADN Noticias; sports Tigo Sports Costa Rica, FUTV, ESPN Latinoamérica, Fox Sports Latin America; plus regional CNN en Español and Discovery.",
    sportsHighlights:
      "Liga Promerica Primera División (Saprissa, Alajuelense, Herediano, Cartaginés), CONCACAF Champions Cup, La Sele national team in CONCACAF Nations League and World Cup qualifying — quarter-finalists at the 2014 World Cup remains the headline memory — plus the Vuelta a Costa Rica cycling.",
  },
  {
    name: "Cote d'Ivoire (Ivory Coast)",
    slug: "cote-divoire-ivory-coast",
    code: "CI",
    region: "Africa",
    capital: "Yamoussoukro",
    languages: ["French"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["RTI 1", "RTI 2", "NCI", "La 3 (RTI)", "A+ Ivoire", "Life TV"],
    topSportsLeagues: ["Ligue 1 Côte d'Ivoire", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Ivorian TV's big year was 2023–2024 — Côte d'Ivoire hosted (and won) AFCON 2023, putting RTI's coverage and Canal+ Sport Afrique at the centre of every Abidjan and Bouaké household. IPTV UPG carries RTI 1, RTI 2, La 3, NCI and A+ Ivoire alongside the full Canal+ Afrique bouquet plus French TF1/France 2 — Les Éléphants viewing.",
    channelHighlights:
      "RTI 1, RTI 2, La 3 (RTI 3), NCI (Nouvelle Chaîne Ivoirienne), A+ Ivoire, Life TV, 7info; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News and BBC Afrique.",
    sportsHighlights:
      "Ligue 1 Côte d'Ivoire (ASEC Mimosas, Africa Sports, Stade d'Abidjan), Les Éléphants national team — 2024 AFCON champions on home soil — CAF Champions League and Confederation Cup, plus French Ligue 1 via Canal+ Sport.",
  },
  {
    name: "Croatia",
    slug: "croatia",
    code: "HR",
    region: "Europe",
    capital: "Zagreb",
    languages: ["Croatian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["HRT 1", "HRT 2", "Nova TV", "RTL Hrvatska", "Doma TV", "N1 Hrvatska"],
    topSportsLeagues: ["HNL (Hrvatska nogometna liga)", "Croatian Cup", "ABA Basketball League"],
    intro:
      "Croatian TV centres on HRT public plus Nova TV and RTL Hrvatska, with HNL football rights on MAXSport and Arena Sport — and the Vatreni national team's two World Cup finals runs (2018 final, 2022 semis) have permanently elevated international windows over the domestic league. IPTV UPG bundles HRT 1, HRT 2, Nova, RTL Hrvatska and the Arena Sport / MAXSport tier.",
    channelHighlights:
      "HRT 1, HRT 2, HRT 3, HRT 4 news; Nova TV, Doma TV, Nova World; RTL Hrvatska, RTL 2, RTL Living, RTL Crime; N1 Hrvatska, Al Jazeera Balkans; sports Arena Sport 1–10, MAXSport 1–5, SportKlub Hrvatska.",
    sportsHighlights:
      "HNL football (Dinamo Zagreb, Hajduk Split, Rijeka, Osijek), Croatian Cup, Vatreni national team in major tournament qualifying — 2018 and 2022 World Cup runs remain headline viewing — Croatian basketball in ABA League, plus water polo (Croatia is genuinely top-tier) and the Wimbledon-relevant Croatian tennis tradition.",
  },
  {
    name: "Cuba",
    slug: "cuba",
    code: "CU",
    region: "Caribbean",
    capital: "Havana",
    languages: ["Spanish"],
    currency: { name: "Cuban Peso", code: "CUP" },
    topBroadcasters: ["Cubavisión", "Tele Rebelde", "Multivisión", "Canal Educativo", "Canal Habana"],
    topSportsLeagues: ["Serie Nacional de Béisbol", "Cuban National Football League", "Pan American Games"],
    intro:
      "Cuban TV is entirely state-run via ICRT — Cubavisión, Tele Rebelde, Multivisión and the educational channels — with baseball, not football, as the headline live product. For the very large Cuban diaspora in Florida, Madrid and New Jersey, satellite and IPTV is the only way to keep up with Serie Nacional and the national team. IPTV UPG carries the full Cuban state stack on one login, plus Telesur and CNN en Español.",
    channelHighlights:
      "Cubavisión, Tele Rebelde, Multivisión, Canal Educativo, Canal Educativo 2, Canal Clave (music), Canal Habana; news Cubavisión Internacional, Telesur; plus pan-regional CNN en Español, Discovery Latinoamérica and pan-Lat reality on Telemundo Internacional.",
    sportsHighlights:
      "Serie Nacional de Béisbol (the famous Cuban baseball league — Industriales, Santiago de Cuba, Granma, Villa Clara), Cuban national football league, Cuba in the Pan American Games and Caribbean Series, plus Cuban boxing (historically the world's top amateur programme) on Tele Rebelde.",
  },
  {
    name: "Cyprus",
    slug: "cyprus",
    code: "CY",
    region: "Europe",
    capital: "Nicosia",
    languages: ["Greek", "Turkish"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["CyBC RIK 1", "RIK 2", "Sigma TV", "ANT1 Cyprus", "Mega Channel Cyprus", "Omega TV"],
    topSportsLeagues: ["Cypriot First Division", "Cypriot Cup", "Cyprus Basketball Division A"],
    intro:
      "Cypriot TV is anchored on CyBC (RIK) public plus four big private broadcasters (Sigma, ANT1 Cyprus, Mega Cyprus, Omega) — and Greek mainland feeds (ERT, Mega, ANT1) double the practical lineup for every household. IPTV UPG bundles the full Cypriot stack plus Greek overspill and Cytavision Sport / Cablenet's sports tier for First Division football.",
    channelHighlights:
      "CyBC RIK 1, RIK 2, RIK HD, RIK Sat; Sigma TV, ANT1 Cyprus, Mega Channel Cyprus, Omega TV, Capital TV, Plus TV; Greek overspill ERT1, ERT2, ANT1 Greece, Star, Alpha; sports Cytavision Sport 1–6 and Cablenet Primetel sports tier.",
    sportsHighlights:
      "Cypriot First Division (APOEL, Omonia, AEK Larnaca, Anorthosis), Cypriot Cup, Cyprus national team in Euro qualifiers, Cyprus Division A basketball, plus the Cyprus Rally and Limassol Marathon — and full Greek Super League coverage for the bilingual audience.",
  },
  {
    name: "Czechia",
    slug: "czechia",
    code: "CZ",
    region: "Europe",
    capital: "Prague",
    languages: ["Czech"],
    currency: { name: "Czech Koruna", code: "CZK" },
    topBroadcasters: ["ČT1", "ČT2", "ČT24", "ČT sport", "Nova", "Prima", "Barrandov"],
    topSportsLeagues: ["Czech First League (Chance Liga)", "Czech Extraliga (Ice Hockey)", "Mattoni NBL Basketball"],
    intro:
      "Czech TV runs across ČT public, Nova and Prima as the big privates — and ice hockey gets near-equal billing with football, with the Extraliga drawing weekly seven-figure audiences. IPTV UPG bundles ČT1, ČT2, ČT24, ČT sport, Nova, Prima and the O2 TV Sport tier with full Chance Liga football and Extraliga hockey.",
    channelHighlights:
      "ČT1, ČT2, ČT24 news, ČT sport, ČT :D children, ČT art; Nova, Nova 2, Nova Cinema, Nova Action, Nova Gold, Nova Fun; Prima, Prima Cool, Prima Love, Prima Krimi, Prima Max; Barrandov, Šlágr TV; sports O2 TV Sport, Nova Sport 1–6.",
    sportsHighlights:
      "Chance Liga football (Sparta Prague, Slavia Prague, Viktoria Plzeň), Czech Extraliga ice hockey (Sparta, Pardubice, Třinec), Czech Cup football, Mattoni NBL basketball, plus the Czech national hockey team's annual IIHF World Championship run on ČT sport.",
  },
  {
    name: "Democratic Republic of the Congo",
    slug: "democratic-republic-of-the-congo",
    code: "CD",
    region: "Africa",
    capital: "Kinshasa",
    languages: ["French", "Lingala", "Swahili"],
    currency: { name: "Congolese Franc", code: "CDF" },
    topBroadcasters: ["RTNC", "Digital Congo", "Antenne A", "Molière TV", "B-One TV", "RTGA"],
    topSportsLeagues: ["Linafoot", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "DRC's TV landscape is wild — 100+ channels licensed across Kinshasa alone, ranging from the state RTNC through Digital Congo, Antenne A, B-One and a dense layer of religious and music channels. For the very large Congolese diaspora in Belgium, France and South Africa, the Lingala-language feeds are the diaspora glue. IPTV UPG carries RTNC, the major private channels and Canal+ Afrique.",
    channelHighlights:
      "RTNC 1, RTNC 2, Digital Congo, Antenne A, Molière TV, B-One TV, RTGA, Tropicana TV, Canal Congo, Raga TV; French overspill TF1, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News and BBC Afrique.",
    sportsHighlights:
      "Linafoot (TP Mazembe — five-time CAF champions — AS Vita Club, V.Club, Daring Club Motema Pembe), Léopards national team in AFCON and World Cup qualifiers, CAF Champions League and Confederation Cup, plus boxing (DRC has produced multiple world champions) on RTNC.",
  },
  {
    name: "Djibouti",
    slug: "djibouti",
    code: "DJ",
    region: "Africa",
    capital: "Djibouti",
    languages: ["French", "Arabic"],
    currency: { name: "Djiboutian Franc", code: "DJF" },
    topBroadcasters: ["RTD (Radiodiffusion Télévision de Djibouti)"],
    topSportsLeagues: ["Djibouti Premier League", "CECAFA Cup", "AFCON qualifiers"],
    intro:
      "Djibouti's domestic TV is a single state broadcaster — RTD — with French satellite plus Arabic MBC and Al Jazeera filling the rest of the lineup. As a French/Arabic bilingual market with strong ties to Ethiopia, the realistic channel mix is unusually wide for the population. IPTV UPG bundles RTD plus full francophone and Arabic satellite tiers, with beIN Sports MENA for Saudi Pro League and African football — one login.",
    channelHighlights:
      "RTD (Djibouti state TV); French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+; Arabic MBC 1, MBC Masr, Al Jazeera, Al Arabiya; Ethiopian EBC, plus beIN Sports MENA 1–12.",
    sportsHighlights:
      "Djibouti Premier League football, Riverains de la Mer Rouge national team in AFCON qualifiers, CECAFA Cup regional tournament, plus French Ligue 1 and CAF Champions League via Canal+ Sport and beIN Sports MENA.",
  },
  {
    name: "Dominica",
    slug: "dominica",
    code: "DM",
    region: "Caribbean",
    capital: "Roseau",
    languages: ["English"],
    currency: { name: "East Caribbean Dollar", code: "XCD" },
    topBroadcasters: ["DBS TV (Dominica Broadcasting Service)", "Marpin 2K4"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League", "Dominica Premier League"],
    intro:
      "Dominica's TV layout is a single domestic broadcaster — DBS TV — with everything else from Marpin cable and the regional Caribbean Media Corporation feed, plus heavy US network overspill. The Windward Islands' cricket strength makes Test matches at Windsor Park the headline live event. IPTV UPG carries DBS plus CMC and the full US ABC/NBC/CBS/Fox stack, with Flow Sports for cricket — one login at $7.50/month.",
    channelHighlights:
      "DBS TV (Dominica Broadcasting Service), Marpin 2K4; Caribbean Media Corporation, CaribVision; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2 plus the premium cable tier; Flow Sports 1 & 2, SportsMax for West Indies cricket; BBC One and BBC News.",
    sportsHighlights:
      "West Indies Tests, ODIs and T20Is (matches staged at Windsor Park Roseau), Caribbean Premier League T20, Dominica Premier League football, plus the World Creole Music Festival and CARIFTA Games athletics.",
  },
  {
    name: "Dominican Republic",
    slug: "dominican-republic",
    code: "DO",
    region: "Caribbean",
    capital: "Santo Domingo",
    languages: ["Spanish"],
    currency: { name: "Dominican Peso", code: "DOP" },
    topBroadcasters: ["Telesistema", "Color Visión", "Telemicro", "Antena Latina", "CDN", "Telecentro"],
    topSportsLeagues: ["LIDOM (Dominican Winter Baseball)", "Liga Dominicana de Fútbol", "Liga Dominicana de Baloncesto"],
    intro:
      "Dominican TV is dominated by Telesistema and Color Visión with Telemicro and Antena Latina splitting the rest of the dial — but the real headline product is winter-league baseball on CDN Deportes and ESPN Deportes. IPTV UPG bundles the full Dominican broadcast lineup plus LIDOM coverage and US MLB on ESPN Deportes — one login for the bilingual Dominican and Dominican-American audience.",
    channelHighlights:
      "Telesistema Canal 11, Color Visión Canal 9, Telemicro Canal 5, Antena Latina Canal 7, CDN Canal 37, Telecentro Canal 13, Teleantillas Canal 2; news CDN, Noticias SIN; sports CDN Deportes, ESPN Deportes; plus Telemundo Internacional and Univisión for US-bound viewers.",
    sportsHighlights:
      "LIDOM Dominican Winter Baseball (Tigres del Licey, Águilas Cibaeñas, Estrellas Orientales, Toros del Este), Caribbean Series, MLB regular season — the DR sends more players to MLB per capita than anywhere — Liga Dominicana de Fútbol, plus the Dominican national basketball team's FIBA campaigns.",
  },
  {
    name: "Ecuador",
    slug: "ecuador",
    code: "EC",
    region: "South America",
    capital: "Quito",
    languages: ["Spanish"],
    currency: { name: "US Dollar", code: "USD" },
    topBroadcasters: ["Ecuavisa", "Teleamazonas", "RTS", "TC Televisión", "Gama TV", "Ecuador TV"],
    topSportsLeagues: ["LigaPro Serie A", "Copa Ecuador", "Copa Libertadores"],
    intro:
      "Ecuadorian football's LigaPro Serie A sits on Star+ and GolTV — and following Barcelona SC, LDU Quito and Emelec properly traditionally meant two pay-TV products. IPTV UPG bundles Ecuavisa, Teleamazonas, RTS, TC Televisión, Gama TV plus GolTV and ESPN Premium for full LigaPro and La Tri qualifying coverage.",
    channelHighlights:
      "Ecuavisa, Teleamazonas, RTS, TC Televisión, Gama TV, Ecuador TV (public), Oromar TV; news Ecuavisa Noticias, Telerama, Teleamazonas Noticias; sports GolTV Ecuador, ESPN Premium, DirecTV Sports, Fox Sports Premium; plus regional CNN en Español and Discovery.",
    sportsHighlights:
      "LigaPro Serie A (Barcelona SC, LDU Quito, Emelec, Independiente del Valle, Aucas), Copa Ecuador, Copa Libertadores and Sudamericana, La Tri national team in CONMEBOL World Cup qualifiers, plus the Vuelta al Ecuador cycling.",
  },
  {
    name: "El Salvador",
    slug: "el-salvador",
    code: "SV",
    region: "Central America",
    capital: "San Salvador",
    languages: ["Spanish"],
    currency: { name: "US Dollar", code: "USD" },
    topBroadcasters: ["TCS (Canal 2, 4, 6)", "Canal 12", "TVES", "Megavisión", "Canal 21"],
    topSportsLeagues: ["Primera División de El Salvador", "CONCACAF Nations League", "Liga Salvadoreña de Baloncesto"],
    intro:
      "Salvadoran TV is dominated by Telecorporación Salvadoreña's Canal 2, 4 and 6 cluster — a near-monopoly broken up only by Canal 12 and TVES. La Selecta's qualifying campaigns plus US Liga MX overspill make sports rights a key driver. IPTV UPG bundles the full TCS group, Canal 12, TVES and Megavisión plus Tigo Sports El Salvador and ESPN Deportes for La Sele coverage.",
    channelHighlights:
      "TCS Canal 2, Canal 4, Canal 6, Canal 8; Canal 12, TVES Canal 10, Megavisión Canal 21, Canal 33, Canal 19; news TCS Noticias, Noticias 12, Megavisión Noticias; sports Tigo Sports El Salvador, ESPN Deportes, Fox Sports Latin America, beIN Sports Latino.",
    sportsHighlights:
      "Primera División de El Salvador (Alianza, FAS, Águila, Isidro Metapán), La Selecta national team in CONCACAF Nations League and Gold Cup, Liga Salvadoreña de Baloncesto, plus MLB and NFL via ESPN Deportes — the very large Salvadoran diaspora in LA and DC drives US sports demand.",
  },
  {
    name: "Equatorial Guinea",
    slug: "equatorial-guinea",
    code: "GQ",
    region: "Africa",
    capital: "Malabo",
    languages: ["Spanish", "French", "Portuguese"],
    currency: { name: "Central African CFA Franc", code: "XAF" },
    topBroadcasters: ["TVGE", "Asonga TV"],
    topSportsLeagues: ["Equatoguinean Primera División", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Equatorial Guinea is the rare African market that's Spanish-speaking, and TV reflects it: TVGE state plus Asonga TV in Spanish, alongside heavy Spanish satellite overspill via TVE Internacional. The country's surprise AFCON hosting (2012, 2015) put Malabo on the football map. IPTV UPG carries TVGE and Asonga plus the full TVE Internacional and Canal+ Afrique lineup.",
    channelHighlights:
      "TVGE (Televisión de Guinea Ecuatorial), Asonga TV; Spanish overspill TVE Internacional, La 1, Antena 3, Telecinco; French TF1, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+; news Africa News, BBC Mundo.",
    sportsHighlights:
      "Equatoguinean Primera División, Nzalang Nacional (National Thunder) men's national team in AFCON — semi-finalists in 2015 as hosts — and World Cup qualifiers, CAF Champions League, plus LaLiga via TVE for the Spanish-language audience.",
  },
  {
    name: "Eritrea",
    slug: "eritrea",
    code: "ER",
    region: "Africa",
    capital: "Asmara",
    languages: ["Tigrinya", "Arabic", "English"],
    currency: { name: "Eritrean Nakfa", code: "ERN" },
    topBroadcasters: ["Eri-TV"],
    topSportsLeagues: ["Eritrean Premier League", "CECAFA Cup", "Tour of Eritrea"],
    intro:
      "Eritrea's TV landscape is the state Eri-TV — a single broadcaster with three language streams (Tigrinya, Arabic, English) — and almost everyone outside government quarters relies on satellite for Ethiopian and Arabic overspill. The Eritrean diaspora in Italy, Germany, the US and Israel is the bigger TV audience than the country itself. IPTV UPG bundles Eri-TV plus full Arabic and Ethiopian satellite tiers.",
    channelHighlights:
      "Eri-TV Channel 1 (Tigrinya), Eri-TV Channel 2 (Arabic), Eri-TV Channel 3 (English); Ethiopian EBC, Kana TV; Arabic MBC 1, Al Jazeera; Italian RAI 1, RAI 2 for the strong Eritrean-Italian diaspora link; plus BBC World News and Africa News.",
    sportsHighlights:
      "Eritrean Premier League football, Red Sea Boys national team in CECAFA Cup and AFCON qualifiers when fielded, Tour of Eritrea cycling — Eritrea is a major African cycling nation, with Biniam Girmay's Tour de France stage wins headline news — plus boxing on Eri-TV.",
  },
  {
    name: "Estonia",
    slug: "estonia",
    code: "EE",
    region: "Europe",
    capital: "Tallinn",
    languages: ["Estonian", "Russian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["ETV", "ETV2", "ETV+", "Kanal 2", "TV3 Estonia", "Kanal 11"],
    topSportsLeagues: ["Meistriliiga", "Estonian Basketball League", "Estonian Cup"],
    intro:
      "Estonian TV runs across ERR public (ETV, ETV2, ETV+ for the Russian-speaking minority) plus the privates Kanal 2 and TV3 Estonia — and almost every household runs Telia or Elisa's IPTV bundle for the Premier League and Champions League. IPTV UPG carries the full ETV stack, Kanal 2, TV3 Estonia plus the Viaplay and Premier Sports tier.",
    channelHighlights:
      "ETV, ETV2, ETV+ (Russian-language); Kanal 2, Kanal 11, Kanal 12; TV3 Estonia, TV6, TV3+, TV3 Life; news ERR News, Postimees TV; sports Viaplay Sport Estonia, Setanta Sports Baltic, Eurosport.",
    sportsHighlights:
      "Meistriliiga football (FC Flora, Levadia, Paide, Nõmme Kalju), Estonian Basketball League — basketball is a major sport here, KK Kalev/Cramo a perennial Baltic contender — Estonian Cup, plus the Tallinn Marathon and rally — Ott Tänak's WRC campaigns headline on ERR.",
  },
  {
    name: "Eswatini",
    slug: "eswatini",
    code: "SZ",
    region: "Africa",
    capital: "Mbabane",
    languages: ["English", "Swazi"],
    currency: { name: "Swazi Lilangeni", code: "SZL" },
    topBroadcasters: ["ESBC (Eswatini Broadcasting and Information Service)", "Channel S"],
    topSportsLeagues: ["Eswatini Premier League", "COSAFA Cup", "AFCON qualifiers"],
    intro:
      "Eswatini's TV is a single state broadcaster (ESBC) plus the small Channel S — and almost every household runs DStv for SuperSport rugby, Premier League football and the South African novela channels. IPTV UPG carries ESBC and Channel S plus the full SABC and SuperSport lineup, the kykNET Afrikaans stack and Mzansi Magic, the same lineup customers traditionally pay DStv premium for.",
    channelHighlights:
      "ESBC TV, Channel S; South African overspill SABC 1, SABC 2, SABC 3, e.tv; pay-TV SuperSport 1–13, Mzansi Magic, Mzansi Wethu, kykNET; plus BBC World News, CNN International, Al Jazeera English.",
    sportsHighlights:
      "Eswatini Premier League football, Sihlangu Semnikati national team in COSAFA Cup and AFCON qualifiers, plus South African DStv Premiership football and United Rugby Championship via SuperSport — DStv is genuinely how most Eswatini fans watch sport.",
  },
  {
    name: "Ethiopia",
    slug: "ethiopia",
    code: "ET",
    region: "Africa",
    capital: "Addis Ababa",
    languages: ["Amharic", "Oromo", "English"],
    currency: { name: "Ethiopian Birr", code: "ETB" },
    topBroadcasters: ["EBC", "Walta TV", "Fana TV", "Kana TV", "Ethio 360 Media", "Nahoo TV"],
    topSportsLeagues: ["Ethiopian Premier League", "AFCON qualifiers", "Great Ethiopian Run"],
    intro:
      "Ethiopian TV has exploded in the last decade — EBC's state stack is now flanked by Walta, Fana, Kana (Amharic-dubbed Turkish dramas), Ethio 360 and Nahoo, and Kana TV alone reshaped primetime around dubbed novelas. IPTV UPG bundles the full Amharic-language lineup —and the same login restores Ethiopian TV for the very large diaspora in DC, Toronto, London, Stockholm and Dubai.",
    channelHighlights:
      "EBC 1, EBC 2, EBC 3, EBC News, EBC Entertainment; Walta TV, Fana TV, Kana TV (Amharic-dubbed dramas), Ethio 360, Nahoo TV, JTV Ethiopia, Awash TV, LTV Ethiopia, Arts TV; news ESAT, OMN; plus BBC Amharic and VOA Amharic.",
    sportsHighlights:
      "Ethiopian Premier League football, Walias national team in AFCON and World Cup qualifiers, the Great Ethiopian Run road race in Addis, plus athletics — Ethiopia's distance running tradition (Kenenisa Bekele, Tirunesh Dibaba lineage) is the global headline sports product — on EBC and Fana.",
  },
  {
    name: "Fiji",
    slug: "fiji",
    code: "FJ",
    region: "Oceania",
    capital: "Suva",
    languages: ["English", "Fijian", "Hindi"],
    currency: { name: "Fijian Dollar", code: "FJD" },
    topBroadcasters: ["FBC TV", "Fiji TV (Mai TV)", "Walesi"],
    topSportsLeagues: ["Fiji Rugby Sevens", "Super Rugby Pacific (Fijian Drua)", "Fijian Premier League Football"],
    intro:
      "Fijian TV runs across FBC TV and Mai TV plus the Walesi digital free-to-air platform — and rugby sevens, not football or league, is the headline live sport. Fiji's Olympic gold-medal sevens program turned Suva's pitches into a national obsession. IPTV UPG carries FBC TV, Mai TV plus the Sky Sport NZ tier with Super Rugby Pacific and All Blacks tests.",
    channelHighlights:
      "FBC TV, FBC News, Fiji TV / Mai TV, Walesi (Fiji One, Mai TV, Pacific 7); NZ overspill TVNZ 1, Sky Sport NZ 1–9; Indian Hindi Star Plus, Sony Entertainment for the very large Indo-Fijian audience; plus BBC World News and ABC Australia.",
    sportsHighlights:
      "Fiji Rugby Sevens (Olympic champions 2016, 2020), Fijian Drua in Super Rugby Pacific, Flying Fijians national rugby XV team, Fijian Premier League football, plus the Pacific Nations Cup and Rugby World Cup runs — Fiji's 2023 RWC quarter-final remains headline material.",
  },
  {
    name: "Gabon",
    slug: "gabon",
    code: "GA",
    region: "Africa",
    capital: "Libreville",
    languages: ["French"],
    currency: { name: "Central African CFA Franc", code: "XAF" },
    topBroadcasters: ["Gabon Télévision", "Gabon 24", "TV+ Gabon"],
    topSportsLeagues: ["Gabon Championnat National D1", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Gabonese TV is anchored on Gabon Télévision plus the international Gabon 24 news channel and the private TV+, with Canal+ Afrique carrying the Ligue 1 and Champions League rights — heavy French satellite overspill is the default. IPTV UPG bundles the full Gabonese stack alongside TF1, France 2 and Canal+ Afrique with Aubameyang-era Panthers nostalgia and AFCON 2017 hosting memories — one login.",
    channelHighlights:
      "Gabon Télévision, Gabon 24, TV+ Gabon, RTN Gabon; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; news Africa News, BBC Afrique, RFI Télé.",
    sportsHighlights:
      "Gabon Championnat National D1, Panthers national team in AFCON — quarter-finalists 2012 — and World Cup qualifiers, CAF Champions League and Confederation Cup, plus French Ligue 1 and the Tropicale Amissa Bongo cycling stage race on Canal+ Sport.",
  },
  {
    name: "Gambia",
    slug: "gambia",
    code: "GM",
    region: "Africa",
    capital: "Banjul",
    languages: ["English"],
    currency: { name: "Gambian Dalasi", code: "GMD" },
    topBroadcasters: ["GRTS (Gambia Radio and Television Services)", "QTV Gambia", "Eye Africa TV"],
    topSportsLeagues: ["GFA League First Division", "Africa Cup of Nations", "WAFU Cup of Nations"],
    intro:
      "Gambian TV runs around GRTS state with smaller private channels QTV and Eye Africa TV, and the Scorpions' AFCON 2021 quarter-final debut upended a previously thin sports schedule. IPTV UPG bundles GRTS, QTV plus French overspill, Canal+ Afrique and English Premier League coverage —same login for the very large Gambian diaspora in the UK, Spain and the US.",
    channelHighlights:
      "GRTS (Gambia Radio and Television Services), QTV Gambia, Eye Africa TV; Senegalese overspill RTS, 2STV, TFM; French TF1, France 24, TV5 Monde Afrique; Canal+ Afrique, A+, Nollywood TV; English Premier League via beIN Sports; BBC World News.",
    sportsHighlights:
      "GFA League First Division football, Scorpions national team in AFCON — quarter-finalists on debut 2021 — and World Cup qualifiers, WAFU Cup of Nations regional tournament, plus English Premier League and CAF Champions League via beIN Sports and Canal+ Sport.",
  },
  {
    name: "Georgia",
    slug: "georgia",
    code: "GE",
    region: "Asia",
    capital: "Tbilisi",
    languages: ["Georgian"],
    currency: { name: "Georgian Lari", code: "GEL" },
    topBroadcasters: ["GPB First Channel", "Rustavi 2", "Imedi TV", "Mtavari Arkhi", "Formula TV", "TV Pirveli"],
    topSportsLeagues: ["Erovnuli Liga", "Georgian Cup", "Top 10 Rugby (Georgia)"],
    intro:
      "Georgian TV is a pitched political battleground — GPB public versus Rustavi 2, Imedi, Mtavari Arkhi and TV Pirveli on the private side — and 2024 Euro qualification reshaped the sports schedule with Khvicha Kvaratskhelia headline runs. IPTV UPG bundles all the major Georgian-language broadcasters, plus Russian overspill for the older audience and Setanta Sports Caucasus for football.",
    channelHighlights:
      "GPB First Channel, GPB Second Channel; Rustavi 2, Imedi TV, Mtavari Arkhi, Formula TV, TV Pirveli, PalitraNews, Comedy Channel; news Mtavari Arkhi, Formula, TV Pirveli; Russian Channel One and NTV overspill; sports Setanta Sports Caucasus 1–4, GPB First Sport.",
    sportsHighlights:
      "Erovnuli Liga football (Dinamo Tbilisi, Saburtalo, Torpedo Kutaisi), Crusaders national team in Euro qualifiers — Euro 2024 debut a national event — Georgian Cup, Top 10 rugby (Georgia is a Tier 2 rugby power — the Lelos contest the Rugby Europe Championship), plus Georgian wrestling and judo coverage.",
  },
  {
    name: "Ghana",
    slug: "ghana",
    code: "GH",
    region: "Africa",
    capital: "Accra",
    languages: ["English"],
    currency: { name: "Ghanaian Cedi", code: "GHS" },
    topBroadcasters: ["GTV", "TV3 Ghana", "Joy News", "Citi TV", "Adom TV", "UTV Ghana", "Metro TV"],
    topSportsLeagues: ["Ghana Premier League", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Ghanaian TV is one of West Africa's most competitive markets — GTV state, TV3 Ghana, Joy News, Citi TV, Adom and UTV all fight for primetime, and Black Stars qualifiers are the single biggest live event on the schedule. IPTV UPG bundles the full Ghanaian English- and Twi-language lineup plus SuperSport Africa and Canal+ Sport with Ghana Premier League and CAF football —same login for the very large Ghanaian diaspora in the UK, US and Italy.",
    channelHighlights:
      "GTV (Ghana Broadcasting Corp), TV3 Ghana, Joy News, Joy Prime, Citi TV, Adom TV, UTV Ghana, Metro TV, GHOne TV, Ahomka TV, Despite Media's Okay FM TV; news JoyNews, Citi Newsroom, TV3 News; sports SuperSport Football, Canal+ Sport, beIN Sports.",
    sportsHighlights:
      "Ghana Premier League football (Asante Kotoko, Hearts of Oak, Aduana Stars, Medeama), Black Stars national team in AFCON (four-time champions) and World Cup qualifiers, CAF Champions League and Confederation Cup, plus boxing (Ghana has produced multiple world champions) on GTV.",
  },
  {
    name: "Grenada",
    slug: "grenada",
    code: "GD",
    region: "Caribbean",
    capital: "Saint George's",
    languages: ["English"],
    currency: { name: "East Caribbean Dollar", code: "XCD" },
    topBroadcasters: ["GBN (Grenada Broadcasting Network)", "MTV Grenada"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League", "Grenada Premier Division"],
    intro:
      "Grenada's TV layer is GBN's two channels plus MTV Grenada — and like the rest of the Windwards, the practical lineup leans on Flow Caribbean for US network feeds and Test cricket at Queen's Park. Kirani James' Olympic-gold legacy still anchors the athletics watching. IPTV UPG bundles GBN, the CMC regional feed and the full US sports tier.",
    channelHighlights:
      "GBN TV 6, GBN TV 8, MTV Grenada; Caribbean Media Corporation, CaribVision; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2 plus premium cable HBO and Showtime; Flow Sports 1 & 2 and SportsMax for cricket; BBC World News.",
    sportsHighlights:
      "West Indies Tests, ODIs and T20Is (matches at Queen's Park Saint George's), Caribbean Premier League T20, Grenada Premier Division football, plus 400m athletics around Kirani James' legacy and the CARIFTA Games.",
  },
  {
    name: "Guatemala",
    slug: "guatemala",
    code: "GT",
    region: "Central America",
    capital: "Guatemala City",
    languages: ["Spanish"],
    currency: { name: "Guatemalan Quetzal", code: "GTQ" },
    topBroadcasters: ["Canal 3 Guatemala", "Canal 7", "TN23", "Guatevisión", "TV Azteca Guatemala", "Canal Antigua"],
    topSportsLeagues: ["Liga Nacional de Fútbol de Guatemala", "CONCACAF Champions Cup", "Liga Nacional de Baloncesto"],
    intro:
      "Guatemalan TV is dominated by Albavisión's Canal 3, Canal 7 and TN23 cluster — practically a private monopoly — with Guatevisión and TV Azteca providing the only real competition. IPTV UPG bundles Canal 3, Canal 7, TN23, Guatevisión, Azteca Guatemala and Canal Antigua plus Tigo Sports Guatemala and ESPN Deportes for La Bicolor coverage.",
    channelHighlights:
      "Canal 3 Guatemala, Canal 7, Canal 11, TN23, Guatevisión Canal 25, TV Azteca Guatemala (Canal 31), Canal Antigua Canal 27; news Telediario Canal 7, TN23, Guatevisión Noticias; sports Tigo Sports Guatemala, ESPN Deportes, Fox Sports, beIN Sports Latino.",
    sportsHighlights:
      "Liga Nacional de Fútbol de Guatemala (Comunicaciones, Municipal, Antigua GFC), CONCACAF Champions Cup, La Bicolor national team in CONCACAF Nations League and Gold Cup, Liga Nacional de Baloncesto, plus Liga MX and MLS via Tigo Sports — the Guatemalan diaspora in LA is a huge market for US-based fixtures.",
  },
  {
    name: "Guinea",
    slug: "guinea",
    code: "GN",
    region: "Africa",
    capital: "Conakry",
    languages: ["French"],
    currency: { name: "Guinean Franc", code: "GNF" },
    topBroadcasters: ["RTG (Radio Télévision Guinéenne)", "Espace TV Guinée", "Évasion TV"],
    topSportsLeagues: ["Guinée Championnat National", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Guinean TV is built on RTG's state stack plus the privates Espace TV and Évasion TV, with Canal+ Afrique providing the AFCON, Ligue 1 and Champions League coverage that Syli Nationale fans actually want. IPTV UPG bundles the full Conakry lineup plus the francophone Africa satellite tier, with AFCON 2025 hosting (Guinea-named co-host until reassignment) nostalgia still relevant.",
    channelHighlights:
      "RTG 1, RTG 2, Espace TV Guinée, Évasion TV, Sabari TV, Djoma TV, Africa 24 Guinea; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News and BBC Afrique.",
    sportsHighlights:
      "Guinée Championnat National (Horoya AC, Hafia FC), Syli Nationale men's team in AFCON and World Cup qualifiers, CAF Champions League and Confederation Cup, plus French Ligue 1 via Canal+ Sport — Naby Keïta and Serhou Guirassy's club-level fixtures drive the diaspora viewing.",
  },
  {
    name: "Guinea-Bissau",
    slug: "guinea-bissau",
    code: "GW",
    region: "Africa",
    capital: "Bissau",
    languages: ["Portuguese"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["TGB (Televisão da Guiné-Bissau)"],
    topSportsLeagues: ["Campeonato Nacional da Guiné-Bissau", "Africa Cup of Nations", "WAFU Cup"],
    intro:
      "Guinea-Bissau's TV starts and (almost) ends with TGB, the state broadcaster — and most households fill the rest of the lineup with Portuguese RTP and Senegalese satellite. The Djurtus' AFCON appearances since 2017 have turned the national team into the main appointment viewing. IPTV UPG bundles TGB plus the full RTP and Canal+ Afrique stack.",
    channelHighlights:
      "TGB (Televisão da Guiné-Bissau); Portuguese RTP1, RTP África, RTP Internacional, SIC; French/Senegalese TF1, RTS, TFM; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News and BBC Afrique.",
    sportsHighlights:
      "Campeonato Nacional da Guiné-Bissau football, Djurtus national team in AFCON (regular qualifiers since 2017) and World Cup qualifiers, WAFU Cup, plus Portuguese Primeira Liga via Sport TV and CAF Champions League on Canal+ Sport.",
  },
  {
    name: "Guyana",
    slug: "guyana",
    code: "GY",
    region: "South America",
    capital: "Georgetown",
    languages: ["English"],
    currency: { name: "Guyanese Dollar", code: "GYD" },
    topBroadcasters: ["NCN (National Communications Network)", "GTV", "Capitol News", "Kaieteur TV"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League", "GFF Elite League"],
    intro:
      "Guyana sits inside the Caribbean cricket bloc despite being on the South American mainland — and the country's oil boom is reshaping TV consumption as quickly as DTH growth in Georgetown allows. IPTV UPG bundles NCN, GTV, Capitol and Kaieteur TV plus the full Flow Sports and US network lineup —Guyana Amazon Warriors CPL home games at Providence are the headline event.",
    channelHighlights:
      "NCN (National Communications Network), GTV Channel 11, Capitol News, Kaieteur Radio TV; regional Caribbean Media Corporation, CaribVision; US overspill ABC, NBC, CBS, Fox, ESPN; Flow Sports 1 & 2, SportsMax for cricket; BBC World News.",
    sportsHighlights:
      "West Indies Test, ODI and T20I cricket (matches at Providence Stadium), Caribbean Premier League with Guyana Amazon Warriors, GFF Elite League football, plus Mashramani and CARIFTA Games athletics.",
  },
  {
    name: "Haiti",
    slug: "haiti",
    code: "HT",
    region: "Caribbean",
    capital: "Port-au-Prince",
    languages: ["French", "Haitian Creole"],
    currency: { name: "Haitian Gourde", code: "HTG" },
    topBroadcasters: ["TNH (Télévision Nationale d'Haïti)", "Télé Métropole", "Télé Caraïbes", "Télé Ginen", "Télé Pacific"],
    topSportsLeagues: ["Ligue Haïtienne", "CONCACAF Champions Cup", "Haitian National Team (Les Grenadiers)"],
    intro:
      "Haitian TV runs across TNH state plus a layer of Port-au-Prince privates — Télé Métropole, Télé Caraïbes, Télé Ginen — with French overspill and Canal+ Haïti carrying the Ligue 1 and Champions League rights. IPTV UPG bundles the full Haitian Creole and French lineup plus Canal+ and the SportsMax Caribbean feed —same login for the very large Haitian diaspora in Miami, Brooklyn and Montréal.",
    channelHighlights:
      "TNH, Télé Métropole, Télé Caraïbes, Télé Ginen, Télé Pacific, Canal Bleu, Tropic FM TV; French overspill TF1, France 2, France 24, TV5 Monde; Canal+ Haïti, Canal+ Sport; news Magik 9 TV, Le Nouvelliste TV; plus Telemundo Internacional for the Spanish-speaking border audience.",
    sportsHighlights:
      "Ligue Haïtienne football, Les Grenadiers (Haitian men's national team) in CONCACAF Nations League and Gold Cup, Les Grenadières (women's team in 2023 Women's World Cup debut), plus French Ligue 1 via Canal+ Sport and West Indies cricket via SportsMax.",
  },
  {
    name: "Holy See (Vatican)",
    slug: "holy-see-vatican",
    code: "VA",
    region: "Europe",
    capital: "Vatican City",
    languages: ["Italian", "Latin"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["CTV (Vatican Media TV)", "TV2000"],
    topSportsLeagues: ["Vatican City National Football Team", "Italian Serie A (regional viewing)", "Clericus Cup"],
    intro:
      "The Vatican's broadcasting is centred on Vatican Media (the renamed CTV) plus close ties to TV2000, the Italian Catholic Church's flagship channel — and the real TV reality inside the walls is identical to Rome: RAI and Mediaset are watched alongside the papal liturgy feeds. IPTV UPG bundles Vatican Media's coverage plus the full Italian RAI/Mediaset stack.",
    channelHighlights:
      "Vatican Media TV (formerly CTV), TV2000 (Italian Catholic broadcaster), Padre Pio TV; Italian RAI 1, RAI 2, RAI 3, RAI Storia, RAI Cultura; Mediaset Canale 5, Italia 1, Rete 4; news Sky TG24, RAI News 24; plus the EWTN English-language Catholic feed for international viewing.",
    sportsHighlights:
      "Vatican City men's national football team (unrecognised by FIFA — plays friendlies against San Marino, Monaco, Liechtenstein), Italian Serie A (RAI and DAZN feeds available to resident clergy), the Clericus Cup contested by Vatican seminaries, plus the Giro d'Italia stages passing through Rome on RAI Sport.",
  },
  {
    name: "Honduras",
    slug: "honduras",
    code: "HN",
    region: "Central America",
    capital: "Tegucigalpa",
    languages: ["Spanish"],
    currency: { name: "Honduran Lempira", code: "HNL" },
    topBroadcasters: ["Televicentro (Canal 5, 3, 7)", "Televisión Hondureña Canal 11", "TSi", "VTV Honduras", "TN5"],
    topSportsLeagues: ["Liga Nacional de Honduras", "CONCACAF Champions Cup", "CONCACAF Nations League"],
    intro:
      "Honduran TV is dominated by Televicentro's Canal 5, 3 and 7 cluster plus TSi and VTV — and Liga Nacional rights have bounced between Tigo Sports and the Televicentro channels. IPTV UPG bundles the Televicentro group, TSi, VTV and Canal 11 plus Tigo Sports Honduras and ESPN Deportes with full Liga Nacional and La H national team coverage.",
    channelHighlights:
      "Televicentro Canal 5, Canal 3, Canal 7; TSi Canal 21, VTV Honduras, Televisión Hondureña Canal 11, Hable Como Habla TV, Telesistema Hondureño; news Hoy Mismo, Telediario, TN5; sports Tigo Sports Honduras, ESPN Deportes, Fox Sports Latin America, beIN Sports Latino.",
    sportsHighlights:
      "Liga Nacional de Honduras (Olimpia, Motagua, Marathón, Real España), La H national team in CONCACAF Nations League and World Cup qualifying, CONCACAF Champions Cup, plus MLS — the Honduran diaspora in Houston, Miami and New Orleans drives strong demand.",
  },
  {
    name: "Hungary",
    slug: "hungary",
    code: "HU",
    region: "Europe",
    capital: "Budapest",
    languages: ["Hungarian"],
    currency: { name: "Hungarian Forint", code: "HUF" },
    topBroadcasters: ["M1", "M4 Sport", "M5", "Duna TV", "RTL Klub", "TV2", "ATV", "Hír TV"],
    topSportsLeagues: ["Nemzeti Bajnokság I (NB I)", "Magyar Kupa", "Magyar Vízilabda OB I (Water Polo)", "Hungarian Grand Prix"],
    intro:
      "Hungarian TV is anchored on the MTVA public channels (M1, M4 Sport, M5, Duna) and the two big commercial broadcasters RTL Klub and TV2 — with M4 Sport carrying the NB I football, Magyar Kupa and the Hungarian national team. IPTV UPG bundles all the MTVA channels, RTL Klub, TV2 and the Sport1/Sport2 tier —the same login restores Magyar TV for the diaspora in Germany, the UK and Slovakia.",
    channelHighlights:
      "M1, M2, M3, M4 Sport, M5 culture, Duna TV, Duna World; RTL Klub, RTL Gold, Cool TV, Film+, RTL Spike; TV2, Super TV2, Mozi+, Izaura TV; news ATV, Hír TV, HírTV; sports Sport1, Sport2, Spíler TV, Arena 4 with NB I and European football.",
    sportsHighlights:
      "Nemzeti Bajnokság I (NB I) football (Ferencváros, Puskás Akadémia, Újpest), Magyar Kupa, Magyar Aranycsapat-era nostalgia driving national team viewing, Magyar Vízilabda OB I water polo — Hungary is the world's top water polo nation — plus the Hungarian Grand Prix F1 weekend at the Hungaroring.",
  },
  {
    name: "Iceland",
    slug: "iceland",
    code: "IS",
    region: "Europe",
    capital: "Reykjavík",
    languages: ["Icelandic"],
    currency: { name: "Icelandic Króna", code: "ISK" },
    topBroadcasters: ["RÚV", "RÚV 2", "Stöð 2", "Sjónvarp Símans", "Hringbraut"],
    topSportsLeagues: ["Besta deild karla (Úrvalsdeild)", "Icelandic Cup", "Olís-deild (Handball)"],
    intro:
      "Icelandic TV runs across RÚV public and the privates Stöð 2 and Sjónvarp Símans — and the Strákarnir okkar (national football team) Euro 2016 quarter-final remains the appointment-viewing benchmark every household measures against. Handball is genuinely the second sport. IPTV UPG bundles RÚV, RÚV 2, Stöð 2 and the Stöð 2 Sport tier with Besta deild and Premier League coverage.",
    channelHighlights:
      "RÚV, RÚV 2; Stöð 2, Stöð 2 Fjölskyld, Stöð 2 Bíó, Stöð 2 Krakkar; Sjónvarp Símans, Sjónvarp Símans Premium; Hringbraut, N4; sports Stöð 2 Sport 1–4, plus Premier League and Champions League nights.",
    sportsHighlights:
      "Besta deild karla football (Valur, KR Reykjavík, Stjarnan, Breiðablik), Icelandic Cup, Strákarnir okkar national team — Euro 2016 quarter-final, 2018 World Cup debut — Olís-deild handball (Iceland reached the 2008 Olympic men's handball final), plus the Reykjavík Marathon.",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    code: "ID",
    region: "Asia",
    capital: "Jakarta",
    languages: ["Indonesian"],
    currency: { name: "Indonesian Rupiah", code: "IDR" },
    topBroadcasters: ["TVRI", "RCTI", "SCTV", "Indosiar", "MetroTV", "Trans TV", "Trans 7", "ANTV", "MNCTV", "NET"],
    topSportsLeagues: ["Liga 1 Indonesia", "Indonesian Cup (Piala Indonesia)", "BWF World Tour Badminton", "IBL Basketball"],
    intro:
      "Indonesian TV is one of Asia's most crowded markets — 10+ free-to-air national networks compete in primetime, with sinetron dramas, dangdut variety and badminton sharing the schedule. Liga 1 rights split between Indosiar, SCTV and Vidio's pay tier. IPTV UPG bundles the full FTA lineup — TVRI, RCTI, SCTV, Indosiar, MetroTV, Trans TV, Trans 7, ANTV, MNCTV, NET, GTV — plus Vidio's Liga 1 coverage.",
    channelHighlights:
      "TVRI Nasional, TVRI Sport, TVRI World; RCTI, MNCTV, GTV, iNews; SCTV, Indosiar, O Channel, Mentari TV; Trans TV, Trans 7, CNN Indonesia, CNBC Indonesia; ANTV, tvOne; MetroTV, NET, Kompas TV; sports Vidio Sports, Mola TV, SPOTV Indonesia.",
    sportsHighlights:
      "Liga 1 Indonesia (Persija Jakarta, Persib Bandung, Arema FC, Bali United, PSM Makassar), Piala Indonesia, Indonesian national football team (Garuda) in AFF Cup and AFC qualifiers, IBL basketball, plus BWF badminton — Indonesia is genuinely one of the world's top three badminton nations and tournament finals draw enormous primetime audiences.",
  },
  {
    name: "Iran",
    slug: "iran",
    code: "IR",
    region: "Middle East",
    capital: "Tehran",
    languages: ["Persian (Farsi)"],
    currency: { name: "Iranian Rial", code: "IRR" },
    topBroadcasters: ["IRIB TV1", "IRIB TV2", "IRIB TV3", "IRIB Varzesh", "Press TV", "Manoto", "iFilm", "GEM TV"],
    topSportsLeagues: ["Persian Gulf Pro League", "Hazfi Cup", "AFC Asian Cup", "Iran national football team (Team Melli)"],
    intro:
      "Iranian TV inside the country is the IRIB state stack (TV1–TV6, Varzesh sports), but the realistic viewing for most Tehran and Isfahan households — and the entire Iranian diaspora in LA, London, Toronto and Dubai — is satellite: Manoto, GEM TV, BBC Persian and iFilm. IPTV UPG bundles the IRIB channels plus the full Farsi-language diaspora tier.",
    channelHighlights:
      "IRIB TV1, TV2, TV3, TV4, TV5 Tehran, IRIB Varzesh (sports), IRIB Nasim (comedy), IRIB Pooya (kids); diaspora satellite Manoto, Manoto Plus, iFilm (Farsi cinema), GEM TV, GEM Bollywood, GEM Music; news Press TV (English), BBC Persian, Iran International, Radio Farda TV.",
    sportsHighlights:
      "Persian Gulf Pro League (Persepolis, Esteghlal, Sepahan, Tractor SC), Hazfi Cup, Team Melli men's national team in AFC Asian Cup and FIFA World Cup, AFC Champions League, plus Iranian wrestling — Iran's freestyle wrestling team is a genuine global power on IRIB Varzesh.",
  },
  {
    name: "Iraq",
    slug: "iraq",
    code: "IQ",
    region: "Middle East",
    capital: "Baghdad",
    languages: ["Arabic", "Kurdish"],
    currency: { name: "Iraqi Dinar", code: "IQD" },
    topBroadcasters: ["Al Iraqiya", "Al Sharqiya", "Kurdistan TV", "Rudaw", "K24", "Al Sumaria", "Dijlah TV"],
    topSportsLeagues: ["Iraqi Premier League", "Iraq FA Cup", "AFC Asian Cup", "Iraq national team (Lions of Mesopotamia)"],
    intro:
      "Iraqi TV is a bilingual Arabic/Kurdish landscape — Al Iraqiya state, Al Sharqiya and Al Sumaria as Arabic privates, Kurdistan TV, Rudaw and K24 for the Erbil and Sulaymaniyah audience. The Lions of Mesopotamia's Asian Cup runs are the biggest live events. IPTV UPG bundles the full Iraqi Arabic and Kurdish lineup plus MBC Iraq and beIN Sports MENA.",
    channelHighlights:
      "Al Iraqiya, Al Iraqiya News, Al Iraqiya Sport; Al Sharqiya, Al Sumaria, Dijlah TV, Asia Network TV, MBC Iraq, Al Rasheed; Kurdish Kurdistan TV (KTV), Rudaw, K24, Kurdsat, Nalia Radio and Television (NRT), Zagros TV; beIN Sports MENA 1–12; news Al Arabiya, Sky News Arabia.",
    sportsHighlights:
      "Iraqi Premier League (Al-Quwa Al-Jawiya, Al-Zawraa, Al-Shorta), Iraq FA Cup, Lions of Mesopotamia in AFC Asian Cup (2007 champions) and World Cup qualifying, AFC Champions League, plus the West Asian Football Federation Championship — Iraq has won it three times.",
  },
  {
    name: "Ireland",
    slug: "ireland",
    code: "IE",
    region: "Europe",
    capital: "Dublin",
    languages: ["English", "Irish"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTÉ One", "RTÉ 2", "Virgin Media One", "Virgin Media Two", "Virgin Media Three", "TG4"],
    topSportsLeagues: ["League of Ireland Premier Division", "GAA (Hurling and Gaelic Football)", "Six Nations Rugby", "United Rugby Championship"],
    intro:
      "Irish TV runs across RTÉ public, Virgin Media (formerly TV3) and TG4 (Irish-language) — and the GAA championships, Six Nations and URC rugby are the live products families actually rearrange evenings for. IPTV UPG bundles RTÉ One, RTÉ 2, RTÉ News, Virgin Media One/Two/Three, TG4 plus the Sky Sports and Premier Sports tier, with full Hurling and Gaelic Football coverage.",
    channelHighlights:
      "RTÉ One, RTÉ 2, RTÉ News Now, RTÉJr; Virgin Media One, Virgin Media Two, Virgin Media Three, Virgin Media Four; TG4 (Irish-language); UK overspill BBC One NI, BBC Two NI, UTV, Channel 4; sports Sky Sports GAA (yes — that's now a thing), Sky Sports Premier League, TNT Sports Ireland, Premier Sports Ireland.",
    sportsHighlights:
      "GAA All-Ireland Hurling and Football Championships (the headline summer sports product), League of Ireland Premier Division (Shamrock Rovers, Bohemians, St Patrick's Athletic), Six Nations Rugby (Ireland are the dominant Northern Hemisphere team of the 2020s), United Rugby Championship with the four Irish provinces, plus Cheltenham horse racing.",
  },
  {
    name: "Israel",
    slug: "israel",
    code: "IL",
    region: "Middle East",
    capital: "Jerusalem",
    languages: ["Hebrew", "Arabic"],
    currency: { name: "Israeli New Shekel", code: "ILS" },
    topBroadcasters: ["Kan 11", "Keshet 12", "Reshet 13", "Channel 14 Now", "Sport 1", "Sport 5", "i24NEWS"],
    topSportsLeagues: ["Israeli Premier League (Ligat HaAl)", "Israeli Basketball Premier League", "EuroLeague (Maccabi Tel Aviv)", "Israel State Cup"],
    intro:
      "Israeli TV is a three-network race — Kan 11 public, Keshet 12 and Reshet 13 — with Sport 1 and Sport 5 carrying the Ligat HaAl and EuroLeague rights. Maccabi Tel Aviv basketball draws bigger week-to-week audiences than most football fixtures. IPTV UPG bundles the full Hebrew lineup, Arabic Makan 33, i24NEWS plus the Sport 1/5 tier —same login for the very large Israeli diaspora in the US.",
    channelHighlights:
      "Kan 11, Kan Educational, Kan Makan 33 (Arabic); Keshet 12, Reshet 13, Channel 14 Now (Now 14); HOT 3, HOT Comedy; Yes TV channels; news i24NEWS (English/French/Arabic), Walla News, Kan News; sports Sport 1, Sport 2, Sport 3, Sport 4, Sport 5, Sport 5 Plus, Charlton Sport with Ligat HaAl and EuroLeague.",
    sportsHighlights:
      "Ligat HaAl football (Maccabi Tel Aviv, Hapoel Tel Aviv, Maccabi Haifa, Beitar Jerusalem), Israeli Basketball Premier League, Maccabi Tel Aviv in EuroLeague (a regular Final Four contender), Israel State Cup, plus the Israeli men's national team's Euro qualifying run and Maccabiah Games.",
  },
  {
    name: "Jamaica",
    slug: "jamaica",
    code: "JM",
    region: "Caribbean",
    capital: "Kingston",
    languages: ["English", "Jamaican Patois"],
    currency: { name: "Jamaican Dollar", code: "JMD" },
    topBroadcasters: ["TVJ (Television Jamaica)", "CVM TV", "PBCJ", "RJR Communications"],
    topSportsLeagues: ["Jamaica Premier League (Football)", "West Indies Cricket", "Caribbean Premier League", "Reggae Boyz / Reggae Girlz"],
    intro:
      "Jamaican TV is a TVJ-versus-CVM duopoly with PBCJ providing the public-service layer — and Test cricket at Sabina Park plus the Reggae Boyz and Reggae Girlz national teams are the headline live products. Athletics — Bolt-era and post-Bolt — is the cultural centrepiece. IPTV UPG bundles TVJ, CVM, PBCJ plus the full US sports tier and SportsMax for cricket.",
    channelHighlights:
      "TVJ Television Jamaica, CVM TV, PBCJ Public Broadcasting Corporation of Jamaica, Love TV (RJR), Reggae Entertainment Television (RE TV); US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2; UK BBC One, BBC News; Flow Sports 1 & 2, SportsMax for West Indies cricket and Caribbean Premier League.",
    sportsHighlights:
      "West Indies Test, ODI and T20I cricket at Sabina Park, Caribbean Premier League with Jamaica Tallawahs, Jamaica Premier League football, Reggae Boyz and Reggae Girlz national teams in CONCACAF and FIFA windows, Jamaican sprinting on the World Athletics circuit — Shericka Jackson, Kishane Thompson, Bolt-legacy meets — plus the ISSA Boys and Girls Championships.",
  },
  {
    name: "Jordan",
    slug: "jordan",
    code: "JO",
    region: "Middle East",
    capital: "Amman",
    languages: ["Arabic"],
    currency: { name: "Jordanian Dinar", code: "JOD" },
    topBroadcasters: ["JRTV (Jordan TV)", "Roya TV", "Al Mamlaka TV"],
    topSportsLeagues: ["Jordanian Pro League", "Jordan FA Cup", "AFC Asian Cup", "WAFF Championship"],
    intro:
      "Jordan's TV landscape is Jordan TV state plus Roya TV (the dominant private) and the newer Al Mamlaka public broadcaster, with most households layering MBC, beIN Sports and OSN on top. The Nashama's run to the 2024 AFC Asian Cup final reset what national-team viewing means in Amman. IPTV UPG bundles JRTV, Roya, Al Mamlaka plus the full MBC and beIN Sports MENA tier.",
    channelHighlights:
      "JRTV Jordan TV, JRTV Sport, JRTV Educational, JRTV Quran; Roya TV, Roya News, Roya Drama; Al Mamlaka TV; pan-Arab MBC 1–4, MBC Action, MBC Drama; Rotana Khalijia, Rotana Cinema; OSN tier; beIN Sports HD 1–12 MENA; Al Arabiya, Sky News Arabia.",
    sportsHighlights:
      "Jordanian Pro League football (Al-Faisaly, Al-Wehdat, Al-Hussein), Jordan FA Cup, Al-Nashama men's national team — AFC Asian Cup 2023 finalists, beating South Korea in the semis — AFC Champions League, plus the WAFF Championship and full Saudi Pro League and European football via beIN Sports.",
  },
  {
    name: "Kazakhstan",
    slug: "kazakhstan",
    code: "KZ",
    region: "Asia",
    capital: "Astana",
    languages: ["Kazakh", "Russian"],
    currency: { name: "Kazakhstani Tenge", code: "KZT" },
    topBroadcasters: ["Khabar", "Kazakhstan TV", "Astana TV", "Channel 31", "KTK", "Qazaqstan"],
    topSportsLeagues: ["Kazakhstan Premier League", "KHL (Barys Astana)", "Kazakhstan Cup", "Boxing (national heritage)"],
    intro:
      "Kazakhstan's TV runs across the Khabar Agency stack, the state Qazaqstan, plus the privates Astana TV, Channel 31 and KTK — and the country sits at a unique bilingual Kazakh/Russian crossroads with heavy Russian satellite overspill. IPTV UPG bundles the full Kazakh-language lineup, Russian Channel One and NTV, plus Setanta Sports Kazakhstan and Qazsport.",
    channelHighlights:
      "Qazaqstan, Khabar, Khabar 24, Balapan (kids), Kazakh TV; Astana TV, Channel 31, KTK, NTK, Yelarna, ATV; Russian overspill Channel One Eurasia, Russia-1, NTV Mir, REN TV; sports Qazsport, Setanta Sports Kazakhstan; news Mir 24, Khabar 24.",
    sportsHighlights:
      "Kazakhstan Premier League football (Astana, Kairat, Tobol), Barys Astana in the KHL ice hockey, Kazakhstan Cup, plus Kazakh boxing — Gennady Golovkin's legacy and Olympic gold tradition — and the strong winter-sports/skating coverage on Qazsport.",
  },
  {
    name: "Kenya",
    slug: "kenya",
    code: "KE",
    region: "Africa",
    capital: "Nairobi",
    languages: ["English", "Swahili"],
    currency: { name: "Kenyan Shilling", code: "KES" },
    topBroadcasters: ["KBC Channel 1", "Citizen TV", "KTN", "NTV Kenya", "K24", "Inooro TV", "Kameme TV"],
    topSportsLeagues: ["Kenyan Premier League (FKF Premier League)", "AFCON qualifiers", "Kenya 7s Rugby", "Athletics"],
    intro:
      "Kenyan TV is Citizen TV-dominant on the private side with KTN, NTV and K24 fighting for the rest, plus KBC as the state broadcaster. The real Kenyan TV story is the Royal Media Services empire (Citizen, Inooro, Kameme — Kikuyu-language) reshaping local-language primetime. IPTV UPG bundles the full English, Swahili and Kikuyu lineup plus SuperSport's Premier League and athletics coverage.",
    channelHighlights:
      "KBC Channel 1, KBC English, KBC Y254; Citizen TV, Inooro TV, Kameme TV, Ramogi TV; KTN Home, KTN News; NTV Kenya, QTV; K24, TV47, Switch TV; pay-TV DStv Kenya, SuperSport, Showmax; sports SuperSport Premier League, SuperSport Action.",
    sportsHighlights:
      "FKF Premier League (Gor Mahia, AFC Leopards, Tusker FC), Harambee Stars national team in AFCON and World Cup qualifiers, Kenya Sevens Rugby on the World Rugby Sevens Series, plus athletics — Kenya is the world's dominant distance-running nation with Eliud Kipchoge, Faith Kipyegon and Beatrice Chebet headlining every World Athletics broadcast.",
  },
  {
    name: "Kiribati",
    slug: "kiribati",
    code: "KI",
    region: "Oceania",
    capital: "Tarawa",
    languages: ["English", "Gilbertese"],
    currency: { name: "Australian Dollar", code: "AUD" },
    topBroadcasters: ["BPA TV (Broadcasting and Publications Authority)"],
    topSportsLeagues: ["Kiribati National Football Championship", "OFC Nations Cup", "Pacific Games"],
    intro:
      "Kiribati has near-zero domestic broadcasting — BPA TV runs intermittent programming on South Tarawa and almost every household with a satellite dish leans on Fijian and Australian feeds. IPTV UPG carries BPA plus the full ABC Australia, FBC TV Fiji and Sky NZ tier with Pacific rugby and football coverage —the practical viewing reality for the I-Kiribati diaspora across Australia, NZ and the US.",
    channelHighlights:
      "BPA TV (Broadcasting and Publications Authority); Pacific overspill FBC TV Fiji, Mai TV Fiji, TVNZ 1, ABC Australia, ABC News; Sky Sport NZ 1–9 for rugby; plus BBC World News and Al Jazeera English.",
    sportsHighlights:
      "Kiribati National Football Championship, Kiribati national football team in OFC Nations Cup qualifying, Pacific Games — Kiribati's weightlifting tradition is the genuine medal hope — plus Super Rugby Pacific via Sky NZ and Australian sports on ABC.",
  },
  {
    name: "Kosovo",
    slug: "kosovo",
    code: "XK",
    region: "Europe",
    capital: "Pristina",
    languages: ["Albanian", "Serbian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTK 1", "RTK 2", "KTV", "RTV 21", "Klan Kosova", "T7"],
    topSportsLeagues: ["Kosovo Superleague", "Kosovan Cup", "UEFA qualifiers (Dardanët)"],
    intro:
      "Kosovo's TV landscape is built on RTK public (RTK 1 Albanian, RTK 2 Serbian) plus the privates KTV, RTV 21 and Klan Kosova — and the Dardanët national team's qualifying campaigns are now appointment viewing across Pristina and the very large diaspora in Switzerland, Germany and Sweden. IPTV UPG bundles the full Albanian-language stack plus Albanian overspill.",
    channelHighlights:
      "RTK 1, RTK 2, RTK 3, RTK 4; KTV (Koha Vision), RTV 21, Klan Kosova, T7, Top Channel Kosova; Albanian overspill Top Channel, TV Klan, Vizion Plus, RTSH; news A1+ Kosova, Kanal 10; sports SuperSport Kosova for Kosovo Superleague and European football nights.",
    sportsHighlights:
      "Kosovo Superleague (Drita, Ballkani, Prishtina, Llapi), Kosovan Cup, Dardanët national team in UEFA Euro qualifiers, plus the strong basketball tradition (Sigal Prishtina) and the diaspora-driven viewing of Granit Xhaka and Xherdan Shaqiri's Swiss club fixtures.",
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    code: "KW",
    region: "Middle East",
    capital: "Kuwait City",
    languages: ["Arabic"],
    currency: { name: "Kuwaiti Dinar", code: "KWD" },
    topBroadcasters: ["Kuwait TV 1 (KTV1)", "KTV2", "KTV Sports", "Al Rai TV", "Funoon TV", "Scope TV"],
    topSportsLeagues: ["Kuwait Premier League", "Kuwait Emir Cup", "AFC Asian Cup", "Gulf Cup"],
    intro:
      "Kuwait's TV is anchored on the state KTV channels plus the private Al Rai — and most households layer MBC, OSN and beIN Sports on top via Etisalat IPTV. The Kuwaiti national football team's old powerhouse era (1980 Asian Cup champions) still anchors the national-team viewing. IPTV UPG bundles KTV1, KTV2, KTV Sports, Al Rai plus the full MBC and beIN Sports MENA tier.",
    channelHighlights:
      "Kuwait TV 1 (KTV1), KTV2 (English), KTV Sports 1 & 2, KTV Plus, KTV Quran; Al Rai TV, Funoon TV, Scope TV; pan-Arab MBC 1–4, MBC Action, MBC Drama, MBC Masr; Rotana Khalijia, Rotana Cinema; OSN tier; beIN Sports HD 1–12 MENA; Al Arabiya.",
    sportsHighlights:
      "Kuwait Premier League football (Kuwait SC, Al-Arabi, Al-Qadsia, Al-Salmiya), Kuwait Emir Cup, Al-Azraq national team in Gulf Cup (10-time champions), AFC Asian Cup, plus the Saudi Pro League and European football via beIN Sports.",
  },
  {
    name: "Kyrgyzstan",
    slug: "kyrgyzstan",
    code: "KG",
    region: "Asia",
    capital: "Bishkek",
    languages: ["Kyrgyz", "Russian"],
    currency: { name: "Kyrgyzstani Som", code: "KGS" },
    topBroadcasters: ["KTRK", "ElTR", "NTS", "Sentyabr TV", "Apreltv", "Birinchi Radio TV"],
    topSportsLeagues: ["Kyrgyz Premier League", "AFC Asian Cup", "Kyrgyzstan Cup"],
    intro:
      "Kyrgyz TV runs across KTRK's state stack plus the privates ElTR, NTS, Sentyabr and Apreltv — and Russian satellite overspill (Channel One, NTV) remains the practical second tier for Bishkek and Osh households. IPTV UPG bundles the full Kyrgyz-language lineup, Russian channels and Setanta Sports Eurasia —Manas FC and the national team's improving AFC qualifying form included.",
    channelHighlights:
      "KTRK (Birinchi Kanal), KTRK Sport, KTRK Music, KTRK Madaniyat, Balastan (kids); ElTR, NTS, Sentyabr TV, Apreltv, 7 Kanal; Russian overspill Channel One Kyrgyzstan, RTR, NTV; sports Setanta Sports Eurasia, KTRK Sport.",
    sportsHighlights:
      "Kyrgyz Premier League football (Dordoi Bishkek, Alay Osh), Ak Shumkar national team in AFC Asian Cup and World Cup qualifying — Kyrgyzstan reached the 2019 Asian Cup knockout stage — Kyrgyzstan Cup, plus alysh and kok boru traditional sports coverage on KTRK.",
  },
  {
    name: "Laos",
    slug: "laos",
    code: "LA",
    region: "Asia",
    capital: "Vientiane",
    languages: ["Lao"],
    currency: { name: "Lao Kip", code: "LAK" },
    topBroadcasters: ["LNTV (Lao National Television)", "LNTV 3", "Lao Star Channel", "MV Lao"],
    topSportsLeagues: ["Lao Premier League", "AFF Mitsubishi Electric Cup", "SEA Games"],
    intro:
      "Lao TV is essentially LNTV's two channels plus the private Lao Star — and almost every Vientiane household runs Thai overspill (Channel 3, Channel 7, Thai PBS) as the de facto primetime layer. IPTV UPG bundles LNTV 1 & 3, Lao Star plus the full Thai network stack and beIN Sports Asia for Premier League and Asian football.",
    channelHighlights:
      "LNTV 1, LNTV 3, Lao Star Channel, MV Lao, Lao PSTV; Thai overspill Channel 3, Channel 7, Channel 5, Thai PBS, Workpoint, ONE 31; Vietnamese VTV4; sports beIN Sports Asia, TrueVisions Sports.",
    sportsHighlights:
      "Lao Premier League football, Laos national team in AFF Mitsubishi Electric Cup and AFC qualifiers, SEA Games — Laos hosts in rotation — plus Premier League and Champions League via beIN Sports Asia, and Thai League football via the Thai overspill channels.",
  },
  {
    name: "Latvia",
    slug: "latvia",
    code: "LV",
    region: "Europe",
    capital: "Riga",
    languages: ["Latvian", "Russian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["LTV1", "LTV7", "TV3 Latvia", "TV6 Latvia", "Re:TV", "RīgaTV 24"],
    topSportsLeagues: ["Latvian Higher League (Virslīga)", "Latvian Hockey Higher League", "Latvian Basketball League"],
    intro:
      "Latvian TV centres on LTV public plus TV3 Latvia and a layer of Russian-language private broadcasters serving the very large Russian-speaking minority. Ice hockey — and the Latvian national hockey team's bronze at 2023 IIHF Worlds — drives more passion than any other sport. IPTV UPG bundles LTV1, LTV7, TV3 Latvia, TV6, Re:TV plus the Viaplay and Best4Sport tier.",
    channelHighlights:
      "LTV1, LTV7; TV3 Latvia, TV6 Latvia, 3+ Latvia, LNT (now part of TV3 group); Re:TV, RīgaTV 24, Sportacentrs TV; Russian-language Pirma Pirma Riga, Russian Channel One Baltic; sports Viaplay Sport Latvia, Best4Sport, Setanta Sports Baltic.",
    sportsHighlights:
      "Virslīga football (Riga FC, RFS, Liepāja, Valmiera), Latvian Hockey Higher League with Dinamo Riga (when in KHL/now domestic), 2023 IIHF Worlds bronze nostalgia, Latvian Basketball League with VEF Rīga, plus Kristaps Porziņģis-era NBA viewing — Latvian basketball is unusually strong.",
  },
  {
    name: "Lebanon",
    slug: "lebanon",
    code: "LB",
    region: "Middle East",
    capital: "Beirut",
    languages: ["Arabic"],
    currency: { name: "Lebanese Pound", code: "LBP" },
    topBroadcasters: ["LBCI", "MTV Lebanon", "OTV Lebanon", "Al Manar", "Future TV", "NBN", "Tele Liban"],
    topSportsLeagues: ["Lebanese Premier League", "Lebanese FA Cup", "AFC Asian Cup", "FIBA Asia (Cedars basketball)"],
    intro:
      "Lebanese TV is fiercely competitive across sectarian lines — LBCI, MTV Lebanon, OTV, Al Manar, Future TV, NBN and Tele Liban each anchor a different political audience. The country is also a major Arabic-content exporter, and Lebanese drama travels across MENA. IPTV UPG bundles the full Beirut lineup plus the major pan-Arab MBC and beIN Sports MENA tier —same login for the very large Lebanese diaspora.",
    channelHighlights:
      "LBCI, LBC Sat, MTV Lebanon, OTV Lebanon, Al Manar, Future TV, Future News, NBN, Tele Liban, New TV (Al Jadeed), MTV Lebanon News; pan-Arab MBC 1–4, MBC Drama, MBC Masr; Rotana Khalijia, Rotana Cinema; OSN tier; beIN Sports HD 1–12 MENA.",
    sportsHighlights:
      "Lebanese Premier League football (Al-Ansar, Al-Ahed, Nejmeh, Safa), Lebanese FA Cup, Cedars national football team in AFC Asian Cup and World Cup qualifiers, Lebanese basketball — the Cedars are perennial FIBA Asia contenders — plus the AFC Champions League and full European football on beIN.",
  },
  {
    name: "Lesotho",
    slug: "lesotho",
    code: "LS",
    region: "Africa",
    capital: "Maseru",
    languages: ["Sesotho", "English"],
    currency: { name: "Lesotho Loti", code: "LSL" },
    topBroadcasters: ["LTV (Lesotho Television)", "TV1 Lesotho"],
    topSportsLeagues: ["Lesotho Premier League", "COSAFA Cup", "AFCON qualifiers"],
    intro:
      "Lesotho's domestic TV is essentially LTV — the state broadcaster — and almost every household runs DStv for SuperSport rugby, Premier League football and South African novelas. IPTV UPG bundles LTV plus the full SABC and SuperSport lineup, kykNET and Mzansi Magic, the same lineup customers traditionally pay DStv premium for in Maseru.",
    channelHighlights:
      "LTV (Lesotho Television), TV1 Lesotho; South African overspill SABC 1, SABC 2, SABC 3, e.tv; pay-TV SuperSport 1–13, Mzansi Magic, Mzansi Wethu, kykNET; plus BBC World News, CNN International, Al Jazeera English.",
    sportsHighlights:
      "Lesotho Premier League football, Crocodiles (Likuena) national team in COSAFA Cup and AFCON qualifiers, plus South African DStv Premiership and United Rugby Championship via SuperSport — DStv is genuinely how most Basotho fans watch sport.",
  },
  {
    name: "Liberia",
    slug: "liberia",
    code: "LR",
    region: "Africa",
    capital: "Monrovia",
    languages: ["English"],
    currency: { name: "Liberian Dollar", code: "LRD" },
    topBroadcasters: ["LBS (Liberia Broadcasting System)", "Clar TV", "Real TV", "Power TV"],
    topSportsLeagues: ["Liberian Premier League", "Africa Cup of Nations qualifiers", "WAFU Cup"],
    intro:
      "Liberian TV runs around LBS plus the privates Clar TV, Real TV and Power TV — and George Weah's pre-presidency Lone Star era still anchors most national-team conversations. IPTV UPG bundles the full Monrovia lineup plus US ABC/NBC/CBS/Fox overspill (Liberia's US affinity is unique in West Africa) and Canal+ Sport Afrique.",
    channelHighlights:
      "LBS (Liberia Broadcasting System), Clar TV, Real TV, Power TV, Sky FM TV, FrontPage Africa TV; US overspill ABC, NBC, CBS, Fox (Liberia's deep US ties make these unusually well-watched); Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News and BBC Afrique.",
    sportsHighlights:
      "Liberian Premier League football, Lone Star national team in AFCON qualifiers, WAFU Cup, plus English Premier League (Liberia's English-language affinity makes EPL the de facto biggest live product) via beIN Sports and Canal+ Sport.",
  },
  {
    name: "Libya",
    slug: "libya",
    code: "LY",
    region: "Africa",
    capital: "Tripoli",
    languages: ["Arabic"],
    currency: { name: "Libyan Dinar", code: "LYD" },
    topBroadcasters: ["Libya Al-Hadath", "Libya TV", "Al-Wataniya", "218 News"],
    topSportsLeagues: ["Libyan Premier League", "AFCON qualifiers", "CAF Champions League"],
    intro:
      "Libyan TV remains fragmented since 2011 — competing state-style broadcasters in Tripoli, Benghazi and Misrata, plus the diaspora-based Libya Al-Hadath, 218 News and Al-Wataniya feeds. IPTV UPG bundles the full Libyan Arabic-language lineup plus pan-Arab MBC and beIN Sports MENA, with Knights of the Mediterranean qualifiers and Saudi Pro League included.",
    channelHighlights:
      "Libya Al-Hadath, Libya TV, Al-Wataniya, 218 News, Al-Rasmiya, Libya Al-Ahrar; pan-Arab MBC 1–4, MBC Action, MBC Drama, MBC Masr; Rotana Khalijia, Rotana Cinema; beIN Sports HD 1–12 MENA; Al Arabiya, Al Jazeera, Sky News Arabia.",
    sportsHighlights:
      "Libyan Premier League football (Al-Ahli Tripoli, Al-Ittihad Tripoli, Al-Ahly Benghazi), Knights of the Mediterranean national team in AFCON qualifiers — Libya won AFCON 2014 Championship of African Nations — CAF Champions League, plus the Saudi Pro League and European football via beIN Sports.",
  },
  {
    name: "Liechtenstein",
    slug: "liechtenstein",
    code: "LI",
    region: "Europe",
    capital: "Vaduz",
    languages: ["German"],
    currency: { name: "Swiss Franc", code: "CHF" },
    topBroadcasters: ["1FLTV"],
    topSportsLeagues: ["Liechtenstein Football Cup", "Swiss Super League (FC Vaduz)", "Liechtenstein Ski"],
    intro:
      "Liechtenstein has one domestic TV station — 1FLTV — and almost every household runs the full Swiss SRF/RTS lineup plus German ARD/ZDF as the practical primetime layer. The principality's football team plays in the Swiss leagues. IPTV UPG bundles 1FLTV plus the full Swiss and German broadcaster stack, with FC Vaduz Swiss Super League fixtures included.",
    channelHighlights:
      "1FLTV; Swiss overspill SRF 1, SRF zwei, SRF info, RTS Un, RTS Deux, RSI LA 1; German ARD, ZDF, RTL, ProSieben, Sat.1, Vox; pay-TV Sky Sport Austria, DAZN; news n-tv, Welt, BBC World News.",
    sportsHighlights:
      "FC Vaduz in Swiss Super League / Challenge League, Liechtenstein Football Cup, the Liechtensteiner national team in Euro qualifiers — typically alongside Andorra and San Marino at the foot of qualifying groups — plus alpine skiing (Liechtenstein has produced multiple World Cup-winning skiers) on Eurosport and SRF.",
  },
  {
    name: "Lithuania",
    slug: "lithuania",
    code: "LT",
    region: "Europe",
    capital: "Vilnius",
    languages: ["Lithuanian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["LRT televizija", "LRT Plius", "LNK", "TV3 Lithuania", "BTV Lithuania", "TV6 Lithuania"],
    topSportsLeagues: ["A Lyga (football)", "Lietuvos krepšinio lyga (LKL)", "EuroLeague (Žalgiris Kaunas)"],
    intro:
      "Lithuanian TV runs across LRT public plus the privates LNK, TV3 Lithuania and BTV — and basketball, not football, is the national obsession. Žalgiris Kaunas' EuroLeague campaigns and the national team's perennial Olympic/EuroBasket runs are the live products that genuinely matter. IPTV UPG bundles LRT, LNK, TV3 Lithuania, BTV plus the Go3 / Viaplay Sport Lithuania tier.",
    channelHighlights:
      "LRT televizija, LRT Plius, LRT Lituanica; LNK, BTV, TV1 Lithuania, INFO TV; TV3 Lithuania, TV6, TV8 Lithuania; sports Go3 Sport Lithuania, Viaplay Sport Lithuania, Setanta Sports Baltic; news LRT Aktualijos, Delfi TV.",
    sportsHighlights:
      "Lietuvos krepšinio lyga (LKL) basketball — the headline sports product — Žalgiris Kaunas in EuroLeague, A Lyga football (Žalgiris Vilnius, Sūduva), Baltic Basketball League, plus the Lithuanian men's basketball team's EuroBasket and Olympic runs.",
  },
  {
    name: "Luxembourg",
    slug: "luxembourg",
    code: "LU",
    region: "Europe",
    capital: "Luxembourg City",
    languages: ["Luxembourgish", "French", "German"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTL Télé Lëtzebuerg", "Chamber TV", ".dok"],
    topSportsLeagues: ["Luxembourg National Division", "Luxembourg Cup", "Tour de Luxembourg"],
    intro:
      "Luxembourg is the unusual European market where the domestic broadcasting is essentially one player — RTL Télé Lëtzebuerg — and every household runs a trilingual mix of French TF1/France 2, German ARD/ZDF and Belgian RTBF on top. IPTV UPG bundles RTL Lëtzebuerg plus the full French, German and Belgian satellite stack —the realistic trilingual viewing reality.",
    channelHighlights:
      "RTL Télé Lëtzebuerg, Chamber TV (parliamentary), .dok (RTL documentary); French overspill TF1, France 2, France 3, M6, Canal+; German ARD, ZDF, RTL Germany, ProSieben, Sat.1, Vox; Belgian RTBF La Une, La Trois; news LCI, BFM TV, n-tv.",
    sportsHighlights:
      "Luxembourg National Division football (F91 Dudelange, Fola Esch, Differdange), Luxembourg Cup, Luxembourg national team in Euro qualifiers, Tour de Luxembourg cycling, plus French Ligue 1 and German Bundesliga via the satellite overspill.",
  },
  {
    name: "Madagascar",
    slug: "madagascar",
    code: "MG",
    region: "Africa",
    capital: "Antananarivo",
    languages: ["Malagasy", "French"],
    currency: { name: "Malagasy Ariary", code: "MGA" },
    topBroadcasters: ["TVM (Televiziona Malagasy)", "Viva TV", "Real TV", "Kolo TV", "Dream'In TV"],
    topSportsLeagues: ["THB Champions League (Malagasy Pro League)", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Madagascar's TV runs around TVM state plus the privates Viva, Real TV, Kolo and Dream'In — and the Barea national team's surprise AFCON 2019 quarter-final remains the country's biggest sporting moment. IPTV UPG bundles the full Malagasy and French lineup plus Canal+ Afrique with Ligue 1 and CAF football —same login for the large Malagasy diaspora in France.",
    channelHighlights:
      "TVM (Televiziona Malagasy), Viva TV, Real TV, Kolo TV, Dream'In TV, MaTV, RTA, Record TV Madagascar; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV.",
    sportsHighlights:
      "THB Champions League (Malagasy Pro League — CNaPS Sport, Fosa Juniors, Ajesaia), Barea national team in AFCON (2019 quarter-finalists on debut) and World Cup qualifiers, CAF Champions League, plus French Ligue 1 via Canal+ Sport.",
  },
  {
    name: "Malawi",
    slug: "malawi",
    code: "MW",
    region: "Africa",
    capital: "Lilongwe",
    languages: ["English", "Chichewa"],
    currency: { name: "Malawian Kwacha", code: "MWK" },
    topBroadcasters: ["MBC TV (Malawi Broadcasting Corporation)", "Times TV", "Zodiak Broadcasting Station", "Mibawa TV"],
    topSportsLeagues: ["Malawian Super League", "AFCON qualifiers", "COSAFA Cup"],
    intro:
      "Malawi's TV runs around MBC state plus Times TV, Zodiak Broadcasting and Mibawa — and almost every middle-class household runs DStv for SuperSport rugby, Premier League football and the South African novela channels. IPTV UPG bundles the full Malawian lineup plus SABC and SuperSport, with Flames national team coverage and Bullets vs Wanderers derbies included.",
    channelHighlights:
      "MBC TV, MBC TV 2, Times TV, Zodiak TV, Mibawa TV; South African overspill SABC 1, SABC 2, SABC 3, e.tv; pay-TV SuperSport 1–13, Mzansi Magic, Mzansi Wethu, kykNET; plus BBC World News, CNN International, Al Jazeera English.",
    sportsHighlights:
      "Malawian Super League (Nyasa Big Bullets, Mighty Mukuru Wanderers, Silver Strikers), Flames national team in AFCON and World Cup qualifiers, COSAFA Cup, plus DStv Premiership and UEFA Champions League via SuperSport.",
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    code: "MY",
    region: "Asia",
    capital: "Kuala Lumpur",
    languages: ["Malay", "English", "Chinese", "Tamil"],
    currency: { name: "Malaysian Ringgit", code: "MYR" },
    topBroadcasters: ["RTM TV1", "RTM TV2", "TV3", "NTV7", "8TV", "TV9", "Astro Ria", "Astro Prima", "Astro Awani"],
    topSportsLeagues: ["Malaysia Super League", "AFC Cup", "Thomas Cup Badminton", "Sepang F1 (history)"],
    intro:
      "Malaysian TV is a Media Prima versus Astro fight — RTM state, TV3 dominant on free-to-air, plus Astro's full pay-TV empire and the multilingual Malay/English/Chinese/Tamil channel split. Badminton (Lee Zii Jia, Pearly Tan/Thinaah Muralitharan) is the headline sport. IPTV UPG bundles the full RTM and Media Prima lineup, Astro's entertainment tier and Astro SuperSport with EPL.",
    channelHighlights:
      "RTM TV1, TV2, TV Okey, Berita RTM, Sukan RTM; Media Prima TV3, NTV7, 8TV, TV9, Drama Sangat; Astro Ria, Astro Prima, Astro Citra, Astro Oasis, Astro Mustika, Astro Bella, Astro Vaanavil (Tamil), Astro AEC (Chinese); news Astro Awani, Bernama TV, CNN International; sports Astro SuperSport 1–5, beIN Sports Asia, Premier League.",
    sportsHighlights:
      "Malaysia Super League football (Johor Darul Ta'zim, Selangor FC, Sabah FC), AFC Cup with JDT, Thomas Cup and All-England badminton — Malaysian badminton is genuinely a national obsession — plus the Sepang International Circuit MotoGP weekend and Premier League via Astro.",
  },
  {
    name: "Maldives",
    slug: "maldives",
    code: "MV",
    region: "Asia",
    capital: "Malé",
    languages: ["Dhivehi", "English"],
    currency: { name: "Maldivian Rufiyaa", code: "MVR" },
    topBroadcasters: ["PSM (Television Maldives)", "TVM", "Raajje TV", "Channel 13 Maldives"],
    topSportsLeagues: ["Dhivehi Premier League", "AFC Cup", "SAFF Championship"],
    intro:
      "Maldives' TV is PSM (Public Service Media) plus Raajje TV and Channel 13 — and almost every Malé household and resort runs heavy satellite via Indian Star, Sony and Zee feeds, alongside Sri Lankan ITN. IPTV UPG bundles PSM, Raajje TV plus the full Indian Hindi and Tamil entertainment lineup and Star Sports for cricket.",
    channelHighlights:
      "PSM TVM (Television Maldives), Yes TV (PSM 2), Raajje TV, Channel 13 Maldives, MNBC; Indian Star Plus, Sony Entertainment, Zee TV, Colors, Star Tamil, Sun TV; sports Star Sports 1, Sony Sports Ten; news NDTV 24x7, BBC World News.",
    sportsHighlights:
      "Dhivehi Premier League football (Maziya, New Radiant, Club Eagles), Maldives national team in SAFF Championship and AFC Asian Cup qualifying, AFC Cup, plus Indian Premier League cricket (the de facto biggest live sports product) and English Premier League via Star Sports.",
  },
  {
    name: "Mali",
    slug: "mali",
    code: "ML",
    region: "Africa",
    capital: "Bamako",
    languages: ["French"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["ORTM (Office de Radiodiffusion-Télévision du Mali)", "Africable", "Renouveau TV"],
    topSportsLeagues: ["Malien Première Division", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Malian TV runs around ORTM state plus the pan-African Africable based in Bamako and the private Renouveau TV — and the Aigles national team's perennial AFCON quarter-final runs are the headline live product. IPTV UPG bundles the full ORTM and Africable lineup plus Canal+ Afrique and French TF1/France 2, with CAF Champions League and Stade Malien fixtures included.",
    channelHighlights:
      "ORTM 1, ORTM 2, Africable, Renouveau TV, TM1, TM2; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News, BBC Afrique, RFI Télé.",
    sportsHighlights:
      "Malien Première Division (Stade Malien, Djoliba AC, AS Réal), Aigles national team in AFCON (AFCON 1972 finalists, multiple quarter-finals) and World Cup qualifiers, CAF Champions League, plus French Ligue 1 (Mali has produced multiple Ligue 1 stars) via Canal+ Sport.",
  },
  {
    name: "Malta",
    slug: "malta",
    code: "MT",
    region: "Europe",
    capital: "Valletta",
    languages: ["Maltese", "English"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["TVM (Television Malta)", "ONE TV", "NET TV", "Smash TV", "F Living"],
    topSportsLeagues: ["Maltese Premier League", "FA Trophy (Malta)", "Maltese Cup"],
    intro:
      "Malta's TV runs across TVM public plus the party-affiliated ONE TV (Labour) and NET TV (Nationalist) — uniquely partisan even by Mediterranean standards — and the Smash TV/Living channels filling out the dial. Italian RAI and Mediaset overspill is the practical second layer. IPTV UPG bundles TVM, ONE, NET, Smash plus the full Italian and Sky Italia stack.",
    channelHighlights:
      "TVM, TVM 2, TVM News+, TVM Sport; ONE TV, NET TV, Smash TV, F Living; Italian overspill RAI 1, RAI 2, RAI 3, Mediaset Canale 5, Italia 1, Rete 4, Sky Italia tier; UK overspill BBC One, BBC News; sports Sky Sport Italia, DAZN Italia.",
    sportsHighlights:
      "Maltese Premier League football (Hibernians, Birkirkara, Floriana, Valletta), Maltese FA Trophy, Maltese national team in Euro qualifiers, plus Italian Serie A via Sky Italia and Premier League — Malta's bilingual English audience makes EPL the largest watched live product.",
  },
  {
    name: "Marshall Islands",
    slug: "marshall-islands",
    code: "MH",
    region: "Oceania",
    capital: "Majuro",
    languages: ["English", "Marshallese"],
    currency: { name: "US Dollar", code: "USD" },
    topBroadcasters: ["V7AB (Marshall Islands Broadcasting)", "MBC TV"],
    topSportsLeagues: ["Marshall Islands Soccer Federation", "Pacific Games", "Micronesian Games"],
    intro:
      "The Marshall Islands has near-zero domestic TV — V7AB and MBC TV operate on Majuro, and the practical viewing layer is US AFN (American Forces Network) overspill from Kwajalein and a heavy reliance on satellite. IPTV UPG bundles V7AB plus full US ABC/NBC/CBS/Fox/ESPN feeds, Hawaiian KGMB/KITV and the Pacific NZ tier.",
    channelHighlights:
      "V7AB (Marshall Islands Broadcasting), MBC TV; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2, NFL Network; Hawaiian KGMB, KITV; Pacific FBC TV Fiji, TVNZ 1; plus BBC World News, AFN.",
    sportsHighlights:
      "Marshall Islands Soccer Federation tournaments, Pacific Games and Micronesian Games, plus NFL/NBA/MLB via US satellite — the Marshall Islands diaspora in Arkansas (the largest off-island population) drives strong US-sports demand.",
  },
  {
    name: "Mauritania",
    slug: "mauritania",
    code: "MR",
    region: "Africa",
    capital: "Nouakchott",
    languages: ["Arabic", "French"],
    currency: { name: "Mauritanian Ouguiya", code: "MRU" },
    topBroadcasters: ["TVM (Télévision de Mauritanie)", "El Mourabitoune TV", "Sahel TV", "Chinguitt TV"],
    topSportsLeagues: ["Mauritanian Super D1", "Africa Cup of Nations", "Arab Cup"],
    intro:
      "Mauritania's TV is anchored on TVM state plus a layer of newer private Arabic/French bilingual channels — and the Lions of Chinguetti's AFCON debut in 2019 and consistent qualification since has put the national team firmly in primetime. IPTV UPG bundles the full Mauritanian lineup plus MBC, beIN Sports MENA and Canal+ Afrique.",
    channelHighlights:
      "TVM (Télévision de Mauritanie), TVM 2 (Arabic), El Mourabitoune TV, Sahel TV, Chinguitt TV, Al Wataniya; Arabic MBC 1, MBC Masr, Al Jazeera, Al Arabiya; French TF1, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, beIN Sports MENA.",
    sportsHighlights:
      "Mauritanian Super D1 football (FC Tevragh-Zeïna, Nouadhibou, ASC Snim), Lions of Chinguetti national team in AFCON (2019 debut, repeat qualifiers) and World Cup qualifying, Arab Cup, plus French Ligue 1 and CAF Champions League via Canal+ Sport.",
  },
  {
    name: "Mauritius",
    slug: "mauritius",
    code: "MU",
    region: "Africa",
    capital: "Port Louis",
    languages: ["English", "French", "Mauritian Creole"],
    currency: { name: "Mauritian Rupee", code: "MUR" },
    topBroadcasters: ["MBC TV (Mauritius Broadcasting Corporation)", "MBC 1", "MBC 2", "MBC 3"],
    topSportsLeagues: ["Mauritian League", "Indian Ocean Island Games", "AFCON qualifiers"],
    intro:
      "Mauritius' TV is dominated by the MBC's seven-channel state stack — uniquely multilingual with English, French, Creole, Hindi/Bhojpuri and Tamil programming reflecting the island's demographics. IPTV UPG bundles the full MBC lineup plus French TF1/France 2, Indian Star Plus/Sony, and SuperSport via Canal+ Afrique —the realistic Indo-Mauritian and Franco-Mauritian viewing reality.",
    channelHighlights:
      "MBC 1, MBC 2, MBC 3, Bhojpuri TV (MBC), Senn Kreol (MBC), Channel TamiLeo, MBC Sat; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Indian Star Plus, Sony Entertainment, Zee TV, Sun TV, Star Vijay; sports Canal+ Afrique, SuperSport, Star Sports.",
    sportsHighlights:
      "Mauritian Premier League football, Club M national team in AFCON qualifiers and Indian Ocean Island Games, plus Indian Premier League cricket (the de facto biggest live sports product for the Indo-Mauritian audience) via Star Sports, and French Ligue 1 via Canal+ Sport.",
  },
  {
    name: "Micronesia",
    slug: "micronesia",
    code: "FM",
    region: "Oceania",
    capital: "Palikir",
    languages: ["English"],
    currency: { name: "US Dollar", code: "USD" },
    topBroadcasters: ["PCS-TV", "FSM TV", "Yap State TV"],
    topSportsLeagues: ["FSM Football Association", "Pacific Games", "Micronesian Games"],
    intro:
      "The Federated States of Micronesia has minimal domestic broadcasting — PCS-TV and a handful of state-level channels — with US AFN and satellite feeds providing the practical viewing layer across Pohnpei, Yap and Chuuk. IPTV UPG bundles the local feeds plus full US ABC/NBC/CBS/Fox/ESPN, Japanese NHK and Pacific NZ.",
    channelHighlights:
      "PCS-TV, FSM TV (Pohnpei), Yap State TV, Chuuk TV; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2, NFL Network; Japanese NHK General; Pacific FBC TV Fiji, TVNZ 1; plus BBC World News and AFN.",
    sportsHighlights:
      "FSM Football Association tournaments, Pacific Games and Micronesian Games (FSM hosts in rotation), plus US sports — NFL, MLB, NBA — via US overspill, given the strong US affinity through the Compact of Free Association.",
  },
  {
    name: "Moldova",
    slug: "moldova",
    code: "MD",
    region: "Europe",
    capital: "Chișinău",
    languages: ["Romanian", "Russian"],
    currency: { name: "Moldovan Leu", code: "MDL" },
    topBroadcasters: ["Moldova 1", "Pro TV Chișinău", "Jurnal TV", "TV8", "Prime TV", "Publika TV"],
    topSportsLeagues: ["Moldovan Super Liga", "Moldovan Cup", "UEFA Euro qualifiers"],
    intro:
      "Moldovan TV runs across the public Moldova 1 plus a thicket of private channels — Pro TV Chișinău, Jurnal TV, TV8, Prime TV — with heavy Romanian and Russian satellite overspill matching the bilingual reality. IPTV UPG bundles the full Moldovan lineup plus Romanian TVR/Pro TV and Russian Channel One —Sheriff Tiraspol's Champions League runs and Moldova's home Euro qualifiers included.",
    channelHighlights:
      "Moldova 1, Moldova 2; Pro TV Chișinău, Jurnal TV, TV8, Prime TV, Publika TV, Canal 2, Canal 3, NTV Moldova; Romanian overspill TVR 1, Pro TV România, Antena 1; Russian Channel One, NTV, Russia-1; sports Setanta Sports Moldova, Look Sport.",
    sportsHighlights:
      "Moldovan Super Liga football (Sheriff Tiraspol — UEFA Champions League group stage 2021/22 famously beating Real Madrid at the Bernabéu — Petrocub, Milsami), Moldovan Cup, Moldovan national team in UEFA Euro qualifiers, plus Romanian Liga 1 via Pro TV România.",
  },
  {
    name: "Monaco",
    slug: "monaco",
    code: "MC",
    region: "Europe",
    capital: "Monaco",
    languages: ["French"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["Monaco Info", "TMC (Télé Monte-Carlo, broadcast from Paris)", "Riviera TV"],
    topSportsLeagues: ["AS Monaco (Ligue 1)", "Monaco Grand Prix", "ATP Monte-Carlo Masters"],
    intro:
      "Monaco's domestic broadcasting is Monaco Info (public news) — TMC is technically Monégasque but broadcasts from Paris into the French TNT lineup — and the principality's TV viewing is effectively the French stack plus heavy Italian RAI overspill. IPTV UPG bundles Monaco Info, TMC, the full French TF1/France 2/Canal+ tier plus Italian RAI —and the calendar peaks at the Grand Prix and the Monte-Carlo Masters.",
    channelHighlights:
      "Monaco Info, TMC (broadcast from Paris), Riviera TV; French overspill TF1, France 2, France 3, France 5, M6, Canal+, BFM TV, CNews; Italian RAI 1, RAI 2, RAI 3; pay-TV Canal+ Sport, beIN Sports France, RMC Sport.",
    sportsHighlights:
      "AS Monaco in Ligue 1 (Stade Louis II, regular UEFA Champions League contender), Monaco Grand Prix F1 weekend (the jewel of the F1 calendar), ATP Monte-Carlo Masters tennis on clay, plus the Yacht Show and the Monaco ePrix Formula E race.",
  },
  {
    name: "Mongolia",
    slug: "mongolia",
    code: "MN",
    region: "Asia",
    capital: "Ulaanbaatar",
    languages: ["Mongolian"],
    currency: { name: "Mongolian Tögrög", code: "MNT" },
    topBroadcasters: ["MNB (Mongolian National Broadcaster)", "TV9 Mongolia", "Eagle TV", "UBS TV", "Mongol TV"],
    topSportsLeagues: ["Mongolian Premier League", "Naadam Festival (wrestling/archery/horse racing)", "Sumo (Mongolian wrestlers in Japan)"],
    intro:
      "Mongolian TV centres on MNB public plus the privates TV9, Eagle TV, UBS TV and Mongol TV — and the headline sports product remains the three-discipline Naadam (wrestling, archery, horse racing) covered wall-to-wall in July. Mongolian sumo wrestlers in Japan's NPB-equivalent Grand Sumo (Hakuho-era and current) draw enormous audiences on MNB and NHK feeds. IPTV UPG bundles the full Mongolian lineup plus NHK and Russian overspill.",
    channelHighlights:
      "MNB (Mongolian National Broadcaster), MNB World, MNB Children, MNB Music; TV9 Mongolia, Eagle TV, UBS TV, Mongol TV, MN25, NTV Mongolia, Channel 25; Russian Channel One, NTV; Japanese NHK General; news Mongol HD News, Bloomberg TV Mongolia.",
    sportsHighlights:
      "Naadam Festival's three manly games (Mongolian wrestling, mounted archery, horse racing) — the cultural sporting centrepiece each July — Mongolian Premier League football, Grand Sumo (Mongolian wrestlers dominate Japan's top division), plus the AFC Asian Cup qualifiers for the Blue Wolves.",
  },
  {
    name: "Montenegro",
    slug: "montenegro",
    code: "ME",
    region: "Europe",
    capital: "Podgorica",
    languages: ["Montenegrin"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTCG 1", "RTCG 2", "TV Vijesti", "Nova M", "Pink M", "Prva CG"],
    topSportsLeagues: ["Montenegrin First League", "Montenegrin Cup", "Adriatic Basketball League", "Water Polo"],
    intro:
      "Montenegrin TV runs across RTCG public plus TV Vijesti, Nova M, Pink M and Prva CG — and Serbian overspill (RTS, Pink) is the practical second layer for most Podgorica households. The Montenegrin national basketball and water polo teams are the headline live products. IPTV UPG bundles the full Montenegrin and Serbian lineup plus Arena Sport Montenegro for football and basketball.",
    channelHighlights:
      "RTCG 1, RTCG 2; TV Vijesti, Nova M, Pink M, Prva CG, A1 Montenegro; Serbian overspill RTS 1, RTS 2, Pink, Prva, Happy TV; sports Arena Sport Montenegro 1–10, SportKlub Montenegro; news N1 BiH/Serbia, Al Jazeera Balkans.",
    sportsHighlights:
      "Montenegrin First League (Budućnost Podgorica, Sutjeska, Mornar Bar), Montenegrin Cup, Falcons national football team in Euro qualifiers, Montenegrin basketball in Adriatic ABA League (Budućnost is a regular contender), plus water polo — Montenegro is genuinely a top-tier global water polo nation.",
  },
  {
    name: "Morocco",
    slug: "morocco",
    code: "MA",
    region: "Africa",
    capital: "Rabat",
    languages: ["Arabic", "Berber", "French"],
    currency: { name: "Moroccan Dirham", code: "MAD" },
    topBroadcasters: ["Al Aoula", "2M (Deuxième Chaîne)", "Medi 1 TV", "Arryadia (sports)", "Tamazight TV (TV 8)"],
    topSportsLeagues: ["Botola Pro", "CAF Champions League", "Africa Cup of Nations", "Morocco national team (Atlas Lions)"],
    intro:
      "Moroccan TV is anchored on Al Aoula and 2M as the dominant free-to-air pair, plus Medi 1 TV from Tangier and the dedicated sports channel Arryadia — and the Atlas Lions' historic 2022 World Cup semi-final transformed national-team viewing across Casablanca, Rabat and the very large diaspora in France, Belgium and the Netherlands. IPTV UPG bundles the full Moroccan stack plus French overspill and beIN Sports MENA.",
    channelHighlights:
      "Al Aoula, 2M Maroc, Medi 1 TV, Arryadia (sports), Aflam TV (movies), Tamazight TV (Berber/TV 8), Al Maghribia, Assadissa (religious), Laayoune TV; French TF1, France 2, France 24, TV5 Monde Afrique, Canal+ Afrique; Arabic MBC 1, MBC Maghreb, Al Arabiya, Al Jazeera; beIN Sports MENA.",
    sportsHighlights:
      "Botola Pro 1 (Wydad Casablanca, Raja Casablanca, AS FAR, RS Berkane), CAF Champions League and Confederation Cup (Wydad and Raja are perennial finalists), Atlas Lions national team — 2022 World Cup semi-finalists, the first African and Arab nation to reach that stage — AFCON 2025 hosting, plus the Marrakech Grand Prix and the very strong Moroccan athletics tradition.",
  },
  {
    name: "Mozambique",
    slug: "mozambique",
    code: "MZ",
    region: "Africa",
    capital: "Maputo",
    languages: ["Portuguese"],
    currency: { name: "Mozambican Metical", code: "MZN" },
    topBroadcasters: ["TVM (Televisão de Moçambique)", "STV", "TV Miramar", "TV Sucesso"],
    topSportsLeagues: ["Moçambola", "Africa Cup of Nations", "COSAFA Cup", "CAF Champions League"],
    intro:
      "Mozambican TV runs around TVM state plus STV, TV Miramar and TV Sucesso — and the country sits at a unique Portuguese/southern-African crossroads, with both RTP and SuperSport reaching most middle-class households. IPTV UPG bundles the full Mozambican Portuguese-language lineup plus RTP, SuperSport and Canal+ Afrique —Os Mambas national team viewing for the diaspora in Portugal and South Africa included.",
    channelHighlights:
      "TVM (Televisão de Moçambique), STV, TV Miramar, TV Sucesso, TIM, Soico TV; Portuguese overspill RTP1, RTP África, RTP Internacional, SIC; South African SABC, SuperSport tier; Canal+ Afrique, A+, Nollywood TV; news Africa News, BBC Afrique.",
    sportsHighlights:
      "Moçambola top-flight football (Costa do Sol, Ferroviário Maputo, Black Bulls), Os Mambas national team in AFCON and COSAFA Cup — Mozambique's AFCON 2023 group-stage run included a memorable comeback against Ghana — CAF Champions League, plus Portuguese Primeira Liga via Sport TV.",
  },
  {
    name: "Myanmar",
    slug: "myanmar",
    code: "MM",
    region: "Asia",
    capital: "Naypyidaw",
    languages: ["Burmese"],
    currency: { name: "Myanmar Kyat", code: "MMK" },
    topBroadcasters: ["MRTV", "MRTV-4", "MWD (Myawaddy)", "Sky Net", "MNTV", "MRTV Entertainment"],
    topSportsLeagues: ["Myanmar National League", "AFF Mitsubishi Electric Cup", "SEA Games"],
    intro:
      "Myanmar's TV runs across MRTV state plus MRTV-4, the military-affiliated MWD (Myawaddy), and the Sky Net pay-TV platform — and almost every Yangon and Mandalay household runs Thai overspill (Channel 3, Channel 7) as the practical second layer. IPTV UPG bundles the full Burmese-language lineup plus Thai networks, beIN Sports Asia and Star Sports.",
    channelHighlights:
      "MRTV, MRTV-4, MRTV News, MRTV Entertainment; MWD (Myawaddy), MWD Variety, MWD Movies; Sky Net Up-To-Date, Sky Net World, Sky Net Sports; MNTV, Channel 7 Myanmar; Thai overspill Channel 3, Channel 7, Channel 5; sports Sky Net Sports, beIN Sports Asia.",
    sportsHighlights:
      "Myanmar National League football (Yangon United, Shan United, Hanthawaddy United), Myanmar national team in AFF Mitsubishi Electric Cup and AFC qualifying, SEA Games, plus Premier League and Champions League via beIN Sports Asia, and Thai League football via the Thai overspill.",
  },
  {
    name: "Namibia",
    slug: "namibia",
    code: "NA",
    region: "Africa",
    capital: "Windhoek",
    languages: ["English", "Afrikaans", "German"],
    currency: { name: "Namibian Dollar", code: "NAD" },
    topBroadcasters: ["NBC TV (Namibian Broadcasting Corporation)", "One Africa Television", "ETV Namibia"],
    topSportsLeagues: ["Namibia Premier League", "AFCON qualifiers", "Rugby Africa Cup", "Cricket Namibia"],
    intro:
      "Namibia's TV runs around NBC state plus One Africa TV and ETV — and almost every middle-class household runs DStv for SuperSport rugby (Namibia is a regular Rugby World Cup qualifier), Premier League football and South African novelas. The country's German and Afrikaans-speaking minorities make the language mix unusual. IPTV UPG bundles NBC, OAT, ETV plus the full SuperSport and SABC lineup.",
    channelHighlights:
      "NBC TV 1, NBC 2; One Africa Television, ETV Namibia, TBN Namibia; South African overspill SABC 1, SABC 2, SABC 3, e.tv, kykNET (Afrikaans); pay-TV SuperSport 1–13, Mzansi Magic, Mzansi Wethu; plus BBC World News, Deutsche Welle (for the German-speaking community).",
    sportsHighlights:
      "Namibia Premier League football, Brave Warriors national team in AFCON (regular qualifiers, breakthrough run in 2023) and World Cup qualifying, Namibian rugby in Rugby Africa Cup and Rugby World Cup (regular qualifiers), cricket — Namibia reached the T20 World Cup Super 12 in 2021 — plus the Namib desert ultra-trails.",
  },
  {
    name: "Nauru",
    slug: "nauru",
    code: "NR",
    region: "Oceania",
    capital: "Yaren",
    languages: ["Nauruan", "English"],
    currency: { name: "Australian Dollar", code: "AUD" },
    topBroadcasters: ["NTV (Nauru)"],
    topSportsLeagues: ["Nauruan Premier League (AFL-style Australian Rules)", "Pacific Games", "Weightlifting"],
    intro:
      "Nauru is the world's smallest republic and TV reflects it — NTV provides intermittent local programming, with Australian satellite via Sky News Australia and ABC the practical primetime layer. Australian Rules football is uniquely the national sport (Nauru is one of the few non-Australian countries where AFL is dominant). IPTV UPG bundles NTV plus full ABC Australia, Fox Footy AFL and ESPN.",
    channelHighlights:
      "NTV (Nauru); Australian overspill ABC, ABC News, SBS, Seven Network, Nine, 10; Fox Footy AFL channels via Foxtel/Kayo; Pacific feeds FBC TV Fiji, TVNZ 1; plus BBC World News and Al Jazeera English.",
    sportsHighlights:
      "Nauruan Premier League Australian Rules football (uniquely, AFL is Nauru's national sport), Pacific Games, weightlifting — Nauru has the highest medal-per-capita rate in weightlifting at the Commonwealth Games — plus AFL Toyota Premiership coverage via Fox Footy.",
  },
  {
    name: "Nepal",
    slug: "nepal",
    code: "NP",
    region: "Asia",
    capital: "Kathmandu",
    languages: ["Nepali"],
    currency: { name: "Nepalese Rupee", code: "NPR" },
    topBroadcasters: ["Nepal Television (NTV)", "Kantipur TV", "Avenues TV", "News24 Nepal", "Image Channel", "Himalaya TV"],
    topSportsLeagues: ["Nepal Super League (Football)", "Everest Premier League (Cricket)", "Martyrs Memorial A Division League"],
    intro:
      "Nepali TV runs across NTV state plus the privates Kantipur, Avenues, News24, Image and Himalaya — and almost every Kathmandu household runs Indian Hindi overspill (Star Plus, Sony, Zee) plus Star Sports for cricket as the practical viewing layer. IPTV UPG bundles the full Nepali-language lineup plus the Indian entertainment and Star Sports tier —same login for the very large Nepali diaspora in the Gulf, Malaysia, the UK and Australia.",
    channelHighlights:
      "Nepal Television (NTV), NTV Plus, NTV News; Kantipur TV, Kantipur HD; Avenues TV, News24 Nepal, Image Channel, Himalaya TV, AP1 HD TV, Galaxy 4K, Mountain Television; Indian overspill Star Plus, Sony Entertainment, Zee TV, Colors, Star Sports 1, Sony Sports Ten; news NDTV 24x7.",
    sportsHighlights:
      "Nepal Super League football (NSL — the Kathmandu-based franchise league launched in 2021), Everest Premier League T20 cricket, Martyrs Memorial A Division League, Nepalese national cricket team (associate member of ICC, regular T20 World Cup qualifier), plus Indian Premier League cricket as the de facto biggest live product.",
  },
  {
    name: "Nicaragua",
    slug: "nicaragua",
    code: "NI",
    region: "Central America",
    capital: "Managua",
    languages: ["Spanish"],
    currency: { name: "Nicaraguan Córdoba", code: "NIO" },
    topBroadcasters: ["Canal 4 Nicaragua", "Canal 6", "Canal 10", "Canal 12", "Canal 14", "Vos TV (Canal 14)"],
    topSportsLeagues: ["Liga Primera de Nicaragua", "Liga Nicaragüense de Béisbol", "CONCACAF qualifiers"],
    intro:
      "Nicaraguan TV centres on the Ortega-aligned Canal 4 plus Canal 6 state, with private rivals Canal 10, 12 and Vos TV filling the rest of the dial. Baseball, not football, is the genuine national headline sport. IPTV UPG bundles the full Managua lineup plus ESPN Deportes for MLB and CONCACAF football coverage, with Liga Primera and Pinoleros national team fixtures included.",
    channelHighlights:
      "Canal 4 Nicaragua, Canal 6, Canal 8, Canal 10, Canal 12, Vos TV (Canal 14), 100% Noticias (when on air); news TN8, Canal 10 Noticias, Multinoticias; sports ESPN Deportes, Fox Sports Latin America, Tigo Sports, beIN Sports Latino.",
    sportsHighlights:
      "Liga Primera de Nicaragua (Real Estelí, Diriangén, Managua FC), Liga Nicaragüense de Béisbol Profesional (LBPN) — baseball is uniquely the national obsession in Central America's only baseball-first country — Pinoleros in CONCACAF Nations League, plus MLB via ESPN Deportes.",
  },
  {
    name: "Niger",
    slug: "niger",
    code: "NE",
    region: "Africa",
    capital: "Niamey",
    languages: ["French"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["ORTN (Office de Radiodiffusion-Télévision du Niger)", "Télé Sahel", "Bonferey TV", "Canal 3 Niger"],
    topSportsLeagues: ["Niger Premier League", "Africa Cup of Nations", "WAFU Cup"],
    intro:
      "Niger's TV runs around ORTN state's Télé Sahel plus the private Bonferey and Canal 3 — and almost every Niamey household runs Canal+ Afrique and French TF1/France 2 as the practical second layer. IPTV UPG bundles ORTN, Télé Sahel, Bonferey plus the full francophone Africa satellite tier —Mena national team coverage and AFCON qualifying included.",
    channelHighlights:
      "ORTN Télé Sahel, ORTN Tal TV, Bonferey TV, Canal 3 Niger, RTT Niger; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News, BBC Afrique, RFI Télé.",
    sportsHighlights:
      "Niger Premier League football, Ménas (Mena — gazelles) national team in AFCON and World Cup qualifiers, WAFU Cup, plus French Ligue 1 and CAF Champions League via Canal+ Sport.",
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    code: "NG",
    region: "Africa",
    capital: "Abuja",
    languages: ["English"],
    currency: { name: "Nigerian Naira", code: "NGN" },
    topBroadcasters: ["NTA (Nigerian Television Authority)", "Channels TV", "AIT (Africa Independent Television)", "TVC", "Silverbird Television", "Wazobia TV"],
    topSportsLeagues: ["Nigerian Premier Football League (NPFL)", "Africa Cup of Nations", "CAF Champions League", "Super Eagles"],
    intro:
      "Nigerian TV is Africa's most competitive market — NTA state's huge network, Channels TV's news dominance, AIT, TVC, Silverbird and the Pidgin-language Wazobia all fight for primetime, with SuperSport carrying the Premier League rights every middle-class household actually pays for. IPTV UPG bundles the full Nigerian English and Pidgin lineup plus SuperSport, Showmax and beIN Sports —same login for the very large Nigerian diaspora in the UK, US and Canada.",
    channelHighlights:
      "NTA (Nigerian Television Authority — multiple state stations), NTA International; Channels TV, AIT, TVC, TVC News, Silverbird, ITV, Galaxy TV; Wazobia Max (Pidgin), Wazobia TV; news Arise News, TVC News, Channels Newsline; pay-TV DStv Nigeria, SuperSport Premier League, SuperSport Action, SuperSport La Liga, GOtv, Showmax.",
    sportsHighlights:
      "Nigerian Premier Football League (NPFL — Rivers United, Enyimba, Kano Pillars, Plateau United), Super Eagles national team — three-time AFCON champions and 2023 finalists — CAF Champions League and Confederation Cup, Nigerian basketball (D'Tigers) in FIBA Africa, plus English Premier League (the de facto biggest live product) via SuperSport.",
  },
  {
    name: "Niue",
    slug: "niue",
    code: "NU",
    region: "Oceania",
    capital: "Alofi",
    languages: ["English", "Niuean"],
    currency: { name: "New Zealand Dollar", code: "NZD" },
    topBroadcasters: ["BCN (Broadcasting Corporation of Niue)"],
    topSportsLeagues: ["Niue Soccer Tournament", "Pacific Games", "OFC qualifiers"],
    intro:
      "Niue is the world's smallest free state in association with New Zealand and TV reflects it — BCN runs intermittent programming, with NZ satellite (TVNZ, Sky NZ) the practical primetime layer. IPTV UPG bundles BCN plus the full TVNZ and Sky Sport NZ tier, with All Blacks tests and Super Rugby Pacific coverage —same login for the very large Niuean diaspora in Auckland (where most Niueans actually live).",
    channelHighlights:
      "BCN (Broadcasting Corporation of Niue); NZ overspill TVNZ 1, TVNZ 2, Three NZ, Bravo NZ; Sky Sport NZ 1–9 for rugby; Pacific feeds FBC TV Fiji, TV1 Samoa; plus BBC World News and Al Jazeera English.",
    sportsHighlights:
      "Niue Soccer Tournament, Niuean national football team in OFC Nations Cup qualifying, Pacific Games, plus All Blacks tests and Super Rugby Pacific via Sky Sport NZ — Niuean New Zealanders feature regularly in the All Blacks and Manu Samoa squads.",
  },
  {
    name: "North Macedonia",
    slug: "north-macedonia",
    code: "MK",
    region: "Europe",
    capital: "Skopje",
    languages: ["Macedonian", "Albanian"],
    currency: { name: "Macedonian Denar", code: "MKD" },
    topBroadcasters: ["MRT 1", "MRT 2", "Sitel", "Kanal 5", "Telma", "Alsat-M", "Alfa TV"],
    topSportsLeagues: ["Macedonian First Football League", "Macedonian Cup", "Macedonian Handball Super League"],
    intro:
      "North Macedonian TV runs across MRT public plus the privates Sitel, Kanal 5, Telma and the Albanian-language Alsat-M serving the substantial Albanian minority. The national football team's Euro 2020 debut (beating Germany in qualifying) reset what international windows mean here. IPTV UPG bundles the full Macedonian-language and Alsat-M Albanian lineup plus Arena Sport for football.",
    channelHighlights:
      "MRT 1, MRT 2, MRT 3 (Albanian), MRT 4, MRT 5 Parliamentary; Sitel, Sitel 2, Sitel 3; Kanal 5, Kanal 5 Plus; Telma, Alfa TV, Alsat-M (Albanian); news 24Vesti, TV21 Macedonia, Klan Macedonia; sports Arena Sport Macedonia 1–6, MaxTV Macedonia.",
    sportsHighlights:
      "Macedonian First Football League (Vardar, Shkupi, Sileks, Akademija Pandev), Macedonian Cup, Red Lions national team in Euro qualifiers — Euro 2020 debut after beating Germany — Macedonian handball (RK Vardar were former EHF Champions League winners), plus the Skopje Marathon.",
  },
  {
    name: "Oman",
    slug: "oman",
    code: "OM",
    region: "Middle East",
    capital: "Muscat",
    languages: ["Arabic"],
    currency: { name: "Omani Rial", code: "OMR" },
    topBroadcasters: ["Oman TV", "Oman Sports", "Majan TV"],
    topSportsLeagues: ["Oman Professional League", "Sultan Qaboos Cup", "AFC Asian Cup", "Gulf Cup"],
    intro:
      "Oman's TV is anchored on Oman TV state plus the dedicated Oman Sports channel, with most Muscat and Salalah households layering MBC, OSN and beIN Sports MENA on top. The Reds' two Gulf Cup titles and the country's regular AFC Asian Cup qualification drive the national-team viewing. IPTV UPG bundles Oman TV, Oman Sports, Majan plus the full MBC and beIN Sports MENA tier.",
    channelHighlights:
      "Oman TV General, Oman TV Sports, Oman TV Live, Oman TV Cultural; Majan TV; pan-Arab MBC 1–4, MBC Action, MBC Drama, MBC Masr; Rotana Khalijia, Rotana Cinema; OSN tier; beIN Sports HD 1–12 MENA; Al Arabiya, Sky News Arabia, Al Jazeera.",
    sportsHighlights:
      "Oman Professional League (Dhofar SC, Al-Nasr, Al-Suwaiq, Al-Seeb), Sultan Qaboos Cup, The Reds national football team in Gulf Cup (two-time champions 2009 and 2017–18) and AFC Asian Cup, plus the Saudi Pro League and European football via beIN Sports MENA.",
  },
  {
    name: "Palau",
    slug: "palau",
    code: "PW",
    region: "Oceania",
    capital: "Ngerulmud",
    languages: ["English", "Palauan"],
    currency: { name: "US Dollar", code: "USD" },
    topBroadcasters: ["PNCC TV", "Diving Channel Palau"],
    topSportsLeagues: ["Palauan Soccer League", "Micronesian Games", "Pacific Games"],
    intro:
      "Palau's TV is a tiny domestic core (PNCC, Diving Channel) with the practical viewing layer almost entirely US satellite via the Compact of Free Association — ABC, NBC, CBS, ESPN and AFN reach every Koror household. IPTV UPG bundles the local feeds plus full US sports and entertainment, Japanese NHK and Pacific NZ.",
    channelHighlights:
      "PNCC TV, Diving Channel Palau; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2, NFL Network, plus premium cable HBO, Showtime; Japanese NHK General, NHK World; Pacific FBC TV Fiji, TVNZ 1; plus BBC World News, AFN.",
    sportsHighlights:
      "Palauan Soccer League, Palau national football team in Pacific Games — Palau is not a FIFA member — Micronesian Games and the Pacific Mini Games, plus US sports (NFL, MLB, NBA, NCAA football) via US satellite.",
  },
  {
    name: "Panama",
    slug: "panama",
    code: "PA",
    region: "Central America",
    capital: "Panama City",
    languages: ["Spanish"],
    currency: { name: "Panamanian Balboa", code: "PAB" },
    topBroadcasters: ["TVN-2", "Telemetro (Canal 13)", "TVMax", "RPC TV (Canal 4)", "FETV", "SerTV"],
    topSportsLeagues: ["Liga Panameña de Fútbol (LPF)", "CONCACAF Champions Cup", "CONCACAF Nations League"],
    intro:
      "Panamanian TV runs across TVN-2, Telemetro, TVMax and RPC as the dominant private networks, with SerTV providing the public-service layer. La Marea Roja's 2018 World Cup debut and recent Gold Cup quarter-final runs have lifted national-team viewing. IPTV UPG bundles the full Panamanian lineup plus Tigo Sports Panama, ESPN Deportes and TUDN for MLB and CONCACAF coverage.",
    channelHighlights:
      "TVN-2 Canal 2, Telemetro Canal 13, TVMax Canal 9, RPC TV Canal 4, FETV Canal 5, SerTV Canal 11; news Telemetro Reporta, TVN Noticias, NexTV Panamá; sports Tigo Sports Panama, ESPN Deportes, Fox Sports Latin America, beIN Sports Latino, RPC Deportes.",
    sportsHighlights:
      "Liga Panameña de Fútbol (Tauro, Plaza Amador, CAI, Árabe Unido), CONCACAF Champions Cup, La Marea Roja national team in CONCACAF Nations League and Gold Cup (2018 World Cup debut), plus MLB (Panama has produced legends like Mariano Rivera) on ESPN Deportes — baseball is genuinely a major Panamanian sport.",
  },
  {
    name: "Papua New Guinea",
    slug: "papua-new-guinea",
    code: "PG",
    region: "Oceania",
    capital: "Port Moresby",
    languages: ["English", "Tok Pisin"],
    currency: { name: "Papua New Guinean Kina", code: "PGK" },
    topBroadcasters: ["EM TV", "NBC TV PNG", "Click TV", "Kundu 2"],
    topSportsLeagues: ["PNG NRL Bid (Hunters)", "Digicel Cup", "PNG National Soccer League"],
    intro:
      "Papua New Guinean TV runs across EM TV (the dominant private), NBC TV (state) and Click TV, with rugby league as the unchallenged headline sport — the PNG Hunters in the Queensland Cup and the country's incoming NRL franchise bid are constant news. IPTV UPG bundles EM TV, NBC plus the full Australian Fox League and Sky Sport NZ tier with NRL and Super Rugby.",
    channelHighlights:
      "EM TV, NBC TV PNG, Kundu 2, Click TV; Australian overspill ABC, Seven, Nine, 10; Fox League and Fox Footy via Foxtel/Kayo; Sky Sport NZ 1–9 for rugby union; Pacific feeds FBC TV Fiji, TVNZ 1; plus BBC World News and Al Jazeera English.",
    sportsHighlights:
      "PNG Hunters in the Queensland Cup (and the upcoming PNG NRL franchise from 2028), Digicel Cup domestic rugby league, PNG Kumuls national rugby league team in the World Cup, PNG National Soccer League, plus NRL Telstra Premiership — rugby league is genuinely PNG's national sport.",
  },
  {
    name: "Paraguay",
    slug: "paraguay",
    code: "PY",
    region: "South America",
    capital: "Asunción",
    languages: ["Spanish", "Guarani"],
    currency: { name: "Paraguayan Guaraní", code: "PYG" },
    topBroadcasters: ["SNT (Canal 9)", "Telefuturo (Canal 4)", "Trece (Canal 13)", "Paravisión (Canal 5)", "Unicanal"],
    topSportsLeagues: ["División Profesional de Fútbol", "Copa Libertadores", "Copa Sudamericana"],
    intro:
      "Paraguayan TV is anchored on SNT, Telefuturo, Trece and Paravisión as the big four private networks — and the División Profesional rights are split between Tigo Sports Paraguay and Tigo Sports+ . IPTV UPG bundles the full Paraguayan lineup plus Tigo Sports and DirecTV Sports for La Albirroja and Copa Libertadores coverage.",
    channelHighlights:
      "SNT Canal 9, Telefuturo Canal 4, Trece Canal 13, Paravisión Canal 5, Unicanal Canal 11, Latele Canal 8, RPC (Canal 3), Gen TV; news GEN, ABC TV, Última Hora TV; sports Tigo Sports Paraguay, Tigo Sports+, DirecTV Sports, ESPN Sur, Fox Sports Premium.",
    sportsHighlights:
      "División Profesional de Fútbol Paraguayo (Olimpia, Cerro Porteño, Libertad, Guaraní, Nacional), Copa Libertadores and Sudamericana, La Albirroja national team in CONMEBOL World Cup qualifying — Paraguay's 2010 World Cup quarter-final remains the headline memory — plus the Paraguayan Rally on Tigo Sports.",
  },
  {
    name: "Peru",
    slug: "peru",
    code: "PE",
    region: "South America",
    capital: "Lima",
    languages: ["Spanish", "Quechua"],
    currency: { name: "Peruvian Sol", code: "PEN" },
    topBroadcasters: ["América Televisión (Canal 4)", "Latina Televisión (Canal 2)", "ATV (Canal 9)", "Panamericana TV (Canal 5)", "TV Perú (Canal 7)"],
    topSportsLeagues: ["Liga 1 Peru", "Copa Libertadores", "Copa Sudamericana", "Peruvian national football team (La Bicolor)"],
    intro:
      "Peruvian TV is a fierce four-way race — América, Latina, ATV and Panamericana — with TV Perú as the public broadcaster. Liga 1 rights are split across L1 MAX, GolPerú and DirecTV Sports, making subscription stacking the norm. IPTV UPG bundles the full Lima lineup plus L1 MAX and DirecTV Sports for full Liga 1 and La Bicolor coverage.",
    channelHighlights:
      "América Televisión Canal 4, Latina Televisión Canal 2, ATV Canal 9, Panamericana TV Canal 5, TV Perú Canal 7, Willax TV, Exitosa TV; news América Noticias, Latina Noticias, ATV Noticias, RPP TV, Canal N; sports L1 MAX, GolPerú, DirecTV Sports, ESPN Sur, Fox Sports Premium.",
    sportsHighlights:
      "Liga 1 Peru (Universitario, Alianza Lima, Sporting Cristal, Melgar, Cienciano), Copa Libertadores and Sudamericana, La Bicolor national team in CONMEBOL World Cup qualifying — Peru's 2018 World Cup return and 2019 Copa América final still drive viewing — plus the Inca Trail Marathon and Peruvian volleyball (a former Olympic medal nation).",
  },
  {
    name: "Qatar",
    slug: "qatar",
    code: "QA",
    region: "Middle East",
    capital: "Doha",
    languages: ["Arabic"],
    currency: { name: "Qatari Riyal", code: "QAR" },
    topBroadcasters: ["Qatar TV", "Al Jazeera (English & Arabic)", "Al Rayyan TV", "Alkass Sports", "beIN Sports"],
    topSportsLeagues: ["Qatar Stars League", "AFC Asian Cup", "FIFA Club World Cup", "Qatar Grand Prix"],
    intro:
      "Qatar is the home of beIN Sports MENA and Al Jazeera — and 2022 World Cup hosting plus back-to-back Asian Cup titles (2019, 2024) put Qatar Stars League and Al-Annabi national-team fixtures at the centre of every Doha household's viewing. IPTV UPG bundles Qatar TV, the full Al Jazeera English/Arabic stack, Alkass Sports and beIN Sports HD 1–12 MENA.",
    channelHighlights:
      "Qatar TV (QTV), Qatar TV 2, Al Rayyan TV; Al Jazeera English, Al Jazeera Arabic, AJ+, Al Jazeera Documentary, Al Jazeera Mubasher; Alkass Sports One, Two, Three, Four, Five (all in HD); pan-Arab MBC 1–4, MBC Action, MBC Drama; OSN entertainment tier; beIN Sports HD 1–12 MENA.",
    sportsHighlights:
      "Qatar Stars League (Al-Sadd, Al-Duhail, Al-Rayyan, Al-Arabi), Al-Annabi men's national team — AFC Asian Cup champions 2019 and 2024 — FIFA Club World Cup, Qatar Grand Prix F1 weekend at Lusail, plus the FIFA World Cup 2022 legacy infrastructure hosting major events.",
  },
  {
    name: "Republic of the Congo",
    slug: "republic-of-the-congo",
    code: "CG",
    region: "Africa",
    capital: "Brazzaville",
    languages: ["French"],
    currency: { name: "Central African CFA Franc", code: "XAF" },
    topBroadcasters: ["Télé Congo", "DRTV (Congolese TV)", "MN TV"],
    topSportsLeagues: ["Congolese Premier League (Ligue 1)", "Africa Cup of Nations", "CAF Champions League"],
    intro:
      "Republic of Congo's TV runs around Télé Congo state plus the smaller private DRTV and MN TV — and almost every Brazzaville household runs French TF1 and Canal+ Afrique as the practical second layer. IPTV UPG bundles the full Congolese lineup plus French overspill and Canal+ Sport Afrique —Diables Rouges national team coverage and CAF Champions League included.",
    channelHighlights:
      "Télé Congo, DRTV (Congolese TV), MN TV, Top TV, Vox TV; French overspill TF1, France 2, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; plus Africa News, BBC Afrique, RFI Télé.",
    sportsHighlights:
      "Congolese Ligue 1 (AC Léopards, Diables Noirs, CARA Brazzaville), Diables Rouges national team in AFCON (1972 champions) and World Cup qualifiers, CAF Champions League, plus French Ligue 1 via Canal+ Sport.",
  },
  {
    name: "Romania",
    slug: "romania",
    code: "RO",
    region: "Europe",
    capital: "Bucharest",
    languages: ["Romanian"],
    currency: { name: "Romanian Leu", code: "RON" },
    topBroadcasters: ["TVR 1", "TVR 2", "Pro TV", "Antena 1", "Kanal D Romania", "Prima TV", "Digi 24"],
    topSportsLeagues: ["Liga I (SuperLiga)", "Cupa României", "Liga Națională (Handball)", "ABA Liga (Basketball)"],
    intro:
      "Romanian TV runs across TVR public, Pro TV (the dominant private), Antena 1 and Kanal D Romania — and SuperLiga football rights are split across Digi Sport, Orange Sport, Prima Sport and Look Sport, forcing serious fans into multi-pay-TV stacks. IPTV UPG bundles the full Bucharest lineup plus the four Romanian sports broadcasters, with FCSB and CFR Cluj European nights included.",
    channelHighlights:
      "TVR 1, TVR 2, TVR 3, TVR Internațional; Pro TV, Pro Cinema, Pro Arena, Pro X; Antena 1, Antena 3, Antena Stars, Antena Comedy; Kanal D Romania, Kanal D2; Prima TV, Național TV; news Digi 24, Realitatea Plus, B1 TV; sports Digi Sport 1–4, Orange Sport, Prima Sport, Look Sport.",
    sportsHighlights:
      "SuperLiga (FCSB — formerly Steaua, CFR Cluj, Rapid, Universitatea Craiova), Cupa României, Tricolorii national team in Euro qualifiers — Euro 2024 last-16, knocking out Ukraine — Romanian handball (Liga Națională Feminină is the headline domestic sport for women), plus Romanian rugby in the Rugby Europe Championship.",
  },
  {
    name: "Rwanda",
    slug: "rwanda",
    code: "RW",
    region: "Africa",
    capital: "Kigali",
    languages: ["Kinyarwanda", "English", "French"],
    currency: { name: "Rwandan Franc", code: "RWF" },
    topBroadcasters: ["RTV (Rwanda TV)", "RBA TV", "TV1 Rwanda", "Flash TV"],
    topSportsLeagues: ["Rwanda Premier League", "BAL (Basketball Africa League)", "AFCON qualifiers", "Tour du Rwanda"],
    intro:
      "Rwandan TV runs around RTV state plus a small layer of private channels (RBA, TV1, Flash) — and Kigali is now genuinely a regional sports capital with the BAL (Basketball Africa League) playing finals at BK Arena and the Tour du Rwanda anchoring African cycling. IPTV UPG bundles RTV plus Canal+ Afrique, SuperSport and BAL coverage.",
    channelHighlights:
      "RTV (Rwanda TV), RBA TV, TV1 Rwanda, Flash TV, Isango Star TV, KT Radio TV; East African regional KBC Kenya, NTV Uganda; French TF1, France 24, TV5 Monde Afrique; Canal+ Afrique, Canal+ Sport, A+, Nollywood TV; SuperSport for Premier League and BAL.",
    sportsHighlights:
      "Rwanda Premier League football (APR FC, Rayon Sports), Basketball Africa League (BAL — Kigali is the host capital), Amavubi national team in AFCON qualifying, Tour du Rwanda cycling stage race — Africa's biggest cycling event after the Tour du Faso — plus Premier League and CAF Champions League.",
  },
  {
    name: "Saint Kitts and Nevis",
    slug: "saint-kitts-and-nevis",
    code: "KN",
    region: "Caribbean",
    capital: "Basseterre",
    languages: ["English"],
    currency: { name: "East Caribbean Dollar", code: "XCD" },
    topBroadcasters: ["ZIZ TV", "WINN FM TV"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League (St Kitts & Nevis Patriots)", "Saint Kitts Premier Division"],
    intro:
      "Saint Kitts and Nevis' TV layout is ZIZ — the state broadcaster — plus regional CMC and Flow Caribbean overspill providing the practical second layer. The St Kitts and Nevis Patriots' Caribbean Premier League home nights at Warner Park are the headline live event of the calendar. IPTV UPG bundles ZIZ, CMC and the full Flow Sports plus US network tier.",
    channelHighlights:
      "ZIZ TV 5 (state broadcaster), WINN FM TV; Caribbean Media Corporation, CaribVision; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2 plus premium cable HBO and Showtime; Flow Sports 1 & 2 and SportsMax for West Indies cricket; BBC World News.",
    sportsHighlights:
      "West Indies Test, ODI and T20I cricket at Warner Park, Caribbean Premier League with Saint Kitts and Nevis Patriots, Saint Kitts Premier Division football, plus the Kim Collins athletics legacy and CARIFTA Games.",
  },
  {
    name: "Saint Lucia",
    slug: "saint-lucia",
    code: "LC",
    region: "Caribbean",
    capital: "Castries",
    languages: ["English"],
    currency: { name: "East Caribbean Dollar", code: "XCD" },
    topBroadcasters: ["NTN (National Television Network)", "Calabash TV", "DBS TV Saint Lucia"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League (Saint Lucia Kings)", "SLFA Premier League"],
    intro:
      "Saint Lucia's TV layer is NTN plus the privates Calabash and DBS, with Flow Caribbean filling in the regional and international layer. Saint Lucia Kings home nights at the Daren Sammy Stadium make CPL the biggest live event. IPTV UPG bundles the Saint Lucia broadcasters plus CMC and full Flow Sports/US network tier —Julien Alfred's 100m Olympic gold also moved athletics into prime billing.",
    channelHighlights:
      "NTN (National Television Network), Calabash TV, DBS TV Saint Lucia, Helen Television System (HTS); Caribbean Media Corporation, CaribVision; US overspill ABC, NBC, CBS, Fox, ESPN; Flow Sports 1 & 2 and SportsMax; BBC World News.",
    sportsHighlights:
      "West Indies cricket at the Daren Sammy Stadium, Caribbean Premier League with Saint Lucia Kings, SLFA Premier League football, Julien Alfred's 100m Olympic gold legacy and World Athletics meets, plus the CARIFTA Games and Saint Lucia Jazz Festival.",
  },
  {
    name: "Saint Vincent and the Grenadines",
    slug: "saint-vincent-and-the-grenadines",
    code: "VC",
    region: "Caribbean",
    capital: "Kingstown",
    languages: ["English"],
    currency: { name: "East Caribbean Dollar", code: "XCD" },
    topBroadcasters: ["SVGTV", "NBC Radio TV"],
    topSportsLeagues: ["West Indies Cricket", "Caribbean Premier League", "Saint Vincent Premier League"],
    intro:
      "Saint Vincent and the Grenadines runs SVGTV as the state broadcaster, with most households getting their main viewing layer from Flow Caribbean carrying US, UK and regional feeds. Test cricket at Arnos Vale and Vincentian athletes on the World Athletics circuit anchor the live sports calendar. IPTV UPG bundles SVGTV plus CMC, Flow Sports and the full US ABC/NBC/CBS/Fox tier.",
    channelHighlights:
      "SVGTV (Saint Vincent and the Grenadines Television), NBC Radio TV; Caribbean Media Corporation, CaribVision; US overspill ABC, NBC, CBS, Fox, ESPN, ESPN2 plus premium cable HBO and Showtime; Flow Sports 1 & 2, SportsMax for West Indies cricket; BBC World News.",
    sportsHighlights:
      "West Indies cricket at Arnos Vale, Caribbean Premier League T20, Saint Vincent Premier League football, plus Vincentian sprinters on the World Athletics circuit and the CARIFTA Games — the Vincy Mas carnival also gets prime billing each year.",
  },
  {
    name: "Samoa",
    slug: "samoa",
    code: "WS",
    region: "Oceania",
    capital: "Apia",
    languages: ["Samoan", "English"],
    currency: { name: "Samoan Tālā", code: "WST" },
    topBroadcasters: ["TV1 Samoa", "TV3 Samoa", "EFKS TV"],
    topSportsLeagues: ["Manu Samoa Rugby", "Pacific Nations Cup", "Pacific Games", "Samoa National Soccer League"],
    intro:
      "Samoan households centre on rugby — Manu Samoa Test matches in Apia and the diaspora following the team in Sydney, Auckland and Salt Lake City. TV1 Samoa anchors the local lineup with church programming, news and Pacific bulletins, while Sky Pacific carries the sports rights most households want. IPTV UPG packages TV1, the Australian Fox League / Stan Sport feeds, plus US and UK channels under one $7.50/month login that works on every Apia and Pago-side device.",
    channelHighlights:
      "TV1 Samoa (state broadcaster) and TV3 Samoa for local news and entertainment; EFKS TV for church programming; Australia's ABC and Seven via Pacific feeds; Sky Sport NZ and Stan Sport for rugby; BBC World; New Zealand Māori TV; plus US ABC, NBC, CBS and Fox; ESPN for Pacific basketball coverage.",
    sportsHighlights:
      "Manu Samoa Tests at Apia Park, World Rugby Pacific Nations Cup, Rugby World Cup pool stages, Pacific Games athletics and boxing, plus Toa Samoa rugby league internationals against Tonga and Fiji.",
  },
  {
    name: "San Marino",
    slug: "san-marino",
    code: "SM",
    region: "Europe",
    capital: "San Marino",
    languages: ["Italian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["San Marino RTV", "RTV Sport"],
    topSportsLeagues: ["Campionato Sammarinese", "Italian Serie A", "UEFA Nations League", "San Marino Grand Prix"],
    intro:
      "San Marino is one of Europe's smallest TV markets — San Marino RTV is the sole domestic broadcaster, and most households watch Italian Rai 1, Rai 2, Rai 3 and Mediaset channels by default across the border. The Campionato Sammarinese football league is amateur-level, but Sammarinese fans follow Serie A, the Champions League and Formula 1 obsessively. IPTV UPG ships the full Italian DTT lineup, Sky Italia sports and San Marino RTV — one $7.50 monthly bill across PC, Android and Smart TV.",
    channelHighlights:
      "San Marino RTV (state broadcaster); Italian Rai 1, Rai 2, Rai 3, Rai News 24, Rai Sport, Rai 4, Rai 5; Mediaset Canale 5, Italia 1, Rete 4, Mediaset 20; La7 and La7d; DMAX, Real Time; Sky Sport Calcio, Sky Sport Uno, Sky Cinema; Eurosport 1 and 2 for skiing and tennis.",
    sportsHighlights:
      "Serie A every weekend with Juventus, Inter, Milan and Roma; Coppa Italia; Champions League and Europa League; the Misano MotoGP round close to the border; Formula 1; plus the Sammarinese national team's UEFA Nations League ties at the San Marino Stadium in Serravalle.",
  },
  {
    name: "Sao Tome and Principe",
    slug: "sao-tome-and-principe",
    code: "ST",
    region: "Africa",
    capital: "São Tomé",
    languages: ["Portuguese"],
    currency: { name: "São Tomé and Príncipe Dobra", code: "STN" },
    topBroadcasters: ["TVS (Televisão Santomense)", "STP Press"],
    topSportsLeagues: ["Campeonato Santomense", "AFCON Qualifiers", "CAF Confederation Cup", "Lusofonia Games"],
    intro:
      "São Tomé and Príncipe's broadcast market is small but Portuguese-language: TVS (Televisão Santomense) is the sole national TV, and households fill out the lineup with Portuguese RTP feeds, Brazilian telenovelas on Globo, and Angolan TPA. Football fans follow the Falcões e Verdes national team's AFCON qualifying campaign plus Primeira Liga in Portugal. IPTV UPG includes TVS, full Portuguese RTP1/RTP2/SIC/TVI/Sport TV, Brazilian Globo and Record, plus the African football tier.",
    channelHighlights:
      "TVS (Televisão Santomense) for state news; Portuguese RTP1, RTP2, RTP África, SIC, SIC Notícias, TVI and TVI24; Sport TV 1–5 for Primeira Liga and Champions League; Brazilian Globo and Record for telenovelas; Angolan TPA1 and TPA2; CGTN Português and Euronews Português.",
    sportsHighlights:
      "Campeonato Nacional de São Tomé e Príncipe (Sporting Praia Cruz, Vitória FC), AFCON qualifiers with the Falcões e Verdes, CAF Confederation Cup ties, Portuguese Primeira Liga with Benfica/Porto/Sporting, plus Lusofonia Games athletics and judo.",
  },
  {
    name: "Senegal",
    slug: "senegal",
    code: "SN",
    region: "Africa",
    capital: "Dakar",
    languages: ["French", "Wolof"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["RTS 1", "RTS 2", "2STV", "TFM", "SEN TV", "Walf TV", "ITV Sénégal"],
    topSportsLeagues: ["Senegal Ligue 1", "AFCON", "FIFA World Cup", "CAF Champions League", "ATP Tour"],
    intro:
      "Senegal is one of Africa's TV strongholds — RTS 1 and the private TFM, 2STV and SEN TV channels carry French-language news, Wolof drama and the AFCON-winning Lions de la Téranga's matches. Football is the lifeblood: Sadio Mané, Kalidou Koulibaly and the 2022 Africa Cup of Nations title made the national team the continent's prestige brand. IPTV UPG bundles the full Senegalese network plus French TF1, Canal+ Sport Afrique and BeIN Sports — $7.50/month on every device in Dakar.",
    channelHighlights:
      "RTS 1, RTS 2 (state), 2STV, TFM (Bougane Guèye), SEN TV, Walf TV, ITV Sénégal, Wal Fadjri, Touba TV; French TF1, France 2, M6; Canal+ Sport Afrique, Canal+ Sport 360, RMC Sport; beIN Sports Premium 1–3; BBC World, Al Jazeera; African Nollywood and Wolof-dubbed Bollywood tiers.",
    sportsHighlights:
      "Senegal Ligue 1 with Génération Foot, Casa Sports and Jaraaf Dakar; AFCON Lions de la Téranga — 2022 champions, 2024 quarter-finalists; FIFA World Cup; CAF Champions League; ATP tennis with the Open de Dakar; Senegalese wrestling (Lutte Sénégalaise) on RTS; Dakar Rally finale.",
  },
  {
    name: "Serbia",
    slug: "serbia",
    code: "RS",
    region: "Europe",
    capital: "Belgrade",
    languages: ["Serbian"],
    currency: { name: "Serbian Dinar", code: "RSD" },
    topBroadcasters: ["RTS 1", "RTS 2", "Pink", "Prva", "Happy TV", "B92", "N1"],
    topSportsLeagues: ["SuperLiga Serbia", "Eternal Derby", "EuroLeague Basketball", "ATP Tour", "Davis Cup"],
    intro:
      "Serbia juggles a fierce sports calendar: SuperLiga and the Belgrade Eternal Derby between Red Star and Partizan, Novak Djokovic's run on the ATP Tour and Wimbledon, plus the basketball powerhouse of Crvena Zvezda and Partizan in the EuroLeague. RTS 1, Pink and Prva dominate household viewing while Arena Sport carries Premier League and Champions League rights. IPTV UPG includes the full Serbian DTT plus Arena Sport 1–6, Sport Klub and Pink Sport at $7.50/month on every Smart TV in Belgrade and Niš.",
    channelHighlights:
      "RTS 1, RTS 2 (Public Broadcasting Service); Pink, Prva, Happy TV, B92, O2.TV; News N1, Nova S, Tanjug; Arena Sport 1–6 (Premier League, Champions League, NBA); Sport Klub Premier 1–6 (Bundesliga, La Liga); HBO Adria, Cinemax; Pink Reality, Pink Pedia and Pink Folk for music; RTS Drama, RTS Kolo.",
    sportsHighlights:
      "SuperLiga Serbia and the 'Vječiti derbi' Red Star vs Partizan; UEFA Champions League and Europa League with Crvena Zvezda; ATP Tour featuring Novak Djokovic; Davis Cup; EuroLeague basketball; FIBA EuroBasket; Serbia national team handball and water polo; volleyball Tigers; Belgrade Marathon.",
  },
  {
    name: "Seychelles",
    slug: "seychelles",
    code: "SC",
    region: "Africa",
    capital: "Victoria",
    languages: ["English", "French", "Seychellois Creole"],
    currency: { name: "Seychellois Rupee", code: "SCR" },
    topBroadcasters: ["SBC TV", "SBC2", "Telesesel"],
    topSportsLeagues: ["Seychelles First Division", "Indian Ocean Island Games", "AFCON Qualifiers", "COSAFA Cup"],
    intro:
      "Seychelles is a tri-lingual archipelago where SBC TV runs the public lineup in English, French and Seychellois Creole. With only 100,000 residents, the local market is small — most households want international football, Indian Premier League cricket for the South Asian community, and Roland Garros tennis for the French expat layer. IPTV UPG ships SBC1 and SBC2 plus French TF1/Canal+ Sport, UK Sky Sports, Indian Star Sports and South African SuperSport — one login that survives island-internet bandwidth.",
    channelHighlights:
      "SBC TV, SBC2 (Seychelles Broadcasting Corporation), Telesesel; French TF1, France 2, M6, Canal+; UK Sky Sports Main Event, Sky Sports Premier League, BBC World; Indian Star Sports, Sony Six, Zee TV; South African SuperSport, Mzansi Magic; BBC World, France 24, Al Jazeera; Discovery and Animal Planet.",
    sportsHighlights:
      "Seychelles First Division football (Côte d'Or, La Passe), Indian Ocean Island Games every four years, AFCON Africa Cup qualifiers, COSAFA Cup for southern African teams, plus the South African Premier Soccer League and Indian Premier League cricket on the diaspora tier.",
  },
  {
    name: "Sierra Leone",
    slug: "sierra-leone",
    code: "SL",
    region: "Africa",
    capital: "Freetown",
    languages: ["English"],
    currency: { name: "Sierra Leonean Leone", code: "SLE" },
    topBroadcasters: ["SLBC TV", "AYV (Africa Young Voices)", "SLBS"],
    topSportsLeagues: ["Sierra Leone Premier League", "AFCON Qualifiers", "WAFU Zone A", "FIFA World Cup Qualifiers"],
    intro:
      "Sierra Leone's broadcast layer leads with SLBC TV as the public broadcaster, AYV (Africa Young Voices) for youth programming and music, and SLBS for news. The Leone Stars national team's AFCON qualifying matches at the Siaka Stevens Stadium in Freetown are appointment viewing, alongside English Premier League games — Mohamed Kallon's legacy gave Sierra Leone a strong football identity. IPTV UPG packages SLBC, AYV plus UK Sky Sports, BBC and African SuperSport.",
    channelHighlights:
      "SLBC TV (Sierra Leone Broadcasting Corporation), AYV, SLBS, Star TV, Citizen TV Sierra Leone; UK BBC One, BBC News, ITV, Sky Sports Premier League, Sky Sports Football, TNT Sports; Al Jazeera English; SuperSport Premier League and Variety; Africa Magic, Africa Magic Yoruba, ROK; CNN International.",
    sportsHighlights:
      "Sierra Leone Premier League (East End Lions, Mighty Blackpool, FC Kallon), AFCON qualifiers with the Leone Stars, WAFU Zone A West African Football Union tournaments, FIFA World Cup qualifying, plus Sierra Leone women's basketball at FIBA Africa.",
  },
  {
    name: "Singapore",
    slug: "singapore",
    code: "SG",
    region: "Asia",
    capital: "Singapore",
    languages: ["English", "Mandarin", "Malay", "Tamil"],
    currency: { name: "Singapore Dollar", code: "SGD" },
    topBroadcasters: ["CNA", "Channel 5", "Channel 8", "Channel U", "Suria", "Vasantham", "Mediacorp Okto"],
    topSportsLeagues: ["Singapore Premier League", "Formula 1 Singapore GP", "English Premier League", "NBA", "AFC Asian Cup"],
    intro:
      "Singapore is the wealthiest TV market in Southeast Asia and the most multi-lingual — Mediacorp runs Channel 5 in English, Channel 8 in Mandarin, Suria in Malay and Vasantham in Tamil out of one Caldecott broadcast centre. StarHub TV and Singtel TV split English Premier League and Champions League rights, while the F1 Singapore GP under Marina Bay lights is a national event. IPTV UPG consolidates Mediacorp, StarHub Sports, Singtel and Hong Kong feeds at $7.50/month — no more bundle juggling for HDB households.",
    channelHighlights:
      "CNA (Channel NewsAsia), Channel 5, Channel 8, Channel U, Suria, Vasantham, Mediacorp Okto; StarHub HUB Sports 1–4, HUB Premier 1–4; Singtel TV Sports, Football Premier; Hong Kong TVB Jade, TVB Pearl; CCTV-4, Phoenix TV; Astro Awani; Indian Sun TV, Vijay TV, Zee Tamil; Disney Channel and Cartoon Network Asia.",
    sportsHighlights:
      "Singapore Premier League (Lion City Sailors, Albirex Niigata Singapore), Formula 1 Singapore GP under the Marina Bay lights, English Premier League and Champions League on StarHub, NBA on Singtel, AFC Asian Cup with the Lions, plus the Singapore Open badminton and Singapore Tennis Open ATP 250.",
  },
  {
    name: "Slovakia",
    slug: "slovakia",
    code: "SK",
    region: "Europe",
    capital: "Bratislava",
    languages: ["Slovak"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTVS Jednotka", "RTVS Dvojka", "Markíza", "JOJ", "TA3", "TV Doma"],
    topSportsLeagues: ["Slovak Super Liga", "IIHF World Championship", "Tipos Extraliga", "UEFA Euro", "ATP Tour"],
    intro:
      "Slovakia is a hockey nation — the Slovak national team's 2002 World Championship gold in Gothenburg and Tipos Extraliga rivalries between HC Slovan Bratislava, HC Košice and HK Nitra anchor the sports calendar. Markíza, JOJ and RTVS Jednotka split household viewing for Slovak telenovelas, dubbed cinema and Sport TV's coverage of the Niké Liga football. IPTV UPG includes all major RTVS, Markíza, JOJ and Sport TV channels plus Czech Nova Sport at $7.50/month, with full Slovak audio support.",
    channelHighlights:
      "RTVS Jednotka, RTVS Dvojka, RTVS Šport (state public broadcaster); Markíza, Doma, Dajto, TV Nova International; JOJ, JOJ Plus, JOJ Family, JOJ Cinema; TA3 (news 24/7); Sport 1, Sport 2 Slovakia; Eurosport 1 and 2 for biathlon; HBO Slovakia; CS Film; Spektrum, Spektrum Home.",
    sportsHighlights:
      "Tipos Extraliga ice hockey (Slovan, Košice, Nitra), IIHF World Championship hosted in Bratislava and Košice (the Steel Arena), Slovak Super Liga football with Slovan and Spartak Trnava, UEFA Euro qualifiers with the Sokoli, ATP Tour with Slovak players, Tour de France stages with Peter Sagan's legacy.",
  },
  {
    name: "Slovenia",
    slug: "slovenia",
    code: "SI",
    region: "Europe",
    capital: "Ljubljana",
    languages: ["Slovenian"],
    currency: { name: "Euro", code: "EUR" },
    topBroadcasters: ["RTV SLO 1", "RTV SLO 2", "POP TV", "Kanal A", "Planet TV", "Nova24TV"],
    topSportsLeagues: ["PrvaLiga", "EuroLeague Basketball", "FIS Ski World Cup", "UEFA Champions League", "NBA"],
    intro:
      "Slovenia is one of Europe's quietly successful sports markets — Luka Dončić anchors NBA viewing on Šport TV, Tina Maze and Žan Kranjec carry FIS Ski World Cup ratings, and the Slovenian national basketball team's 2017 EuroBasket gold made KZS programming prestige TV. RTV SLO 1, POP TV and Kanal A dominate household viewing in Ljubljana, Maribor and Kranj. IPTV UPG packages the full Slovenian DTT plus Šport TV 1–3, EON and Croatian RTL/Nova TV — $7.50/month covers it.",
    channelHighlights:
      "RTV SLO 1, RTV SLO 2, RTV SLO 3 (state public service); POP TV, Kanal A, Brio, Oto (Pro Plus); Planet TV; Nova24TV; Šport TV 1, 2, 3 (Premier League, Champions League); EON Sport; Eurosport 1 and 2 for skiing; HBO Slovenia; Discovery, National Geographic.",
    sportsHighlights:
      "PrvaLiga football (Olimpija Ljubljana, Maribor, Celje), Slovenian basketball with Cedevita Olimpija in the ABA League and EuroLeague, NBA games featuring Luka Dončić, FIS Alpine Ski World Cup at Vitranc Kranjska Gora and Pokljuka biathlon, plus the Slovenian Tour cycling and Tadej Pogačar's Tour de France runs.",
  },
  {
    name: "Solomon Islands",
    slug: "solomon-islands",
    code: "SB",
    region: "Oceania",
    capital: "Honiara",
    languages: ["English", "Solomon Islands Pijin"],
    currency: { name: "Solomon Islands Dollar", code: "SBD" },
    topBroadcasters: ["SIBC TV", "ONE Television", "TSI"],
    topSportsLeagues: ["Solomon Islands S-League", "OFC Champions League", "Pacific Games", "Futsal World Cup Qualifiers"],
    intro:
      "Solomon Islands is a Pacific football nation — the Bonitos national team's OFC Nations Cup runs and Marist FC's regional OFC Champions League appearances anchor sports viewing. SIBC (Solomon Islands Broadcasting Corporation) carries state news and Pijin-language programming, while ONE Television and TSI fill out the entertainment layer. IPTV UPG includes SIBC and the full Australian ABC and Seven feeds, NZ Sky Sport, English Sky Sports Premier League and futsal tournaments — $7.50/month with reliable streaming on Honiara's broadband.",
    channelHighlights:
      "SIBC TV (Solomon Islands Broadcasting Corporation), ONE Television, TSI (Telekom Solomon Islands); Australia's ABC Asia Pacific, ABC News 24, Seven Network; NZ Sky Sport, Sky Open; UK BBC World, Sky Sports Premier League; ESPN Asia; Fiji TV (One Fiji); Pasifika TV; CNN International; Al Jazeera English.",
    sportsHighlights:
      "Solomon Islands S-League with Solomon Warriors and Marist FC, OFC Champions League and OFC Nations Cup, Pacific Games in Honiara, FIFA Futsal World Cup qualifiers (the Solomons are a futsal powerhouse), plus Australian NRL and AFL on the Pacific feed for diaspora audiences.",
  },
  {
    name: "Somalia",
    slug: "somalia",
    code: "SO",
    region: "Africa",
    capital: "Mogadishu",
    languages: ["Somali", "Arabic"],
    currency: { name: "Somali Shilling", code: "SOS" },
    topBroadcasters: ["SNTV (Somali National TV)", "Universal TV", "Horn Cable", "SBS TV"],
    topSportsLeagues: ["Somalia Premier League", "AFCON Qualifiers", "CECAFA Cup", "FIFA World Cup Qualifiers"],
    intro:
      "Somalia's broadcast market spans Mogadishu, the breakaway Somaliland (Hargeisa) and a sprawling diaspora in London, Minneapolis, Toronto and Nairobi. SNTV is the state channel, Universal TV and Horn Cable run from London for the diaspora, and Al-Jazeera Arabic is appointment news. The Ocean Stars national team's AFCON qualifying matches and CECAFA Cup ties carry sports interest. IPTV UPG bundles SNTV, Universal, Horn Cable, beIN Arabic and BBC Somali at $7.50/month — designed for both Mogadishu and diaspora households.",
    channelHighlights:
      "SNTV (Somali National TV), Universal TV (London), Horn Cable Television (Hargeisa), SBS TV, Somali Channel; BBC Somali Service; Al Jazeera Arabic and English; MBC, MBC Action; SuperSport Premier League; UK Sky Sports Premier League; CNN International; Bollywood and Hindi tiers for the South Asian community in Mogadishu.",
    sportsHighlights:
      "Somalia Premier League (Elman, Heegan), AFCON African Cup of Nations qualifiers with the Ocean Stars, CECAFA Cup against Kenya, Uganda and Tanzania, FIFA World Cup qualifiers, plus the Mogadishu Marathon (when held) and English Premier League viewing for diaspora households.",
  },
  {
    name: "South Sudan",
    slug: "south-sudan",
    code: "SS",
    region: "Africa",
    capital: "Juba",
    languages: ["English", "Arabic"],
    currency: { name: "South Sudanese Pound", code: "SSP" },
    topBroadcasters: ["SSBC TV (South Sudan Broadcasting Corporation)", "Eye Radio", "Bakhita TV"],
    topSportsLeagues: ["South Sudan National Basketball Team", "FIBA Africa Cup", "AFCON Qualifiers", "NBA Africa", "South Sudan Football Championship"],
    intro:
      "South Sudan made history in 2024 — the Bright Stars basketball team qualified for the Paris Olympics and beat heavyweights in FIBA AfroBasket, turning Luol Deng's federation into a continental power. SSBC TV is the state channel, while Bakhita TV runs a Catholic news layer. Football qualifiers and the new basketball obsession dominate Juba sports viewing. IPTV UPG includes SSBC, NBA League Pass, FIBA streams, BBC Arabic and SuperSport at $7.50/month for Juba and Wau households.",
    channelHighlights:
      "SSBC TV (South Sudan Broadcasting Corporation), Bakhita TV (Catholic Radio Network), Eye Radio's online channel; BBC Arabic, BBC World News; Al Jazeera Arabic; SuperSport Premier League and SuperSport Basketball; NBA TV; Sudan TV via overspill; Kenyan KBC; CNN International; Bollywood and Hindi tiers; Discovery Family.",
    sportsHighlights:
      "South Sudan men's national basketball team Bright Stars — Paris Olympics 2024, FIBA AfroBasket, plus diaspora NBA stars like Wenyen Gabriel; AFCON Africa Cup qualifiers with the South Sudan football team; CAF Confederation Cup ties; Juba Marathon; FIBA Africa Cup women's basketball.",
  },
  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    code: "LK",
    region: "Asia",
    capital: "Colombo",
    languages: ["Sinhala", "Tamil"],
    currency: { name: "Sri Lankan Rupee", code: "LKR" },
    topBroadcasters: ["Rupavahini (SLRC)", "ITN", "Sirasa TV", "Derana TV", "Hiru TV", "Swarnavahini", "Shakthi TV"],
    topSportsLeagues: ["Sri Lanka Cricket (Test, ODI, T20I)", "Lanka Premier League T20", "ICC Cricket World Cup", "Asia Cup Cricket", "Sri Lanka Football Champions League"],
    intro:
      "Cricket runs Sri Lankan TV — the 1996 World Cup win and 2014 T20 trophy made cricket appointment programming, and ICC tournaments shut down Colombo restaurants. Rupavahini, ITN and Sirasa cover the Sinhala mainstream, Shakthi TV serves the Tamil-language market, and Hiru and Derana dominate prime-time teledrama. IPTV UPG includes the full Sri Lankan DTT plus Star Sports India, Sony Six and Willow TV for Tests and T20s at $7.50/month.",
    channelHighlights:
      "Rupavahini, Channel Eye and NTV (SLRC); ITN, Vasantham; Sirasa TV, TV1, Shakthi TV (Tamil-language, Capital Maharaja); Derana TV, Hiru TV (Asia Broadcasting); Swarnavahini; Indian Star Sports 1, 2, Star Cricket; Sony Six and Ten Sports; Sun TV, Sun Music; Bollywood Zee TV and Colors.",
    sportsHighlights:
      "Sri Lanka Test, ODI and T20I cricket at the R. Premadasa Stadium, Lanka Premier League T20 with Galle Marvels and Jaffna Kings, Asia Cup Cricket, ICC Cricket World Cup, plus the Sri Lanka Football Premier League and Indian Premier League with Lankan stars like Wanindu Hasaranga.",
  },
  {
    name: "Sudan",
    slug: "sudan",
    code: "SD",
    region: "Africa",
    capital: "Khartoum",
    languages: ["Arabic", "English"],
    currency: { name: "Sudanese Pound", code: "SDG" },
    topBroadcasters: ["Sudan TV (SNBC)", "Blue Nile TV", "Omdurman TV", "Ashorooq TV", "Sudania 24"],
    topSportsLeagues: ["Sudan Premier League", "AFCON Qualifiers", "Sudan Cup", "CAF Champions League", "WAFU"],
    intro:
      "Sudan's TV market is centred on Khartoum-Omdurman, with Sudan TV (SNBC) as the state broadcaster and a strong religious / Arab-music programming mix on Blue Nile TV and Ashorooq. The Falcons of Jediane national football team's AFCON appearances and the Al-Hilal vs Al-Merrikh Omdurman Derby in the Sudan Premier League draw massive audiences. IPTV UPG packages Sudan TV, Blue Nile, beIN Sports MENA, MBC, Al Jazeera Arabic and SuperSport.",
    channelHighlights:
      "Sudan TV (SNBC) and Blue Nile TV; Omdurman TV, Ashorooq TV, Sudania 24; beIN Sports MENA 1–11 for La Liga and Champions League; MBC, MBC Action, MBC2, MBC Drama; Al Jazeera Arabic; Saudi Sports KSA; SuperSport Premier League and Variety; Cartoon Network Arabic.",
    sportsHighlights:
      "Sudan Premier League with Al-Hilal Omdurman and Al-Merrikh, AFCON qualifiers with the Falcons of Jediane, Sudan Cup, CAF Champions League ties at Al-Hilal Stadium, WAFU regional tournaments, plus Saudi Pro League with the strong Sudanese diaspora following Al-Ittihad and Al-Hilal Riyadh.",
  },
  {
    name: "Suriname",
    slug: "suriname",
    code: "SR",
    region: "South America",
    capital: "Paramaribo",
    languages: ["Dutch"],
    currency: { name: "Surinamese Dollar", code: "SRD" },
    topBroadcasters: ["ATV", "STVS", "ABC Online", "Apintie TV", "Garuda TV"],
    topSportsLeagues: ["SVB Topklasse", "CONCACAF Gold Cup", "Caribbean Cup", "FIFA World Cup Qualifiers", "CONCACAF Nations League"],
    intro:
      "Suriname is South America's smallest TV market and the continent's only Dutch-speaking country — TV viewing leans heavily on Dutch RTL4, NPO 1 and SBS6 from the Netherlands. STVS is the state channel, while ATV and Apintie carry local Surinamese-Dutch programming. The Natio team's CONCACAF Gold Cup runs and the SVB Topklasse anchor sports. IPTV UPG bundles STVS, ATV, Dutch NPO, Caribbean Premier League and CONCACAF feeds at $7.50/month.",
    channelHighlights:
      "ATV (Algemene Televisie Verzorging), STVS (Surinaamse Televisie Stichting), ABC Online TV, Apintie TV, Garuda TV; Dutch NPO 1, NPO 2, NPO 3, RTL 4, RTL 5, RTL 7, SBS 6, Veronica; ESPN Caribe; CONCACAF GO; SportsMax; CNN International; BBC World; Telesur.",
    sportsHighlights:
      "SVB Topklasse with Robinhood, Inter Moengotapoe and Transvaal, CONCACAF Gold Cup qualifying with the Natio (Memphis Depay's Surinamese roots), Caribbean Cup, FIFA World Cup qualifiers, CONCACAF Nations League, plus Indian Premier League and West Indies Test cricket on the Indo-Surinamese tier.",
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    code: "CH",
    region: "Europe",
    capital: "Bern",
    languages: ["German", "French", "Italian", "Romansh"],
    currency: { name: "Swiss Franc", code: "CHF" },
    topBroadcasters: ["SRF 1", "SRF 2", "RTS Un", "RTS Deux", "RSI LA 1", "RSI LA 2", "3+", "Teleclub Sport"],
    topSportsLeagues: ["Swiss Super League", "National League (Hockey)", "FIS Ski World Cup", "ATP Basel", "UEFA Champions League"],
    intro:
      "Switzerland is the most language-fragmented TV market in Europe — SRF runs German channels out of Zurich, RTS handles French from Geneva, and RSI broadcasts Italian out of Lugano. Add the Romansh community in Graubünden and you have four parallel public broadcast cultures. Blue (Swisscom) and Teleclub Sport split Super League and Champions League rights. IPTV UPG packages all SRG SSR public channels in every Swiss language plus Blue Sport and Teleclub at $7.50/month.",
    channelHighlights:
      "SRG SSR — SRF 1, SRF 2, SRF info (German); RTS Un, RTS Deux (French); RSI LA 1, RSI LA 2 (Italian); RTR (Romansh); Private 3+, 4+, 5+, TV24; Teleclub Sport and Blue Sport; Eurosport 1 and 2 for FIS skiing; ARD, ZDF and ORF for German overspill; French TF1, France 2; Italian Rai 1, 2, 3 and Mediaset.",
    sportsHighlights:
      "Swiss Super League with Young Boys, FC Basel, FC Zürich and Servette; National League hockey at SC Bern and ZSC Lions; FIS Alpine Ski World Cup at Lauberhorn Wengen, Adelboden and St. Moritz; the Swiss Indoors ATP Basel; UEFA Champions League with Roger Federer / Stan Wawrinka legacy; Spengler Cup hockey at Davos.",
  },
  {
    name: "Syria",
    slug: "syria",
    code: "SY",
    region: "Middle East",
    capital: "Damascus",
    languages: ["Arabic"],
    currency: { name: "Syrian Pound", code: "SYP" },
    topBroadcasters: ["Syrian TV", "Al Ikhbariya", "Sama TV", "Lana TV", "Addounia TV"],
    topSportsLeagues: ["Syrian Premier League", "AFC Asian Cup", "AFC Champions League", "WAFF Championship", "Arab Cup"],
    intro:
      "Syrian TV is a state-dominated market with Syrian TV and Al Ikhbariya carrying the official news layer, while diaspora audiences in Beirut, Istanbul and Berlin watch via satellite. The Qasioun Eagles national football team's near-miss at the 2018 World Cup qualifying playoff made Syrian football a cult interest, and Al-Ittihad Aleppo and Al-Karamah dominate the Premier League. IPTV UPG bundles Syrian TV, MBC, beIN Sports MENA and Türksat at $7.50/month.",
    channelHighlights:
      "Syrian TV, Al Ikhbariya, Sama TV, Lana TV, Addounia TV; MBC, MBC Action, MBC2, MBC Masr 2; Al Jazeera Arabic and English; beIN Sports MENA 1–11; Saudi Sports; Iranian Press TV Arabic; Turkish TRT Arabic; Future TV, LBCI Lebanon; Russian RT Arabic; Al Mayadeen; OSN Arabic Cinema.",
    sportsHighlights:
      "Syrian Premier League with Al-Ittihad Aleppo, Al-Karamah Homs and Al-Wahda Damascus; AFC Asian Cup with the Qasioun Eagles; AFC Champions League; WAFF Championship; Arab Cup; plus Saudi Pro League and Egyptian Premier League viewing for the diaspora.",
  },
  {
    name: "Tajikistan",
    slug: "tajikistan",
    code: "TJ",
    region: "Asia",
    capital: "Dushanbe",
    languages: ["Tajik", "Russian"],
    currency: { name: "Tajikistani Somoni", code: "TJS" },
    topBroadcasters: ["TVT (TV Tajikistan)", "Safina", "Jahonnamo", "Sinamo", "Bahoriston"],
    topSportsLeagues: ["Tajikistan Higher League", "AFC Asian Cup", "AFC Cup", "CAFA Nations Cup", "Buzkashi"],
    intro:
      "Tajikistan blends Persian-language TVT and Safina with Russian Channel One and NTV from Moscow — most households use both. The national football team's surprise AFC Asian Cup 2023 quarter-final run, the Istiklol Dushanbe dynasty in the Higher League, and traditional Buzkashi tournaments are sports prime time. IPTV UPG includes TVT, Safina, Russian Channel One, Match TV, beIN Arabic and Iranian IRIB at $7.50/month with Tajik and Russian audio.",
    channelHighlights:
      "TVT, Safina, Jahonnamo (Russian), Sinamo, Bahoriston (children's), Football TV Tajikistan; Russian Channel One (Pervy Kanal), Russia 1, NTV, Match TV; Iranian IRIB TV1, TV3, IRIB Varzesh; Uzbek Yoshlar; beIN Sports Arabic; CCTV; Eurosport; RT Russian and CGTN.",
    sportsHighlights:
      "Tajikistan Higher League with Istiklol Dushanbe (multi-time CAFA champions), AFC Asian Cup 2023 quarter-final run, AFC Cup, CAFA Nations Cup against Uzbekistan and Iran, plus the Navrooz Buzkashi tournament — Tajikistan's traditional horseback sport — and Greco-Roman wrestling at the Asian Games.",
  },
  {
    name: "Tanzania",
    slug: "tanzania",
    code: "TZ",
    region: "Africa",
    capital: "Dodoma",
    languages: ["Swahili", "English"],
    currency: { name: "Tanzanian Shilling", code: "TZS" },
    topBroadcasters: ["TBC1", "ITV Tanzania", "Channel Ten", "Azam TV", "Star TV", "Clouds TV"],
    topSportsLeagues: ["NBC Premier League (Ligi Kuu Bara)", "AFCON", "CAF Champions League", "Kilimanjaro Marathon", "CECAFA"],
    intro:
      "Tanzania is a Swahili-language TV powerhouse — TBC1 is the state broadcaster, ITV Tanzania and Channel Ten lead independent news, and Azam TV runs the major Pay-TV platform out of Dar es Salaam. The Simba SC vs Young Africans (Yanga) derby in the NBC Premier League shuts down Dar — the Kariakoo market clears at kickoff. IPTV UPG bundles TBC1, ITV, Azam Sport, SuperSport and beIN Arabic at $7.50/month.",
    channelHighlights:
      "TBC1, TBC Taifa; ITV Tanzania, Channel Ten, Star TV, Clouds TV (Bongo Flava music), Capital TV, EATV; Azam TV — Azam Sport 1–4 (Premier League, Serie A); SuperSport Premier League and Variety; Wasafi TV (Diamond Platnumz); Bongo Movies; Kenyan KBC and Citizen TV; Indian Star Plus and Zee TV for the South Asian Tanzanian community.",
    sportsHighlights:
      "NBC Premier League / Ligi Kuu Bara — Simba SC vs Young Africans (Yanga) Kariakoo derby; AFCON with the Taifa Stars; CAF Champions League and Confederation Cup; CECAFA Senior Challenge Cup; Kilimanjaro Marathon; East African Safari Rally Classic; Tanzania at the Commonwealth Games athletics.",
  },
  {
    name: "Thailand",
    slug: "thailand",
    code: "TH",
    region: "Asia",
    capital: "Bangkok",
    languages: ["Thai"],
    currency: { name: "Thai Baht", code: "THB" },
    topBroadcasters: ["Channel 3", "Channel 7 HD", "Channel 9 MCOT HD", "Thai PBS", "NBT", "Workpoint TV", "GMM 25", "ONE 31"],
    topSportsLeagues: ["Thai League 1 (T1)", "Muay Thai (Lumpinee, Rajadamnern)", "ONE Championship", "MotoGP Buriram", "Tour of Thailand"],
    intro:
      "Thailand has the most competitive free-to-air market in Southeast Asia — 25+ digital channels including Channel 3, Channel 7, Workpoint, ONE 31, GMM 25 and Thai PBS, all available HD over DTT. Muay Thai broadcasts from Lumpinee and Rajadamnern stadiums plus ONE Championship out of Impact Arena draw huge ratings, and the Buriram MotoGP round at Chang International Circuit closes the calendar. IPTV UPG bundles all Thai DTT plus TrueVisions and AIS Play sports at $7.50/month.",
    channelHighlights:
      "Channel 3 HD, 3 Family, 3 SD; Channel 7 HD; Channel 9 MCOT HD; Thai PBS, ALTV; NBT, NBT Sport; Workpoint TV, ONE 31, GMM 25, True4U, Now 26, JKN 18, Amarin TV, PPTV, Mono 29, Nation TV; TrueVisions Sport 1–6 (Premier League, La Liga); AIS Play Sport; T Sport 7; Eurosport Asia; Cartoon Network Thailand.",
    sportsHighlights:
      "Thai League 1 with Buriram United, BG Pathum United and Bangkok United; Muay Thai at Lumpinee and Rajadamnern stadiums; ONE Championship MMA at Impact Arena Bangkok; MotoGP Thailand at Buriram Chang International Circuit; Tour of Thailand cycling; Thailand Open ATP and BWF World Tour badminton; War Elephants at AFC Asian Cup.",
  },
  {
    name: "Timor-Leste",
    slug: "timor-leste",
    code: "TL",
    region: "Asia",
    capital: "Dili",
    languages: ["Portuguese", "Tetum"],
    currency: { name: "US Dollar", code: "USD" },
    topBroadcasters: ["RTTL (Rádio e Televisão de Timor-Leste)", "GMN TV", "TVE Timor Leste"],
    topSportsLeagues: ["LFA Primera Divisão", "AFF Mitsubishi Electric Cup", "AFC Asian Cup Qualifiers", "Lusofonia Games"],
    intro:
      "Timor-Leste is Asia's youngest country and a bilingual TV market — RTTL broadcasts in Portuguese and Tetum out of Dili, and most households fill out the lineup with Indonesian RCTI, SCTV and Trans TV via overspill. Football is the national obsession: Os Sol Nascente compete in the AFF Cup and AFC Asian Cup qualifiers, and the LFA Primera Divisão runs from October to May. IPTV UPG includes RTTL, Portuguese RTP, Indonesian channels and SEA football feeds at $7.50/month.",
    channelHighlights:
      "RTTL (Rádio e Televisão de Timor-Leste), GMN TV, TVE Timor Leste; Portuguese RTP1, RTP2, RTP Internacional, SIC, SIC Notícias, TVI; Indonesian RCTI, SCTV, Trans TV, MetroTV, Kompas TV; Australian ABC Asia Pacific; Sky Sport NZ; beIN Sports Asia; AFF Cup feeds; CNN International; Al Jazeera English.",
    sportsHighlights:
      "LFA Primera Divisão Timor (Carsae, Lalenok United, Boavista FC Timor-Leste), AFF Mitsubishi Electric Cup with the Sol Nascente, AFC Asian Cup qualifying, Lusofonia Games athletics, plus Portuguese Primeira Liga viewing for the older Portuguese-speaking generation and Indonesian Liga 1 for the youth audience.",
  },
  {
    name: "Togo",
    slug: "togo",
    code: "TG",
    region: "Africa",
    capital: "Lomé",
    languages: ["French"],
    currency: { name: "West African CFA Franc", code: "XOF" },
    topBroadcasters: ["TVT (Télévision Togolaise)", "RTDS", "New World TV", "LCF TV"],
    topSportsLeagues: ["Togolese Championnat National", "AFCON Qualifiers", "WAFU Zone B", "CAF Champions League", "FIFA World Cup Qualifiers"],
    intro:
      "Togo runs TVT (Télévision Togolaise) as the public broadcaster with French-language news and AFCON coverage. Emmanuel Adebayor's legacy at Arsenal and Manchester City made Togolese football a continental story, and the Sparrowhawks' 2006 World Cup appearance is still appointment replay material. The Championnat National with AS OTR and ASKO Kara plays second to the Premier League and Ligue 1 for most Lomé households. IPTV UPG includes TVT, Canal+ Sport Afrique and beIN MENA at $7.50/month.",
    channelHighlights:
      "TVT (Télévision Togolaise), RTDS, New World TV, LCF TV; French TF1, France 2, France 24; Canal+ Sport Afrique, Canal+ Sport 360, RMC Sport 1 and 2; beIN Sports MENA 1–3; SuperSport Premier League and Variety; BBC Afrique; Africa Magic Yoruba; AfricaNews; Nigerian NTA and Channels TV via overspill.",
    sportsHighlights:
      "Togolese Championnat National with AS OTR Lomé, ASKO Kara and Maranatha Fiokpo, AFCON qualifiers with the Sparrowhawks (Emmanuel Adebayor era legacy), WAFU Zone B West African tournaments, CAF Champions League ties, FIFA World Cup qualifiers (Togo's only WC appearance was Germany 2006), plus African Nations Championship.",
  },
  {
    name: "Tonga",
    slug: "tonga",
    code: "TO",
    region: "Oceania",
    capital: "Nukuʻalofa",
    languages: ["Tongan", "English"],
    currency: { name: "Tongan Paʻanga", code: "TOP" },
    topBroadcasters: ["TV Tonga", "Oceania Broadcasting Network", "TV Tonga 3 (Sports)"],
    topSportsLeagues: ["Ikale Tahi Rugby (Tonga National)", "Tonga National Rugby League", "Pacific Nations Cup", "Pacific Games", "Mate Maʻa Tonga"],
    intro:
      "Tonga is a rugby-mad island kingdom — the Ikale Tahi Rugby Union side and the Mate Maʻa Tonga rugby league team draw audiences three times the country's population thanks to a massive Tongan diaspora in Sydney, Auckland and Salt Lake City. TV Tonga and OBN cover local programming, while Sky Sport NZ and Fox League Australia carry the rugby. IPTV UPG bundles TV Tonga, Sky Sport NZ, Fox League and ABC Pacific at $7.50/month for both Nukuʻalofa and diaspora audiences.",
    channelHighlights:
      "TV Tonga (state broadcaster), OBN (Oceania Broadcasting Network), TV Tonga 3 for sports; Australian ABC Asia Pacific, ABC News 24, Seven Network, Nine Network, Fox League; NZ Sky Sport, Sky Sport Rugby, Māori TV; Pasifika TV; BBC World; Al Jazeera English; ESPN Pacific; CNN International; Discovery and National Geographic.",
    sportsHighlights:
      "Ikale Tahi Tonga Rugby Union at Pacific Nations Cup and Rugby World Cup, Mate Maʻa Tonga rugby league at the Pacific Championships (the 2017 World Cup semi-final still legendary), Pacific Games athletics and weightlifting, plus NRL viewing for the Tongan-Australian community following Jason Taumalolo and Daly Cherry-Evans.",
  },
  {
    name: "Trinidad and Tobago",
    slug: "trinidad-and-tobago",
    code: "TT",
    region: "Caribbean",
    capital: "Port of Spain",
    languages: ["English"],
    currency: { name: "Trinidad and Tobago Dollar", code: "TTD" },
    topBroadcasters: ["CCN TV6", "TTT", "CNC3", "IETV", "TV Jaagriti"],
    topSportsLeagues: ["TT Premier Football League", "West Indies Cricket", "Caribbean Premier League", "Soca Warriors (National Football)", "Trinidad and Tobago Sevens"],
    intro:
      "Trinidad and Tobago has the Caribbean's loudest broadcast market — CCN TV6 is the ratings leader, TTT is the state broadcaster, and CNC3 competes hard for news. Brian Lara's 400 not out at Antigua and the Soca Warriors' 2006 World Cup appearance are TV's permanent classics, while Trinbago Knight Riders own the Caribbean Premier League. IPTV UPG bundles TV6, TTT, CNC3, Flow Sports, SportsMax and the full US ABC/NBC/CBS/Fox at $7.50/month.",
    channelHighlights:
      "CCN TV6, TTT (Trinidad and Tobago Television), CNC3, IETV, TV Jaagriti for the Indo-Trinidadian community; Caribbean Media Corporation, CaribVision; Flow Sports 1 & 2, SportsMax for West Indies cricket; US ABC, NBC, CBS, Fox, ESPN, ESPN2, Fox Sports 1, NBA TV; HBO and Showtime; BBC World; CNN; Indian Sun TV and Zee TV.",
    sportsHighlights:
      "TT Premier Football League (Defence Force, W Connection, Central FC), Soca Warriors at CONCACAF Gold Cup and World Cup qualifying (2006 Germany legacy), West Indies Test, ODI and T20 cricket at Queen's Park Oval, Caribbean Premier League with Trinbago Knight Riders (multi-time champions), TT Carnival Sevens rugby, plus athletics with Keshorn Walcott's javelin Olympic gold.",
  },
  {
    name: "Tunisia",
    slug: "tunisia",
    code: "TN",
    region: "Africa",
    capital: "Tunis",
    languages: ["Arabic", "French"],
    currency: { name: "Tunisian Dinar", code: "TND" },
    topBroadcasters: ["El Wataniya 1", "El Wataniya 2", "Hannibal TV", "Nessma TV", "Attessia TV", "Carthage TV"],
    topSportsLeagues: ["Ligue Professionnelle 1", "AFCON", "CAF Champions League", "FIFA World Cup", "Arab Cup"],
    intro:
      "Tunisian TV is a French-Arabic dual market — El Wataniya 1 and 2 are the state broadcasters, and private channels Hannibal, Nessma, Attessia and Carthage TV compete on news and football. The Eagles of Carthage national team's 2022 World Cup win over France is still on permanent rotation, and the Espérance Tunis vs Étoile Sahel rivalry in the Ligue Professionnelle 1 is North Africa's biggest derby. IPTV UPG bundles all Tunisian channels, French Canal+, beIN MENA and SuperSport at $7.50/month.",
    channelHighlights:
      "El Wataniya 1 and 2 (state), Hannibal TV, Nessma TV, Attessia TV, Carthage TV, El Hiwar Ettounsi, Tunisia 24, Zitouna TV; French TF1, France 2, M6, France 24, TV5 Monde; Canal+ Sport Afrique, Canal+ Sport 360; beIN Sports MENA 1–11 for La Liga and Champions League; Saudi Sports; SuperSport; MBC Action and MBC Drama.",
    sportsHighlights:
      "Ligue Professionnelle 1 with Espérance Tunis (multi-time CAF Champions League winners), Étoile Sahel, Club Africain and US Monastir; AFCON with the Eagles of Carthage; CAF Champions League and Confederation Cup; FIFA World Cup (2022 Qatar — beat France 1-0); Arab Cup of Nations; African Nations Championship; Mediterranean Games athletics.",
  },
  {
    name: "Turkmenistan",
    slug: "turkmenistan",
    code: "TM",
    region: "Asia",
    capital: "Ashgabat",
    languages: ["Turkmen", "Russian"],
    currency: { name: "Turkmenistan Manat", code: "TMT" },
    topBroadcasters: ["Altyn Asyr", "Yashlyk", "Watan", "Miras", "Türkmenistan"],
    topSportsLeagues: ["Ýokary Liga", "AFC Asian Cup", "AFC Cup", "Akhal-Teke Equestrian", "Asian Indoor Games"],
    intro:
      "Turkmenistan is one of the most closed broadcast markets in Central Asia — state channels Altyn Asyr, Yashlyk and Türkmenistan dominate, and most households supplement with Russian Channel One, Turkish TRT and Iranian IRIB via satellite. Football's Ýokary Liga with Altyn Asyr FK and Ahal FK has dominated the AFC Cup of the region. Akhal-Teke horse racing, the country's national heritage breed, gets prime-time TV. IPTV UPG includes all Turkmen channels plus Russian, Turkish and Iranian feeds at $7.50/month.",
    channelHighlights:
      "Altyn Asyr, Yashlyk, Watan, Miras, Türkmenistan, Aşgabat (Ashgabat regional); Turkmen Owazy (music), TMT Sport; Russian Channel One, Russia 1, Match TV, NTV; Iranian IRIB TV1, TV3; Turkish TRT 1, TRT Spor; Uzbek Yoshlar; CCTV; beIN Sports Arabic; Eurosport; CGTN.",
    sportsHighlights:
      "Ýokary Liga football with Altyn Asyr FK (multi-time AFC Cup zone winners), Ahal FK and Köpetdag; AFC Asian Cup with the Galkynyş national team; AFC Cup; Akhal-Teke equestrian races at the President's Cup; Asian Indoor and Martial Arts Games hosted in Ashgabat; freestyle wrestling at the Asian Games.",
  },
  {
    name: "Tuvalu",
    slug: "tuvalu",
    code: "TV",
    region: "Oceania",
    capital: "Funafuti",
    languages: ["Tuvaluan", "English"],
    currency: { name: "Tuvaluan Dollar / Australian Dollar", code: "AUD" },
    topBroadcasters: ["TMC (Tuvalu Media Corporation)", "Radio Tuvalu TV"],
    topSportsLeagues: ["NFA Tuvalu League", "Pacific Games", "Te Ano (traditional Tuvalu ball game)", "OFC Nations Cup"],
    intro:
      "Tuvalu is the world's fourth-smallest country with ~11,000 residents and an equally small TV market — TMC (Tuvalu Media Corporation) is the state broadcaster, and most households supplement with Australian ABC and NZ TVNZ via Pacific feeds. Football's NFA League runs out of Funafuti's single stadium, and the Pacific Games is the calendar highlight. IPTV UPG includes TMC, Australia's ABC Pacific, NZ Sky Sport, Fiji TV and Pasifika TV at $7.50/month — built for atoll-grade bandwidth.",
    channelHighlights:
      "TMC (Tuvalu Media Corporation), Radio Tuvalu TV; Australian ABC Asia Pacific, ABC News 24; NZ TVNZ 1, Sky Sport NZ; Fiji TV (One Fiji), FBC; Pasifika TV; Australian Seven Network, Nine Network; BBC World; CNN International; Al Jazeera English; ESPN Pacific; Discovery; National Geographic.",
    sportsHighlights:
      "NFA Tuvalu League football at Tuvalu Sports Ground Funafuti, Pacific Games every four years (athletics, weightlifting), the traditional Te Ano ball game during community festivals, plus OFC Nations Cup qualifiers and FIFA World Cup viewing parties for Australian Socceroos matches.",
  },
  {
    name: "Uganda",
    slug: "uganda",
    code: "UG",
    region: "Africa",
    capital: "Kampala",
    languages: ["English", "Swahili"],
    currency: { name: "Ugandan Shilling", code: "UGX" },
    topBroadcasters: ["UBC", "NTV Uganda", "NBS TV", "Bukedde TV", "Spark TV", "Urban TV"],
    topSportsLeagues: ["Uganda Premier League", "AFCON", "CAF Champions League", "Kampala Marathon", "CECAFA"],
    intro:
      "Uganda has a competitive TV market — UBC is the state broadcaster, NTV Uganda (Nation Media) leads news ratings, and NBS TV runs strong on entertainment. The Cranes' AFCON appearances (2017 and 2019), KCCA FC and SC Villa rivalry in the Uganda Premier League, and Joshua Cheptegei's distance running dominance keep sports prime time full. IPTV UPG bundles UBC, NTV, NBS, SuperSport Premier League, Azam Sport and beIN Arabic at $7.50/month for Kampala and Entebbe households.",
    channelHighlights:
      "UBC TV, UBC Magic (state); NTV Uganda, NBS TV (Next Media), Bukedde TV (Luganda), Spark TV (Luganda music), Urban TV, Sanyuka TV, Salt TV; Azam TV — Azam Sport 1–4; SuperSport Premier League and Variety; Kenyan Citizen TV and KTN; Africa Magic; Bollywood Star Plus for the South Asian Ugandan community; BBC Africa.",
    sportsHighlights:
      "Uganda Premier League with KCCA FC, SC Villa, Vipers SC and Express FC; AFCON Africa Cup with the Cranes (2017, 2019 qualifiers); CAF Champions League and Confederation Cup; CECAFA Senior Challenge Cup; Joshua Cheptegei in IAAF Diamond League distance running; Stephen Kiprotich marathon legacy; Uganda Cricket Cranes T20 qualifiers.",
  },
  {
    name: "Ukraine",
    slug: "ukraine",
    code: "UA",
    region: "Europe",
    capital: "Kyiv",
    languages: ["Ukrainian"],
    currency: { name: "Ukrainian Hryvnia", code: "UAH" },
    topBroadcasters: ["Suspilne (UA:PBC)", "1+1", "ICTV", "STB", "Inter", "Ukraina", "Novyi Kanal", "TET"],
    topSportsLeagues: ["Ukrainian Premier League", "UEFA Champions League", "Boxing (Klitschko / Usyk)", "Biathlon", "European Football Championship"],
    intro:
      "Ukrainian TV consolidated heavily during the war — the United News Marathon ties 1+1, ICTV, STB, Inter, Ukraina and Suspilne together for 24/7 news, while sports rights split between Setanta Sports Ukraine, MEGOGO and football.ua. Dynamo Kyiv vs Shakhtar Donetsk in the Ukrainian Premier League and the Yellow-Blues at UEFA Euro carry the football calendar, while Oleksandr Usyk's heavyweight boxing dominance and biathlon at Pokliuka are appointment TV. IPTV UPG includes all UA channels plus Setanta Sports and Eurosport at $7.50/month.",
    channelHighlights:
      "Suspilne UA:PBC (UA:Persha, UA:Kultura, UA:Krym, UA:Sport); 1+1, ICTV, STB, Inter, Ukraina, Novyi Kanal, TET, K1, K2; Pryamiy, Espreso, Channel 5, 24 Kanal (news); Setanta Sports Ukraine, MEGOGO Sport (Premier League, Bundesliga); Eurosport 1 and 2 for biathlon; Sport 1 Ukraine, Football 1, Football 2 for UPL; Bollywood and Polish TVP overspill.",
    sportsHighlights:
      "Ukrainian Premier League with Dynamo Kyiv, Shakhtar Donetsk (now playing in exile) and Zorya Luhansk; UEFA Champions League and Europa League; Yellow-Blues at UEFA Euro and World Cup qualifying; Oleksandr Usyk world heavyweight title fights (Fury, Joshua); women's football; biathlon at IBU World Cup at Pokliuka; figure skating; gymnastics.",
  },
  {
    name: "Uruguay",
    slug: "uruguay",
    code: "UY",
    region: "South America",
    capital: "Montevideo",
    languages: ["Spanish"],
    currency: { name: "Uruguayan Peso", code: "UYU" },
    topBroadcasters: ["Saeta TV Canal 10", "Teledoce", "Monte Carlo TV (Canal 4)", "TNU", "VTV"],
    topSportsLeagues: ["Uruguayan Primera División", "Copa Libertadores", "La Celeste (National Football)", "Conmebol Sudamericana", "Copa América"],
    intro:
      "Uruguay punches massively above its weight in football — the two-time World Cup champions, La Celeste, plus the Nacional vs Peñarol Clásico in the Uruguayan Primera División, and Edinson Cavani / Luis Suárez / Federico Valverde keeping Charrúa football world-class. Saeta TV Canal 10, Teledoce and Monte Carlo TV (Canal 4) dominate household viewing in Montevideo. IPTV UPG includes Canal 10, Teledoce, Canal 4, ESPN Sur, DirecTV Sports and FOX Deportes at $7.50/month.",
    channelHighlights:
      "Saeta TV Canal 10, Teledoce (12), Monte Carlo TV (Canal 4), TNU (Televisión Nacional Uruguay), VTV (cable news); ESPN, ESPN 2, ESPN 3 Sur; DirecTV Sports, DirecTV Sports 2, DSports Plus; FOX Deportes; TyC Sports; CONMEBOL TV; Argentine Telefé and Channel 13; HBO Latin America; National Geographic Sur.",
    sportsHighlights:
      "Uruguayan Primera División Clásico Nacional vs Peñarol at the Centenario; Copa Libertadores (Nacional and Peñarol multi-champions, Defensor Sporting); La Celeste at the FIFA World Cup (1930 and 1950 champions) and Copa América (record 15 titles); Conmebol Sudamericana; basketball Liga Uruguaya; rugby Los Teros at the World Cup.",
  },
  {
    name: "Uzbekistan",
    slug: "uzbekistan",
    code: "UZ",
    region: "Asia",
    capital: "Tashkent",
    languages: ["Uzbek", "Russian"],
    currency: { name: "Uzbekistani Som", code: "UZS" },
    topBroadcasters: ["Uzbekistan 24", "Yoshlar", "Yangi O'zbekiston", "MY5", "Sport"],
    topSportsLeagues: ["Uzbekistan Super League", "AFC Asian Cup", "FIFA World Cup", "AFC Champions League", "Olympic Boxing/Wrestling"],
    intro:
      "Uzbekistan is Central Asia's largest TV market — Uzbekistan 24, Yoshlar (youth) and Sport channels are state-run, while private MY5 and Sevimli compete on entertainment. The White Wolves national team's first-ever FIFA World Cup qualification (USA/Canada/Mexico 2026) is a historic milestone, and the Pakhtakor vs Bunyodkor rivalry plus Uzbek Olympic boxing dominance (Bakhodir Jalolov heavyweight gold) dominate sports TV. IPTV UPG includes all Uzbek state channels plus Russian Match TV, beIN Arabic and Eurosport at $7.50/month.",
    channelHighlights:
      "Uzbekistan 24 (news), Yoshlar (youth), Yangi O'zbekiston, MY5, Sevimli, Madaniyat va Ma'rifat (culture), Uzbekistan Sport; Russian Channel One, Russia 1, Match TV, NTV; Turkish TRT and ATV; Iranian IRIB; Kazakh Khabar; Uzbek MILLIY (children's); beIN Sports Arabic; Eurosport 1 and 2; CCTV Russian.",
    sportsHighlights:
      "Uzbekistan Super League with Pakhtakor Tashkent (record champions), Bunyodkor and AGMK; AFC Asian Cup with the White Wolves; FIFA World Cup qualification — first time at the 2026 World Cup; AFC Champions League with Pakhtakor; Bakhodir Jalolov Olympic heavyweight boxing gold; Greco-Roman wrestling at the Asian Games and Olympics; Kurash (Uzbek martial art).",
  },
  {
    name: "Vanuatu",
    slug: "vanuatu",
    code: "VU",
    region: "Oceania",
    capital: "Port Vila",
    languages: ["Bislama", "English", "French"],
    currency: { name: "Vanuatu Vatu", code: "VUV" },
    topBroadcasters: ["VBTC (Vanuatu Broadcasting and Television Corporation)", "Television Blong Vanuatu"],
    topSportsLeagues: ["Port Vila Football League", "OFC Nations Cup", "Pacific Games", "Beach Volleyball (Olympic level)", "FIFA World Cup Qualifiers"],
    intro:
      "Vanuatu is a trilingual island state — VBTC broadcasts in Bislama, English and French out of Port Vila. The Tafea FC dynasty in the Port Vila Football League and the Vanuatu national beach volleyball team (Olympic medalist potential) anchor sports interest, plus the Pacific Games on the four-year rotation. IPTV UPG includes VBTC, Australia's ABC Pacific, French TF1 and France 2 (for the francophone half of Vanuatu), Sky Sport NZ and Pasifika TV at $7.50/month.",
    channelHighlights:
      "VBTC TV (Vanuatu Broadcasting and Television Corporation), Television Blong Vanuatu; Australian ABC Asia Pacific, ABC News 24, Seven Network; NZ TVNZ 1, Sky Sport NZ; French TF1, France 2, France 24, TV5 Monde Pacific; Fiji TV (One Fiji); Pasifika TV; ESPN Pacific; BBC World; Al Jazeera English; Cartoon Network Asia.",
    sportsHighlights:
      "Port Vila Football League with Tafea FC (multi-champion dynasty), Amicale FC and Erakor Golden Star; OFC Nations Cup with the Vanuatu national football team; FIFA World Cup qualifiers; Pacific Games athletics and weightlifting; Vanuatu women's beach volleyball at the FIVB World Tour and Olympics; the Pacific Mini Games hosting.",
  },
  {
    name: "Venezuela",
    slug: "venezuela",
    code: "VE",
    region: "South America",
    capital: "Caracas",
    languages: ["Spanish"],
    currency: { name: "Venezuelan Bolívar", code: "VES" },
    topBroadcasters: ["VTV", "Venevisión", "Televen", "Globovisión", "Telesur", "Meridiano TV"],
    topSportsLeagues: ["Venezuelan Primera División", "LVBP Baseball", "Major League Baseball (MLB)", "Copa América", "Conmebol Libertadores"],
    intro:
      "Venezuela's TV is dominated by Venevisión (Cisneros), Televen and state-run VTV — telenovela powerhouses for decades and the launch pad for Sábado Sensacional. Baseball is the religion: the LVBP winter league (Leones del Caracas vs Navegantes del Magallanes) and tracking Venezuelan MLB stars Acuña Jr, Altuve, Cabrera, Salvador Pérez fills every prime time. La Vinotinto in Copa América qualifying has surged. IPTV UPG includes all VE channels, MLB Network, ESPN Sur and Meridiano TV at $7.50/month.",
    channelHighlights:
      "Venevisión, Televen, VTV (Venezolana de Televisión), Globovisión, Telesur, Meridiano TV (sports), TVes, IVC, Promar TV; ESPN, ESPN 2, ESPN 3 Sur; DirecTV Sports; MLB Network; FOX Sports Sur; Telemundo and Univisión via diaspora; Telefé and Channel 13 (Argentina); HBO Latin America; Discovery and Animal Planet.",
    sportsHighlights:
      "Venezuelan Primera División football, LVBP baseball winter league with Leones del Caracas, Navegantes del Magallanes and Tiburones de La Guaira; Major League Baseball — Ronald Acuña Jr (Braves), José Altuve (Astros), Salvador Pérez (Royals), Miguel Cabrera legacy; La Vinotinto at Copa América; CONMEBOL Libertadores; basketball Superliga Profesional.",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    code: "VN",
    region: "Asia",
    capital: "Hanoi",
    languages: ["Vietnamese"],
    currency: { name: "Vietnamese Dong", code: "VND" },
    topBroadcasters: ["VTV1", "VTV2", "VTV3", "VTV4", "VTV6", "HTV (Ho Chi Minh)", "VTC", "K+", "On Sports"],
    topSportsLeagues: ["V.League 1", "AFF Mitsubishi Electric Cup", "AFC Asian Cup", "SEA Games", "VBA Basketball"],
    intro:
      "Vietnam has one of Asia's most engaged football audiences — the Golden Stars' 2018 AFC U23 Championship final run and the 2018/2022 AFF Cup wins under Park Hang-seo turned the national team into a continental obsession. VTV1, VTV3 and VTV6 (sports) lead state coverage out of Hanoi while HTV runs the southern lineup from Ho Chi Minh City. K+ holds Premier League rights, On Sports carries Champions League. IPTV UPG bundles all VTV, HTV, VTC, K+ and On Sports at $7.50/month.",
    channelHighlights:
      "VTV1 (general), VTV2 (science/culture), VTV3 (entertainment), VTV4 (international), VTV5 (ethnic minorities), VTV6 (youth/sports), VTV7; HTV1, HTV2, HTV3, HTV7, HTV9 (Ho Chi Minh City Television); VTC1–VTC16; K+1, K+ Active, K+ Sport, K+ Cinema (Premier League, La Liga); On Sports, On Sports News, On Sports+ (Champions League); FPT Play.",
    sportsHighlights:
      "V.League 1 with Hanoi FC, Hoàng Anh Gia Lai and Becamex Bình Dương; AFF Mitsubishi Electric Cup with the Golden Stars (2008, 2018 champions); AFC Asian Cup; SEA Games hosted in Hanoi 2022 (Vietnam topped medal table); VBA basketball with Saigon Heat and Hanoi Buffaloes; ONE Championship MMA; Vietnam Open badminton; Sepak takraw.",
  },
  {
    name: "Yemen",
    slug: "yemen",
    code: "YE",
    region: "Middle East",
    capital: "Sanaʼa",
    languages: ["Arabic"],
    currency: { name: "Yemeni Rial", code: "YER" },
    topBroadcasters: ["Yemen TV", "Aden Independent", "Saba TV", "Al Masirah", "Belqees TV"],
    topSportsLeagues: ["Yemeni League", "AFC Asian Cup", "WAFF Championship", "Arab Cup", "FIFA World Cup Qualifiers"],
    intro:
      "Yemen's TV market is split between Sanaʼa-based Yemen TV and the Aden-based southern broadcasters, with Belqees TV out of Istanbul carrying independent news for the diaspora in Cairo, Riyadh and Detroit. The Red Devils national football team's first-ever AFC Asian Cup appearance in 2019 was a generational moment, and Saudi Pro League viewing dominates for the large Yemeni labour-migrant community. IPTV UPG bundles Yemen TV, MBC, beIN Sports MENA and Saudi Sports at $7.50/month.",
    channelHighlights:
      "Yemen TV (state), Aden Independent (southern), Saba TV, Al Masirah, Belqees TV (Istanbul-based independent); MBC, MBC Action, MBC2, MBC Drama, MBC Masr 2; Al Jazeera Arabic and English; beIN Sports MENA 1–11; Saudi Sports KSA; OSN Arabic Cinema; Egyptian Al Hayat and CBC; Iranian Press TV Arabic; Bollywood Zee Aflam.",
    sportsHighlights:
      "Yemeni League football with Al-Ahli Sana'a, Al-Wahda Aden and Shaab Ibb; AFC Asian Cup with the Red Devils (first appearance UAE 2019); WAFF Championship; Arab Cup of Nations; FIFA World Cup qualifiers; Saudi Pro League and Egyptian Premier League viewing for the diaspora and labour-migrant community.",
  },
  {
    name: "Zambia",
    slug: "zambia",
    code: "ZM",
    region: "Africa",
    capital: "Lusaka",
    languages: ["English"],
    currency: { name: "Zambian Kwacha", code: "ZMW" },
    topBroadcasters: ["ZNBC TV1", "ZNBC TV2", "ZNBC TV3", "MUVI TV", "Diamond TV", "Prime TV"],
    topSportsLeagues: ["MTN Super League", "Chipolopolo (National Football)", "AFCON", "CAF Champions League", "Lusaka Marathon"],
    intro:
      "Zambia's TV market runs on ZNBC's four state channels plus the vibrant private layer of MUVI TV, Diamond TV and Prime TV. The Chipolopolo national team's 2012 AFCON triumph in Libreville — won on penalties, days after the team prayed at the Gabon plane crash site that killed an earlier squad — is the most emotional sports broadcast in Zambian TV history. Nkana FC vs Power Dynamos in the MTN Super League completes the rotation. IPTV UPG includes ZNBC, MUVI, SuperSport and beIN Arabic at $7.50/month.",
    channelHighlights:
      "ZNBC TV1, TV2, TV3, TV4 (Zambia National Broadcasting Corporation); MUVI TV, Diamond TV, Prime TV, Mobi TV, KBN TV, Camnet TV; SuperSport Premier League and Variety, SuperSport Football (Africa-wide rights); Kwesé and Azam Sport; DStv Compact and Premium; Bollywood Star Plus; African Magic; Trace Africa for music.",
    sportsHighlights:
      "MTN Super League with Nkana FC and Power Dynamos (Kitwe Derby), Zanaco, Red Arrows and Zesco United; AFCON Africa Cup with Chipolopolo — 2012 champions in Libreville; CAF Champions League; CAF Confederation Cup; Lusaka and Zambian Open marathons; Zambia at the Commonwealth Games athletics.",
  },
  {
    name: "Zimbabwe",
    slug: "zimbabwe",
    code: "ZW",
    region: "Africa",
    capital: "Harare",
    languages: ["English", "Shona", "Ndebele"],
    currency: { name: "Zimbabwe Gold / US Dollar", code: "USD" },
    topBroadcasters: ["ZBC TV", "ZTN Prime", "3KTV", "NRTV"],
    topSportsLeagues: ["Zimbabwe Premier Soccer League", "Zimbabwe Cricket (Test, ODI, T20I)", "AFCON", "Warriors National Team", "Comrades Marathon"],
    intro:
      "Zimbabwe's TV used to mean ZBC alone, but the 2022 licensing reform opened the market — ZTN Prime, 3KTV and NRTV now compete in news. The Warriors national football team's AFCON appearances, the Dynamos vs CAPS United Harare Derby in the Premier Soccer League, and Zimbabwe Cricket Tests against England and India anchor the sports calendar. Brendan Taylor and Sikandar Raza-era Chevrons cricket remains appointment programming. IPTV UPG includes ZBC, ZTN, SuperSport Cricket and Premier League at $7.50/month.",
    channelHighlights:
      "ZBC TV (Zimbabwe Broadcasting Corporation), ZTN Prime, 3KTV, NRTV (newly licensed); SuperSport Premier League, SuperSport Cricket, SuperSport Variety, SuperSport Rugby; DStv Compact and Premium tiers; UK Sky Sports Premier League; South African SABC 1, 2, 3, Mzansi Magic; Indian Star Plus and Star Sports for the South Asian Zimbabwean community; Trace Africa.",
    sportsHighlights:
      "Zimbabwe Premier Soccer League — Dynamos FC vs CAPS United Harare Derby, FC Platinum and Highlanders; AFCON Africa Cup with the Warriors; Zimbabwe Cricket Test, ODI and T20I series against England, India, Pakistan and South Africa at Harare Sports Club and Queens Sports Club Bulawayo; Castle Lager Premiership; Comrades Marathon viewing for the diaspora; rugby Sables.",
  },
];

/**
 * Slug → CountryDetail lookup, generated at module load.
 */
export const COUNTRY_PAGES_BY_SLUG = new Map<string, CountryDetail>(
  COUNTRY_PAGES.map((c) => [c.slug, c]),
);

export const COUNTRY_PAGE_SLUGS = COUNTRY_PAGES.map((c) => c.slug);

/**
 * Country slugs whose body content still names trademarked broadcasters or
 * league brands (Sky Sports, BBC, ITV, Premier League, UEFA, beIN, HBO,
 * La Liga, etc.). These pages are defensively excluded from the sitemap and
 * marked `noindex, follow` until their copy is rewritten with safe category
 * descriptors. The routes remain reachable so inbound traffic still lands
 * somewhere instead of 404-ing.
 *
 * Generated by a scan of the data file on 2026-05-19. To re-generate after
 * rewriting entries, re-run the scan and trim this set.
 */
export const NOINDEX_COUNTRY_SLUGS = new Set<string>([
  "afghanistan",
  "albania",
  "algeria",
  "andorra",
  "angola",
  "antigua-and-barbuda",
  "armenia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bhutan",
  "bosnia-and-herzegovina",
  "botswana",
  "brunei",
  "bulgaria",
  "burkina-faso",
  "burundi",
  "cabo-verde",
  "cambodia",
  "cameroon",
  "cayman-islands",
  "central-african-republic",
  "chad",
  "comoros",
  "cook-islands",
  "cote-divoire-ivory-coast",
  "democratic-republic-of-the-congo",
  "djibouti",
  "dominica",
  "ecuador",
  "egypt",
  "el-salvador",
  "equatorial-guinea",
  "eritrea",
  "estonia",
  "eswatini",
  "ethiopia",
  "fiji",
  "gabon",
  "gambia",
  "ghana",
  "greece",
  "grenada",
  "guatemala",
  "guinea",
  "guinea-bissau",
  "guyana",
  "haiti",
  "holy-see-vatican",
  "honduras",
  "iceland",
  "india",
  "iran",
  "iraq",
  "ireland",
  "israel",
  "jamaica",
  "japan",
  "jordan",
  "kazakhstan",
  "kenya",
  "kiribati",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "luxembourg",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "marshall-islands",
  "mauritania",
  "mauritius",
  "micronesia",
  "moldova",
  "monaco",
  "mongolia",
  "morocco",
  "mozambique",
  "myanmar",
  "namibia",
  "nauru",
  "nepal",
  "netherlands",
  "new-zealand",
  "nicaragua",
  "niger",
  "nigeria",
  "niue",
  "north-macedonia",
  "oman",
  "pakistan",
  "palau",
  "panama",
  "papua-new-guinea",
  "poland",
  "qatar",
  "republic-of-the-congo",
  "russia",
  "rwanda",
  "saint-kitts-and-nevis",
  "saint-lucia",
  "saint-vincent-and-the-grenadines",
  "samoa",
  "san-marino",
  "sao-tome-and-principe",
  "saudi-arabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierra-leone",
  "singapore",
  "slovakia",
  "slovenia",
  "solomon-islands",
  "somalia",
  "south-sudan",
  "sri-lanka",
  "sudan",
  "suriname",
  "switzerland",
  "syria",
  "tajikistan",
  "tanzania",
  "thailand",
  "timor-leste",
  "togo",
  "tonga",
  "trinidad-and-tobago",
  "tunisia",
  "turkey",
  "turkmenistan",
  "tuvalu",
  "uganda",
  "ukraine",
  "united-arab-emirates",
  "united-states",
  "uruguay",
  "uzbekistan",
  "vanuatu",
  "venezuela",
  "vietnam",
  "yemen",
  "zambia",
  "zimbabwe",
]);

/**
 * The subset of country slugs that are safe to index and ship in the sitemap.
 */
export const INDEXABLE_COUNTRY_SLUGS = COUNTRY_PAGE_SLUGS.filter(
  (slug) => !NOINDEX_COUNTRY_SLUGS.has(slug),
);
