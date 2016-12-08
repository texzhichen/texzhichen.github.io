function writeIntro(name) {
    var description = {}

    description['uefa'] = "<h4><img src='img/uefa_champions_league.png' height=40>&nbsp;UEFA Champions League</h4>" +
    		"<h5>Introduction</h5>" + 
        "The UEFA Champions League " +
        "is an annual continental club football competition " +
        "contested by top-division European clubs, which attracts millions of people each year. " +
        "We use four graphs to help people with different backgrounds quickly learn " +
        "the information and performance of clubs." +
        "<h5>Graphs</h5>" +
        "- The <b>sunburst</b> " + "contains the basic information of a club such as " +
        		"the league it belongs to, its logo and its top 3 most expensive players." +
		"</br>- The <b>bar chart</b> " + "allows people to quickly check the Squawka performance score (see below) of clubs in terms of seasons and measures." +
		"</br>- The <b>scatter plot</b> " + "is made for advanced users who want to gain insights into clubs by exploring the relationship between " +
				"different performance measures with regard to managers, league, season, and round reached." +
		"</br>- The <b>box plot</b> " + "helps people to learn the stability of performance of clubs in matches across seasons. " +
				"Furthermore, users may find some weird matches that a team performed much better or worse than usual." +
        "<h5>Performance Measures</h5>" +
        "<b>- UEFA coefficient:</b> " + "Statistics from  <a href='http://www.uefa.com/' target='_blank'>uefa.com</a> used for ranking and seeding teams in club and international competitions,  determined by the results of clubs in the UEFA Champions League and the UEFA Europa League over the previous five seasons."+
        "</br><b>- UEFA coefficient ranking:</b> " + " The ranking of UEFA coefficient among all UEFA member clubs."+
        "</br><b>- Squawka performance score:</b> " +"A score calculated by <a href='http://www.squawka.com/' target='_blank'>squawka.com</a> to evaluate the performance of a team in a single match."+
        "</br><b>- Market value of players:</b> " +"The value of players in the transfer market estimated by <a href='http://www.transfermarkt.co.uk/' target='_blank'>transfermarkt.com</a>."
        ;
//        "<h5>Data Sources</h5>"
//            "<a href='http://www.uefa.com/uefachampionsleague/' target='_blank'><img src='img/uefa_champions_league_logo.svg' height=80></a>" +
//            "<tab0></tab0><a href='http://www.optasports.com/' target='_blank'><img src='img/opta.svg' height=30></a>" +
//            "<tab0></tab0><a href='http://www.squawka.com/home/' target='_blank'><img src='img/squawka.svg' height=30></a>" +
//            "<tab0></tab0><a href='http://www.transfermarkt.com' target='_blank'><img src='img/tm.png' height=90></a>"
    
description['spanish'] = "<h3><img src=\"img\\spanish_laliga.svg\" height =\"80 px\"></br>Primera División (La Liga)</h3>" + "The top Spanish league</br>UEFA Coefficient:&nbsp94.141</br>UEFA Coefficient Ranking:&nbsp1</br>Market Value of All Players:&nbsp£3.06bn</br>Number of Players:&nbsp485</br>Number of Winners:&nbsp16&nbsptimes"
description['german'] = "<h3><img src=\"img\\BundesligaLogo.svg\" height =\"80 px\"></br>Bundesliga </h3>" + "The top German league</br>UEFA Coefficient:&nbsp73.355</br>UEFA Coefficient Ranking:&nbsp2</br>Market Value of All Players:&nbsp£2.16bn</br>Number of Players:&nbsp524</br>Number of Winners:&nbsp7&nbsptimes"
description['england'] = "<h3><img src=\"img\\premier_league_logo.svg\" height =\"80 px\"></br>Premier League</h3>" + "The top English league</br>UEFA Coefficient:&nbsp69.105</br>UEFA Coefficient Ranking:&nbsp3</br>Market Value of All Players:&nbsp£4.18bn</br>Number of Players:&nbsp520</br>Number of Winners:&nbsp12&nbsptimes"
description['italian'] = "<h3><img src=\"img\\SerieALogo.png\" height =\"80 px\"></br>Serie A</h3>" + "The top Italian league</br>UEFA Coefficient:&nbsp66.832</br>UEFA Coefficient Ranking:&nbsp4</br>Market Value of All Players:&nbsp£2.34bn</br>Number of Players:&nbsp558</br>Number of Winners:&nbsp12&nbsptimes"
description['france'] = "<h3><img src=\"img\\Ligue1Logo.png\" height =\"80 px\"></br>Ligue 1</h3>" + "The top French league</br>UEFA Coefficient:&nbsp50.332</br>UEFA Coefficient Ranking:&nbsp5</br>Market Value of All Players:&nbsp£1.34bn</br>Number of Players:&nbsp550</br>Number of Winners:&nbsp1&nbsptimes"
description['portugal'] = "<h3><img src=\"img\\LigaPortugalLogo.png\" height =\"80 px\"></br>Primeira Liga (Liga NOS)</h3>" + "The top Portuguese league</br>UEFA Coefficient:&nbsp46.999</br>UEFA Coefficient Ranking:&nbsp7</br>Market Value of All Players:&nbsp£742.43m</br>Number of Players:&nbsp489</br>Number of Winners:&nbsp4&nbsptimes"
//la liga
description['rma'] = "<h3><img src=\"img\\real_madrid_logo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspReal Madrid</h3>" + "UEFA Coefficient: 153.828,&nbsp;&nbsp;&nbsp;Ranking: 1</br>Winners: 11,&nbsp;&nbsp;&nbsp;Years: 1956,1957,1958,1959,1960,1966,1998,2000,2002,2014,2016</br>Runners-up: 3,&nbsp;&nbsp;&nbsp;Years: 1962,1964,1981</br>Total Market Value of Players: £659.43m  </br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\rma1.png\" alt=\"rma1\" width=\"60px\" heigh=\"60px\"></br>Cristiano Ronaldo</br>Feb 5, 1985 (31)</br>Portugal</br>£93.50m  </td><td><img src=\"img\\TopPlayers\\rma2.png\" alt=\"rma2\" width=\"60px\" heigh=\"60px\"></br>Gareth Bale</br>Jul 16, 1989 (27)</br>Wales</br>£76.50m  </td><td><img src=\"img\\TopPlayers\\rma3.png\" alt=\"rma3\" width=\"60px\" heigh=\"60px\"></br>James Rodríguez</br>Jul 12, 1991 (25)</br>Colombia</br>£59.50m  </td></tr></table>"
description['barca'] = "<h3><img src=\"img\\barcelona_logo.png\" height=\"80 px\" align=\"bottom\">&nbsp&nbspFC Barcelona</h3>" + "UEFA Coefficient: 138.828,&nbsp;&nbsp;&nbsp;Ranking: 3</br>Winners: 5,&nbsp;&nbsp;&nbsp;Years: 1992,2006,2009,2011,2015</br>Runners-up: 3,&nbsp;&nbsp;&nbsp;Years: 1961,1986,1994</br>Total Market Value of Players: £649.83m  </br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\barca1.png\" alt=\"barca1\" width=\"60px\" heigh=\"60px\"></br>Lionel Messi</br>Jun 24, 1987 (29)</br>Argentina/Spain</br>£102.00m  </td><td><img src=\"img\\TopPlayers\\barca2.png\" alt=\"barca2\" width=\"60px\" heigh=\"60px\"></br>Neymar</br>Feb 5, 1992 (24)</br>Brazil</br>£85.00m  </td><td><img src=\"img\\TopPlayers\\barca3.png\" alt=\"barca3\" width=\"60px\" heigh=\"60px\"></br>Luis Suárez</br>Jan 24, 1987 (29)</br>Uruguay</br>£76.50m  </td></tr></table>"
description['atletico'] = "<h3><img src=\"img\\AtleticoLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspAtlético Madrid</h3>" + "UEFA Coefficient: 125.828,&nbsp;&nbsp;&nbsp;Ranking: 4</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 3,&nbsp;&nbsp;&nbsp;Years: 1974,2014,2016</br>Total Market Value of Players: £432.65m  </br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\atletico1.png\" alt=\"atletico1\" width=\"60px\" heigh=\"60px\"></br>Antoine Griezmann</br>Mar 21, 1991 (25)</br>France</br>£68.00m  </td><td><img src=\"img\\TopPlayers\\atletico2.png\" alt=\"atletico2\" width=\"60px\" heigh=\"60px\"></br>Koke</br>Jan 8, 1992 (24)</br>Spain</br>£51.00m  </td><td><img src=\"img\\TopPlayers\\atletico3.png\" alt=\"atletico3\" width=\"60px\" heigh=\"60px\"></br>Diego Godín</br>Feb 16, 1986 (30)</br>Uruguay</br>£34.00m  </td></tr></table>"
description['sevilla'] = "<h3><img src=\"img\\SevillaLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspSevilla </h3>" + "UEFA Coefficient: 102.828,&nbsp;&nbsp;&nbsp;Ranking: 10</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £185.90m  </br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\sevilla1.png\" alt=\"sevilla1\" width=\"60px\" heigh=\"60px\"></br>Steven N'Zonzi</br>Dec 15, 1988 (27)</br>France/Congo DR</br>£17.00m  </td><td><img src=\"img\\TopPlayers\\sevilla2.png\" alt=\"sevilla2\" width=\"60px\" heigh=\"60px\"></br>Vitolo</br>Nov 2, 1989 (27)</br>Spain</br>£15.30m  </td><td><img src=\"img\\TopPlayers\\sevilla3.png\" alt=\"sevilla3\" width=\"60px\" heigh=\"60px\"></br>Franco Vázquez</br>Feb 22, 1989 (27)</br>Argentina/Italy</br>£15.30m  </td></tr></table>"
description['bilbao'] = "<h3><img src=\"img\\BilbaoLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspAthletic Bilbao</h3>" + "UEFA Coefficient: 55.828,&nbsp;&nbsp;&nbsp;Ranking: 28</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £124.19m  </br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\bilbao1.png\" alt=\"bilbao1\" width=\"60px\" heigh=\"60px\"></br>Aymeric Laporte</br>May 27, 1994 (22)</br>Spain/France</br>£21.25m  </td><td><img src=\"img\\TopPlayers\\bilbao2.png\" alt=\"bilbao2\" width=\"60px\" heigh=\"60px\"></br>Iñaki Williams</br>Jun 15, 1994 (22)</br>Spain/Ghana</br>£17.00m  </td><td><img src=\"img\\TopPlayers\\bilbao3.png\" alt=\"bilbao3\" width=\"60px\" heigh=\"60px\"></br>Iker Muniain</br>Dec 19, 1992 (23)</br>Spain</br>£11.90m  </td></tr></table>"
description['sociedad'] = "<h3><img src=\"img\\SociedadLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspReal Sociedad</h3>" + "UEFA Coefficient: 25.328,&nbsp;&nbsp;&nbsp;Ranking: 79</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £95.88m  </br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\sociedad1.png\" alt=\"sociedad1\" width=\"60px\" heigh=\"60px\"></br>Carlos Vela</br>Mar 1, 1989 (27)</br>Spain/Mexico</br>£12.75m  </td><td><img src=\"img\\TopPlayers\\sociedad2.png\" alt=\"sociedad2\" width=\"60px\" heigh=\"60px\"></br>Asier Illarramendi</br>Mar 8, 1990 (26)</br>Spain</br>£12.75m  </td><td><img src=\"img\\TopPlayers\\sociedad3.png\" alt=\"sociedad3\" width=\"60px\" heigh=\"60px\"></br>Iñigo Martínez</br>May 17, 1991 (25)</br>Spain</br>£12.75m  </td></tr></table>"
description['valencia'] = "<h3><img src=\"img\\ValenciaLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspValencia</h3>" + "UEFA Coefficient: 73.828,&nbsp;&nbsp;&nbsp;Ranking: 20</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 2,&nbsp;&nbsp;&nbsp;Years: 2000,2001</br>Total Market Value of Players: £171.53m  </br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\valencia1.png\" alt=\"valencia1\" width=\"60px\" heigh=\"60px\"></br>Eliaquim Mangala</br>Feb 13, 1991 (25)</br>France/Belgium</br>£19.55m  </td><td><img src=\"img\\TopPlayers\\valencia2.png\" alt=\"valencia2\" width=\"60px\" heigh=\"60px\"></br>Ezequiel Garay</br>Oct 10, 1986 (30)</br>Argentina</br>£17.00m  </td><td><img src=\"img\\TopPlayers\\valencia3.png\" alt=\"valencia3\" width=\"60px\" heigh=\"60px\"></br>João Cancelo</br>May 27, 1994 (22)</br>Portugal</br>£17.00m  </td></tr></table>"
description['mancity'] = "<h3><img src=\"img\\ManCityLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspManchester City Football Club</h3>" + "UEFA Coefficient: 90.821,&nbsp;&nbsp;&nbsp;Ranking: 13</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £445.61m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\mancity1.png\" alt=\"mancity1\" width=\"60px\" heigh=\"60px\"></br>Sergio Agüero</br>Jun 2, 1988 (28)</br>Argentina/Spain</br>£51.00m  </td><td><img src=\"img\\TopPlayers\\mancity2.png\" alt=\"mancity2\" width=\"60px\" heigh=\"60px\"></br>Kevin De Bruyne</br>Jun 28, 1991 (25)</br>Belgium</br>£51.00m  </td><td><img src=\"img\\TopPlayers\\mancity3.png\" alt=\"mancity3\" width=\"60px\" heigh=\"60px\"></br>Raheem Sterling</br>Dec 8, 1994 (21)</br>England/Jamaica</br>£38.25m  </td></tr></table>"
description['chelsea'] = "<h3><img src=\"img\\ChelseaLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspChelsea Football Club</h3>" + "UEFA Coefficient: 104.821,&nbsp;&nbsp;&nbsp;Ranking: 8</br>Winners: 1,&nbsp;&nbsp;&nbsp;Years: 2012</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years: 2008</br>Total Market Value of Players: £443.96m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\chelsea1.png\" alt=\"chelsea1\" width=\"60px\" heigh=\"60px\"></br>Eden Hazard</br>Jan 7, 1991 (25)</br>Belgium</br>£55.25m  </td><td><img src=\"img\\TopPlayers\\chelsea2.png\" alt=\"chelsea2\" width=\"60px\" heigh=\"60px\"></br>Diego Costa</br>Oct 7, 1988 (28)</br>Spain/Brazil</br>£38.25m  </td><td><img src=\"img\\TopPlayers\\chelsea3.png\" alt=\"chelsea3\" width=\"60px\" heigh=\"60px\"></br>Cesc Fàbregas</br>May 4, 1987 (29)</br>Spain</br>£38.25m  </td></tr></table>"
description['arsenal'] = "<h3><img src=\"img\\ArsenalLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspArsenal Football Club</h3>" + "UEFA Coefficient: 96.821,&nbsp;&nbsp;&nbsp;Ranking: 11</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years: 2006</br>Total Market Value of Players: £416.93m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\arsenal1.png\" alt=\"arsenal1\" width=\"60px\" heigh=\"60px\"></br>Alexis Sánchez</br>Dec 19, 1988 (27)</br>Chile</br>£46.75m  </td><td><img src=\"img\\TopPlayers\\arsenal2.png\" alt=\"arsenal2\" width=\"60px\" heigh=\"60px\"></br>Mesut Özil</br>Oct 15, 1988 (28)</br>Germany</br>£42.50m  </td><td><img src=\"img\\TopPlayers\\arsenal3.png\" alt=\"arsenal3\" width=\"60px\" heigh=\"60px\"></br>Granit Xhaka</br>Sep 27, 1992 (24)</br>Albania/Switzerland</br>£29.75m  </td></tr></table>"
description['hotspur'] = "<h3><img src=\"img\\HotspurLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspTottenham Hotspur Football Club</h3>" + "UEFA Coefficient: 72.821,&nbsp;&nbsp;&nbsp;Ranking: 22</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £318.75m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\hotspur1.png\" alt=\"hotspur1\" width=\"60px\" heigh=\"60px\"></br>Harry Kane</br>Jul 28, 1993 (23)</br>England</br>£34.00m  </td><td><img src=\"img\\TopPlayers\\hotspur2.png\" alt=\"hotspur2\" width=\"60px\" heigh=\"60px\"></br>Christian Eriksen</br>Feb 14, 1992 (24)</br>Denmark</br>£26.35m  </td><td><img src=\"img\\TopPlayers\\hotspur3.png\" alt=\"hotspur3\" width=\"60px\" heigh=\"60px\"></br>Toby Alderweireld</br>Mar 2, 1989 (27)</br>Belgium</br>£22.95m  </td></tr></table>"
description['liverpool'] = "<h3><img src=\"img\\LiverpoolLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspLiverpool Football Club</h3>" + "UEFA Coefficient: 54.821,&nbsp;&nbsp;&nbsp;Ranking: 30</br>Winners: 5,&nbsp;&nbsp;&nbsp;Years: 1977,1978,1981,1984,2005</br>Runners-up: 2,&nbsp;&nbsp;&nbsp;Years: 1985,2007</br>Total Market Value of Players: £322.75m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\liverpool1.png\" alt=\"liverpool1\" width=\"60px\" heigh=\"60px\"></br>Roberto Firmino</br>Oct 2, 1991 (25)</br>Brazil</br>£29.75m  </td><td><img src=\"img\\TopPlayers\\liverpool2.png\" alt=\"liverpool2\" width=\"60px\" heigh=\"60px\"></br>Philippe Coutinho</br>Jun 12, 1992 (24)</br>Brazil</br>£29.75m  </td><td><img src=\"img\\TopPlayers\\liverpool3.png\" alt=\"liverpool3\" width=\"60px\" heigh=\"60px\"></br>Sadio Mané</br>Apr 10, 1992 (24)</br>Senegal</br>£25.50m  </td></tr></table>"
description['manu'] = "<h3><img src=\"img\\ManULogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspManchester United Football Club</h3>" + "UEFA Coefficient: 73.821,&nbsp;&nbsp;&nbsp;Ranking: 21</br>Winners: 3,&nbsp;&nbsp;&nbsp;Years: 1968,1999,2008</br>Runners-up: 2,&nbsp;&nbsp;&nbsp;Years: 2009,2011</br>Total Market Value of Players: £466.01m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\manu1.png\" alt=\"manu1\" width=\"60px\" heigh=\"60px\"></br>Paul Pogba</br>Mar 15, 1993 (23)</br>France/Guinea</br>£68.00m  </td><td><img src=\"img\\TopPlayers\\manu2.png\" alt=\"manu2\" width=\"60px\" heigh=\"60px\"></br>David de Gea</br>Nov 7, 1990 (26)</br>Spain</br>£34.00m  </td><td><img src=\"img\\TopPlayers\\manu3.png\" alt=\"manu3\" width=\"60px\" heigh=\"60px\"></br>Henrikh Mkhitaryan</br>Jan 21, 1989 (27)</br>Armenia</br>£31.45m  </td></tr></table>"
description['leicester'] = "<h3><img src=\"img\\LeceisterLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspLeicester City Football Club</h3>" + "UEFA Coefficient: 26.821,&nbsp;&nbsp;&nbsp;Ranking: 74</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £183.18m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\leicester1.png\" alt=\"leicester1\" width=\"60px\" heigh=\"60px\"></br>Riyad Mahrez</br>Feb 21, 1991 (25)</br>Algeria/France</br>£25.50m  </td><td><img src=\"img\\TopPlayers\\leicester2.png\" alt=\"leicester2\" width=\"60px\" heigh=\"60px\"></br>Islam Slimani</br>Jun 18, 1988 (28)</br>Algeria</br>£21.25m  </td><td><img src=\"img\\TopPlayers\\leicester3.png\" alt=\"leicester3\" width=\"60px\" heigh=\"60px\"></br>Jamie Vardy</br>Jan 11, 1987 (29)</br>England</br>£17.00m  </td></tr></table>"
description['bayern'] = "<h3><img src=\"img\\BayernMunichLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspFC Bayern München</h3>" + "UEFA Coefficient: 141.671,&nbsp;&nbsp;&nbsp;Ranking: 2</br>Winners: 5,&nbsp;&nbsp;&nbsp;Years: 1974,1975,1976,2001,2013</br>Runners-up: 5,&nbsp;&nbsp;&nbsp;Years: 1982,1987,1999,2010,2012</br>Total Market Value of Players: £494.91m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\bayern1.png\" alt=\"bayern1\" width=\"60px\" heigh=\"60px\"></br>Thomas Müller</br>Sep 13, 1989 (27)</br>Germany</br>£63.75m  </td><td><img src=\"img\\TopPlayers\\bayern2.png\" alt=\"bayern2\" width=\"60px\" heigh=\"60px\"></br>Robert Lewandowski</br>Aug 21, 1988 (28)</br>Poland</br>£63.75m  </td><td><img src=\"img\\TopPlayers\\bayern3.png\" alt=\"bayern3\" width=\"60px\" heigh=\"60px\"></br>Jérôme Boateng</br>Sep 3, 1988 (28)</br>Germany</br>£38.25m  </td></tr></table>"
description['bvb'] = "<h3><img src=\"img\\BVBLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspBorussia Dortmund</h3>" + "UEFA Coefficient: 114.671,&nbsp;&nbsp;&nbsp;Ranking: 7</br>Winners: 1,&nbsp;&nbsp;&nbsp;Years: 1997</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years: 2013</br>Total Market Value of Players: £298.78m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\bvb1.png\" alt=\"bvb1\" width=\"60px\" heigh=\"60px\"></br>Pierre-Emerick Aubameyang</br>Jun 18, 1989 (27)</br>Gabon/France</br>£38.25m  </td><td><img src=\"img\\TopPlayers\\bvb2.png\" alt=\"bvb2\" width=\"60px\" heigh=\"60px\"></br>Marco Reus</br>May 31, 1989 (27)</br>Germany</br>£34.00m  </td><td><img src=\"img\\TopPlayers\\bvb3.png\" alt=\"bvb3\" width=\"60px\" heigh=\"60px\"></br>Mario Götze</br>Jun 3, 1992 (24)</br>Germany</br>£23.80m  </td></tr></table>"
description['leverkusen'] = "<h3><img src=\"img\\LeverkusenLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspBayer 04 Leverkusen</h3>" + "UEFA Coefficient: 81.671,&nbsp;&nbsp;&nbsp;Ranking: 17</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years: 2002</br>Total Market Value of Players: £223.08m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\leverkusen1.png\" alt=\"leverkusen1\" width=\"60px\" heigh=\"60px\"></br>Chicharito</br>Jun 1, 1988 (28)</br>Mexico</br>£21.25m  </td><td><img src=\"img\\TopPlayers\\leverkusen2.png\" alt=\"leverkusen2\" width=\"60px\" heigh=\"60px\"></br>Karim Bellarabi</br>Apr 8, 1990 (26)</br>Germany/Morocco</br>£18.70m  </td><td><img src=\"img\\TopPlayers\\leverkusen3.png\" alt=\"leverkusen3\" width=\"60px\" heigh=\"60px\"></br>Ömer Toprak</br>Jul 21, 1989 (27)</br>Turkey/Germany</br>£17.00m  </td></tr></table>"
description['wolfsburg'] = "<h3><img src=\"img\\WolfsburgLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspWolfsburg</h3>" + "UEFA Coefficient: 54.671,&nbsp;&nbsp;&nbsp;Ranking: 31</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £159.29m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\wolfsburg1.png\" alt=\"wolfsburg1\" width=\"60px\" heigh=\"60px\"></br>Julian Draxler</br>Sep 20, 1993 (23)</br>Germany</br>£23.80m  </td><td><img src=\"img\\TopPlayers\\wolfsburg2.png\" alt=\"wolfsburg2\" width=\"60px\" heigh=\"60px\"></br>Ricardo Rodríguez</br>Aug 25, 1992 (24)</br>Switzerland/Chile</br>£21.25m  </td><td><img src=\"img\\TopPlayers\\wolfsburg3.png\" alt=\"wolfsburg3\" width=\"60px\" heigh=\"60px\"></br>Luiz Gustavo</br>Jul 23, 1987 (29)</br>Brazil/Germany</br>£14.45m  </td></tr></table>"
description['schalke'] = "<h3><img src=\"img\\SchalkeLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspFC Schalke 04</h3>" + "UEFA Coefficient: 87.671,&nbsp;&nbsp;&nbsp;Ranking: 14</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £171.85m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\schalke1.png\" alt=\"schalke1\" width=\"60px\" heigh=\"60px\"></br>Breel Embolo</br>Feb 14, 1997 (19)</br>Switzerland/Cameroon</br>£18.70m  </td><td><img src=\"img\\TopPlayers\\schalke2.png\" alt=\"schalke2\" width=\"60px\" heigh=\"60px\"></br>Yevhen Konoplyanka</br>Sep 29, 1989 (27)</br>Ukraine</br>£15.30m  </td><td><img src=\"img\\TopPlayers\\schalke3.png\" alt=\"schalke3\" width=\"60px\" heigh=\"60px\"></br>Max Meyer</br>Sep 18, 1995 (21)</br>Germany</br>£13.60m  </td></tr></table>"
description['monchen'] = "<h3><img src=\"img\\MonchenLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspMönchengladbach </h3>" + "UEFA Coefficient: 48.671,&nbsp;&nbsp;&nbsp;Ranking: 36</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years:1977</br>Total Market Value of Players: £142.04m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\monchen1.png\" alt=\"monchen1\" width=\"60px\" heigh=\"60px\"></br>Mahmoud Dahoud</br>Jan 1, 1996 (20)</br>Germany</br>£12.75m  </td><td><img src=\"img\\TopPlayers\\monchen2.png\" alt=\"monchen2\" width=\"60px\" heigh=\"60px\"></br>Andreas Christensen</br>Apr 10, 1996 (20)</br>Denmark</br>£11.90m  </td><td><img src=\"img\\TopPlayers\\monchen3.png\" alt=\"monchen3\" width=\"60px\" heigh=\"60px\"></br>Thorgan Hazard</br>Mar 29, 1993 (23)</br>Belgium</br>£10.20m  </td></tr></table>"
description['juventus'] = "<h3><img src=\"img\\JuventusLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspJuventus</h3>" + "UEFA Coefficient: 118.366,&nbsp;&nbsp;&nbsp;Ranking: 5</br>Winners: 2,&nbsp;&nbsp;&nbsp;Years: 1985,1996</br>Runners-up: 6,&nbsp;&nbsp;&nbsp;Years: 1973,1983,1997,1998,2003,2015</br>Total Market Value of Players: £377.40m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\juventus1.png\" alt=\"juventus1\" width=\"60px\" heigh=\"60px\"></br>Gonzalo Higuaín</br>Dec 10, 1987 (28)</br>Argentina/France</br>£63.75m  </td><td><img src=\"img\\TopPlayers\\juventus2.png\" alt=\"juventus2\" width=\"60px\" heigh=\"60px\"></br>Paulo Dybala</br>Nov 15, 1993 (23)</br>Argentina/Italy</br>£38.25m  </td><td><img src=\"img\\TopPlayers\\juventus3.png\" alt=\"juventus3\" width=\"60px\" heigh=\"60px\"></br>Leonardo Bonucci</br>May 1, 1987 (29)</br>Italy</br>£34.00m  </td></tr></table>"
description['roma'] = "<h3><img src=\"img\\RomaLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspRoma</h3>" + "UEFA Coefficient: 47.366,&nbsp;&nbsp;&nbsp;Ranking: 39</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years: 1984</br>Total Market Value of Players: £234.01m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\roma1.png\" alt=\"roma1\" width=\"60px\" heigh=\"60px\"></br>Radja Nainggolan</br>May 4, 1988 (28)</br>Belgium</br>£28.05m  </td><td><img src=\"img\\TopPlayers\\roma2.png\" alt=\"roma2\" width=\"60px\" heigh=\"60px\"></br>Mohamed Salah</br>Jun 15, 1992 (24)</br>Egypt</br>£22.95m  </td><td><img src=\"img\\TopPlayers\\roma3.png\" alt=\"roma3\" width=\"60px\" heigh=\"60px\"></br>Konstantinos Manolas</br>Jun 14, 1991 (25)</br>Greece</br>£21.25m  </td></tr></table>"
description['napoli'] = "<h3><img src=\"img\\NanopliLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspNapoli </h3>" + "UEFA Coefficient: 80.366,&nbsp;&nbsp;&nbsp;Ranking: 18</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £271.47m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\napoli1.png\" alt=\"napoli1\" width=\"60px\" heigh=\"60px\"></br>Marek Hamsik</br>Jul 27, 1987 (29)</br>Slovakia</br>£32.30m  </td><td><img src=\"img\\TopPlayers\\napoli2.png\" alt=\"napoli2\" width=\"60px\" heigh=\"60px\"></br>Kalidou Koulibaly</br>Jun 20, 1991 (25)</br>Senegal/France</br>£23.80m  </td><td><img src=\"img\\TopPlayers\\napoli3.png\" alt=\"napoli3\" width=\"60px\" heigh=\"60px\"></br>Lorenzo Insigne</br>Jun 4, 1991 (25)</br>Italy</br>£21.25m  </td></tr></table>"
description['milan'] = "<h3><img src=\"img\\MilanLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspA.C. Milan</h3>" + "UEFA Coefficient: 46.366,&nbsp;&nbsp;&nbsp;Ranking: 41</br>Winners: 7,&nbsp;&nbsp;&nbsp;Years: 1963,1969,1989,1990,1994,2003,2007</br>Runners-up: 4,&nbsp;&nbsp;&nbsp;Years: 1958,1993,1995,2005</br>Total Market Value of Players: £184.79m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\milan1.png\" alt=\"milan1\" width=\"60px\" heigh=\"60px\"></br>Carlos Bacca</br>Sep 8, 1986 (30)</br>Colombia</br>£21.25m  </td><td><img src=\"img\\TopPlayers\\milan2.png\" alt=\"milan2\" width=\"60px\" heigh=\"60px\"></br>Giacomo Bonaventura</br>Aug 22, 1989 (27)</br>Italy</br>£17.85m  </td><td><img src=\"img\\TopPlayers\\milan3.png\" alt=\"milan3\" width=\"60px\" heigh=\"60px\"></br>Alessio Romagnoli</br>Jan 12, 1995 (21)</br>Italy</br>£17.00m  </td></tr></table>"
description['psg'] = "<h3><img src=\"img\\PSGLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspParis Saint-Germain (PSG)</h3>" + "UEFA Coefficient: 117.066,&nbsp;&nbsp;&nbsp;Ranking: 6</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £357.55m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\psg1.png\" alt=\"psg1\" width=\"60px\" heigh=\"60px\"></br>Ángel Di María</br>Feb 14, 1988 (28)</br>Argentina/Italy</br>£46.75m  </td><td><img src=\"img\\TopPlayers\\psg2.png\" alt=\"psg2\" width=\"60px\" heigh=\"60px\"></br>Edinson Cavani</br>Feb 14, 1987 (29)</br>Uruguay/Italy</br>£34.00m  </td><td><img src=\"img\\TopPlayers\\psg3.png\" alt=\"psg3\" width=\"60px\" heigh=\"60px\"></br>Marco Verratti</br>Nov 5, 1992 (24)</br>Italy</br>£34.00m  </td></tr></table>"
description['monaco'] = "<h3><img src=\"img\\MonacoLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspAS Monaco</h3>" + "UEFA Coefficient: 48.066,&nbsp;&nbsp;&nbsp;Ranking: 38</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years: 2004</br>Total Market Value of Players: £150.66m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\monaco1.png\" alt=\"monaco1\" width=\"60px\" heigh=\"60px\"></br>Fabinho</br>Oct 23, 1993 (23)</br>Brazil</br>£17.00m  </td><td><img src=\"img\\TopPlayers\\monaco2.png\" alt=\"monaco2\" width=\"60px\" heigh=\"60px\"></br>Bernardo Silva</br>Aug 10, 1994 (22)</br>Portugal</br>£17.00m  </td><td><img src=\"img\\TopPlayers\\monaco3.png\" alt=\"monaco3\" width=\"60px\" heigh=\"60px\"></br>João Moutinho</br>Sep 8, 1986 (30)</br>Portugal</br>£12.75m  </td></tr></table>"
description['lyon'] = "<h3><img src=\"img\\LyonnaisLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspLyon</h3>" + "UEFA Coefficient: 54.566,&nbsp;&nbsp;&nbsp;Ranking: 32</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £155.34m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\lyon1.png\" alt=\"lyon1\" width=\"60px\" heigh=\"60px\"></br>Alexandre Lacazette</br>May 28, 1991 (25)</br>France/Guadeloupe</br>£34.00m  </td><td><img src=\"img\\TopPlayers\\lyon2.png\" alt=\"lyon2\" width=\"60px\" heigh=\"60px\"></br>Corentin Tolisso</br>Aug 3, 1994 (22)</br>France/Togo</br>£14.45m  </td><td><img src=\"img\\TopPlayers\\lyon3.png\" alt=\"lyon3\" width=\"60px\" heigh=\"60px\"></br>Maxime Gonalons</br>Mar 10, 1989 (27)</br>France</br>£12.75m  </td></tr></table>"
description['marseille'] = "<h3><img src=\"img\\MarseilleLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspMarseille</h3>" + "UEFA Coefficient: 27.066,&nbsp;&nbsp;&nbsp;Ranking: 72</br>Winners: 1,&nbsp;&nbsp;&nbsp;Years: 1993</br>Runners-up: 1,&nbsp;&nbsp;&nbsp;Years: 1990</br>Total Market Value of Players: £59.54m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\marseille1.png\" alt=\"marseille1\" width=\"60px\" heigh=\"60px\"></br>Florian Thauvin</br>Jan 26, 1993 (23)</br>France</br>£9.35m  </td><td><img src=\"img\\TopPlayers\\marseille2.png\" alt=\"marseille2\" width=\"60px\" heigh=\"60px\"></br>Rémy Cabella</br>Mar 8, 1990 (26)</br>France</br>£6.80m  </td><td><img src=\"img\\TopPlayers\\marseille3.png\" alt=\"marseille3\" width=\"60px\" heigh=\"60px\"></br>Bafetimbi Gomis</br>Aug 6, 1985 (31)</br>France/Senegal</br>£5.95m  </td></tr></table>"
description['benfica'] = "<h3><img src=\"img\\BenficaLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspMarseille</h3>" + "UEFA Coefficient: 104.399,&nbsp;&nbsp;&nbsp;Ranking: 9</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 5,&nbsp;&nbsp;&nbsp;Years: 1963,1965,1968,1988,1990</br>Total Market Value of Players: £171.57m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\benfica1.png\" alt=\"benfica1\" width=\"60px\" heigh=\"60px\"></br>Toto Salvio</br>Jul 13, 1990 (26)</br>Argentina</br>£12.75m  </td><td><img src=\"img\\TopPlayers\\benfica2.png\" alt=\"benfica2\" width=\"60px\" heigh=\"60px\"></br>Rafa Silva</br>May 17, 1993 (23)</br>Portugal</br>£12.75m  </td><td><img src=\"img\\TopPlayers\\benfica3.png\" alt=\"benfica3\" width=\"60px\" heigh=\"60px\"></br>Pizzi</br>Oct 6, 1989 (27)</br>Portugal</br>£11.05m  </td></tr></table>"
description['sporting'] = "<h3><img src=\"img\\SportingLogo.png\" height=\"80 px\" align=\"bottom\">&nbsp&nbspSporting CP</h3>" + "UEFA Coefficient: 36.399,&nbsp;&nbsp;&nbsp;Ranking: 52</br>Winners: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £162.35m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\sporting1.png\" alt=\"sporting1\" width=\"60px\" heigh=\"60px\"></br>William Carvalho</br>Apr 7, 1992 (24)</br>Portugal/Angola</br>£25.50m  </td><td><img src=\"img\\TopPlayers\\sporting2.png\" alt=\"sporting2\" width=\"60px\" heigh=\"60px\"></br>Adrien Silva</br>Mar 15, 1989 (27)</br>Portugal/France</br>£21.25m  </td><td><img src=\"img\\TopPlayers\\sporting3.png\" alt=\"sporting3\" width=\"60px\" heigh=\"60px\"></br>Rui Patrício</br>Feb 15, 1988 (28)</br>Portugal</br>£13.60m  </td></tr></table>"
description['porto'] = "<h3><img src=\"img\\PortoLogo.svg\" height=\"80 px\" align=\"bottom\">&nbsp&nbspPorto</h3>" + "UEFA Coefficient: 91.399,&nbsp;&nbsp;&nbsp;Ranking: 12</br>Winners: 2,&nbsp;&nbsp;&nbsp;Years: 1987,2004</br>Runners-up: 0,&nbsp;&nbsp;&nbsp;Years: N/A</br>Total Market Value of Players: £156.10m</br>Most Expensive Players:</br><table   style=\"border-collapse: separate; border-spacing: 20px; \" ><tr><td><img src=\"img\\TopPlayers\\porto1.png\" alt=\"porto1\" width=\"60px\" heigh=\"60px\"></br>Yacine Brahimi</br>Feb 8, 1990 (26)</br>Algeria/France</br>£17.00m  </td><td><img src=\"img\\TopPlayers\\porto2.png\" alt=\"porto2\" width=\"60px\" heigh=\"60px\"></br>Héctor Herrera</br>Apr 19, 1990 (26)</br>Mexico</br>£13.60m  </td><td><img src=\"img\\TopPlayers\\porto3.png\" alt=\"porto3\" width=\"60px\" heigh=\"60px\"></br>Danilo Pereira</br>Sep 9, 1991 (25)</br>Portugal/Guinea-Bissau</br>£11.90m  </td></tr></table>"




		
		
    // render
    document.getElementById('intro').innerHTML = description[name];
}