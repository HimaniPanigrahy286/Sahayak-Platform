import React, { useState } from 'react';
import { mockArticles } from '@/data/mockData';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Search, BookOpen, Clock, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Knowledge() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(mockArticles.map(a => a.category)))].sort();

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-serif font-bold mb-4">Knowledge Hub</h1>
        <p className="text-lg text-muted-foreground">
          Empower yourself with information. Understand your rights, learn about reservations, and discover how to navigate the system.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search articles, guides, rights..." 
            className="pl-10 h-12 text-base rounded-full shadow-sm bg-card"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={`/knowledge/${article.id}`}>
                <Card className="h-full flex flex-col hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6 flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Tag className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground truncate">
                        {article.tags.join(', ')}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
        </div>
      )}
    </div>
  );
}
