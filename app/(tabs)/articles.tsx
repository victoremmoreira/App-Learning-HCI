import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { Search, Filter, Clock, Bookmark, Eye } from 'lucide-react-native';

const categories = ['All', 'UI/UX', 'Usability', 'Accessibility', 'Research', 'Psychology'];

const articles = [
  {
    id: 1,
    title: 'The Fundamentals of User-Centered Design',
    excerpt: 'Learn the core principles that put users at the heart of the design process and create meaningful experiences.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'UI/UX',
    readTime: '8 min',
    views: '1.2k',
    bookmarked: false,
  },
  {
    id: 2,
    title: 'Cognitive Load Theory in Interface Design',
    excerpt: 'Understanding how users process information and designing interfaces that minimize cognitive burden.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Psychology',
    readTime: '12 min',
    views: '2.4k',
    bookmarked: true,
  },
  {
    id: 3,
    title: 'Accessibility Guidelines for Modern Web',
    excerpt: 'A comprehensive guide to making your web applications accessible to users with disabilities.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Accessibility',
    readTime: '15 min',
    views: '3.1k',
    bookmarked: false,
  },
  {
    id: 4,
    title: 'Usability Testing Methods and Best Practices',
    excerpt: 'Explore different approaches to usability testing and how to extract meaningful insights.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Research',
    readTime: '10 min',
    views: '1.8k',
    bookmarked: false,
  },
  {
    id: 5,
    title: 'Design Systems: Building Consistent User Experiences',
    excerpt: 'How to create and maintain design systems that scale across multiple products and teams.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'UI/UX',
    readTime: '14 min',
    views: '2.7k',
    bookmarked: true,
  },
];

export default function ArticlesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Articles</Text>
        <Text style={styles.headerSubtitle}>Explore HCI knowledge</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search articles..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#6B7280"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#2563EB" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
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

      {/* Articles List */}
      <ScrollView style={styles.articlesContainer} showsVerticalScrollIndicator={false}>
        {filteredArticles.map((article) => (
          <TouchableOpacity key={article.id} style={styles.articleCard}>
            <Image source={{ uri: article.image }} style={styles.articleImage} />
            <View style={styles.articleContent}>
              <View style={styles.articleHeader}>
                <Text style={styles.articleCategory}>{article.category}</Text>
                <TouchableOpacity style={styles.bookmarkButton}>
                  <Bookmark 
                    size={18} 
                    color={article.bookmarked ? '#2563EB' : '#6B7280'}
                    fill={article.bookmarked ? '#2563EB' : 'none'}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.articleTitle} numberOfLines={2}>
                {article.title}
              </Text>
              <Text style={styles.articleExcerpt} numberOfLines={3}>
                {article.excerpt}
              </Text>
              <View style={styles.articleMeta}>
                <View style={styles.metaItem}>
                  <Clock size={14} color="#6B7280" />
                  <Text style={styles.metaText}>{article.readTime}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Eye size={14} color="#6B7280" />
                  <Text style={styles.metaText}>{article.views}</Text>
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
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
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
  articlesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  articleCard: {
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
  articleImage: {
    width: '100%',
    height: 180,
  },
  articleContent: {
    padding: 16,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  articleCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2563EB',
    textTransform: 'uppercase',
  },
  bookmarkButton: {
    padding: 4,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  articleExcerpt: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  articleMeta: {
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