import React from 'react';
import { useParams, Link } from 'wouter';
import { mockArticles } from '@/data/mockData';
import { ArrowLeft, Clock, User, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function KnowledgeDetail() {
  const { id } = useParams();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link href="/knowledge">
          <Button variant="outline">Return to Knowledge Hub</Button>
        </Link>
      </div>
    );
  }

  // Find related articles (same category, excluding current)
  const relatedArticles = mockArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Parse content to handle paragraphs
  const paragraphs = article.content.split('\n\n');

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link href="/knowledge" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Knowledge Hub
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Main Content */}
        <div className="lg:col-span-2">
          <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 md:p-10">
              <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-none">
                {article.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto text-primary gap-2 h-8">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead text-xl text-foreground font-medium mb-8">
                  {article.summary}
                </p>
                
                {paragraphs.map((p, idx) => {
                  // Simple heuristic: if line starts with a number or bold-like syntax, treat differently
                  if (p.match(/^\d\./)) {
                    const listItems = p.split('\n');
                    return (
                      <ul key={idx} className="space-y-2 my-6">
                        {listItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={idx} className="text-foreground/90 leading-relaxed mb-6">{p}</p>;
                })}
              </div>

              <div className="mt-12 pt-6 border-t border-border flex flex-wrap gap-2">
                <Tag className="h-5 w-5 text-muted-foreground mr-2" />
                {article.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="bg-muted/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-muted/30 rounded-2xl p-6 border border-border sticky top-24">
            <h3 className="font-serif font-bold text-lg mb-4">Related Reading</h3>
            
            {relatedArticles.length > 0 ? (
              <div className="space-y-4">
                {relatedArticles.map(related => (
                  <Link key={related.id} href={`/knowledge/${related.id}`} className="block group">
                    <div className="p-3 bg-card rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                      <h4 className="font-bold text-sm mb-1 group-hover:text-primary leading-snug line-clamp-2">
                        {related.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No related articles found.</p>
            )}

            <div className="mt-8 p-4 bg-primary/10 rounded-xl text-center">
              <h4 className="font-bold mb-2 text-primary">Need More Help?</h4>
              <p className="text-sm text-foreground/80 mb-4">Check your eligibility for schemes related to this topic.</p>
              <Link href="/eligibility">
                <Button size="sm" className="w-full">Check Eligibility</Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
