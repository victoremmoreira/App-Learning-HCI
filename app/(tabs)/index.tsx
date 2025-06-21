import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Bookmark, Clock, TrendingUp, Award } from 'lucide-react-native';

const featuredContent = [
  {
    id: 1,
    type: 'Article',
    title: 'The Psychology of User Interface Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min',
    category: 'UI/UX Design',
  },
  {
    id: 2,
    type: 'Video',
    title: 'Accessibility in Modern Web Design',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12 min',
    category: 'Accessibility',
  },
  {
    id: 3,
    type: 'Tutorial',
    title: 'Building Inclusive Design Systems',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    steps: '15 steps',
    category: 'Design Systems',
  },
];

const categories = [
  { name: 'UI/UX Design', icon: '🎨', count: 24 },
  { name: 'Usability', icon: '👥', count: 18 },
  { name: 'Accessibility', icon: '♿', count: 12 },
  { name: 'Research', icon: '🔬', count: 15 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.headerTitle}>Continue Learning HCI</Text>
        </View>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Award size={24} color="#2563EB" />
            <Text style={styles.progressTitle}>Your Progress</Text>
          </View>
          <Text style={styles.progressSubtitle}>You're on track this week</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '68%' }]} />
          </View>
          <Text style={styles.progressText}>68% of weekly goal completed</Text>
        </View>

        {/* Featured Content */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Content</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {featuredContent.map((item) => (
              <TouchableOpacity key={item.id} style={styles.featuredCard}>
                <Image source={{ uri: item.image }} style={styles.featuredImage} />
                <View style={styles.featuredContent}>
                  <Text style={styles.featuredType}>{item.type}</Text>
                  <Text style={styles.featuredTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={styles.featuredCategory}>{item.category}</Text>
                  <View style={styles.featuredMeta}>
                    <Clock size={14} color="#6B7280" />
                    <Text style={styles.featuredMetaText}>
                      {item.readTime || item.duration || item.steps}
                    </Text>
                    <TouchableOpacity style={styles.bookmarkButton}>
                      <Bookmark size={16} color="#6B7280" />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryCount}>{category.count} items</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trending Now */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.trendingHeader}>
              <TrendingUp size={20} color="#2563EB" />
              <Text style={styles.sectionTitle}>Trending Now</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.trendingCard}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.trendingImage}
            />
            <View style={styles.trendingContent}>
              <Text style={styles.trendingTitle}>
                Voice User Interfaces: The Future of HCI
              </Text>
              <Text style={styles.trendingDescription}>
                Explore how voice technology is reshaping human-computer interaction...
              </Text>
              <View style={styles.trendingMeta}>
                <Text style={styles.trendingMetaText}>Article • 10 min read</Text>
                <Text style={styles.trendingViews}>2.4k views</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  header: {
    padding: 20,
    paddingTop: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: 12,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 8,
  },
  progressSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#6B7280',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  trendingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '500',
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    width: 280,
    marginRight: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featuredImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  featuredContent: {
    padding: 16,
  },
  featuredType: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2563EB',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 22,
  },
  featuredCategory: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featuredMetaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
    flex: 1,
  },
  bookmarkButton: {
    padding: 4,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    width: '47%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: '#6B7280',
  },
  trendingCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  trendingImage: {
    width: '100%',
    height: 180,
  },
  trendingContent: {
    padding: 20,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  trendingDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  trendingMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendingMetaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  trendingViews: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
});