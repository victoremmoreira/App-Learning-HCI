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
import { ChevronRight, Clock, Users, CircleCheck as CheckCircle, Star } from 'lucide-react-native';

const difficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const tutorials = [
  {
    id: 1,
    title: 'Building Your First Design System',
    description: 'Learn to create a comprehensive design system from scratch with practical examples.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Beginner',
    duration: '2.5 hours',
    steps: 12,
    participants: '2.3k',
    rating: 4.8,
    completed: false,
    tools: ['Figma', 'Adobe XD'],
    category: 'Design Systems',
  },
  {
    id: 2,
    title: 'Advanced Usability Testing Techniques',
    description: 'Master advanced methods for conducting effective usability tests and analyzing results.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Advanced',
    duration: '4 hours',
    steps: 18,
    participants: '1.8k',
    rating: 4.9,
    completed: true,
    tools: ['Maze', 'Lookback', 'UserTesting'],
    category: 'User Research',
  },
  {
    id: 3,
    title: 'Accessible Web Development Fundamentals',
    description: 'Create websites that work for everyone by implementing accessibility best practices.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Intermediate',
    duration: '3 hours',
    steps: 15,
    participants: '3.1k',
    rating: 4.7,
    completed: false,
    tools: ['HTML', 'CSS', 'ARIA'],
    category: 'Accessibility',
  },
  {
    id: 4,
    title: 'Prototyping with Framer Motion',
    description: 'Build interactive prototypes with advanced animations using Framer Motion.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Advanced',
    duration: '3.5 hours',
    steps: 20,
    participants: '1.2k',
    rating: 4.6,
    completed: false,
    tools: ['React', 'Framer Motion', 'Next.js'],
    category: 'Prototyping',
  },
  {
    id: 5,
    title: 'User Journey Mapping Workshop',
    description: 'Learn to create comprehensive user journey maps that drive design decisions.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Beginner',
    duration: '2 hours',
    steps: 10,
    participants: '4.5k',
    rating: 4.8,
    completed: false,
    tools: ['Miro', 'Figma', 'Sketch'],
    category: 'UX Strategy',
  },
];

export default function TutorialsScreen() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredTutorials = tutorials.filter(tutorial => 
    selectedDifficulty === 'All' || tutorial.difficulty === selectedDifficulty
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#10B981';
      case 'Intermediate': return '#F59E0B';
      case 'Advanced': return '#EF4444';
      default: return '#6B7280';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tutorials</Text>
        <Text style={styles.headerSubtitle}>Hands-on learning experiences</Text>
      </View>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {tutorials.filter(t => t.completed).length}
            </Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {tutorials.reduce((acc, t) => acc + t.steps, 0)}
            </Text>
            <Text style={styles.statLabel}>Total Steps</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {Math.round(tutorials.reduce((acc, t) => acc + t.rating, 0) / tutorials.length * 10) / 10}
            </Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </View>
        </View>
      </View>

      {/* Difficulty Filter */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.difficultyContainer}
      >
        {difficultyLevels.map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.difficultyChip,
              selectedDifficulty === level && styles.difficultyChipActive
            ]}
            onPress={() => setSelectedDifficulty(level)}
          >
            <Text style={[
              styles.difficultyChipText,
              selectedDifficulty === level && styles.difficultyChipTextActive
            ]}>
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tutorials List */}
      <ScrollView style={styles.tutorialsContainer} showsVerticalScrollIndicator={false}>
        {filteredTutorials.map((tutorial) => (
          <TouchableOpacity key={tutorial.id} style={styles.tutorialCard}>
            <Image source={{ uri: tutorial.image }} style={styles.tutorialImage} />
            
            <View style={styles.tutorialContent}>
              <View style={styles.tutorialHeader}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>{tutorial.category}</Text>
                </View>
                {tutorial.completed && (
                  <CheckCircle size={20} color="#10B981" fill="#10B981" />
                )}
              </View>

              <Text style={styles.tutorialTitle} numberOfLines={2}>
                {tutorial.title}
              </Text>

              <Text style={styles.tutorialDescription} numberOfLines={2}>
                {tutorial.description}
              </Text>

              <View style={styles.difficultyContainer}>
                <View 
                  style={[
                    styles.difficultyBadge, 
                    { backgroundColor: getDifficultyColor(tutorial.difficulty) }
                  ]}
                >
                  <Text style={styles.difficultyText}>{tutorial.difficulty}</Text>
                </View>
              </View>

              <View style={styles.tutorialMeta}>
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <Clock size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{tutorial.duration}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Text style={styles.metaText}>{tutorial.steps} steps</Text>
                  </View>
                </View>
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <Users size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{tutorial.participants}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Star size={14} color="#F59E0B" fill="#F59E0B" />
                    <Text style={styles.metaText}>{tutorial.rating}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.toolsContainer}>
                <Text style={styles.toolsLabel}>Tools:</Text>
                <View style={styles.toolsList}>
                  {tutorial.tools.map((tool, index) => (
                    <View key={index} style={styles.toolTag}>
                      <Text style={styles.toolText}>{tool}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>
                  {tutorial.completed ? 'Review Tutorial' : 'Start Tutorial'}
                </Text>
                <ChevronRight size={16} color="#FFFFFF" />
              </TouchableOpacity>
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
  statsCard: {
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E7EB',
  },
  difficultyContainer: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  difficultyChip: {
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
  difficultyChipActive: {
    backgroundColor: '#2563EB',
  },
  difficultyChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  difficultyChipTextActive: {
    color: '#FFFFFF',
  },
  tutorialsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tutorialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  tutorialImage: {
    width: '100%',
    height: 180,
  },
  tutorialContent: {
    padding: 20,
  },
  tutorialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2563EB',
  },
  tutorialTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 26,
  },
  tutorialDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  tutorialMeta: {
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
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
  toolsContainer: {
    marginBottom: 20,
  },
  toolsLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8,
  },
  toolsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  toolTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  toolText: {
    fontSize: 12,
    color: '#6B7280',
  },
  startButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});