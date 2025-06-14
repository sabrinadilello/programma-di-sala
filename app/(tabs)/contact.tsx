// ----------- INIZIA A COPIARE DA QUI (SOSTITUISCI L'INTERO FILE) -----------

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react-native';

export default function Contact() {
  return (
    <SafeAreaView style={styles.container}>
      {/* LIVELLO 1: SFONDO FISSO */}
      <Image
        source={require('../../assets/images/scuola.jpeg')}
        style={styles.backgroundImage}
        blurRadius={2}
      />
      {/* Velo scuro per migliorare la leggibilità del testo */}
      <View style={styles.overlay} />

      {/* LIVELLO 2: CONTENUTO SCORREVOLE */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {/* Header (ora è solo testo) */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Contatti</Text>
          <Text style={styles.headerSubtitle}>A.S.D. Armonia del Movimento</Text>
        </View>

        {/* Main Contact Info */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>📍 Centro Danza</Text>
          <View style={styles.contactItem}>
            <MapPin size={24} color="#10B981" />
            <View style={styles.contactText}>
              <Text style={styles.contactLabel}>Indirizzo</Text>
              <Text style={styles.contactValue}>Via Benedetto Croce 305</Text>
              <Text style={styles.contactValue}>Chieti</Text>
            </View>
          </View>
          <View style={styles.contactItem}>
            <Phone size={24} color="#10B981" />
            <View style={styles.contactText}>
              <Text style={styles.contactLabel}>Telefono</Text>
              <Text style={styles.contactValue}>0871 1560172</Text>
              <Text style={styles.contactValue}>339 3251202</Text>
            </View>
          </View>
          <View style={styles.contactItem}>
            <Mail size={24} color="#10B981" />
            <View style={styles.contactText}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>armoniadelmovimento@fastweb.net</Text>
            </View>
          </View>
          <View style={styles.contactItem}>
            <Instagram size={24} color="#10B981" />
            <View style={styles.contactText}>
              <Text style={styles.contactLabel}>Instagram</Text>
              <Text style={styles.contactValue}>@asdarmoniadelmovimento</Text>
            </View>
          </View>
        </View>

        {/* About School */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>Chi Siamo</Text>
          <Text style={styles.aboutText}>
            L'A.S.D. Armonia del Movimento è una scuola di danza che opera con passione e professionalità nel territorio chietino dal 1991. La nostra missione è quella di trasmettere l'amore per la danza in tutte le sue forme, dalla danza classica al moderno, dall'hip hop al contemporaneo.
          </Text>
        </View>

        {/* Dance Styles */}
        <View style={styles.stylesContainer}>
          <Text style={styles.stylesTitle}>I Nostri Corsi</Text>
          <View style={styles.styleItem}>
            <Text style={styles.styleEmoji}>🩰</Text>
            <View style={styles.styleContent}>
              <Text style={styles.styleName}>Danza Classica</Text>
            </View>
          </View>
          <View style={styles.styleItem}>
            <Text style={styles.styleEmoji}>💫</Text>
            <View style={styles.styleContent}>
              <Text style={styles.styleName}>Danza Moderna</Text>
            </View>
          </View>
          <View style={styles.styleItem}>
            <Text style={styles.styleEmoji}>🎤</Text>
            <View style={styles.styleContent}>
              <Text style={styles.styleName}>Hip Hop</Text>
            </View>
          </View>
          <View style={styles.styleItem}>
            <Text style={styles.styleEmoji}>🌊</Text>
            <View style={styles.styleContent}>
              <Text style={styles.styleName}>Contemporaneo</Text>
            </View>
          </View>
          <View style={styles.styleItem}>
            <Text style={styles.styleEmoji}>👶</Text>
            <View style={styles.styleContent}>
              <Text style={styles.styleName}>Predanza e giocodanza</Text>
            </View>
          </View>
          <View style={styles.styleItem}>
            <Text style={styles.styleEmoji}>👠</Text>
            <View style={styles.styleContent}>
              <Text style={styles.styleName}>Heels</Text>
            </View>
          </View>
        </View>

        {/* Teaching Staff */}
        <View style={styles.staffContainer}>
          <Text style={styles.staffTitle}>Il Nostro Team</Text>
          <View style={styles.staffMember}>
            <Text style={styles.staffName}>Monica Castronuovo</Text>
            <Text style={styles.staffRole}>Direttrice artistica</Text>
          </View>
          <View style={styles.staffMember}>
            <Text style={styles.staffName}>Cristiana Greco</Text>
            <Text style={styles.staffRole}>Insegnante Hip Hop</Text>
          </View>
          <View style={styles.staffMember}>
            <Text style={styles.staffName}>Erika Pentima</Text>
            <Text style={styles.staffRole}>Insegnante Moderno</Text>
          </View>
          <View style={styles.staffMember}>
            <Text style={styles.staffName}>Ramona Marinelli</Text>
            <Text style={styles.staffRole}>Insegnante Contemporaneo</Text>
          </View>
          <View style={styles.staffMember}>
            <Text style={styles.staffName}>Roberta Baldonero</Text>
            <Text style={styles.staffRole}>Insegnante Collaboratrice corso propedeutico</Text>
          </View>
          <View style={styles.staffMember}>
            <Text style={styles.staffName}>Sabrina Di Renzo</Text>
            <Text style={styles.staffRole}>Insegnante Collaboratrice corso predanza</Text>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Stili per i livelli principali
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(17, 24, 39, 0.7)',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContentContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40, // Aggiunto per dare spazio in fondo
  },
  // Stili del contenuto
  header: {
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#10B981',
    textAlign: 'center',
  },
  // Stili dei box
  contactContainer: {
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  aboutContainer: {
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  stylesContainer: {
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  staffContainer: {
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  hoursContainer: {
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20, // Modificato per coerenza
  },
  // Stili interni ai box
  contactTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactText: {
    marginLeft: 16,
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#9CA3AF',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
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
  stylesTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  styleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  styleEmoji: {
    fontSize: 24,
    marginRight: 16,
  },
  styleContent: {
    flex: 1,
  },
  styleName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  staffTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  staffMember: {
    backgroundColor: '#374151',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  staffName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  staffRole: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#10B981',
  },
  hoursTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  hoursItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  hoursDay: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#D1D5DB',
  },
  hoursTime: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: '#10B981',
  },
});

// ----------- FINISCI DI COPIARE QUI -----------