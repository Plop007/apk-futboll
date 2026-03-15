import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

const profile = {
  name: 'Juan Pérez',
  level: 10,
  email: 'juan.perez@email.com',
  role: 'Jugador',
  position: 'Delantero',
  avatar:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
};

const stats = [
  {
    key: 'goles',
    label: 'Goles',
    value: 9,
    icon: <Ionicons name="star" size={26} color="#F4C95D" />,
  },
  {
    key: 'asistes',
    label: 'Asistes',
    value: 5,
    icon: <MaterialCommunityIcons name="shoe-cleat" size={24} color="#E6EAF2" />,
  },
  {
    key: 'partidos',
    label: 'Partidos',
    value: 7,
    icon: <FontAwesome5 name="shield-alt" size={20} color="#DCE3F0" solid />,
  },
  {
    key: 'partiches',
    label: 'Partiches',
    value: 25,
    icon: <Feather name="clock" size={22} color="#DCE3F0" />,
  },
];

const accountItems = [
  { key: 'equipos', label: 'Mis Equipos', icon: 'sports-soccer' },
  { key: 'contactos', label: 'Contactos', icon: 'groups' },
  { key: 'push', label: 'Notificaciones push', icon: 'notifications-none' },
  { key: 'privacidad', label: 'Privacidad', icon: 'lock-outline' },
];

const bottomTabs = [
  { key: 'inicio', label: 'Inicio', icon: 'home-outline', active: false },
  { key: 'partidos', label: 'Partidos', icon: 'shield-outline', active: false },
  { key: 'ligas', label: 'Ligas', icon: 'trophy-outline', active: false },
  { key: 'mensajes', label: 'Mensajes', icon: 'mail-outline', active: false },
  { key: 'perfil', label: 'Perfil', icon: 'person', active: true },
];

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&w=1400&q=80',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(4, 10, 15, 0.82)', 'rgba(1, 7, 11, 0.92)', '#020406']}
          style={styles.darkOverlay}
        >
          <SafeAreaView style={styles.safeArea}>
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <ProfileHeader />
              <UserBlock />
              <StatsSection />
              <CollectiblesSection />
              <AccountSection />
            </ScrollView>
          </SafeAreaView>

          <BottomNavigation />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
        <Ionicons name="arrow-back" size={24} color="#F8FAFF" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Perfil</Text>

      <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
        <Ionicons name="settings-outline" size={22} color="#F8FAFF" />
      </TouchableOpacity>
    </View>
  );
}

function UserBlock() {
  return (
    <View style={styles.userCard}>
      <View style={styles.userTopRow}>
        <View style={styles.avatarShield}>
          <Image source={{ uri: profile.avatar }} style={styles.avatarImage} />
        </View>

        <View style={styles.userMainInfo}>
          <Text style={styles.userName}>{profile.name}</Text>

          <View style={styles.levelBadge}>
            <Ionicons name="star" size={16} color="#F5C757" />
            <Text style={styles.levelText}>Nivel {profile.level}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.userEmail}>{profile.email}</Text>

      <View style={styles.roleRow}>
        <View style={styles.roleBadge}>
          <MaterialCommunityIcons name="soccer" size={16} color="#EFFCF4" />
          <Text style={styles.roleBadgeText}>{profile.role}</Text>
        </View>
        <Text style={styles.positionText}>{profile.position}</Text>
      </View>
    </View>
  );
}

function StatsSection() {
  return (
    <View style={styles.sectionCard}>
      <Text style={styles.sectionTitle}>Estadísticas</Text>

      <View style={styles.statsPanel}>
        {stats.map((item, index) => (
          <View key={item.key} style={styles.statColumn}>
            {item.icon}
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
            {index !== stats.length - 1 && <View style={styles.verticalDivider} />}
          </View>
        ))}
      </View>
    </View>
  );
}

