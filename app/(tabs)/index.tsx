import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, MapPin, Clock } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../../assets/images/copertina.jpeg')}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
            style={styles.heroOverlay}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroEmoji}>🌪️</Text>
            <Text style={styles.heroTitle}>Attraverso il Ciclone</Text>
            <Text style={styles.heroSubtitle}>presentato da</Text>
            <Text style={styles.heroOrganization}>A.S.D. Armonia del Movimento</Text>
          </View>
        </View>

        {/* Event Details */}
        <View style={styles.eventDetailsContainer}>
          <View style={styles.eventDetailItem}>
            <MapPin size={24} color="#10B981" />
            <View style={styles.eventDetailText}>
              <Text style={styles.eventDetailTitle}>Teatro Marrucino</Text>
              <Text style={styles.eventDetailSubtitle}>Chieti</Text>
            </View>
          </View>
          
          <View style={styles.eventDetailItem}>
            <Calendar size={24} color="#10B981" />
            <View style={styles.eventDetailText}>
              <Text style={styles.eventDetailTitle}>16 Giugno 2025</Text>
              <Text style={styles.eventDetailSubtitle}>Lunedì</Text>
            </View>
          </View>
          
          <View style={styles.eventDetailItem}>
            <Clock size={24} color="#10B981" />
            <View style={styles.eventDetailText}>
              <Text style={styles.eventDetailTitle}>ore 20:45</Text>
              <Text style={styles.eventDetailSubtitle}>Ingresso</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>✨ Un viaggio di danza tra emozione, scoperta e coraggio ✨</Text>
          <Text style={styles.descriptionText}>
            Un grande spettacolo ispirato alla storia de Il Mago di Oz, raccontato attraverso la danza.
          </Text>
        </View>

        {/* Program Overview */}
        <View style={styles.programOverviewContainer}>
          <Text style={styles.sectionTitle}>Il Programma</Text>
          
          <View style={styles.programCard}>
            <View style={styles.programNumber}>
              <Text style={styles.programNumberText}>I</Text>
            </View>
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>La Fattoria, il Ciclone e il Paese dei Mastichini</Text>
              <Text style={styles.programDescription}>
                Dorothy vive in una tranquilla fattoria finché un ciclone la trascina nel fantastico Paese dei Mastichini.
              </Text>
            </View>
          </View>

          <View style={styles.programCard}>
            <View style={styles.programNumber}>
              <Text style={styles.programNumberText}>II</Text>
            </View>
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>Il Sentiero Dorato e i Nuovi Compagni</Text>
              <Text style={styles.programDescription}>
                Dorothy incontra lo Spaventapasseri, la Donna di Latta e il Leone lungo il Sentiero Dorato.
              </Text>
            </View>
          </View>

          <View style={styles.programCard}>
            <View style={styles.programNumber}>
              <Text style={styles.programNumberText}>III</Text>
            </View>
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>Il Campo dei Papaveri e la Città di Smeraldo</Text>
              <Text style={styles.programDescription}>
                La scoperta che ciò che cercavano era già dentro di loro e la celebrazione dell'amicizia.
              </Text>
            </View>
          </View>
        </View>

        {/* CTA Section */}
      
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
  heroContainer: {
    height: 400,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  heroEmoji: {
    fontSize: 40,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#D1D5DB',
    marginBottom: 4,
  },
  heroOrganization: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  eventDetailsContainer: {
    backgroundColor: '#1F2937',
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  eventDetailText: {
    marginLeft: 12,
    flex: 1,
  },
  eventDetailTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  eventDetailSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginTop: 2,
  },
  descriptionContainer: {
    margin: 20,
    marginTop: 0,
  },
  descriptionTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#F59E0B',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 28,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#D1D5DB',
    textAlign: 'center',
    lineHeight: 24,
  },
  programOverviewContainer: {
    margin: 20,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  programCard: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  programNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  programNumberText: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#FFFFFF',
  },
  programContent: {
    flex: 1,
  },
  programTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 22,
  },
  programDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    lineHeight: 20,
  },
  ctaContainer: {
    margin: 20,
    backgroundColor: '#10b981',
    borderRadius: 16,
    padding: 24,
    marginBottom: 40,
  },
  ctaTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
  },
});