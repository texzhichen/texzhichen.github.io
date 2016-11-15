function writeIntro(name) {
    var description = {}

    description['uefa'] = "<h3>Introduction</h3>" +
        "The UEFA Champions League is an annual continental club football competition " +
        "organised by the Union of European Football Associations (UEFA) and contested " +
        "by top-division European clubs. It is one of the most prestigious tournaments " +
        "in the world and the most prestigious club competition in European football, " +
        "played by the national league champion (and, for some nations, one or more runners-up) " +
        "of each UEFA national association.";

    description['spanish'] = "<h3>La Liga</h3>" +
        "La Liga is the top professional association football " +
        "division of the Spanish football league system."

    description['england'] = "<h3>Premier League</h3>" +
        "The Premier League is an English professional league for men's association football clubs. At the top of the English football league system, it is the country's primary football competition."

    description['real_madrid'] = "<h3>Real Madrid Club de Fútbol</h3>" +
        "Founded in 1902 as Madrid Football Club, the team has traditionally worn a white home kit since inception. The word Real is Spanish for Royal and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 85,454-capacity Santiago Bernabéu Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrid's members (socios) have owned and operated the club throughout its history."

    description['barcelona'] = "<h3>Futbol Club Barcelona</h3>" +
        "Founded in 1899 by a group of Swiss, English and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto \"Més que un club\" (More than a club). Unlike many other football clubs, the supporters own and operate Barcelona. It is the second most valuable sports team in the world, worth $3.56 billion, and the world's second richest football club in terms of revenue, with an annual turnover of €560.8 million."

    
    // render
    document.getElementById('intro').innerHTML = description[name];
}