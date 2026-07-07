import React from 'react';
import { mockNotifications } from '@/data/mockData';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function Updates() {
  // Sort notifications by date, newest first
  const sortedUpdates = [...mockNotifications].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getCategoryColor = (cat: string) => {
    switch(cat.toLowerCase()) {
      case 'scholarship': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'announcement': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800';
      case 'employment': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-10 text-center">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Bell className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-serif font-bold mb-4">Latest Government Updates</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay informed about new schemes, deadline extensions, and important announcements.
        </p>
      </div>

      <div className="relative border-l-2 border-muted ml-4 md:ml-8 space-y-8 pb-10">
        {sortedUpdates.map((update, idx) => (
          <motion.div 
            key={update.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-6 md:pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>

            <Card className="hover:shadow-md transition-shadow bg-card border border-border">
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <Badge variant="outline" className={`font-semibold ${getCategoryColor(update.category)}`}>
                    {update.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground font-medium">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {new Date(update.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                  {update.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {update.summary}
                </p>

                <button className="text-sm font-semibold text-primary flex items-center hover:underline">
                  Read Full Detail <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
