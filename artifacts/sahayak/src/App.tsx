import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '@/context/AuthContext';
import { AccessibilityProvider } from '@/context/AccessibilityContext';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AccessibilityToolbar } from '@/components/layout/AccessibilityToolbar';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';

import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import About from '@/pages/About';
import Dashboard from '@/pages/Dashboard';
import Schemes from '@/pages/Schemes';
import SchemeDetail from '@/pages/SchemeDetail';
import Eligibility from '@/pages/Eligibility';
import UDIDGuide from '@/pages/UDIDGuide';
import Knowledge from '@/pages/Knowledge';
import KnowledgeDetail from '@/pages/KnowledgeDetail';
import Updates from '@/pages/Updates';
import Profile from '@/pages/Profile';
import Notifications from '@/pages/Notifications';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Switch>
          {/* Public Routes */}
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />

          {/* Protected Routes */}
          <Route path="/dashboard">
            {() => <ProtectedRoute><Dashboard /></ProtectedRoute>}
          </Route>
          <Route path="/schemes">
            {() => <ProtectedRoute><Schemes /></ProtectedRoute>}
          </Route>
          <Route path="/schemes/:id">
            {() => <ProtectedRoute><SchemeDetail /></ProtectedRoute>}
          </Route>
          <Route path="/eligibility">
            {() => <ProtectedRoute><Eligibility /></ProtectedRoute>}
          </Route>
          <Route path="/udid">
            {() => <ProtectedRoute><UDIDGuide /></ProtectedRoute>}
          </Route>
          <Route path="/knowledge">
            {() => <ProtectedRoute><Knowledge /></ProtectedRoute>}
          </Route>
          <Route path="/knowledge/:id">
            {() => <ProtectedRoute><KnowledgeDetail /></ProtectedRoute>}
          </Route>
          <Route path="/updates">
            {() => <ProtectedRoute><Updates /></ProtectedRoute>}
          </Route>
          <Route path="/profile">
            {() => <ProtectedRoute><Profile /></ProtectedRoute>}
          </Route>
          <Route path="/notifications">
            {() => <ProtectedRoute><Notifications /></ProtectedRoute>}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <AccessibilityToolbar />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <AccessibilityProvider>
          <AuthProvider>
            <TooltipProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
                <Router />
              </WouterRouter>
              <Toaster />
            </TooltipProvider>
          </AuthProvider>
        </AccessibilityProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
