let cv = [
    [
        'Mattia e Giacomo Vitelli',
        'Maestri Giacomo e Mattia Vitelli ballerini professionisti del Teatro alla Scala di Milano diplomati al Royal Ballet School di Londra.Iniziano a ballare all’età di 10 anni e da subito entrano nella scuola dell’opera di Roma per poi entrare dopo un anno Alla Scala di Milano. Dopo numerosi Stage alla ROyal Ballet ricevono una borsa di studio per il Diploma nel 2009.Insegnanti di danza classica già da cinque anni seguono il metodo Vaganova e il metodo Inglese!'
    ],
    [
        'Maria Sole Ferrari',
        'Qualifica nazionale di Maestra Giocodanza, tesserata Csen – Imparare Giocando -  metodo Marinella Santini. Insegnante propedeutica alla danza, metodo “Musica Canto Movimento” di Laura Olga Fanetti. Insegnante danze popolari, corso rivolto ai bambini dai 4 ai 12 anni. '
    ],
    [
        'Manuela Desideri',
        'Ballerina, Coreografa e Maestra di danze orientali diplomata FIDS, tecnico federale e giudice di gara. Appassionata di Analisi Bioenergetica, riporta nelle sue lezioni gli elementi della stessa con particolare attenzione al corpo, al grounding e al fluire libero delle emozioni.'
    ],
    [
        'Agata Scopelliti',
        'nata e cresciuta a Cataforìo (RC) insegna danza tradizionale e promuove seminari e incontri sulla cultura musicale della valle del Sant’Agata. Collabora con l’Ass. Cult. Conservatorio Grecanico fin dalle sue origini. Insegnante di U Stegg, negli anni ha partecipato a festival di musica e danza popolare sia in Italia che all’estero. Nel 2005 supporta e contribuisce alla nascita di Radici del Suono, rassegna e laboratori di musica e danze tradizionali del centro-sud Italia che darà i natali nel 2007 a Vacanze Romane Festival di Musica Popolare. Insegnante di Sud in Ballo presso la Scuola Popolare delle Arti del CIP Alessandrino di Roma, associazione con la quale ha dato vita nel 2014 al Meeting delle danze Popolari. DanzaMovimentoTerapeuta Espressivo-Relazionale in formazione presso la Scuola di Arte Terapia diretta dal Dott. Vincenzo Bellia'
    ],
    [
        'Tiziana Tulli',
        'Tiziana Tulli, musicologa e musicoterapeuta, dopo una lunga attività come corista presso l’Accademia di Canto Corale Costanzo Porta di Cremona, tiene corsi di canto individuale, canto corale e pianoforte. La didattica musicale è supportata da alcuni tra i principali e aggiornati metodi musicali, tra cui quello di E. Gordon e il metodo Willems, che mirano all’affinamento dell’orecchio e allo sviluppo del senso musicale a partire dalle naturali attitudini e possibilità dell’allievo.'
    ],
    [
        'Riccardo Galli',
        "Galli Riccardo, nato a Colleferro il 19/12/1980. Laureato in scienze motorie all' università degli studi di Cassino nel 2009; dal 2001 inizia lo studio per la pratica e, più avanti, per l'insegnamento delle discipline marziali cinesi con il Qi qong, il kung fu shaolin e il taiji quan (stile chen). Dal 2007 prende i titoli come insegnante di tali discipline sia per bambini che pet adulti; nel 2010 diventa istruttore nazionale di difesa personale; nel 2014 si diploma alla scuola di MTC ( medicina tradizionale cinese) come terapista Tuina e tecniche integrate. Attualmente insegna il Taiji quan e il kung-fu a Zagarolo, presso la scuola DAD."
    ]
    
];
const lightBox = document.querySelector('.light-box');
const cvTitle = document.querySelector('.cv-title');
const cvContent = document.querySelector('.cv-content');
const esc = document.querySelector('.esc');

function addCv (title, content){
    $(lightBox).fadeIn();
    lightBox.style.display = 'flex';
    cvTitle.innerHTML = title;
    cvContent.innerHTML = content;
}

esc.onclick = ()=>{
    $(lightBox).fadeOut();
}

//comments carousel

let comments = [
    [],
    [
        "<p>Insegnanti incredibilmente professionali ed empatici, capaci di trasmettere ai ragazzi amore e passione per l'arte in ogni sua accezione. Un' autentica fucina di idee e di cultura, il luogo ideale in cui fare esperienza della bellezza di discipline che fanno bene al corpo ed arricchiscono l'anima.<br><br>-Maria Antonietta</p>",
        "<p>Professionalità, serietà, disciplina unite alla passione per questa splendida arte hanno dato vita a qualcosa di strabiliante. Emozioni forti, avvolgenti, penetranti... questo è quello che viene percepito da chi assiste agli spettacoli, perché è quello che trasmettono gli insegnanti agli allievi. Bellissima esperienza a 360 gradi. Come direbbero i giovani di oggi, vi lovvo!<br><br>-Romina</p>",
        "<p>Ho scelto il DAD per la vicinanza da casa e perchè conoscevo di fama Igor. La cosa che mi ha più colpito è che già appena entri si respira aria di arte, di cultura, di passione e serietà. Tra le possibilità che avevo di seguire la mia insegnante di danza, il DAD si è rivelato la scelta più giusta perchè non ho trovato solo una 'palestra', ma un luogo di confronto, una fucina di idee e tante proposte interessanti.<br><br>-Gioia</p>",
        "<p>Quando entrai per la prima volta al  D.A.D mi sembrò di tornare a casa. Dopo un primo periodo della mia vita come conservatorista, cantante Lirica solista e interprete d’opera la mia strada aveva preso un corso diametralmente opposto all’arte…finchè decisi in cuor mio che non potevo continuare a rimanere distante dall’espressione più profonda di me stessa che era quella del fuoco sacro…il D.A.D fu la prima tappa della mia rinascita…tornai sul palco iniziando dalla danza orientale seguita dall’ottima insegnante Manuela Desideri che milita in questa meravigliosa scuola di danza e arti dello spettacolo…poi il resto arrivò da se… Senza aver compiuto il primo passo nel varcare la soglia del D.A.D. tutto il resto non sarebbe stato possibile. Grazie al meraviglioso staff…grazie ad Igor…grazie a Manuela. Non vedo l’ora di potermi risentire di nuovo a casa insieme a tutti voi.<br><br>-Monica </p>"
    ]
];
let b = 1;

for(i = 0; i <= 3; i+=1){
    comments[0].push("img/recensione_" + i +".jpg");
}

$('.comment-img').attr('src', comments[0][0]);
$('.recensione').html(comments[1][0]);

setInterval(()=>{
    $('.comment-img').attr('src', comments[0][b]);
    $('.recensione').html(comments[1][b]);
    b += 1;
    if(b > 3){
        b = 0;
    }
}, 4000) 



