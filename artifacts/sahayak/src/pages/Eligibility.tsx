import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { mockSchemes } from '@/data/mockData';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, RefreshCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export default function Eligibility() {
  const { user } = useAuth();
  const [step, setStep] = useState(0); // 0 = Intro, 1 = Q1, ..., 5 = Results
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Use user data as defaults if available
  const [answers, setAnswers] = useState({
    age: user?.age || '',
    state: user?.state || '',
    disabilityType: user?.disabilityType || '',
    employment: user?.employmentStatus || '',
    income: user?.annualIncome || ''
  });

  const updateAnswer = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 5) return; // At results
    if (step === 4) {
      // Simulate processing time
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(5);
      }, 1500);
      return;
    }
    setStep(s => s + 1);
  };

  const resetChecker = () => {
    setStep(0);
  };

  // Mock matching logic
  const getEligibleSchemes = () => {
    return mockSchemes.filter(s => {
      // Simple mock matching based on user inputs
      const stateMatch = s.state === 'All India' || s.state === answers.state;
      const descMatch = s.description.toLowerCase().includes(answers.disabilityType.toLowerCase()) || 
                        s.category === 'Financial' || 
                        s.category === 'Healthcare';
      return stateMatch && descMatch;
    }).slice(0, 5); // Limit to top 5
  };

  const eligibleSchemes = getEligibleSchemes();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl min-h-[calc(100vh-16rem)] flex flex-col">
      
      {/* Intro Step */}
      {step === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center my-auto flex-1 flex flex-col justify-center items-center"
        >
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
            <Sparkles className="h-10 w-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Discover Your Eligibility</h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8">
            Answer 5 simple questions, and our intelligent engine will match you with government schemes you qualify for immediately.
          </p>
          <Button size="lg" onClick={() => setStep(1)} className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20">
            Start Eligibility Check <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      )}

      {/* Processing State */}
      {isProcessing && (
        <div className="text-center my-auto flex-1 flex flex-col justify-center items-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-muted rounded-full"></div>
            <div className="w-20 h-20 border-4 border-primary rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Analyzing your profile</h2>
            <p className="text-muted-foreground">Scanning through 100+ national and state schemes...</p>
          </div>
        </div>
      )}

      {/* Questions Steps */}
      {step > 0 && step < 5 && !isProcessing && (
        <div className="w-full max-w-xl mx-auto mt-10">
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Step {step} of 4</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-primary' : i < step ? 'w-2 bg-primary/40' : 'w-2 bg-muted'}`} />
              ))}
            </div>
          </div>

          <Card className="border-border shadow-md">
            <CardContent className="p-6 md:p-8 min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {step === 1 && (
                  <motion.div key="q1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold">What is your age and location?</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Age</Label>
                        <Input type="number" placeholder="Enter age" value={answers.age} onChange={e => updateAnswer('age', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label>State</Label>
                        <Select value={answers.state} onValueChange={v => updateAnswer('state', v)}>
                          <SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Delhi">Delhi</SelectItem>
                            <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="Karnataka">Karnataka</SelectItem>
                            <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                            <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="q2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold">What is your primary disability type?</h2>
                    <Select value={answers.disabilityType} onValueChange={v => updateAnswer('disabilityType', v)}>
                      <SelectTrigger className="h-14 text-base"><SelectValue placeholder="Select Disability Type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Locomotor">Locomotor Disability</SelectItem>
                        <SelectItem value="Visual">Visual Impairment</SelectItem>
                        <SelectItem value="Hearing">Hearing Impairment</SelectItem>
                        <SelectItem value="Intellectual">Intellectual Disability</SelectItem>
                        <SelectItem value="Multiple">Multiple Disabilities</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="q3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold">What is your current employment status?</h2>
                    <Select value={answers.employment} onValueChange={v => updateAnswer('employment', v)}>
                      <SelectTrigger className="h-14 text-base"><SelectValue placeholder="Select Status" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Employed">Employed / Working</SelectItem>
                        <SelectItem value="Self-employed">Self-employed</SelectItem>
                        <SelectItem value="Unemployed">Unemployed</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="q4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold">What is your annual family income?</h2>
                    <p className="text-muted-foreground">Many government schemes have income-based criteria.</p>
                    <Select value={answers.income} onValueChange={v => updateAnswer('income', v)}>
                      <SelectTrigger className="h-14 text-base"><SelectValue placeholder="Select Income Range" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Below 1L">Below ₹1 Lakh</SelectItem>
                        <SelectItem value="1-3L">₹1 Lakh - ₹3 Lakhs</SelectItem>
                        <SelectItem value="3-5L">₹3 Lakhs - ₹5 Lakhs</SelectItem>
                        <SelectItem value="Above 5L">Above ₹5 Lakhs</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}

              </AnimatePresence>
            </CardContent>
            <CardFooter className="p-6 md:p-8 pt-0 border-t border-border mt-auto flex justify-between bg-muted/20">
              <Button variant="ghost" onClick={() => setStep(s => s - 1)}>Back</Button>
              <Button onClick={handleNext} size="lg" className="rounded-full px-8 shadow-md">
                {step === 4 ? 'See Results' : 'Continue'} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Results Step */}
      {step === 5 && !isProcessing && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-serif font-bold mb-2">Great news!</h1>
            <p className="text-lg text-muted-foreground">You are eligible for {eligibleSchemes.length} schemes based on your profile.</p>
          </div>

          <div className="space-y-4 mb-10">
            {eligibleSchemes.map((scheme, idx) => (
              <motion.div 
                key={scheme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:border-primary/50 transition-colors shadow-sm">
                  <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20">
                          {scheme.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{scheme.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{scheme.description}</p>
                    </div>
                    <Link href={`/schemes/${scheme.id}`} className="shrink-0 w-full sm:w-auto">
                      <Button className="w-full">Apply Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" onClick={resetChecker} className="gap-2">
              <RefreshCcw className="h-4 w-4" /> Start Over
            </Button>
          </div>
        </motion.div>
      )}

    </div>
  );
}
