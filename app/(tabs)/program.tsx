import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Program() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Programma Completo</Text>
          <Text style={styles.headerSubtitle}>Attraverso il Ciclone</Text>
        </View>

        {/* Parte I */}
        <View style={styles.partContainer}>
        <Image
            source={require('../../assets/images/mastichini.jpeg')}
            style={styles.partImage}
          />
          <View style={styles.partHeader}>
            <Text style={styles.partNumber}>I Parte</Text>
            <Text style={styles.partTitle}>La Fattoria, il Ciclone e il Paese dei Mastichini</Text>
          </View>
          
          <Text style={styles.partDescription}>
          Tutto ha inizio in una tranquilla fattoria, dove la vita scorre serena tra giochi, risate, e il vivace trotto degli animali. Dorothy, una bambina sensibile e affettuosa, vive lì insieme al suo inseparabile cagnolino. Ma qualcosa, all’orizzonte, improvvisamente cambia: soffia un vento forte, la polvere invade ogni cosa, e, in men che non si dica, un ciclone travolge ogni cosa!
Nel disperato tentativo di salvare il suo amato amico a quattro zampe, Dorothy viene risucchiata dal vortice e trasportata lontano, frastornata. Quando riapre gli occhi, si trova in un luogo incantato: tutto è fatto di zucchero, dolci, e caramelle, tra colori e buffi abitanti: è il Paese dei Mastichini!
Ma qualcosa è appena accaduto: nella caduta, Dorothy ha involontariamente ucciso la Strega Cattiva dell’Est. Dal cielo, allora, scende una luce bianca: è la Strega Buona del Nord, che premia il coraggio della bambina dandole in dono le scarpette magiche della maga sconfitta e promettendole protezione lungo il suo cammino.
Per tornare a casa, infatti, Dorothy comprende di dover intraprendere un lungo viaggio verso la leggendaria Città di Smeraldo, seguendo un sentiero dorato. Ma non sarà sola: ad ogni passo stingerà nuove amicizie, dovrà affrontare nuove sfide e farà incredibili scoperte.
          </Text>

          <View style={styles.choreographersContainer}>
            <Text style={styles.choreographersTitle}>Coreografie:</Text>
            <Text style={styles.choreographersText}>Classico: Monica Castronuovo</Text>
            <Text style={styles.choreographersText}>Hip Hop: Cristiana Greco</Text>  
            <Text style={styles.choreographersText}>Moderno: Erika Pentima</Text>
          </View>

          <View style={styles.quadriContainer}>
            
            {[
              'Coniglietti – Predanza 3/4 anni',
              'Contadine e Cowgirls – Classico Medio Avanzato e Propedeutico 2',
              'Contadinelle – Propedeutico 1',
              'Pulcini – Predanza 4/5 anni',
              'Cowgirls – Moderno Propedeutico 2',
              'Ciclone – Moderno Medio Avanzato',
              'Mastichini – Hip Hop Propedeutico 2',
              'Fata Buona',
              'Zuccherini – Propedeutico 1 bis',
              'Fata e Ghiottoni – Classico Medio',
              'Lecca Lecca – Classico Avanzato',
              'Mastichini – Classico Propedeutico 2',
              'Mastichini – Hip Hop Medio Avanzato'
            ].map((item, index) => (
              <View key={index} style={styles.quadroItem}>
                <View style={styles.quadroBullet} />
                <Text style={styles.quadroText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Parte II */}
        <View style={styles.partContainer}>
          <Image
            source={require('../../assets/images/sentiero.jpeg')}
            style={styles.partImage}
          />
          
          <View style={styles.partHeader}>
            <Text style={styles.partNumber}>II Parte</Text>
            <Text style={styles.partTitle}>Il Sentiero Dorato e i Nuovi Compagni di Viaggio</Text>
          </View>

          <Text style={styles.partDescription}>
          Dorothy inizia il suo cammino lungo il Sentiero Dorato, con la forza della speranza e il desiderio di tornare a casa. Ben presto incontra un personaggio curioso: uno Spaventapasseri impacciato e gentile, ma circondato da corvi scuri e minacciosi. Senza alcuna esitazione, Dorothy li scaccia via con coraggio, liberando lo Spaventapasseri, che le confessa il suo grande sogno di avere un cervello. Quell’essere strano e sognatore decide di unirsi a Dorothy nel viaggio verso la Città di Smeraldo, nell’augurio che il grande Oz possa aiutarlo a realizzare la sua aspirazione. 
Ormai affamati, si ritrovano in un frutteto rigoglioso, ma quando tentano di cogliere un frutto, gli alberi prendono vita e li minacciano brutalmente! Così, utilizzando astuzia e un pizzico di ironia, Dorothy e lo Spaventapasseri li fanno infuriare e gli alberi, credendo di far loro dispetto, lanciano loro i frutti. I due viandanti possono così sfamarsi e ripartire. 
Proseguendo lungo il percorso, incontrano degli strani esseri: hanno ingranaggi e compiono movimenti precisi, quasi “meccanici”. Sembrano automi, ma una di loro parla con il cuore: anzi, desidera un cuore. È la Donna di Latta, che si unisce al cammino, sperando che Oz possa donargli la capacità di sentire.
Il viaggio continua, e i tre arrivano ai confini di un bosco incantato, nel quale farfalle leggere danzano nell’aria e un arcobaleno brilla all’orizzonte. Una volta addentrati nel sottobosco, però, l’atmosfera cambia: l’aria si fa cupa e inquietante, mentre animali minacciosi li osservano passare; da un branco di leonesse, emerge un Leone ruggente…o almeno, così sembra. In realtà, il Leone si scopre essere spaventato quanto loro. Dorothy, con dolcezza, riesce a tranquillizzarlo, e lui le rivela il suo desiderio: trovare il coraggio di affrontare le sue paure e la sua insicurezza.
Ed è così che, insieme, i quattro speranzosi personaggi riprendono il loro cammino. Quattro cuori diversi con quattro diversi sogni, ma con un’unica strada da percorrere: quella che conduce oltre l’arcobaleno e verso la Città di Smeraldo.

          </Text>

          <View style={styles.characterImagesContainer}>
            <Image
              source={require('../../assets/images/spaventapasseri.jpeg')}
              style={styles.characterImage}
            />
            <Image
              source={require('../../assets/images/latta.jpeg')}
              style={styles.characterImage}
            />
          </View>

          <View style={styles.choreographersContainer}>
            <Text style={styles.choreographersTitle}>Coreografie:</Text>
            <Text style={styles.choreographersText}>Classico: Monica Castronuovo</Text>
            <Text style={styles.choreographersText}>Hip Hop: Cristiana Greco</Text>  
            <Text style={styles.choreographersText}>Moderno: Monica Castronuovo, Sabrina Di Lello, Francesca D'Onofrio, Vittoria Pierfelice</Text>
          </View>

          <View style={styles.quadriContainer}>
            
            {[
              'Sentiero Dorato – Predanza 4/5 anni',
              'Corvi e Spaventapasseri – Moderno Medio e Avanzato',
              'Alberi Parlanti – Moderno Propedeutico 2',
              'Robot di Latta – Moderno Medio e Avanzato',
              'Farfalle – Predanza 4/5 anni',
              'Arcobaleno – Propedeutico 1 e 1 bis Moderno',
              'Branco di Animali e Leone – Hip Hop Medio e Avanzato'
            ].map((item, index) => (
              <View key={index} style={styles.quadroItem}>
                <View style={styles.quadroBullet} />
                <Text style={styles.quadroText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Parte III */}
        <View style={styles.partContainer}>
          <Image
            source={require('../../assets/images/smeraldo.jpeg')}
            style={styles.partImage}
          />
          
          <View style={styles.partHeader}>
            <Text style={styles.partNumber}>III Parte</Text>
            <Text style={styles.partTitle}>Il Campo dei Papaveri, la Verità di Oz e la Libertà del Cuore</Text>
          </View>
          
          <Text style={styles.partDescription}>
          Il tragitto dei viaggiatori continua, per condurli in un luogo silenzioso e affascinante: un immenso campo di papaveri rossi. Ma quei fiori, nonostante appaiano belli e innocenti, nascondono un potere insidioso: il loro profumo è ipnotico, e presto i quattro amici cadono in un sonno profondo.
Nel torpore misterioso dell’inconscio, ognuno di loro si trova davanti a sé stesso, di fronte a tutte le paure, i limiti e le insicurezze da superare. In questo confronto viene trascinata anche la Strega Malvagia, sorella della Strega Cattiva, in un duello speculare in cui ciascuno incontra il proprio doppio riflesso.
Questo momento porta i personaggi a crescere e a superarsi. Piano piano si risvegliano, trovandosi di fronte i maestosi portali della Città di Smeraldo. Accolti con gioia e festa, i quattro, ormai amici, vengono condotti al cospetto di Oz. Con loro grande sorpresa, il mago rileva loro una semplice verità: ciò che cercavano era già dentro di loro, ma serviva questo viaggio per imparare a guardarsi dentro davvero.
Purtroppo, però, il cammino non è ancora finito. La Strega Malvagia non si è arresa, e cerca la propria vendetta mandando il suo oscuro esercito di Scimmie Alate a rapire il cagnolino di Dorothy. Guidati dall’unione solidale costruita nel viaggio, i protagonisti combattono in uno scontro finale. Dorothy riabbraccia il suo amico a quattro zampe, e con lui e i suoi compagni festeggia nella Città di Smeraldo.
Perché la magia più grande non era nella profezia di un mago, né in un incantesimo…ma nella scoperta di sé.

          </Text>

          <View style={styles.choreographersContainer}>
            <Text style={styles.choreographersTitle}>Coreografie:</Text>
            <Text style={styles.choreographersText}>Classico: Monica Castronuovo</Text>
            <Text style={styles.choreographersText}>Contemporaneo: Ramona Marinelli</Text> 
            <Text style={styles.choreographersText}>Moderno: Erika Pentima</Text>
            <Text style={styles.choreographersText}>Hip Hop: Cristiana Greco</Text>  
            <Text style={styles.choreographersText}>Moderno: Roberta Baldonero</Text>  
            <Text style={styles.choreographersText}>Heels: Sabrina Di Lello</Text>
          </View>

          <View style={styles.quadriContainer}>
            
            {[
              'Papaveri e Sogno – Contemporaneo Propedeutico 2 e Avanzato',
              'Smeraldi – Hip Hop Propedeutico 2',
              'Smeraldini – Propedeutico 1',
              'Corte di Oz – Moderno Medio Avanzato',
              'Scimmie Alate – Contemporaneo Propedeutico 2',
              'Battaglia contro le Streghe – Moderno Avanzato',
              'Zuccherini',
              'Corte di Oz – Heels Medio Avanzato',
              'Finale'
            ].map((item, index) => (
              <View key={index} style={styles.quadroItem}>
                <View style={styles.quadroBullet} />
                <Text style={styles.quadroText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// STYLESHEET CORRETTO E PULITO
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#D1D5DB',
    textAlign: 'center',
  },
  partContainer: {
    margin: 20,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
  },
  partImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  partHeader: {
    marginBottom: 16,
  },
  partNumber: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
    marginBottom: 8,
  },
  partTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#FFFFFF',
    lineHeight: 28,
  },
  partDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#D1D5DB',
    lineHeight: 24,
    marginBottom: 20,
  },
  characterImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 12,
  },
  characterImage: {
    flex: 1,
    height: 120,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  choreographersContainer: {
    backgroundColor: '#374151',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  choreographersTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
    marginBottom: 8,
  },
  choreographersText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#D1D5DB',
    lineHeight: 20,
  },
  quadriContainer: {
    marginTop: 8,
  },
  quadriTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  quadroItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  quadroBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F59E0B',
    marginTop: 8,
    marginRight: 12,
  },
  quadroText: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#D1D5DB',
    lineHeight: 20,
  },
});