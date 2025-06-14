import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Clock, Calendar, Users, Car, Info } from 'lucide-react-native';

export default function Venue() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Teatro Marrucino</Text>
          <Text style={styles.headerSubtitle}>Chieti</Text>
        </View>

        {/* Theater Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/foto_teatro_marrucino.jpg')}
            style={styles.theaterImage}
          />
        </View>

        {/* Event Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Calendar size={24} color="#10B981" />
            <View style={styles.detailText}>
              <Text style={styles.detailTitle}>Data dello Spettacolo</Text>
              <Text style={styles.detailValue}>Lunedì, 16 Giugno 2025</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Clock size={24} color="#10B981" />
            <View style={styles.detailText}>
              <Text style={styles.detailTitle}>Orario di Inizio</Text>
              <Text style={styles.detailValue}>ore 20:45</Text>
              <Text style={styles.detailNote}>Apertura teatro ore 20:00</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <MapPin size={24} color="#10B981" />
            <View style={styles.detailText}>
              <Text style={styles.detailTitle}>Indirizzo</Text>
              <Text style={styles.detailValue}>Via Cesare De Lollis, 10</Text>
              <Text style={styles.detailValue}>66100 Chieti CH</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Users size={24} color="#10B981" />
            <View style={styles.detailText}>
              <Text style={styles.detailTitle}>Capienza</Text>
              <Text style={styles.detailValue}>Circa 500 posti</Text>
              <Text style={styles.detailNote}>Teatro storico del 1818</Text>
            </View>
          </View>
        </View>

        {/* About Theater */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>Il Teatro Marrucino</Text>
          <Text style={styles.aboutText}>
            Il Teatro Marrucino è il principale teatro della città di Chieti, inaugurato nel 1818. 
            Situato nel cuore del centro storico, è un gioiello dell'architettura teatrale italiana 
            con la sua elegante facciata neoclassica e i ricchi interni decorati.
          </Text>
          <Text style={styles.aboutText}>
            Con i suoi tre ordini di palchi e la platea, offre un'acustica eccellente e 
            un'atmosfera suggestiva che renderà ancora più magico lo spettacolo "Attraverso il Ciclone".
          </Text>
        </View>

        {/* Parking Info */}
        <View style={styles.infoContainer}>
          <View style={styles.infoHeader}>
            <Car size={24} color="#F59E0B" />
            <Text style={styles.infoTitle}>Informazioni Parcheggio</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infoBullet} />
            <Text style={styles.infoText}>Posti auto limitati in centro storico</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infoBullet} />
            <Text style={styles.infoText}>Si consiglia di arrivare con anticipo</Text>
          </View>
        </View>

        {/* General Info */}
        <View style={[styles.infoContainer, { marginBottom: 40 }]}>
          <View style={styles.infoHeader}>
            <Info size={24} color="#F59E0B" />
            <Text style={styles.infoTitle}>Informazioni Generali</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infoBullet} />
            <Text style={styles.infoText}>Ingresso consigliato 30 minuti prima</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infoBullet} />
            <Text style={styles.infoText}>Teatro climatizzato</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infoBullet} />
            <Text style={styles.infoText}>Accessibile ai disabili</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infoBullet} />
            <Text style={styles.infoText}>Servizi igienici disponibili</Text>
          </View>
        </View>

        {/* SEZIONE MAPPA RIMOSSA */}

      </ScrollView>
    </SafeAreaView>
  );
}

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
  imageContainer: {
    marginHorizontal: 20,
    marginTop: 8,
  },
  theaterImage: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  detailsContainer: {
    margin: 20,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  detailText: {
    marginLeft: 16,
    flex: 1,
  },
  detailTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#D1D5DB',
    marginBottom: 2,
  },
  detailNote: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  aboutContainer: {
    marginHorizontal: 20,
    marginTop: 0,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: '#D1D5DB',
    lineHeight: 22,
    marginBottom: 12,
  },
  infoContainer: {
    margin: 20,
    marginTop: 20,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F59E0B',
    marginRight: 12,
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#D1D5DB',
    flex: 1,
  },
});