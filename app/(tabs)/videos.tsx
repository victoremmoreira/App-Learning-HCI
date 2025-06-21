import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Play, Clock, Bookmark, Eye, CircleCheck as CheckCircle } from 'lucide-react-native';

const videoCategories = ['All', 'Fundamentals', 'Advanced', 'Case Studies', 'Tools'];

const videos = [
  {
    id: 1,
    title: 'Introduction to Human-Computer Interaction',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12:45',
    category: 'Fundamentals',
    instructor: 'Dr. Sarah Chen',
    views: '5.2k',
    completed: false,
    bookmarked: true,
    description: 'A comprehensive overview of HCI principles and methodologies.',
  },
  {
    id: 2,
    title: 'User Research Methods in Practice',
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '18:30',
    category: 'Advanced',
    instructor: 'Prof. Michael Johnson',
    views: '3.8k',
    completed: true,
    bookmarked: false,
    description: 'Deep dive into qualitative and quantitative research methods.',
  },
  {
    id: 3,
    title: 'Designing for Accessibility',
    thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '15:20',
    category: 'Fundamentals',
    instructor: 'Maria Rodriguez',
    views: '4.1k',
    completed: false,
    bookmarked: true,
    description: 'Learn how to create inclusive designs for all users.',
  },
  {
    id: 4,
    title: 'Figma for HCI Professionals',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '22:15',
    category: 'Tools',
    instructor: 'Alex Kim',
    views: '6.7k',
    completed: false,
    bookmarked: false,
    description: 'Master Figma for prototyping and design collaboration.',
  },
  {
    id: 5,
    title: 'Netflix UX Case Study',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '25:40',
    category: 'Case Studies',
    instructor: 'Emma Thompson',
    views: '8.9k',
    completed: false,
    bookmarked: false,
    description: 'Analyzing Netflix\'s user experience design decisions.',
  },
];

export default function VideosScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = videos.filter(video => 
    selectedCategory === 'All' || video.category === selectedCategory
  );

  const completedCount = videos.filter(video => video.completed).length;
  const totalCount = videos.length;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Video Lessons</Text>
        <Text style={styles.headerSubtitle}>
          {completedCount} of {totalCount} completed
        </Text>
      </View>

      {/* Progress Overview */}
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <View>
            <Text style={styles.progressTitle}>Learning Progress</Text>
            <Text style={styles.progressSubtitle}>
              Keep up the great work!
            </Text>
          </View>
          <View style={styles.progressCircle}>
            <Text style={styles.progressPercentage}>
              {Math.round((completedCount / totalCount) * 100)}%
            </Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${(completedCount / totalCount) * 100}%` }
            ]} 
          />
        </View>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {videoCategories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              selectedCategory === category && styles.categoryChipActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryChipText,
              selectedCategory === category && styles.categoryChipTextActive
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Videos List */}
      <ScrollView style={styles.videosContainer} showsVerticalScrollIndicator={false}>
        {filteredVideos.map((video) => (
          <TouchableOpacity key={video.id} style={styles.videoCard}>
            <View style={styles.videoThumbnailContainer}>
              <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
              <View style={styles.playOverlay}>
                <View style={styles.playButton}>
                  <Play size={20} color="#FFFFFF" fill="#FFFFFF" />
                </View>
              </View>
              <View style={styles.durationBadge}>
                <Text style={styles.durationText}>{video.duration}</Text>
              </View>
              {video.completed && (
                <View style={styles.completedBadge}>
                  <CheckCircle size={20} color="#10B981" fill="#10B981" />
                </View>
              )}
            </View>
            
            <View style={styles.videoContent}>
              <View style={styles.videoHeader}>
                <Text style={styles.videoCategory}>{video.category}</Text>
                <TouchableOpacity style={styles.bookmarkButton}>
                  <Bookmark 
                    size={18} 
                    color={video.bookmarked ? '#2563EB' : '#6B7280'}
                    fill={video.bookmarked ? '#2563EB' : 'none'}
                  />
                </TouchableOpacity>
              </View>
              
              <Text style={styles.videoTitle} numberOfLines={2}>
                {video.title}
              </Text>
              
              <Text style={styles.videoDescription} numberOfLines={2}>
                {video.description}
              </Text>
              
              <View style={styles.videoMeta}>
                <Text style={styles.instructorText}>by {video.instructor}</Text>
                <View style={styles.metaRight}>
                  <View style={styles.metaItem}>
                    <Eye size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{video.views}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  progressSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563EB',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 4,
  },
  categoriesContainer: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryChipActive: {
    backgroundColor: '#2563EB',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
  },
  videosContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  videoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  videoThumbnailContainer: {
    position: 'relative',
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  durationText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  completedBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
  videoContent: {
    padding: 16,
  },
  videoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  videoCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2563EB',
    textTransform: 'uppercase',
  },
  bookmarkButton: {
    padding: 4,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  videoDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  videoMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instructorText: {
    fontSize: 12,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  metaRight: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
});