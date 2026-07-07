import React, { useState } from 'react';
import { mockNotifications } from '@/data/mockData';
import { Bell, Check, Trash2, MailOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const { toast } = useToast();

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    toast({ title: "Success", description: "All notifications marked as read." });
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-full text-primary">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold">Notifications</h1>
            <p className="text-muted-foreground text-sm">
              You have {unreadCount} unread message{unreadCount !== 1 && 's'}
            </p>
          </div>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={markAllAsRead} className="gap-2">
            <MailOpen className="h-4 w-4" /> Mark all as read
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              layout
            >
              <Card className={`border-l-4 transition-colors ${notification.isRead ? 'border-l-muted bg-card' : 'border-l-primary bg-primary/5'}`}>
                <CardContent className="p-4 sm:p-5 flex gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="bg-background text-xs">
                        {notification.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(notification.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className={`text-base mb-1 ${notification.isRead ? 'font-medium text-foreground/80' : 'font-bold text-foreground'}`}>
                      {notification.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {notification.summary}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2 shrink-0">
                    {!notification.isRead && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:bg-primary/10" onClick={() => markAsRead(notification.id)} title="Mark as read">
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10" onClick={() => deleteNotification(notification.id)} title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {notifications.length === 0 && (
          <div className="text-center py-20 bg-card rounded-xl border border-border">
            <Bell className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground">You're all caught up!</h3>
            <p className="text-muted-foreground">No new notifications at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
