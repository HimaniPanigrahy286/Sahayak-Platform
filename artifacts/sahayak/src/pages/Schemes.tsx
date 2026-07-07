import React, { useState, useMemo } from 'react';
import { mockSchemes } from '@/data/mockData';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Search, Filter, Briefcase, FileText, IndianRupee, MapPin, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Schemes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Debounce search
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Extract unique filters
  const states = useMemo(() => ['All', ...Array.from(new Set(mockSchemes.map(s => s.state)))].sort(), []);
  const categories = useMemo(() => ['All', ...Array.from(new Set(mockSchemes.map(s => s.category)))].sort(), []);

  // Filter schemes
  const filteredSchemes = useMemo(() => {
    return mockSchemes.filter(scheme => {
      const matchesSearch = scheme.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
                            scheme.description.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesState = stateFilter === 'All' || scheme.state === stateFilter || scheme.state === 'All India';
      const matchesCategory = categoryFilter === 'All' || scheme.category === categoryFilter;
      
      return matchesSearch && matchesState && matchesCategory;
    });
  }, [debouncedSearch, stateFilter, categoryFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setDebouncedSearch('');
    setStateFilter('All');
    setCategoryFilter('All');
  };

  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'financial': return <IndianRupee className="h-4 w-4" />;
      case 'employment': return <Briefcase className="h-4 w-4" />;
      case 'scholarship':
      case 'education': return <FileText className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">Government Scheme Explorer</h1>
        <p className="text-muted-foreground">Discover and apply for schemes designed to empower you.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3 border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5" /> Filters
                </CardTitle>
                {(stateFilter !== 'All' || categoryFilter !== 'All' || searchTerm) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 text-xs">
                    <X className="h-3 w-3 mr-1" /> Clear
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Keywords..." 
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">State / Region</label>
                <Select value={stateFilter} onValueChange={setStateFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All States" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-foreground">
              {filteredSchemes.length} {filteredSchemes.length === 1 ? 'Scheme' : 'Schemes'} Found
            </h2>
          </div>

          {filteredSchemes.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {filteredSchemes.map((scheme, idx) => (
                <motion.div
                  key={scheme.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="h-full flex flex-col hover:border-primary/50 hover:shadow-md transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20 font-semibold">
                          {getCategoryIcon(scheme.category)}
                          <span className="ml-1">{scheme.category}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center text-muted-foreground border-border">
                          <MapPin className="h-3 w-3 mr-1" /> {scheme.state}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight line-clamp-2">{scheme.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{scheme.description}</p>
                      
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h4 className="text-xs font-semibold mb-1 uppercase tracking-wider text-foreground">Key Benefit:</h4>
                        <p className="text-sm font-medium line-clamp-1">{scheme.benefits[0]}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 border-t border-border mt-auto p-4">
                      <Link href={`/schemes/${scheme.id}`} className="w-full">
                        <Button className="w-full rounded-lg gap-2" variant="outline">
                          View Details <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-card border border-border rounded-xl border-dashed">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">No schemes found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