function CollectiblesSection() {
  return (
    <View style={styles.sectionCard}>
      <Text style={styles.sectionTitle}>Collectibles</Text>

      <LinearGradient
        colors={['rgba(19, 33, 44, 0.94)', 'rgba(7, 18, 27, 0.95)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.collectibleCard}
      >
        <View style={styles.collectibleTop}>
          <Ionicons name="trophy" size={56} color="#F2C04B" />

          <View style={styles.collectibleTextWrap}>
            <Text style={styles.collectibleTitle}>Trofeos Ganados</Text>
            <Text style={styles.collectibleSubtitle}>4 trofeos obtenidos</Text>
          </View>

          <Text style={styles.collectibleProgress}>12 / 50</Text>
        </View>

        <View style={styles.collectibleFooter}>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={['#58E39D', '#23B26D']}
              style={[styles.progressFill, { width: '24%' }]}
            />
          </View>

          <TouchableOpacity activeOpacity={0.9} style={styles.trophyButton}>
            <Text style={styles.trophyButtonText}>Ver Trofeos</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

function AccountSection() {
  return (
    <View style={styles.accountSectionWrap}>
      <Text style={styles.sectionTitle}>Mi Cuenta</Text>

      <View style={styles.accountCard}>
        {accountItems.map((item, index) => (
          <TouchableOpacity key={item.key} activeOpacity={0.85} style={styles.accountItem}>
            <MaterialIcons name={item.icon as never} size={24} color="#0A7A45" />
            <Text style={styles.accountLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={22} color="#8A95A6" />

            {index !== accountItems.length - 1 && <View style={styles.accountDivider} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function BottomNavigation() {
  return (
    <View style={styles.bottomBarContainer}>
      <LinearGradient
        colors={['rgba(4, 26, 20, 0.85)', 'rgba(5, 16, 27, 0.93)']}
        style={styles.bottomBar}
      >
        {bottomTabs.map((tab) => (
          <TouchableOpacity key={tab.key} style={styles.bottomTab} activeOpacity={0.86}>
            <Ionicons
              name={tab.icon as never}
              size={23}
              color={tab.active ? '#64F0AA' : '#ECF2FF'}
            />
            <Text style={[styles.bottomTabText, tab.active && styles.bottomTabTextActive]}>
              {tab.label}
            </Text>
            {tab.active && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        ))}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#010305',
  },
  background: {
    flex: 1,
  },
  darkOverlay: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 120,
    gap: 18,
  },

  headerContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(12, 24, 32, 0.42)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  headerTitle: {
    fontSize: 30,
    lineHeight: 42,
    color: '#F4F8FF',
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  userCard: {
    padding: 16,
    borderRadius: 24,
    backgroundColor: 'rgba(9, 16, 24, 0.46)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.26,
    shadowRadius: 18,
    elevation: 6,
  },
  userTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatarShield: {
    width: 110,
    height: 130,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#D2A13A',
    overflow: 'hidden',
    backgroundColor: '#0E2A24',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  userMainInfo: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.2,
    marginBottom: 8,
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(15, 123, 67, 0.78)',
    borderWidth: 1,
    borderColor: 'rgba(247, 203, 98, 0.45)',
  },
  levelText: {
    color: '#F2F7FF',
    fontSize: 20,
    fontWeight: '700',
  },
  userEmail: {
    marginTop: 14,
    color: '#D4DCE7',
    fontSize: 18,
    fontWeight: '500',
  },
  roleRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(9, 136, 72, 0.86)',
  },
  roleBadgeText: {
    color: '#EAF6EF',
    fontSize: 18,
    fontWeight: '700',
  },
  positionText: {
    color: '#EAF0FB',
    fontSize: 20,
    fontWeight: '500',
  },

  sectionCard: {
    borderRadius: 24,
    padding: 16,
    backgroundColor: 'rgba(8, 18, 28, 0.54)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.09)',
  },
  sectionTitle: {
    color: '#F7FAFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },

  statsPanel: {
    flexDirection: 'row',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(19, 34, 44, 0.6)',
    overflow: 'hidden',
  },
  statColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    position: 'relative',
  },
  statValue: {
    color: '#F7FCFF',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 8,
  },
  statLabel: {
    color: '#D8E1EE',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 3,
  },
  verticalDivider: {
    position: 'absolute',
    right: 0,
    top: 14,
    bottom: 14,
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },

  collectibleCard: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.13)',
    padding: 14,
    gap: 12,
  },
  collectibleTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  collectibleTextWrap: {
    flex: 1,
  },
  collectibleTitle: {
    color: '#F6FAFF',
    fontSize: 18,
    fontWeight: '800',
  },
  collectibleSubtitle: {
    marginTop: 3,
    color: '#CCD7E4',
    fontSize: 14,
    fontWeight: '500',
  },
  collectibleProgress: {
    color: '#F8FDFF',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  collectibleFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.18)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
  },
  trophyButton: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: '#19A55D',
    borderWidth: 1,
    borderColor: '#49D68E',
  },
  trophyButtonText: {
    color: '#ECFFF4',
    fontSize: 19,
    fontWeight: '700',
  },

  accountSectionWrap: {
    marginBottom: 8,
  },
  accountCard: {
    borderRadius: 20,
    backgroundColor: '#F6F9FF',
    overflow: 'hidden',
  },
  accountItem: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    position: 'relative',
  },
  accountLabel: {
    flex: 1,
    color: '#213041',
    fontSize: 20,
    fontWeight: '600',
  },
  accountDivider: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 0,
    height: 1,
    backgroundColor: '#DFE5EE',
  },

  bottomBarContainer: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 8,
    borderRadius: 22,
    overflow: 'hidden',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  bottomTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    position: 'relative',
  },
  bottomTabText: {
    color: '#F2F7FF',
    fontSize: 12,
    fontWeight: '500',
  },
  bottomTabTextActive: {
    color: '#83FFC1',
    fontWeight: '700',
  },
  activeTabIndicator: {
    marginTop: 2,
    width: 26,
    height: 3,
    borderRadius: 999,
    backgroundColor: '#66F2AF',
  },
});
