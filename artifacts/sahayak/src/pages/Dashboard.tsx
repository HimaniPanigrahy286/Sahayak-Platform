import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { mockSchemes, mockNotifications } from '@/data/mockData';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  User, 
  Search, 
  ClipboardCheck, 
  IdCard, 
  BookOpen, 
  Bell, 
  Calendar,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export default function Dashboard() {
  const { user } = useAuth();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const quickLinks = [
    { title: "Scheme Explorer", icon: <Search className="h-6 w-6" />, href: "/schemes", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
    { title: "Eligibility Check", icon: <ClipboardCheck className="h-6 w-6" />, href: "/eligibility", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
    { title: "UDID Guide", icon: <IdCard className="h-6 w-6" />, href: "/udid", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
    { title: "Knowledge Hub", icon: <BookOpen className="h-6 w-6" />, href: "/knowledge", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" }
  ];

  // Filter recommendations based on user disability
  const recommendedSchemes = mockSchemes
    .filter(s => s.description.toLowerCase().includes(user?.disabilityType?.toLowerCase() || '') || 
                 s.eligibility.toLowerCase().includes(user?.disabilityType?.toLowerCase() || '') ||
                 s.category === 'Financial' || s.category === 'Scholarship')
    .slice(0, 3);

  const upcomingDeadlines = mockSchemes
    .filter(s => s.deadline)
    .sort((a, b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime())
    .slice(0, 2);

  const recentNotifications = mockNotifications.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <motion.div 
        initial="hidden" 
        animate="show" 
        variants={container}
        className="space-y-8"
      >
        {/* Welcome Section */}
        <motion.div variants={item} className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Welcome back, {user?.name.split(' ')[0]}</h1>
            <p className="text-muted-foreground mt-1">Here is your personalized dashboard for today.</p>
          </div>
          <Link href="/profile">
            <Button variant="outline" className="rounded-full gap-2">
              <User className="h-4 w-4" /> View Profile
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column (Left - 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Access */}
            <motion.section variants={item}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">Quick Access</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} className="block">
                    <Card className="hover:border-primary/50 transition-colors h-full hover:shadow-md cursor-pointer group">
                      <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                        <div className={`p-3 rounded-xl ${link.color} group-hover:scale-110 transition-transform`}>
                          {link.icon}
                        </div>
                        <span className="font-medium text-sm leading-tight">{link.title}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* Recommended Schemes */}
            <motion.section variants={item}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Recommended Schemes For You</h2>
                <Link href="/schemes" className="text-sm font-medium text-primary hover:underline flex items-center">
                  View all <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {recommendedSchemes.map((scheme, idx) => (
                  <Card key={idx} className="flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold px-2 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20">
                          {scheme.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{scheme.state}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight line-clamp-2">{scheme.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-2">{scheme.description}</p>
                    </CardContent>
                    <CardFooter className="pt-0 border-t border-border mt-auto p-4">
                      <Link href={`/schemes/${scheme.id}`} className="w-full">
                        <Button variant="ghost" className="w-full justify-between p-0 h-auto font-semibold hover:bg-transparent hover:text-primary">
                          View Details <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
                {recommendedSchemes.length === 0 && (
                  <div className="col-span-2 text-center py-10 bg-muted/30 rounded-xl border border-border border-dashed">
                    <p className="text-muted-foreground">Update your profile to get personalized recommendations.</p>
                  </div>
                )}
              </div>
            </motion.section>

            {/* Profile Summary */}
            <motion.section variants={item}>
              <Card className="bg-primary/5 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">Profile Summary</CardTitle>
                  <CardDescription>Your current details used for eligibility matching</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="block text-muted-foreground mb-1 text-xs">Disability Type</span>
                      <span className="font-medium">{user?.disabilityType || 'Not set'}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground mb-1 text-xs">UDID Status</span>
                      <span className="font-medium">{user?.hasUdid === 'Yes' ? 'Available' : 'Pending'}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground mb-1 text-xs">State</span>
                      <span className="font-medium">{user?.state || 'Not set'}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground mb-1 text-xs">Income Bracket</span>
                      <span className="font-medium">{user?.annualIncome || 'Not set'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

          </div>

          {/* Sidebar Column (Right - 1 col) */}
          <div className="space-y-8">
            
            {/* Notifications */}
            <motion.section variants={item}>
              <Card>
                <CardHeader className="pb-3 border-b border-border">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bell className="h-5 w-5" /> Recent Updates
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {recentNotifications.map(notification => (
                      <div key={notification.id} className="p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${notification.isRead ? 'text-muted-foreground' : 'text-primary'}`}>
                            {notification.category}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {new Date(notification.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className={`text-sm mb-1 ${notification.isRead ? 'font-medium' : 'font-bold'}`}>
                          {notification.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-3 border-t border-border">
                  <Link href="/notifications" className="w-full">
                    <Button variant="ghost" className="w-full text-sm">View All Notifications</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.section>

            {/* Upcoming Deadlines */}
            <motion.section variants={item}>
              <Card>
                <CardHeader className="pb-3 border-b border-border">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" /> Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  {upcomingDeadlines.length > 0 ? (
                    upcomingDeadlines.map(scheme => (
                      <div key={scheme.id} className="flex gap-4 items-start">
                        <div className="bg-destructive/10 text-destructive p-2 rounded-lg text-center min-w-[3rem]">
                          <span className="block text-xs font-bold uppercase">
                            {new Date(scheme.deadline!).toLocaleString('default', { month: 'short' })}
                          </span>
                          <span className="block text-lg font-black leading-none">
                            {new Date(scheme.deadline!).getDate()}
                          </span>
                        </div>
                        <div>
                          <Link href={`/schemes/${scheme.id}`} className="text-sm font-bold hover:underline line-clamp-2 mb-1">
                            {scheme.name}
                          </Link>
                          <span className="text-xs text-muted-foreground">{scheme.category}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No upcoming deadlines found.</p>
                  )}
                </CardContent>
              </Card>
            </motion.section>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
