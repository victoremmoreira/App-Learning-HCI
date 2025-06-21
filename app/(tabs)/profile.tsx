import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { 
  User, 
  BookOpen, 
  Play, 
  Award, 
  Settings, 
  Bell, 
  Download, 
  Share,
  ChevronRight,
  Star,
  Calendar,
  Clock
} from 'lucide-react-native';

const achievements = [
  { id: 1, title: 'First Article Read', icon: '📚', earned: true },
  { id: 2, title: 'Video Enthusiast', icon: '🎥', earned: true },
  { id: 3, title: 'Tutorial Master', icon: '🏆', earned: false },
  { id: 4, title: 'Week Streak', icon: '🔥', earned: true },
];

const recentActivity = [
  {
    id: 1,
    type: 'article',
    title: 'The Psychology of User Interface Design',
    date: '2 hours ago',
    action: 'Read',
  },
  {
    id: 2,
    type: 'video',
    title: 'User Research Methods in Practice',
    date: '1 day ago',
    action: 'Completed',
  },
  {
    id: 3,
    type: 'tutorial',
    title: 'Building Your First Design System',
    date: '3 days ago',
    action: 'Started',
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200' }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Johnson</Text>
            <Text style={styles.profileEmail}>sarah.johnson@email.com</Text>
            <Text style={styles.profileRole}>UX Designer</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Settings size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <BookOpen size={24} color="#2563EB" />
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Articles Read</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Play size={24} color="#10B981" />
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Videos Watched</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Award size={24} color="#F59E0B" />
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Tutorials Done</Text>
            </View>
          </View>
        </View>

        {/* Learning Streak */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Streak</Text>
          <View style={styles.streakCard}>
            <View style={styles.streakInfo}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <View>
                <Text style={styles.streakNumber}>7 Days</Text>
                <Text style={styles.streakText}>Keep it up!</Text>
              </View>
            </View>
            <View style={styles.streakCalendar}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.streakDay,
                    index < 5 ? styles.streakDayActive : styles.streakDayInactive
                  ]}
                >
                  <Text style={[
                    styles.streakDayText,
                    index < 5 ? styles.streakDayTextActive : styles.streakDayTextInactive
                  ]}>
                    {day}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement) => (
              <View 
                key={achievement.id} 
                style={[
                  styles.achievementCard,
                  !achievement.earned && styles.achievementCardInactive
                ]}
              >
                <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                <Text style={[
                  styles.achievementTitle,
                  !achievement.earned && styles.achievementTitleInactive
                ]}>
                  {achievement.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            {recentActivity.map((activity) => (
              <View key={activity.id} style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  {activity.type === 'article' && <BookOpen size={16} color="#2563EB" />}
                  {activity.type === 'video' && <Play size={16} color="#10B981" />}
                  {activity.type === 'tutorial' && <Award size={16} color="#F59E0B" />}
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <View style={styles.activityMeta}>
                    <Text style={styles.activityAction}>{activity.action}</Text>
                    <Text style={styles.activityDate}>{activity.date}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Settings Menu */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsMenu}>
            <TouchableOpacity style={styles.settingsItem}>
              <Bell size={20} color="#6B7280" />
              <Text style={styles.settingsText}>Notifications</Text>
              <ChevronRight size={16} color="#6B7280" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingsItem}>
              <Download size={20} color="#6B7280" />
              <Text style={styles.settingsText}>Offline Content</Text>
              <ChevronRight size={16} color="#6B7280" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingsItem}>
              <Share size={20} color="#6B7280" />
              <Text style={styles.settingsText}>Share App</Text>
              <ChevronRight size={16} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Learning Goals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This Week's Goals</Text>
          <View style={styles.goalsCard}>
            <View style={styles.goalItem}>
              <View style={styles.goalInfo}>
                <BookOpen size={18} color="#2563EB" />
                <Text style={styles.goalText}>Read 3 articles</Text>
              </View>
              <Text style={styles.goalProgress}>2/3</Text>
            </View>
            
            <View style={styles.goalItem}>
              <View style={styles.goalInfo}>
                <Play size={18} color="#10B981" />
                <Text style={styles.goalText}>Watch 2 videos</Text>
              </View>
              <Text style={styles.goalProgress}>1/2</Text>
            </View>
            
            <View style={styles.goalItem}>
              <View style={styles.goalInfo}>
                <Clock size={18} color="#F59E0B" />
                <Text style={styles.goalText}>30 min daily</Text>
              </View>
              <Text style={styles.goalProgress}>5/7</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  profileRole: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '500',
  },
  editButton: {
    padding: 8,
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  statsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#E5E7EB',
    alignSelf: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  streakCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  streakInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  streakEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  streakNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  streakText: {
    fontSize: 14,
    color: '#6B7280',
  },
  streakCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  streakDay: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakDayActive: {
    backgroundColor: '#2563EB',
  },
  streakDayInactive: {
    backgroundColor: '#E5E7EB',
  },
  streakDayText: {
    fontSize: 12,
    fontWeight: '500',
  },
  streakDayTextActive: {
    color: '#FFFFFF',
  },
  streakDayTextInactive: {
    color: '#6B7280',
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    width: '47%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  achievementCardInactive: {
    backgroundColor: '#F9FAFB',
    opacity: 0.6,
  },
  achievementIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  achievementTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1F2937',
    textAlign: 'center',
  },
  achievementTitleInactive: {
    color: '#6B7280',
  },
  activityList: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  activityMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityAction: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '500',
  },
  activityDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  settingsMenu: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingsText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 12,
  },
  goalsCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  goalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalText: {
    fontSize: 14,
    color: '#1F2937',
    marginLeft: 8,
  },
  goalProgress: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
});